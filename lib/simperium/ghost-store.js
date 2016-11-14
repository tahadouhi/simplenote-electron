const CURRENT_VERSION = 200;

window.indexedDB.onerror = e => console.log("Some kind of error", e);

const setup = new Promise( ( resolve, reject ) => {
	const open = window.indexedDB.open( 'ghost', CURRENT_VERSION );

	open.onupgradeneeded = ( { target: { result: db } } ) => {
		const stores = db.objectStoreNames;

		if ( stores.contains( 'cv' ) ) {
			db.deleteObjectStore( 'cv' );
		}

		const cv = db.createObjectStore( 'cv', { keyPath: 'bucket' } );
		cv.createIndex( 'bucket', 'bucket', { unique: true } );

		if ( stores.contains( 'ghosts' ) ) {
			db.deleteObjectStore( 'ghosts' )
		}

		const ghosts = db.createObjectStore( 'ghosts', { keyPath: 'full_key' } );
		ghosts.createIndex( 'bucket', 'bucket' );
		ghosts.createIndex( 'full_key', 'full_key', { unique: true } );
	};

	open.onsuccess = ( { target: { result } } ) => resolve( result );
	open.onerror = ( { target: { error } } ) => reject( error );
} ).catch( console.log );

export const reset = () => setup.then( db => Promise.all(
	Array.prototype.map.call( db.objectStoreNames, name =>
		new Promise( (resolve, reject) => {
			const  request = db
				.transaction( name, 'readwrite' )
				.objectStore( name )
				.clear();

			request.onsuccess = () => resolve(name);
			request.onerror = e => reject(e);
		} )
	)
) );

export class GhostStore {
	constructor( bucket ) {
		this.bucket = bucket;
	}

	getChangeVersion = () => new Promise( resolve => (
		setup.then( db => db
			.transaction( 'cv' )
			.objectStore( 'cv' )
			.get( this.bucket.name )
			.onsuccess = ( { target: { result: record } } ) =>
				resolve( record ? record.cv : null )
		)
	) );

	setChangeVersion = cv => new Promise( resolve => (
		setup.then( db => db
			.transaction( 'cv', 'readwrite' )
			.objectStore( 'cv' )
			.put( { bucket: this.bucket.name, cv } )
			.onsuccess = resolve
		)
	) );

	eachGhost = onGhost => setup
		.then( db => db
				.transaction( 'ghosts' )
				.objectStore( 'ghosts' )
				.index( 'bucket' )
				.openCursor( IDBKeyRange.only( this.bucket.name ) )
				.onsuccess = ( { target: { result: cursor } } ) => {
				if ( ! cursor ) {
					return;
				}

				onGhost( cursor.value );
				cursor.continue();
			}
		)
		.catch( () => console.log( 'Failed!' ) );

	get = id => new Promise( ( resolve, reject ) => (
		setup.then( db => {
			const request = db
				.transaction( 'ghosts' )
				.objectStore( 'ghosts' )
				.get( `${ this.bucket.name }.${ id }` );

			request.onsuccess = ( { target: { result } } ) =>
				resolve( result ? result : { key: id, data: {} } );

			request.onerror = e => {
				const error = new Error(
					`failed to get ghost ${ this.bucket.name }.${ id }`
				);

				error.objectStoreEvent = e;

				reject( error );
			}
		} )
	) );

	put = ( id, version, data ) => new Promise( resolve => (
		setup.then( db => db
			.transaction( [ 'ghosts' ], 'readwrite' )
			.objectStore( 'ghosts' )
			.put( {
				bucket: this.bucket.name,
				key: id,
				full_key: `${ this.bucket.name }.${ id }`,
				data,
				version,
			} )
			.onsuccess = ( { target: { result } } ) => resolve( result )
		)
	) );

	remove = id => new Promise( ( resolve, reject ) => (
		setup.then( db => {
			const request = db
				.transaction( 'ghosts', 'readwrite' )
				.objectStore( 'ghosts' )
				.delete( `${ this.bucket.name }.${ id }` );

			request.onsuccess = resolve;
			request.onerror = () => reject( new Error(
				`Failed to delete ghost ${ this.bucket.name }.${ id }`
			) );
		} )
	) );
}

export default bucket => new GhostStore( bucket );
