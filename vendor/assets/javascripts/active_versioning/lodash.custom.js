/**
 * @license
 * lodash (Custom Build) /license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash include="debounce"`
 */
;(function(){function t(){}function e(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function o(t){return!!t&&typeof t=="object"}function n(t){return typeof t=="symbol"||o(t)&&"[object Symbol]"==d.call(t)}function i(t){if(typeof t=="number")return t;if(n(t))return r;if(e(t)&&(t=typeof t.valueOf=="function"?t.valueOf():t,t=e(t)?t+"":t),typeof t!="string")return 0===t?t:+t;t=t.replace(u,"");var o=c.test(t);return o||a.test(t)?l(t.slice(2),o?2:8):f.test(t)?r:+t}var r=NaN,u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,s=typeof self=="object"&&self&&self.Object===Object&&self,p=typeof global=="object"&&global&&global.Object===Object&&global||s||Function("return this")(),b=(s=typeof exports=="object"&&exports&&!exports.nodeType&&exports)&&typeof module=="object"&&module&&!module.nodeType&&module,d=Object.prototype.toString,y=Math.max,m=Math.min,v=function(){
return p.Date.now()};t.debounce=function(t,o,n){function r(e){var o=l,n=s;return l=s=void 0,g=e,b=t.apply(n,o)}function u(t){var e=t-j;return t-=g,void 0===j||e>=o||0>e||O&&t>=p}function f(){var t=v();if(u(t))return c(t);var e,n=setTimeout;e=t-g,t=o-(t-j),e=O?m(t,p-e):t,d=n(f,e)}function c(t){return d=void 0,T&&l?r(t):(l=s=void 0,b)}function a(){var t=v(),e=u(t);if(l=arguments,s=this,j=t,e){if(void 0===d)return g=t=j,d=setTimeout(f,o),x?r(t):b;if(O)return d=setTimeout(f,o),r(j)}return void 0===d&&(d=setTimeout(f,o)),
b}var l,s,p,b,d,j,g=0,x=false,O=false,T=true;if(typeof t!="function")throw new TypeError("Expected a function");return o=i(o)||0,e(n)&&(x=!!n.leading,p=(O="maxWait"in n)?y(i(n.maxWait)||0,o):p,T="trailing"in n?!!n.trailing:T),a.cancel=function(){void 0!==d&&clearTimeout(d),g=0,l=j=s=d=void 0},a.flush=function(){return void 0===d?b:c(v())},a},t.isObject=e,t.isObjectLike=o,t.isSymbol=n,t.now=v,t.toNumber=i,t.VERSION="4.15.0",typeof define=="function"&&typeof define.amd=="object"&&define.amd?(p._=t, define(function(){
return t})):b?((b.exports=t)._=t,s._=t):p._=t}).call(this);