/**
 * External dependencies
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import moment from 'moment';
import listensToClickOutside from 'react-onclickoutside/decorator';

/**
 * Internal dependencies
 */
import appState from './flux/app-state';
import { setMarkdown } from './state/settings/actions';
import filterNotes from './utils/filter-notes';
import CrossIcon from './icons/cross';
import ToggleControl from './controls/toggle';

const {
	markdownNote,
	pinNote,
	toggleNoteInfo,
} = appState.actionCreators;

export class NoteInfo extends Component {

	static propTypes = {
		isMarkdown: PropTypes.bool,
		isPinned: PropTypes.bool,
		isPublished: PropTypes.bool,
		note: PropTypes.object.isRequired,
		onMarkdownNote: PropTypes.func.isRequired,
		onOutsideClick: PropTypes.func.isRequired,
		onPinNote: PropTypes.func.isRequired,
	};

	handleClickOutside = () => {
		this.props.onOutsideClick();
	}

	onMarkdownChanged = event => {
		const { note, onMarkdownNote } = this.props;
		onMarkdownNote( note, event.currentTarget.checked );
	}

	onPinChanged = event => {
		const { note, onPinNote } = this.props;
		onPinNote( note, event.currentTarget.checked );
	}

	copyPublishUrl() {
		this.publishUrlElement.select();
		try {
			document.execCommand( 'copy' );
		} catch ( err ) {
			return;
		}
		this.copyUrlElement.focus();
	}

	getPublishUrl( url ) {
		return isEmpty( url ) ? null : `http://simp.ly/p/${ url }`;
	}

	// https://github.com/RadLikeWhoa/Countable
	contentWordCount() {
		const matches = this.props.note.data.content
			.replace( /[\u200B]+/, '' )
			.trim()
			.replace( /['";:,.?¿\-!¡]+/g, '' )
			.match( /\S+/g );

		return ( matches || [] ).length;
	}

	// https://mathiasbynens.be/notes/javascript-unicode
	contentCharacterCount() {
		const surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
		return this.props.note.data.content
			// replace every surrogate pair with a BMP symbol
			.replace( surrogatePairs, '_' )
			// then get the length
			.length;
	}

	render() {
		const {
			note: {
				data: {
					modificationDate,
					publishUrl: url,
				},
			},
			isMarkdown,
			isPinned,
			isPublished,
		} = this.props;
		const formattedDate = moment.unix( modificationDate ).format( 'MMM D, YYYY h:mm a' );
		const publishUrl = this.getPublishUrl( url );

		return (
			<div className="note-info theme-color-bg theme-color-fg theme-color-border">
				<div className="note-info-panel note-info-stats theme-color-border">
					<div className="note-info-header">
						<h2 className="panel-title theme-color-fg-dim">
							Info
						</h2>
						<button
							className="about-done button button-borderless"
							onClick={ this.handleClickOutside }
							type="button"
						>
							<CrossIcon />
						</button>
					</div>
					{ formattedDate &&
						<p className="note-info-item">
							<span className="note-info-item-text">
								<span className="note-info-name">
									Modified
								</span>
								<br />
								<span className="note-info-detail">
									{ formattedDate }
								</span>
							</span>
						</p>
					}
					<p className="note-info-item">
						<span className="note-info-item-text">
							<span className="note-info-name">
								{ this.contentWordCount() } words
							</span>
						</span>
					</p>
					<p className="note-info-item">
						<span className="note-info-item-text">
							<span className="note-info-name">
								{ this.contentCharacterCount() } characters
							</span>
						</span>
					</p>
				</div>
				<div className="note-info-panel note-info-pin theme-color-border">
					<label className="note-info-item" htmlFor="note-info-pin-checkbox">
						<span className="note-info-item-text">
							<span className="note-info-name">
								Pin to top
							</span>
						</span>
						<span className="note-info-item-control">
							<ToggleControl
								checked={ isPinned }
								id="note-info-pin-checkbox"
								onChange={ this.onPinChanged }
							/>
						</span>
					</label>
				</div>
				<div className="note-info-panel note-info-markdown theme-color-border">
					<label className="note-info-item" htmlFor="note-info-markdown-checkbox">
						<span className="note-info-item-text">
							<span className="note-info-name">
								Markdown
							</span>
							<br />
							<span className="note-info-detail">
								Enable markdown formatting on this note.
								<a href="http://simplenote.com/help/#markdown" target="_blank">
									Learn more…
								</a>
							</span>
						</span>
						<span className="note-info-item-control">
							<ToggleControl
								checked={ isMarkdown }
								id="note-info-markdown-checkbox"
								onChange={ this.onMarkdownChanged }
							/>
						</span>
					</label>
				</div>
				{ isPublished &&
					<div className="note-info-panel note-info-public-link theme-color-border">
						<span className="note-info-item-text">
							<span className="note-info-name">
								Public link
							</span>
							<div className="note-info-form">
								<input
									className="note-info-detail note-info-link-text"
									ref={ e => this.publishUrlElement = e }
									value={ publishUrl }
								/>
								<button
									className="button button-borderless note-info-copy-button"
									onClick={ this.copyPublishUrl }
									ref={ e => this.copyUrlElement = e }
									type="button"
								>
									Copy
								</button>
							</div>
						</span>
					</div>
				}
			</div>
		);
	}

}

const mapStateToProps = ( { appState: state } ) => {
	const filteredNotes = filterNotes( state );
	const noteIndex = Math.max( state.previousIndex, 0 );
	const note = state.note ? state.note : filteredNotes[ noteIndex ];
	const { systemTags } = note.data;
	return {
		isMarkdown: systemTags.includes( 'markdown' ),
		isPinned: systemTags.includes( 'pinned' ),
		isPublished: systemTags.includes( 'published' ),
		note,
	};
};

const mapDispatchToProps = ( dispatch, { noteBucket } ) => ( {
	onMarkdownNote: ( note, markdown = true ) => {
		dispatch( markdownNote( { markdown, note, noteBucket } ) );
		// Update global setting to set markdown flag for new notes
		dispatch( setMarkdown( markdown ) );
	},
	onOutsideClick: () => dispatch( toggleNoteInfo() ),
	onPinNote: ( note, pin ) => dispatch( pinNote( { noteBucket, note, pin } ) ),
} );

export default connect( mapStateToProps, mapDispatchToProps )(
	listensToClickOutside( NoteInfo )
);
