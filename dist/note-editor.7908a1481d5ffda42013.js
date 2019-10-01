(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1181:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(1),i=n.n(a),s=n(11),c=n(12),u=n(1175),l=n(84),f=n(126),d=n(76),p=n.n(d),h=function(e){var t=e.openShareDialog;return r.a.createElement("div",{className:"tag-email-tooltip"},r.a.createElement("div",{className:"tag-email-tooltip__arrow"}),r.a.createElement("div",{className:"tag-email-tooltip__inside"},"Collaboration has moved. Press the Share icon in the toolbar to access the ",r.a.createElement("a",{href:"#",onClick:t},"Collaborate screen"),"."))};h.propTypes={openShareDialog:i.a.func.isRequired};var g=Object(s.b)(null,function(e){return{openShareDialog:function(){return e(c.a.actionCreators.showDialog({dialog:p.a.SHARE}))}}})(h),m=n(6),v=n.n(m),b=n(2),y=function(e){var t=e.onSelect,n=void 0===t?b.noop:t,o=e.selected,a=e.tag;return r.a.createElement("div",{className:v()("tag-chip",{selected:o}),"data-tag-name":a,onClick:n},a)};y.displayName="TagChip",y.propTypes={onSelect:i.a.func,selected:i.a.bool,tag:i.a.string.isRequired};var S=y;function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=9,x=13,N=39,j=function(e){return function(t){return t.trim().toLowerCase().startsWith(e.trim().toLowerCase())}},R=function(e){function t(){var e,n,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return o=this,r=(e=C(t)).call.apply(e,[this].concat(i)),n=!r||"object"!==w(r)&&"function"!=typeof r?k(o):r,T(k(n),"state",{isComposing:!1}),T(k(n),"completeSuggestion",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b.identity,t=n.props,o=t.onChange,r=t.tagNames,a=t.value;if(a.length){var i=r.find(j(a));i&&o(i,function(){e(i),n.focusInput()})}}),T(k(n),"focusInput",function(){if(n.inputField){var e=n.inputField;e.focus();var t=document.createRange();t.selectNodeContents(e),t.collapse(!1);var o=window.getSelection();o.removeAllRanges(),o.addRange(t)}}),T(k(n),"hasFocus",function(){return document.activeElement===n.inputField}),T(k(n),"interceptKeys",function(e){var t;return Object(b.invoke)((T(t={},x,n.submitTag),T(t,F,n.interceptTabPress),T(t,N,n.interceptRightArrow),t),e.keyCode,e)}),T(k(n),"interceptRightArrow",function(e){var t=n.props.value;window.getSelection().getRangeAt(0).endOffset===t.length&&(n.completeSuggestion(),e.preventDefault(),e.stopPropagation())}),T(k(n),"interceptTabPress",function(e){n.completeSuggestion(n.submitTag),e.preventDefault(),e.stopPropagation()}),T(k(n),"onInputMutation",function(e){e.forEach(function(e){var t=Object(b.get)(e,"target.data","");"childList"===e.type&&e.addedNodes.length&&(t=Object(b.get)(e,"target.innerText","")),n.onInput(t)})}),T(k(n),"onInput",function(e){n.state.isComposing||(e.endsWith(",")&&e.trim().length?n.props.onSelect(e.slice(0,-1).trim()):n.props.onChange(e.trim(),n.focusInput))}),T(k(n),"onCompositionEnd",function(e){var t=e.target.textContent;n.setState({isComposing:!1},function(){return n.onInput(t)})}),T(k(n),"removePastedFormatting",function(e){var t;Object(b.get)(e,"clipboardData.getData")?t=e.clipboardData.getData("text/plain"):Object(b.get)(window,"clipboardData.getData")&&(t=window.clipboardData.getData("Text")),n.onInput(t),e.preventDefault(),e.stopPropagation()}),T(k(n),"storeInput",function(e){n.inputField=e,n.props.inputRef(e),Object(b.invoke)(k(n),"inputField.addEventListener","paste",n.removePastedFormatting,!1)}),T(k(n),"submitTag",function(e){var t=n.props,o=t.onSelect,r=t.value;r.trim().length&&o(r.trim()),Object(b.invoke)(e,"preventDefault"),Object(b.invoke)(e,"stopPropagation")}),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,o["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){this.props.storeFocusInput(this.focusInput),this.props.storeHasFocus(this.hasFocus),this.inputObserver=new MutationObserver(this.onInputMutation),this.inputObserver.observe(this.inputField,{characterData:!0,childList:!0,subtree:!0})}},{key:"componentWillUnmount",value:function(){Object(b.invoke)(this,"inputField.removeEventListener","paste",this.removePastedFormatting,!1),this.inputObserver.disconnect()}},{key:"render",value:function(){var e=this,t=this.props,n=t.value,o=t.tagNames,a=n.length&&o.find(j(n)),i=""===n&&!this.state.isComposing;return r.a.createElement("div",{className:"tag-input",onClick:this.focusInput},i&&r.a.createElement("span",{"aria-hidden":!0,className:"tag-input__placeholder"},"Add a tag…"),r.a.createElement("div",{"aria-label":"Add a tag…",ref:this.storeInput,className:"tag-input__entry",contentEditable:"true",onCompositionStart:function(){return e.setState({isComposing:!0})},onCompositionEnd:this.onCompositionEnd,onKeyDown:this.interceptKeys,spellCheck:!1,suppressContentEditableWarning:!0},n),r.a.createElement("div",{className:"tag-input__suggestion",disabled:!0,type:"text"},a?a.substring(n.length):""))}}])&&E(n.prototype,a),i&&E(n,i),t}();T(R,"displayName","TagInput"),T(R,"propTypes",{inputRef:i.a.func,onChange:i.a.func,onSelect:i.a.func,storeFocusInput:i.a.func,storeHasFocus:i.a.func,tagNames:i.a.arrayOf(i.a.string).isRequired,value:i.a.string.isRequired}),T(R,"defaultProps",{inputRef:b.identity,onChange:b.identity,onSelect:b.identity,storeFocusInput:b.noop,storeHasFocus:b.noop});var P=R,_=n(15),I=n.n(_);function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L=function(e){function t(){var e,n,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return o=this,r=(e=M(t)).call.apply(e,[this].concat(i)),n=!r||"object"!==D(r)&&"function"!=typeof r?A(o):r,q(A(n),"state",{selectedTag:"",tagInput:""}),q(A(n),"addTag",function(e){var t=n.props,o=t.allTags,r=t.tags,a=e.trim().replace(/\s+/g,",").split(",");a.some(l.a)&&n.showEmailTooltip();var i=Object(b.union)(r,Object(b.intersectionBy)(o,a,function(e){return e.toLocaleLowerCase()}),Object(b.differenceBy)(a,o,function(e){return e.toLocaleLowerCase()}));n.updateTags(i),n.storeTagInput(""),Object(b.invoke)(A(n),"tagInput.focus"),I.a.tracks.recordEvent("editor_tag_added")}),q(A(n),"hasSelection",function(){return n.state.selectedTag&&!!n.state.selectedTag.length}),q(A(n),"deleteTag",function(e){var t=n.props.tags,o=n.state.selectedTag;n.updateTags(Object(b.differenceBy)(t,[e],function(e){return e.toLocaleLowerCase()})),o===e&&n.setState({selectedTag:""},function(){Object(b.invoke)(A(n),"tagInput.focus")}),I.a.tracks.recordEvent("editor_tag_removed")}),q(A(n),"deleteSelection",function(){n.hasSelection()&&n.deleteTag(n.state.selectedTag)}),q(A(n),"hideEmailTooltip",function(){return n.setState({showEmailTooltip:!1})}),q(A(n),"hasFocus",function(){return n.inputHasFocus&&n.inputHasFocus()}),q(A(n),"focusTagField",function(){return n.focusInput&&n.focusInput()}),q(A(n),"interceptKeys",function(e){8===e.which&&(n.hasSelection()&&n.deleteSelection(),""===n.state.tagInput&&(n.selectLastTag(),e.preventDefault()))}),q(A(n),"updateTags",function(e){return n.props.updateNoteTags({note:n.props.note,tags:e})}),q(A(n),"selectLastTag",function(){return n.setState({selectedTag:n.props.tags.slice(-1).shift()})}),q(A(n),"selectTag",function(e){var t=e.target.dataset.tagName;e.preventDefault(),e.stopPropagation(),n.deleteTag(t)}),q(A(n),"showEmailTooltip",function(){n.setState({showEmailTooltip:!0}),setTimeout(function(){return n.setState({showEmailTooltip:!1})},5e3)}),q(A(n),"onKeyDown",function(e){return n.state.showEmailTooltip&&n.hideEmailTooltip(),n.interceptKeys(e)}),q(A(n),"storeFocusInput",function(e){return n.focusInput=e}),q(A(n),"storeHasFocus",function(e){return n.inputHasFocus=e}),q(A(n),"storeHiddenTag",function(e){return n.hiddenTag=e}),q(A(n),"storeInputRef",function(e){return n.tagInput=e}),q(A(n),"storeTagInput",function(e,t){return n.setState({tagInput:e},t)}),q(A(n),"unselect",function(e){n.state.selectedTag&&n.hiddenTag!==e.relatedTarget&&n.setState({selectedTag:""})}),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(t,o["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){this.props.storeFocusTagField(this.focusTagField),this.props.storeHasFocus(this.hasFocus),document.addEventListener("click",this.unselect,!0)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.unselect,!0)}},{key:"componentDidUpdate",value:function(){this.hasSelection()&&this.hiddenTag.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.allTags,o=t.tags,a=this.state,i=a.selectedTag,s=a.showEmailTooltip,c=a.tagInput;return r.a.createElement("div",{className:"tag-field"},r.a.createElement("div",{className:v()("tag-editor",{"has-selection":this.hasSelection()}),tabIndex:"-1",onKeyDown:this.onKeyDown},r.a.createElement("input",{className:"hidden-tag",tabIndex:"-1",ref:this.storeHiddenTag}),o.filter(Object(b.negate)(l.a)).map(function(t){return r.a.createElement(S,{key:t,tag:t,selected:t===i,onSelect:e.selectTag})}),r.a.createElement(P,{allTags:n,inputRef:this.storeInputRef,value:c,onChange:this.storeTagInput,onSelect:this.addTag,storeFocusInput:this.storeFocusInput,storeHasFocus:this.storeHasFocus,tagNames:Object(b.differenceBy)(n,o,function(e){return e.toLocaleLowerCase()})}),r.a.createElement(u.a,{container:this,onHide:this.hideEmailTooltip,placement:"top",rootClose:!0,shouldUpdatePosition:!0,show:s,target:this.tagInput},function(){return r.a.createElement(g,{note:e.props.note})})))}}])&&H(n.prototype,a),i&&H(n,i),t}();q(L,"displayName","TagField"),q(L,"propTypes",{allTags:i.a.array.isRequired,note:i.a.object.isRequired,storeFocusTagField:i.a.func,storeHasFocus:i.a.func,tags:i.a.array.isRequired,unusedTags:i.a.arrayOf(i.a.string),updateNoteTags:i.a.func.isRequired,usedTags:i.a.arrayOf(i.a.string)}),q(L,"defaultProps",{storeFocusTagField:b.noop,storeHasFocus:b.noop,tags:[]});var B=Object(s.b)(null,{updateNoteTags:f.a})(L),W=n(51),U=n(618),z=n(943),V=n.n(z);function X(e){return e.getCurrentContent().getPlainText("\n")}function J(e){var t=e.getSelection().focusKey;return e.getCurrentContent().getBlockForKey(t)}var $=function(e){return Object(b.includes)(["-","*","+","- [ ]","- [x]"],e.trim())};function G(e,t){var n=U.EditorState.push(e,U.Modifier.splitBlock(e.getCurrentContent(),e.getSelection()),"split-block"),o=U.EditorState.push(n,U.Modifier.insertText(n.getCurrentContent(),n.getCurrentContent().getSelectionAfter(),t),"insert-characters");return U.EditorState.forceSelection(o,o.getCurrentContent().getSelectionAfter())}var Q=n(50),Y=n(744),Z=n.n(Y),ee=function(e){var t=e.children,n=e.className;return r.a.createElement("span",{className:n},t)};ee.propTypes={className:i.a.string.isRequired};var te=ee;function ne(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],o=!0,r=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(o=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{o||null==s.return||s.return()}finally{if(r)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var oe=function(e){return function(t,n){var o=t.getText();e&&o&&function(e,t){for(var n,o=[];null!==(n=t.exec(e));)o.push([n.index,t.lastIndex]);return o}(o,e).forEach(function(e){return function(t){var n=ne(t,2),o=n[0],r=n[1];return e(o,r,{className:"search-match"})}}(n))}},re=function(e){return e?new Z.a(oe(e),te):null},ae=n(683),ie=n(227),se=n(944),ce=n.n(se),ue=n(945),le=n.n(ue),fe={type:"output",regex:'<input type="checkbox" disabled',replace:'<input type="checkbox" '},de=function(e){return n.e(8).then(n.t.bind(null,1179,7)).then(function(t){var n=t.default;n.extension("enableCheckboxes",fe);var o=new n.Converter({extensions:["enableCheckboxes"]});return o.setFlavor("github"),o.setOption("simpleLineBreaks",!1),o.setOption("ghMentions",!1),function(e){for(var t=(new DOMParser).parseFromString(e,"text/html"),n=t.createTreeWalker(t.body,NodeFilter.SHOW_ALL,null,!1),o=[],r=[],a=function(){var e=n.currentNode;if(function(e){switch(e.nodeName.toLowerCase()){case"head":case"html":case"iframe":case"link":case"meta":case"object":case"script":case"style":return!0;default:return!1}}(e))return r.push(e),"continue";if(!function(e){var t=e.nodeName.toLowerCase();if("input"===t)return"checkbox"===e.getAttribute("type");switch(t){case"#text":case"a":case"article":case"b":case"br":case"blockquote":case"cite":case"code":case"dd":case"del":case"div":case"dt":case"em":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"hr":case"i":case"img":case"ins":case"kbd":case"li":case"ol":case"p":case"pre":case"s":case"span":case"strong":case"sub":case"sup":case"table":case"tbody":case"td":case"th":case"thead":case"tr":case"tt":case"ul":return!0;default:return!1}}(e))return o.push(e),"continue";var t=e.nodeName.toLowerCase();Object(b.filter)(e.attributes,function(e){var n=e.name,o=e.value;return!function(e,t,n){switch(e){case"a":switch(t){case"href":return!n.toLowerCase().trim().startsWith("javascript");case"alt":case"rel":case"title":return!0;default:return!1}case"img":switch(t){case"alt":case"src":case"title":return!0;default:return!1}case"input":switch(t){case"disabled":case"checked":case"type":return!0;default:return!1}case"li":switch(t){case"class":switch(n){case"task-list-item":return!0;default:return!1}default:return!1}default:return!1}}(t,n,o)&&(("href"!==n&&"src"!==n||!le.a.isWebUri(o))&&("href"!==n||!o.startsWith("mailto:")||!ce.a.validate(o.slice(7))))}).forEach(function(t){var n=t.name;return e.removeAttribute(n)});var a="a"===t&&e.getAttribute("href");"a"!==t||"string"!=typeof a||a.startsWith("mailto:")||(e.setAttribute("target","_blank"),e.setAttribute("rel","external noopener noreferrer")),"li"===t&&"task-list-item"===e.getAttribute("class")&&e.setAttribute("style","list-style: none;")};n.nextNode();)a();return r.forEach(function(e){try{e.parentNode.removeChild(e)}catch(e){}}),o.forEach(function(e){var t,n=e.parentNode;try{for(;t=e.firstChild;)n.insertBefore(t,e);n.removeChild(e)}catch(e){}}),t.body.innerHTML}(o.makeHtml(e))})},pe=n(595),he=function(e){var t=e.text,n=e.taskNodeIndex,o=function(e){var t={text:"",ids:[]};return t.text=e.replace(pe.c,function(e){var n=Object(ie.a)(8);return t.ids.push(n),e.replace(pe.c,"$1"+"- [ ] ".concat(n))}),t}(t),r=o.text,a=o.ids;return de(r).then(function(e){var t=function(e){var t=e.html,n=e.taskNodeIndex,o=(new DOMParser).parseFromString(t,"text/html").querySelectorAll(pe.a.taskNode);return Array.from(o)[n].textContent.trim()}({html:e,taskNodeIndex:n});return a.indexOf(t)})},ge=function(e){var t=/- \[[xX]\]/;return t.test(e)?e.replace(t,"- [ ]"):e.replace(/- \[\s?\]/,"- [x]")},me=function(e){var t=e.text,n=e.index,o=0;return t.replace(pe.c,function(e){return o++===n?ge(e):e})},ve=function(e){var t=e.taskNode,n=e.text,o=t.ownerDocument.querySelectorAll("".concat(pe.a.markdownRoot," ").concat(pe.a.taskNode)),r=n.match(pe.c).length!==o.length,a=Array.from(o).indexOf(t);return r?he({text:n,taskNodeIndex:a}).then(function(e){return me({text:n,index:e})}):Promise.resolve(me({text:n,index:a}))},be=function(e){return new Z.a(function(t,n){for(var o,r=t.getText(),a=function(){var r=o[1],a=o[2],i=o.index+Object(b.get)(r,"length",0),s=i+a.length,c=/[xX]/.test(a),u=U.SelectionState.createEmpty(t.getKey()).merge({anchorOffset:i,focusOffset:s}),l=ge(a);n(i,s,{checked:c,onChange:function(){return e(u,l)}})};null!==(o=pe.c.exec(r));)a()},ae.a)},ye=function(e,t){return Object(b.get)(e.getCurrentContent().getBlockForKey(t),"text",null)},Se=function(e,t){var n=J(e),o=n.text,r=ye(t,n.getKey());if(!(o!==r)||""===o)return!1;var a=Object(b.includes)(["backspace-character","remove-range"],e.getLastChangeType()),i=pe.c.test(r)&&!o.match(pe.c);return a&&i},we=function(e,t){var n=J(e),o=n.text,r=ye(t,n.getKey())[e.getSelection().focusOffset];if(!/[ \]]/.test(r))return U.Modifier.insertText(e.getCurrentContent(),e.getSelection()," ");var a=Object(b.get)(o.match("-"),"index",0);return U.Modifier.removeRange(e.getCurrentContent(),e.getSelection().merge({anchorOffset:a}),"backward")};function Ee(e){for(var t=e.getCurrentContent(),n=e.getSelection(),o=n.getStartKey(),r=n.getEndKey(),a=t;o&&(a=Ce(o,a),o!==r);)o=t.getKeyAfter(o);var i=U.EditorState.push(e,a,"insert-characters"),s=function(e,t,n){var o=Object(b.get)(e.focusKey,"key",e.focusKey),r=function(e){return e.getBlockForKey(o).getText().length},a=r(n)-r(t),i=e.focusOffset+a;return U.SelectionState.createEmpty(o).merge({anchorOffset:i,focusOffset:i})}(n,t,a);return U.EditorState.forceSelection(i,s)}function Ce(e,t){var n=t.getBlockForKey(e).getText();pe.c.lastIndex=0;var o,r=pe.c.exec(n);if(r){var a=r[1],i=r[2],s=r[3].match(/^\s*/)[0].length,c=a.length,u=U.SelectionState.createEmpty(e).merge({anchorOffset:c,focusOffset:c+i.length+s});o=U.Modifier.removeRange(t,u,"backward")}else{var l=n.match(/^\s*/)[0].length,f=U.SelectionState.createEmpty(e).merge({anchorOffset:l,focusOffset:l});o=U.Modifier.insertText(t,f,"- [ ] ")}return o}var ke=n(230);function Oe(e){return(Oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Te(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Fe(e){return(Fe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function xe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ne(e,t){return(Ne=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function je(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Re="\n",Pe=function(e){function t(){var e,n,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return o=this,r=(e=Fe(t)).call.apply(e,[this].concat(i)),n=!r||"object"!==Oe(r)&&"function"!=typeof r?xe(o):r,je(xe(n),"ipc",Object(ke.a)()),je(xe(n),"replaceRangeWithText",function(e,t){var o=n.state.editorState,r=U.Modifier.replaceText(o.getCurrentContent(),e,t);n.handleEditorStateChange(U.EditorState.push(o,r,"replace-text"))}),je(xe(n),"generateDecorators",function(e){return new V.a(Object(b.compact)([Object(Q.b)(e)&&re(Object(Q.c)(e)),be(n.replaceRangeWithText)]))}),je(xe(n),"createNewEditorState",function(e,t){var o=U.EditorState.createWithContent(U.ContentState.createFromText(e,Re),n.generateDecorators(t));return""===e&&""===t?U.EditorState.moveFocusToEnd(o):o}),je(xe(n),"state",{editorState:n.createNewEditorState(n.props.content.text,n.props.filter)}),je(xe(n),"editorKey",0),je(xe(n),"handleEditorStateChange",function(e){var t=n.state.editorState;if(e!==t){var o=e;if(Se(e,t)){var r=we(e,t);o=U.EditorState.push(e,r,"remove-range")}var a=X(o),i=X(t),s=a!==i?function(){return n.props.onChangeContent(a)}:b.noop;n.setState({editorState:o},s)}}),je(xe(n),"reflectChangesFromReceivedContent",function(e,t){var o=U.EditorState.push(e,U.ContentState.createFromText(t,Re),"replace-text");if(e.getSelection().getHasFocus()){var r=function(e,t){for(var n,o,r=e.getSelection().anchorKey,a=e.getSelection().focusKey,i=e.getCurrentContent().getBlocksAsArray(),s=0;s<i.length;s++)i[s].getKey()===r&&(n=s),i[s].getKey()===a&&(o=s);var c=t.getCurrentContent().getBlocksAsArray(),u=e.getSelection(),l=c.length-1,f=Math.min(n,l),d=Math.min(o,l),p=Math.min(u.getAnchorOffset(),c[f].getLength()),h=Math.min(u.getFocusOffset(),c[d].getLength());return t.getSelection().merge({anchorKey:c[f].getKey(),anchorOffset:p,focusKey:c[d].getKey(),focusOffset:h,isBackward:u.getIsBackward(),hasFocus:u.getHasFocus()})}(e,o);o=U.EditorState.forceSelection(o,r)}n.setState({editorState:o})}),je(xe(n),"saveEditorRef",function(e){n.editor=e}),je(xe(n),"focus",function(){Object(b.invoke)(xe(n),"editor.focus")}),je(xe(n),"hasFocus",function(){return document.activeElement===Object(b.get)(n.editor,"editor")}),je(xe(n),"onTab",function(e){var t=n.state.editorState;e.preventDefault(),!t.getSelection().isCollapsed()&&e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||n.handleEditorStateChange(e.shiftKey?function(e){var t=e.getSelection(),n=t.getStartOffset(),o=J(e).getText(),r=$(o),a=r?0:n-1,i=r?1:n;if("\t"!==o.slice(a,i))return e;var s=U.EditorState.push(e,U.Modifier.removeRange(e.getCurrentContent(),t.merge({anchorOffset:a,focusOffset:i})),"remove-range");return U.EditorState.forceSelection(s,t.merge({anchorOffset:n-1,focusOffset:n-1}))}(t):function(e){var t=e.getSelection(),n=t.getStartOffset(),o=J(e).getText(),r=$(o)?0:n,a=U.EditorState.push(e,U.Modifier.replaceText(e.getCurrentContent(),t.isCollapsed()?t.merge({anchorOffset:r,focusOffset:r}):t,"\t"),"insert-characters");return U.EditorState.forceSelection(a,a.getSelection().merge({anchorOffset:n+1,focusOffset:n+1}))}(t))}),je(xe(n),"handleReturn",function(){var e=n.state.editorState,t=J(e).getText(),o=t.search(/\S/),r=function(t){var n=e.getSelection(),o=n.anchorOffset,r=n.focusOffset;return o===t&&r===t};if(r(0)||r(o))return"not-handled";if($(t))return n.handleEditorStateChange(function(e){var t=U.EditorState.push(e,U.Modifier.removeRange(e.getCurrentContent(),e.getSelection().merge({anchorOffset:0,focusOffset:J(e).getLength()})),"remove-range");return U.EditorState.forceSelection(t,t.getCurrentContent().getSelectionAfter())}(e)),"handled";var a=t.match(/^[ \t\u2000-\u200a]*[-*+]\s/);if(t.match(pe.c)){var i=t.replace(pe.c,"$1- [ ] ");return n.handleEditorStateChange(G(e,i)),"handled"}return a?(n.handleEditorStateChange(G(e,a[0])),"handled"):"not-handled"}),je(xe(n),"onAppCommand",function(e,t){"insertChecklist"===Object(b.get)(t,"action")&&(n.handleEditorStateChange(Ee(n.state.editorState)),I.a.tracks.recordEvent("editor_checklist_inserted"))}),je(xe(n),"copyPlainText",function(e){var t=function(e){var t=e.getCurrentContent(),n=e.getSelection(),o=n.getStartKey(),r=e.getCurrentContent().getBlockForKey(o),a=n.getStartOffset(),i=n.getEndKey(),s=n.getEndOffset();if(o===i)return r.getText().slice(a,s);var c="";c+=r.getText().slice(a)+"\n";for(var u=e.getCurrentContent().getBlockForKey(i),l=r;(l=t.getBlockAfter(l.key))&&l.key!==i;)c+=l.getText()+"\n";return c+=u.getText().slice(0,s)}(n.state.editorState);e.clipboardData.setData("text/plain",t),e.preventDefault()}),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ne(e,t)}(t,o["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){this.props.storeFocusEditor(this.focus),this.props.storeHasFocus(this.hasFocus),this.ipc.on("appCommand",this.onAppCommand),this.editor.blur()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.content,o=t.filter,r=t.noteId,a=t.spellCheckEnabled,i=this.state.editorState;a!==e.spellCheckEnabled&&(this.editorKey+=1,this.forceUpdate()),r===e.noteId&&n.version===e.content.version?(o!==e.filter&&this.setState({editorState:U.EditorState.set(i,{decorator:this.generateDecorators(o)})}),n.text!==e.content.text&&n.hasRemoteUpdate&&this.reflectChangesFromReceivedContent(i,n.text)):this.setState({editorState:this.createNewEditorState(n.text,o)})}},{key:"componentWillUnmount",value:function(){this.ipc.removeListener("appCommand",this.onAppCommand)}},{key:"render",value:function(){return r.a.createElement("div",{onCopy:this.copyPlainText,onCut:this.copyPlainText,style:{height:"100%"}},r.a.createElement(U.Editor,{key:this.editorKey,ref:this.saveEditorRef,spellCheck:this.props.spellCheckEnabled,stripPastedStyles:!0,onChange:this.handleEditorStateChange,editorState:this.state.editorState,onTab:this.onTab,handleReturn:this.handleReturn}))}}])&&Te(n.prototype,a),i&&Te(n,i),t}();je(Pe,"propTypes",{content:i.a.shape({text:i.a.string.isRequired,hasRemoteUpdate:i.a.bool.isRequired}),filter:i.a.string.isRequired,noteId:i.a.string,onChangeContent:i.a.func.isRequired,spellCheckEnabled:i.a.bool.isRequired,storeFocusEditor:i.a.func,storeHasFocus:i.a.func}),je(Pe,"defaultProps",{storeFocusEditor:b.noop,storeHasFocus:b.noop});var _e=n(224),Ie=function(e,t){de(t).then(function(t){return e.innerHTML=t,e.querySelectorAll("pre code")}).then(function(e){if(e.length)return n.e(4).then(n.t.bind(null,1180,7)).then(function(t){var n=t.default;e.forEach(n.highlightBlock)}).catch(console.log)})};function De(e){return(De="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function He(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Me(e){return(Me=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ae(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ke(e,t){return(Ke=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function qe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Le=function(e){function t(){var e,n,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return o=this,r=(e=Me(t)).call.apply(e,[this].concat(i)),n=!r||"object"!==De(r)&&"function"!=typeof r?Ae(o):r,qe(Ae(n),"focusEditor",function(){return n.focusContentEditor&&n.focusContentEditor()}),qe(Ae(n),"saveEditorRef",function(e){return n.editor=e}),qe(Ae(n),"isValidNote",function(e){return e&&e.id}),qe(Ae(n),"copyRenderedNote",function(e){var t=n.props,o=t.previewingMarkdown,r=t.showNoteInfo,a=t.dialogs;if(!o)return!0;if(r||a.length>0)return!0;if(!document.getSelection().isCollapsed)return!0;var i=document.createDocumentFragment(),s=document.createElement("div");Ie(s,n.props.note.data.content),i.appendChild(s),e.clipboardData.setData("text/plain",s.innerHTML),e.preventDefault()}),qe(Ae(n),"hasFocus",function(){return n.editorHasFocus&&n.editorHasFocus()}),qe(Ae(n),"onPreviewClick",function(e){for(var t=e.target;null!==t;t=t.parentNode){if("A"===t.tagName){e.preventDefault(),Object(W.a)(t.href);break}if("task-list-item"===t.className)if("break"===function(){e.preventDefault();var o=n.props,r=o.note,a=o.noteBucket,i=o.updateNoteContent;return ve({taskNode:t,text:r.data.content}).then(function(e){i({noteBucket:a,note:r,content:e})}).catch(console.log),"break"}())break}}),qe(Ae(n),"saveNote",function(e){var t=n.props.note;n.isValidNote(t)&&(n.props.onChangeContent(t,e),I.a.tracks.recordEvent("editor_note_edited"))}),qe(Ae(n),"storeEditorHasFocus",function(e){return n.editorHasFocus=e}),qe(Ae(n),"storeFocusContentEditor",function(e){return n.focusContentEditor=e}),qe(Ae(n),"storePreview",function(e){return n.previewNode=e}),qe(Ae(n),"updateMarkdown",function(){n.previewNode&&Ie(n.previewNode,n.props.note.data.content)}),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ke(e,t)}(t,o["Component"]),n=t,(a=[{key:"componentWillMount",value:function(){this.queueNoteSave=Object(b.debounce)(this.saveNote,2e3),document.addEventListener("copy",this.copyRenderedNote,!1)}},{key:"componentDidMount",value:function(){var e=this.props.previewingMarkdown;this.props.storeFocusEditor(this.focusEditor),this.props.storeHasFocus(this.hasFocus),window.addEventListener("beforeunload",this.queueNoteSave.flush),e&&this.updateMarkdown()}},{key:"componentWillReceiveProps",value:function(){this.queueNoteSave.flush()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.note,o=t.onNotePrinted,r=t.previewingMarkdown;t.shouldPrint&&(window.print(),o());var a=Object(b.get)(e,"note.data.content",""),i=Object(b.get)(this.props,"note.data.content","");(r&&(e.note!==n||a!==i)||!e.previewingMarkdown&&this.props.previewingMarkdown)&&this.updateMarkdown()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.queueNoteSave.flush),document.removeEventListener("copy",this.copyRenderedNote,!1)}},{key:"render",value:function(){var e=this.props,t=e.note,n=e.filter,o=e.fontSize,a=e.isViewingRevisions,i=e.previewingMarkdown,s=e.spellCheckEnabled,c={text:Object(b.get)(t,"data.content",""),hasRemoteUpdate:Object(b.get)(t,"hasRemoteUpdate",!1),version:Object(b.get)(t,"version",void 0)},u={fontSize:"".concat(o,"px")},l=v()("note-detail",{"is-viewing-revisions":a});return r.a.createElement("div",{className:"note-detail-wrapper"},t?r.a.createElement("div",{className:l},i&&r.a.createElement("div",{ref:this.storePreview,className:"note-detail-markdown theme-color-bg theme-color-fg","data-markdown-root":!0,onClick:this.onPreviewClick,style:u}),!i&&r.a.createElement("div",{className:"note-detail-textarea theme-color-bg theme-color-fg",style:u},r.a.createElement(Pe,{ref:this.saveEditorRef,spellCheckEnabled:s,storeFocusEditor:this.storeFocusContentEditor,storeHasFocus:this.storeEditorHasFocus,noteId:Object(b.get)(t,"id",null),content:c,filter:n,onChangeContent:this.queueNoteSave}))):r.a.createElement("div",{className:"note-detail-placeholder"},r.a.createElement(_e.a,null)))}}])&&He(n.prototype,a),i&&He(n,i),t}();qe(Le,"displayName","NoteDetail"),qe(Le,"propTypes",{dialogs:i.a.array.isRequired,filter:i.a.string.isRequired,fontSize:i.a.number,isViewingRevisions:i.a.bool.isRequired,onChangeContent:i.a.func.isRequired,onNotePrinted:i.a.func.isRequired,note:i.a.object,noteBucket:i.a.object.isRequired,previewingMarkdown:i.a.bool,shouldPrint:i.a.bool.isRequired,showNoteInfo:i.a.bool.isRequired,spellCheckEnabled:i.a.bool.isRequired,storeFocusEditor:i.a.func,storeHasFocus:i.a.func,updateNoteContent:i.a.func.isRequired}),qe(Le,"defaultProps",{storeFocusEditor:b.noop,storeHasFocus:b.noop});var Be=c.a.actionCreators,We=Be.setShouldPrintNote,Ue={onNotePrinted:function(){return We({shouldPrint:!1})},updateNoteContent:Be.updateNoteContent},ze=Object(s.b)(function(e){var t=e.appState,n=e.settings;return{dialogs:t.dialogs,filter:t.filter,isViewingRevisions:t.isViewingRevisions,shouldPrint:t.shouldPrint,showNoteInfo:t.showNoteInfo,spellCheckEnabled:n.spellCheckEnabled}},Ue)(Le);function Ve(e){return(Ve="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Xe(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Je(e){return(Je=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function $e(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ge(e,t){return(Ge=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Qe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"NoteEditor",function(){return Ye});var Ye=function(e){function t(){var e,n,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return o=this,r=(e=Je(t)).call.apply(e,[this].concat(i)),n=!r||"object"!==Ve(r)&&"function"!=typeof r?$e(o):r,Qe($e(n),"handleShortcut",function(e){var t=e.ctrlKey,o=e.key,r=e.metaKey,a=e.shiftKey,i=t||r;if(i&&"P"===o&&n.props.markdownEnabled){var s="edit"===n.props.editorMode?"markdown":"edit";return n.props.setEditorMode({mode:s}),e.stopPropagation(),e.preventDefault(),!1}if(n.props.isSmallScreen&&i&&a&&"n"===o)return n.props.closeNote(),n.props.onNoteClosed(),e.stopPropagation(),e.preventDefault(),!1;if(i&&"t"===o&&n.props.isEditorActive){if(!n.editFieldHasFocus())return n.focusNoteEditor&&n.focusNoteEditor(),e.stopPropagation(),e.preventDefault(),!1;if(!n.tagFieldHasFocus())return n.focusTagField&&n.focusTagField(),e.stopPropagation(),e.preventDefault(),!1}return!0}),Qe($e(n),"editFieldHasFocus",function(){return n.editorHasFocus&&n.editorHasFocus()}),Qe($e(n),"storeEditorHasFocus",function(e){return n.editorHasFocus=e}),Qe($e(n),"storeFocusEditor",function(e){return n.focusNoteEditor=e}),Qe($e(n),"storeFocusTagField",function(e){return n.focusTagField=e}),Qe($e(n),"storeTagFieldHasFocus",function(e){return n.tagFieldHasFocus=e}),Qe($e(n),"tagFieldHasFocus",function(){return n.tagFieldHasFocus&&n.tagFieldHasFocus()}),Qe($e(n),"toggleShortcuts",function(e){e?window.addEventListener("keydown",n.handleShortcut,!0):window.removeEventListener("keydown",n.handleShortcut,!0)}),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ge(e,t)}(t,o["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){this.toggleShortcuts(!0)}},{key:"componentWillUnmount",value:function(){this.toggleShortcuts(!1)}},{key:"render",value:function(){var e=this.props,t=e.editorMode,n=e.note,o=e.noteBucket,a=e.fontSize,i=this.props.revision||n,s=i&&i.data&&i.data.tags||[],c=!(!n||!n.data.deleted),u=i&&i.data&&i.data.systemTags&&-1!==i.data.systemTags.indexOf("markdown");return r.a.createElement("div",{className:"note-editor theme-color-bg theme-color-fg"},r.a.createElement(ze,{storeFocusEditor:this.storeFocusEditor,storeHasFocus:this.storeEditorHasFocus,filter:this.props.filter,note:i,noteBucket:o,previewingMarkdown:u&&"markdown"===t,onChangeContent:this.props.onUpdateContent,fontSize:a}),n&&!c&&r.a.createElement(B,{storeFocusTagField:this.storeFocusTagField,storeHasFocus:this.storeTagFieldHasFocus,allTags:this.props.allTags.map(Object(b.property)("data.name")),note:this.props.note,tags:s}))}}])&&Xe(n.prototype,a),i&&Xe(n,i),t}();Qe(Ye,"displayName","NoteEditor"),Qe(Ye,"propTypes",{allTags:i.a.array.isRequired,closeNote:i.a.func.isRequired,editorMode:i.a.oneOf(["edit","markdown"]),isEditorActive:i.a.bool.isRequired,isSmallScreen:i.a.bool.isRequired,filter:i.a.string.isRequired,markdownEnabled:i.a.bool.isRequired,note:i.a.object,noteBucket:i.a.object.isRequired,fontSize:i.a.number,onNoteClosed:i.a.func.isRequired,onUpdateContent:i.a.func.isRequired,revision:i.a.object,setEditorMode:i.a.func.isRequired}),Qe(Ye,"defaultProps",{editorMode:"edit",note:{data:{tags:[]}}});var Ze=c.a.actionCreators,et=Ze.closeNote,tt=Ze.setEditorMode;t.default=Object(s.b)(function(e){var t=e.appState,n=e.settings;return{allTags:t.tags,filter:t.filter,fontSize:n.fontSize,editorMode:t.editorMode,isEditorActive:!t.showNavigation,markdownEnabled:n.markdownEnabled,revision:t.revision}},function(e){return{closeNote:function(){return e(et())},setEditorMode:function(t){return e(tt(t))}}})(Ye)},595:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r}),n.d(t,"c",function(){return a});var o={taskNode:".task-list-item",markdownRoot:"[data-markdown-root]"},r=/^(\s*)(-[ \t]+\[[xX\s]?\])/g,a=/^(\s*)(-[ \t]+\[[xX\s]?\])(.+)/gm},683:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(1),i=n.n(a);function s(){return r.a.createElement("svg",{className:"icon-checkmark",xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M11,17.768l-4.884-4.884l1.768-1.768L11,14.232l8.658-8.658C17.823,3.391,15.075,2,12,2C6.477,2,2,6.477,2,12 s4.477,10,10,10s10-4.477,10-10c0-1.528-0.353-2.971-0.966-4.266L11,17.768z"}))}function c(){return r.a.createElement("svg",{className:"icon-circle",xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24"},r.a.createElement("g",{transform:"translate(2 2)"},r.a.createElement("path",{d:"m10 0c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18.5c-4.694 0-8.5-3.806-8.5-8.5s3.806-8.5 8.5-8.5 8.5 3.806 8.5 8.5-3.806 8.5-8.5 8.5z"})))}var u=function(e){var t=e.checked,n=void 0!==t&&t,o=e.onChange;return r.a.createElement("span",{className:"checkbox",role:"checkbox","aria-checked":n,onClick:o,tabIndex:"0"},r.a.createElement("span",{className:"checkbox__icon","aria-hidden":"true"},n?r.a.createElement(s,null):r.a.createElement(c,null)))};u.propTypes={checked:i.a.bool,onChange:i.a.func};t.a=u}}]);