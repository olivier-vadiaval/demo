(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[6089],{72372:(n,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});var e=t(1799),i=t.n(e),o=t(82609),c=t.n(o)()(i());c.push([n.id,"/* Taken from the popular Visual Studio Vibrant Ink Schema */\n\n.cm-s-vibrant-ink.CodeMirror { background: black; color: white; }\n.cm-s-vibrant-ink div.CodeMirror-selected { background: #35493c; }\n.cm-s-vibrant-ink .CodeMirror-line::selection, .cm-s-vibrant-ink .CodeMirror-line > span::selection, .cm-s-vibrant-ink .CodeMirror-line > span > span::selection { background: rgba(53, 73, 60, 0.99); }\n.cm-s-vibrant-ink .CodeMirror-line::-moz-selection, .cm-s-vibrant-ink .CodeMirror-line > span::-moz-selection, .cm-s-vibrant-ink .CodeMirror-line > span > span::-moz-selection { background: rgba(53, 73, 60, 0.99); }\n\n.cm-s-vibrant-ink .CodeMirror-gutters { background: #002240; border-right: 1px solid #aaa; }\n.cm-s-vibrant-ink .CodeMirror-guttermarker { color: white; }\n.cm-s-vibrant-ink .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-vibrant-ink .CodeMirror-linenumber { color: #d0d0d0; }\n.cm-s-vibrant-ink .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-vibrant-ink .cm-keyword { color: #CC7832; }\n.cm-s-vibrant-ink .cm-atom { color: #FC0; }\n.cm-s-vibrant-ink .cm-number { color:  #FFEE98; }\n.cm-s-vibrant-ink .cm-def { color: #8DA6CE; }\n.cm-s-vibrant-ink span.cm-variable-2, .cm-s-vibrant span.cm-tag { color: #FFC66D; }\n.cm-s-vibrant-ink span.cm-variable-3, .cm-s-vibrant span.cm-def, .cm-s-vibrant span.cm-type { color: #FFC66D; }\n.cm-s-vibrant-ink .cm-operator { color: #888; }\n.cm-s-vibrant-ink .cm-comment { color: gray; font-weight: bold; }\n.cm-s-vibrant-ink .cm-string { color:  #A5C25C; }\n.cm-s-vibrant-ink .cm-string-2 { color: red; }\n.cm-s-vibrant-ink .cm-meta { color: #D8FA3C; }\n.cm-s-vibrant-ink .cm-builtin { color: #8DA6CE; }\n.cm-s-vibrant-ink .cm-tag { color: #8DA6CE; }\n.cm-s-vibrant-ink .cm-attribute { color: #8DA6CE; }\n.cm-s-vibrant-ink .cm-header { color: #FF6400; }\n.cm-s-vibrant-ink .cm-hr { color: #AEAEAE; }\n.cm-s-vibrant-ink .cm-link { color: #5656F3; }\n.cm-s-vibrant-ink .cm-error { border-bottom: 1px solid red; }\n\n.cm-s-vibrant-ink .CodeMirror-activeline-background { background: #27282E; }\n.cm-s-vibrant-ink .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n","",{version:3,sources:["webpack://./../../node_modules/codemirror/theme/vibrant-ink.css"],names:[],mappings:"AAAA,4DAA4D;;AAE5D,+BAA+B,iBAAiB,EAAE,YAAY,EAAE;AAChE,4CAA4C,mBAAmB,EAAE;AACjE,mKAAmK,kCAAkC,EAAE;AACvM,kLAAkL,kCAAkC,EAAE;;AAEtN,wCAAwC,mBAAmB,EAAE,4BAA4B,EAAE;AAC3F,6CAA6C,YAAY,EAAE;AAC3D,oDAAoD,cAAc,EAAE;AACpE,2CAA2C,cAAc,EAAE;AAC3D,uCAAuC,4BAA4B,EAAE;;AAErE,gCAAgC,cAAc,EAAE;AAChD,6BAA6B,WAAW,EAAE;AAC1C,+BAA+B,eAAe,EAAE;AAChD,4BAA4B,cAAc,EAAE;AAC5C,kEAAkE,cAAc,EAAE;AAClF,8FAA8F,cAAc,EAAE;AAC9G,iCAAiC,WAAW,EAAE;AAC9C,gCAAgC,WAAW,EAAE,iBAAiB,EAAE;AAChE,+BAA+B,eAAe,EAAE;AAChD,iCAAiC,UAAU,EAAE;AAC7C,6BAA6B,cAAc,EAAE;AAC7C,gCAAgC,cAAc,EAAE;AAChD,4BAA4B,cAAc,EAAE;AAC5C,kCAAkC,cAAc,EAAE;AAClD,+BAA+B,cAAc,EAAE;AAC/C,2BAA2B,cAAc,EAAE;AAC3C,6BAA6B,cAAc,EAAE;AAC7C,8BAA8B,4BAA4B,EAAE;;AAE5D,sDAAsD,mBAAmB,EAAE;AAC3E,gDAAgD,sBAAsB,EAAE,sBAAsB,EAAE",sourcesContent:["/* Taken from the popular Visual Studio Vibrant Ink Schema */\n\n.cm-s-vibrant-ink.CodeMirror { background: black; color: white; }\n.cm-s-vibrant-ink div.CodeMirror-selected { background: #35493c; }\n.cm-s-vibrant-ink .CodeMirror-line::selection, .cm-s-vibrant-ink .CodeMirror-line > span::selection, .cm-s-vibrant-ink .CodeMirror-line > span > span::selection { background: rgba(53, 73, 60, 0.99); }\n.cm-s-vibrant-ink .CodeMirror-line::-moz-selection, .cm-s-vibrant-ink .CodeMirror-line > span::-moz-selection, .cm-s-vibrant-ink .CodeMirror-line > span > span::-moz-selection { background: rgba(53, 73, 60, 0.99); }\n\n.cm-s-vibrant-ink .CodeMirror-gutters { background: #002240; border-right: 1px solid #aaa; }\n.cm-s-vibrant-ink .CodeMirror-guttermarker { color: white; }\n.cm-s-vibrant-ink .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-vibrant-ink .CodeMirror-linenumber { color: #d0d0d0; }\n.cm-s-vibrant-ink .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-vibrant-ink .cm-keyword { color: #CC7832; }\n.cm-s-vibrant-ink .cm-atom { color: #FC0; }\n.cm-s-vibrant-ink .cm-number { color:  #FFEE98; }\n.cm-s-vibrant-ink .cm-def { color: #8DA6CE; }\n.cm-s-vibrant-ink span.cm-variable-2, .cm-s-vibrant span.cm-tag { color: #FFC66D; }\n.cm-s-vibrant-ink span.cm-variable-3, .cm-s-vibrant span.cm-def, .cm-s-vibrant span.cm-type { color: #FFC66D; }\n.cm-s-vibrant-ink .cm-operator { color: #888; }\n.cm-s-vibrant-ink .cm-comment { color: gray; font-weight: bold; }\n.cm-s-vibrant-ink .cm-string { color:  #A5C25C; }\n.cm-s-vibrant-ink .cm-string-2 { color: red; }\n.cm-s-vibrant-ink .cm-meta { color: #D8FA3C; }\n.cm-s-vibrant-ink .cm-builtin { color: #8DA6CE; }\n.cm-s-vibrant-ink .cm-tag { color: #8DA6CE; }\n.cm-s-vibrant-ink .cm-attribute { color: #8DA6CE; }\n.cm-s-vibrant-ink .cm-header { color: #FF6400; }\n.cm-s-vibrant-ink .cm-hr { color: #AEAEAE; }\n.cm-s-vibrant-ink .cm-link { color: #5656F3; }\n.cm-s-vibrant-ink .cm-error { border-bottom: 1px solid red; }\n\n.cm-s-vibrant-ink .CodeMirror-activeline-background { background: #27282E; }\n.cm-s-vibrant-ink .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n"],sourceRoot:""}]);const a=c},82609:n=>{"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t=n(r);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(n,t,e){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(e)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(i[c]=!0)}for(var a=0;a<n.length;a++){var A=[].concat(n[a]);e&&i[A[0]]||(t&&(A[2]?A[2]="".concat(t," and ").concat(A[2]):A[2]=t),r.push(A))}},r}},1799:n=>{"use strict";function r(n,r){(null==r||r>n.length)&&(r=n.length);for(var t=0,e=new Array(r);t<r;t++)e[t]=n[t];return e}n.exports=function(n){var t,e,i=(e=4,function(n){if(Array.isArray(n))return n}(t=n)||function(n,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n)){var t=[],e=!0,i=!1,o=void 0;try{for(var c,a=n[Symbol.iterator]();!(e=(c=a.next()).done)&&(t.push(c.value),!r||t.length!==r);e=!0);}catch(n){i=!0,o=n}finally{try{e||null==a.return||a.return()}finally{if(i)throw o}}return t}}(t,e)||function(n,t){if(n){if("string"==typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=i[1],c=i[3];if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),A="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),s="/*# ".concat(A," */"),l=c.sources.map((function(n){return"/*# sourceURL=".concat(c.sourceRoot||"").concat(n," */")}));return[o].concat(l).concat([s]).join("\n")}return[o].join("\n")}},96089:(n,r,t)=>{var e=t(72372);"string"==typeof(e=e.__esModule?e.default:e)&&(e=[[n.id,e,""]]);t(46062)(e,{insert:"head",singleton:!1}),e.locals&&(n.exports=e.locals)},46062:(n,r,t)=>{"use strict";var e,i={},o=function(){var n={};return function(r){if(void 0===n[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[r]=t}return n[r]}}();function c(n,r){for(var t=[],e={},i=0;i<n.length;i++){var o=n[i],c=r.base?o[0]+r.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};e[c]?e[c].parts.push(a):t.push(e[c]={id:c,parts:[a]})}return t}function a(n,r){for(var t=0;t<n.length;t++){var e=n[t],o=i[e.id],c=0;if(o){for(o.refs++;c<o.parts.length;c++)o.parts[c](e.parts[c]);for(;c<e.parts.length;c++)o.parts.push(v(e.parts[c],r))}else{for(var a=[];c<e.parts.length;c++)a.push(v(e.parts[c],r));i[e.id]={id:e.id,refs:1,parts:a}}}}function A(n){var r=document.createElement("style");if(void 0===n.attributes.nonce){var e=t.nc;e&&(n.attributes.nonce=e)}if(Object.keys(n.attributes).forEach((function(t){r.setAttribute(t,n.attributes[t])})),"function"==typeof n.insert)n.insert(r);else{var i=o(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}return r}var s,l=(s=[],function(n,r){return s[n]=r,s.filter(Boolean).join("\n")});function m(n,r,t,e){var i=t?"":e.css;if(n.styleSheet)n.styleSheet.cssText=l(r,i);else{var o=document.createTextNode(i),c=n.childNodes;c[r]&&n.removeChild(c[r]),c.length?n.insertBefore(o,c[r]):n.appendChild(o)}}function d(n,r,t){var e=t.css,i=t.media,o=t.sourceMap;if(i&&n.setAttribute("media",i),o&&btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}var u=null,b=0;function v(n,r){var t,e,i;if(r.singleton){var o=b++;t=u||(u=A(r)),e=m.bind(null,t,o,!1),i=m.bind(null,t,o,!0)}else t=A(r),e=d.bind(null,t,r),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else i()}}n.exports=function(n,r){(r=r||{}).attributes="object"==typeof r.attributes?r.attributes:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e));var t=c(n,r);return a(t,r),function(n){for(var e=[],o=0;o<t.length;o++){var A=t[o],s=i[A.id];s&&(s.refs--,e.push(s))}n&&a(c(n,r),r);for(var l=0;l<e.length;l++){var m=e[l];if(0===m.refs){for(var d=0;d<m.parts.length;d++)m.parts[d]();delete i[m.id]}}}}}}]);
//# sourceMappingURL=6089.bundle.js.map