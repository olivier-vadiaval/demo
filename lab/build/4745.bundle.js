(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[4745],{54745:(t,n,e)=>{"use strict";var r;e.r(n),e.d(n,{JSONExt:()=>r,MimeData:()=>o,PromiseDelegate:()=>u,Random:()=>i,Token:()=>a,UUID:()=>f}),function(t){function n(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t}function e(t){return Array.isArray(t)}t.emptyObject=Object.freeze({}),t.emptyArray=Object.freeze([]),t.isPrimitive=n,t.isArray=e,t.isObject=function(t){return!n(t)&&!e(t)},t.deepEqual=function t(r,i){if(r===i)return!0;if(n(r)||n(i))return!1;var o=e(r),u=e(i);return o===u&&(o&&u?function(n,e){if(n===e)return!0;if(n.length!==e.length)return!1;for(var r=0,i=n.length;r<i;++r)if(!t(n[r],e[r]))return!1;return!0}(r,i):function(n,e){if(n===e)return!0;for(var r in n)if(void 0!==n[r]&&!(r in e))return!1;for(var r in e)if(void 0!==e[r]&&!(r in n))return!1;for(var r in n){var i=n[r],o=e[r];if(void 0!==i||void 0!==o){if(void 0===i||void 0===o)return!1;if(!t(i,o))return!1}}return!0}(r,i))},t.deepCopy=function t(r){return n(r)?r:e(r)?function(n){for(var e=new Array(n.length),r=0,i=n.length;r<i;++r)e[r]=t(n[r]);return e}(r):function(n){var e={};for(var r in n){var i=n[r];void 0!==i&&(e[r]=t(i))}return e}(r)}}(r||(r={}));var i,o=function(){function t(){this._types=[],this._values=[]}return t.prototype.types=function(){return this._types.slice()},t.prototype.hasData=function(t){return-1!==this._types.indexOf(t)},t.prototype.getData=function(t){var n=this._types.indexOf(t);return-1!==n?this._values[n]:void 0},t.prototype.setData=function(t,n){this.clearData(t),this._types.push(t),this._values.push(n)},t.prototype.clearData=function(t){var n=this._types.indexOf(t);-1!==n&&(this._types.splice(n,1),this._values.splice(n,1))},t.prototype.clear=function(){this._types.length=0,this._values.length=0},t}(),u=function(){function t(){var t=this;this.promise=new Promise((function(n,e){t._resolve=n,t._reject=e}))}return t.prototype.resolve=function(t){(0,this._resolve)(t)},t.prototype.reject=function(t){(0,this._reject)(t)},t}();!function(t){var n;t.getRandomValues=(n="undefined"!=typeof window&&(window.crypto||window.msCrypto)||e(28508)||null)&&"function"==typeof n.getRandomValues?function(t){return n.getRandomValues(t)}:n&&"function"==typeof n.randomFillSync?function(t){return n.randomFillSync(t)}:n&&"function"==typeof n.randomBytes?function(t){for(var e=n.randomBytes(t.length),r=0,i=e.length;r<i;++r)t[r]=e[r]}:function(t){for(var n=0,e=0,r=t.length;e<r;++e)e%4==0&&(n=4294967295*Math.random()>>>0),t[e]=255&n,n>>>=8}}(i||(i={}));var f,a=function(t){this.name=t,this._tokenStructuralPropertyT=null};!function(t){t.uuid4=function(){for(var t=new Uint8Array(16),n=new Array(256),e=0;e<16;++e)n[e]="0"+e.toString(16);for(e=16;e<256;++e)n[e]=e.toString(16);return function(){return i.getRandomValues(t),t[6]=64|15&t[6],t[8]=128|63&t[8],n[t[0]]+n[t[1]]+n[t[2]]+n[t[3]]+"-"+n[t[4]]+n[t[5]]+"-"+n[t[6]]+n[t[7]]+"-"+n[t[8]]+n[t[9]]+"-"+n[t[10]]+n[t[11]]+n[t[12]]+n[t[13]]+n[t[14]]+n[t[15]]}}()}(f||(f={}))},28508:()=>{}}]);
//# sourceMappingURL=4745.bundle.js.map