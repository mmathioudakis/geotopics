(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function corslite(n,t,o){function e(n){return n>=200&&300>n||304===n}function i(){void 0===r.status||e(r.status)?t.call(r,null,r):t.call(r,r,null)}var l=!1;if("undefined"==typeof window.XMLHttpRequest)return t(Error("Browser not supported"));if("undefined"==typeof o){var u=n.match(/^\s*https?:\/\/[^\/]*/);o=u&&u[0]!==location.protocol+"//"+location.domain+(location.port?":"+location.port:"")}var r=new window.XMLHttpRequest;if(o&&!("withCredentials"in r)){r=new window.XDomainRequest;var a=t;t=function(){if(l)a.apply(this,arguments);else{var n=this,t=arguments;setTimeout(function(){a.apply(n,t)},0)}}}return"onload"in r?r.onload=i:r.onreadystatechange=function(){4===r.readyState&&i()},r.onerror=function(n){t.call(this,n||!0,null),t=function(){}},r.onprogress=function(){},r.ontimeout=function(n){t.call(this,n,null),t=function(){}},r.onabort=function(n){t.call(this,n,null),t=function(){}},r.open("GET",n,!0),r.send(null),l=!0,r}"undefined"!=typeof module&&(module.exports=corslite);
},{}],2:[function(require,module,exports){
module.exports=Array.isArray||function(r){return"[object Array]"==Object.prototype.toString.call(r)};
},{}],3:[function(require,module,exports){
!function(t,e,i){var n=t.L,o={};o.version="0.7.7","object"==typeof module&&"object"==typeof module.exports?module.exports=o:"function"==typeof define&&define.amd&&define(o),o.noConflict=function(){return t.L=n,this},t.L=o,o.Util={extend:function(t){var e,i,n,o,s=Array.prototype.slice.call(arguments,1);for(i=0,n=s.length;n>i;i++){o=s[i]||{};for(e in o)o.hasOwnProperty(e)&&(t[e]=o[e])}return t},bind:function(t,e){var i=arguments.length>2?Array.prototype.slice.call(arguments,2):null;return function(){return t.apply(e,i||arguments)}},stamp:function(){var t=0,e="_leaflet_id";return function(i){return i[e]=i[e]||++t,i[e]}}(),invokeEach:function(t,e,i){var n,o;if("object"==typeof t){o=Array.prototype.slice.call(arguments,3);for(n in t)e.apply(i,[n,t[n]].concat(o));return!0}return!1},limitExecByInterval:function(t,e,i){var n,o;return function s(){var a=arguments;return n?void(o=!0):(n=!0,setTimeout(function(){n=!1,o&&(s.apply(i,a),o=!1)},e),void t.apply(i,a))}},falseFn:function(){return!1},formatNum:function(t,e){var i=Math.pow(10,e||5);return Math.round(t*i)/i},trim:function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")},splitWords:function(t){return o.Util.trim(t).split(/\s+/)},setOptions:function(t,e){return t.options=o.extend({},t.options,e),t.options},getParamString:function(t,e,i){var n=[];for(var o in t)n.push(encodeURIComponent(i?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(e&&-1!==e.indexOf("?")?"&":"?")+n.join("&")},template:function(t,e){return t.replace(/\{ *([\w_]+) *\}/g,function(t,n){var o=e[n];if(o===i)throw new Error("No value provided for variable "+t);return"function"==typeof o&&(o=o(e)),o})},isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},emptyImageUrl:"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="},function(){function e(e){var i,n,o=["webkit","moz","o","ms"];for(i=0;i<o.length&&!n;i++)n=t[o[i]+e];return n}function i(e){var i=+new Date,o=Math.max(0,16-(i-n));return n=i+o,t.setTimeout(e,o)}var n=0,s=t.requestAnimationFrame||e("RequestAnimationFrame")||i,a=t.cancelAnimationFrame||e("CancelAnimationFrame")||e("CancelRequestAnimationFrame")||function(e){t.clearTimeout(e)};o.Util.requestAnimFrame=function(e,n,a,r){return e=o.bind(e,n),a&&s===i?void e():s.call(t,e,r)},o.Util.cancelAnimFrame=function(e){e&&a.call(t,e)}}(),o.extend=o.Util.extend,o.bind=o.Util.bind,o.stamp=o.Util.stamp,o.setOptions=o.Util.setOptions,o.Class=function(){},o.Class.extend=function(t){var e=function(){this.initialize&&this.initialize.apply(this,arguments),this._initHooks&&this.callInitHooks()},i=function(){};i.prototype=this.prototype;var n=new i;n.constructor=e,e.prototype=n;for(var s in this)this.hasOwnProperty(s)&&"prototype"!==s&&(e[s]=this[s]);t.statics&&(o.extend(e,t.statics),delete t.statics),t.includes&&(o.Util.extend.apply(null,[n].concat(t.includes)),delete t.includes),t.options&&n.options&&(t.options=o.extend({},n.options,t.options)),o.extend(n,t),n._initHooks=[];var a=this;return e.__super__=a.prototype,n.callInitHooks=function(){if(!this._initHooksCalled){a.prototype.callInitHooks&&a.prototype.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,e=n._initHooks.length;e>t;t++)n._initHooks[t].call(this)}},e},o.Class.include=function(t){o.extend(this.prototype,t)},o.Class.mergeOptions=function(t){o.extend(this.prototype.options,t)},o.Class.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i="function"==typeof t?t:function(){this[t].apply(this,e)};this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i)};var s="_leaflet_events";o.Mixin={},o.Mixin.Events={addEventListener:function(t,e,i){if(o.Util.invokeEach(t,this.addEventListener,this,e,i))return this;var n,a,r,h,l,u,c,d=this[s]=this[s]||{},p=i&&i!==this&&o.stamp(i);for(t=o.Util.splitWords(t),n=0,a=t.length;a>n;n++)r={action:e,context:i||this},h=t[n],p?(l=h+"_idx",u=l+"_len",c=d[l]=d[l]||{},c[p]||(c[p]=[],d[u]=(d[u]||0)+1),c[p].push(r)):(d[h]=d[h]||[],d[h].push(r));return this},hasEventListeners:function(t){var e=this[s];return!!e&&(t in e&&e[t].length>0||t+"_idx"in e&&e[t+"_idx_len"]>0)},removeEventListener:function(t,e,i){if(!this[s])return this;if(!t)return this.clearAllEventListeners();if(o.Util.invokeEach(t,this.removeEventListener,this,e,i))return this;var n,a,r,h,l,u,c,d,p,_=this[s],m=i&&i!==this&&o.stamp(i);for(t=o.Util.splitWords(t),n=0,a=t.length;a>n;n++)if(r=t[n],u=r+"_idx",c=u+"_len",d=_[u],e){if(h=m&&d?d[m]:_[r]){for(l=h.length-1;l>=0;l--)h[l].action!==e||i&&h[l].context!==i||(p=h.splice(l,1),p[0].action=o.Util.falseFn);i&&d&&0===h.length&&(delete d[m],_[c]--)}}else delete _[r],delete _[u],delete _[c];return this},clearAllEventListeners:function(){return delete this[s],this},fireEvent:function(t,e){if(!this.hasEventListeners(t))return this;var i,n,a,r,h,l=o.Util.extend({},e,{type:t,target:this}),u=this[s];if(u[t])for(i=u[t].slice(),n=0,a=i.length;a>n;n++)i[n].action.call(i[n].context,l);r=u[t+"_idx"];for(h in r)if(i=r[h].slice())for(n=0,a=i.length;a>n;n++)i[n].action.call(i[n].context,l);return this},addOneTimeEventListener:function(t,e,i){if(o.Util.invokeEach(t,this.addOneTimeEventListener,this,e,i))return this;var n=o.bind(function(){this.removeEventListener(t,e,i).removeEventListener(t,n,i)},this);return this.addEventListener(t,e,i).addEventListener(t,n,i)}},o.Mixin.Events.on=o.Mixin.Events.addEventListener,o.Mixin.Events.off=o.Mixin.Events.removeEventListener,o.Mixin.Events.once=o.Mixin.Events.addOneTimeEventListener,o.Mixin.Events.fire=o.Mixin.Events.fireEvent,function(){var n="ActiveXObject"in t,s=n&&!e.addEventListener,a=navigator.userAgent.toLowerCase(),r=-1!==a.indexOf("webkit"),h=-1!==a.indexOf("chrome"),l=-1!==a.indexOf("phantom"),u=-1!==a.indexOf("android"),c=-1!==a.search("android [23]"),d=-1!==a.indexOf("gecko"),p=typeof orientation!=i+"",_=!t.PointerEvent&&t.MSPointerEvent,m=t.PointerEvent&&t.navigator.pointerEnabled||_,f="devicePixelRatio"in t&&t.devicePixelRatio>1||"matchMedia"in t&&t.matchMedia("(min-resolution:144dpi)")&&t.matchMedia("(min-resolution:144dpi)").matches,g=e.documentElement,v=n&&"transition"in g.style,y="WebKitCSSMatrix"in t&&"m11"in new t.WebKitCSSMatrix&&!c,P="MozPerspective"in g.style,L="OTransition"in g.style,x=!t.L_DISABLE_3D&&(v||y||P||L)&&!l,w=!t.L_NO_TOUCH&&!l&&(m||"ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch);o.Browser={ie:n,ielt9:s,webkit:r,gecko:d&&!r&&!t.opera&&!n,android:u,android23:c,chrome:h,ie3d:v,webkit3d:y,gecko3d:P,opera3d:L,any3d:x,mobile:p,mobileWebkit:p&&r,mobileWebkit3d:p&&y,mobileOpera:p&&t.opera,touch:w,msPointer:_,pointer:m,retina:f}}(),o.Point=function(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e},o.Point.prototype={clone:function(){return new o.Point(this.x,this.y)},add:function(t){return this.clone()._add(o.point(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(o.point(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},distanceTo:function(t){t=o.point(t);var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){return t=o.point(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=o.point(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+o.Util.formatNum(this.x)+", "+o.Util.formatNum(this.y)+")"}},o.point=function(t,e,n){return t instanceof o.Point?t:o.Util.isArray(t)?new o.Point(t[0],t[1]):t===i||null===t?t:new o.Point(t,e,n)},o.Bounds=function(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;o>n;n++)this.extend(i[n])},o.Bounds.prototype={extend:function(t){return t=o.point(t),this.min||this.max?(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(t.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(t.y,this.max.y)):(this.min=t.clone(),this.max=t.clone()),this},getCenter:function(t){return new o.Point((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return new o.Point(this.min.x,this.max.y)},getTopRight:function(){return new o.Point(this.max.x,this.min.y)},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return t="number"==typeof t[0]||t instanceof o.Point?o.point(t):o.bounds(t),t instanceof o.Bounds?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=o.bounds(t);var e=this.min,i=this.max,n=t.min,s=t.max,a=s.x>=e.x&&n.x<=i.x,r=s.y>=e.y&&n.y<=i.y;return a&&r},isValid:function(){return!(!this.min||!this.max)}},o.bounds=function(t,e){return!t||t instanceof o.Bounds?t:new o.Bounds(t,e)},o.Transformation=function(t,e,i,n){this._a=t,this._b=e,this._c=i,this._d=n},o.Transformation.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new o.Point((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}},o.DomUtil={get:function(t){return"string"==typeof t?e.getElementById(t):t},getStyle:function(t,i){var n=t.style[i];if(!n&&t.currentStyle&&(n=t.currentStyle[i]),(!n||"auto"===n)&&e.defaultView){var o=e.defaultView.getComputedStyle(t,null);n=o?o[i]:null}return"auto"===n?null:n},getViewportOffset:function(t){var i,n=0,s=0,a=t,r=e.body,h=e.documentElement;do{if(n+=a.offsetTop||0,s+=a.offsetLeft||0,n+=parseInt(o.DomUtil.getStyle(a,"borderTopWidth"),10)||0,s+=parseInt(o.DomUtil.getStyle(a,"borderLeftWidth"),10)||0,i=o.DomUtil.getStyle(a,"position"),a.offsetParent===r&&"absolute"===i)break;if("fixed"===i){n+=r.scrollTop||h.scrollTop||0,s+=r.scrollLeft||h.scrollLeft||0;break}if("relative"===i&&!a.offsetLeft){var l=o.DomUtil.getStyle(a,"width"),u=o.DomUtil.getStyle(a,"max-width"),c=a.getBoundingClientRect();("none"!==l||"none"!==u)&&(s+=c.left+a.clientLeft),n+=c.top+(r.scrollTop||h.scrollTop||0);break}a=a.offsetParent}while(a);a=t;do{if(a===r)break;n-=a.scrollTop||0,s-=a.scrollLeft||0,a=a.parentNode}while(a);return new o.Point(s,n)},documentIsLtr:function(){return o.DomUtil._docIsLtrCached||(o.DomUtil._docIsLtrCached=!0,o.DomUtil._docIsLtr="ltr"===o.DomUtil.getStyle(e.body,"direction")),o.DomUtil._docIsLtr},create:function(t,i,n){var o=e.createElement(t);return o.className=i,n&&n.appendChild(o),o},hasClass:function(t,e){if(t.classList!==i)return t.classList.contains(e);var n=o.DomUtil._getClass(t);return n.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(n)},addClass:function(t,e){if(t.classList!==i)for(var n=o.Util.splitWords(e),s=0,a=n.length;a>s;s++)t.classList.add(n[s]);else if(!o.DomUtil.hasClass(t,e)){var r=o.DomUtil._getClass(t);o.DomUtil._setClass(t,(r?r+" ":"")+e)}},removeClass:function(t,e){t.classList!==i?t.classList.remove(e):o.DomUtil._setClass(t,o.Util.trim((" "+o.DomUtil._getClass(t)+" ").replace(" "+e+" "," ")))},_setClass:function(t,e){t.className.baseVal===i?t.className=e:t.className.baseVal=e},_getClass:function(t){return t.className.baseVal===i?t.className:t.className.baseVal},setOpacity:function(t,e){if("opacity"in t.style)t.style.opacity=e;else if("filter"in t.style){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch(o){if(1===e)return}e=Math.round(100*e),i?(i.Enabled=100!==e,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}},testProp:function(t){for(var i=e.documentElement.style,n=0;n<t.length;n++)if(t[n]in i)return t[n];return!1},getTranslateString:function(t){var e=o.Browser.webkit3d,i="translate"+(e?"3d":"")+"(",n=(e?",0":"")+")";return i+t.x+"px,"+t.y+"px"+n},getScaleString:function(t,e){var i=o.DomUtil.getTranslateString(e.add(e.multiplyBy(-1*t))),n=" scale("+t+") ";return i+n},setPosition:function(t,e,i){t._leaflet_pos=e,!i&&o.Browser.any3d?t.style[o.DomUtil.TRANSFORM]=o.DomUtil.getTranslateString(e):(t.style.left=e.x+"px",t.style.top=e.y+"px")},getPosition:function(t){return t._leaflet_pos}},o.DomUtil.TRANSFORM=o.DomUtil.testProp(["transform","WebkitTransform","OTransform","MozTransform","msTransform"]),o.DomUtil.TRANSITION=o.DomUtil.testProp(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),o.DomUtil.TRANSITION_END="webkitTransition"===o.DomUtil.TRANSITION||"OTransition"===o.DomUtil.TRANSITION?o.DomUtil.TRANSITION+"End":"transitionend",function(){if("onselectstart"in e)o.extend(o.DomUtil,{disableTextSelection:function(){o.DomEvent.on(t,"selectstart",o.DomEvent.preventDefault)},enableTextSelection:function(){o.DomEvent.off(t,"selectstart",o.DomEvent.preventDefault)}});else{var i=o.DomUtil.testProp(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);o.extend(o.DomUtil,{disableTextSelection:function(){if(i){var t=e.documentElement.style;this._userSelect=t[i],t[i]="none"}},enableTextSelection:function(){i&&(e.documentElement.style[i]=this._userSelect,delete this._userSelect)}})}o.extend(o.DomUtil,{disableImageDrag:function(){o.DomEvent.on(t,"dragstart",o.DomEvent.preventDefault)},enableImageDrag:function(){o.DomEvent.off(t,"dragstart",o.DomEvent.preventDefault)}})}(),o.LatLng=function(t,e,n){if(t=parseFloat(t),e=parseFloat(e),isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=t,this.lng=e,n!==i&&(this.alt=parseFloat(n))},o.extend(o.LatLng,{DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,MAX_MARGIN:1e-9}),o.LatLng.prototype={equals:function(t){if(!t)return!1;t=o.latLng(t);var e=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return e<=o.LatLng.MAX_MARGIN},toString:function(t){return"LatLng("+o.Util.formatNum(this.lat,t)+", "+o.Util.formatNum(this.lng,t)+")"},distanceTo:function(t){t=o.latLng(t);var e=6378137,i=o.LatLng.DEG_TO_RAD,n=(t.lat-this.lat)*i,s=(t.lng-this.lng)*i,a=this.lat*i,r=t.lat*i,h=Math.sin(n/2),l=Math.sin(s/2),u=h*h+l*l*Math.cos(a)*Math.cos(r);return 2*e*Math.atan2(Math.sqrt(u),Math.sqrt(1-u))},wrap:function(t,e){var i=this.lng;return t=t||-180,e=e||180,i=(i+e)%(e-t)+(t>i||i===e?e:t),new o.LatLng(this.lat,i)}},o.latLng=function(t,e){return t instanceof o.LatLng?t:o.Util.isArray(t)?"number"==typeof t[0]||"string"==typeof t[0]?new o.LatLng(t[0],t[1],t[2]):null:t===i||null===t?t:"object"==typeof t&&"lat"in t?new o.LatLng(t.lat,"lng"in t?t.lng:t.lon):e===i?null:new o.LatLng(t,e)},o.LatLngBounds=function(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;o>n;n++)this.extend(i[n])},o.LatLngBounds.prototype={extend:function(t){if(!t)return this;var e=o.latLng(t);return t=null!==e?e:o.latLngBounds(t),t instanceof o.LatLng?this._southWest||this._northEast?(this._southWest.lat=Math.min(t.lat,this._southWest.lat),this._southWest.lng=Math.min(t.lng,this._southWest.lng),this._northEast.lat=Math.max(t.lat,this._northEast.lat),this._northEast.lng=Math.max(t.lng,this._northEast.lng)):(this._southWest=new o.LatLng(t.lat,t.lng),this._northEast=new o.LatLng(t.lat,t.lng)):t instanceof o.LatLngBounds&&(this.extend(t._southWest),this.extend(t._northEast)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,s=Math.abs(e.lng-i.lng)*t;return new o.LatLngBounds(new o.LatLng(e.lat-n,e.lng-s),new o.LatLng(i.lat+n,i.lng+s))},getCenter:function(){return new o.LatLng((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new o.LatLng(this.getNorth(),this.getWest())},getSouthEast:function(){return new o.LatLng(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t="number"==typeof t[0]||t instanceof o.LatLng?o.latLng(t):o.latLngBounds(t);var e,i,n=this._southWest,s=this._northEast;return t instanceof o.LatLngBounds?(e=t.getSouthWest(),i=t.getNorthEast()):e=i=t,e.lat>=n.lat&&i.lat<=s.lat&&e.lng>=n.lng&&i.lng<=s.lng},intersects:function(t){t=o.latLngBounds(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),s=t.getNorthEast(),a=s.lat>=e.lat&&n.lat<=i.lat,r=s.lng>=e.lng&&n.lng<=i.lng;return a&&r},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t){return t?(t=o.latLngBounds(t),this._southWest.equals(t.getSouthWest())&&this._northEast.equals(t.getNorthEast())):!1},isValid:function(){return!(!this._southWest||!this._northEast)}},o.latLngBounds=function(t,e){return!t||t instanceof o.LatLngBounds?t:new o.LatLngBounds(t,e)},o.Projection={},o.Projection.SphericalMercator={MAX_LATITUDE:85.0511287798,project:function(t){var e=o.LatLng.DEG_TO_RAD,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),s=t.lng*e,a=n*e;return a=Math.log(Math.tan(Math.PI/4+a/2)),new o.Point(s,a)},unproject:function(t){var e=o.LatLng.RAD_TO_DEG,i=t.x*e,n=(2*Math.atan(Math.exp(t.y))-Math.PI/2)*e;return new o.LatLng(n,i)}},o.Projection.LonLat={project:function(t){return new o.Point(t.lng,t.lat)},unproject:function(t){return new o.LatLng(t.y,t.x)}},o.CRS={latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},scale:function(t){return 256*Math.pow(2,t)},getSize:function(t){var e=this.scale(t);return o.point(e,e)}},o.CRS.Simple=o.extend({},o.CRS,{projection:o.Projection.LonLat,transformation:new o.Transformation(1,0,-1,0),scale:function(t){return Math.pow(2,t)}}),o.CRS.EPSG3857=o.extend({},o.CRS,{code:"EPSG:3857",projection:o.Projection.SphericalMercator,transformation:new o.Transformation(.5/Math.PI,.5,-.5/Math.PI,.5),project:function(t){var e=this.projection.project(t),i=6378137;return e.multiplyBy(i)}}),o.CRS.EPSG900913=o.extend({},o.CRS.EPSG3857,{code:"EPSG:900913"}),o.CRS.EPSG4326=o.extend({},o.CRS,{code:"EPSG:4326",projection:o.Projection.LonLat,transformation:new o.Transformation(1/360,.5,-1/360,.5)}),o.Map=o.Class.extend({includes:o.Mixin.Events,options:{crs:o.CRS.EPSG3857,fadeAnimation:o.DomUtil.TRANSITION&&!o.Browser.android23,trackResize:!0,markerZoomAnimation:o.DomUtil.TRANSITION&&o.Browser.any3d},initialize:function(t,e){e=o.setOptions(this,e),this._initContainer(t),this._initLayout(),this._onResize=o.bind(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.center&&e.zoom!==i&&this.setView(o.latLng(e.center),e.zoom,{reset:!0}),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._tileLayersNum=0,this.callInitHooks(),this._addLayers(e.layers)},setView:function(t,e){return e=e===i?this.getZoom():e,this._resetView(o.latLng(t),this._limitZoom(e)),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=this._limitZoom(t),this)},zoomIn:function(t,e){return this.setZoom(this._zoom+(t||1),e)},zoomOut:function(t,e){return this.setZoom(this._zoom-(t||1),e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),s=this.getSize().divideBy(2),a=t instanceof o.Point?t:this.latLngToContainerPoint(t),r=a.subtract(s).multiplyBy(1-1/n),h=this.containerPointToLatLng(s.add(r));return this.setView(h,e,{zoom:i})},fitBounds:function(t,e){e=e||{},t=t.getBounds?t.getBounds():o.latLngBounds(t);var i=o.point(e.paddingTopLeft||e.padding||[0,0]),n=o.point(e.paddingBottomRight||e.padding||[0,0]),s=this.getBoundsZoom(t,!1,i.add(n));s=e.maxZoom?Math.min(e.maxZoom,s):s;var a=n.subtract(i).divideBy(2),r=this.project(t.getSouthWest(),s),h=this.project(t.getNorthEast(),s),l=this.unproject(r.add(h).divideBy(2).add(a),s);return this.setView(l,s,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t){return this.fire("movestart"),this._rawPanBy(o.point(t)),this.fire("move"),this.fire("moveend")},setMaxBounds:function(t){return t=o.latLngBounds(t),this.options.maxBounds=t,t?(this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds,this)):this.off("moveend",this._panInsideMaxBounds,this)},panInsideBounds:function(t,e){var i=this.getCenter(),n=this._limitCenter(i,this._zoom,t);return i.equals(n)?this:this.panTo(n,e)},addLayer:function(t){var e=o.stamp(t);return this._layers[e]?this:(this._layers[e]=t,!t.options||isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[e]=t,this._updateZoomLevels()),this.options.zoomAnimation&&o.TileLayer&&t instanceof o.TileLayer&&(this._tileLayersNum++,this._tileLayersToLoad++,t.on("load",this._onTileLayerLoad,this)),this._loaded&&this._layerAdd(t),this)},removeLayer:function(t){var e=o.stamp(t);return this._layers[e]?(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&this.fire("layerremove",{layer:t}),this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels()),this.options.zoomAnimation&&o.TileLayer&&t instanceof o.TileLayer&&(this._tileLayersNum--,this._tileLayersToLoad--,t.off("load",this._onTileLayerLoad,this)),this):this},hasLayer:function(t){return t?o.stamp(t)in this._layers:!1},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},invalidateSize:function(t){if(!this._loaded)return this;t=o.extend({animate:!1,pan:!0},t===!0?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._initialCenter=null;var i=this.getSize(),n=e.divideBy(2).round(),s=i.divideBy(2).round(),a=n.subtract(s);return a.x||a.y?(t.animate&&t.pan?this.panBy(a):(t.pan&&this._rawPanBy(a),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(o.bind(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i})):this},addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},remove:function(){this._loaded&&this.fire("unload"),this._initEvents("off");try{delete this._container._leaflet}catch(t){this._container._leaflet=i}return this._clearPanes(),this._clearControlPos&&this._clearControlPos(),this._clearHandlers(),this},getCenter:function(){return this._checkIfLoaded(),this._initialCenter&&!this._moved()?this._initialCenter:this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new o.LatLngBounds(e,i)},getMinZoom:function(){return this.options.minZoom===i?this._layersMinZoom===i?0:this._layersMinZoom:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===i?this._layersMaxZoom===i?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=o.latLngBounds(t);var n,s=this.getMinZoom()-(e?1:0),a=this.getMaxZoom(),r=this.getSize(),h=t.getNorthWest(),l=t.getSouthEast(),u=!0;i=o.point(i||[0,0]);do s++,n=this.project(l,s).subtract(this.project(h,s)).add(i),u=e?n.x<r.x||n.y<r.y:r.contains(n);while(u&&a>=s);return u&&e?null:e?s:s-1},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new o.Point(this._container.clientWidth,this._container.clientHeight),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(){var t=this._getTopLeftPoint();return new o.Bounds(t,t.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._initialTopLeftPoint},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t){var e=this.options.crs;return e.scale(t)/e.scale(this._zoom)},getScaleZoom:function(t){return this._zoom+Math.log(t)/Math.LN2},project:function(t,e){return e=e===i?this._zoom:e,this.options.crs.latLngToPoint(o.latLng(t),e)},unproject:function(t,e){return e=e===i?this._zoom:e,this.options.crs.pointToLatLng(o.point(t),e)},layerPointToLatLng:function(t){var e=o.point(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(o.latLng(t))._round();return e._subtract(this.getPixelOrigin())},containerPointToLayerPoint:function(t){return o.point(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return o.point(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(o.point(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(o.latLng(t)))},mouseEventToContainerPoint:function(t){return o.DomEvent.getMousePosition(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=o.DomUtil.get(t);if(!e)throw new Error("Map container not found.");if(e._leaflet)throw new Error("Map container is already initialized.");e._leaflet=!0},_initLayout:function(){var t=this._container;o.DomUtil.addClass(t,"leaflet-container"+(o.Browser.touch?" leaflet-touch":"")+(o.Browser.retina?" leaflet-retina":"")+(o.Browser.ielt9?" leaflet-oldie":"")+(this.options.fadeAnimation?" leaflet-fade-anim":""));var e=o.DomUtil.getStyle(t,"position");"absolute"!==e&&"relative"!==e&&"fixed"!==e&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._mapPane=t.mapPane=this._createPane("leaflet-map-pane",this._container),this._tilePane=t.tilePane=this._createPane("leaflet-tile-pane",this._mapPane),t.objectsPane=this._createPane("leaflet-objects-pane",this._mapPane),t.shadowPane=this._createPane("leaflet-shadow-pane"),t.overlayPane=this._createPane("leaflet-overlay-pane"),t.markerPane=this._createPane("leaflet-marker-pane"),t.popupPane=this._createPane("leaflet-popup-pane");var e=" leaflet-zoom-hide";this.options.markerZoomAnimation||(o.DomUtil.addClass(t.markerPane,e),o.DomUtil.addClass(t.shadowPane,e),o.DomUtil.addClass(t.popupPane,e))},_createPane:function(t,e){return o.DomUtil.create("div",t,e||this._panes.objectsPane)},_clearPanes:function(){this._container.removeChild(this._mapPane)},_addLayers:function(t){t=t?o.Util.isArray(t)?t:[t]:[];for(var e=0,i=t.length;i>e;e++)this.addLayer(t[e])},_resetView:function(t,e,i,n){var s=this._zoom!==e;n||(this.fire("movestart"),s&&this.fire("zoomstart")),this._zoom=e,this._initialCenter=t,this._initialTopLeftPoint=this._getNewTopLeftPoint(t),i?this._initialTopLeftPoint._add(this._getMapPanePos()):o.DomUtil.setPosition(this._mapPane,new o.Point(0,0)),this._tileLayersToLoad=this._tileLayersNum;var a=!this._loaded;this._loaded=!0,this.fire("viewreset",{hard:!i}),a&&(this.fire("load"),this.eachLayer(this._layerAdd,this)),this.fire("move"),(s||n)&&this.fire("zoomend"),this.fire("moveend",{hard:!i})},_rawPanBy:function(t){o.DomUtil.setPosition(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_updateZoomLevels:function(){var t,e=1/0,n=-(1/0),o=this._getZoomSpan();for(t in this._zoomBoundLayers){var s=this._zoomBoundLayers[t];isNaN(s.options.minZoom)||(e=Math.min(e,s.options.minZoom)),isNaN(s.options.maxZoom)||(n=Math.max(n,s.options.maxZoom))}t===i?this._layersMaxZoom=this._layersMinZoom=i:(this._layersMaxZoom=n,this._layersMinZoom=e),o!==this._getZoomSpan()&&this.fire("zoomlevelschange")},_panInsideMaxBounds:function(){this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(e){if(o.DomEvent){e=e||"on",o.DomEvent[e](this._container,"click",this._onMouseClick,this);var i,n,s=["dblclick","mousedown","mouseup","mouseenter","mouseleave","mousemove","contextmenu"];for(i=0,n=s.length;n>i;i++)o.DomEvent[e](this._container,s[i],this._fireMouseEvent,this);this.options.trackResize&&o.DomEvent[e](t,"resize",this._onResize,this)}},_onResize:function(){o.Util.cancelAnimFrame(this._resizeRequest),this._resizeRequest=o.Util.requestAnimFrame(function(){this.invalidateSize({debounceMoveend:!0})},this,!1,this._container)},_onMouseClick:function(t){!this._loaded||!t._simulated&&(this.dragging&&this.dragging.moved()||this.boxZoom&&this.boxZoom.moved())||o.DomEvent._skipped(t)||(this.fire("preclick"),this._fireMouseEvent(t))},_fireMouseEvent:function(t){if(this._loaded&&!o.DomEvent._skipped(t)){var e=t.type;if(e="mouseenter"===e?"mouseover":"mouseleave"===e?"mouseout":e,this.hasEventListeners(e)){"contextmenu"===e&&o.DomEvent.preventDefault(t);var i=this.mouseEventToContainerPoint(t),n=this.containerPointToLayerPoint(i),s=this.layerPointToLatLng(n);this.fire(e,{latlng:s,layerPoint:n,containerPoint:i,originalEvent:t})}}},_onTileLayerLoad:function(){this._tileLayersToLoad--,this._tileLayersNum&&!this._tileLayersToLoad&&this.fire("tilelayersload")},_clearHandlers:function(){for(var t=0,e=this._handlers.length;e>t;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,this):this.on("load",t,e),this},_layerAdd:function(t){t.onAdd(this),this.fire("layeradd",{layer:t})},_getMapPanePos:function(){return o.DomUtil.getPosition(this._mapPane)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(){return this.getPixelOrigin().subtract(this._getMapPanePos())},_getNewTopLeftPoint:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewTopLeftPoint(i,e).add(this._getMapPanePos());return this.project(t,e)._subtract(n)},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){if(!i)return t;var n=this.project(t,e),s=this.getSize().divideBy(2),a=new o.Bounds(n.subtract(s),n.add(s)),r=this._getBoundsOffset(a,i,e);return this.unproject(n.add(r),e)},_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),n=new o.Bounds(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(n,e))},_getBoundsOffset:function(t,e,i){var n=this.project(e.getNorthWest(),i).subtract(t.min),s=this.project(e.getSouthEast(),i).subtract(t.max),a=this._rebound(n.x,-s.x),r=this._rebound(n.y,-s.y);return new o.Point(a,r)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom();return Math.max(e,Math.min(i,t))}}),o.map=function(t,e){return new o.Map(t,e)},o.Projection.Mercator={MAX_LATITUDE:85.0840591556,R_MINOR:6356752.314245179,R_MAJOR:6378137,project:function(t){var e=o.LatLng.DEG_TO_RAD,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),s=this.R_MAJOR,a=this.R_MINOR,r=t.lng*e*s,h=n*e,l=a/s,u=Math.sqrt(1-l*l),c=u*Math.sin(h);c=Math.pow((1-c)/(1+c),.5*u);var d=Math.tan(.5*(.5*Math.PI-h))/c;return h=-s*Math.log(d),new o.Point(r,h)},unproject:function(t){for(var e,i=o.LatLng.RAD_TO_DEG,n=this.R_MAJOR,s=this.R_MINOR,a=t.x*i/n,r=s/n,h=Math.sqrt(1-r*r),l=Math.exp(-t.y/n),u=Math.PI/2-2*Math.atan(l),c=15,d=1e-7,p=c,_=.1;Math.abs(_)>d&&--p>0;)e=h*Math.sin(u),_=Math.PI/2-2*Math.atan(l*Math.pow((1-e)/(1+e),.5*h))-u,u+=_;return new o.LatLng(u*i,a)}},o.CRS.EPSG3395=o.extend({},o.CRS,{code:"EPSG:3395",projection:o.Projection.Mercator,
transformation:function(){var t=o.Projection.Mercator,e=t.R_MAJOR,i=.5/(Math.PI*e);return new o.Transformation(i,.5,-i,.5)}()}),o.TileLayer=o.Class.extend({includes:o.Mixin.Events,options:{minZoom:0,maxZoom:18,tileSize:256,subdomains:"abc",errorTileUrl:"",attribution:"",zoomOffset:0,opacity:1,unloadInvisibleTiles:o.Browser.mobile,updateWhenIdle:o.Browser.mobile},initialize:function(t,e){e=o.setOptions(this,e),e.detectRetina&&o.Browser.retina&&e.maxZoom>0&&(e.tileSize=Math.floor(e.tileSize/2),e.zoomOffset++,e.minZoom>0&&e.minZoom--,this.options.maxZoom--),e.bounds&&(e.bounds=o.latLngBounds(e.bounds)),this._url=t;var i=this.options.subdomains;"string"==typeof i&&(this.options.subdomains=i.split(""))},onAdd:function(t){this._map=t,this._animated=t._zoomAnimated,this._initContainer(),t.on({viewreset:this._reset,moveend:this._update},this),this._animated&&t.on({zoomanim:this._animateZoom,zoomend:this._endZoomAnim},this),this.options.updateWhenIdle||(this._limitedUpdate=o.Util.limitExecByInterval(this._update,150,this),t.on("move",this._limitedUpdate,this)),this._reset(),this._update()},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){this._container.parentNode.removeChild(this._container),t.off({viewreset:this._reset,moveend:this._update},this),this._animated&&t.off({zoomanim:this._animateZoom,zoomend:this._endZoomAnim},this),this.options.updateWhenIdle||t.off("move",this._limitedUpdate,this),this._container=null,this._map=null},bringToFront:function(){var t=this._map._panes.tilePane;return this._container&&(t.appendChild(this._container),this._setAutoZIndex(t,Math.max)),this},bringToBack:function(){var t=this._map._panes.tilePane;return this._container&&(t.insertBefore(this._container,t.firstChild),this._setAutoZIndex(t,Math.min)),this},getAttribution:function(){return this.options.attribution},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},setUrl:function(t,e){return this._url=t,e||this.redraw(),this},redraw:function(){return this._map&&(this._reset({hard:!0}),this._update()),this},_updateZIndex:function(){this._container&&this.options.zIndex!==i&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t,e){var i,n,o,s=t.children,a=-e(1/0,-(1/0));for(n=0,o=s.length;o>n;n++)s[n]!==this._container&&(i=parseInt(s[n].style.zIndex,10),isNaN(i)||(a=e(a,i)));this.options.zIndex=this._container.style.zIndex=(isFinite(a)?a:0)+e(1,-1)},_updateOpacity:function(){var t,e=this._tiles;if(o.Browser.ielt9)for(t in e)o.DomUtil.setOpacity(e[t],this.options.opacity);else o.DomUtil.setOpacity(this._container,this.options.opacity)},_initContainer:function(){var t=this._map._panes.tilePane;if(!this._container){if(this._container=o.DomUtil.create("div","leaflet-layer"),this._updateZIndex(),this._animated){var e="leaflet-tile-container";this._bgBuffer=o.DomUtil.create("div",e,this._container),this._tileContainer=o.DomUtil.create("div",e,this._container)}else this._tileContainer=this._container;t.appendChild(this._container),this.options.opacity<1&&this._updateOpacity()}},_reset:function(t){for(var e in this._tiles)this.fire("tileunload",{tile:this._tiles[e]});this._tiles={},this._tilesToLoad=0,this.options.reuseTiles&&(this._unusedTiles=[]),this._tileContainer.innerHTML="",this._animated&&t&&t.hard&&this._clearBgBuffer(),this._initContainer()},_getTileSize:function(){var t=this._map,e=t.getZoom()+this.options.zoomOffset,i=this.options.maxNativeZoom,n=this.options.tileSize;return i&&e>i&&(n=Math.round(t.getZoomScale(e)/t.getZoomScale(i)*n)),n},_update:function(){if(this._map){var t=this._map,e=t.getPixelBounds(),i=t.getZoom(),n=this._getTileSize();if(!(i>this.options.maxZoom||i<this.options.minZoom)){var s=o.bounds(e.min.divideBy(n)._floor(),e.max.divideBy(n)._floor());this._addTilesFromCenterOut(s),(this.options.unloadInvisibleTiles||this.options.reuseTiles)&&this._removeOtherTiles(s)}}},_addTilesFromCenterOut:function(t){var i,n,s,a=[],r=t.getCenter();for(i=t.min.y;i<=t.max.y;i++)for(n=t.min.x;n<=t.max.x;n++)s=new o.Point(n,i),this._tileShouldBeLoaded(s)&&a.push(s);var h=a.length;if(0!==h){a.sort(function(t,e){return t.distanceTo(r)-e.distanceTo(r)});var l=e.createDocumentFragment();for(this._tilesToLoad||this.fire("loading"),this._tilesToLoad+=h,n=0;h>n;n++)this._addTile(a[n],l);this._tileContainer.appendChild(l)}},_tileShouldBeLoaded:function(t){if(t.x+":"+t.y in this._tiles)return!1;var e=this.options;if(!e.continuousWorld){var i=this._getWrapTileNum();if(e.noWrap&&(t.x<0||t.x>=i.x)||t.y<0||t.y>=i.y)return!1}if(e.bounds){var n=this._getTileSize(),o=t.multiplyBy(n),s=o.add([n,n]),a=this._map.unproject(o),r=this._map.unproject(s);if(e.continuousWorld||e.noWrap||(a=a.wrap(),r=r.wrap()),!e.bounds.intersects([a,r]))return!1}return!0},_removeOtherTiles:function(t){var e,i,n,o;for(o in this._tiles)e=o.split(":"),i=parseInt(e[0],10),n=parseInt(e[1],10),(i<t.min.x||i>t.max.x||n<t.min.y||n>t.max.y)&&this._removeTile(o)},_removeTile:function(t){var e=this._tiles[t];this.fire("tileunload",{tile:e,url:e.src}),this.options.reuseTiles?(o.DomUtil.removeClass(e,"leaflet-tile-loaded"),this._unusedTiles.push(e)):e.parentNode===this._tileContainer&&this._tileContainer.removeChild(e),o.Browser.android||(e.onload=null,e.src=o.Util.emptyImageUrl),delete this._tiles[t]},_addTile:function(t,e){var i=this._getTilePos(t),n=this._getTile();o.DomUtil.setPosition(n,i,o.Browser.chrome),this._tiles[t.x+":"+t.y]=n,this._loadTile(n,t),n.parentNode!==this._tileContainer&&e.appendChild(n)},_getZoomForUrl:function(){var t=this.options,e=this._map.getZoom();return t.zoomReverse&&(e=t.maxZoom-e),e+=t.zoomOffset,t.maxNativeZoom?Math.min(e,t.maxNativeZoom):e},_getTilePos:function(t){var e=this._map.getPixelOrigin(),i=this._getTileSize();return t.multiplyBy(i).subtract(e)},getTileUrl:function(t){return o.Util.template(this._url,o.extend({s:this._getSubdomain(t),z:t.z,x:t.x,y:t.y},this.options))},_getWrapTileNum:function(){var t=this._map.options.crs,e=t.getSize(this._map.getZoom());return e.divideBy(this._getTileSize())._floor()},_adjustTilePoint:function(t){var e=this._getWrapTileNum();this.options.continuousWorld||this.options.noWrap||(t.x=(t.x%e.x+e.x)%e.x),this.options.tms&&(t.y=e.y-t.y-1),t.z=this._getZoomForUrl()},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_getTile:function(){if(this.options.reuseTiles&&this._unusedTiles.length>0){var t=this._unusedTiles.pop();return this._resetTile(t),t}return this._createTile()},_resetTile:function(){},_createTile:function(){var t=o.DomUtil.create("img","leaflet-tile");return t.style.width=t.style.height=this._getTileSize()+"px",t.galleryimg="no",t.onselectstart=t.onmousemove=o.Util.falseFn,o.Browser.ielt9&&this.options.opacity!==i&&o.DomUtil.setOpacity(t,this.options.opacity),o.Browser.mobileWebkit3d&&(t.style.WebkitBackfaceVisibility="hidden"),t},_loadTile:function(t,e){t._layer=this,t.onload=this._tileOnLoad,t.onerror=this._tileOnError,this._adjustTilePoint(e),t.src=this.getTileUrl(e),this.fire("tileloadstart",{tile:t,url:t.src})},_tileLoaded:function(){this._tilesToLoad--,this._animated&&o.DomUtil.addClass(this._tileContainer,"leaflet-zoom-animated"),this._tilesToLoad||(this.fire("load"),this._animated&&(clearTimeout(this._clearBgBufferTimer),this._clearBgBufferTimer=setTimeout(o.bind(this._clearBgBuffer,this),500)))},_tileOnLoad:function(){var t=this._layer;this.src!==o.Util.emptyImageUrl&&(o.DomUtil.addClass(this,"leaflet-tile-loaded"),t.fire("tileload",{tile:this,url:this.src})),t._tileLoaded()},_tileOnError:function(){var t=this._layer;t.fire("tileerror",{tile:this,url:this.src});var e=t.options.errorTileUrl;e&&(this.src=e),t._tileLoaded()}}),o.tileLayer=function(t,e){return new o.TileLayer(t,e)},o.TileLayer.WMS=o.TileLayer.extend({defaultWmsParams:{service:"WMS",request:"GetMap",version:"1.1.1",layers:"",styles:"",format:"image/jpeg",transparent:!1},initialize:function(t,e){this._url=t;var i=o.extend({},this.defaultWmsParams),n=e.tileSize||this.options.tileSize;e.detectRetina&&o.Browser.retina?i.width=i.height=2*n:i.width=i.height=n;for(var s in e)this.options.hasOwnProperty(s)||"crs"===s||(i[s]=e[s]);this.wmsParams=i,o.setOptions(this,e)},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,o.TileLayer.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._map,i=this.options.tileSize,n=t.multiplyBy(i),s=n.add([i,i]),a=this._crs.project(e.unproject(n,t.z)),r=this._crs.project(e.unproject(s,t.z)),h=this._wmsVersion>=1.3&&this._crs===o.CRS.EPSG4326?[r.y,a.x,a.y,r.x].join(","):[a.x,r.y,r.x,a.y].join(","),l=o.Util.template(this._url,{s:this._getSubdomain(t)});return l+o.Util.getParamString(this.wmsParams,l,!0)+"&BBOX="+h},setParams:function(t,e){return o.extend(this.wmsParams,t),e||this.redraw(),this}}),o.tileLayer.wms=function(t,e){return new o.TileLayer.WMS(t,e)},o.TileLayer.Canvas=o.TileLayer.extend({options:{async:!1},initialize:function(t){o.setOptions(this,t)},redraw:function(){this._map&&(this._reset({hard:!0}),this._update());for(var t in this._tiles)this._redrawTile(this._tiles[t]);return this},_redrawTile:function(t){this.drawTile(t,t._tilePoint,this._map._zoom)},_createTile:function(){var t=o.DomUtil.create("canvas","leaflet-tile");return t.width=t.height=this.options.tileSize,t.onselectstart=t.onmousemove=o.Util.falseFn,t},_loadTile:function(t,e){t._layer=this,t._tilePoint=e,this._redrawTile(t),this.options.async||this.tileDrawn(t)},drawTile:function(){},tileDrawn:function(t){this._tileOnLoad.call(t)}}),o.tileLayer.canvas=function(t){return new o.TileLayer.Canvas(t)},o.ImageOverlay=o.Class.extend({includes:o.Mixin.Events,options:{opacity:1},initialize:function(t,e,i){this._url=t,this._bounds=o.latLngBounds(e),o.setOptions(this,i)},onAdd:function(t){this._map=t,this._image||this._initImage(),t._panes.overlayPane.appendChild(this._image),t.on("viewreset",this._reset,this),t.options.zoomAnimation&&o.Browser.any3d&&t.on("zoomanim",this._animateZoom,this),this._reset()},onRemove:function(t){t.getPanes().overlayPane.removeChild(this._image),t.off("viewreset",this._reset,this),t.options.zoomAnimation&&t.off("zoomanim",this._animateZoom,this)},addTo:function(t){return t.addLayer(this),this},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},bringToFront:function(){return this._image&&this._map._panes.overlayPane.appendChild(this._image),this},bringToBack:function(){var t=this._map._panes.overlayPane;return this._image&&t.insertBefore(this._image,t.firstChild),this},setUrl:function(t){this._url=t,this._image.src=this._url},getAttribution:function(){return this.options.attribution},_initImage:function(){this._image=o.DomUtil.create("img","leaflet-image-layer"),this._map.options.zoomAnimation&&o.Browser.any3d?o.DomUtil.addClass(this._image,"leaflet-zoom-animated"):o.DomUtil.addClass(this._image,"leaflet-zoom-hide"),this._updateOpacity(),o.extend(this._image,{galleryimg:"no",onselectstart:o.Util.falseFn,onmousemove:o.Util.falseFn,onload:o.bind(this._onImageLoad,this),src:this._url})},_animateZoom:function(t){var e=this._map,i=this._image,n=e.getZoomScale(t.zoom),s=this._bounds.getNorthWest(),a=this._bounds.getSouthEast(),r=e._latLngToNewLayerPoint(s,t.zoom,t.center),h=e._latLngToNewLayerPoint(a,t.zoom,t.center)._subtract(r),l=r._add(h._multiplyBy(.5*(1-1/n)));i.style[o.DomUtil.TRANSFORM]=o.DomUtil.getTranslateString(l)+" scale("+n+") "},_reset:function(){var t=this._image,e=this._map.latLngToLayerPoint(this._bounds.getNorthWest()),i=this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(e);o.DomUtil.setPosition(t,e),t.style.width=i.x+"px",t.style.height=i.y+"px"},_onImageLoad:function(){this.fire("load")},_updateOpacity:function(){o.DomUtil.setOpacity(this._image,this.options.opacity)}}),o.imageOverlay=function(t,e,i){return new o.ImageOverlay(t,e,i)},o.Icon=o.Class.extend({options:{className:""},initialize:function(t){o.setOptions(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n;return n=e&&"IMG"===e.tagName?this._createImg(i,e):this._createImg(i),this._setIconStyles(n,t),n},_setIconStyles:function(t,e){var i,n=this.options,s=o.point(n[e+"Size"]);i="shadow"===e?o.point(n.shadowAnchor||n.iconAnchor):o.point(n.iconAnchor),!i&&s&&(i=s.divideBy(2,!0)),t.className="leaflet-marker-"+e+" "+n.className,i&&(t.style.marginLeft=-i.x+"px",t.style.marginTop=-i.y+"px"),s&&(t.style.width=s.x+"px",t.style.height=s.y+"px")},_createImg:function(t,i){return i=i||e.createElement("img"),i.src=t,i},_getIconUrl:function(t){return o.Browser.retina&&this.options[t+"RetinaUrl"]?this.options[t+"RetinaUrl"]:this.options[t+"Url"]}}),o.icon=function(t){return new o.Icon(t)},o.Icon.Default=o.Icon.extend({options:{iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]},_getIconUrl:function(t){var e=t+"Url";if(this.options[e])return this.options[e];o.Browser.retina&&"icon"===t&&(t+="-2x");var i=o.Icon.Default.imagePath;if(!i)throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");return i+"/marker-"+t+".png"}}),o.Icon.Default.imagePath=function(){var t,i,n,o,s,a=e.getElementsByTagName("script"),r=/[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;for(t=0,i=a.length;i>t;t++)if(n=a[t].src,o=n.match(r))return s=n.split(r)[0],(s?s+"/":"")+"images"}(),o.Marker=o.Class.extend({includes:o.Mixin.Events,options:{icon:new o.Icon.Default,title:"",alt:"",clickable:!0,draggable:!1,keyboard:!0,zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250},initialize:function(t,e){o.setOptions(this,e),this._latlng=o.latLng(t)},onAdd:function(t){this._map=t,t.on("viewreset",this.update,this),this._initIcon(),this.update(),this.fire("add"),t.options.zoomAnimation&&t.options.markerZoomAnimation&&t.on("zoomanim",this._animateZoom,this)},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){this.dragging&&this.dragging.disable(),this._removeIcon(),this._removeShadow(),this.fire("remove"),t.off({viewreset:this.update,zoomanim:this._animateZoom},this),this._map=null},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=o.latLng(t),this.update(),this.fire("move",{latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update(),this},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup),this},update:function(){return this._icon&&this._setPos(this._map.latLngToLayerPoint(this._latlng).round()),this},_initIcon:function(){var t=this.options,e=this._map,i=e.options.zoomAnimation&&e.options.markerZoomAnimation,n=i?"leaflet-zoom-animated":"leaflet-zoom-hide",s=t.icon.createIcon(this._icon),a=!1;s!==this._icon&&(this._icon&&this._removeIcon(),a=!0,t.title&&(s.title=t.title),t.alt&&(s.alt=t.alt)),o.DomUtil.addClass(s,n),t.keyboard&&(s.tabIndex="0"),this._icon=s,this._initInteraction(),t.riseOnHover&&o.DomEvent.on(s,"mouseover",this._bringToFront,this).on(s,"mouseout",this._resetZIndex,this);var r=t.icon.createShadow(this._shadow),h=!1;r!==this._shadow&&(this._removeShadow(),h=!0),r&&o.DomUtil.addClass(r,n),this._shadow=r,t.opacity<1&&this._updateOpacity();var l=this._map._panes;a&&l.markerPane.appendChild(this._icon),r&&h&&l.shadowPane.appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&o.DomEvent.off(this._icon,"mouseover",this._bringToFront).off(this._icon,"mouseout",this._resetZIndex),this._map._panes.markerPane.removeChild(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&this._map._panes.shadowPane.removeChild(this._shadow),this._shadow=null},_setPos:function(t){o.DomUtil.setPosition(this._icon,t),this._shadow&&o.DomUtil.setPosition(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon.style.zIndex=this._zIndex+t},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.clickable){var t=this._icon,e=["dblclick","mousedown","mouseover","mouseout","contextmenu"];o.DomUtil.addClass(t,"leaflet-clickable"),o.DomEvent.on(t,"click",this._onMouseClick,this),o.DomEvent.on(t,"keypress",this._onKeyPress,this);for(var i=0;i<e.length;i++)o.DomEvent.on(t,e[i],this._fireMouseEvent,this);o.Handler.MarkerDrag&&(this.dragging=new o.Handler.MarkerDrag(this),this.options.draggable&&this.dragging.enable())}},_onMouseClick:function(t){var e=this.dragging&&this.dragging.moved();(this.hasEventListeners(t.type)||e)&&o.DomEvent.stopPropagation(t),e||(this.dragging&&this.dragging._enabled||!this._map.dragging||!this._map.dragging.moved())&&this.fire(t.type,{originalEvent:t,latlng:this._latlng})},_onKeyPress:function(t){13===t.keyCode&&this.fire("click",{originalEvent:t,latlng:this._latlng})},_fireMouseEvent:function(t){this.fire(t.type,{originalEvent:t,latlng:this._latlng}),"contextmenu"===t.type&&this.hasEventListeners(t.type)&&o.DomEvent.preventDefault(t),"mousedown"!==t.type?o.DomEvent.stopPropagation(t):o.DomEvent.preventDefault(t)},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){o.DomUtil.setOpacity(this._icon,this.options.opacity),this._shadow&&o.DomUtil.setOpacity(this._shadow,this.options.opacity)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)}}),o.marker=function(t,e){return new o.Marker(t,e)},o.DivIcon=o.Icon.extend({options:{iconSize:[12,12],className:"leaflet-div-icon",html:!1},createIcon:function(t){var i=t&&"DIV"===t.tagName?t:e.createElement("div"),n=this.options;return n.html!==!1?i.innerHTML=n.html:i.innerHTML="",n.bgPos&&(i.style.backgroundPosition=-n.bgPos.x+"px "+-n.bgPos.y+"px"),this._setIconStyles(i,"icon"),i},createShadow:function(){return null}}),o.divIcon=function(t){return new o.DivIcon(t)},o.Map.mergeOptions({closePopupOnClick:!0}),o.Popup=o.Class.extend({includes:o.Mixin.Events,options:{minWidth:50,maxWidth:300,autoPan:!0,closeButton:!0,offset:[0,7],autoPanPadding:[5,5],keepInView:!1,className:"",zoomAnimation:!0},initialize:function(t,e){o.setOptions(this,t),this._source=e,this._animated=o.Browser.any3d&&this.options.zoomAnimation,this._isOpen=!1},onAdd:function(t){this._map=t,this._container||this._initLayout();var e=t.options.fadeAnimation;e&&o.DomUtil.setOpacity(this._container,0),t._panes.popupPane.appendChild(this._container),t.on(this._getEvents(),this),this.update(),e&&o.DomUtil.setOpacity(this._container,1),this.fire("open"),t.fire("popupopen",{popup:this}),this._source&&this._source.fire("popupopen",{popup:this})},addTo:function(t){return t.addLayer(this),this},openOn:function(t){return t.openPopup(this),this},onRemove:function(t){t._panes.popupPane.removeChild(this._container),o.Util.falseFn(this._container.offsetWidth),t.off(this._getEvents(),this),t.options.fadeAnimation&&o.DomUtil.setOpacity(this._container,0),this._map=null,this.fire("close"),t.fire("popupclose",{popup:this}),this._source&&this._source.fire("popupclose",{popup:this})},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=o.latLng(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},_getEvents:function(){var t={viewreset:this._updatePosition};return this._animated&&(t.zoomanim=this._zoomAnimation),("closeOnClick"in this.options?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this._close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_close:function(){this._map&&this._map.closePopup(this)},_initLayout:function(){var t,e="leaflet-popup",i=e+" "+this.options.className+" leaflet-zoom-"+(this._animated?"animated":"hide"),n=this._container=o.DomUtil.create("div",i);this.options.closeButton&&(t=this._closeButton=o.DomUtil.create("a",e+"-close-button",n),t.href="#close",t.innerHTML="&#215;",o.DomEvent.disableClickPropagation(t),o.DomEvent.on(t,"click",this._onCloseButtonClick,this));var s=this._wrapper=o.DomUtil.create("div",e+"-content-wrapper",n);o.DomEvent.disableClickPropagation(s),this._contentNode=o.DomUtil.create("div",e+"-content",s),o.DomEvent.disableScrollPropagation(this._contentNode),o.DomEvent.on(s,"contextmenu",o.DomEvent.stopPropagation),this._tipContainer=o.DomUtil.create("div",e+"-tip-container",n),this._tip=o.DomUtil.create("div",e+"-tip",this._tipContainer)},_updateContent:function(){if(this._content){if("string"==typeof this._content)this._contentNode.innerHTML=this._content;else{for(;this._contentNode.hasChildNodes();)this._contentNode.removeChild(this._contentNode.firstChild);this._contentNode.appendChild(this._content)}this.fire("contentupdate")}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var n=t.offsetHeight,s=this.options.maxHeight,a="leaflet-popup-scrolled";s&&n>s?(e.height=s+"px",o.DomUtil.addClass(t,a)):o.DomUtil.removeClass(t,a),this._containerWidth=this._container.offsetWidth},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=this._animated,i=o.point(this.options.offset);e&&o.DomUtil.setPosition(this._container,t),this._containerBottom=-i.y-(e?0:t.y),this._containerLeft=-Math.round(this._containerWidth/2)+i.x+(e?0:t.x),this._container.style.bottom=this._containerBottom+"px",this._container.style.left=this._containerLeft+"px"}},_zoomAnimation:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);o.DomUtil.setPosition(this._container,e)},_adjustPan:function(){if(this.options.autoPan){var t=this._map,e=this._container.offsetHeight,i=this._containerWidth,n=new o.Point(this._containerLeft,-e-this._containerBottom);this._animated&&n._add(o.DomUtil.getPosition(this._container));var s=t.layerPointToContainerPoint(n),a=o.point(this.options.autoPanPadding),r=o.point(this.options.autoPanPaddingTopLeft||a),h=o.point(this.options.autoPanPaddingBottomRight||a),l=t.getSize(),u=0,c=0;s.x+i+h.x>l.x&&(u=s.x+i-l.x+h.x),s.x-u-r.x<0&&(u=s.x-r.x),s.y+e+h.y>l.y&&(c=s.y+e-l.y+h.y),s.y-c-r.y<0&&(c=s.y-r.y),(u||c)&&t.fire("autopanstart").panBy([u,c])}},_onCloseButtonClick:function(t){this._close(),o.DomEvent.stop(t)}}),o.popup=function(t,e){return new o.Popup(t,e)},o.Map.include({openPopup:function(t,e,i){if(this.closePopup(),!(t instanceof o.Popup)){var n=t;t=new o.Popup(i).setLatLng(e).setContent(n)}return t._isOpen=!0,this._popup=t,this.addLayer(t)},closePopup:function(t){return t&&t!==this._popup||(t=this._popup,this._popup=null),t&&(this.removeLayer(t),t._isOpen=!1),this}}),o.Marker.include({openPopup:function(){return this._popup&&this._map&&!this._map.hasLayer(this._popup)&&(this._popup.setLatLng(this._latlng),this._map.openPopup(this._popup)),this},closePopup:function(){return this._popup&&this._popup._close(),this},togglePopup:function(){return this._popup&&(this._popup._isOpen?this.closePopup():this.openPopup()),this},bindPopup:function(t,e){var i=o.point(this.options.icon.options.popupAnchor||[0,0]);return i=i.add(o.Popup.prototype.options.offset),e&&e.offset&&(i=i.add(e.offset)),e=o.extend({offset:i},e),this._popupHandlersAdded||(this.on("click",this.togglePopup,this).on("remove",this.closePopup,this).on("move",this._movePopup,this),this._popupHandlersAdded=!0),t instanceof o.Popup?(o.setOptions(t,e),this._popup=t,t._source=this):this._popup=new o.Popup(e,this).setContent(t),this},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},unbindPopup:function(){return this._popup&&(this._popup=null,this.off("click",this.togglePopup,this).off("remove",this.closePopup,this).off("move",this._movePopup,this),this._popupHandlersAdded=!1),this},getPopup:function(){return this._popup},_movePopup:function(t){this._popup.setLatLng(t.latlng)}}),o.LayerGroup=o.Class.extend({initialize:function(t){this._layers={};var e,i;if(t)for(e=0,i=t.length;i>e;e++)this.addLayer(t[e])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){return t?t in this._layers||this.getLayerId(t)in this._layers:!1},clearLayers:function(){return this.eachLayer(this.removeLayer,this),this},invoke:function(t){var e,i,n=Array.prototype.slice.call(arguments,1);for(e in this._layers)i=this._layers[e],i[t]&&i[t].apply(i,n);return this},onAdd:function(t){this._map=t,this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t),this._map=null},addTo:function(t){return t.addLayer(this),this},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];for(var e in this._layers)t.push(this._layers[e]);return t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return o.stamp(t)}}),o.layerGroup=function(t){return new o.LayerGroup(t)},o.FeatureGroup=o.LayerGroup.extend({includes:o.Mixin.Events,statics:{EVENTS:"click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose"},addLayer:function(t){return this.hasLayer(t)?this:("on"in t&&t.on(o.FeatureGroup.EVENTS,this._propagateEvent,this),o.LayerGroup.prototype.addLayer.call(this,t),this._popupContent&&t.bindPopup&&t.bindPopup(this._popupContent,this._popupOptions),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),"off"in t&&t.off(o.FeatureGroup.EVENTS,this._propagateEvent,this),o.LayerGroup.prototype.removeLayer.call(this,t),this._popupContent&&this.invoke("unbindPopup"),this.fire("layerremove",{layer:t})):this},bindPopup:function(t,e){return this._popupContent=t,this._popupOptions=e,this.invoke("bindPopup",t,e)},openPopup:function(t){for(var e in this._layers){this._layers[e].openPopup(t);break}return this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new o.LatLngBounds;return this.eachLayer(function(e){t.extend(e instanceof o.Marker?e.getLatLng():e.getBounds())}),t},_propagateEvent:function(t){t=o.extend({layer:t.target,target:this},t),this.fire(t.type,t)}}),o.featureGroup=function(t){return new o.FeatureGroup(t)},o.Path=o.Class.extend({includes:[o.Mixin.Events],statics:{CLIP_PADDING:function(){var e=o.Browser.mobile?1280:2e3,i=(e/Math.max(t.outerWidth,t.outerHeight)-1)/2;return Math.max(0,Math.min(.5,i))}()},options:{stroke:!0,color:"#0033ff",dashArray:null,lineCap:null,lineJoin:null,weight:5,opacity:.5,fill:!1,fillColor:null,fillOpacity:.2,clickable:!0},initialize:function(t){o.setOptions(this,t)},onAdd:function(t){this._map=t,this._container||(this._initElements(),this._initEvents()),this.projectLatlngs(),this._updatePath(),this._container&&this._map._pathRoot.appendChild(this._container),this.fire("add"),t.on({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){t._pathRoot.removeChild(this._container),this.fire("remove"),this._map=null,o.Browser.vml&&(this._container=null,this._stroke=null,this._fill=null),t.off({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},projectLatlngs:function(){},setStyle:function(t){return o.setOptions(this,t),this._container&&this._updateStyle(),this},redraw:function(){return this._map&&(this.projectLatlngs(),this._updatePath()),this}}),o.Map.include({_updatePathViewport:function(){var t=o.Path.CLIP_PADDING,e=this.getSize(),i=o.DomUtil.getPosition(this._mapPane),n=i.multiplyBy(-1)._subtract(e.multiplyBy(t)._round()),s=n.add(e.multiplyBy(1+2*t)._round());this._pathViewport=new o.Bounds(n,s)}}),o.Path.SVG_NS="http://www.w3.org/2000/svg",o.Browser.svg=!(!e.createElementNS||!e.createElementNS(o.Path.SVG_NS,"svg").createSVGRect),o.Path=o.Path.extend({statics:{SVG:o.Browser.svg},bringToFront:function(){var t=this._map._pathRoot,e=this._container;return e&&t.lastChild!==e&&t.appendChild(e),this},bringToBack:function(){var t=this._map._pathRoot,e=this._container,i=t.firstChild;return e&&i!==e&&t.insertBefore(e,i),this},getPathString:function(){},_createElement:function(t){return e.createElementNS(o.Path.SVG_NS,t)},_initElements:function(){this._map._initPathRoot(),this._initPath(),this._initStyle()},_initPath:function(){this._container=this._createElement("g"),this._path=this._createElement("path"),this.options.className&&o.DomUtil.addClass(this._path,this.options.className),this._container.appendChild(this._path)},_initStyle:function(){this.options.stroke&&(this._path.setAttribute("stroke-linejoin","round"),this._path.setAttribute("stroke-linecap","round")),this.options.fill&&this._path.setAttribute("fill-rule","evenodd"),this.options.pointerEvents&&this._path.setAttribute("pointer-events",this.options.pointerEvents),this.options.clickable||this.options.pointerEvents||this._path.setAttribute("pointer-events","none"),this._updateStyle()},_updateStyle:function(){this.options.stroke?(this._path.setAttribute("stroke",this.options.color),this._path.setAttribute("stroke-opacity",this.options.opacity),this._path.setAttribute("stroke-width",this.options.weight),this.options.dashArray?this._path.setAttribute("stroke-dasharray",this.options.dashArray):this._path.removeAttribute("stroke-dasharray"),this.options.lineCap&&this._path.setAttribute("stroke-linecap",this.options.lineCap),this.options.lineJoin&&this._path.setAttribute("stroke-linejoin",this.options.lineJoin)):this._path.setAttribute("stroke","none"),this.options.fill?(this._path.setAttribute("fill",this.options.fillColor||this.options.color),this._path.setAttribute("fill-opacity",this.options.fillOpacity)):this._path.setAttribute("fill","none")},_updatePath:function(){var t=this.getPathString();t||(t="M0 0"),this._path.setAttribute("d",t)},_initEvents:function(){if(this.options.clickable){(o.Browser.svg||!o.Browser.vml)&&o.DomUtil.addClass(this._path,"leaflet-clickable"),o.DomEvent.on(this._container,"click",this._onMouseClick,this);for(var t=["dblclick","mousedown","mouseover","mouseout","mousemove","contextmenu"],e=0;e<t.length;e++)o.DomEvent.on(this._container,t[e],this._fireMouseEvent,this)}},_onMouseClick:function(t){this._map.dragging&&this._map.dragging.moved()||this._fireMouseEvent(t)},_fireMouseEvent:function(t){if(this._map&&this.hasEventListeners(t.type)){var e=this._map,i=e.mouseEventToContainerPoint(t),n=e.containerPointToLayerPoint(i),s=e.layerPointToLatLng(n);this.fire(t.type,{latlng:s,layerPoint:n,containerPoint:i,originalEvent:t}),"contextmenu"===t.type&&o.DomEvent.preventDefault(t),"mousemove"!==t.type&&o.DomEvent.stopPropagation(t)}}}),o.Map.include({_initPathRoot:function(){this._pathRoot||(this._pathRoot=o.Path.prototype._createElement("svg"),this._panes.overlayPane.appendChild(this._pathRoot),this.options.zoomAnimation&&o.Browser.any3d?(o.DomUtil.addClass(this._pathRoot,"leaflet-zoom-animated"),
this.on({zoomanim:this._animatePathZoom,zoomend:this._endPathZoom})):o.DomUtil.addClass(this._pathRoot,"leaflet-zoom-hide"),this.on("moveend",this._updateSvgViewport),this._updateSvgViewport())},_animatePathZoom:function(t){var e=this.getZoomScale(t.zoom),i=this._getCenterOffset(t.center)._multiplyBy(-e)._add(this._pathViewport.min);this._pathRoot.style[o.DomUtil.TRANSFORM]=o.DomUtil.getTranslateString(i)+" scale("+e+") ",this._pathZooming=!0},_endPathZoom:function(){this._pathZooming=!1},_updateSvgViewport:function(){if(!this._pathZooming){this._updatePathViewport();var t=this._pathViewport,e=t.min,i=t.max,n=i.x-e.x,s=i.y-e.y,a=this._pathRoot,r=this._panes.overlayPane;o.Browser.mobileWebkit&&r.removeChild(a),o.DomUtil.setPosition(a,e),a.setAttribute("width",n),a.setAttribute("height",s),a.setAttribute("viewBox",[e.x,e.y,n,s].join(" ")),o.Browser.mobileWebkit&&r.appendChild(a)}}}),o.Path.include({bindPopup:function(t,e){return t instanceof o.Popup?this._popup=t:((!this._popup||e)&&(this._popup=new o.Popup(e,this)),this._popup.setContent(t)),this._popupHandlersAdded||(this.on("click",this._openPopup,this).on("remove",this.closePopup,this),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this._popup=null,this.off("click",this._openPopup).off("remove",this.closePopup),this._popupHandlersAdded=!1),this},openPopup:function(t){return this._popup&&(t=t||this._latlng||this._latlngs[Math.floor(this._latlngs.length/2)],this._openPopup({latlng:t})),this},closePopup:function(){return this._popup&&this._popup._close(),this},_openPopup:function(t){this._popup.setLatLng(t.latlng),this._map.openPopup(this._popup)}}),o.Browser.vml=!o.Browser.svg&&function(){try{var t=e.createElement("div");t.innerHTML='<v:shape adj="1"/>';var i=t.firstChild;return i.style.behavior="url(#default#VML)",i&&"object"==typeof i.adj}catch(n){return!1}}(),o.Path=o.Browser.svg||!o.Browser.vml?o.Path:o.Path.extend({statics:{VML:!0,CLIP_PADDING:.02},_createElement:function(){try{return e.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return e.createElement("<lvml:"+t+' class="lvml">')}}catch(t){return function(t){return e.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),_initPath:function(){var t=this._container=this._createElement("shape");o.DomUtil.addClass(t,"leaflet-vml-shape"+(this.options.className?" "+this.options.className:"")),this.options.clickable&&o.DomUtil.addClass(t,"leaflet-clickable"),t.coordsize="1 1",this._path=this._createElement("path"),t.appendChild(this._path),this._map._pathRoot.appendChild(t)},_initStyle:function(){this._updateStyle()},_updateStyle:function(){var t=this._stroke,e=this._fill,i=this.options,n=this._container;n.stroked=i.stroke,n.filled=i.fill,i.stroke?(t||(t=this._stroke=this._createElement("stroke"),t.endcap="round",n.appendChild(t)),t.weight=i.weight+"px",t.color=i.color,t.opacity=i.opacity,i.dashArray?t.dashStyle=o.Util.isArray(i.dashArray)?i.dashArray.join(" "):i.dashArray.replace(/( *, *)/g," "):t.dashStyle="",i.lineCap&&(t.endcap=i.lineCap.replace("butt","flat")),i.lineJoin&&(t.joinstyle=i.lineJoin)):t&&(n.removeChild(t),this._stroke=null),i.fill?(e||(e=this._fill=this._createElement("fill"),n.appendChild(e)),e.color=i.fillColor||i.color,e.opacity=i.fillOpacity):e&&(n.removeChild(e),this._fill=null)},_updatePath:function(){var t=this._container.style;t.display="none",this._path.v=this.getPathString()+" ",t.display=""}}),o.Map.include(o.Browser.svg||!o.Browser.vml?{}:{_initPathRoot:function(){if(!this._pathRoot){var t=this._pathRoot=e.createElement("div");t.className="leaflet-vml-container",this._panes.overlayPane.appendChild(t),this.on("moveend",this._updatePathViewport),this._updatePathViewport()}}}),o.Browser.canvas=function(){return!!e.createElement("canvas").getContext}(),o.Path=o.Path.SVG&&!t.L_PREFER_CANVAS||!o.Browser.canvas?o.Path:o.Path.extend({statics:{CANVAS:!0,SVG:!1},redraw:function(){return this._map&&(this.projectLatlngs(),this._requestUpdate()),this},setStyle:function(t){return o.setOptions(this,t),this._map&&(this._updateStyle(),this._requestUpdate()),this},onRemove:function(t){t.off("viewreset",this.projectLatlngs,this).off("moveend",this._updatePath,this),this.options.clickable&&(this._map.off("click",this._onClick,this),this._map.off("mousemove",this._onMouseMove,this)),this._requestUpdate(),this.fire("remove"),this._map=null},_requestUpdate:function(){this._map&&!o.Path._updateRequest&&(o.Path._updateRequest=o.Util.requestAnimFrame(this._fireMapMoveEnd,this._map))},_fireMapMoveEnd:function(){o.Path._updateRequest=null,this.fire("moveend")},_initElements:function(){this._map._initPathRoot(),this._ctx=this._map._canvasCtx},_updateStyle:function(){var t=this.options;t.stroke&&(this._ctx.lineWidth=t.weight,this._ctx.strokeStyle=t.color),t.fill&&(this._ctx.fillStyle=t.fillColor||t.color),t.lineCap&&(this._ctx.lineCap=t.lineCap),t.lineJoin&&(this._ctx.lineJoin=t.lineJoin)},_drawPath:function(){var t,e,i,n,s,a;for(this._ctx.beginPath(),t=0,i=this._parts.length;i>t;t++){for(e=0,n=this._parts[t].length;n>e;e++)s=this._parts[t][e],a=(0===e?"move":"line")+"To",this._ctx[a](s.x,s.y);this instanceof o.Polygon&&this._ctx.closePath()}},_checkIfEmpty:function(){return!this._parts.length},_updatePath:function(){if(!this._checkIfEmpty()){var t=this._ctx,e=this.options;this._drawPath(),t.save(),this._updateStyle(),e.fill&&(t.globalAlpha=e.fillOpacity,t.fill(e.fillRule||"evenodd")),e.stroke&&(t.globalAlpha=e.opacity,t.stroke()),t.restore()}},_initEvents:function(){this.options.clickable&&(this._map.on("mousemove",this._onMouseMove,this),this._map.on("click dblclick contextmenu",this._fireMouseEvent,this))},_fireMouseEvent:function(t){this._containsPoint(t.layerPoint)&&this.fire(t.type,t)},_onMouseMove:function(t){this._map&&!this._map._animatingZoom&&(this._containsPoint(t.layerPoint)?(this._ctx.canvas.style.cursor="pointer",this._mouseInside=!0,this.fire("mouseover",t)):this._mouseInside&&(this._ctx.canvas.style.cursor="",this._mouseInside=!1,this.fire("mouseout",t)))}}),o.Map.include(o.Path.SVG&&!t.L_PREFER_CANVAS||!o.Browser.canvas?{}:{_initPathRoot:function(){var t,i=this._pathRoot;i||(i=this._pathRoot=e.createElement("canvas"),i.style.position="absolute",t=this._canvasCtx=i.getContext("2d"),t.lineCap="round",t.lineJoin="round",this._panes.overlayPane.appendChild(i),this.options.zoomAnimation&&(this._pathRoot.className="leaflet-zoom-animated",this.on("zoomanim",this._animatePathZoom),this.on("zoomend",this._endPathZoom)),this.on("moveend",this._updateCanvasViewport),this._updateCanvasViewport())},_updateCanvasViewport:function(){if(!this._pathZooming){this._updatePathViewport();var t=this._pathViewport,e=t.min,i=t.max.subtract(e),n=this._pathRoot;o.DomUtil.setPosition(n,e),n.width=i.x,n.height=i.y,n.getContext("2d").translate(-e.x,-e.y)}}}),o.LineUtil={simplify:function(t,e){if(!e||!t.length)return t.slice();var i=e*e;return t=this._reducePoints(t,i),t=this._simplifyDP(t,i)},pointToSegmentDistance:function(t,e,i){return Math.sqrt(this._sqClosestPointOnSegment(t,e,i,!0))},closestPointOnSegment:function(t,e,i){return this._sqClosestPointOnSegment(t,e,i)},_simplifyDP:function(t,e){var n=t.length,o=typeof Uint8Array!=i+""?Uint8Array:Array,s=new o(n);s[0]=s[n-1]=1,this._simplifyDPStep(t,s,e,0,n-1);var a,r=[];for(a=0;n>a;a++)s[a]&&r.push(t[a]);return r},_simplifyDPStep:function(t,e,i,n,o){var s,a,r,h=0;for(a=n+1;o-1>=a;a++)r=this._sqClosestPointOnSegment(t[a],t[n],t[o],!0),r>h&&(s=a,h=r);h>i&&(e[s]=1,this._simplifyDPStep(t,e,i,n,s),this._simplifyDPStep(t,e,i,s,o))},_reducePoints:function(t,e){for(var i=[t[0]],n=1,o=0,s=t.length;s>n;n++)this._sqDist(t[n],t[o])>e&&(i.push(t[n]),o=n);return s-1>o&&i.push(t[s-1]),i},clipSegment:function(t,e,i,n){var o,s,a,r=n?this._lastCode:this._getBitCode(t,i),h=this._getBitCode(e,i);for(this._lastCode=h;;){if(!(r|h))return[t,e];if(r&h)return!1;o=r||h,s=this._getEdgeIntersection(t,e,o,i),a=this._getBitCode(s,i),o===r?(t=s,r=a):(e=s,h=a)}},_getEdgeIntersection:function(t,e,i,n){var s=e.x-t.x,a=e.y-t.y,r=n.min,h=n.max;return 8&i?new o.Point(t.x+s*(h.y-t.y)/a,h.y):4&i?new o.Point(t.x+s*(r.y-t.y)/a,r.y):2&i?new o.Point(h.x,t.y+a*(h.x-t.x)/s):1&i?new o.Point(r.x,t.y+a*(r.x-t.x)/s):void 0},_getBitCode:function(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i},_sqDist:function(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n},_sqClosestPointOnSegment:function(t,e,i,n){var s,a=e.x,r=e.y,h=i.x-a,l=i.y-r,u=h*h+l*l;return u>0&&(s=((t.x-a)*h+(t.y-r)*l)/u,s>1?(a=i.x,r=i.y):s>0&&(a+=h*s,r+=l*s)),h=t.x-a,l=t.y-r,n?h*h+l*l:new o.Point(a,r)}},o.Polyline=o.Path.extend({initialize:function(t,e){o.Path.prototype.initialize.call(this,e),this._latlngs=this._convertLatLngs(t)},options:{smoothFactor:1,noClip:!1},projectLatlngs:function(){this._originalPoints=[];for(var t=0,e=this._latlngs.length;e>t;t++)this._originalPoints[t]=this._map.latLngToLayerPoint(this._latlngs[t])},getPathString:function(){for(var t=0,e=this._parts.length,i="";e>t;t++)i+=this._getPathPartStr(this._parts[t]);return i},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._latlngs=this._convertLatLngs(t),this.redraw()},addLatLng:function(t){return this._latlngs.push(o.latLng(t)),this.redraw()},spliceLatLngs:function(){var t=[].splice.apply(this._latlngs,arguments);return this._convertLatLngs(this._latlngs,!0),this.redraw(),t},closestLayerPoint:function(t){for(var e,i,n=1/0,s=this._parts,a=null,r=0,h=s.length;h>r;r++)for(var l=s[r],u=1,c=l.length;c>u;u++){e=l[u-1],i=l[u];var d=o.LineUtil._sqClosestPointOnSegment(t,e,i,!0);n>d&&(n=d,a=o.LineUtil._sqClosestPointOnSegment(t,e,i))}return a&&(a.distance=Math.sqrt(n)),a},getBounds:function(){return new o.LatLngBounds(this.getLatLngs())},_convertLatLngs:function(t,e){var i,n,s=e?t:[];for(i=0,n=t.length;n>i;i++){if(o.Util.isArray(t[i])&&"number"!=typeof t[i][0])return;s[i]=o.latLng(t[i])}return s},_initEvents:function(){o.Path.prototype._initEvents.call(this)},_getPathPartStr:function(t){for(var e,i=o.Path.VML,n=0,s=t.length,a="";s>n;n++)e=t[n],i&&e._round(),a+=(n?"L":"M")+e.x+" "+e.y;return a},_clipPoints:function(){var t,e,i,n=this._originalPoints,s=n.length;if(this.options.noClip)return void(this._parts=[n]);this._parts=[];var a=this._parts,r=this._map._pathViewport,h=o.LineUtil;for(t=0,e=0;s-1>t;t++)i=h.clipSegment(n[t],n[t+1],r,t),i&&(a[e]=a[e]||[],a[e].push(i[0]),(i[1]!==n[t+1]||t===s-2)&&(a[e].push(i[1]),e++))},_simplifyPoints:function(){for(var t=this._parts,e=o.LineUtil,i=0,n=t.length;n>i;i++)t[i]=e.simplify(t[i],this.options.smoothFactor)},_updatePath:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),o.Path.prototype._updatePath.call(this))}}),o.polyline=function(t,e){return new o.Polyline(t,e)},o.PolyUtil={},o.PolyUtil.clipPolygon=function(t,e){var i,n,s,a,r,h,l,u,c,d=[1,4,2,8],p=o.LineUtil;for(n=0,l=t.length;l>n;n++)t[n]._code=p._getBitCode(t[n],e);for(a=0;4>a;a++){for(u=d[a],i=[],n=0,l=t.length,s=l-1;l>n;s=n++)r=t[n],h=t[s],r._code&u?h._code&u||(c=p._getEdgeIntersection(h,r,u,e),c._code=p._getBitCode(c,e),i.push(c)):(h._code&u&&(c=p._getEdgeIntersection(h,r,u,e),c._code=p._getBitCode(c,e),i.push(c)),i.push(r));t=i}return t},o.Polygon=o.Polyline.extend({options:{fill:!0},initialize:function(t,e){o.Polyline.prototype.initialize.call(this,t,e),this._initWithHoles(t)},_initWithHoles:function(t){var e,i,n;if(t&&o.Util.isArray(t[0])&&"number"!=typeof t[0][0])for(this._latlngs=this._convertLatLngs(t[0]),this._holes=t.slice(1),e=0,i=this._holes.length;i>e;e++)n=this._holes[e]=this._convertLatLngs(this._holes[e]),n[0].equals(n[n.length-1])&&n.pop();t=this._latlngs,t.length>=2&&t[0].equals(t[t.length-1])&&t.pop()},projectLatlngs:function(){if(o.Polyline.prototype.projectLatlngs.call(this),this._holePoints=[],this._holes){var t,e,i,n;for(t=0,i=this._holes.length;i>t;t++)for(this._holePoints[t]=[],e=0,n=this._holes[t].length;n>e;e++)this._holePoints[t][e]=this._map.latLngToLayerPoint(this._holes[t][e])}},setLatLngs:function(t){return t&&o.Util.isArray(t[0])&&"number"!=typeof t[0][0]?(this._initWithHoles(t),this.redraw()):o.Polyline.prototype.setLatLngs.call(this,t)},_clipPoints:function(){var t=this._originalPoints,e=[];if(this._parts=[t].concat(this._holePoints),!this.options.noClip){for(var i=0,n=this._parts.length;n>i;i++){var s=o.PolyUtil.clipPolygon(this._parts[i],this._map._pathViewport);s.length&&e.push(s)}this._parts=e}},_getPathPartStr:function(t){var e=o.Polyline.prototype._getPathPartStr.call(this,t);return e+(o.Browser.svg?"z":"x")}}),o.polygon=function(t,e){return new o.Polygon(t,e)},function(){function t(t){return o.FeatureGroup.extend({initialize:function(t,e){this._layers={},this._options=e,this.setLatLngs(t)},setLatLngs:function(e){var i=0,n=e.length;for(this.eachLayer(function(t){n>i?t.setLatLngs(e[i++]):this.removeLayer(t)},this);n>i;)this.addLayer(new t(e[i++],this._options));return this},getLatLngs:function(){var t=[];return this.eachLayer(function(e){t.push(e.getLatLngs())}),t}})}o.MultiPolyline=t(o.Polyline),o.MultiPolygon=t(o.Polygon),o.multiPolyline=function(t,e){return new o.MultiPolyline(t,e)},o.multiPolygon=function(t,e){return new o.MultiPolygon(t,e)}}(),o.Rectangle=o.Polygon.extend({initialize:function(t,e){o.Polygon.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=o.latLngBounds(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}}),o.rectangle=function(t,e){return new o.Rectangle(t,e)},o.Circle=o.Path.extend({initialize:function(t,e,i){o.Path.prototype.initialize.call(this,i),this._latlng=o.latLng(t),this._mRadius=e},options:{fill:!0},setLatLng:function(t){return this._latlng=o.latLng(t),this.redraw()},setRadius:function(t){return this._mRadius=t,this.redraw()},projectLatlngs:function(){var t=this._getLngRadius(),e=this._latlng,i=this._map.latLngToLayerPoint([e.lat,e.lng-t]);this._point=this._map.latLngToLayerPoint(e),this._radius=Math.max(this._point.x-i.x,1)},getBounds:function(){var t=this._getLngRadius(),e=this._mRadius/40075017*360,i=this._latlng;return new o.LatLngBounds([i.lat-e,i.lng-t],[i.lat+e,i.lng+t])},getLatLng:function(){return this._latlng},getPathString:function(){var t=this._point,e=this._radius;return this._checkIfEmpty()?"":o.Browser.svg?"M"+t.x+","+(t.y-e)+"A"+e+","+e+",0,1,1,"+(t.x-.1)+","+(t.y-e)+" z":(t._round(),e=Math.round(e),"AL "+t.x+","+t.y+" "+e+","+e+" 0,23592600")},getRadius:function(){return this._mRadius},_getLatRadius:function(){return this._mRadius/40075017*360},_getLngRadius:function(){return this._getLatRadius()/Math.cos(o.LatLng.DEG_TO_RAD*this._latlng.lat)},_checkIfEmpty:function(){if(!this._map)return!1;var t=this._map._pathViewport,e=this._radius,i=this._point;return i.x-e>t.max.x||i.y-e>t.max.y||i.x+e<t.min.x||i.y+e<t.min.y}}),o.circle=function(t,e,i){return new o.Circle(t,e,i)},o.CircleMarker=o.Circle.extend({options:{radius:10,weight:2},initialize:function(t,e){o.Circle.prototype.initialize.call(this,t,null,e),this._radius=this.options.radius},projectLatlngs:function(){this._point=this._map.latLngToLayerPoint(this._latlng)},_updateStyle:function(){o.Circle.prototype._updateStyle.call(this),this.setRadius(this.options.radius)},setLatLng:function(t){return o.Circle.prototype.setLatLng.call(this,t),this._popup&&this._popup._isOpen&&this._popup.setLatLng(t),this},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius}}),o.circleMarker=function(t,e){return new o.CircleMarker(t,e)},o.Polyline.include(o.Path.CANVAS?{_containsPoint:function(t,e){var i,n,s,a,r,h,l,u=this.options.weight/2;for(o.Browser.touch&&(u+=10),i=0,a=this._parts.length;a>i;i++)for(l=this._parts[i],n=0,r=l.length,s=r-1;r>n;s=n++)if((e||0!==n)&&(h=o.LineUtil.pointToSegmentDistance(t,l[s],l[n]),u>=h))return!0;return!1}}:{}),o.Polygon.include(o.Path.CANVAS?{_containsPoint:function(t){var e,i,n,s,a,r,h,l,u=!1;if(o.Polyline.prototype._containsPoint.call(this,t,!0))return!0;for(s=0,h=this._parts.length;h>s;s++)for(e=this._parts[s],a=0,l=e.length,r=l-1;l>a;r=a++)i=e[a],n=e[r],i.y>t.y!=n.y>t.y&&t.x<(n.x-i.x)*(t.y-i.y)/(n.y-i.y)+i.x&&(u=!u);return u}}:{}),o.Circle.include(o.Path.CANVAS?{_drawPath:function(){var t=this._point;this._ctx.beginPath(),this._ctx.arc(t.x,t.y,this._radius,0,2*Math.PI,!1)},_containsPoint:function(t){var e=this._point,i=this.options.stroke?this.options.weight/2:0;return t.distanceTo(e)<=this._radius+i}}:{}),o.CircleMarker.include(o.Path.CANVAS?{_updateStyle:function(){o.Path.prototype._updateStyle.call(this)}}:{}),o.GeoJSON=o.FeatureGroup.extend({initialize:function(t,e){o.setOptions(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e,i,n,s=o.Util.isArray(t)?t:t.features;if(s){for(e=0,i=s.length;i>e;e++)n=s[e],(n.geometries||n.geometry||n.features||n.coordinates)&&this.addData(s[e]);return this}var a=this.options;if(!a.filter||a.filter(t)){var r=o.GeoJSON.geometryToLayer(t,a.pointToLayer,a.coordsToLatLng,a);return r.feature=o.GeoJSON.asFeature(t),r.defaultOptions=r.options,this.resetStyle(r),a.onEachFeature&&a.onEachFeature(t,r),this.addLayer(r)}},resetStyle:function(t){var e=this.options.style;e&&(o.Util.extend(t.options,t.defaultOptions),this._setLayerStyle(t,e))},setStyle:function(t){this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){"function"==typeof e&&(e=e(t.feature)),t.setStyle&&t.setStyle(e)}}),o.extend(o.GeoJSON,{geometryToLayer:function(t,e,i,n){var s,a,r,h,l="Feature"===t.type?t.geometry:t,u=l.coordinates,c=[];switch(i=i||this.coordsToLatLng,l.type){case"Point":return s=i(u),e?e(t,s):new o.Marker(s);case"MultiPoint":for(r=0,h=u.length;h>r;r++)s=i(u[r]),c.push(e?e(t,s):new o.Marker(s));return new o.FeatureGroup(c);case"LineString":return a=this.coordsToLatLngs(u,0,i),new o.Polyline(a,n);case"Polygon":if(2===u.length&&!u[1].length)throw new Error("Invalid GeoJSON object.");return a=this.coordsToLatLngs(u,1,i),new o.Polygon(a,n);case"MultiLineString":return a=this.coordsToLatLngs(u,1,i),new o.MultiPolyline(a,n);case"MultiPolygon":return a=this.coordsToLatLngs(u,2,i),new o.MultiPolygon(a,n);case"GeometryCollection":for(r=0,h=l.geometries.length;h>r;r++)c.push(this.geometryToLayer({geometry:l.geometries[r],type:"Feature",properties:t.properties},e,i,n));return new o.FeatureGroup(c);default:throw new Error("Invalid GeoJSON object.")}},coordsToLatLng:function(t){return new o.LatLng(t[1],t[0],t[2])},coordsToLatLngs:function(t,e,i){var n,o,s,a=[];for(o=0,s=t.length;s>o;o++)n=e?this.coordsToLatLngs(t[o],e-1,i):(i||this.coordsToLatLng)(t[o]),a.push(n);return a},latLngToCoords:function(t){var e=[t.lng,t.lat];return t.alt!==i&&e.push(t.alt),e},latLngsToCoords:function(t){for(var e=[],i=0,n=t.length;n>i;i++)e.push(o.GeoJSON.latLngToCoords(t[i]));return e},getFeature:function(t,e){return t.feature?o.extend({},t.feature,{geometry:e}):o.GeoJSON.asFeature(e)},asFeature:function(t){return"Feature"===t.type?t:{type:"Feature",properties:{},geometry:t}}});var a={toGeoJSON:function(){return o.GeoJSON.getFeature(this,{type:"Point",coordinates:o.GeoJSON.latLngToCoords(this.getLatLng())})}};o.Marker.include(a),o.Circle.include(a),o.CircleMarker.include(a),o.Polyline.include({toGeoJSON:function(){return o.GeoJSON.getFeature(this,{type:"LineString",coordinates:o.GeoJSON.latLngsToCoords(this.getLatLngs())})}}),o.Polygon.include({toGeoJSON:function(){var t,e,i,n=[o.GeoJSON.latLngsToCoords(this.getLatLngs())];if(n[0].push(n[0][0]),this._holes)for(t=0,e=this._holes.length;e>t;t++)i=o.GeoJSON.latLngsToCoords(this._holes[t]),i.push(i[0]),n.push(i);return o.GeoJSON.getFeature(this,{type:"Polygon",coordinates:n})}}),function(){function t(t){return function(){var e=[];return this.eachLayer(function(t){e.push(t.toGeoJSON().geometry.coordinates)}),o.GeoJSON.getFeature(this,{type:t,coordinates:e})}}o.MultiPolyline.include({toGeoJSON:t("MultiLineString")}),o.MultiPolygon.include({toGeoJSON:t("MultiPolygon")}),o.LayerGroup.include({toGeoJSON:function(){var e,i=this.feature&&this.feature.geometry,n=[];if(i&&"MultiPoint"===i.type)return t("MultiPoint").call(this);var s=i&&"GeometryCollection"===i.type;return this.eachLayer(function(t){t.toGeoJSON&&(e=t.toGeoJSON(),n.push(s?e.geometry:o.GeoJSON.asFeature(e)))}),s?o.GeoJSON.getFeature(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}})}(),o.geoJson=function(t,e){return new o.GeoJSON(t,e)},o.DomEvent={addListener:function(t,e,i,n){var s,a,r,h=o.stamp(i),l="_leaflet_"+e+h;return t[l]?this:(s=function(e){return i.call(n||t,e||o.DomEvent._getEvent())},o.Browser.pointer&&0===e.indexOf("touch")?this.addPointerListener(t,e,s,h):(o.Browser.touch&&"dblclick"===e&&this.addDoubleTapListener&&this.addDoubleTapListener(t,s,h),"addEventListener"in t?"mousewheel"===e?(t.addEventListener("DOMMouseScroll",s,!1),t.addEventListener(e,s,!1)):"mouseenter"===e||"mouseleave"===e?(a=s,r="mouseenter"===e?"mouseover":"mouseout",s=function(e){return o.DomEvent._checkMouse(t,e)?a(e):void 0},t.addEventListener(r,s,!1)):"click"===e&&o.Browser.android?(a=s,s=function(t){return o.DomEvent._filterClick(t,a)},t.addEventListener(e,s,!1)):t.addEventListener(e,s,!1):"attachEvent"in t&&t.attachEvent("on"+e,s),t[l]=s,this))},removeListener:function(t,e,i){var n=o.stamp(i),s="_leaflet_"+e+n,a=t[s];return a?(o.Browser.pointer&&0===e.indexOf("touch")?this.removePointerListener(t,e,n):o.Browser.touch&&"dblclick"===e&&this.removeDoubleTapListener?this.removeDoubleTapListener(t,n):"removeEventListener"in t?"mousewheel"===e?(t.removeEventListener("DOMMouseScroll",a,!1),t.removeEventListener(e,a,!1)):"mouseenter"===e||"mouseleave"===e?t.removeEventListener("mouseenter"===e?"mouseover":"mouseout",a,!1):t.removeEventListener(e,a,!1):"detachEvent"in t&&t.detachEvent("on"+e,a),t[s]=null,this):this},stopPropagation:function(t){return t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,o.DomEvent._skipped(t),this},disableScrollPropagation:function(t){var e=o.DomEvent.stopPropagation;return o.DomEvent.on(t,"mousewheel",e).on(t,"MozMousePixelScroll",e)},disableClickPropagation:function(t){for(var e=o.DomEvent.stopPropagation,i=o.Draggable.START.length-1;i>=0;i--)o.DomEvent.on(t,o.Draggable.START[i],e);return o.DomEvent.on(t,"click",o.DomEvent._fakeStop).on(t,"dblclick",e)},preventDefault:function(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this},stop:function(t){return o.DomEvent.preventDefault(t).stopPropagation(t)},getMousePosition:function(t,e){if(!e)return new o.Point(t.clientX,t.clientY);var i=e.getBoundingClientRect();return new o.Point(t.clientX-i.left-e.clientLeft,t.clientY-i.top-e.clientTop)},getWheelDelta:function(t){var e=0;return t.wheelDelta&&(e=t.wheelDelta/120),t.detail&&(e=-t.detail/3),e},_skipEvents:{},_fakeStop:function(t){o.DomEvent._skipEvents[t.type]=!0},_skipped:function(t){var e=this._skipEvents[t.type];return this._skipEvents[t.type]=!1,e},_checkMouse:function(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch(n){return!1}return i!==t},_getEvent:function(){var e=t.event;if(!e)for(var i=arguments.callee.caller;i&&(e=i.arguments[0],!e||t.Event!==e.constructor);)i=i.caller;return e},_filterClick:function(t,e){var i=t.timeStamp||t.originalEvent.timeStamp,n=o.DomEvent._lastClick&&i-o.DomEvent._lastClick;return n&&n>100&&500>n||t.target._simulatedClick&&!t._simulated?void o.DomEvent.stop(t):(o.DomEvent._lastClick=i,e(t))}},o.DomEvent.on=o.DomEvent.addListener,o.DomEvent.off=o.DomEvent.removeListener,o.Draggable=o.Class.extend({includes:o.Mixin.Events,statics:{START:o.Browser.touch?["touchstart","mousedown"]:["mousedown"],END:{mousedown:"mouseup",touchstart:"touchend",pointerdown:"touchend",MSPointerDown:"touchend"},MOVE:{mousedown:"mousemove",touchstart:"touchmove",pointerdown:"touchmove",MSPointerDown:"touchmove"}},initialize:function(t,e){this._element=t,this._dragStartTarget=e||t},enable:function(){if(!this._enabled){for(var t=o.Draggable.START.length-1;t>=0;t--)o.DomEvent.on(this._dragStartTarget,o.Draggable.START[t],this._onDown,this);this._enabled=!0}},disable:function(){if(this._enabled){for(var t=o.Draggable.START.length-1;t>=0;t--)o.DomEvent.off(this._dragStartTarget,o.Draggable.START[t],this._onDown,this);this._enabled=!1,this._moved=!1}},_onDown:function(t){if(this._moved=!1,!t.shiftKey&&(1===t.which||1===t.button||t.touches)&&(o.DomEvent.stopPropagation(t),!o.Draggable._disabled&&(o.DomUtil.disableImageDrag(),o.DomUtil.disableTextSelection(),!this._moving))){var i=t.touches?t.touches[0]:t;this._startPoint=new o.Point(i.clientX,i.clientY),this._startPos=this._newPos=o.DomUtil.getPosition(this._element),o.DomEvent.on(e,o.Draggable.MOVE[t.type],this._onMove,this).on(e,o.Draggable.END[t.type],this._onUp,this)}},_onMove:function(t){if(t.touches&&t.touches.length>1)return void(this._moved=!0);var i=t.touches&&1===t.touches.length?t.touches[0]:t,n=new o.Point(i.clientX,i.clientY),s=n.subtract(this._startPoint);(s.x||s.y)&&(o.Browser.touch&&Math.abs(s.x)+Math.abs(s.y)<3||(o.DomEvent.preventDefault(t),this._moved||(this.fire("dragstart"),this._moved=!0,this._startPos=o.DomUtil.getPosition(this._element).subtract(s),o.DomUtil.addClass(e.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,o.DomUtil.addClass(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(s),this._moving=!0,o.Util.cancelAnimFrame(this._animRequest),this._animRequest=o.Util.requestAnimFrame(this._updatePosition,this,!0,this._dragStartTarget)))},_updatePosition:function(){this.fire("predrag"),o.DomUtil.setPosition(this._element,this._newPos),this.fire("drag")},_onUp:function(){o.DomUtil.removeClass(e.body,"leaflet-dragging"),this._lastTarget&&(o.DomUtil.removeClass(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null);for(var t in o.Draggable.MOVE)o.DomEvent.off(e,o.Draggable.MOVE[t],this._onMove).off(e,o.Draggable.END[t],this._onUp);o.DomUtil.enableImageDrag(),o.DomUtil.enableTextSelection(),this._moved&&this._moving&&(o.Util.cancelAnimFrame(this._animRequest),this.fire("dragend",{distance:this._newPos.distanceTo(this._startPos)})),this._moving=!1}}),o.Handler=o.Class.extend({initialize:function(t){this._map=t},enable:function(){this._enabled||(this._enabled=!0,this.addHooks())},disable:function(){this._enabled&&(this._enabled=!1,this.removeHooks())},enabled:function(){return!!this._enabled}}),o.Map.mergeOptions({dragging:!0,inertia:!o.Browser.android23,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,inertiaThreshold:o.Browser.touch?32:18,easeLinearity:.25,worldCopyJump:!1}),o.Map.Drag=o.Handler.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new o.Draggable(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDrag,this),t.on("viewreset",this._onViewReset,this),t.whenReady(this._onViewReset,this))}this._draggable.enable()},removeHooks:function(){this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){var t=this._map;t._panAnim&&t._panAnim.stop(),t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(){if(this._map.options.inertia){var t=this._lastTime=+new Date,e=this._lastPos=this._draggable._newPos;this._positions.push(e),this._times.push(t),t-this._times[0]>200&&(this._positions.shift(),this._times.shift())}this._map.fire("move").fire("drag")},_onViewReset:function(){var t=this._map.getSize()._divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.project([0,180]).x},_onPreDrag:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-e+i)%t+e-i,s=(n+e+i)%t-e-i,a=Math.abs(o+i)<Math.abs(s+i)?o:s;this._draggable._newPos.x=a},_onDragEnd:function(t){var e=this._map,i=e.options,n=+new Date-this._lastTime,s=!i.inertia||n>i.inertiaThreshold||!this._positions[0];if(e.fire("dragend",t),s)e.fire("moveend");else{var a=this._lastPos.subtract(this._positions[0]),r=(this._lastTime+n-this._times[0])/1e3,h=i.easeLinearity,l=a.multiplyBy(h/r),u=l.distanceTo([0,0]),c=Math.min(i.inertiaMaxSpeed,u),d=l.multiplyBy(c/u),p=c/(i.inertiaDeceleration*h),_=d.multiplyBy(-p/2).round();_.x&&_.y?(_=e._limitOffset(_,e.options.maxBounds),o.Util.requestAnimFrame(function(){e.panBy(_,{duration:p,easeLinearity:h,noMoveStart:!0})})):e.fire("moveend")}}}),o.Map.addInitHook("addHandler","dragging",o.Map.Drag),o.Map.mergeOptions({doubleClickZoom:!0}),o.Map.DoubleClickZoom=o.Handler.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom()+(t.originalEvent.shiftKey?-1:1);"center"===e.options.doubleClickZoom?e.setZoom(i):e.setZoomAround(t.containerPoint,i)}}),o.Map.addInitHook("addHandler","doubleClickZoom",o.Map.DoubleClickZoom),o.Map.mergeOptions({scrollWheelZoom:!0}),o.Map.ScrollWheelZoom=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"mousewheel",this._onWheelScroll,this),o.DomEvent.on(this._map._container,"MozMousePixelScroll",o.DomEvent.preventDefault),this._delta=0},removeHooks:function(){o.DomEvent.off(this._map._container,"mousewheel",this._onWheelScroll),o.DomEvent.off(this._map._container,"MozMousePixelScroll",o.DomEvent.preventDefault)},_onWheelScroll:function(t){var e=o.DomEvent.getWheelDelta(t);this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var i=Math.max(40-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(o.bind(this._performZoom,this),i),o.DomEvent.preventDefault(t),o.DomEvent.stopPropagation(t)},_performZoom:function(){var t=this._map,e=this._delta,i=t.getZoom();e=e>0?Math.ceil(e):Math.floor(e),e=Math.max(Math.min(e,4),-4),e=t._limitZoom(i+e)-i,this._delta=0,this._startTime=null,e&&("center"===t.options.scrollWheelZoom?t.setZoom(i+e):t.setZoomAround(this._lastMousePos,i+e))}}),o.Map.addInitHook("addHandler","scrollWheelZoom",o.Map.ScrollWheelZoom),o.extend(o.DomEvent,{_touchstart:o.Browser.msPointer?"MSPointerDown":o.Browser.pointer?"pointerdown":"touchstart",_touchend:o.Browser.msPointer?"MSPointerUp":o.Browser.pointer?"pointerup":"touchend",addDoubleTapListener:function(t,i,n){function s(t){var e;if(o.Browser.pointer?(_.push(t.pointerId),e=_.length):e=t.touches.length,!(e>1)){var i=Date.now(),n=i-(r||i);h=t.touches?t.touches[0]:t,l=n>0&&u>=n,r=i}}function a(t){if(o.Browser.pointer){var e=_.indexOf(t.pointerId);if(-1===e)return;_.splice(e,1)}if(l){if(o.Browser.pointer){var n,s={};for(var a in h)n=h[a],"function"==typeof n?s[a]=n.bind(h):s[a]=n;h=s}h.type="dblclick",i(h),r=null}}var r,h,l=!1,u=250,c="_leaflet_",d=this._touchstart,p=this._touchend,_=[];t[c+d+n]=s,t[c+p+n]=a;var m=o.Browser.pointer?e.documentElement:t;return t.addEventListener(d,s,!1),m.addEventListener(p,a,!1),o.Browser.pointer&&m.addEventListener(o.DomEvent.POINTER_CANCEL,a,!1),this},removeDoubleTapListener:function(t,i){var n="_leaflet_";return t.removeEventListener(this._touchstart,t[n+this._touchstart+i],!1),(o.Browser.pointer?e.documentElement:t).removeEventListener(this._touchend,t[n+this._touchend+i],!1),o.Browser.pointer&&e.documentElement.removeEventListener(o.DomEvent.POINTER_CANCEL,t[n+this._touchend+i],!1),this}}),o.extend(o.DomEvent,{POINTER_DOWN:o.Browser.msPointer?"MSPointerDown":"pointerdown",POINTER_MOVE:o.Browser.msPointer?"MSPointerMove":"pointermove",POINTER_UP:o.Browser.msPointer?"MSPointerUp":"pointerup",POINTER_CANCEL:o.Browser.msPointer?"MSPointerCancel":"pointercancel",_pointers:[],_pointerDocumentListener:!1,addPointerListener:function(t,e,i,n){switch(e){case"touchstart":return this.addPointerListenerStart(t,e,i,n);
case"touchend":return this.addPointerListenerEnd(t,e,i,n);case"touchmove":return this.addPointerListenerMove(t,e,i,n);default:throw"Unknown touch event type"}},addPointerListenerStart:function(t,i,n,s){var a="_leaflet_",r=this._pointers,h=function(t){"mouse"!==t.pointerType&&t.pointerType!==t.MSPOINTER_TYPE_MOUSE&&o.DomEvent.preventDefault(t);for(var e=!1,i=0;i<r.length;i++)if(r[i].pointerId===t.pointerId){e=!0;break}e||r.push(t),t.touches=r.slice(),t.changedTouches=[t],n(t)};if(t[a+"touchstart"+s]=h,t.addEventListener(this.POINTER_DOWN,h,!1),!this._pointerDocumentListener){var l=function(t){for(var e=0;e<r.length;e++)if(r[e].pointerId===t.pointerId){r.splice(e,1);break}};e.documentElement.addEventListener(this.POINTER_UP,l,!1),e.documentElement.addEventListener(this.POINTER_CANCEL,l,!1),this._pointerDocumentListener=!0}return this},addPointerListenerMove:function(t,e,i,n){function o(t){if(t.pointerType!==t.MSPOINTER_TYPE_MOUSE&&"mouse"!==t.pointerType||0!==t.buttons){for(var e=0;e<a.length;e++)if(a[e].pointerId===t.pointerId){a[e]=t;break}t.touches=a.slice(),t.changedTouches=[t],i(t)}}var s="_leaflet_",a=this._pointers;return t[s+"touchmove"+n]=o,t.addEventListener(this.POINTER_MOVE,o,!1),this},addPointerListenerEnd:function(t,e,i,n){var o="_leaflet_",s=this._pointers,a=function(t){for(var e=0;e<s.length;e++)if(s[e].pointerId===t.pointerId){s.splice(e,1);break}t.touches=s.slice(),t.changedTouches=[t],i(t)};return t[o+"touchend"+n]=a,t.addEventListener(this.POINTER_UP,a,!1),t.addEventListener(this.POINTER_CANCEL,a,!1),this},removePointerListener:function(t,e,i){var n="_leaflet_",o=t[n+e+i];switch(e){case"touchstart":t.removeEventListener(this.POINTER_DOWN,o,!1);break;case"touchmove":t.removeEventListener(this.POINTER_MOVE,o,!1);break;case"touchend":t.removeEventListener(this.POINTER_UP,o,!1),t.removeEventListener(this.POINTER_CANCEL,o,!1)}return this}}),o.Map.mergeOptions({touchZoom:o.Browser.touch&&!o.Browser.android23,bounceAtZoomLimits:!0}),o.Map.TouchZoom=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){o.DomEvent.off(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var i=this._map;if(t.touches&&2===t.touches.length&&!i._animatingZoom&&!this._zooming){var n=i.mouseEventToLayerPoint(t.touches[0]),s=i.mouseEventToLayerPoint(t.touches[1]),a=i._getCenterLayerPoint();this._startCenter=n.add(s)._divideBy(2),this._startDist=n.distanceTo(s),this._moved=!1,this._zooming=!0,this._centerOffset=a.subtract(this._startCenter),i._panAnim&&i._panAnim.stop(),o.DomEvent.on(e,"touchmove",this._onTouchMove,this).on(e,"touchend",this._onTouchEnd,this),o.DomEvent.preventDefault(t)}},_onTouchMove:function(t){var e=this._map;if(t.touches&&2===t.touches.length&&this._zooming){var i=e.mouseEventToLayerPoint(t.touches[0]),n=e.mouseEventToLayerPoint(t.touches[1]);this._scale=i.distanceTo(n)/this._startDist,this._delta=i._add(n)._divideBy(2)._subtract(this._startCenter),1!==this._scale&&(e.options.bounceAtZoomLimits||!(e.getZoom()===e.getMinZoom()&&this._scale<1||e.getZoom()===e.getMaxZoom()&&this._scale>1))&&(this._moved||(o.DomUtil.addClass(e._mapPane,"leaflet-touching"),e.fire("movestart").fire("zoomstart"),this._moved=!0),o.Util.cancelAnimFrame(this._animRequest),this._animRequest=o.Util.requestAnimFrame(this._updateOnMove,this,!0,this._map._container),o.DomEvent.preventDefault(t))}},_updateOnMove:function(){var t=this._map,e=this._getScaleOrigin(),i=t.layerPointToLatLng(e),n=t.getScaleZoom(this._scale);t._animateZoom(i,n,this._startCenter,this._scale,this._delta,!1,!0)},_onTouchEnd:function(){if(!this._moved||!this._zooming)return void(this._zooming=!1);var t=this._map;this._zooming=!1,o.DomUtil.removeClass(t._mapPane,"leaflet-touching"),o.Util.cancelAnimFrame(this._animRequest),o.DomEvent.off(e,"touchmove",this._onTouchMove).off(e,"touchend",this._onTouchEnd);var i=this._getScaleOrigin(),n=t.layerPointToLatLng(i),s=t.getZoom(),a=t.getScaleZoom(this._scale)-s,r=a>0?Math.ceil(a):Math.floor(a),h=t._limitZoom(s+r),l=t.getZoomScale(h)/this._scale;t._animateZoom(n,h,i,l)},_getScaleOrigin:function(){var t=this._centerOffset.subtract(this._delta).divideBy(this._scale);return this._startCenter.add(t)}}),o.Map.addInitHook("addHandler","touchZoom",o.Map.TouchZoom),o.Map.mergeOptions({tap:!0,tapTolerance:15}),o.Map.Tap=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){o.DomEvent.off(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(t.touches){if(o.DomEvent.preventDefault(t),this._fireClick=!0,t.touches.length>1)return this._fireClick=!1,void clearTimeout(this._holdTimeout);var i=t.touches[0],n=i.target;this._startPos=this._newPos=new o.Point(i.clientX,i.clientY),n.tagName&&"a"===n.tagName.toLowerCase()&&o.DomUtil.addClass(n,"leaflet-active"),this._holdTimeout=setTimeout(o.bind(function(){this._isTapValid()&&(this._fireClick=!1,this._onUp(),this._simulateEvent("contextmenu",i))},this),1e3),o.DomEvent.on(e,"touchmove",this._onMove,this).on(e,"touchend",this._onUp,this)}},_onUp:function(t){if(clearTimeout(this._holdTimeout),o.DomEvent.off(e,"touchmove",this._onMove,this).off(e,"touchend",this._onUp,this),this._fireClick&&t&&t.changedTouches){var i=t.changedTouches[0],n=i.target;n&&n.tagName&&"a"===n.tagName.toLowerCase()&&o.DomUtil.removeClass(n,"leaflet-active"),this._isTapValid()&&this._simulateEvent("click",i)}},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_onMove:function(t){var e=t.touches[0];this._newPos=new o.Point(e.clientX,e.clientY)},_simulateEvent:function(i,n){var o=e.createEvent("MouseEvents");o._simulated=!0,n.target._simulatedClick=!0,o.initMouseEvent(i,!0,!0,t,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),n.target.dispatchEvent(o)}}),o.Browser.touch&&!o.Browser.pointer&&o.Map.addInitHook("addHandler","tap",o.Map.Tap),o.Map.mergeOptions({boxZoom:!0}),o.Map.BoxZoom=o.Handler.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._moved=!1},addHooks:function(){o.DomEvent.on(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){o.DomEvent.off(this._container,"mousedown",this._onMouseDown),this._moved=!1},moved:function(){return this._moved},_onMouseDown:function(t){return this._moved=!1,!t.shiftKey||1!==t.which&&1!==t.button?!1:(o.DomUtil.disableTextSelection(),o.DomUtil.disableImageDrag(),this._startLayerPoint=this._map.mouseEventToLayerPoint(t),void o.DomEvent.on(e,"mousemove",this._onMouseMove,this).on(e,"mouseup",this._onMouseUp,this).on(e,"keydown",this._onKeyDown,this))},_onMouseMove:function(t){this._moved||(this._box=o.DomUtil.create("div","leaflet-zoom-box",this._pane),o.DomUtil.setPosition(this._box,this._startLayerPoint),this._container.style.cursor="crosshair",this._map.fire("boxzoomstart"));var e=this._startLayerPoint,i=this._box,n=this._map.mouseEventToLayerPoint(t),s=n.subtract(e),a=new o.Point(Math.min(n.x,e.x),Math.min(n.y,e.y));o.DomUtil.setPosition(i,a),this._moved=!0,i.style.width=Math.max(0,Math.abs(s.x)-4)+"px",i.style.height=Math.max(0,Math.abs(s.y)-4)+"px"},_finish:function(){this._moved&&(this._pane.removeChild(this._box),this._container.style.cursor=""),o.DomUtil.enableTextSelection(),o.DomUtil.enableImageDrag(),o.DomEvent.off(e,"mousemove",this._onMouseMove).off(e,"mouseup",this._onMouseUp).off(e,"keydown",this._onKeyDown)},_onMouseUp:function(t){this._finish();var e=this._map,i=e.mouseEventToLayerPoint(t);if(!this._startLayerPoint.equals(i)){var n=new o.LatLngBounds(e.layerPointToLatLng(this._startLayerPoint),e.layerPointToLatLng(i));e.fitBounds(n),e.fire("boxzoomend",{boxZoomBounds:n})}},_onKeyDown:function(t){27===t.keyCode&&this._finish()}}),o.Map.addInitHook("addHandler","boxZoom",o.Map.BoxZoom),o.Map.mergeOptions({keyboard:!0,keyboardPanOffset:80,keyboardZoomOffset:1}),o.Map.Keyboard=o.Handler.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,173]},initialize:function(t){this._map=t,this._setPanOffset(t.options.keyboardPanOffset),this._setZoomOffset(t.options.keyboardZoomOffset)},addHooks:function(){var t=this._map._container;-1===t.tabIndex&&(t.tabIndex="0"),o.DomEvent.on(t,"focus",this._onFocus,this).on(t,"blur",this._onBlur,this).on(t,"mousedown",this._onMouseDown,this),this._map.on("focus",this._addHooks,this).on("blur",this._removeHooks,this)},removeHooks:function(){this._removeHooks();var t=this._map._container;o.DomEvent.off(t,"focus",this._onFocus,this).off(t,"blur",this._onBlur,this).off(t,"mousedown",this._onMouseDown,this),this._map.off("focus",this._addHooks,this).off("blur",this._removeHooks,this)},_onMouseDown:function(){if(!this._focused){var i=e.body,n=e.documentElement,o=i.scrollTop||n.scrollTop,s=i.scrollLeft||n.scrollLeft;this._map._container.focus(),t.scrollTo(s,o)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanOffset:function(t){var e,i,n=this._panKeys={},o=this.keyCodes;for(e=0,i=o.left.length;i>e;e++)n[o.left[e]]=[-1*t,0];for(e=0,i=o.right.length;i>e;e++)n[o.right[e]]=[t,0];for(e=0,i=o.down.length;i>e;e++)n[o.down[e]]=[0,t];for(e=0,i=o.up.length;i>e;e++)n[o.up[e]]=[0,-1*t]},_setZoomOffset:function(t){var e,i,n=this._zoomKeys={},o=this.keyCodes;for(e=0,i=o.zoomIn.length;i>e;e++)n[o.zoomIn[e]]=t;for(e=0,i=o.zoomOut.length;i>e;e++)n[o.zoomOut[e]]=-t},_addHooks:function(){o.DomEvent.on(e,"keydown",this._onKeyDown,this)},_removeHooks:function(){o.DomEvent.off(e,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){var e=t.keyCode,i=this._map;if(e in this._panKeys){if(i._panAnim&&i._panAnim._inProgress)return;i.panBy(this._panKeys[e]),i.options.maxBounds&&i.panInsideBounds(i.options.maxBounds)}else{if(!(e in this._zoomKeys))return;i.setZoom(i.getZoom()+this._zoomKeys[e])}o.DomEvent.stop(t)}}),o.Map.addInitHook("addHandler","keyboard",o.Map.Keyboard),o.Handler.MarkerDrag=o.Handler.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new o.Draggable(t,t)),this._draggable.on("dragstart",this._onDragStart,this).on("drag",this._onDrag,this).on("dragend",this._onDragEnd,this),this._draggable.enable(),o.DomUtil.addClass(this._marker._icon,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off("dragstart",this._onDragStart,this).off("drag",this._onDrag,this).off("dragend",this._onDragEnd,this),this._draggable.disable(),o.DomUtil.removeClass(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){this._marker.closePopup().fire("movestart").fire("dragstart")},_onDrag:function(){var t=this._marker,e=t._shadow,i=o.DomUtil.getPosition(t._icon),n=t._map.layerPointToLatLng(i);e&&o.DomUtil.setPosition(e,i),t._latlng=n,t.fire("move",{latlng:n}).fire("drag")},_onDragEnd:function(t){this._marker.fire("moveend").fire("dragend",t)}}),o.Control=o.Class.extend({options:{position:"topright"},initialize:function(t){o.setOptions(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i];return o.DomUtil.addClass(e,"leaflet-control"),-1!==i.indexOf("bottom")?n.insertBefore(e,n.firstChild):n.appendChild(e),this},removeFrom:function(t){var e=this.getPosition(),i=t._controlCorners[e];return i.removeChild(this._container),this._map=null,this.onRemove&&this.onRemove(t),this},_refocusOnMap:function(){this._map&&this._map.getContainer().focus()}}),o.control=function(t){return new o.Control(t)},o.Map.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.removeFrom(this),this},_initControlPos:function(){function t(t,s){var a=i+t+" "+i+s;e[t+s]=o.DomUtil.create("div",a,n)}var e=this._controlCorners={},i="leaflet-",n=this._controlContainer=o.DomUtil.create("div",i+"control-container",this._container);t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")},_clearControlPos:function(){this._container.removeChild(this._controlContainer)}}),o.Control.Zoom=o.Control.extend({options:{position:"topleft",zoomInText:"+",zoomInTitle:"Zoom in",zoomOutText:"-",zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=o.DomUtil.create("div",e+" leaflet-bar");return this._map=t,this._zoomInButton=this._createButton(this.options.zoomInText,this.options.zoomInTitle,e+"-in",i,this._zoomIn,this),this._zoomOutButton=this._createButton(this.options.zoomOutText,this.options.zoomOutTitle,e+"-out",i,this._zoomOut,this),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},_zoomIn:function(t){this._map.zoomIn(t.shiftKey?3:1)},_zoomOut:function(t){this._map.zoomOut(t.shiftKey?3:1)},_createButton:function(t,e,i,n,s,a){var r=o.DomUtil.create("a",i,n);r.innerHTML=t,r.href="#",r.title=e;var h=o.DomEvent.stopPropagation;return o.DomEvent.on(r,"click",h).on(r,"mousedown",h).on(r,"dblclick",h).on(r,"click",o.DomEvent.preventDefault).on(r,"click",s,a).on(r,"click",this._refocusOnMap,a),r},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";o.DomUtil.removeClass(this._zoomInButton,e),o.DomUtil.removeClass(this._zoomOutButton,e),t._zoom===t.getMinZoom()&&o.DomUtil.addClass(this._zoomOutButton,e),t._zoom===t.getMaxZoom()&&o.DomUtil.addClass(this._zoomInButton,e)}}),o.Map.mergeOptions({zoomControl:!0}),o.Map.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new o.Control.Zoom,this.addControl(this.zoomControl))}),o.control.zoom=function(t){return new o.Control.Zoom(t)},o.Control.Attribution=o.Control.extend({options:{position:"bottomright",prefix:'<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'},initialize:function(t){o.setOptions(this,t),this._attributions={}},onAdd:function(t){this._container=o.DomUtil.create("div","leaflet-control-attribution"),o.DomEvent.disableClickPropagation(this._container);for(var e in t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return t.on("layeradd",this._onLayerAdd,this).on("layerremove",this._onLayerRemove,this),this._update(),this._container},onRemove:function(t){t.off("layeradd",this._onLayerAdd).off("layerremove",this._onLayerRemove)},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):void 0},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):void 0},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(" | ")}},_onLayerAdd:function(t){t.layer.getAttribution&&this.addAttribution(t.layer.getAttribution())},_onLayerRemove:function(t){t.layer.getAttribution&&this.removeAttribution(t.layer.getAttribution())}}),o.Map.mergeOptions({attributionControl:!0}),o.Map.addInitHook(function(){this.options.attributionControl&&(this.attributionControl=(new o.Control.Attribution).addTo(this))}),o.control.attribution=function(t){return new o.Control.Attribution(t)},o.Control.Scale=o.Control.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0,updateWhenIdle:!1},onAdd:function(t){this._map=t;var e="leaflet-control-scale",i=o.DomUtil.create("div",e),n=this.options;return this._addScales(n,e,i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=o.DomUtil.create("div",e+"-line",i)),t.imperial&&(this._iScale=o.DomUtil.create("div",e+"-line",i))},_update:function(){var t=this._map.getBounds(),e=t.getCenter().lat,i=6378137*Math.PI*Math.cos(e*Math.PI/180),n=i*(t.getNorthEast().lng-t.getSouthWest().lng)/180,o=this._map.getSize(),s=this.options,a=0;o.x>0&&(a=n*(s.maxWidth/o.x)),this._updateScales(s,a)},_updateScales:function(t,e){t.metric&&e&&this._updateMetric(e),t.imperial&&e&&this._updateImperial(e)},_updateMetric:function(t){var e=this._getRoundNum(t);this._mScale.style.width=this._getScaleWidth(e/t)+"px",this._mScale.innerHTML=1e3>e?e+" m":e/1e3+" km"},_updateImperial:function(t){var e,i,n,o=3.2808399*t,s=this._iScale;o>5280?(e=o/5280,i=this._getRoundNum(e),s.style.width=this._getScaleWidth(i/e)+"px",s.innerHTML=i+" mi"):(n=this._getRoundNum(o),s.style.width=this._getScaleWidth(n/o)+"px",s.innerHTML=n+" ft")},_getScaleWidth:function(t){return Math.round(this.options.maxWidth*t)-10},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1,e*i}}),o.control.scale=function(t){return new o.Control.Scale(t)},o.Control.Layers=o.Control.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0},initialize:function(t,e,i){o.setOptions(this,i),this._layers={},this._lastZIndex=0,this._handlingClick=!1;for(var n in t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){return this._initLayout(),this._update(),t.on("layeradd",this._onLayerChange,this).on("layerremove",this._onLayerChange,this),this._container},onRemove:function(t){t.off("layeradd",this._onLayerChange,this).off("layerremove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._update(),this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._update(),this},removeLayer:function(t){var e=o.stamp(t);return delete this._layers[e],this._update(),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=o.DomUtil.create("div",t);e.setAttribute("aria-haspopup",!0),o.Browser.touch?o.DomEvent.on(e,"click",o.DomEvent.stopPropagation):o.DomEvent.disableClickPropagation(e).disableScrollPropagation(e);var i=this._form=o.DomUtil.create("form",t+"-list");if(this.options.collapsed){o.Browser.android||o.DomEvent.on(e,"mouseover",this._expand,this).on(e,"mouseout",this._collapse,this);var n=this._layersLink=o.DomUtil.create("a",t+"-toggle",e);n.href="#",n.title="Layers",o.Browser.touch?o.DomEvent.on(n,"click",o.DomEvent.stop).on(n,"click",this._expand,this):o.DomEvent.on(n,"focus",this._expand,this),o.DomEvent.on(i,"click",function(){setTimeout(o.bind(this._onInputClick,this),0)},this),this._map.on("click",this._collapse,this)}else this._expand();this._baseLayersList=o.DomUtil.create("div",t+"-base",i),this._separator=o.DomUtil.create("div",t+"-separator",i),this._overlaysList=o.DomUtil.create("div",t+"-overlays",i),e.appendChild(i)},_addLayer:function(t,e,i){var n=o.stamp(t);this._layers[n]={layer:t,name:e,overlay:i},this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex))},_update:function(){if(this._container){this._baseLayersList.innerHTML="",this._overlaysList.innerHTML="";var t,e,i=!1,n=!1;for(t in this._layers)e=this._layers[t],this._addItem(e),n=n||e.overlay,i=i||!e.overlay;this._separator.style.display=n&&i?"":"none"}},_onLayerChange:function(t){var e=this._layers[o.stamp(t.layer)];if(e){this._handlingClick||this._update();var i=e.overlay?"layeradd"===t.type?"overlayadd":"overlayremove":"layeradd"===t.type?"baselayerchange":null;i&&this._map.fire(i,e)}},_createRadioElement:function(t,i){var n='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"';i&&(n+=' checked="checked"'),n+="/>";var o=e.createElement("div");return o.innerHTML=n,o.firstChild},_addItem:function(t){var i,n=e.createElement("label"),s=this._map.hasLayer(t.layer);t.overlay?(i=e.createElement("input"),i.type="checkbox",i.className="leaflet-control-layers-selector",i.defaultChecked=s):i=this._createRadioElement("leaflet-base-layers",s),i.layerId=o.stamp(t.layer),o.DomEvent.on(i,"click",this._onInputClick,this);var a=e.createElement("span");a.innerHTML=" "+t.name,n.appendChild(i),n.appendChild(a);var r=t.overlay?this._overlaysList:this._baseLayersList;return r.appendChild(n),n},_onInputClick:function(){var t,e,i,n=this._form.getElementsByTagName("input"),o=n.length;for(this._handlingClick=!0,t=0;o>t;t++)e=n[t],i=this._layers[e.layerId],e.checked&&!this._map.hasLayer(i.layer)?this._map.addLayer(i.layer):!e.checked&&this._map.hasLayer(i.layer)&&this._map.removeLayer(i.layer);this._handlingClick=!1,this._refocusOnMap()},_expand:function(){o.DomUtil.addClass(this._container,"leaflet-control-layers-expanded")},_collapse:function(){this._container.className=this._container.className.replace(" leaflet-control-layers-expanded","")}}),o.control.layers=function(t,e,i){return new o.Control.Layers(t,e,i)},o.PosAnimation=o.Class.extend({includes:o.Mixin.Events,run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._newPos=e,this.fire("start"),t.style[o.DomUtil.TRANSITION]="all "+(i||.25)+"s cubic-bezier(0,0,"+(n||.5)+",1)",o.DomEvent.on(t,o.DomUtil.TRANSITION_END,this._onTransitionEnd,this),o.DomUtil.setPosition(t,e),o.Util.falseFn(t.offsetWidth),this._stepTimer=setInterval(o.bind(this._onStep,this),50)},stop:function(){this._inProgress&&(o.DomUtil.setPosition(this._el,this._getPos()),this._onTransitionEnd(),o.Util.falseFn(this._el.offsetWidth))},_onStep:function(){var t=this._getPos();return t?(this._el._leaflet_pos=t,void this.fire("step")):void this._onTransitionEnd()},_transformRe:/([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,_getPos:function(){var e,i,n,s=this._el,a=t.getComputedStyle(s);if(o.Browser.any3d){if(n=a[o.DomUtil.TRANSFORM].match(this._transformRe),!n)return;e=parseFloat(n[1]),i=parseFloat(n[2])}else e=parseFloat(a.left),i=parseFloat(a.top);return new o.Point(e,i,!0)},_onTransitionEnd:function(){o.DomEvent.off(this._el,o.DomUtil.TRANSITION_END,this._onTransitionEnd,this),this._inProgress&&(this._inProgress=!1,this._el.style[o.DomUtil.TRANSITION]="",this._el._leaflet_pos=this._newPos,clearInterval(this._stepTimer),this.fire("step").fire("end"))}}),o.Map.include({setView:function(t,e,n){if(e=e===i?this._zoom:this._limitZoom(e),t=this._limitCenter(o.latLng(t),e,this.options.maxBounds),n=n||{},this._panAnim&&this._panAnim.stop(),this._loaded&&!n.reset&&n!==!0){n.animate!==i&&(n.zoom=o.extend({animate:n.animate},n.zoom),n.pan=o.extend({animate:n.animate},n.pan));var s=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,n.zoom):this._tryAnimatedPan(t,n.pan);if(s)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e),this},panBy:function(t,e){if(t=o.point(t).round(),e=e||{},!t.x&&!t.y)return this;if(this._panAnim||(this._panAnim=new o.PosAnimation,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),e.animate!==!1){o.DomUtil.addClass(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t);this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){o.DomUtil.removeClass(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._floor();return(e&&e.animate)===!0||this.getSize().contains(i)?(this.panBy(i,e),!0):!1}}),o.PosAnimation=o.DomUtil.TRANSITION?o.PosAnimation:o.PosAnimation.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=o.DomUtil.getPosition(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(),this._complete())},_animate:function(){this._animId=o.Util.requestAnimFrame(this._animate,this),this._step()},_step:function(){var t=+new Date-this._startTime,e=1e3*this._duration;e>t?this._runFrame(this._easeOut(t/e)):(this._runFrame(1),this._complete())},_runFrame:function(t){var e=this._startPos.add(this._offset.multiplyBy(t));o.DomUtil.setPosition(this._el,e),this.fire("step")},_complete:function(){o.Util.cancelAnimFrame(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),o.Map.mergeOptions({zoomAnimation:!0,zoomAnimationThreshold:4}),o.DomUtil.TRANSITION&&o.Map.addInitHook(function(){this._zoomAnimated=this.options.zoomAnimation&&o.DomUtil.TRANSITION&&o.Browser.any3d&&!o.Browser.android23&&!o.Browser.mobileOpera,this._zoomAnimated&&o.DomEvent.on(this._mapPane,o.DomUtil.TRANSITION_END,this._catchTransitionEnd,this)}),o.Map.include(o.DomUtil.TRANSITION?{_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;if(i=i||{},!this._zoomAnimated||i.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),o=this._getCenterOffset(t)._divideBy(1-1/n),s=this._getCenterLayerPoint()._add(o);return i.animate===!0||this.getSize().contains(o)?(this.fire("movestart").fire("zoomstart"),this._animateZoom(t,e,s,n,null,!0),!0):!1},_animateZoom:function(t,e,i,n,s,a,r){r||(this._animatingZoom=!0),o.DomUtil.addClass(this._mapPane,"leaflet-zoom-anim"),this._animateToCenter=t,this._animateToZoom=e,o.Draggable&&(o.Draggable._disabled=!0),o.Util.requestAnimFrame(function(){this.fire("zoomanim",{center:t,zoom:e,origin:i,scale:n,delta:s,backwards:a}),setTimeout(o.bind(this._onZoomTransitionEnd,this),250)},this)},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._animatingZoom=!1,o.DomUtil.removeClass(this._mapPane,"leaflet-zoom-anim"),o.Util.requestAnimFrame(function(){this._resetView(this._animateToCenter,this._animateToZoom,!0,!0),o.Draggable&&(o.Draggable._disabled=!1)},this))}}:{}),o.TileLayer.include({_animateZoom:function(t){this._animating||(this._animating=!0,this._prepareBgBuffer());var e=this._bgBuffer,i=o.DomUtil.TRANSFORM,n=t.delta?o.DomUtil.getTranslateString(t.delta):e.style[i],s=o.DomUtil.getScaleString(t.scale,t.origin);e.style[i]=t.backwards?s+" "+n:n+" "+s},_endZoomAnim:function(){var t=this._tileContainer,e=this._bgBuffer;t.style.visibility="",t.parentNode.appendChild(t),o.Util.falseFn(e.offsetWidth);var i=this._map.getZoom();(i>this.options.maxZoom||i<this.options.minZoom)&&this._clearBgBuffer(),this._animating=!1},_clearBgBuffer:function(){var t=this._map;!t||t._animatingZoom||t.touchZoom._zooming||(this._bgBuffer.innerHTML="",this._bgBuffer.style[o.DomUtil.TRANSFORM]="")},_prepareBgBuffer:function(){var t=this._tileContainer,e=this._bgBuffer,i=this._getLoadedTilesPercentage(e),n=this._getLoadedTilesPercentage(t);return e&&i>.5&&.5>n?(t.style.visibility="hidden",void this._stopLoadingImages(t)):(e.style.visibility="hidden",e.style[o.DomUtil.TRANSFORM]="",this._tileContainer=e,e=this._bgBuffer=t,this._stopLoadingImages(e),void clearTimeout(this._clearBgBufferTimer))},_getLoadedTilesPercentage:function(t){var e,i,n=t.getElementsByTagName("img"),o=0;for(e=0,i=n.length;i>e;e++)n[e].complete&&o++;return o/i},_stopLoadingImages:function(t){var e,i,n,s=Array.prototype.slice.call(t.getElementsByTagName("img"));for(e=0,i=s.length;i>e;e++)n=s[e],n.complete||(n.onload=o.Util.falseFn,n.onerror=o.Util.falseFn,n.src=o.Util.emptyImageUrl,n.parentNode.removeChild(n))}}),o.Map.include({_defaultLocateOptions:{watch:!1,setView:!1,maxZoom:1/0,timeout:1e4,maximumAge:0,enableHighAccuracy:!1},locate:function(t){if(t=this._locateOptions=o.extend(this._defaultLocateOptions,t),!navigator.geolocation)return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=o.bind(this._handleGeolocationResponse,this),i=o.bind(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){var e=t.code,i=t.message||(1===e?"permission denied":2===e?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})},_handleGeolocationResponse:function(t){var e=t.coords.latitude,i=t.coords.longitude,n=new o.LatLng(e,i),s=180*t.coords.accuracy/40075017,a=s/Math.cos(o.LatLng.DEG_TO_RAD*e),r=o.latLngBounds([e-s,i-a],[e+s,i+a]),h=this._locateOptions;if(h.setView){var l=Math.min(this.getBoundsZoom(r),h.maxZoom);this.setView(n,l)}var u={latlng:n,bounds:r,timestamp:t.timestamp};for(var c in t.coords)"number"==typeof t.coords[c]&&(u[c]=t.coords[c]);this.fire("locationfound",u)}})}(window,document);
},{}],4:[function(require,module,exports){
!function(e,t){"object"==typeof exports&&exports&&"string"!=typeof exports.nodeName?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):(e.Mustache={},t(e.Mustache))}(this,function(e){function t(e){return"function"==typeof e}function n(e){return g(e)?"array":typeof e}function r(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function i(e,t){return null!=e&&"object"==typeof e&&t in e}function o(e,t){return v.call(e,t)}function s(e){return!o(w,e)}function a(e){return String(e).replace(/[&<>"'`=\/]/g,function(e){return y[e]})}function u(t,n){function i(){if(w&&!y)for(;v.length;)delete d[v.pop()];else v=[];w=!1,y=!1}function o(e){if("string"==typeof e&&(e=e.split(k,2)),!g(e)||2!==e.length)throw new Error("Invalid tags: "+e);a=new RegExp(r(e[0])+"\\s*"),u=new RegExp("\\s*"+r(e[1])),h=new RegExp("\\s*"+r("}"+e[1]))}if(!t)return[];var a,u,h,f=[],d=[],v=[],w=!1,y=!1;o(n||e.tags);for(var U,T,j,S,V,C,A=new l(t);!A.eos();){if(U=A.pos,j=A.scanUntil(a))for(var I=0,R=j.length;R>I;++I)S=j.charAt(I),s(S)?v.push(d.length):y=!0,d.push(["text",S,U,U+1]),U+=1,"\n"===S&&i();if(!A.scan(a))break;if(w=!0,T=A.scan(E)||"name",A.scan(x),"="===T?(j=A.scanUntil(b),A.scan(b),A.scanUntil(u)):"{"===T?(j=A.scanUntil(h),A.scan(m),A.scanUntil(u),T="&"):j=A.scanUntil(u),!A.scan(u))throw new Error("Unclosed tag at "+A.pos);if(V=[T,j,U,A.pos],d.push(V),"#"===T||"^"===T)f.push(V);else if("/"===T){if(C=f.pop(),!C)throw new Error('Unopened section "'+j+'" at '+U);if(C[1]!==j)throw new Error('Unclosed section "'+C[1]+'" at '+U)}else"name"===T||"{"===T||"&"===T?y=!0:"="===T&&o(j)}if(C=f.pop())throw new Error('Unclosed section "'+C[1]+'" at '+A.pos);return p(c(d))}function c(e){for(var t,n,r=[],i=0,o=e.length;o>i;++i)t=e[i],t&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],n[3]=t[3]):(r.push(t),n=t));return r}function p(e){for(var t,n,r=[],i=r,o=[],s=0,a=e.length;a>s;++s)switch(t=e[s],t[0]){case"#":case"^":i.push(t),o.push(t),i=t[4]=[];break;case"/":n=o.pop(),n[5]=t[2],i=o.length>0?o[o.length-1][4]:r;break;default:i.push(t)}return r}function l(e){this.string=e,this.tail=e,this.pos=0}function h(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function f(){this.cache={}}var d=Object.prototype.toString,g=Array.isArray||function(e){return"[object Array]"===d.call(e)},v=RegExp.prototype.test,w=/\S/,y={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},x=/\s*/,k=/\s+/,b=/\s*=/,m=/\s*\}/,E=/#|\^|\/|>|\{|&|=|!/;l.prototype.eos=function(){return""===this.tail},l.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},l.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t},h.prototype.push=function(e){return new h(e,this)},h.prototype.lookup=function(e){var n,r=this.cache;if(r.hasOwnProperty(e))n=r[e];else{for(var o,s,a=this,u=!1;a;){if(e.indexOf(".")>0)for(n=a.view,o=e.split("."),s=0;null!=n&&s<o.length;)s===o.length-1&&(u=i(n,o[s])),n=n[o[s++]];else n=a.view[e],u=i(a.view,e);if(u)break;a=a.parent}r[e]=n}return t(n)&&(n=n.call(this.view)),n},f.prototype.clearCache=function(){this.cache={}},f.prototype.parse=function(e,t){var n=this.cache,r=n[e];return null==r&&(r=n[e]=u(e,t)),r},f.prototype.render=function(e,t,n){var r=this.parse(e),i=t instanceof h?t:new h(t);return this.renderTokens(r,i,n,e)},f.prototype.renderTokens=function(e,t,n,r){for(var i,o,s,a="",u=0,c=e.length;c>u;++u)s=void 0,i=e[u],o=i[0],"#"===o?s=this.renderSection(i,t,n,r):"^"===o?s=this.renderInverted(i,t,n,r):">"===o?s=this.renderPartial(i,t,n,r):"&"===o?s=this.unescapedValue(i,t):"name"===o?s=this.escapedValue(i,t):"text"===o&&(s=this.rawValue(i)),void 0!==s&&(a+=s);return a},f.prototype.renderSection=function(e,n,r,i){function o(e){return s.render(e,n,r)}var s=this,a="",u=n.lookup(e[1]);if(u){if(g(u))for(var c=0,p=u.length;p>c;++c)a+=this.renderTokens(e[4],n.push(u[c]),r,i);else if("object"==typeof u||"string"==typeof u||"number"==typeof u)a+=this.renderTokens(e[4],n.push(u),r,i);else if(t(u)){if("string"!=typeof i)throw new Error("Cannot use higher-order sections without the original template");u=u.call(n.view,i.slice(e[3],e[5]),o),null!=u&&(a+=u)}else a+=this.renderTokens(e[4],n,r,i);return a}},f.prototype.renderInverted=function(e,t,n,r){var i=t.lookup(e[1]);return!i||g(i)&&0===i.length?this.renderTokens(e[4],t,n,r):void 0},f.prototype.renderPartial=function(e,n,r){if(r){var i=t(r)?r(e[1]):r[e[1]];return null!=i?this.renderTokens(this.parse(i),n,r,i):void 0}},f.prototype.unescapedValue=function(e,t){var n=t.lookup(e[1]);return null!=n?n:void 0},f.prototype.escapedValue=function(t,n){var r=n.lookup(t[1]);return null!=r?e.escape(r):void 0},f.prototype.rawValue=function(e){return e[1]},e.name="mustache.js",e.version="2.2.1",e.tags=["{{","}}"];var U=new f;e.clearCache=function(){return U.clearCache()},e.parse=function(e,t){return U.parse(e,t)},e.render=function(e,t,r){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+n(e)+'" was given as the first argument for mustache#render(template, view, partials)');return U.render(e,t,r)},e.to_html=function(n,r,i,o){var s=e.render(n,r,i);return t(o)?void o(s):s},e.escape=a,e.Scanner=l,e.Context=h,e.Writer=f});
},{}],5:[function(require,module,exports){
function cleanUrl(t){"use strict";return/^https?/.test(t.getScheme())?t.toString():/^mailto?/.test(t.getScheme())?t.toString():"data"==t.getScheme()&&/^image/.test(t.getPath())?t.toString():void 0}function cleanId(t){return t}var html_sanitize=require("./sanitizer-bundle.js");module.exports=function(t){return t?html_sanitize(t,cleanUrl,cleanId):""};
},{"./sanitizer-bundle.js":6}],6:[function(require,module,exports){
var URI=function(){function e(e){var t=(""+e).match(p);return t?new s(c(t[1]),c(t[2]),c(t[3]),c(t[4]),c(t[5]),c(t[6]),c(t[7])):null}function t(e,t,o,i,l,c,m){var u=new s(n(e,d),n(t,d),a(o),i>0?i.toString():null,n(l,f),null,a(m));return c&&("string"==typeof c?u.setRawQuery(c.replace(/[^?&=0-9A-Za-z_\-~.%]/g,r)):u.setAllParameters(c)),u}function a(e){return"string"==typeof e?encodeURIComponent(e):null}function n(e,t){return"string"==typeof e?encodeURI(e).replace(t,r):null}function r(e){var t=e.charCodeAt(0);return"%"+"0123456789ABCDEF".charAt(t>>4&15)+"0123456789ABCDEF".charAt(15&t)}function o(e){return e.replace(/(^|\/)\.(?:\/|$)/g,"$1").replace(/\/{2,}/g,"/")}function i(e){if(null===e)return null;for(var t,a=o(e),n=u;(t=a.replace(n,"$1"))!=a;a=t);return a}function l(e,t){var a=e.clone(),n=t.hasScheme();n?a.setRawScheme(t.getRawScheme()):n=t.hasCredentials(),n?a.setRawCredentials(t.getRawCredentials()):n=t.hasDomain(),n?a.setRawDomain(t.getRawDomain()):n=t.hasPort();var r=t.getRawPath(),o=i(r);if(n)a.setPort(t.getPort()),o=o&&o.replace(h,"");else if(n=!!r){if(47!==o.charCodeAt(0)){var l=i(a.getRawPath()||"").replace(h,""),s=l.lastIndexOf("/")+1;o=i((s?l.substring(0,s):"")+i(r)).replace(h,"")}}else o=o&&o.replace(h,""),o!==r&&a.setRawPath(o);return n?a.setRawPath(o):n=t.hasQuery(),n?a.setRawQuery(t.getRawQuery()):n=t.hasFragment(),n&&a.setRawFragment(t.getRawFragment()),a}function s(e,t,a,n,r,o,i){this.scheme_=e,this.credentials_=t,this.domain_=a,this.port_=n,this.path_=r,this.query_=o,this.fragment_=i,this.paramCache_=null}function c(e){return"string"==typeof e&&e.length>0?e:null}var m=new RegExp("(/|^)(?:[^./][^/]*|\\.{2,}(?:[^./][^/]*)|\\.{3,}[^/]*)/\\.\\.(?:/|$)"),u=new RegExp(m),h=/^(?:\.\.\/)*(?:\.\.$)?/;s.prototype.toString=function(){var e=[];return null!==this.scheme_&&e.push(this.scheme_,":"),null!==this.domain_&&(e.push("//"),null!==this.credentials_&&e.push(this.credentials_,"@"),e.push(this.domain_),null!==this.port_&&e.push(":",this.port_.toString())),null!==this.path_&&e.push(this.path_),null!==this.query_&&e.push("?",this.query_),null!==this.fragment_&&e.push("#",this.fragment_),e.join("")},s.prototype.clone=function(){return new s(this.scheme_,this.credentials_,this.domain_,this.port_,this.path_,this.query_,this.fragment_)},s.prototype.getScheme=function(){return this.scheme_&&decodeURIComponent(this.scheme_).toLowerCase()},s.prototype.getRawScheme=function(){return this.scheme_},s.prototype.setScheme=function(e){return this.scheme_=n(e,d),this},s.prototype.setRawScheme=function(e){return this.scheme_=e?e:null,this},s.prototype.hasScheme=function(){return null!==this.scheme_},s.prototype.getCredentials=function(){return this.credentials_&&decodeURIComponent(this.credentials_)},s.prototype.getRawCredentials=function(){return this.credentials_},s.prototype.setCredentials=function(e){return this.credentials_=n(e,d),this},s.prototype.setRawCredentials=function(e){return this.credentials_=e?e:null,this},s.prototype.hasCredentials=function(){return null!==this.credentials_},s.prototype.getDomain=function(){return this.domain_&&decodeURIComponent(this.domain_)},s.prototype.getRawDomain=function(){return this.domain_},s.prototype.setDomain=function(e){return this.setRawDomain(e&&encodeURIComponent(e))},s.prototype.setRawDomain=function(e){return this.domain_=e?e:null,this.setRawPath(this.path_)},s.prototype.hasDomain=function(){return null!==this.domain_},s.prototype.getPort=function(){return this.port_&&decodeURIComponent(this.port_)},s.prototype.setPort=function(e){if(e){if(e=Number(e),e!==(65535&e))throw new Error("Bad port number "+e);this.port_=""+e}else this.port_=null;return this},s.prototype.hasPort=function(){return null!==this.port_},s.prototype.getPath=function(){return this.path_&&decodeURIComponent(this.path_)},s.prototype.getRawPath=function(){return this.path_},s.prototype.setPath=function(e){return this.setRawPath(n(e,f))},s.prototype.setRawPath=function(e){return e?(e=String(e),this.path_=!this.domain_||/^\//.test(e)?e:"/"+e):this.path_=null,this},s.prototype.hasPath=function(){return null!==this.path_},s.prototype.getQuery=function(){return this.query_&&decodeURIComponent(this.query_).replace(/\+/g," ")},s.prototype.getRawQuery=function(){return this.query_},s.prototype.setQuery=function(e){return this.paramCache_=null,this.query_=a(e),this},s.prototype.setRawQuery=function(e){return this.paramCache_=null,this.query_=e?e:null,this},s.prototype.hasQuery=function(){return null!==this.query_},s.prototype.setAllParameters=function(e){if("object"==typeof e&&!(e instanceof Array)&&(e instanceof Object||"[object Array]"!==Object.prototype.toString.call(e))){var t=[],a=-1;for(var n in e){var r=e[n];"string"==typeof r&&(t[++a]=n,t[++a]=r)}e=t}this.paramCache_=null;for(var o=[],i="",l=0;l<e.length;){var n=e[l++],r=e[l++];o.push(i,encodeURIComponent(n.toString())),i="&",r&&o.push("=",encodeURIComponent(r.toString()))}return this.query_=o.join(""),this},s.prototype.checkParameterCache_=function(){if(!this.paramCache_){var e=this.query_;if(e){for(var t=e.split(/[&\?]/),a=[],n=-1,r=0;r<t.length;++r){var o=t[r].match(/^([^=]*)(?:=(.*))?$/);a[++n]=decodeURIComponent(o[1]).replace(/\+/g," "),a[++n]=decodeURIComponent(o[2]||"").replace(/\+/g," ")}this.paramCache_=a}else this.paramCache_=[]}},s.prototype.setParameterValues=function(e,t){"string"==typeof t&&(t=[t]),this.checkParameterCache_();for(var a=0,n=this.paramCache_,r=[],o=0;o<n.length;o+=2)e===n[o]?a<t.length&&r.push(e,t[a++]):r.push(n[o],n[o+1]);for(;a<t.length;)r.push(e,t[a++]);return this.setAllParameters(r),this},s.prototype.removeParameter=function(e){return this.setParameterValues(e,[])},s.prototype.getAllParameters=function(){return this.checkParameterCache_(),this.paramCache_.slice(0,this.paramCache_.length)},s.prototype.getParameterValues=function(e){this.checkParameterCache_();for(var t=[],a=0;a<this.paramCache_.length;a+=2)e===this.paramCache_[a]&&t.push(this.paramCache_[a+1]);return t},s.prototype.getParameterMap=function(e){this.checkParameterCache_();for(var t={},a=0;a<this.paramCache_.length;a+=2){var n=this.paramCache_[a++],r=this.paramCache_[a++];n in t?t[n].push(r):t[n]=[r]}return t},s.prototype.getParameterValue=function(e){this.checkParameterCache_();for(var t=0;t<this.paramCache_.length;t+=2)if(e===this.paramCache_[t])return this.paramCache_[t+1];return null},s.prototype.getFragment=function(){return this.fragment_&&decodeURIComponent(this.fragment_)},s.prototype.getRawFragment=function(){return this.fragment_},s.prototype.setFragment=function(e){return this.fragment_=e?encodeURIComponent(e):null,this},s.prototype.setRawFragment=function(e){return this.fragment_=e?e:null,this},s.prototype.hasFragment=function(){return null!==this.fragment_};var p=new RegExp("^(?:([^:/?#]+):)?(?://(?:([^/?#]*)@)?([^/?#:@]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),d=/[#\/\?@]/g,f=/[\#\?]/g;return s.parse=e,s.create=t,s.resolve=l,s.collapse_dots=i,s.utils={mimeTypeOf:function(t){var a=e(t);return/\.html$/.test(a.getPath())?"text/html":"application/javascript"},resolve:function(t,a){return t?l(e(t),e(a)).toString():""+a}},s}(),html4={};if(html4.atype={NONE:0,URI:1,URI_FRAGMENT:11,SCRIPT:2,STYLE:3,HTML:12,ID:4,IDREF:5,IDREFS:6,GLOBAL_NAME:7,LOCAL_NAME:8,CLASSES:9,FRAME_TARGET:10,MEDIA_QUERY:13},html4.atype=html4.atype,html4.ATTRIBS={"*::class":9,"*::dir":0,"*::draggable":0,"*::hidden":0,"*::id":4,"*::inert":0,"*::itemprop":0,"*::itemref":6,"*::itemscope":0,"*::lang":0,"*::onblur":2,"*::onchange":2,"*::onclick":2,"*::ondblclick":2,"*::onfocus":2,"*::onkeydown":2,"*::onkeypress":2,"*::onkeyup":2,"*::onload":2,"*::onmousedown":2,"*::onmousemove":2,"*::onmouseout":2,"*::onmouseover":2,"*::onmouseup":2,"*::onreset":2,"*::onscroll":2,"*::onselect":2,"*::onsubmit":2,"*::onunload":2,"*::spellcheck":0,"*::style":3,"*::title":0,"*::translate":0,"a::accesskey":0,"a::coords":0,"a::href":1,"a::hreflang":0,"a::name":7,"a::onblur":2,"a::onfocus":2,"a::shape":0,"a::tabindex":0,"a::target":10,"a::type":0,"area::accesskey":0,"area::alt":0,"area::coords":0,"area::href":1,"area::nohref":0,"area::onblur":2,"area::onfocus":2,"area::shape":0,"area::tabindex":0,"area::target":10,"audio::controls":0,"audio::loop":0,"audio::mediagroup":5,"audio::muted":0,"audio::preload":0,"bdo::dir":0,"blockquote::cite":1,"br::clear":0,"button::accesskey":0,"button::disabled":0,"button::name":8,"button::onblur":2,"button::onfocus":2,"button::tabindex":0,"button::type":0,"button::value":0,"canvas::height":0,"canvas::width":0,"caption::align":0,"col::align":0,"col::char":0,"col::charoff":0,"col::span":0,"col::valign":0,"col::width":0,"colgroup::align":0,"colgroup::char":0,"colgroup::charoff":0,"colgroup::span":0,"colgroup::valign":0,"colgroup::width":0,"command::checked":0,"command::command":5,"command::disabled":0,"command::icon":1,"command::label":0,"command::radiogroup":0,"command::type":0,"data::value":0,"del::cite":1,"del::datetime":0,"details::open":0,"dir::compact":0,"div::align":0,"dl::compact":0,"fieldset::disabled":0,"font::color":0,"font::face":0,"font::size":0,"form::accept":0,"form::action":1,"form::autocomplete":0,"form::enctype":0,"form::method":0,"form::name":7,"form::novalidate":0,"form::onreset":2,"form::onsubmit":2,"form::target":10,"h1::align":0,"h2::align":0,"h3::align":0,"h4::align":0,"h5::align":0,"h6::align":0,"hr::align":0,"hr::noshade":0,"hr::size":0,"hr::width":0,"iframe::align":0,"iframe::frameborder":0,"iframe::height":0,"iframe::marginheight":0,"iframe::marginwidth":0,"iframe::width":0,"img::align":0,"img::alt":0,"img::border":0,"img::height":0,"img::hspace":0,"img::ismap":0,"img::name":7,"img::src":1,"img::usemap":11,"img::vspace":0,"img::width":0,"input::accept":0,"input::accesskey":0,"input::align":0,"input::alt":0,"input::autocomplete":0,"input::checked":0,"input::disabled":0,"input::inputmode":0,"input::ismap":0,"input::list":5,"input::max":0,"input::maxlength":0,"input::min":0,"input::multiple":0,"input::name":8,"input::onblur":2,"input::onchange":2,"input::onfocus":2,"input::onselect":2,"input::placeholder":0,"input::readonly":0,"input::required":0,"input::size":0,"input::src":1,"input::step":0,"input::tabindex":0,"input::type":0,"input::usemap":11,"input::value":0,"ins::cite":1,"ins::datetime":0,"label::accesskey":0,"label::for":5,"label::onblur":2,"label::onfocus":2,"legend::accesskey":0,"legend::align":0,"li::type":0,"li::value":0,"map::name":7,"menu::compact":0,"menu::label":0,"menu::type":0,"meter::high":0,"meter::low":0,"meter::max":0,"meter::min":0,"meter::value":0,"ol::compact":0,"ol::reversed":0,"ol::start":0,"ol::type":0,"optgroup::disabled":0,"optgroup::label":0,"option::disabled":0,"option::label":0,"option::selected":0,"option::value":0,"output::for":6,"output::name":8,"p::align":0,"pre::width":0,"progress::max":0,"progress::min":0,"progress::value":0,"q::cite":1,"select::autocomplete":0,"select::disabled":0,"select::multiple":0,"select::name":8,"select::onblur":2,"select::onchange":2,"select::onfocus":2,"select::required":0,"select::size":0,"select::tabindex":0,"source::type":0,"table::align":0,"table::bgcolor":0,"table::border":0,"table::cellpadding":0,"table::cellspacing":0,"table::frame":0,"table::rules":0,"table::summary":0,"table::width":0,"tbody::align":0,"tbody::char":0,"tbody::charoff":0,"tbody::valign":0,"td::abbr":0,"td::align":0,"td::axis":0,"td::bgcolor":0,"td::char":0,"td::charoff":0,"td::colspan":0,"td::headers":6,"td::height":0,"td::nowrap":0,"td::rowspan":0,"td::scope":0,"td::valign":0,"td::width":0,"textarea::accesskey":0,"textarea::autocomplete":0,"textarea::cols":0,"textarea::disabled":0,"textarea::inputmode":0,"textarea::name":8,"textarea::onblur":2,"textarea::onchange":2,"textarea::onfocus":2,"textarea::onselect":2,"textarea::placeholder":0,"textarea::readonly":0,"textarea::required":0,"textarea::rows":0,"textarea::tabindex":0,"textarea::wrap":0,"tfoot::align":0,"tfoot::char":0,"tfoot::charoff":0,"tfoot::valign":0,"th::abbr":0,"th::align":0,"th::axis":0,"th::bgcolor":0,"th::char":0,"th::charoff":0,"th::colspan":0,"th::headers":6,"th::height":0,"th::nowrap":0,"th::rowspan":0,"th::scope":0,"th::valign":0,"th::width":0,"thead::align":0,"thead::char":0,"thead::charoff":0,"thead::valign":0,"tr::align":0,"tr::bgcolor":0,"tr::char":0,"tr::charoff":0,"tr::valign":0,"track::default":0,"track::kind":0,"track::label":0,"track::srclang":0,"ul::compact":0,"ul::type":0,"video::controls":0,"video::height":0,"video::loop":0,"video::mediagroup":5,"video::muted":0,"video::poster":1,"video::preload":0,"video::width":0},html4.ATTRIBS=html4.ATTRIBS,html4.eflags={OPTIONAL_ENDTAG:1,EMPTY:2,CDATA:4,RCDATA:8,UNSAFE:16,FOLDABLE:32,SCRIPT:64,STYLE:128,VIRTUALIZED:256},html4.eflags=html4.eflags,html4.ELEMENTS={a:0,abbr:0,acronym:0,address:0,applet:272,area:2,article:0,aside:0,audio:0,b:0,base:274,basefont:274,bdi:0,bdo:0,big:0,blockquote:0,body:305,br:2,button:0,canvas:0,caption:0,center:0,cite:0,code:0,col:2,colgroup:1,command:2,data:0,datalist:0,dd:1,del:0,details:0,dfn:0,dialog:272,dir:0,div:0,dl:0,dt:1,em:0,fieldset:0,figcaption:0,figure:0,font:0,footer:0,form:0,frame:274,frameset:272,h1:0,h2:0,h3:0,h4:0,h5:0,h6:0,head:305,header:0,hgroup:0,hr:2,html:305,i:0,iframe:16,img:2,input:2,ins:0,isindex:274,kbd:0,keygen:274,label:0,legend:0,li:1,link:274,map:0,mark:0,menu:0,meta:274,meter:0,nav:0,nobr:0,noembed:276,noframes:276,noscript:276,object:272,ol:0,optgroup:0,option:1,output:0,p:1,param:274,pre:0,progress:0,q:0,s:0,samp:0,script:84,section:0,select:0,small:0,source:2,span:0,strike:0,strong:0,style:148,sub:0,summary:0,sup:0,table:0,tbody:1,td:1,textarea:8,tfoot:1,th:1,thead:1,time:0,title:280,tr:1,track:2,tt:0,u:0,ul:0,"var":0,video:0,wbr:2},html4.ELEMENTS=html4.ELEMENTS,html4.ELEMENT_DOM_INTERFACES={a:"HTMLAnchorElement",abbr:"HTMLElement",acronym:"HTMLElement",address:"HTMLElement",applet:"HTMLAppletElement",area:"HTMLAreaElement",article:"HTMLElement",aside:"HTMLElement",audio:"HTMLAudioElement",b:"HTMLElement",base:"HTMLBaseElement",basefont:"HTMLBaseFontElement",bdi:"HTMLElement",bdo:"HTMLElement",big:"HTMLElement",blockquote:"HTMLQuoteElement",body:"HTMLBodyElement",br:"HTMLBRElement",button:"HTMLButtonElement",canvas:"HTMLCanvasElement",caption:"HTMLTableCaptionElement",center:"HTMLElement",cite:"HTMLElement",code:"HTMLElement",col:"HTMLTableColElement",colgroup:"HTMLTableColElement",command:"HTMLCommandElement",data:"HTMLElement",datalist:"HTMLDataListElement",dd:"HTMLElement",del:"HTMLModElement",details:"HTMLDetailsElement",dfn:"HTMLElement",dialog:"HTMLDialogElement",dir:"HTMLDirectoryElement",div:"HTMLDivElement",dl:"HTMLDListElement",dt:"HTMLElement",em:"HTMLElement",fieldset:"HTMLFieldSetElement",figcaption:"HTMLElement",figure:"HTMLElement",font:"HTMLFontElement",footer:"HTMLElement",form:"HTMLFormElement",frame:"HTMLFrameElement",frameset:"HTMLFrameSetElement",h1:"HTMLHeadingElement",h2:"HTMLHeadingElement",h3:"HTMLHeadingElement",h4:"HTMLHeadingElement",h5:"HTMLHeadingElement",h6:"HTMLHeadingElement",head:"HTMLHeadElement",header:"HTMLElement",hgroup:"HTMLElement",hr:"HTMLHRElement",html:"HTMLHtmlElement",i:"HTMLElement",iframe:"HTMLIFrameElement",img:"HTMLImageElement",input:"HTMLInputElement",ins:"HTMLModElement",isindex:"HTMLUnknownElement",kbd:"HTMLElement",keygen:"HTMLKeygenElement",label:"HTMLLabelElement",legend:"HTMLLegendElement",li:"HTMLLIElement",link:"HTMLLinkElement",map:"HTMLMapElement",mark:"HTMLElement",menu:"HTMLMenuElement",meta:"HTMLMetaElement",meter:"HTMLMeterElement",nav:"HTMLElement",nobr:"HTMLElement",noembed:"HTMLElement",noframes:"HTMLElement",noscript:"HTMLElement",object:"HTMLObjectElement",ol:"HTMLOListElement",optgroup:"HTMLOptGroupElement",option:"HTMLOptionElement",output:"HTMLOutputElement",p:"HTMLParagraphElement",param:"HTMLParamElement",pre:"HTMLPreElement",progress:"HTMLProgressElement",q:"HTMLQuoteElement",s:"HTMLElement",samp:"HTMLElement",script:"HTMLScriptElement",section:"HTMLElement",select:"HTMLSelectElement",small:"HTMLElement",source:"HTMLSourceElement",span:"HTMLSpanElement",strike:"HTMLElement",strong:"HTMLElement",style:"HTMLStyleElement",sub:"HTMLElement",summary:"HTMLElement",sup:"HTMLElement",table:"HTMLTableElement",tbody:"HTMLTableSectionElement",td:"HTMLTableDataCellElement",textarea:"HTMLTextAreaElement",tfoot:"HTMLTableSectionElement",th:"HTMLTableHeaderCellElement",thead:"HTMLTableSectionElement",time:"HTMLTimeElement",title:"HTMLTitleElement",tr:"HTMLTableRowElement",track:"HTMLTrackElement",tt:"HTMLElement",u:"HTMLElement",ul:"HTMLUListElement","var":"HTMLElement",video:"HTMLVideoElement",wbr:"HTMLElement"},html4.ELEMENT_DOM_INTERFACES=html4.ELEMENT_DOM_INTERFACES,html4.ueffects={NOT_LOADED:0,SAME_DOCUMENT:1,NEW_DOCUMENT:2},html4.ueffects=html4.ueffects,html4.URIEFFECTS={"a::href":2,"area::href":2,"blockquote::cite":0,"command::icon":1,"del::cite":0,"form::action":2,"img::src":1,"input::src":1,"ins::cite":0,"q::cite":0,"video::poster":1},html4.URIEFFECTS=html4.URIEFFECTS,html4.ltypes={UNSANDBOXED:2,SANDBOXED:1,DATA:0},html4.ltypes=html4.ltypes,html4.LOADERTYPES={"a::href":2,"area::href":2,"blockquote::cite":2,"command::icon":1,"del::cite":2,"form::action":2,"img::src":1,"input::src":1,"ins::cite":2,"q::cite":2,"video::poster":1},html4.LOADERTYPES=html4.LOADERTYPES,"i"!=="I".toLowerCase())throw"I/i problem";var html=function(e){function t(e){if(S.hasOwnProperty(e))return S[e];var t=e.match(P);if(t)return String.fromCharCode(parseInt(t[1],10));if(t=e.match(D))return String.fromCharCode(parseInt(t[1],16));if(I&&k.test(e)){I.innerHTML="&"+e+";";var a=I.textContent;return S[e]=a,a}return"&"+e+";"}function a(e,a){return t(a)}function n(e){return e.replace(x,"")}function r(e){return e.replace(N,a)}function o(e){return(""+e).replace(F,"&amp;").replace(B,"&lt;").replace(q,"&gt;").replace(z,"&#34;")}function i(e){return e.replace(U,"&amp;$1").replace(B,"&lt;").replace(q,"&gt;")}function l(e){var t={cdata:e.cdata||e.cdata,comment:e.comment||e.comment,endDoc:e.endDoc||e.endDoc,endTag:e.endTag||e.endTag,pcdata:e.pcdata||e.pcdata,rcdata:e.rcdata||e.rcdata,startDoc:e.startDoc||e.startDoc,startTag:e.startTag||e.startTag};return function(e,a){return s(e,t,a)}}function s(e,t,a){var n=u(e),r={noMoreGT:!1,noMoreEndComments:!1};m(t,n,0,r,a)}function c(e,t,a,n,r){return function(){m(e,t,a,n,r)}}function m(t,a,n,r,o){try{t.startDoc&&0==n&&t.startDoc(o);for(var i,l,s,m=n,u=a.length;u>m;){var f=a[m++],g=a[m];switch(f){case"&":O.test(g)?(t.pcdata&&t.pcdata("&"+g,o,Y,c(t,a,m,r,o)),m++):t.pcdata&&t.pcdata("&amp;",o,Y,c(t,a,m,r,o));break;case"</":(i=/^([-\w:]+)[^\'\"]*/.exec(g))?i[0].length===g.length&&">"===a[m+1]?(m+=2,s=i[1].toLowerCase(),t.endTag&&t.endTag(s,o,Y,c(t,a,m,r,o))):m=h(a,m,t,o,Y,r):t.pcdata&&t.pcdata("&lt;/",o,Y,c(t,a,m,r,o));break;case"<":if(i=/^([-\w:]+)\s*\/?/.exec(g))if(i[0].length===g.length&&">"===a[m+1]){m+=2,s=i[1].toLowerCase(),t.startTag&&t.startTag(s,[],o,Y,c(t,a,m,r,o));var E=e.ELEMENTS[s];if(E&j){var T={name:s,next:m,eflags:E};m=d(a,T,t,o,Y,r)}}else m=p(a,m,t,o,Y,r);else t.pcdata&&t.pcdata("&lt;",o,Y,c(t,a,m,r,o));break;case"<!--":if(!r.noMoreEndComments){for(l=m+1;u>l&&(">"!==a[l]||!/--$/.test(a[l-1]));l++);if(u>l){if(t.comment){var L=a.slice(m,l).join("");t.comment(L.substr(0,L.length-2),o,Y,c(t,a,l+1,r,o))}m=l+1}else r.noMoreEndComments=!0}r.noMoreEndComments&&t.pcdata&&t.pcdata("&lt;!--",o,Y,c(t,a,m,r,o));break;case"<!":if(/^\w/.test(g)){if(!r.noMoreGT){for(l=m+1;u>l&&">"!==a[l];l++);u>l?m=l+1:r.noMoreGT=!0}r.noMoreGT&&t.pcdata&&t.pcdata("&lt;!",o,Y,c(t,a,m,r,o))}else t.pcdata&&t.pcdata("&lt;!",o,Y,c(t,a,m,r,o));break;case"<?":if(!r.noMoreGT){for(l=m+1;u>l&&">"!==a[l];l++);u>l?m=l+1:r.noMoreGT=!0}r.noMoreGT&&t.pcdata&&t.pcdata("&lt;?",o,Y,c(t,a,m,r,o));break;case">":t.pcdata&&t.pcdata("&gt;",o,Y,c(t,a,m,r,o));break;case"":break;default:t.pcdata&&t.pcdata(f,o,Y,c(t,a,m,r,o))}}t.endDoc&&t.endDoc(o)}catch(M){if(M!==Y)throw M}}function u(e){var t=/(<\/|<\!--|<[!?]|[&<>])/g;if(e+="",$)return e.split(t);for(var a,n=[],r=0;null!==(a=t.exec(e));)n.push(e.substring(r,a.index)),n.push(a[0]),r=a.index+a[0].length;return n.push(e.substring(r)),n}function h(e,t,a,n,r,o){var i=f(e,t);return i?(a.endTag&&a.endTag(i.name,n,r,c(a,e,t,o,n)),i.next):e.length}function p(e,t,a,n,r,o){var i=f(e,t);return i?(a.startTag&&a.startTag(i.name,i.attrs,n,r,c(a,e,i.next,o,n)),i.eflags&j?d(e,i,a,n,r,o):i.next):e.length}function d(t,a,n,r,o,l){var s=t.length;Q.hasOwnProperty(a.name)||(Q[a.name]=new RegExp("^"+a.name+"(?:[\\s\\/]|$)","i"));for(var m=Q[a.name],u=a.next,h=a.next+1;s>h&&("</"!==t[h-1]||!m.test(t[h]));h++);s>h&&(h-=1);var p=t.slice(u,h).join("");if(a.eflags&e.eflags.CDATA)n.cdata&&n.cdata(p,r,o,c(n,t,h,l,r));else{if(!(a.eflags&e.eflags.RCDATA))throw new Error("bug");n.rcdata&&n.rcdata(i(p),r,o,c(n,t,h,l,r))}return h}function f(t,a){var n=/^([-\w:]+)/.exec(t[a]),r={};r.name=n[1].toLowerCase(),r.eflags=e.ELEMENTS[r.name];for(var o=t[a].substr(n[0].length),i=a+1,l=t.length;l>i&&">"!==t[i];i++)o+=t[i];if(i>=l)return void 0;for(var s=[];""!==o;)if(n=G.exec(o)){if(n[4]&&!n[5]||n[6]&&!n[7]){for(var c=n[4]||n[6],m=!1,u=[o,t[i++]];l>i;i++){if(m){if(">"===t[i])break}else 0<=t[i].indexOf(c)&&(m=!0);u.push(t[i])}if(i>=l)break;o=u.join("");continue}var h=n[1].toLowerCase(),p=n[2]?g(n[3]):"";s.push(h,p),o=o.substr(n[0].length)}else o=o.replace(/^[\s\S][^a-z\s]*/,"");return r.attrs=s,r.next=i+1,r}function g(e){var t=e.charCodeAt(0);return(34===t||39===t)&&(e=e.substr(1,e.length-2)),r(n(e))}function E(t){var a,n,r=function(e,t){n||t.push(e)};return l({startDoc:function(e){a=[],n=!1},startTag:function(r,i,l){if(!n&&e.ELEMENTS.hasOwnProperty(r)){var s=e.ELEMENTS[r];if(!(s&e.eflags.FOLDABLE)){var c=t(r,i);if(!c)return void(n=!(s&e.eflags.EMPTY));if("object"!=typeof c)throw new Error("tagPolicy did not return object (old API?)");if(!("attribs"in c))throw new Error("tagPolicy gave no attribs");i=c.attribs;var m,u;if("tagName"in c?(u=c.tagName,m=e.ELEMENTS[u]):(u=r,m=s),s&e.eflags.OPTIONAL_ENDTAG){var h=a[a.length-1];!h||h.orig!==r||h.rep===u&&r===u||l.push("</",h.rep,">")}s&e.eflags.EMPTY||a.push({orig:r,rep:u}),l.push("<",u);for(var p=0,d=i.length;d>p;p+=2){var f=i[p],g=i[p+1];null!==g&&void 0!==g&&l.push(" ",f,'="',o(g),'"')}l.push(">"),s&e.eflags.EMPTY&&!(m&e.eflags.EMPTY)&&l.push("</",u,">")}}},endTag:function(t,r){if(n)return void(n=!1);if(e.ELEMENTS.hasOwnProperty(t)){var o=e.ELEMENTS[t];if(!(o&(e.eflags.EMPTY|e.eflags.FOLDABLE))){var i;if(o&e.eflags.OPTIONAL_ENDTAG)for(i=a.length;--i>=0;){var l=a[i].orig;if(l===t)break;if(!(e.ELEMENTS[l]&e.eflags.OPTIONAL_ENDTAG))return}else for(i=a.length;--i>=0&&a[i].orig!==t;);if(0>i)return;for(var s=a.length;--s>i;){var c=a[s].rep;e.ELEMENTS[c]&e.eflags.OPTIONAL_ENDTAG||r.push("</",c,">")}i<a.length&&(t=a[i].rep),a.length=i,r.push("</",t,">")}}},pcdata:r,rcdata:r,cdata:r,endDoc:function(e){for(;a.length;a.length--)e.push("</",a[a.length-1].rep,">")}})}function T(e,t,a,n,r){if(!r)return null;try{var o=URI.parse(""+e);if(o&&(!o.hasScheme()||V.test(o.getScheme()))){var i=r(o,t,a,n);return i?i.toString():null}}catch(l){return null}return null}function L(e,t,a,n,r){if(a||e(t+" removed",{change:"removed",tagName:t}),n!==r){var o="changed";n&&!r?o="removed":!n&&r&&(o="added"),e(t+"."+a+" "+o,{change:o,tagName:t,attribName:a,oldValue:n,newValue:r})}}function M(e,t,a){var n;return n=t+"::"+a,e.hasOwnProperty(n)?e[n]:(n="*::"+a,e.hasOwnProperty(n)?e[n]:void 0)}function b(t,a){return M(e.LOADERTYPES,t,a)}function y(t,a){return M(e.URIEFFECTS,t,a)}function v(t,a,n,r,o){for(var i=0;i<a.length;i+=2){var l,s=a[i],c=a[i+1],m=c,u=null;if(l=t+"::"+s,(e.ATTRIBS.hasOwnProperty(l)||(l="*::"+s,e.ATTRIBS.hasOwnProperty(l)))&&(u=e.ATTRIBS[l]),null!==u)switch(u){case e.atype.NONE:break;case e.atype.SCRIPT:c=null,o&&L(o,t,s,m,c);break;case e.atype.STYLE:if("undefined"==typeof A){c=null,o&&L(o,t,s,m,c);break}var h=[];A(c,{declaration:function(t,a){var r=t.toLowerCase(),o=C[r];o&&(R(r,o,a,n?function(t){return T(t,e.ueffects.SAME_DOCUMENT,e.ltypes.SANDBOXED,{TYPE:"CSS",CSS_PROP:r},n)}:null),h.push(t+": "+a.join(" ")))}}),c=h.length>0?h.join(" ; "):null,o&&L(o,t,s,m,c);break;case e.atype.ID:case e.atype.IDREF:case e.atype.IDREFS:case e.atype.GLOBAL_NAME:case e.atype.LOCAL_NAME:case e.atype.CLASSES:c=r?r(c):c,o&&L(o,t,s,m,c);break;case e.atype.URI:c=T(c,y(t,s),b(t,s),{TYPE:"MARKUP",XML_ATTR:s,XML_TAG:t},n),o&&L(o,t,s,m,c);break;case e.atype.URI_FRAGMENT:c&&"#"===c.charAt(0)?(c=c.substring(1),c=r?r(c):c,null!==c&&void 0!==c&&(c="#"+c)):c=null,o&&L(o,t,s,m,c);break;default:c=null,o&&L(o,t,s,m,c)}else c=null,o&&L(o,t,s,m,c);a[i+1]=c}return a}function H(t,a,n){return function(r,o){return e.ELEMENTS[r]&e.eflags.UNSAFE?void(n&&L(n,r,void 0,void 0,void 0)):{attribs:v(r,o,t,a,n)}}}function _(e,t){var a=[];return E(t)(e,a),a.join("")}function w(e,t,a,n){var r=H(t,a,n);return _(e,r)}var A,R,C;"undefined"!=typeof window&&(A=window.parseCssDeclarations,R=window.sanitizeCssProperty,C=window.cssSchema);var S={lt:"<",LT:"<",gt:">",GT:">",amp:"&",AMP:"&",quot:'"',apos:"'",nbsp:" "},P=/^#(\d+)$/,D=/^#x([0-9A-Fa-f]+)$/,k=/^[A-Za-z][A-za-z0-9]+$/,I="undefined"!=typeof window&&window.document?window.document.createElement("textarea"):null,x=/\0/g,N=/&(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/g,O=/^(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/,F=/&/g,U=/&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi,B=/[<]/g,q=/>/g,z=/\"/g,G=new RegExp("^\\s*([-.:\\w]+)(?:\\s*(=)\\s*((\")[^\"]*(\"|$)|(')[^']*('|$)|(?=[a-z][-\\w]*\\s*=)|[^\"'\\s]*))?","i"),$=3==="a,b".split(/(,)/).length,j=e.eflags.CDATA|e.eflags.RCDATA,Y={},Q={},V=/^(?:https?|mailto|data)$/i,X={};return X.escapeAttrib=X.escapeAttrib=o,X.makeHtmlSanitizer=X.makeHtmlSanitizer=E,X.makeSaxParser=X.makeSaxParser=l,X.makeTagPolicy=X.makeTagPolicy=H,X.normalizeRCData=X.normalizeRCData=i,X.sanitize=X.sanitize=w,X.sanitizeAttribs=X.sanitizeAttribs=v,X.sanitizeWithPolicy=X.sanitizeWithPolicy=_,X.unescapeEntities=X.unescapeEntities=r,X}(html4),html_sanitize=html.sanitize;html4.ATTRIBS["*::style"]=0,html4.ELEMENTS.style=0,html4.ATTRIBS["a::target"]=0,html4.ELEMENTS.video=0,html4.ATTRIBS["video::src"]=0,html4.ATTRIBS["video::poster"]=0,html4.ATTRIBS["video::controls"]=0,html4.ELEMENTS.audio=0,html4.ATTRIBS["audio::src"]=0,html4.ATTRIBS["video::autoplay"]=0,html4.ATTRIBS["video::controls"]=0,"undefined"!=typeof module&&(module.exports=html_sanitize);
},{}],7:[function(require,module,exports){
module.exports={"author":"Mapbox","name":"mapbox.js","description":"mapbox javascript api","version":"2.4.0","homepage":"http://mapbox.com/","repository":{"type":"git","url":"git://github.com/mapbox/mapbox.js.git"},"main":"src/index.js","dependencies":{"corslite":"0.0.6","isarray":"0.0.1","leaflet":"0.7.7","mustache":"2.2.1","sanitize-caja":"0.1.3"},"scripts":{"test":"eslint --no-eslintrc -c .eslintrc src && mocha-phantomjs test/index.html"},"license":"BSD-3-Clause","devDependencies":{"browserify":"^13.0.0","clean-css":"~2.0.7","eslint":"^0.23.0","expect.js":"0.3.1","happen":"0.1.3","leaflet-fullscreen":"0.0.4","leaflet-hash":"0.2.1","marked":"~0.3.0","minifyify":"^6.1.0","minimist":"0.0.5","mocha":"2.4.5","mocha-phantomjs":"4.0.2","sinon":"1.10.2"},"optionalDependencies":{},"engines":{"node":"*"}}
},{}],8:[function(require,module,exports){
"use strict";module.exports={HTTP_URL:"http://a.tiles.mapbox.com/v4",HTTPS_URL:"https://a.tiles.mapbox.com/v4",FORCE_HTTPS:!1,REQUIRE_ACCESS_TOKEN:!0};
},{}],9:[function(require,module,exports){
"use strict";var util=require("./util"),format_url=require("./format_url"),request=require("./request"),marker=require("./marker"),simplestyle=require("./simplestyle"),FeatureLayer=L.FeatureGroup.extend({options:{filter:function(){return!0},sanitizer:require("sanitize-caja"),style:simplestyle.style,popupOptions:{closeButton:!1}},initialize:function(e,t){L.setOptions(this,t),this._layers={},"string"==typeof e?util.idUrl(e,this):e&&"object"==typeof e&&this.setGeoJSON(e)},setGeoJSON:function(e){return this._geojson=e,this.clearLayers(),this._initialize(e),this},getGeoJSON:function(){return this._geojson},loadURL:function(e){return this._request&&"abort"in this._request&&this._request.abort(),this._request=request(e,L.bind(function(t,i){this._request=null,t&&"abort"!==t.type?(util.log("could not load features at "+e),this.fire("error",{error:t})):i&&(this.setGeoJSON(i),this.fire("ready"))},this)),this},loadID:function(e){return this.loadURL(format_url("/v4/"+e+"/features.json",this.options.accessToken))},setFilter:function(e){return this.options.filter=e,this._geojson&&(this.clearLayers(),this._initialize(this._geojson)),this},getFilter:function(){return this.options.filter},_initialize:function(e){var t,i,r=L.Util.isArray(e)?e:e.features;if(r)for(t=0,i=r.length;i>t;t++)(r[t].geometries||r[t].geometry||r[t].features)&&this._initialize(r[t]);else if(this.options.filter(e)){var s={accessToken:this.options.accessToken},o=this.options.pointToLayer||function(e,t){return marker.style(e,t,s)},n=L.GeoJSON.geometryToLayer(e,o),u=marker.createPopup(e,this.options.sanitizer),a=this.options.style,l=a===simplestyle.style;!(a&&"setStyle"in n)||l&&(n instanceof L.Circle||n instanceof L.CircleMarker)||("function"==typeof a&&(a=a(e)),n.setStyle(a)),n.feature=e,u&&n.bindPopup(u,this.options.popupOptions),this.addLayer(n)}}});module.exports.FeatureLayer=FeatureLayer,module.exports.featureLayer=function(e,t){return new FeatureLayer(e,t)};
},{"./format_url":11,"./marker":25,"./request":26,"./simplestyle":28,"./util":31,"sanitize-caja":5}],10:[function(require,module,exports){
"use strict";var Feedback=L.Class.extend({includes:L.Mixin.Events,data:{},record:function(e){L.extend(this.data,e),this.fire("change")}});module.exports=new Feedback;
},{}],11:[function(require,module,exports){
"use strict";var config=require("./config"),version=require("../package.json").version;module.exports=function(e,o){if(o=o||L.mapbox.accessToken,!o&&config.REQUIRE_ACCESS_TOKEN)throw new Error("An API access token is required to use Mapbox.js. See https://www.mapbox.com/mapbox.js/api/v"+version+"/api-access-tokens/");var t="https:"===document.location.protocol||config.FORCE_HTTPS?config.HTTPS_URL:config.HTTP_URL;if(t=t.replace(/\/v4$/,""),t+=e,config.REQUIRE_ACCESS_TOKEN){if("s"===o[0])throw new Error("Use a public access token (pk.*) with Mapbox.js, not a secret access token (sk.*). See https://www.mapbox.com/mapbox.js/api/v"+version+"/api-access-tokens/");t+=-1!==t.indexOf("?")?"&access_token=":"?access_token=",t+=o}return t},module.exports.tileJSON=function(e,o){if(0===e.indexOf("mapbox://styles"))throw new Error("Styles created with Mapbox Studio need to be used with L.mapbox.styleLayer, not L.mapbox.tileLayer");if(-1!==e.indexOf("/"))return e;var t=module.exports("/v4/"+e+".json",o);return 0===t.indexOf("https")&&(t+="&secure"),t},module.exports.style=function(e,o){if(-1===e.indexOf("mapbox://styles/"))throw new Error("Incorrectly formatted Mapbox style at "+e);var t=e.split("mapbox://styles/")[1],s=module.exports("/styles/v1/"+t,o).replace("http://","https://");return s};
},{"../package.json":7,"./config":8}],12:[function(require,module,exports){
"use strict";var isArray=require("isarray"),util=require("./util"),format_url=require("./format_url"),feedback=require("./feedback"),request=require("./request");module.exports=function(e,t){function r(e,t){var r=Math.pow(10,t);return e.lat=Math.round(e.lat*r)/r,e.lng=Math.round(e.lng*r)/r,e}t||(t={});var n={};return util.strict(e,"string"),-1===e.indexOf("/")&&(e=format_url("/geocoding/v5/"+e+"/{query}.json",t.accessToken,5)),n.getURL=function(){return e},n.queryURL=function(e){var t=!(isArray(e)||"string"==typeof e),u=t?e.query:e;if(isArray(u)){for(var o=[],i=0;i<u.length;i++)o[i]=encodeURIComponent(u[i]);u=o.join(";")}else u=encodeURIComponent(u);feedback.record({geocoding:u});var a=L.Util.template(n.getURL(),{query:u});if(t){if(e.types&&(a+=isArray(e.types)?"&types="+e.types.join():"&types="+e.types),e.country&&(a+=isArray(e.country)?"&country="+e.country.join():"&country="+e.country),e.proximity){var l=r(L.latLng(e.proximity),3);a+="&proximity="+l.lng+","+l.lat}"boolean"==typeof e.autocomplete&&(a+="&autocomplete="+e.autocomplete)}return a},n.query=function(e,t){return util.strict(t,"function"),request(n.queryURL(e),function(e,r){if(r&&(r.length||r.features)){var n={results:r};r.features&&r.features.length&&(n.latlng=[r.features[0].center[1],r.features[0].center[0]],r.features[0].bbox&&(n.bounds=r.features[0].bbox,n.lbounds=util.lbounds(n.bounds))),t(null,n)}else t(e||!0)}),n},n.reverseQuery=function(e,t){function u(e){var t;return t=void 0!==e.lat&&void 0!==e.lng?L.latLng(e.lat,e.lng):void 0!==e.lat&&void 0!==e.lon?L.latLng(e.lat,e.lon):L.latLng(e[1],e[0]),t=r(t,5),t.lng+","+t.lat}var o="";if(e.length&&e[0].length){for(var i=0,a=[];i<e.length;i++)a.push(u(e[i]));o=a.join(";")}else o=u(e);return request(n.queryURL(o),function(e,r){t(e,r)}),n},n};
},{"./feedback":10,"./format_url":11,"./request":26,"./util":31,"isarray":2}],13:[function(require,module,exports){
"use strict";var geocoder=require("./geocoder"),util=require("./util"),GeocoderControl=L.Control.extend({includes:L.Mixin.Events,options:{proximity:!0,position:"topleft",pointZoom:16,keepOpen:!1,autocomplete:!1,queryOptions:{}},initialize:function(t,e){L.Util.setOptions(this,e),this.setURL(t),this._updateSubmit=L.bind(this._updateSubmit,this),this._updateAutocomplete=L.bind(this._updateAutocomplete,this),this._chooseResult=L.bind(this._chooseResult,this)},setURL:function(t){return this.geocoder=geocoder(t,{accessToken:this.options.accessToken}),this},getURL:function(){return this.geocoder.getURL()},setID:function(t){return this.setURL(t)},setTileJSON:function(t){return this.setURL(t.geocoder)},_toggle:function(t){t&&L.DomEvent.stop(t),L.DomUtil.hasClass(this._container,"active")?(L.DomUtil.removeClass(this._container,"active"),this._results.innerHTML="",this._input.blur()):(L.DomUtil.addClass(this._container,"active"),this._input.focus(),this._input.select())},_closeIfOpen:function(){L.DomUtil.hasClass(this._container,"active")&&!this.options.keepOpen&&(L.DomUtil.removeClass(this._container,"active"),this._results.innerHTML="",this._input.blur())},onAdd:function(t){var e=L.DomUtil.create("div","leaflet-control-mapbox-geocoder leaflet-bar leaflet-control"),i=L.DomUtil.create("a","leaflet-control-mapbox-geocoder-toggle mapbox-icon mapbox-icon-geocoder",e),o=L.DomUtil.create("div","leaflet-control-mapbox-geocoder-results",e),s=L.DomUtil.create("div","leaflet-control-mapbox-geocoder-wrap",e),n=L.DomUtil.create("form","leaflet-control-mapbox-geocoder-form",s),r=L.DomUtil.create("input","",n);return i.href="#",i.innerHTML="&nbsp;",r.type="text",r.setAttribute("placeholder","Search"),L.DomEvent.addListener(n,"submit",this._geocode,this),L.DomEvent.addListener(r,"keyup",this._autocomplete,this),L.DomEvent.disableClickPropagation(e),this._map=t,this._results=o,this._input=r,this._form=n,this.options.keepOpen?L.DomUtil.addClass(e,"active"):(this._map.on("click",this._closeIfOpen,this),L.DomEvent.addListener(i,"click",this._toggle,this)),e},_updateSubmit:function(t,e){if(L.DomUtil.removeClass(this._container,"searching"),this._results.innerHTML="",t||!e)this.fire("error",{error:t});else{var i=[];e.results&&e.results.features&&(i=e.results.features),1===i.length?(this.fire("autoselect",{feature:i[0]}),this.fire("found",{results:e.results}),this._chooseResult(i[0]),this._closeIfOpen()):i.length>1?(this.fire("found",{results:e.results}),this._displayResults(i)):(this.fire("notfound"),this._displayResults(i))}},_updateAutocomplete:function(t,e){if(this._results.innerHTML="",t||!e)this.fire("error",{error:t});else{var i=[];e.results&&e.results.features&&(i=e.results.features),i.length?this.fire("found",{results:e.results}):this.fire("notfound"),this._displayResults(i)}},_displayResults:function(t){for(var e=0,i=Math.min(t.length,5);i>e;e++){var o=t[e],s=o.place_name;if(s.length){var n=L.DomUtil.create("a","",this._results),r="innerText"in n?"innerText":"textContent";n[r]=s,n.setAttribute("title",s),n.href="#",L.bind(function(t){L.DomEvent.addListener(n,"click",function(e){this._chooseResult(t),L.DomEvent.stop(e),this.fire("select",{feature:t})},this)},this)(o)}}if(t.length>5){var l=L.DomUtil.create("span","",this._results);l.innerHTML="Top 5 of "+t.length+"  results"}},_chooseResult:function(t){t.bbox?this._map.fitBounds(util.lbounds(t.bbox)):t.center&&this._map.setView([t.center[1],t.center[0]],void 0===this._map.getZoom()?this.options.pointZoom:Math.max(this._map.getZoom(),this.options.pointZoom))},_geocode:function(t){return L.DomEvent.preventDefault(t),""===this._input.value?this._updateSubmit():(L.DomUtil.addClass(this._container,"searching"),void this.geocoder.query(L.Util.extend({query:this._input.value,proximity:this.options.proximity?this._map.getCenter():!1},this.options.queryOptions),this._updateSubmit))},_autocomplete:function(){return this.options.autocomplete?""===this._input.value?this._updateAutocomplete():void this.geocoder.query(L.Util.extend({query:this._input.value,proximity:this.options.proximity?this._map.getCenter():!1},this.options.queryOptions),this._updateAutocomplete):void 0}});module.exports.GeocoderControl=GeocoderControl,module.exports.geocoderControl=function(t,e){return new GeocoderControl(t,e)};
},{"./geocoder":12,"./util":31}],14:[function(require,module,exports){
"use strict";function utfDecode(t){return t>=93&&t--,t>=35&&t--,t-32}module.exports=function(t){return function(e,r){if(t){var u=utfDecode(t.grid[r].charCodeAt(e)),n=t.keys[u];return t.data[n]}}};
},{}],15:[function(require,module,exports){
"use strict";var util=require("./util"),Mustache=require("mustache"),GridControl=L.Control.extend({options:{pinnable:!0,follow:!1,sanitizer:require("sanitize-caja"),touchTeaser:!0,location:!0},_currentContent:"",_pinned:!1,initialize:function(t,o){L.Util.setOptions(this,o),util.strict_instance(t,L.Class,"L.mapbox.gridLayer"),this._layer=t},setTemplate:function(t){return util.strict(t,"string"),this.options.template=t,this},_template:function(t,o){if(o){var i=this.options.template||this._layer.getTileJSON().template;if(i){var e={};return e["__"+t+"__"]=!0,this.options.sanitizer(Mustache.to_html(i,L.extend(e,o)))}}},_show:function(t,o){t!==this._currentContent&&(this._currentContent=t,this.options.follow?(this._popup.setContent(t).setLatLng(o.latLng),this._map._popup!==this._popup&&this._popup.openOn(this._map)):(this._container.style.display="block",this._contentWrapper.innerHTML=t))},hide:function(){return this._pinned=!1,this._currentContent="",this._map.closePopup(),this._container.style.display="none",this._contentWrapper.innerHTML="",L.DomUtil.removeClass(this._container,"closable"),this},_mouseover:function(t){if(t.data?L.DomUtil.addClass(this._map._container,"map-clickable"):L.DomUtil.removeClass(this._map._container,"map-clickable"),!this._pinned){var o=this._template("teaser",t.data);o?this._show(o,t):this.hide()}},_mousemove:function(t){this._pinned||this.options.follow&&this._popup.setLatLng(t.latLng)},_navigateTo:function(t){window.top.location.href=t},_click:function(t){var o=this._template("location",t.data);if(this.options.location&&o&&0===o.search(/^https?:/))return this._navigateTo(this._template("location",t.data));if(this.options.pinnable){var i=this._template("full",t.data);!i&&this.options.touchTeaser&&L.Browser.touch&&(i=this._template("teaser",t.data)),i?(L.DomUtil.addClass(this._container,"closable"),this._pinned=!0,this._show(i,t)):this._pinned&&(L.DomUtil.removeClass(this._container,"closable"),this._pinned=!1,this.hide())}},_onPopupClose:function(){this._currentContent=null,this._pinned=!1},_createClosebutton:function(t,o){var i=L.DomUtil.create("a","close",t);return i.innerHTML="close",i.href="#",i.title="close",L.DomEvent.on(i,"click",L.DomEvent.stopPropagation).on(i,"mousedown",L.DomEvent.stopPropagation).on(i,"dblclick",L.DomEvent.stopPropagation).on(i,"click",L.DomEvent.preventDefault).on(i,"click",o,this),i},onAdd:function(t){this._map=t;var o="leaflet-control-grid map-tooltip",i=L.DomUtil.create("div",o),e=L.DomUtil.create("div","map-tooltip-content");return i.style.display="none",this._createClosebutton(i,this.hide),i.appendChild(e),this._contentWrapper=e,this._popup=new L.Popup({autoPan:!1,closeOnClick:!1}),t.on("popupclose",this._onPopupClose,this),L.DomEvent.disableClickPropagation(i).addListener(i,"mousewheel",L.DomEvent.stopPropagation),this._layer.on("mouseover",this._mouseover,this).on("mousemove",this._mousemove,this).on("click",this._click,this),i},onRemove:function(t){t.off("popupclose",this._onPopupClose,this),this._layer.off("mouseover",this._mouseover,this).off("mousemove",this._mousemove,this).off("click",this._click,this)}});module.exports.GridControl=GridControl,module.exports.gridControl=function(t,o){return new GridControl(t,o)};
},{"./util":31,"mustache":4,"sanitize-caja":5}],16:[function(require,module,exports){
"use strict";var util=require("./util"),request=require("./request"),grid=require("./grid"),GridLayer=L.Class.extend({includes:[L.Mixin.Events,require("./load_tilejson")],options:{template:function(){return""}},_mouseOn:null,_tilejson:{},_cache:{},initialize:function(t,i){L.Util.setOptions(this,i),this._loadTileJSON(t)},_setTileJSON:function(t){return util.strict(t,"object"),L.extend(this.options,{grids:t.grids,minZoom:t.minzoom,maxZoom:t.maxzoom,bounds:t.bounds&&util.lbounds(t.bounds)}),this._tilejson=t,this._cache={},this._update(),this},getTileJSON:function(){return this._tilejson},active:function(){return!!(this._map&&this.options.grids&&this.options.grids.length)},addTo:function(t){return t.addLayer(this),this},onAdd:function(t){this._map=t,this._update(),this._map.on("click",this._click,this).on("mousemove",this._move,this).on("moveend",this._update,this)},onRemove:function(){this._map.off("click",this._click,this).off("mousemove",this._move,this).off("moveend",this._update,this)},getData:function(t,i){if(this.active()){var e=this._map,o=e.project(t.wrap()),s=256,n=4,a=Math.floor(o.x/s),h=Math.floor(o.y/s),r=e.options.crs.scale(e.getZoom())/s;return a=(a+r)%r,h=(h+r)%r,this._getTile(e.getZoom(),a,h,function(t){var e=Math.floor((o.x-a*s)/n),r=Math.floor((o.y-h*s)/n);i(t(e,r))}),this}},_click:function(t){this.getData(t.latlng,L.bind(function(i){this.fire("click",{latLng:t.latlng,data:i})},this))},_move:function(t){this.getData(t.latlng,L.bind(function(i){i!==this._mouseOn?(this._mouseOn&&this.fire("mouseout",{latLng:t.latlng,data:this._mouseOn}),this.fire("mouseover",{latLng:t.latlng,data:i}),this._mouseOn=i):this.fire("mousemove",{latLng:t.latlng,data:i})},this))},_getTileURL:function(t){var i=this.options.grids,e=(t.x+t.y)%i.length,o=i[e];return L.Util.template(o,t)},_update:function(){if(this.active()){var t=this._map.getPixelBounds(),i=this._map.getZoom(),e=256;if(!(i>this.options.maxZoom||i<this.options.minZoom))for(var o=L.bounds(t.min.divideBy(e)._floor(),t.max.divideBy(e)._floor()),s=this._map.options.crs.scale(i)/e,n=o.min.x;n<=o.max.x;n++)for(var a=o.min.y;a<=o.max.y;a++)this._getTile(i,(n%s+s)%s,(a%s+s)%s)}},_getTile:function(t,i,e,o){var s=t+"_"+i+"_"+e,n=L.point(i,e);if(n.z=t,this._tileShouldBeLoaded(n)){if(s in this._cache){if(!o)return;return void("function"==typeof this._cache[s]?o(this._cache[s]):this._cache[s].push(o))}this._cache[s]=[],o&&this._cache[s].push(o),request(this._getTileURL(n),L.bind(function(t,i){var e=this._cache[s];this._cache[s]=grid(i);for(var o=0;o<e.length;++o)e[o](this._cache[s])},this))}},_tileShouldBeLoaded:function(t){if(t.z>this.options.maxZoom||t.z<this.options.minZoom)return!1;if(this.options.bounds){var i=256,e=t.multiplyBy(i),o=e.add(new L.Point(i,i)),s=this._map.unproject(e),n=this._map.unproject(o),a=new L.LatLngBounds([s,n]);if(!this.options.bounds.intersects(a))return!1}return!0}});module.exports.GridLayer=GridLayer,module.exports.gridLayer=function(t,i){return new GridLayer(t,i)};
},{"./grid":14,"./load_tilejson":21,"./request":26,"./util":31}],17:[function(require,module,exports){
"use strict";var leaflet=require("./leaflet");require("./mapbox"),module.exports=leaflet;
},{"./leaflet":19,"./mapbox":23}],18:[function(require,module,exports){
"use strict";var InfoControl=L.Control.extend({options:{position:"bottomright",sanitizer:require("sanitize-caja")},initialize:function(t){L.setOptions(this,t),this._info={},console.warn("infoControl has been deprecated and will be removed in mapbox.js v3.0.0. Use the default attribution control instead, which is now responsive.")},onAdd:function(t){this._container=L.DomUtil.create("div","mapbox-control-info mapbox-small"),this._content=L.DomUtil.create("div","map-info-container",this._container);var i=L.DomUtil.create("a","mapbox-info-toggle mapbox-icon mapbox-icon-info",this._container);i.href="#",L.DomEvent.addListener(i,"click",this._showInfo,this),L.DomEvent.disableClickPropagation(this._container);for(var n in t._layers)t._layers[n].getAttribution&&this.addInfo(t._layers[n].getAttribution());return t.on("layeradd",this._onLayerAdd,this).on("layerremove",this._onLayerRemove,this),this._update(),this._container},onRemove:function(t){t.off("layeradd",this._onLayerAdd,this).off("layerremove",this._onLayerRemove,this)},addInfo:function(t){return t?(this._info[t]||(this._info[t]=0),this._info[t]=!0,this._update()):this},removeInfo:function(t){return t?(this._info[t]&&(this._info[t]=!1),this._update()):this},_showInfo:function(t){return L.DomEvent.preventDefault(t),this._active===!0?this._hidecontent():(L.DomUtil.addClass(this._container,"active"),this._active=!0,void this._update())},_hidecontent:function(){this._content.innerHTML="",this._active=!1,L.DomUtil.removeClass(this._container,"active")},_update:function(){if(!this._map)return this;this._content.innerHTML="";var t="none",i=[];for(var n in this._info)this._info.hasOwnProperty(n)&&this._info[n]&&(i.push(this.options.sanitizer(n)),t="block");return this._content.innerHTML+=i.join(" | "),this._container.style.display=t,this},_onLayerAdd:function(t){t.layer.getAttribution&&t.layer.getAttribution()?this.addInfo(t.layer.getAttribution()):"on"in t.layer&&t.layer.getAttribution&&t.layer.on("ready",L.bind(function(){this.addInfo(t.layer.getAttribution())},this))},_onLayerRemove:function(t){t.layer.getAttribution&&this.removeInfo(t.layer.getAttribution())}});module.exports.InfoControl=InfoControl,module.exports.infoControl=function(t){return new InfoControl(t)};
},{"sanitize-caja":5}],19:[function(require,module,exports){
module.exports=window.L=require("leaflet/dist/leaflet-src");
},{"leaflet/dist/leaflet-src":3}],20:[function(require,module,exports){
"use strict";var LegendControl=L.Control.extend({options:{position:"bottomright",sanitizer:require("sanitize-caja")},initialize:function(e){L.setOptions(this,e),this._legends={}},onAdd:function(){return this._container=L.DomUtil.create("div","map-legends wax-legends"),L.DomEvent.disableClickPropagation(this._container),this._update(),this._container},addLegend:function(e){return e?(this._legends[e]||(this._legends[e]=0),this._legends[e]++,this._update()):this},removeLegend:function(e){return e?(this._legends[e]&&this._legends[e]--,this._update()):this},_update:function(){if(!this._map)return this;this._container.innerHTML="";var e="none";for(var t in this._legends)if(this._legends.hasOwnProperty(t)&&this._legends[t]){var n=L.DomUtil.create("div","map-legend wax-legend",this._container);n.innerHTML=this.options.sanitizer(t),e="block"}return this._container.style.display=e,this}});module.exports.LegendControl=LegendControl,module.exports.legendControl=function(e){return new LegendControl(e)};
},{"sanitize-caja":5}],21:[function(require,module,exports){
"use strict";var request=require("./request"),format_url=require("./format_url"),util=require("./util");module.exports={_loadTileJSON:function(e){"string"==typeof e?(e=format_url.tileJSON(e,this.options&&this.options.accessToken),request(e,L.bind(function(t,r){t?(util.log("could not load TileJSON at "+e),this.fire("error",{error:t})):r&&(this._setTileJSON(r),this.fire("ready"))},this))):e&&"object"==typeof e&&this._setTileJSON(e)}};
},{"./format_url":11,"./request":26,"./util":31}],22:[function(require,module,exports){
"use strict";function withAccessToken(t,o){return!o||t.accessToken?t:L.extend({accessToken:o},t)}var tileLayer=require("./tile_layer").tileLayer,featureLayer=require("./feature_layer").featureLayer,gridLayer=require("./grid_layer").gridLayer,gridControl=require("./grid_control").gridControl,infoControl=require("./info_control").infoControl,shareControl=require("./share_control").shareControl,legendControl=require("./legend_control").legendControl,mapboxLogoControl=require("./mapbox_logo").mapboxLogoControl,feedback=require("./feedback"),LMap=L.Map.extend({includes:[require("./load_tilejson")],options:{tileLayer:{},featureLayer:{},gridLayer:{},legendControl:{},gridControl:{},infoControl:!1,shareControl:!1,sanitizer:require("sanitize-caja")},_tilejson:{},initialize:function(t,o,e){if(L.Map.prototype.initialize.call(this,t,L.extend({},L.Map.prototype.options,e)),this.attributionControl){this.attributionControl.setPrefix("");var i=this.options.attributionControl.compact;(i||i!==!1&&this._container.offsetWidth<=640)&&L.DomUtil.addClass(this.attributionControl._container,"leaflet-compact-attribution"),void 0===i&&this.on("resize",function(){this._container.offsetWidth>640?L.DomUtil.removeClass(this.attributionControl._container,"leaflet-compact-attribution"):L.DomUtil.addClass(this.attributionControl._container,"leaflet-compact-attribution")})}this.options.tileLayer&&(this.tileLayer=tileLayer(void 0,withAccessToken(this.options.tileLayer,this.options.accessToken)),this.addLayer(this.tileLayer)),this.options.featureLayer&&(this.featureLayer=featureLayer(void 0,withAccessToken(this.options.featureLayer,this.options.accessToken)),this.addLayer(this.featureLayer)),this.options.gridLayer&&(this.gridLayer=gridLayer(void 0,withAccessToken(this.options.gridLayer,this.options.accessToken)),this.addLayer(this.gridLayer)),this.options.gridLayer&&this.options.gridControl&&(this.gridControl=gridControl(this.gridLayer,this.options.gridControl),this.addControl(this.gridControl)),this.options.infoControl&&(this.infoControl=infoControl(this.options.infoControl),this.addControl(this.infoControl)),this.options.legendControl&&(this.legendControl=legendControl(this.options.legendControl),this.addControl(this.legendControl)),this.options.shareControl&&(this.shareControl=shareControl(void 0,withAccessToken(this.options.shareControl,this.options.accessToken)),this.addControl(this.shareControl)),this._mapboxLogoControl=mapboxLogoControl(this.options.mapboxLogoControl),this.addControl(this._mapboxLogoControl),this._loadTileJSON(o),this.on("layeradd",this._onLayerAdd,this).on("layerremove",this._onLayerRemove,this).on("moveend",this._updateMapFeedbackLink,this),this.whenReady(function(){feedback.on("change",this._updateMapFeedbackLink,this)}),this.on("unload",function(){feedback.off("change",this._updateMapFeedbackLink,this)})},_setTileJSON:function(t){return this._tilejson=t,this._initialize(t),this},getTileJSON:function(){return this._tilejson},_initialize:function(t){if(this.tileLayer&&(this.tileLayer._setTileJSON(t),this._updateLayer(this.tileLayer)),this.featureLayer&&!this.featureLayer.getGeoJSON()&&t.data&&t.data[0]&&this.featureLayer.loadURL(t.data[0]),this.gridLayer&&(this.gridLayer._setTileJSON(t),this._updateLayer(this.gridLayer)),this.infoControl&&t.attribution&&(this.infoControl.addInfo(this.options.sanitizer(t.attribution)),this._updateMapFeedbackLink()),this.legendControl&&t.legend&&this.legendControl.addLegend(t.legend),this.shareControl&&this.shareControl._setTileJSON(t),this._mapboxLogoControl._setTileJSON(t),!this._loaded&&t.center){var o=void 0!==this.getZoom()?this.getZoom():t.center[2],e=L.latLng(t.center[1],t.center[0]);this.setView(e,o)}},_updateMapFeedbackLink:function(){if(this._controlContainer.getElementsByClassName){var t=this._controlContainer.getElementsByClassName("mapbox-improve-map");if(t.length&&this._loaded){var o=this.getCenter().wrap(),e=this._tilejson||{},i=e.id||"",n="#"+i+"/"+o.lng.toFixed(3)+"/"+o.lat.toFixed(3)+"/"+this.getZoom();for(var r in feedback.data)n+="/"+r+"="+feedback.data[r];for(var a=0;a<t.length;a++)t[a].hash=n}}},_onLayerAdd:function(t){"on"in t.layer&&t.layer.on("ready",this._onLayerReady,this),window.setTimeout(L.bind(this._updateMapFeedbackLink,this),0)},_onLayerRemove:function(t){"on"in t.layer&&t.layer.off("ready",this._onLayerReady,this),window.setTimeout(L.bind(this._updateMapFeedbackLink,this),0)},_onLayerReady:function(t){this._updateLayer(t.target)},_updateLayer:function(t){t.options&&(this.infoControl&&this._loaded&&this.infoControl.addInfo(t.options.infoControl),this.attributionControl&&this._loaded&&t.getAttribution&&this.attributionControl.addAttribution(t.getAttribution()),L.stamp(t)in this._zoomBoundLayers||!t.options.maxZoom&&!t.options.minZoom||(this._zoomBoundLayers[L.stamp(t)]=t),this._updateMapFeedbackLink(),this._updateZoomLevels())}});module.exports.Map=LMap,module.exports.map=function(t,o,e){return new LMap(t,o,e)};
},{"./feature_layer":9,"./feedback":10,"./grid_control":15,"./grid_layer":16,"./info_control":18,"./legend_control":20,"./load_tilejson":21,"./mapbox_logo":24,"./share_control":27,"./tile_layer":30,"sanitize-caja":5}],23:[function(require,module,exports){
"use strict";var geocoderControl=require("./geocoder_control"),gridControl=require("./grid_control"),featureLayer=require("./feature_layer"),legendControl=require("./legend_control"),shareControl=require("./share_control"),tileLayer=require("./tile_layer"),infoControl=require("./info_control"),map=require("./map"),gridLayer=require("./grid_layer"),styleLayer=require("./style_layer");L.mapbox=module.exports={VERSION:require("../package.json").version,geocoder:require("./geocoder"),marker:require("./marker"),simplestyle:require("./simplestyle"),tileLayer:tileLayer.tileLayer,TileLayer:tileLayer.TileLayer,styleLayer:styleLayer.styleLayer,StyleLayer:styleLayer.StyleLayer,infoControl:infoControl.infoControl,InfoControl:infoControl.InfoControl,shareControl:shareControl.shareControl,ShareControl:shareControl.ShareControl,legendControl:legendControl.legendControl,LegendControl:legendControl.LegendControl,geocoderControl:geocoderControl.geocoderControl,GeocoderControl:geocoderControl.GeocoderControl,gridControl:gridControl.gridControl,GridControl:gridControl.GridControl,gridLayer:gridLayer.gridLayer,GridLayer:gridLayer.GridLayer,featureLayer:featureLayer.featureLayer,FeatureLayer:featureLayer.FeatureLayer,map:map.map,Map:map.Map,config:require("./config"),sanitize:require("sanitize-caja"),template:require("mustache").to_html,feedback:require("./feedback")},window.L.Icon.Default.imagePath=("https:"===document.location.protocol||"http:"===document.location.protocol?"":"https:")+"//api.tiles.mapbox.com/mapbox.js/v"+require("../package.json").version+"/images";
},{"../package.json":7,"./config":8,"./feature_layer":9,"./feedback":10,"./geocoder":12,"./geocoder_control":13,"./grid_control":15,"./grid_layer":16,"./info_control":18,"./legend_control":20,"./map":22,"./marker":25,"./share_control":27,"./simplestyle":28,"./style_layer":29,"./tile_layer":30,"mustache":4,"sanitize-caja":5}],24:[function(require,module,exports){
"use strict";var MapboxLogoControl=L.Control.extend({options:{position:"bottomleft"},initialize:function(o){L.setOptions(this,o)},onAdd:function(){return this._container=L.DomUtil.create("div","mapbox-logo"),this._container},_setTileJSON:function(o){o.mapbox_logo&&L.DomUtil.addClass(this._container,"mapbox-logo-true")}});module.exports.MapboxLogoControl=MapboxLogoControl,module.exports.mapboxLogoControl=function(o){return new MapboxLogoControl(o)};
},{}],25:[function(require,module,exports){
"use strict";function icon(r,e){r=r||{};var i={small:[20,50],medium:[30,70],large:[35,90]},t=r["marker-size"]||"medium",o="marker-symbol"in r&&""!==r["marker-symbol"]?"-"+r["marker-symbol"]:"",s=(r["marker-color"]||"7e7e7e").replace("#","");return L.icon({iconUrl:format_url("/v4/marker/pin-"+t.charAt(0)+o+"+"+s+(L.Browser.retina?"@2x":"")+".png",e&&e.accessToken),iconSize:i[t],iconAnchor:[i[t][0]/2,i[t][1]/2],popupAnchor:[0,-i[t][1]/2]})}function style(r,e,i){return L.marker(e,{icon:icon(r.properties,i),title:util.strip_tags(sanitize(r.properties&&r.properties.title||""))})}function createPopup(r,e){if(!r||!r.properties)return"";var i="";return r.properties.title&&(i+='<div class="marker-title">'+r.properties.title+"</div>"),r.properties.description&&(i+='<div class="marker-description">'+r.properties.description+"</div>"),(e||sanitize)(i)}var format_url=require("./format_url"),util=require("./util"),sanitize=require("sanitize-caja");module.exports={icon:icon,style:style,createPopup:createPopup};
},{"./format_url":11,"./util":31,"sanitize-caja":5}],26:[function(require,module,exports){
"use strict";var corslite=require("corslite"),strict=require("./util").strict,config=require("./config"),protocol=/^(https?:)?(?=\/\/(.|api)\.tiles\.mapbox\.com\/)/;module.exports=function(t,o){function r(t,r){!t&&r&&(r=JSON.parse(r.responseText)),o(t,r)}return strict(t,"string"),strict(o,"function"),t=t.replace(protocol,function(t,o){return"withCredentials"in new window.XMLHttpRequest?"https:"===o||"https:"===document.location.protocol||config.FORCE_HTTPS?"https:":"http:":document.location.protocol}),corslite(t,r)};
},{"./config":8,"./util":31,"corslite":1}],27:[function(require,module,exports){
"use strict";var format_url=require("./format_url"),ShareControl=L.Control.extend({includes:[require("./load_tilejson")],options:{position:"topleft",url:""},initialize:function(t,e){L.setOptions(this,e),this._loadTileJSON(t)},_setTileJSON:function(t){this._tilejson=t},onAdd:function(t){this._map=t;var e=L.DomUtil.create("div","leaflet-control-mapbox-share leaflet-bar"),o=L.DomUtil.create("a","mapbox-share mapbox-icon mapbox-icon-share",e);return o.href="#",this._modal=L.DomUtil.create("div","mapbox-modal",this._map._container),this._mask=L.DomUtil.create("div","mapbox-modal-mask",this._modal),this._content=L.DomUtil.create("div","mapbox-modal-content",this._modal),L.DomEvent.addListener(o,"click",this._shareClick,this),L.DomEvent.disableClickPropagation(e),this._map.on("mousedown",this._clickOut,this),e},_clickOut:function(t){return this._sharing?(L.DomEvent.preventDefault(t),L.DomUtil.removeClass(this._modal,"active"),this._content.innerHTML="",void(this._sharing=null)):void 0},_shareClick:function(t){function e(t,e,o){var i=document.createElement("a");return i.setAttribute("class",t),i.setAttribute("href",e),i.setAttribute("target","_blank"),o=document.createTextNode(o),i.appendChild(o),i}if(L.DomEvent.stop(t),this._sharing)return this._clickOut(t);var o=this._tilejson||this._map._tilejson||{},i=encodeURIComponent(this.options.url||o.webpage||window.location),a=encodeURIComponent(o.name),n=format_url("/v4/"+o.id+"/"+this._map.getCenter().lng+","+this._map.getCenter().lat+","+this._map.getZoom()+"/600x600.png",this.options.accessToken),r=format_url("/v4/"+o.id+".html",this.options.accessToken),s="//twitter.com/intent/tweet?status="+a+" "+i,l="//www.facebook.com/sharer.php?u="+i+"&t="+a,m="//www.pinterest.com/pin/create/button/?url="+i+"&media="+n+"&description="+a,c='<iframe width="100%" height="500px" frameBorder="0" src="'+r+'"></iframe>',h="Copy and paste this <strong>HTML code</strong> into documents to embed this map on web pages.";L.DomUtil.addClass(this._modal,"active"),this._sharing=L.DomUtil.create("div","mapbox-modal-body",this._content);var p=e("mapbox-button mapbox-button-icon mapbox-icon-twitter",s,"Twitter"),d=e("mapbox-button mapbox-button-icon mapbox-icon-facebook",l,"Facebook"),u=e("mapbox-button mapbox-button-icon mapbox-icon-pinterest",m,"Pinterest"),b=document.createElement("h3"),_=document.createTextNode("Share this map");b.appendChild(_);var v=document.createElement("div");v.setAttribute("class","mapbox-share-buttons"),v.appendChild(d),v.appendChild(p),v.appendChild(u),this._sharing.appendChild(b),this._sharing.appendChild(v);var x=L.DomUtil.create("input","mapbox-embed",this._sharing);x.type="text",x.value=c;var f=L.DomUtil.create("label","mapbox-embed-description",this._sharing);f.innerHTML=h;var g=L.DomUtil.create("a","leaflet-popup-close-button",this._sharing);g.href="#",L.DomEvent.disableClickPropagation(this._sharing),L.DomEvent.addListener(g,"click",this._clickOut,this),L.DomEvent.addListener(x,"click",function(t){t.target.focus(),t.target.select()})}});module.exports.ShareControl=ShareControl,module.exports.shareControl=function(t,e){return new ShareControl(t,e)};
},{"./format_url":11,"./load_tilejson":21}],28:[function(require,module,exports){
"use strict";function fallback(t,l){var i={};for(var r in l)void 0===t[r]?i[r]=l[r]:i[r]=t[r];return i}function remap(t){for(var l={},i=0;i<mapping.length;i++)l[mapping[i][1]]=t[mapping[i][0]];return l}function style(t){return remap(fallback(t.properties||{},defaults))}var defaults={stroke:"#555555","stroke-width":2,"stroke-opacity":1,fill:"#555555","fill-opacity":.5},mapping=[["stroke","color"],["stroke-width","weight"],["stroke-opacity","opacity"],["fill","fillColor"],["fill-opacity","fillOpacity"]];module.exports={style:style,defaults:defaults};
},{}],29:[function(require,module,exports){
"use strict";var util=require("./util"),format_url=require("./format_url"),request=require("./request"),StyleLayer=L.TileLayer.extend({options:{sanitizer:require("sanitize-caja")},initialize:function(t,i){L.TileLayer.prototype.initialize.call(this,void 0,i),this.options.tiles=this._formatTileURL(t),this.options.tileSize=512,this.options.zoomOffset=-1,this.options.tms=!1,this._getAttribution(t)},_getAttribution:function(t){var i=format_url.style(t,this.options&&this.options.accessToken);request(i,L.bind(function(e,r){e&&(util.log("could not load Mapbox style at "+i),this.fire("error",{error:e}));var o=[];for(var s in r.sources){var l=r.sources[s].url.split("mapbox://")[1];o.push(l)}request(format_url.tileJSON(o.join(),this.options.accessToken),L.bind(function(i,e){i?(util.log("could not load TileJSON at "+t),this.fire("error",{error:i})):e&&(util.strict(e,"object"),this.options.attribution=this.options.sanitizer(e.attribution),this._tilejson=e,this.fire("ready"))},this))},this))},setUrl:null,_formatTileURL:function(t){var i=L.Browser.retina?"@2x":"";if("string"==typeof t){-1===t.indexOf("mapbox://styles/")&&(util.log("Incorrectly formatted Mapbox style at "+t),this.fire("error"));var e=t.split("mapbox://styles/")[1];return format_url("/styles/v1/"+e+"/tiles/{z}/{x}/{y}"+i,this.options.accessToken)}return"object"==typeof t?format_url("/styles/v1/"+t.owner+"/"+t.id+"/tiles/{z}/{x}/{y}"+i,this.options.accessToken):void 0},getTileUrl:function(t){var i=L.Util.template(this.options.tiles,t);return i}});module.exports.StyleLayer=StyleLayer,module.exports.styleLayer=function(t,i){return new StyleLayer(t,i)};
},{"./format_url":11,"./request":26,"./util":31,"sanitize-caja":5}],30:[function(require,module,exports){
"use strict";var util=require("./util"),formatPattern=/\.((?:png|jpg)\d*)(?=$|\?)/,TileLayer=L.TileLayer.extend({includes:[require("./load_tilejson")],options:{sanitizer:require("sanitize-caja")},formats:["png","jpg","png32","png64","png128","png256","jpg70","jpg80","jpg90"],scalePrefix:"@2x.",initialize:function(t,i){L.TileLayer.prototype.initialize.call(this,void 0,i),this._tilejson={},i&&i.format&&util.strict_oneof(i.format,this.formats),this._loadTileJSON(t)},setFormat:function(t){return util.strict(t,"string"),this.options.format=t,this.redraw(),this},setUrl:null,_setTileJSON:function(t){return util.strict(t,"object"),this.options.format=this.options.format||t.tiles[0].match(formatPattern)[1],L.extend(this.options,{tiles:t.tiles,attribution:this.options.sanitizer(t.attribution),minZoom:t.minzoom||0,maxZoom:t.maxzoom||18,tms:"tms"===t.scheme,bounds:t.bounds&&util.lbounds(t.bounds)}),this._tilejson=t,this.redraw(),this},getTileJSON:function(){return this._tilejson},getTileUrl:function(t){var i=this.options.tiles,e=Math.floor(Math.abs(t.x+t.y)%i.length),o=i[e],r=L.Util.template(o,t);return r?r.replace(formatPattern,(L.Browser.retina?this.scalePrefix:".")+this.options.format):r},_update:function(){this.options.tiles&&L.TileLayer.prototype._update.call(this)}});module.exports.TileLayer=TileLayer,module.exports.tileLayer=function(t,i){return new TileLayer(t,i)};
},{"./load_tilejson":21,"./util":31,"sanitize-caja":5}],31:[function(require,module,exports){
"use strict";function contains(n,t){if(!t||!t.length)return!1;for(var r=0;r<t.length;r++)if(t[r]===n)return!0;return!1}module.exports={idUrl:function(n,t){-1===n.indexOf("/")?t.loadID(n):t.loadURL(n)},log:function(n){"object"==typeof console&&"function"==typeof console.error&&console.error(n)},strict:function(n,t){if(typeof n!==t)throw new Error("Invalid argument: "+t+" expected")},strict_instance:function(n,t,r){if(!(n instanceof t))throw new Error("Invalid argument: "+r+" expected")},strict_oneof:function(n,t){if(!contains(n,t))throw new Error("Invalid argument: "+n+" given, valid values are "+t.join(", "))},strip_tags:function(n){return n.replace(/<[^<]+>/g,"")},lbounds:function(n){return new L.LatLngBounds([[n[1],n[0]],[n[3],n[2]]])}};
},{}]},{},[17])


//# sourceMappingURL=mapbox.js.map// WARNING! This file is autogenerated from minified-master.js and others.

/*
 * Minified.js - Lightweight Client-Side JavaScript Library (full package)
 * Version: 2014.0.0-beta5.0
 * 
 * Public Domain. Use, modify and distribute it any way you like. No attribution required.
 * To the extent possible under law, Tim Jansen has waived all copyright and related or neighboring rights to Minified.
 * Please see http://creativecommons.org/publicdomain/zero/1.0/.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 * 
 * Contains code based on https://github.com/douglascrockford/JSON-js (also Public Domain).
 *
 * https://github.com/timjansen/minified.js
 */
// ==ClosureCompiler==
// @output_file_name minified.js
// @compilation_level ADVANCED_OPTIMIZATIONS
// ==/ClosureCompiler==

	/*$
	 * @id ALL
	 * @doc no
	 * @required
	 * This id allows identifying whether both Web and Util are available.
	 */

///#snippet commonAmdStart

/*$
 * @id require
 * @name require()
 * @syntax require(name)
 * @group OPTIONS
 * @module WEB, UTIL
 * Returns a reference to a module. If you do not use an AMD loader to load Minified, just call <var>require()</var> with the
 * argument 'minified' to get a reference to Minified. You can also access all modules defined using ##define().
 * 
 * If you do use an AMD loader, Minified will not define this function and you can use the AMD loader to obtain the
 * reference to Minified.
 * Minified's version of <var>require</var> is very simple and will only support Minified and other libraries designed
 * for Minfied, but <strong>no real AMD libraries</strong>. If you need to work with libraries requiring AMD, you need a real AMD loader.
 * 
 * @param name the name of the module to request. Minified is available as 'minified'.
 * @return the reference to the module. Use the name 'minified' to get Minified. You can also access any modules defined using
 * ##define(). If the name is unknown, it returns <var>undefined</var>.
 * 
 * @see ##define() allows you to define modules that can be obtained using <var>require()</var>.
 */

/*$
 * @id define
 * @name define()
 * @syntax define(name, factoryFunction)
 * @group OPTIONS
 * @module WEB, UTIL
 * Defines a module that can be returned by ##require(), in case you don't have a AMD loader. If you have a AMD loader before you include Minified,
 * <var>define()</var> will not be set and you can use the AMD loader's (more powerful) variant.
 *
 * Minified's versions of <var>require()</var> and <var>define()</var> are very simple and can not resolve things like circular references.
 * Also, they are not AMD-compatible and only useful for simple modules. If you need to work with real AMD libraries that are not written
 * for Minified, you need a real AMD loader.
 * 
 * @example Creates a simple module and uses it:
 * <pre>
 * define('makeGreen', function(require) {
 *     var MINI = require('minified'), $ = MINI.$; // obtain own ref to Minified
 *     return function(list) {
 *         $(list).set({$color: '#0f0', $backgroundColor: '#050'});
 *     });
 * });
 * 
 * var makeGreen = require('makeGreen');
 * makeGreen('.notGreenEnough');
 * </pre>
 * 
 * @param name the name of the module to request. In Minified's implementation, only 'minified' is supported.
 * @param factoryFunction is a <code>function(require)</code> will be called the first time the name is defined to obtain the module 
 * 						  reference. It received a reference to ##require() (which is required for AMD backward-compatibility) and 
 * 						  must return the value that is returned by ##require(). The function will only be called once, its result will 
 *                        be cached.
 *                        <dl><dt>require</dt><dd>A reference to ##require(). While you could use <var>require()</var> from the global
 *                        context, this would prevent backward compatibility with AMD.</dd>
 *                        <dt class="returnValue">(callback return value)</dt><dd>The reference to be returned by ##require().</dd></dl>
 *                        
 * @see ##require() can be used to obtain references defined with ##define().                       
 */

/*$
 * @id amdsupport
 * @name AMD stubs
 * @configurable default
 * @group OPTIONS
 * @doc no
 * @module WEB, UTIL
 * If enabled, Minified will create stubs so you can use it without an AMD framework.
 * It requires AMD's <code>define()</code> function.
 */
if (/^u/.test(typeof define)) { // no AMD support available ? define a minimal version
	(function(def){
		var require = this['require'] = function(name) { return def[name]; };
		this['define'] = function(name, f) { def[name] = def[name] || f(require); };
	})({});
}
/*$
 * @stop
 */

define('minified', function() {

///#/snippet commonAmdStart
	///#snippet webVars
	/*$
	 * @id WEB
	 * @doc no
	 * @required
	 * This id allows identifying whether the Web module is available.
	 */

	/**
	 * @const
	 */
	var _window = this;

	/**
	 * @const
	 */
	var _document = document;

	/**
	 * @const
	 * @type {!string}
	 */
	var MINIFIED_MAGIC_NODEID = 'Mid';

	var idSequence = 1;  // used as node id to identify nodes, and as general id for other maps


	/*$
	 * @id ready_vars
	 * @dependency
	 */
	/** @type {!Array.<function()>} */
	var DOMREADY_HANDLER = /^[ic]/.test(_document['readyState']) ? _null : []; // check for 'interactive' and 'complete'
	/*$
	 * @id animation_vars
	 * @dependency
	 */
	var ANIMATION_HANDLERS = {}; // global map of id->run() currently active
	var ANIMATION_HANDLER_COUNT = 0; // number of active handlers

	/*$
	 * @id ie9compatibility
	 * @group OPTIONS
	 * @configurable default
	 * @doc no
	 * @name Backward-Compatibility for IE9 and similar browsers
	 * The only difference between IE9 and IE10 for Minified are the lack of a 'relatedTarget' property in events
	 * and the 'elements' property of forms, which is a node in IE9.  
	 */

	/*$
	 * @id scrollxy
	 * @requires set 
	 * @group ANIMATION
	 * @configurable default
	 * @doc no
	 * @name Support for $$scrollX and $$scrollY
	 */
	/*$
	 * @stop
	 */

	///#/snippet webVars
	///#snippet utilVars
	/*$
	 * @id UTIL
	 * @doc no
	 * @required
	 * This id allows identifying whether the Util module is available.
	 */

	var _null = null, _true = true, _false = false;

	/** @const */
	var undef;

	/*$
	 * @id date_constants
	 * @dependency
	 */
	function val3(v) {return v.substr(0,3);}
	var MONTH_LONG_NAMES = split('January,February,March,April,May,June,July,August,September,October,November,December', /,/g);
	var MONTH_SHORT_NAMES = map(MONTH_LONG_NAMES, val3); // ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	var WEEK_LONG_NAMES = split('Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday', /,/g);
	var WEEK_SHORT_NAMES = map(WEEK_LONG_NAMES, val3); 
	var MERIDIAN_NAMES = split('am,pm', /,/g);
	var MERIDIAN_NAMES_FULL = split('am,am,am,am,am,am,am,am,am,am,am,am,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm', /,/g);

	var FORMAT_DATE_MAP = {
			'y': ['FullYear', nonOp],
			'Y': ['FullYear', function(d) { return d % 100; }],
			'M': ['Month', plusOne],
			'n': ['Month', MONTH_SHORT_NAMES],
			'N': ['Month', MONTH_LONG_NAMES],
			'd': ['Date', nonOp],
			'm': ['Minutes', nonOp],
			'H': ['Hours', nonOp],
			'h': ['Hours', function(d) { return (d % 12) || 12; }],
			'k': ['Hours', plusOne],
			'K': ['Hours', function(d) { return d % 12; }],
			's': ['Seconds', nonOp],
			'S': ['Milliseconds', nonOp],
			'a': ['Hours', MERIDIAN_NAMES_FULL],
			'w': ['Day', WEEK_SHORT_NAMES],
			'W': ['Day', WEEK_LONG_NAMES],
			'z': ['TimezoneOffset', function(d, dummy, timezone) {
				if (timezone)
					return timezone;
				var sign = d < 0 ? '+' : '-'; 
				var off = d > 0 ? d : -d; 
				return sign + pad(2, Math.floor(off/60)) + pad(2, off%60); 
			}]
		};

	var PARSE_DATE_MAP = {
			'y': 0,      // placeholder -> ctorIndex
			'Y': [0, -2000],
			'M': [1,1], // placeholder -> [ctorIndex, offset|value array]
			'n': [1, MONTH_SHORT_NAMES], 
			'N': [1, MONTH_LONG_NAMES],
			'd': 2,
			'm': 4,
			'H': 3,
			'h': 3,
			'K': [3,1],
			'k': [3,1],
			's':  5,
			'S':  6,
			'a': [3, MERIDIAN_NAMES]
		};

	/*$
	 * @stop
	 */

	/** @const */
	var MAX_CACHED_TEMPLATES = 99;
	var templateCache={}; // template -> function
	var templates = [];   // list of MAX_CACHED_TEMPLATES templates

	///#/snippet utilVars
	///#snippet commonFunctions

	/** @param s {?} */
	function toString(s) { 
		return s!=_null ? ''+s : '';
	}
	/**
	 * @param s {?}
	 * @param o {string}
	 */
	function isType(s,o) {
		return typeof s == o;
	}
	/** @param s {?} */
	function isString(s) {
		return isType(s, 'string');
	}
	function isObject(f) {
		return !!f && isType(f, 'object');
	}
	function isNode(n) {
		return n && n['nodeType'];
	}
	function isNumber(n) {
		return isType(n, 'number');
	}
	function isDate(n) {
		return isObject(n) && !!n['getDay'];
	}
	function isBool(n) {
		return n === _true || n === _false;
	}
	function isValue(n) {
		var type = typeof n;
		return type == 'object' ? !!(n && n['getDay']) : (type == 'string' || type == 'number' || isBool(n));
	}
	function nonOp(v) {
		return v;
	}
	function plusOne(d) { 
		return d+1; 
	}
	function replace(s, regexp, sub) {
		return toString(s).replace(regexp, sub != _null ? sub : '');
	}
	function escapeRegExp(s) {
		return replace(s, /[\\\[\]\/{}()*+?.$|^-]/g, "\\$&");
	}
	function trim(s) {
		return replace(s, /^\s+|\s+$/g);
	}
	function isEmpty(s, ignoreWhitespace) {
		return s == _null || !s.length || (ignoreWhitespace && /^\s*$/.test(s));
	}
	function eachObj(obj, cb) {
		for (var n in obj)
			if (obj.hasOwnProperty(n))
				cb.call(obj, n, obj[n]);
		return obj;
	}
	function each(list, cb) {
		if (list)
			for (var i = 0; i < list.length; i++)
				cb.call(list, list[i], i);
		return list;
	}
	function filterObj(obj, f) {
		var r = {};
		eachObj(obj, function(key, value) {
			if (f.call(obj, key, value))
				r[key] = value;
		});
		return r;
	}
	function filter(list, filterFuncOrObject) {
		var r = []; 
		var f = isFunction(filterFuncOrObject) ? filterFuncOrObject : function(value) { return filterFuncOrObject != value; };
		each(list, function(value, index) {
			if (f.call(list, value, index))
				r.push(value);
		});
		return r;
	}
	function collector(iterator, obj, collectFunc) {
		var result = [];
		iterator(obj, function (a, b) {
			if (isList(a = collectFunc.call(obj, a, b))) // extreme variable reusing: a is now the callback result
				each(a, function(rr) { result.push(rr); });
			else if (a != _null)
				result.push(a);
		});
		return result;
	}
	function collectObj(obj, collectFunc) {
		return collector(eachObj, obj, collectFunc);
	}
	function collect(list, collectFunc) {
		return collector(each, list, collectFunc);
	}
	function keyCount(obj) {
		var c = 0;
		eachObj(obj, function(key) { c++; });
		return c;
	}
	function keys(obj) { // use Object.keys? in IE>=9
		var list = [];
		eachObj(obj, function(key) { list.push(key); });
		return list;
	}
	function values(obj, keys) {
		var list = [];
		if (keys)
			each(keys, function(value) { list.push(obj[value]); });
		else
			eachObj(obj, function(key, value) { list.push(value); });
		return list;
	}	

	function mapObj(list, mapFunc) {
		var result = {};
		eachObj(list, function(key, value) {
			result[key] = mapFunc.call(list, key, value);
		});
		return result;
	}
	function map(list, mapFunc) {
		var result = [];
		each(list, function(item, index) {
			result.push(mapFunc.call(list, item, index));
		});
		return result;
	}
	function startsWith(base, start) {
		if (isList(base)) {
			var s2 = _(start); // convert start as we don't know whether it is a list yet
			return equals(_(base).sub(0, s2.length), s2);
		}
		else
			return start != _null && base.substr(0, start.length) == start;
	}
	function endsWith(base, end) {
		if (isList(base)) {
			var e2 = _(end);
			return _(base).sub(-e2.length).equals(e2) || !e2.length;
		}
		else
			return end != _null && base.substr(base.length - end.length) == end;
	}
	function reverse(list) {
		var len = list.length;
		if (isList(list))
			return new M(map(list, function() { return list[--len]; }));
		else
			return replace(list, /[\s\S]/g, function() { return list.charAt(--len); });
	}
	function sub(list, startIndex, endIndex) {
		if (!list)
			return [];
		var s = getFindIndex(list, startIndex, 0);
		var e = getFindIndex(list, endIndex, list.length);
 		return filter(list, function(o, index) { 
 			return index >= s && index < e; 
 		});
 	}
	function toObject(list, value) {
		var obj = {};
		each(list, function(item, index) {
			obj[item] = value;
		});
		return obj;
	}
	function copyObj(from, to, dontOverwrite) {
		eachObj(from, function(name, value) {
			if (to[name] == _null || !dontOverwrite)
				to[name] = value;
		});
		return to;
	}
	function extend(target) {
		for (var i = 1; i < arguments.length; i++)
			eachObj(arguments[i], function(name, value) {
				if (value != undef)
					target[name] = value;
			});
		return target;
	}
	function getFindFunc(findFunc) {
		return isFunction(findFunc) ? findFunc : function(obj, index) { if (findFunc === obj) return index; };
	}
	function getFindIndex(list, index, defaultIndex) {
		return index == _null ? defaultIndex : index < 0 ? list.length+index : index;
	}
	function find(list, findFunc, startIndex, endIndex) {
		var f = getFindFunc(findFunc);
		var e = getFindIndex(list, endIndex, list.length);
		var r;
		for (var i = getFindIndex(list, startIndex, 0); i < e; i++)
			if ((r = f.call(list, list[i], i)) != _null)
				return r;
	}
	function findLast(list, findFunc, startIndex, endIndex) {
		var f = getFindFunc(findFunc);
		var e = getFindIndex(list, endIndex, -1);
		var r;
		for (var i = getFindIndex(list, startIndex, list.length-1); i > e; i--)
			if ((r = f.call(list, list[i], i)) != _null)
				return r;
	}

	function array(list) {
		return map(list, nonOp);
	}
	function unite(list) {
		return function() {
			return new M(callList(list, arguments));
		};
	}
	function uniq(list) {
		var found = {};
		return filter(list, function(item) {
			if (found[item])
				return _false;
			else
				return found[item] = 1;
		});
	}
	function intersection(list, otherList) {
		var keys = toObject(otherList, 1);
		return filter(list, function(item) {
			var r = keys[item];
			keys[item] = 0;
			return r;
		});
	}
	function contains(list, value) { // TODO: can Array.indexOf be used in >IE8?
		for (var i = 0; i < list.length; i++)
			if (list[i] == value)
				return _true;
		return _false;
	}
	// equals if a and b have the same elements and all are equal. Supports getters.
	function equals(x, y) {
		var a = isFunction(x) ? x() : x;
		var b = isFunction(y) ? y() : y;
		var aKeys;
		if (a == b)
			return _true;
		else if (a == _null || b == _null)
			return _false;
		else if (isValue(a) || isValue(b))
			return isDate(a) && isDate(b) && +a==+b;
		else if (isList(a)) {
			return (a.length == b.length) &&
				!find(a, function(val, index) {
					if (!equals(val, b[index]))
						return _true;
				});
		}
		else {
			return !isList(b) &&
				((aKeys = keys(a)).length == keyCount(b)) && 
				!find(aKeys, function(key) {
						if (!equals(a[key],b[key]))
							return _true;
				});
		}
	}

	function once(f) {
		var called = 0;
		return function() {
			if (!(called++))
				return call(f, this, arguments);
		};
	}
	function call(f, fThisOrArgs, args) {
		if (isFunction(f))
			return f.apply(args && fThisOrArgs, map(args || fThisOrArgs, nonOp));
	}
	function callList(list, fThisOrArgs, args) {
		return map(list, function(f) { return call(f, fThisOrArgs, args);});
	}
	function bind(f, fThis, beforeArgs, afterArgs) {
		return function() {
			return call(f, fThis, collect([beforeArgs, arguments, afterArgs], nonOp));
		};
	}
	function partial(f, beforeArgs, afterArgs) {
		return bind(f, this, beforeArgs, afterArgs);
	}
	function pad(digits, number) {
		var signed = number < 0 ? '-' : '';
		var preDecimal = (signed?-number:number).toFixed(0);
		while (preDecimal.length < digits)
			preDecimal = '0' + preDecimal;
		return signed + preDecimal;
	}

	function processNumCharTemplate(tpl, input, fwd) {
		var inputPos = 0;
		var inHash;
		var rInput = fwd ? input : reverse(input);
		var s = (fwd ? tpl : reverse(tpl)).replace(/./g, function(tplChar) {
			if (tplChar == '0') {
				inHash = _false;
				return rInput.charAt(inputPos++) || '0';
			}
			else if (tplChar == '#') {
				inHash = _true;
				return rInput.charAt(inputPos++) || '';
			}
			else
				return inHash && !rInput.charAt(inputPos) ? '' : tplChar;
		});
		return fwd ? s : (input.substr(0, input.length - inputPos) + reverse(s));
	}

	function getTimezone(match, idx, refDate) { // internal helper, see below
		if (idx == _null || !match)
			return 0;
		return parseInt(match[idx])*60 + parseInt(match[idx+1]) + refDate.getTimezoneOffset();
	}

	// formats number with format string (e.g. "#.000", "#,#", "00000", "000.00", "000.000.000,00", "000,000,000.##")
	// choice syntax: <cmp><value>:<format>|<cmp><value>:<format>|... 
	// e.g. 0:no item|1:one item|>=2:# items
	// <value>="null" used to compare with nulls.
	// choice also works with strings or bools, e.g. ERR:error|WAR:warning|FAT:fatal|ok
	function formatValue(format, value) {
		format = replace(format, /^\?/);
		if (isDate(value)) {
			var timezone, match;

			if (match = /^\[(([+-]\d\d)(\d\d))\]\s*(.*)/.exec(format)) {
				timezone = match[1];
				value = dateAdd(value, 'minutes', getTimezone(match, 2, value));
				format = match[4];
			}

			return replace(format, /(\w)(\1*)(?:\[([^\]]+)\])?/g, function(s, placeholderChar, placeholderDigits, params) {
				var val = FORMAT_DATE_MAP[placeholderChar];
				if (val) {
					var d = value['get' + val[0]]();

					var optionArray = (params && params.split(','));
					if (isList(val[1])) 
						d = (optionArray || val[1])[d];
					else
						d = val[1](d, optionArray, timezone);
					if (d != _null && !isString(d))
						d = pad(placeholderDigits.length+1, d);
					return d;
				}
				else
					return s;
			});

		}
		else 
			return find(format.split(/\s*\|\s*/), function(fmtPart) {
				var match, numFmtOrResult;
				if (match = /^([<>]?)(=?)([^:]*?)\s*:\s*(.*)$/.exec(fmtPart)) {
					var cmpVal1 = value, cmpVal2 = parseFloat(match[3]);
					if (isNaN(cmpVal2) || !isNumber(cmpVal1)) {
						cmpVal1 = (cmpVal1==_null) ? "null" : toString(cmpVal1); // not ""+value, because undefined is treated as null here
						cmpVal2 = match[3];
					}
					if (match[1]) {
						if ((!match[2] && cmpVal1 == cmpVal2 ) ||
						    (match[1] == '<'  && cmpVal1 > cmpVal2)  ||
						    (match[1] == '>'  && cmpVal1 < cmpVal2))
							return _null;
					}
					else if (cmpVal1 != cmpVal2)
						return _null;
					numFmtOrResult = match[4];
				}
				else
					numFmtOrResult = fmtPart;

				if (isNumber(value))
					return numFmtOrResult.replace(/[0#](.*[0#])?/, function(numFmt) {
						var decimalFmt = /^([^.]+)(\.)([^.]+)$/.exec(numFmt) || /^([^,]+)(,)([^,]+)$/.exec(numFmt);
						var signed = value < 0 ? '-' : '';
						var numData = /(\d+)(\.(\d+))?/.exec((signed?-value:value).toFixed(decimalFmt ? decimalFmt[3].length:0));
						var preDecimalFmt = decimalFmt ? decimalFmt[1] : numFmt;
						var postDecimal = decimalFmt ? processNumCharTemplate(decimalFmt[3], replace(numData[3], /0+$/), _true) : '';

						return 	(signed ? '-' : '') + 
								(preDecimalFmt == '#' ? numData[1] : processNumCharTemplate(preDecimalFmt, numData[1])) +
								(postDecimal.length ? decimalFmt[2] : '') +
								postDecimal;
					});
				else
					return numFmtOrResult;
			});
	}
	// returns date; null if optional and not set; undefined if parsing failed
	function parseDate(format, date) {
		var indexMap = {}; // contains reGroupPosition -> typeLetter or [typeLetter, value array]
		var reIndex = 1;
		var timezoneOffsetMatch;
		var timezoneIndex;
		var match;

		if (/^\?/.test(format)) {
			if (!trim(date))
				return _null;
			format = format.substr(1);
		}

		if (match = /^\[([+-]\d\d)(\d\d)\]\s*(.*)/.exec(format)) {
			timezoneOffsetMatch = match;
			format = match[3];
		}

		var parser = new RegExp(format.replace(/(.)(\1*)(?:\[([^\]]*)\])?/g, function(wholeMatch, placeholderChar, placeholderDigits, param) {
			if (/[dmhkyhs]/i.test(placeholderChar)) {
				indexMap[reIndex++] = placeholderChar;
				var plen = placeholderDigits.length+1;
				return "(\\d"+(plen<2?"+":("{1,"+plen+"}"))+")";
			}
			else if (placeholderChar == 'z') {
				timezoneIndex = reIndex;
				reIndex += 2;
				return "([+-]\\d\\d)(\\d\\d)";
			}
			else if (/[Nna]/.test(placeholderChar)) {
				indexMap[reIndex++] = [placeholderChar, param && param.split(',')];
				return "([a-zA-Z\x80�\u1fff]+)"; 
			}
			else if (/w/i.test(placeholderChar))
				return "[a-zA-Z\x80�\u1fff]+";
			else if (/\s/.test(placeholderChar))
				return "\\s+"; 
			else 
				return escapeRegExp(wholeMatch);
		}));

		if (!(match = parser.exec(date)))
			return undef;

		var ctorArgs = [0, 0, 0, 0, 0, 0,  0];
		for (var i = 1; i < reIndex; i++) {
			var matchVal = match[i];
			var indexEntry = indexMap[i];
			if (isList(indexEntry)) { // for a, n or N
				var placeholderChar = indexEntry[0];
				var mapEntry  = PARSE_DATE_MAP[placeholderChar];
				var ctorIndex = mapEntry[0];
				var valList = indexEntry[1] || mapEntry[1];
				var listValue = find(valList, function(v, index) { if (startsWith(matchVal.toLowerCase(), v.toLowerCase())) return index; });
				if (listValue == _null)
					return undef;
				if (placeholderChar == 'a')
					ctorArgs[ctorIndex] += listValue * 12;
				else
					ctorArgs[ctorIndex] = listValue;
			}
			else if (indexEntry) { // for numeric values (yHmMs)
				var value = parseInt(matchVal);
				var mapEntry  = PARSE_DATE_MAP[indexEntry];
				if (isList(mapEntry))
					ctorArgs[mapEntry[0]] += value - mapEntry[1];
				else
					ctorArgs[mapEntry] += value;
			}
		}
		var d = new Date(ctorArgs[0], ctorArgs[1], ctorArgs[2], ctorArgs[3], ctorArgs[4], ctorArgs[5], ctorArgs[6]);
		return dateAdd(d, 'minutes', -getTimezone(timezoneOffsetMatch, 1, d) - getTimezone(match, timezoneIndex, d));
	}
	// format ?##00,00##
	// returns number; null if optional and not set; undefined if parsing failed
	function parseNumber(format, value) {
		if (arguments.length == 1)
			return parseNumber(_null, format);
		if (/^\?/.test(format)) {
			if (!trim(value))
				return _null;
			format = format.substr(1);
		}
		var decSep = (/(^|[^0#.,])(,|[0#.]*,[0#]+|[0#]+\.[0#]+\.[0#.,]*)($|[^0#.,])/.test(format)) ? ',' : '.';
		var r = parseFloat(replace(replace(replace(value, decSep == ',' ? /\./g : /,/g), decSep, '.'), /^[^\d-]*(-?\d)/, '$1'));
		return isNaN(r) ? undef : r;
	}
	function now() {
		return new Date();
	}
	function dateClone(date) {
		return new Date(+date);
	}
	function capWord(w) { 
		return w.charAt(0).toUpperCase() + w.substr(1); 
	}
	function dateAddInline(d, cProp, value) {
		d['set'+cProp](d['get'+cProp]() + value);
		return d;
	}
	function dateAdd(date, property, value) {
		if (value == _null)
			return dateAdd(now(), date, property);
		return dateAddInline(dateClone(date), capWord(property), value);
	}
	function dateMidnight(date) {
		var od = date || now();
		return new Date(od.getFullYear(), od.getMonth(), od.getDate());
	}
	function dateDiff(property, date1, date2) {
		var d1t = +date1;
		var d2t = +date2;
		var dt = d2t - d1t;
		if (dt < 0)
			return -dateDiff(property, date2, date1);

		var propValues = {'milliseconds': 1, 'seconds': 1000, 'minutes': 60000, 'hours': 3600000};
		var ft = propValues[property];
		if (ft)
			return dt / ft;

		var cProp = capWord(property);
		var calApproxValues = {'fullYear': 8.64e7*365, 'month': 8.64e7*365/12, 'date': 8.64e7}; // minimum values, a little bit below avg values
		var minimumResult = Math.floor((dt / calApproxValues[property])-2); // -2 to remove the imperfections caused by the values above

		var d = dateAddInline(new Date(d1t), cProp, minimumResult);
		for (var i = minimumResult; i < minimumResult*1.2+4; i++) { // try out 20% more than needed, just to be sure
			if (+dateAddInline(d, cProp, 1) > d2t)
				return i;
		}
		// should never ever be reached
	}

	function ucode(a) {
		return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
	}

	function escapeJavaScriptString(s) {
		return replace(s, /[\x00-\x1f'"\u2028\u2029]/g, ucode);
	}

	// reimplemented split for IE<=8
	function split(str, regexp) {

		return str.split(regexp);
	}

	function template(template, escapeFunction) {
		if (templateCache[template])
			return templateCache[template];
		else {
			var funcBody = 'with(_.isObject(obj)?obj:{}){'+
				map(split(template, /{{|}}}?/g), function(chunk, index) {
					var match, c1 = trim(chunk), c2 = replace(c1, /^{/), escapeSnippet  = (c1==c2) ? 'esc(' : '';
					if (index%2) { // odd means JS code
						if (match = /^each\b(\s+([\w_]+(\s*,\s*[\w_]+)?)\s*:)?(.*)/.exec(c2))
							return 'each('+(trim(match[4])?match[4]:'this')+', function('+match[2]+'){';
						else if (match = /^if\b(.*)/.exec(c2))
							return 'if('+match[1]+'){';
						else if (match = /^else\b\s*(if\b(.*))?/.exec(c2))
							return '}else ' + (match[1]  ? 'if('+match[2] +')' : '')+'{';
						else if (match = /^\/(if)?/.exec(c2))
							return match[1] ? '}\n' : '});\n';
						else if (match = /^(var\s.*)/.exec(c2))
							return match[1]+';';
						else if (match = /^#(.*)/.exec(c2))
							return match[1];
						else if (match = /(.*)::\s*(.*)/.exec(c2))
							return 'print('+escapeSnippet+'_.formatValue("'+escapeJavaScriptString(match[2])+'",'+(trim(match[1])?match[1]:'this')+(escapeSnippet&&')')+'));\n';
						else
							return 'print('+escapeSnippet+(trim(c2)?c2:'this')+(escapeSnippet&&')')+');\n';
					}
					else if (chunk){
						return 'print("'+escapeJavaScriptString(chunk)+'");\n';
					}
				}).join('')+'}';
			var f = (new Function('obj', 'each', 'esc', 'print', '_', funcBody));
			var t = function(obj, thisContext) {
				var result = [];
				f.call(thisContext || obj, obj, function(obj, func) {
					if (isList(obj))
						each(obj, function(value, index) { func.call(value, value, index); });
					else
						eachObj(obj, function(key, value) { func.call(value, key, value); });
				}, escapeFunction || nonOp, function() {call(result['push'], result, arguments);}, _);
				return result.join('');
			};
			if (templates.push(t) > MAX_CACHED_TEMPLATES)
				delete templateCache[templates.shift()];
			return templateCache[template] = t; 
		}
	}

	function escapeHtml(s) {
		return replace(s, /[<>'"&]/g, function(s) {
			return '&#'+s.charCodeAt(0)+';';
		});
	}	

	function formatHtml(tpl, obj) { 
		return template(tpl, escapeHtml)(obj); 
	}

	function listBindArray(func) {
		return function(arg1, arg2) {
			return new M(func(this, arg1, arg2));
		};
	}
	function listBind(func) {
		return function(arg1, arg2) {
			return func(this, arg1, arg2);
		};
	}
	function funcArrayBind(func) {
		return function(arg1, arg2, arg3) {
			return new M(func(arg1, arg2, arg3));
		};
	}

	///#/snippet commonFunctions
	///#snippet webFunctions

	// note: only the web version has the f.item check
	function isFunction(f) {
		return isType(f, 'function') && !f['item']; // item check as work-around for webkit bug 14547
	}

	function isList(v) {
		return v && v.length != _null && !isString(v) && !isNode(v) && !isFunction(v) && v !== _window;
	}

	function wordRegExpTester(name, prop) {
		var re = RegExp('(^|\\s)' + name + '(?=$|\\s)', 'i');
		return function(obj) {return  name ? re.test(obj[prop]) : _true;};
	}

	// used by IE impl of on() only
	function push(obj, prop, value) {
		(obj[prop] = (obj[prop] || [])).push(value);
	}
	// used by IE impl of on()/off() only
	function removeFromArray(array, value) {
		for (var i = 0; array && i < array.length; i++) 
			if (array[i] === value) 
				array['splice'](i--, 1);
	}

	function extractNumber(v) {
		return parseFloat(replace(v, /^[^\d-]+/));
	}

	// retrieves the node id of the element, create one if needed.
	function getNodeId(el) {
		return (el[MINIFIED_MAGIC_NODEID] = (el[MINIFIED_MAGIC_NODEID] || ++idSequence));
	}

	// collect variant that filters out duplicate nodes from the given list, returns a new array
	function collectUniqNodes(list, func) {
		var result = [];
		var nodeIds = {};
		var currentNodeId;

		flexiEach(list, function(value) {
			flexiEach(func(value), function(node) {
				if (isNode(node) &&!nodeIds[currentNodeId = getNodeId(node)]) {
					result.push(node);
					nodeIds[currentNodeId] = _true;
				}
			});
		});
		return result;
	}

	// finds out the 'natural' height of the first element, the one if $$slide=1
	function getNaturalHeight(elementList, factor) {
		var q = {'$position': 'absolute', '$visibility': 'hidden', '$display': 'block', '$height': _null};
		var oldStyles = elementList['get'](q);
		var h = elementList['set'](q)['get']('clientHeight');
		elementList['set'](oldStyles);
		return h*factor + 'px';
	}



	// @condblock !ie8compatibility 
	function on(subSelector, eventSpec, handler, args, bubbleSelector) {
		if (isFunction(eventSpec))
			return this['on'](_null, subSelector, eventSpec, handler, args);
		else if (isString(args)) 
			return this['on'](subSelector, eventSpec, handler, _null, args);
		else
			return this['each'](function(baseElement, index) {
				flexiEach(subSelector ? dollarRaw(subSelector, baseElement) : baseElement, function(registeredOn) {
					flexiEach(toString(eventSpec).split(/\s/), function(namePrefixed) {
						var name = replace(namePrefixed, /[?|]/);
						var prefix = replace(namePrefixed, /[^?|]/g);

						var miniHandler = function(event, triggerOriginalTarget) {
							var stop;
							var match = !bubbleSelector;
							var el = bubbleSelector ? (triggerOriginalTarget || event['target']) : registeredOn;
							if (bubbleSelector) {
								var selectorFilter = getFilterFunc(bubbleSelector, registeredOn);
								while (el && el != registeredOn && !(match = selectorFilter(el)))
									el = el['parentNode'];
							}
							if (match && (stop = (((!handler.apply($(el), args || [event, index])) || prefix=='') && prefix != '|')) && !triggerOriginalTarget) {
								event['preventDefault']();
								event['stopPropagation']();
							}
							return !stop;
						};

						var triggerId = idSequence++;

						registeredOn['M'] = registeredOn['M'] || {};
						registeredOn['M'][triggerId] = function(eventName, eventObj, element) { // this function will be called by trigger()
							return (name == eventName) && !miniHandler(eventObj, element);
						};

						handler['M'] = collector(flexiEach, [handler['M'], function () { // this function will be called by off()
							registeredOn.removeEventListener(name, miniHandler, _false);
							delete registeredOn['M'][triggerId];
						}], nonOp);

						registeredOn.addEventListener(name, miniHandler, _false);
					});
				});
			});
	}
	// @condend !ie8compatibility 


	// @condblock !ie8compatibility 
	function off(handler) {
	   	flexiEach(handler['M'], call);
		handler['M'] = _null;
	}
	// @condend !ie8compatibility 

	// for remove & window.unload
	function detachHandlerList(dummy, handlerList) {
		flexiEach(handlerList, function(h) {
			h['e'].detachEvent('on'+h['n'], h['h']);
		});
	}

	// for ready()
	function triggerDomReady() {
		flexiEach(DOMREADY_HANDLER, call);
		DOMREADY_HANDLER = _null;
	}

	function ready(handler) {
		if (DOMREADY_HANDLER)
			DOMREADY_HANDLER.push(handler);
		else
			setTimeout(handler, 0);
	}

	function $$(selector) {
		return dollarRaw(selector)[0];
	}

	function EE(elementName, attributes, children) {
		var e = $(_document.createElement(elementName));
		// @condblock UTIL
		// this attributes != null check is only required with Util's isObject() implementation. Web's isObject() is simpler.
		return (isList(attributes) || (attributes != _null && !isObject(attributes)) ) ? e['add'](attributes) : e['set'](attributes)['add'](children);
		// @condend UTIL
		// @cond !UTIL return (isList(attributes) || (!isObject(attributes)) ) ? e['add'](attributes) : e['set'](attributes)['add'](children);
	}

	function clone(listOrNode) {
		return collector(flexiEach, listOrNode, function(e) {
			var c;
		     if (isString(e))
		    	 return e;
		     else if (isList(e))
		    	 return clone(e);
		     else if (isNode(e)) {
		    	 c = e['cloneNode'](_true);
		    	 c['removeAttribute']('id');
		    	 return c;
		     }
		     else
		    	 return _null;
		});
   }

	/*$
	 * @stop
	 */

	function $(selector, context, childOnly) { 
		// @condblock ready
		// isList(selector) is no joke, older Webkit versions return a function for childNodes...
		return isFunction(selector) ? ready(selector) : new M(dollarRaw(selector, context, childOnly));
		// @condend
		// @cond !ready return new M(dollarRaw(selector, context));
	}

	// implementation of $ that does not produce a Minified list, but just an array









	// @condblock !ie7compatibility
	function dollarRaw(selector, context, childOnly) { 
		function flatten(a) { // flatten list, keep non-lists, remove nulls
		      return isList(a) ? collector(flexiEach, a, flatten) : a;
		 }
		 function filterElements(list) { // converts into array, makes sure context is respected
		      return filter(collector(flexiEach, list, flatten), function(node) {
		           var a = node;
		           while (a = a['parentNode'])
		                if (a == context[0] || childOnly)
		                     return a == context[0];
		           // fall through to return undef
		      });
		 }

		 if (context) {
		      if ((context = dollarRaw(context)).length != 1)
		           return collectUniqNodes(context, function(ci) { return dollarRaw(selector, ci, childOnly);});
		      else if (isString(selector))
		           return childOnly ? filterElements(context[0].querySelectorAll(selector)) : context[0].querySelectorAll(selector);
		      else
		           return filterElements(selector);

		 }
		 else if (isString(selector))
		      return _document.querySelectorAll(selector);
		 else
		      return collector(flexiEach, selector, flatten);
	};
	// @condend !ie7compatibility

	// If context is set, live updates will be possible. 
	// Please note that the context is not evaluated for the '*' and 'tagname.classname' patterns, because context is used only
	// by on(), and in on() only nodes in the right context will be checked
	function getFilterFunc(selector, context) {
		var nodeSet = {};
		var dotPos = nodeSet;
		if (isFunction(selector))
			return selector;
		else if (isNumber(selector))
			return function(v, index) { return index == selector; };
		else if (!selector || selector == '*' ||
				 (isString(selector) && (dotPos = /^([\w-]*)\.?([\w-]*)$/.exec(selector)))) {
			var nodeNameFilter = wordRegExpTester(dotPos[1], 'nodeName');
			var classNameFilter = wordRegExpTester(dotPos[2], 'className');
			return function(v) { 
				return isNode(v) == 1 && nodeNameFilter(v) && classNameFilter(v);
			};
		}
		else if (context) 
			return function(v) { 
				return $(selector, context)['find'](v)!=_null; // live search instead of node set, for on()
			};
		else {
			$(selector)['each'](function(node) {
				nodeSet[getNodeId(node)] = _true;
			});
			return function(v) { 
				return nodeSet[getNodeId(v)]; 
			};
		}	
	}

	function getInverseFilterFunc(selector) {
		var f = getFilterFunc(selector);
		return function(v) {return f(v) ? _null : _true;};
	}
	///#/snippet webFunctions

	///#snippet extrasFunctions
	function flexiEach(list, cb) {
		if (isList(list))
			each(list, cb);
		else if (list != _null)
			cb(list, 0);
		return list;
	}

	/*$
	 * @id promise
	 * @group REQUEST
	 * @name _.promise()
	 * @configurable default
	 * @syntax _.promise()
	 * @syntax _.promise(otherPromise...)
	 * @module WEB+UTIL
	 * 
	 * Creates a new ##promiseClass#Promise##, optionally assimilating other promises. If no other promise is given, 
	 * a fresh new promise is returned. The returned promise is a function that can be called directly to change the 
	 * promise's state.
	 * 
	 * If one promise is given as parameter, the new promise assimilates the given promise as-is, and just forwards 
	 * fulfillment and rejection with the original values.
	 *
	 * If more than one promise are given, it will assimilate all of them with slightly different rules:
	 * <ul><li>the new promise is fulfilled if all assimilated promises have been fulfilled. The fulfillment values
	 *         of all assimilated promises are given to the handler as arguments. Note that the fulfillment values themselves are always 
	 *         arrays, as a promise can have several fulfillment values in Minified's implementation.</li>
	 * <li>when one of the promises is rejected, the new promise is rejected immediately. The rejection handler gets the 
	 *     promises rejection value (first argument if it got several) as first argument, an array of the result values 
	 *     of all promises as a second (that means one array of arguments for each promise), and the index of the failed 
	 *     promise as third.
	 * </li></ul>
	 * 
	 * @example A simple promise that is fulfilled after 1 second:
	 * <pre>var p = _.promise();
	 * setTimeout(function() { 
	 *     p(true, []); 
	 * }, 1000);
	 * </pre>
	 * 
	 * @param otherPromise one or more promises to assimilate
	 * @return the new promise. It is also a <code>function(state, args)</code> that should be called to set the state when the Promise's work is done:
	 * <dl><dt>state</dt><dd><var>true</var> to set the Promise to fulfilled, <var>false</var> to set the state as rejected. If you pass <var>null</var> or
	 * <var>undefined</var>, the promise's state does not change. The latter may be useful to obtain the promises current state.</dd>
	 * <dt>args</dt><dd>An array of arguments to pass to the fulfillment or rejection handler (which one is called depends on
	 * <var>state</var>).</dd>
	 * <dt class="returnValue">(return value)</dt><dd><var>true</var> if the promise has been fulfilled, <var>false</var> if its state is rejected,
	 * <var>undefined</var> if it is still pending. If you only want to obtain the promise's state, call the function without arguments.</dd></dl> 
	 * </dl>
	 * The function can be called several times, but only the first invocation modifies the Promise. All subsequent calls will
	 * be ignored.
	 */
	function promise() {
		var state; // undefined/null = pending, true = fulfilled, false = rejected
		var deferred = [];   // this function calls the functions supplied by then()

		var assimilatedPromises = arguments;
		var assimilatedNum = assimilatedPromises.length;
		var numCompleted = 0; // number of completed, assimilated promises
		var values = []; // array containing the result arrays of all assimilated promises, or the result of the single promise

		var set = function(newState, newValues) {
			if (state == _null && newState != _null) {
				state = newState;
				values = isList(newValues) ? newValues : [newValues];
				setTimeout(function() {
					each(deferred, function(f) {f();});
				}, 0);
			}
			return state;
		};

		// use promise varargs
		each(assimilatedPromises, function assimilate(promise, index) {
			try {
				promise['then'](function resolvePromise(v) {
					var then;
					if ((isObject(v) || isFunction(v)) && isFunction(then = v['then']))
						assimilate(then, index);
					else {
						values[index] = map(arguments, nonOp);
						if (++numCompleted == assimilatedNum)
							set(_true, assimilatedNum < 2 ? values[index] : values);
					}
				}, 
				function rejectPromise(e) {
					values[index] = map(arguments, nonOp);
					set(_false, assimilatedNum < 2 ? values[index] : [values[index][0], values, index]);
				});
			}
			catch (e) {
				set(_false, [e, values, index]);
			}
		});

		/*$
		 * @id stop
		 * @group REQUEST
		 * @name promise.stop()
		 * @syntax promise.stop()
		 * @module WEB+UTIL
		 * Stops an ongoing operation, if supported. Currently the only promises supporting this are those returned by ##animate() and ##wait(). 
		 * stop() invocation will be propagated over promises returned by ##then() and promises assimilated by ##promise(). You only need to invoke stop
		 * with the last promise, and all dependent promises will automatically stop as well. 
		 *
		 * @return In some cases, the <var>stop()</var> can return a value. This is currently only done by ##animate(), which will return the actual duration.
		 *
		 * @example Animation chain that can be stopped.
		 * <pre>
		 * var div = $('#myMovingDiv').set({$left: '0px', $top: '0px'});
		 * var prom = div.animate({$left: '200px', $top: '0px'}, 600, 0)
		 *    .then(function() {
		 *           return _.promise(div.animate({$left: '200px', $top: '200px'}, 800, 0), 
		 *           				  div.animate({$backgroundColor: '#f00'}, 200));
		 *    }).then(function() {
		 *           return div.animate({$left: '100px', $top: '100px'}, 400);
		 *    });
		 *    
		 * $('#stopButton').on('click', prom.stop);
		 * </pre>
		 */   
		set['stop'] = function() {
			each(assimilatedPromises, function(promise) {
				if (promise['stop'])
					promise['stop']();
			});

			return call(set['stop0']);
		};

		/*$
		 * @id then
		 * @group REQUEST
		 * @name promise.then()
		 * @syntax promise.then()
		 * @syntax promise.then(onSuccess)
		 * @syntax promise.then(onSuccess, onError)
		 * 
		 * @module WEB, UTIL
		 * Registers two callbacks that will be invoked when the ##promise#Promise##'s asynchronous operation finished 
		 * successfully (<var>onSuccess</var>) or an error occurred (<var>onError</var>). The callbacks will be called after  
		 * <var>then()</var> returned, from the browser's event loop.
		 * Minified implements the Promises/A+ specification, allowing interoperability with other Promises frameworks. 
		 * You can chain <var>then()</var> invocations, as <var>then()</var> returns another Promise object that you can attach to. 
		 *
		 * @example Simple handler for an HTTP request. Handles only success and ignores errors.
		 * <pre>
		 * $.request('get', '/weather.html')
		 *     .then(function(txt) {
		 *        alert('Got response!');
		 *     });
		 * </pre>
		 *
		 * @example Including an error handler.
		 * <pre>
		 * $.request('get', '/weather.html')
		 *     .then(function(txt) {
		 *        alert('Got response!');
		 *     }, function(err) {
		 *        alert('Error!');
		 *     }));
		 * </pre>
		 *
		 * @example Chained handler.
		 * <pre>
		 * $.request('get', '/weather.do')
		 *     .then(function(txt) {
		 *        showWeather(txt);
		 *     }
		 *     .then(function() {
		 *        return $.request('get', '/traffic.do');
		 *     }
		 *     .then(function(txt) {
		 *        showTraffic(txt);
		 *     }
		 *     .then(function() {
		 *        alert('All result displayed');
		 *     }, function() {
		 *        alert('An error occurred');
		 *     });
		 * </pre>
		 *
		 * @param onSuccess optional a callback function to be called when the operation has been completed successfully. The exact arguments it receives depend on the operation.  
		 *                           If the function returns a ##promise#Promise##, that Promise will be evaluated to determine the state of the promise returned by <var>then()</var>. If it returns any other value, the 
		 *                           returned Promise will also succeed. If the function throws an error, the returned Promise will be in error state.
		 *                           Pass <var>null</var> or <var>undefined</var> if you do not need the success handler. 
		 * @param onError optional a callback function to be called when the operation failed. The exact arguments it receives depend on the operation. If the function returns a ##promise#Promise##, that promise will
		 *                           be evaluated to determine the state of the Promise returned by <var>then()</var>. If it returns anything else, the returned Promise will 
		 *                           have success status. If the function throws an error, the returned Promise will be in the error state.
		 *                           You can pass <var>null</var> or <var>undefined</var> if you do not need the error handler. 
		 * @return a new ##promise#Promise## object. If you specified a callback for success or error, the new Promises's state will be determined by that callback if it is called.
		 *         If no callback has been provided and the original Promise changes to that state, the new Promise will change to that state as well.
		 */   
		var then = set['then'] = function (onFulfilled, onRejected) {
			var promise2 = promise();
			var callCallbacks = function() {
				try {
					var f = (state ? onFulfilled : onRejected);
					if (isFunction(f)) {
		   				(function resolve(x) {
		   					try {
			   					var then, cbCalled = 0;
				   				if ((isObject(x) || isFunction(x)) && isFunction(then = x['then'])) {
										if (x === promise2)
											throw new TypeError();
										then['call'](x, function(x) { if (!cbCalled++) resolve(x); }, function(value) { if (!cbCalled++) promise2(_false,[value]);});
										promise2['stop0'] = x['stop'];
				   				}
				   				else
				   					promise2(_true, [x]);
		   					}
		   					catch(e) {
		   						if (!cbCalled++) 
		   							promise2(_false, [e]);
		   					}
		   				})(call(f, undef, values));
		   			}
		   			else
		   				promise2(state, values);
				}
				catch (e) {
					promise2(_false, [e]);
				}
			};
			promise2['stop0'] = set['stop'];
			if (state != _null)
				setTimeout(callCallbacks, 0);
			else
				deferred.push(callCallbacks);
			return promise2;
		};

		/*$
		 * @id always
		 * @group REQUEST
		 * @name promise.always()
		 * @syntax promise.always(callback)
		 * @configurable default
		 * @module WEB+UTIL
		 * Registers a callback that will always be called when the ##promise#Promise##'s operation ended, no matter whether the operation succeeded or not.
		 * This is a convenience function that will call ##then() with the same function for both arguments. It shares all of its semantics.
		 *
		 * @example Simple handler for a HTTP request.
		 * <pre>
		 * $.request('get', '/weather.html')
		 *     .always(function() {
		 *        alert('Got response or error!');
		 *     });
		 * </pre>
		 *
		 * @param callback a function to be called when the operation has been finished, no matter what its result was. The exact arguments depend on the operation and may
		 *                 vary depending on whether it succeeded or not. If the function returns a ##promise#Promise##, that Promise will
		 *                 be evaluated to determine the state of the returned Promise. If provided and it returns regularly, the returned promise will 
		 *                 have success status. If it throws an error, the returned Promise will be in the error state.
		 * @return a new ##promise#Promise## object. Its state is determined by the callback.
		 */
	   	set['always'] = function(func) { return then(func, func); };

		/*$
		 * @id error
		 * @group REQUEST
		 * @name promise.error()
		 * @syntax promise.error(callback)
		 * @configurable default
		 * @module WEB, UTIL
		 * Registers a callback that will be called when the operation failed.
		 * This is a convenience function that will invoke ##then() with only the second argument set.  It shares all of its semantics.
		 *
		 * @example Simple handler for a HTTP request.
		 * <pre>
		 * $.request('get', '/weather.html')
		 *     .error(function() {
		 *        alert('Got error!');
		 *     });
		 * </pre>
		 *
		 * @param callback a function to be called when the operation has failed. The exact arguments depend on the operation. If the function returns a ##promise#Promise##, that Promise will
		 *                           be evaluated to determine the state of the returned Promise. If it returns regularly, the returned Promise will 
		 *                           have success status. If it throws an error, the returned Promise will be in error state.
		 * @return a new ##promise#Promise## object. Its state is determined by the callback.
		 */  
	   	set['error'] = function(func) { return then(0, func); };
	   	/*$
	   	 * @stop
	   	 */
	   	// @condblock promise
	   	return set;
	}
	// @condend promise

	///#/snippet extrasFunctions
	///#snippet extrasDocs
 	/*$
	 * @id length
	 * @group SELECTORS
	 * @requires dollar
	 * @name list.length
	 * @syntax length
   	 * @module WEB, UTIL
	 * 
	 * Contains the number of elements in the ##list#Minified list##.
	 * 
	 * @example With Web module:
	 * <pre>
	 * var list = $('input');
	 * var myValues = {};
	 * for (var i = 0; i &lt; list.length; i++)
	 *    myValues[list[i].name] = list[i].value;
	 * </pre>
	 * 
	 * @example With Util module:
	 * <pre>
	 * var list = _(1, 2, 3);
	 * var sum = 0;
	 * for (var i = 0; i &lt; list.length; i++)
	 *    sum += list[i];
	 * </pre>
	 */
	/*$
	 * @stop 
	 */
	///#/snippet extrasDocs

	///#snippet utilM

	/*$
	 * @id listctor
	 */
	/** @constructor */
	function M(list, assimilateSublists) {
		var self = this, idx = 0;
		if (list)
			for (var i = 0, len = list.length; i < len; i++) {
				var item = list[i];
				if (assimilateSublists && isList(item))
					for (var j = 0, len2 = item.length; j < len2; j++)
						self[idx++] = item[j];
				else 
					self[idx++] = item;
			}
		else
			self[idx++] = assimilateSublists;

		self['length'] = idx;
		self['_'] = _true;
	}

	function _() {
		return new M(arguments, _true);
	}

	///#/snippet utilM

	//// LIST FUNCTIONS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	copyObj({
		///#snippet utilListFuncs
	/*$
	 * @id each
	 * @group LIST
	 * @requires
	 * @configurable default
	 * @name .each()
	 * @altname _.each()
	 * @syntax list.each(callback)
	 * @syntax _.each(list, callback)
	 * @module UTIL, WEB
	 * Invokes the given function once for each item in the list. The function will be called with the item as first parameter and 
	 * the zero-based index as second. Unlike JavaScript's built-in <var>forEach()</var> it will be invoked for each item in the list, 
	 * even if it is <var>undefined</var>.
	 *
	 * @example Creates the sum of all list entries. 
	 * <pre>
	 * var sum = 0;
	 * _(17, 4, 22).each(function(item, index) {
	 *     sum += item;
	 * });
	 * </pre>
	 *
	 * @example The previous example with a native array:
	 * <pre>
	 * var sum = 0;
	 * _.each([17, 4, 22], function(item, index) {
	 *     sum += item;
	 * });
	 * </pre>
	 * 
	 * @example This goes through all h2 elements of the class 'section' on a web page and changes their content:
	 * <pre>
	 * $('h2.section').each(function(item, index) {
	 *     item.innerHTML = 'Section ' + index + ': ' + item.innerHTML;
	 * });
	 * </pre>
	 * 
	 * @param list a list to iterate. Can be an array, a ##list#Minified list## or any other array-like structure with 
	 *             <var>length</var> property.
	 * @param callback The callback <code>function(item, index)</code> to invoke for each list element. 
	 *                 <dl><dt>item</dt><dd>The current list element.</dd>
	 *                 <dt>index</dt><dd>The second the zero-based index of the current element.</dd>
	 *                 <dt class="this">this</dt><dd>This list.</dd></dl>
	 *                 The callback's return value will be ignored.
	 * @return the list
	 * 
	 * @see ##per() works like <var>each()</var>, but wraps the list elements in a list.
	 * @see ##find() can be used instead of <var>each()</var> if you need to abort the loop.
	 * @see ##eachObj() iterates through the properties of an object.
	 */
	'each': listBind(each),

	/*$
	 * @id filter
	 * @group LIST
	 * @requires 
	 * @configurable default
	 * @name .filter()
	 * @altname _.filter()
	 * @syntax list.filter(filterFunc)
	 * @syntax list.filter(value)
	 * @syntax _.filter(list, filterFunc)
	 * @syntax _.filter(list, value)
   	 * @module WEB, UTIL
	 * Creates a new ##list#Minified list## by taking an existing list and omitting certain elements from it. You
	 * can either specify a callback function to approve those items that will be in the new list (all modules), or 
	 * you can pass a value to remove from the new list (Util module only).
	 *  
	 * If the callback function returns true, the item is shallow-copied in the new list, otherwise it will be removed.
	 * For values, a simple equality operation (<code>==</code>) will be used.
	 *
	 * @example Removing all instances of the number 10 from a list:
	 * <pre>
	 * var list = _([4, 10, 22, 7, 2, 19, 10]).filter(10);
	 * </pre>
	 *
	 * @example Removing all numbers over 10 from a list:
	 * <pre>
	 * var list = _([4, 22, 7, 2, 19]).filter(function(item, index) {
	 *     return item &lt;= 10;
	 * });
	 * </pre>
	 * 
	 * @example The previous example with a native array is input. Note that the result is always a ##list#Minified list##:
	 * <pre>
	 * var list = _.filter([4, 22, 7, 2, 19], function(item, index) {
	 *     return item &lt;= 10;
	 * });
	 * </pre>
	 * 
	 * @example Creates a list of all unchecked checkboxes on a web page:
	 * <pre>
	 * var list = $('input').filter(function(item, index) {
	 *     return item.getAttribute('type') == 'checkbox' && item.checked;
	 * });
	 * </pre>
	 * 
	 * @param list a list to filter. A list to use as input. Can be an array, a ##list#Minified list## or any other array-like structure with 
	 *             <var>length</var> property.
	 * @param filterFunc The filter callback <code>function(item, index)</code> that decides which elements to include:
	 *        <dl><dt>item</dt><dd>The current list element.</dd>
	 *        <dt>index</dt><dd>The second the zero-based index of the current element.</dd>
	 *        <dt class="this">this</dt><dd>This list.</dd>
	 *        <dt class="returnValue">(callback return value)</dt><dd><var>true</var> to include the item in the new list, <var>false</var> to omit it.</dd></dl>  
	 * @param value a value to remove from the list. It will be determined which elements to remove using <code>==</code>. Must not
	 *              be a function. Requires Util module.
	 * @return the new, filtered ##list#list##
	 * 
	 * @see ##only() offers selector-based filtering.
	 */
	'filter': listBindArray(filter),

	/*$ 
	 * @id collect 
	 * @group LIST 
	 * @requires 
	 * @configurable default 
	 * @name .collect()
	 * @altname _.collect
	 * @syntax list.collect(collectFunc) 
	 * @syntax _.collect(list, collectFunc)
   	 * @module WEB, UTIL
	 * Creates a new ##list#Minified list## from the current list using the given callback function. 
	 * The callback is invoked once for each element of the current list. The callback results will be added to the result list. 
	 * The callback can return 
	 * <ul> 
	 * <li>an array or another list-like object. Its content will be appended to the resulting list.</li> 
	 * <li>a regular object which will be appended to the list</li> 
	 * <li><var>null</var> (or <var>undefined</var>), which means that no object will be added to the list. 
	 * If you need to add <var>null</var> or <var>undefined</var> to the result list, put it into a single-element array.</li> 
	 * </ul>
	 * 
	 * @example Goes through a list of numbers. Numbers over 10 will be removed. Numbers 5 and below stay. Numbers between 6 and 
	 * 10 will be replaced by two numbers whose sum is the original value.
	 * <pre> 
	 * var texts = _(3, 7, 11, 5, 19, 3).collect(function(number, index) { 
	 *     if (number > 10)
	 *         return null;           // remove numbers >10
	 *     else if (number > 5)
	 *         return [5, number-5];  // replace with two entries
	 *     else
	 *         return number;         // keep lower numbers
	 * }); 
	 * </pre> 
	 *  
	 * @example Goes through input elements on a web page. If they are text inputs, their value will be added to the list: 
	 * <pre> 
	 * var texts = $('input').collect(function(input) { 
	 *     if (input.getAttribute('type') != null || input.getAttribute('type') == 'text') 
	 *         return input.value; 
	 *     else 
	 *         return null; // ignore 
	 * }); 
	 * </pre> 
	 * 
	 * @example Creates a list of all children of the selected list. 
	 * <pre> 
	 * var childList = $('.mySections').collect(function(node) { 
	 *     return node.childNodes; // adds a while list of nodes 
	 * }); 
	 * </pre> 
	 * 
	 * @example Goes through selected input elements. For each hit, the innerHTML is added twice, once in lower case and once in upper case: 
	 * <pre> 
	 * var elements = $('input.myTexts').collect(function(item) { 
	 *     return [item.innerHTML.toLowerCase(), item.innerHTML.toUpperCase()]; 
	 * }); 
	 * </pre> 
	 * 
	 * @param list a list to transform. Can be an array, a ##list#Minified list## or any other array-like structure with 
	 *             <var>length</var> property.
	 * @param collectFunc The callback <code>function(item, index)</code> to invoke for each item:
	 * <dl><dt>item</dt><dd>The current list element.</dd><dt>index</dt><dd>The second the zero-based index of the current element.</dd>
	 *        <dt class="this">this</dt><dd>This list.</dd>
	 *        <dt class="returnValue">(callback return value)</dt><dd>If the callback returns a list, its elements will be added to 
	 *        the result list. Other objects will also be added. Nulls and <var>undefined</var> will be ignored and not be added to 
	 *        the new result list. </dd></dl>
	 * @return the new ##list#list##
	 * 
	 * @see ##map() is a simpler version of <var>collect()</var> that can be useful if there is a 1:1 mapping between
	 *      input and output list.
	 */ 
	'collect': listBindArray(collect),

	/*$ 
	 * @id map 
	 * @group LIST 
	 * @requires
	 * @configurable default 
	 * @name .map()
	 * @altname _.map()
	 * @syntax list.map(mapFunc) 
	 * @syntax _.map(list, mapFunc)
   	 * @module WEB, UTIL
	 * Creates a new ##list#Minified list## from the current list using the given callback function. 
	 * The callback is invoked once for each element of the current list. The callback results will be added to the result list.
	 *  
	 * <var>map()</var> is a simpler version of ##collect(). Unlike <var>collect()</var>, it always creates lists of the same size as the input list, but 
	 * it is easier to use if the resulting list should contain nulls or nested list.
	 * 
	 * @example Goes through a list of numbers and creates a new list with each value increased by 1:
	 * <pre> 
	 * var inced = _(3, 7, 11, 5, 19, 3).map(function(number, index) { 
	 *     return number + 1;
	 * }); 
	 * </pre> 
	 * 
	 * @example The previous example with a native array is input. Note that the result is always a ##list#Minified list##:
	 * <pre> 
	 * var inced = _.map([3, 7, 11, 5, 19, 3], function(number, index) { 
	 *     return number + 1;
	 * }); 
	 * </pre> 
	 * 
	 * @param list a list to transform. Can be an array, a ##list#Minified list## or any other array-like structure with 
	 *             <var>length</var> property.
	 * @param mapFunc The callback <code>function(item, index)</code> to invoke for each item:
	 * <dl><dt>item</dt><dd>The current list element.</dd><dt>index</dt><dd>The second the zero-based index of the current element.</dd>
	 *        <dt class="this">this</dt><dd>This list.</dd>
	 *        <dt class="returnValue">(callback return value)</dt><dd>This value will replace the original value in the new list.</dd></dl>
	 * @return the new ##list#list##
	 * 
	 * @see ##collect() is a more powerful version of <var>map()</var>.
	 */ 
	'map': listBindArray(map),

	/*$ 
	 * @id toobject
	 * @group LIST 
	 * @requires
	 * @configurable default 
	 * @name .toObject()
	 * @altname _.toObject()
	 * @syntax list.toObject(value)
	 * @syntax _.toObject(keyList, value)
	 * @module UTIL
	 * Creates an object map from a list of keys and a single values.
	 * <var>toObject()</var> goes through all values of the key list and adds a property with this key and the given a value.

	 * @example Create a simple object map:
	 *  <pre> 
	 *  var map = _.toObject(['a', 'b', 'c'], 1);  // creates {a:1, b:1, c:1}
	 * </pre> 
	 * 
	 * @example Same result, but with a list method:
	 *  <pre> 
	 *  var map = _('a', 'b', 'c').toObject(1);  // creates {a:1, b:1, c:1}
	 * </pre> 
	 * 
	 * @param keyList A list or array to use for the keys of the new object.
	 * @param value the value to use
	 * @return the new object
	 */ 
	'toObject': listBind(toObject),

	/*$ 
	 * @id equals
	 * @group LIST 
	 * @requires
	 * @configurable default 
	 * @name .equals()
	 * @altname _.equals()
	 * @syntax list.equals(otherObject)
	 * @syntax _.equals(thisObject, otherObject)
	 * @module UTIL
	 * Checks whether two values, lists or objects are equal in a deep comparison.
	 * 
	 * First <var>equals()</var> checks whether it got a function as parameter. 
	 * If yes, it will be invoked without arguments and <var>equals()</var> calls itself recursively with the function's result.
	 * 
	 * Once both values are no functions anymore, the values will be evaluated, If the first value is...
	 * <ul><li>...<var>null</var> or <var>undefined</var>, they are only equal if the other one is also either <var>null</var> or <var>undefined</var>.</li>
	 * <li>...a value as defined by ##_.isValue(), but not a Date, they are equal if the other value is the same type and is equal according to the '==' operator.</li>
	 * <li>...a Date, they are equal if the other value is a Date representing the same time.</li>
	 * <li>...a list or array, they are equal if the other value is also either a list or an array, has the same number of items and all items equal the items of the other
	 *         list at the same position. The equality of list items is determined recursively using the same rules, so you can also nest lists.</li>
	 * <li>...a function, it will be invoked without arguments and its return value is evaluated using these rules as if the value has been passed. </li>
	 * <li>...any other object, they are equal if they contain exactly the same keys (as defined by ##_.eachObj()) and all values are equal as determined using these rules
	 *      recursively.</li>
	 * </ul>
	 * 
	 * Please note that, according to the rules, a ##list#Minified list## is equal to an array, as long as their content is equal. <var>equals</var> does not 
	 * differentiate between <var>null</var> and <var>undefined</var>.
	 *
	 * <var>equals</var> is commutative. If you swap the parameters, the result is the same as long as no functions are involved.
	 * 
	 * @example Compare a list and an array:
	 *  <pre> 
	 *  _.equals([1, 2, 3], _(1, 2, 3));  // returns true
	 * </pre> 
	 * 
	 * @example Same result, but with a list method:
	 *  <pre> 
	 *  _(1, 2, 3).equals([1, 2, 3]);  // returns true
	 * </pre> 
	 * 
	 * @param thisObject The first reference to evaluate.
	 * @param otherObject The second reference to evaluate.
	 * @return true if both references are equal. False otherwise.
	 */ 
	'equals': listBind(equals),

	/*$ 
	 * @id sub
	 * @group LIST 
	 * @requires  
	 * @configurable default 
	 * @name .sub()
	 * @altname _.sub()
	 * @syntax list.sub(startIndex) 
	 * @syntax list.sub(startIndex, endIndex) 
	 * @syntax _.sub(list, startIndex) 
	 * @syntax _.sub(list, startIndex, endIndex) 
	 * @module WEB, UTIL
	 * Returns a new ##list#Minified list## containing only the elements in the specified range. If there are no elements in the range,
	 * an empty list is returned.
	 * Negative indices are supported and will be added to the list's length, thus allowing you to specify ranges at the list's end.
	 *
	 * If you only want to have a single element from the list, you can only use ##only().
	 *
	 * @example Takes only the second and third element:
	 * <pre> 
	 * var secndAndThird = _(5, 6, 7, 8, 9).sub(2, 4);
	 * </pre> 
	 *
	 * @example The same using an array:
	 * <pre> 
	 * var secndAndThird = _.sub([5, 6, 7, 8, 9], 2, 4);
	 * </pre> 
	 *
	 * @example Adds some text the 3rd to 5th list elements:
	 * <pre> 
	 * $('#myList li').sub(3, 6).add('Hello');
	 * </pre> 
	 *
	 * @example Clears all elements but the first:
	 * <pre> 
	 * $('#myList li').sub(1).fill();
	 * </pre> 
	 *
	 * @example Changes the class of the last list element:
	 * <pre> 
	 * $('#myList li').sub(-1).set('+lastItem');
	 * </pre> 
	 * 
	 * @param list A list to use as input. Can be an array, a ##list#Minified list## or any other array-like structure with 
	 *             <var>length</var> property.
	 * @param startIndex the 0-based position of the sub-list start. If negative, the list's length is added and the position is relative
	 *                   to the list's end.
	 * @param endIndex optional the 0-based position of the sub-list end. If negative, the list's length is added and the position is relative
	 *                   to the list's end. If omitted or null, all elements following the <var>startIndex</var> are included in the result.
	 * @return a new ##list#list## containing only the items in the index range. 
	 */ 
	'sub': listBindArray(sub),

	/*$ 
	 * @id reverse
	 * @group LIST 
	 * @requires  
	 * @configurable default 
	 * @name .reverse()
	 * @altname _.reverse()
	 * @syntax list.reverse() 
	 * @syntax _.reverse(list) 
	 * @syntax _.reverse(string) 
	 * @module UTIL
	 * Returns a new ##list#Minified list## or string with the input's elements/characters in reverse order. The first element is swapped 
	 * with the last, the second with the second to last and so on.
	 *
	 * @example Changes the order of a list:
	 * <pre> 
	 * var rev = _('a', 'b', 'c').reverse(); // returns _('c', 'b', 'a')
	 * </pre> 
	 * 
	 * @example The same with an array:
	 * <pre> 
	 * var rev = _.reverse(['a', 'b', 'c']); // returns _('c', 'b', 'a')
	 * </pre> 
	 * 
	 * @example Or a string:
	 * <pre> 
	 * var rev = _.reverse("abc"); // returns _("cba")
	 * </pre> 
	 * 
	 * @param list A list to use as input. Can be an array, a ##list#Minified list## or any other array-like structure with 
	 *             <var>length</var> property.
	 * @param string A string to use as input
	 * @return a new ##list#list## or string with the input in reverse order. 
	 */ 
	'reverse': listBind(reverse),

	/*$ 
	 * @id find 
	 * @group LIST 
	 * @requires
	 * @configurable default 
	 * @name .find()
	 * @altname _.find()
	 * @syntax list.find(findFunc) 
	 * @syntax list.find(element) 
	 * @syntax list.find(findFunc, startIndex) 
	 * @syntax list.find(element, startIndex) 
	 * @syntax _.find(list, findFunc) 
	 * @syntax _.find(list, element) 
	 * @syntax _.find(list, findFunc, startIndex) 
	 * @syntax _.find(list, element, startIndex) 
	 * @module WEB, UTIL
	 * Finds a specific value in the list. There are two ways of calling <var>find()</var>:
	 * <ol>
	 * <li>With a value as argument. Then <var>find()</var> will search for the first occurrence of an identical value in the list,
	 *     using the '===' operator for comparisons, and return the index. If it is not found,
	 *     <var>find()</var> returns <var>undefined</var>.</li>
	 * <li>With a callback function. <var>find()</var> will then call the given function for each list element until the function 
	 *     returns a value that is not <var>null</var> or <var>undefined</var>. This value will be returned.</li>
	 * </ol>
	 * 
	 * <var>find()</var> can also be used as an alternative to ##each() if you need to abort the loop.
	 *
	 * @example Finds the first negative number in the list:
	 * <pre> 
	 * var i = _(1, 2, -4, 5, 2, -1).find(function(value, index) { if (value &lt; 0) return index; }); // returns 2
	 * </pre> 

	 * @example Finds the index of the first 5 in the array:
	 * <pre> 
	 * var i = _.find([3, 6, 7, 6, 5, 4, 5], 5); // returns 4 (index of first 5)
	 * </pre> 
	 *
	 * @example Determines the position of the element with the id '#wanted' among all li elements:
	 * <pre> 
	 * var elementIndex = $('li').find($$('#wanted'));
	 * </pre> 
	 * 
	 * @example Goes through the elements to find the first div that has the class 'myClass', and returns this element:
	 * <pre> 
	 * var myClassElement = $('div').find(function(e) { if ($(e).is('.myClass')) return e; });
	 * </pre> 
	 * 
	 * @param list A list to use as input. Can be an array, a ##list#Minified list## or any other array-like structure with 
	 *             <var>length</var> property.
	 * @param findFunc The callback <code>function(item, index)</code> that will be invoked for every list item until it returns a non-null value:
	 * <dl><dt>item</dt><dd>The current list element.</dd><dt>index</dt><dd>The second the zero-based index of the current element.</dd>
	 *        <dt class="this">this</dt><dd>This list.</dd>
	 *        <dt class="returnValue">(callback return value)</dt><dd>If the callback returns something other than <var>null</var> or
	 *        <var>undefined</var>, <var>find()</var> will return it directly. Otherwise it will continue. </dd></dl>
	 * @param element the element to search for
	 * @param startIndex optional the 0-based index of the first element to search.
	 * @return if called with an element, either the element's index in the list or <var>undefined</var> if not found. If called with a callback function,
	 *         it returns either the value returned by the callback or <var>undefined</var>.
	 *         
	 * @see ##findLast() is the equivalent to <var>find()</var> for the list's end.
	 */ 
 	'find': listBind(find),

	/*$ 
	 * @id findlast
	 * @group LIST 
	 * @requires
	 * @configurable default 
	 * @name .findLast()
	 * @altname _.findLast()
	 * @syntax list.findLast(findFunc) 
	 * @syntax list.findLast(element) 
	 * @syntax list.findLast(findFunc, startIndex) 
	 * @syntax list.findLast(element, startIndex) 
	 * @syntax _.findLast(list, findFunc) 
	 * @syntax _.findLast(list, element) 
	 * @syntax _.findLast(list, findFunc, startIndex) 
	 * @syntax _.findLast(list, element, startIndex) 
	 * @module WEB, UTIL
	 * Finds the last occurrence of value in the list. There are two ways of calling <var>findLast()</var>:
	 * <ol>
	 * <li>With a value as argument. Then <var>findLast()</var> will search for the first occurrence of an identical value in the list,
	 *     using the '===' operator for comparisons, and return the index. If it is not found,
	 *     <var>findLast()</var> returns <var>undefined</var>.</li>
	 * <li>With a callback function. <var>findLast()</var> will then call the given function for each list element until the function 
	 *     returns a value that is not <var>null</var> or <var>undefined</var>. This value will be returned.</li>
	 * </ol>
	 *
	 * @example Finds the first negative number in the list:
	 * <pre> 
	 * var i = _(1, 2, -4, 5, 2, -1, 2).findLast(function(value, index) { if (value &lt; 0) return index; }); // returns 5
	 * </pre> 
	 *
	 * @example Finds the index of the last 5 in the array:
	 * <pre> 
	 * var i = _.findLast([3, 6, 7, 6, 5, 4, 5], 5); // returns 6
	 * </pre> 
	 *
	 * @example Determines the last position of the element with the id '#wanted' among all &lt;li> elements:
	 * <pre> 
	 * var elementIndex = $('li').findLast($$('#wanted'));
	 * </pre> 
	 * 
	 * @example Goes through the elements to find the last &lt;div> that has the class 'myClass', and returns this element:
	 * <pre> 
	 * var myClassElement = $('div').find(function(e) { if ($(e).is('.myClass')) return e; });
	 * </pre> 
	 * 
	 * @param list A list to use as input. Can be an array, a ##list#Minified list## or any other array-like structure with 
	 *             <var>length</var> property.
	 * @param findFunc The callback <code>function(item, index)</code> that will be invoked for every list item until it returns a non-null value:
	 * <dl><dt>item</dt><dd>The current list element.</dd><dt>index</dt><dd>The second the zero-based index of the current element.</dd>
	 *        <dt class="this">this</dt><dd>This list.</dd>
	 *        <dt class="returnValue">(callback return value)</dt><dd>If the callback returns something other than <var>null</var> or
	 *        <var>undefined</var>, <var>find()</var> will return it directly. Otherwise it will continue. </dd></dl>
	 * @param element the element to search for
	 * @param startIndex optional the 0-based index of the first element to search.
	 * @return if called with an element, either the element's index in the list or <var>undefined</var> if not found. If called with a callback function,
	 *         it returns either the value returned by the callback or <var>undefined</var>.
	 *         
	 * @see ##find() is the equivalent to find values at the end of a list.
	 */ 
 	'findLast': listBind(findLast),

	/*$ 
	 * @id startswith 
	 * @group LIST 
	 * @requires
	 * @configurable default 
	 * @name .startsWith()
	 * @altname _.startsWith()
	 * @syntax list.startsWith(otherList) 
	 * @syntax _.startsWith(list, otherList) 
	 * @syntax _.startsWith(baseString, otherString) 
	 * @module UTIL
	 * Checks whether the list or string starts with the other string or list.
	 *
	 * If you compare lists, each item of the other list is compared with the item at the same position of the
	 * base list using ##_.equals(). Arrays can be used interchangably with lists. If the first argument is a list and the second is
	 * not, it will be converted to a list.
	 * 
	 * If you compare strings, each character of the other string is compared with the character at the same position of the
	 * base string.
	 * 
	 *
	 * @example Checks whether a list starts with [1, 2]:
	 * <pre> 
	 * var r = _(1, 2, 3, 4, 5).startsWith([1, 2]);   // returns true
	 * </pre> 

	 * @example The same using an array as base list:
	 * <pre> 
	 * var r = _.startsWith([1, 2, 3, 4, 5], [1, 2]); // returns true
	 * </pre> 

	 * @example Checks a string:
	 * <pre> 
	 * var r = _.startsWith("Cookie", "C"); // returns true
	 * </pre> 
	 *
	 * @param list A list to check. Can be an array, a ##list#Minified list## or any other array-like structure with 
	 *             <var>length</var> property.
	 * @param otherList A list to find at the beginning of the other string. Can be an array, a ##list#Minified list## or any other 
	 *             array-like structure with <var>length</var> property.  If it is not a list, it will be converted into a single-element list.
	 * @param baseString a string to check
	 * @param otherString the string to find at the beginning of the other string
	 * @return true if the base list or string starts with the other list/string. False otherwise.
	 * 
	 * @see ##endsWith() is the equivalent for the list's or string's end.
	 */ 
 	'startsWith': listBind(startsWith),

	/*$ 
	 * @id endswith 
	 * @group LIST 
	 * @requires
	 * @configurable default 
	 * @name .endsWith()
	 * @altname _.endsWith()
	 * @syntax list.endsWith(otherList) 
	 * @syntax _.endsWith(list, otherList) 
	 * @syntax _.endsWith(baseString, otherString) 
	 * @module UTIL
	 * Checks whether the list or string ends with the other string or list.
	 *
	 * If you compare lists, each item of the other list is compared with the item at the same position relative to the end of the
	 * base list using ##_.equals(). Arrays can be used interchangably with lists. If the first argument is a list and the second is
	 * not, it will be converted to a list.
	 * 
	 * If you compare strings, each character of the other string is compared with the character at the same position relative to the end 
	 * of the base string.
	 * 
	 *
	 * @example Checks whether a list ends with [4, 5]:
	 * <pre> 
	 * var r = _(1, 2, 3, 4, 5).startsWith([4, 5]);   // returns true
	 * </pre> 

	 * @example The same using an array as base list:
	 * <pre> 
	 * var r = _.startsWith([1, 2, 3, 4, 5], [4, 5]); // returns true
	 * </pre> 

	 * @example Checks a string:
	 * <pre> 
	 * var r = _.startsWith("Cookie", "okie"); // returns true
	 * </pre> 
	 *
	 * @param list A list to check. Can be an array, a ##list#Minified list## or any other array-like structure with 
	 *             <var>length</var> property.
	 * @param otherList A list to find at the end of the other string. Can be an array, a ##list#Minified list## or any other 
	 *             array-like structure with <var>length</var> property. If it is not a list, it will be converted into a single-element list.
	 * @param baseString a string to check
	 * @param otherString the string to find at the end of the other string
	 * @return true if the base list or string ends with the other list/string. False otherwise.
	 * 
	 * @see ##startsWith() is the equalent for the beginning of a list or string.
	 */ 
 	'endsWith': listBind(endsWith),

	/*$ 
	 * @id contains 
	 * @group LIST 
	 * @requires
	 * @configurable default 
	 * @name .contains()
	 * @altname _.contains()
	 * @syntax list.contains(item) 
	 * @syntax _.contains(list, item) 
	 * @module UTIL
	 * Checks whether the list contains the given item.
	 *
	 * Each item of the other list is compared with the item using ##_.equals(). The function
	 * returns <var>true</var> as soon as one list item equals the requested item.
	 * 
	 *
	 * @example Checks whether a list contains a 5:
	 * <pre> 
	 * var r = _(1, 2, 3, 4, 5).contains(5);   // returns true
	 * </pre> 
	 *
	 * @example The same using an array:
	 * <pre> 
	 * var r = _.contains([1, 2, 3, 4, 5], 5); // returns true
	 * </pre> 
	 *
	 * @param list A list to check. Can be an array, a ##list#Minified list## or any other array-like structure with 
	 *             <var>length</var> property.
	 * @param item The item to search.
	 * @return true if the list contains the item. False otherwise.
	 * 
	 * @see ##find() finds the position of a list element's fist occurrence.
	 * @see ##findLast() finds the last position of a list element.
	 */ 
 	'contains': listBind(contains),

	/*$ 
	 * @id call 
	 * @group LIST 
	 * @requires
	 * @configurable default 
	 * @name .call()
	 * @altname _.call()
	 * @syntax list.call() 
	 * @syntax list.call(args) 
	 * @syntax list.call(fThis) 
	 * @syntax list.call(fThis, args) 
	 * @syntax _.call(list) 
	 * @syntax _.call(list, args) 
	 * @syntax _.call(list, fThis) 
	 * @syntax _.call(list, fThis, args) 
	 * @module UTIL
	 * Calls all functions in the list.
	 *
	 * <var>call</var> goes through all list items and, if they are functions, calls them with the specified arguments. 
	 * Elements that are not functions will be ignored. The return values of the functions will be written into a list
	 * of the same size and order as original list. If a input list item is not a function, the corresponding value in the result 
	 * list will be <var>undefined</var>.
	 *
	 * @param list A list containing the functions to call. Can be an array, a ##list#Minified list## or any other array-like structure with 
	 *             <var>length</var> property.
	 * @param args optional A list or array of arguments to pass to the functions.
	 * @param fThis optional If set, a value to pass as <var>this</var>. Please note that if you use a list as <var>fThis</var>,
	 *              you must set <var>args</var> also to an (possibly empty) array.
	 * @return A list containing the return values of the called functions, or <var>undefined</var> for list items that were not 
	 *         functions.
	 */ 
	'call': listBindArray(callList),

	/*$ 
	 * @id array 
	 * @group LIST 
	 * @requires
	 * @configurable default 
	 * @name .array()
	 * @altname _.array()
	 * @syntax list.array() 
	 * @syntax _.array(list) 
	 * @module UTIL
	 * Converts a ##list#Minified list## or other array-like structure into a native JavaScript array.
	 *
	 * @param list The list to convert. Can be an array, a ##list#Minified list## or any other array-like structure with 
	 *             <var>length</var> property.
	 * @return A native array containing a shallow copy of the input array's values.
	 */
	'array': listBind(array),

	/*$ 
	 * @id unite 
	 * @group LIST 
	 * @requires
	 * @configurable default 
	 * @name .unite()
	 * @altname _.unite()
	 * @syntax list.unite() 
	 * @syntax _.unite(list) 
	 * @module UTIL
	 * Takes a list of functions as input to create a new function that calls all input functions with the same
	 * arguments. 
	 *
	 * @param list The list of functions. Can be an array, a ##list#Minified list## or any other array-like structure with 
	 *             <var>length</var> property.
	 * @return A function that will invoke all underlying functions with the arguments is has been called with. The function
	 *         returns a ##list#Minified list## of result values, using the same mechanics as ##_.call().
	 */
	'unite': listBind(unite), 

	/*$ 
	 * @id uniq 
	 * @group LIST 
	 * @requires
	 * @configurable default 
	 * @name .uniq()
	 * @altname _.uniq()
	 * @syntax list.uniq() 
	 * @syntax _.uniq(list) 
	 * @module UTIL
	 * Takes a list of values and removes all duplicates. If a value occurs more than once in the input list, only the first occurrence
	 * will be kept and all following occurrences will be filtered out.
	 * 
	 * Uses object properties to keep track which values already occurred. This means that it only works with simple values that can
	 * be converted to strings.  
	 *
	 * @param list The list of values. Can be an array, a ##list#Minified list## or any other array-like structure with 
	 *             <var>length</var> property.
	 * @return A ##list#Minified list## without duplicates.
	 */
	'uniq': listBindArray(uniq),

	/*$ 
	 * @id intersection 
	 * @group LIST 
	 * @requires
	 * @configurable default 
	 * @name .intersection()
	 * @altname _.intersection() 
	 * @syntax list.intersection(otherList) 
	 * @syntax _.intersection(list, otherList) 
	 * @module UTIL
	 * Takes two input lists to create a new list containing only those values that exist in both input lists.
	 * 
	 * Uses object properties to keep track which values exist. This means that it only works with simple values that can
	 * be converted to strings.  
	 *
	 * @param list The list of values. Can be an array, a ##list#Minified list## or any other array-like structure with 
	 *             <var>length</var> property.
	 * @param otherList The other list of values. Can be an array, a ##list#Minified list## or any other array-like structure with 
	 *             <var>length</var> property.
	 * @return A ##list#Minified list## containing only the duplicate values.
	 */
	'intersection': listBindArray(intersection), 

	/*$ 
	 * @id join 
	 * @group LIST 
	 * @requires
	 * @configurable default 
	 * @name .join() 
	 * @syntax list.join() 
	 * @syntax list.join(separator) 
	 * @module UTIL
	 * Converts list elements into strings and joins them into a single string, optionally separated with the given separator.
	 * This method is identical to Array's built-in <var>join()</var> method and also uses it internally.
	 *
	 * @example Join a few string:
	 * <pre>var sorted = _('Harry', 'Bert', 'Tom', 'Bo').join(', '); // returns 'Harry, Bert, Tom, Bo'</pre>
	 *
	 * @param separator optional a separator to put between the joined strings. If omitted, the string "," (comma) will be used.
	 * @param otherList The other list of values. Can be an array, a ##list#Minified list## or any other array-like structure with 
	 *             <var>length</var> property.
	 * @return the resulting string
	 */
	'join': function(separator) {
		return map(this, nonOp).join(separator);
	},

	/*$ 
	 * @id reduce 
	 * @group LIST 
	 * @requires
	 * @configurable default 
	 * @name .reduce() 
	 * @syntax list.reduce(callback, memo) 
	 * @module UTIL
	 * Reduces the list into a single value with the help of a callback function. This callback will be called once for
	 * each element, with the return value of the previous invocation as parameter. <var>reduce()</var> returns the
	 * return value of the last invocation.
	 *
	 * @example Sum up some numbers:
	 * <pre>var sum = _(1, 2, 3).reduce(function(memo, item, index) { return memo + item; }, 0);
	 *
	 * @param callback The callback <code>function(memo, item, index)</code> to invoke for each list element. 
	 *                 <dl><dt>memo</dt><dd>On the first invocation, the <var>memo</var> argument given to <var>reduce()</var>. On
	 *                 all further invocation, this is the return value of the previous invocation.</dd>
	 *                 <dt>item</dt><dd>The current list element.</dd>
	 *                 <dt>index</dt><dd>The second the zero-based index of the current element.</dd>
	 *                 <dt class="this">this</dt><dd>This list.</dd>
	 *                 <dt class="returnValue">(callback return value)</dt><dd>Will be used as <var>memo</var> 
	 *                 argument of the next invocation. The last return value will be returned by <var>reduce()</var>.</dd></dl>
	 *                 
	 * @param memo the initial value that will be passed as <var>memo</var> argument to the callback on its very first invocation.
	 * @return the resulting value. If the list was empty, it returns the <var>memo</var> argument.
	 */
	'reduce': function(callback, memo) {
		each(this, function(elem, index) {
			memo = callback.call(this, memo, elem, index);
		});
		return memo;
	},

	/*$ 
	 * @id sort 
	 * @group LIST 
	 * @requires
	 * @configurable default 
	 * @name .sort() 
	 * @syntax list.sort() 
	 * @syntax list.sort(cmpFunc) 
	 * @module UTIL
	 * Sorts the list elements and returns a new, sorted list. You can specify a function to compare two elements.
	 * If you don't, the list elements will be converted into strings and sorted lexicographically.
	 * 
	 * <var>sort()</var> uses Array's method of the same name internally and shares its properties.
	 *    
	 * @example Sort a few names:
	 * <pre>var sorted = _('Harry', 'Bert', 'Tom', 'Bo').sort(); // returns _('Bo', 'Bert', 'Harry', 'Tom')</pre>
	 *    
	 * @param cmpFunc optional an optional <code>function(a, b)</code> to compare two list elements. It must return a number &lt;0 if <var>a</var> is smaller, than <var>b</var> 
	 *                         &gt;0 if <var>b</var> is larger and 0 if both are equal. If the function is omitted, the list elements will be converted into strings and compared 
	 *                        lexicographically.
	 * @return a new, sorted list
	 */
	'sort': function(func) {
		return new M(map(this, nonOp).sort(func));
	}
	/*$
	 * @stop 
	 */
	//@cond !sort dummySort:0
	,
	///#/snippet utilListFuncs
	///#snippet webListFuncs

	/*$
	 * @id remove
	 * @group SELECTORS
	 * @requires dollar
	 * @configurable default
	 * @name .remove()
	 * @syntax list.remove()
 	 * @module WEB
	 * Removes all elements in the list from the DOM tree.
	 * 
	 * On Minified builds with IE compatibility, <var>remove()</var> will also remove all event handlers in the
	 * removed DOM nodes to prevent memory leaks.
	 * 
	 * @example Removes the element with the id 'myContainer', including all children, from the DOM tree.
	 * <pre>
	 * $('#myContainer').remove(); 
	 * </pre>
	 */
	 'remove': function() {
		flexiEach(this, function(obj) {

			obj['parentNode'].removeChild(obj);
		});
	 },

 	/*$
 	 * @id text
 	 * @group SELECTORS
 	 * @requires dollar
 	 * @configurable default
 	 * @name .text()
 	 * @syntax list.text()
 	 * @module WEB
 	 * Returns the concatenated text content of all nodes in the list. 
 	 * This is done by going recursively through all elements and their children. The values of text and CDATA nodes
 	 * will be appended to the resulting string. Without legacy support, Minified will obtain the data using
 	 * the <var>textContent</var> property of all nodes.
 	 * 
 	 * Please note that, unlike jQuery's <var>text()</var>, Minified's will not set text content. Use ##fill() to set text.
 	 * 
 	 * @example Returns the text of the element with the id 'myContainer'.
 	 * <pre>
 	 * var content = $('#myContainer').text(); 
 	 * </pre>
 	 * 
 	 * @return the concatenated text content of the nodes
 	 */
 	'text': function () {
		return collector(flexiEach, this, function(e) {return e['textContent'];})['join']('');
 	},

 	/*$
 	 * @id trav
 	 * @group SELECTORS
 	 * @requires each
 	 * @configurable default
 	 * @name .trav()
 	 * @syntax list.trav(property)
 	 * @syntax list.trav(property, selector)
 	 * @syntax list.trav(property, selector, maxDepth)
 	 * @syntax list.trav(property, maxDepth)
 	 * @syntax list.trav(property, filterFunc)
 	 * @syntax list.trav(property, filterFunc, maxDepth)
 	 * @module WEB
 	 * Traverses each DOM node in the list using the given property; creates a new list that includes each visited node,
 	 * optionally filtered by the given selector.
 	 * 
 	 * <var>trav()</var> traverses the DOM tree for each list element until it finds a <var>null</var>.  
 	 * All visited nodes that match the given selector are added to the result list. If no selector is given,
 	 * only elements will be added. Duplicates will be automatically be removed from the resulting list.
 	 * 
 	 * Instead of the selector, you can also specify a function that evaluates whether an element matches.
 	 * 
 	 * DOM provides the following properties for traveral:
 	 * <table>
 	 * <tr><th>firstChild</th><td>Contains the first child.</td></tr>
 	 * <tr><th>firstElementChild</th><td>Contains the first element (not in IE &lt; 9).</td></tr>
 	 * <tr><th>lastChild</th><td>Contains the last child element.</td></tr>
 	 * <tr><th>lastElementChild</th><td>Contains the last child element (not in IE &lt; 9).</td></tr>
 	 * <tr><th>nextElementSibling</th><td>Contains the element that follows the current node (not in IE &lt; 9).</td></tr>
 	 * <tr><th>nextSibling</th><td>Contains the node that follows the current node (see also ##next() ).</td></tr>
 	 * <tr><th>parentNode</th><td>Contains the node's parent (see also ##up() ).</td></tr>
 	 * <tr><th>previousElementSibling</th><td>Contains the element that precedes the current node (not in IE &lt; 9).</td></tr>
 	 * <tr><th>previousSibling</th><td>Contains the node that precedes the current node.</td></tr>
 	 * </table>
 	 * 
 	 * @example Returns a list of all parent nodes, direct and indirect:
 	 * <pre>
 	 * var parents = $('.myElements').trav('parentNode'); 
 	 * </pre>
 	 *
 	 * @example Returns a list of all direct siblings of the original list:
 	 * <pre>
 	 * var parents = $('.sibs').trav('nextSibling', '*', 1); 
 	 * </pre>
 	 * 
 	 * @example Returns a list of all parent nodes, direct and indirect, that have the class 'specialParent':
 	 * <pre>
 	 * var parents = $('.myElements').trav('parentNode', '.specialParent'); 
 	 * </pre>
 	 * 
 	 * @example Returns a list of all direct parent nodes that are tables and have the class 'specialParent':
 	 * <pre>
 	 * var parents = $('.myElements').trav('parentNode', 'table.specialParent', 1); 
 	 * </pre>
 	 *
  	 * @parm property the name of the property to traverse.
 	 * @param selector optional any selector valid for #dollar#$(), including CSS selectors and lists.
 	 *        <br/>Selectors are optimized for '*', '.classname', 'tagname' and 'tagname.classname'. The performance for other selectors
 	 *        is relative to the number of matches for the selector in the document. Default is '*', which includes all elements
 	 *        (but no other nodes such as text nodes).
	 * @param filterFunc a <code>function(node)</code> returning <var>true</var> for those nodes that match.
 	 * @param maxDepth optional the maximum number of steps to traverse. Defaults to unlimited.
 	 * @return the new list containing all visited nodes. Nodes of the original list are not included, unless they
 	 *         have been visited when traversing another node. Duplicate nodes will be automatically removed.
 	 *         
 	 * @see ##up() finds exactly one parent element that matches a selector.
 	 * @see ##next() finds one or more siblings that match a selector.
 	 */
	'trav': function(property, selector, maxDepth) {
		var isNum = isNumber(selector);
		var f = getFilterFunc(isNum ? _null : selector); 
		var max = isNum ? selector : maxDepth;
		return new M(collectUniqNodes(this, function(node) {
				var r = [];
				var c = node;
				while ((c = c[property]) && r.length != max) // note that maxDepth and max can be undef
					if (f(c))
						r.push(c);
				return r;
			}));
	},

	/*$
 	 * @id up
 	 * @group SELECTORS
 	 * @requires trav
 	 * @configurable default
 	 * @name .up()
 	 * @syntax list.up()
 	 * @syntax list.up(selector)
 	 * @syntax list.up(filterFunc)
 	 * @module WEB
 	 * Finds the closest parent matching the given selector or filter function for each list element, and returns the results as a list.
 	 * 
 	 * <var>up(selector)</var> is just a shortcut for <code>trav('parentNode', selector, 1)</code>. 
 	 * <var>up()</var> uses ##trav() to traverse the DOM tree using <var>parentNode</var> for each list element, until it either finds a 
 	 * matching element or the tree's root has been reached. All matches will added to the result list, at most one for each item in the
 	 * original list. The result list is filtered to include only unique elements.
	 * 
 	 * Instead of the selector, you can also specify a function that evaluates whether an element matches.
 	 * 
 	 * @example Returns the immediate parent of a node:
 	 * <pre>
 	 * var parent = $('#child').up(); 
 	 * </pre>
 	 *
 	 * @example Returns all table elements that the list elements are directly contained in.
 	 * <pre>
 	 * var tables = $('td.selected').up('table'); 
 	 * </pre>
 	 * 
 	 * @example Returns a list of all direct parent nodes that have a class that starts with 'special':
 	 * <pre>
 	 * var specialParents = $('.myElements').up(function(node) {
 	 *     return /(^|\\s)special/.test(node.className);
 	 * }); 
 	 * </pre>
 	 *
  	 * @parm property the name of the property to traverse.
 	 * @param selector optional any selector valid for #dollar#$(), including CSS selectors and lists.
 	 *        <br/>Selectors are optimized for '*', '.classname', 'tagname' and 'tagname.classname'. The performance for other selectors
 	 *        is relative to the number of matches for the selector in the document. Default is '*', which includes all elements.
	 * @param filterFunc a <code>function(node)</code> returning <var>true</var> for those nodes that match.
 	 * @return the new list that contains matching parent elements. Duplicate nodes will be automatically removed.
 	 *         
 	 * @see ##trav() allows you to match more than one element. You can also select other relatives such as siblings or children.
 	 */
	'up': function(selector) {
		return this['trav']('parentNode', selector, 1);
	},

/*

 */
	/*$
 	 * @id next
 	 * @group SELECTORS
 	 * @requires trav
 	 * @configurable default
 	 * @name .next()
 	 * @syntax list.next()
 	 * @syntax list.next(selector)
 	 * @syntax list.next(maxDepth)
 	 * @syntax list.next(selector, maxDepth)
 	 * @syntax list.next(filterFunc)
 	 * @syntax list.next(filterFunc, maxDepth)
 	 * @module WEB
 	 * Finds the next sibling elements matching the given selector or filter function for each list element, and returns the results as a list.
 	 * By default, only one match is returned per list element, but you can increase the number of results using the second argument. 
 	 * You can get an infinite number of results per list element by passing -1.
 	 * 
 	 * <var>next(selector, maxDepth)</var> is just a shortcut for <code>trav('nextSibling', selector, maxDepth||1)</code>. 
 	 * <var>next()</var> uses ##trav() to traverse the DOM tree using <var>nextSibling</var> for each list element, until it either finds a 
 	 * matching element the specified amount of matches or there are no more elements. All matches will added to the result list. 
 	 * The result list is filtered to include only unique elements.
	 * 
 	 * Instead of the selector, you can also specify a function that evaluates whether an element matches.
 	 * 
 	 * @example Returns the immediate sibling element of a node:
 	 * <pre>
 	 * var parent = $('#child').next(); 
 	 * </pre>
 	 *
 	 * @example Returns the next &lt;hr> element following the node:
 	 * <pre>
 	 * var parent = $('#child').next('hr'); 
 	 * </pre>
 	 *
 	 * @example Returns all &lt;hr> elements following the node:
 	 * <pre>
 	 * var parent = $('#child').next('hr', -1); 
 	 * </pre>
 	 *
 	 * @example Returns the next 2 sibling elements of a node:
 	 * <pre>
 	 * var parent = $('#child').next(2); 
 	 * </pre>
 	 *
 	 * @example Returns all following siblings of a node:
 	 * <pre>
 	 * var parent = $('#child').next(-1); 
 	 * </pre>
 	 *
 	 * @example Returns a list of all direct sibling elements that have a class that starts with 'special':
 	 * <pre>
 	 * var specialSiblings = $('.myElements').next(function(node) {
 	 *     return /(^|\\s)special/.test(node.className);
 	 * }); 
 	 * </pre>
 	 *
  	 * @parm property the name of the property to traverse.
 	 * @param selector optional any selector valid for #dollar#$(), including CSS selectors and lists.
 	 *        <br/>Selectors are optimized for '*', '.classname', 'tagname' and 'tagname.classname'. The performance for other selectors
 	 *        is relative to the number of matches for the selector in the document. Default is '*', which includes all elements.
	 * @param filterFunc a <code>function(node)</code> returning <var>true</var> for those nodes that match.
 	 * @param maxSiblings optional the maximum number of siblings to include per list element. Defaults to 1.
 	 * @return the new list that contains matching siblings elements. Duplicate nodes will be automatically removed.
 	 *         
 	 * @see ##trav() allows you to select other relatives such as preceding siblings or children.
 	 */
	'next': function(selector, maxSiblings) {
		return this['trav']('nextSibling', selector, maxSiblings||1);
	},

 	/*$
 	 * @id select
 	 * @group SELECTORS
 	 * @requires dollar
 	 * @configurable default
 	 * @name .select()
 	 * @syntax list.select(selector)
 	 * @syntax list.select(selector, childrenOnly)
 	 * @module WEB
 	 * Executes a selector with the list as context. <code>list.select(selector, childrenOnly)</code> is equivalent 
 	 * to <code>$(selector, list, childrenOnly)</code>. 
 	 * 
 	 * @example Returns a list of all list elements:
 	 * <pre>
 	 * var parents = $('ol.myList').select('li', true); 
 	 * </pre>
 	 * 
 	 * @example Returns a list of all child elements:
 	 * <pre>
 	 * var children = $('.myElements').select('*', true); 
 	 * </pre>
 	 * 
 	 * @param selector a selector or any other valid first argument for #dollar#$().
 	 * @param childrenOnly optional if set, only direct children of the context nodes are included in the list. Children of children will be filtered out. If omitted or not 
 	 *             true, all descendants of the context will be included. 
 	 * @return the new list containing the selected descendants.
 	 * 
 	 * @see ##only() executes a selector on the list elements, instead of their descendants.
 	 */
	'select': function(selector, childOnly) {
		return $(selector, this, childOnly);
	},

 	/*$
 	 * @id is
 	 * @group SELECTORS
 	 * @requires find each
 	 * @configurable default
 	 * @name .is()
 	 * @syntax list.is()
 	 * @syntax list.is(selector)
 	 * @syntax list.is(filterFunc)
 	 * @module WEB
 	 * Checks whether all elements in the list match the given selector. Returns <var>true</var> if they all do, or <var>false</var>
 	 * if at least one does not.
 	 * 
 	 * One common use for <var>is()</var> is to check whether an element has a certain CSS class.
 	 * 
 	 * Please note that this method is optimized for the four simple selector forms '*', '.classname', 'tagname' 
 	 * and 'tagname.classname'. If you use any other kind of selector, be aware that selectors that match
 	 * many elements in the document can be slow.
 	 * 
 	 * @example Checks whether the element has the class 'myClass':
 	 * <pre>
 	 * var isMyClass = $('#myElement').is('.myClass'); 
 	 * </pre>
 	 * 
 	 * @example Checks whether the list contains only table rows:
 	 * <pre>
 	 * var areRows = $('.myRows').is('tr'); 
 	 * </pre>
 	 * 
 	 * @param selector optional any selector valid for #dollar#$(), including CSS selectors and lists.
 	 *        <br/>Selectors are optimized for '*', '.classname', 'tagname' and 'tagname.classname'. The performance for other selectors
 	 *        is relative to the number of matches for the selector in the document. Default is '*', which checks whether all list items
 	 *        are HTML elements.
 	 * @param filterFunc a <code>function(node)</code> returning <var>true</var> for those nodes that are approved.
 	 * @return <var>true</var> if all list elements match the selector. <var>false</var> otherwise.
 	 * 
 	 * @see ##only() removes elements from a list that do not match a selector.
 	 */
	'is': function(selector) {
		return !this['find'](getInverseFilterFunc(selector));
	},

 	/*$
 	 * @id only
 	 * @group SELECTORS
 	 * @requires filter
 	 * @configurable default
 	 * @name .only()
 	 * @syntax list.only()
 	 * @syntax list.only(selector)
 	 * @syntax list.only(filterFunc)
 	 * @syntax list.only(index)
	 * @module COMMENT only(index) is always available. All others variants are only in the Web module.
 	 * Returns a new list that contains only those elements that match the given selector, match the callback function
 	 * or have the given index. If no parameter has been given, the method keeps all HTML elements 
 	 * and removes everything else (same as '*').
 	 * 
 	 * When you use selectors, please note that this method is optimized for the four simple 
 	 * selector forms '*', '.classname', 'tagname' and 'tagname.classname'. If you use any other kind of 
 	 * selector, be aware that selectors that match many elements can be slow.
 	 * 
 	 * @example Returns only those list elements have the classes 'listItem' and 'myClass':
 	 * <pre>
 	 * var myLis = $('li.listItem').only('.myClass'); 
 	 * </pre>
 	 * 
 	 * @example Returns a list of all forms:
 	 * <pre>
 	 * var forms = $('#content *').only('form'); 
 	 * </pre>
 	 * 
 	 * @param selector any selector valid for #dollar#$(), including CSS selectors and lists. 
 	 *        <br/>Selectors are optimized for '*', '.classname', 'tagname' and 'tagname.classname'. The performance for other selectors
 	 *        depends on the number of matches for the selector in the document. Default is '*', which keeps all elements
 	 *        (but no other nodes such as text nodes).
 	 * @param filterFunc a <code>function(node)</code> returning <var>true</var> for those nodes that are approved.
 	 * @param index the index of the element to keep. All elements with other index will be omitted. If there is no element
 	 *        with this index in the list, the returned list is empty.
 	 * @return a new list containing only elements matched by the selector/function/index.
 	 * 
 	 * @see ##not() creates a list of all elements not matching the selector.
 	 * @see ##select() executes a selector on the descendants of the list elements.
 	 * @see ##filter() offers function-based filtering.
 	 */
	'only': function(selector) {
		return new M(filter(this, getFilterFunc(selector)));
	},

 	/*$
 	 * @id not
 	 * @group SELECTORS
 	 * @requires filter
 	 * @configurable default
 	 * @name .not()
 	 * @syntax list.not()
 	 * @syntax list.not(selector)
 	 * @syntax list.not(filterFunc)
 	 * @syntax list.not(index)
 	 * @module WEB
 	 * Returns a new list that contains only those elements that do not match the given selector, callback function
 	 * or have the given index. If no parameter has been given, the method removes all HTML elements 
 	 * and keeps the rest (same as '*').
 	 * 
 	 * When you use selectors, please note that this method is optimized for the four simple 
 	 * selector forms '*', '.classname', 'tagname' and 'tagname.classname'. If you use any other kind of 
 	 * selector, be aware that selectors that match many elements can be slow.
 	 * 
 	 * @example Returns only those list elements have the classes 'listItem' but not 'myClass':
 	 * <pre>
 	 * var myLis = $('li.listItem').not('.myClass'); 
 	 * </pre>
 	 * 
 	 * @example Returns a list of all elements except forms:
 	 * <pre>
 	 * var forms = $('#content *').not('form'); 
 	 * </pre>
 	 * 
 	 * @param selector any selector valid for #dollar#$(), including CSS selectors and lists. 
 	 *        <br/>Selectors are optimized for '*', '.classname', 'tagname' and 'tagname.classname'. The performance for other selectors
 	 *        depends on the number of matches for the selector in the document. Default is '*', which removes all elements
 	 *        (but keeps other nodes such as text nodes).
 	 * @param filterFunc a <code>function(node)</code> returning <var>true</var> for those nodes that should be removed.
 	 * @param index the index of the element to remove. All elements with other index will be kept. If there is no element
 	 *        with this index in the list, the returned list is identical to the original list.
 	 * @return a new list containing only elements not matched by the selector/function/index.
 	 * 
 	 * @see ##only() is the opposite of <var>not()</var> - it keeps all elements that match the selector.
 	 */
	'not': function(selector) {
		return new M(filter(this, getInverseFilterFunc(selector)));
	},

  	/*$
 	 * @id get
 	 * @group SELECTORS
 	 * @requires dollar
 	 * @configurable default
 	 * @name .get()
 	 * @syntax list.get(name)
 	 * @syntax list.get(name, toNumber)
 	 * @syntax list.get(list)
 	 * @syntax list.get(list, toNumber)
 	 * @syntax list.get(map)
 	 * @syntax list.get(map, toNumber)
 	 * @module WEB
 	 * Retrieves properties, attributes and styles from the list's first element. The syntax to request those values is mostly identical with ##set(). You can either
 	 * get a single value if you specify only one name, or get an object map when you specify several names using an array or an object map.
 	 * 
	 * The <var>name</var> parameter defines what kind of data you are reading. The following name schemes are supported:
	 * <table>
	 * <tr><th>Name Schema</th><th>Example</th><th>Sets what?</th><th>Description</th></tr>
	 * <tr><td>name</td><td>innerHTML</td><td>Property</td><td>A name without prefix of '$' or '@' gets a property of the object.</td></tr>
	 * <tr><td>@name</td><td>@href</td><td>Attribute</td><td>Gets the HTML attribute using getAttribute().</td></tr>
	 * <tr><td>%name</td><td>%phone</td><td>Data-Attribute</td><td>Gets a data attribute using getAttribute(). Data attributes are
	 *         attributes whose names start with 'data-'. '%myattr' and '@data-myattr' are equivalent.</td></tr>
	 * <tr><td>$name</td><td>$fontSize</td><td>CSS Property</td><td>Gets a style using the element's <var>style</var> object. 
	 *             The syntax for the CSS styles is camel-case (e.g. "$backgroundColor", not "$background-color"). Shorthand properties like "border" or "margin" are 
	 *             not supported. You must use the full name, e.g. "$marginTop". Minified will try to determine the effective style
 	 *             and thus will return the value set in style sheets if not overwritten using a regular style.</td></tr>
	 * <tr><td>$</td><td>$</td><td>CSS Classes</td><td>A simple <var>$</var> returns the CSS classes of the element and is identical with "className".</td></tr>
	 * <tr><td>$$</td><td>$$</td><td>Style</td><td>Reads the element's style attribute in a browser-independent way. On legacy IEs it uses
	 *             <var>style.cssText</var>, and on everything else just the "style" attribute.</td></tr>
	 * <tr><td>$$show</td><td>$$show</td><td>Show/Hide</td><td>Returns 1 if the element is visible and 0 if it is not visible. An element counts as
	 * visible if '$visibility' is not 'hidden' and '$display' is not 'none'. Other properties will be ignored, even if they can also be used to hide the element.</td></tr>
	 * <tr><td>$$fade</td><td>$$fade</td><td>Fade Effect</td><td>The name '$$fade' returns the opacity of the element as a value between 0 and 1.
	 * 			   '$$fade' will also automatically evaluate the element's 'visibility' and 'display' styles to find out whether the element is actually visible.</td></tr>
	 * <tr><td>$$slide</td><td>$$slide</td><td>Slide Effect</td><td>'$$slide' returns the height of the element in pixels with a 'px' suffix and is equivalent to '$height'.
	 * Please note that you can pass that 'px' value to '$$slide' in ##set(), which will then set the according '$height'.</td></tr>
	 * <tr><td>$$scrollX, $$scrollY</td><td>$$scrollY</td><td>Scroll Coordinates</td><td>The names '$$scrollX' and
	 *             '$$scrollY' can be used on <code>$(window)</code> to retrieve the scroll coordinates of the document.
	 *             The coordinates are specified in pixels without a 'px' unit postfix.</td></tr>
	 * </table>
 	 * 
 	 * @example Retrieves the id, title attribute and the background color of the element '#myElement':
 	 * <pre>
 	 * var id = $('#myElement).get('id'); 
 	 * var title = $('#myElement).get('@title'); 
 	 * var bgColor = $('#myElement).get('$backgroundColor'); 
 	 * </pre>
 	 *
 	 * @example Retrieves the id, title attribute and the background color of the element '#myElement' as a map:
 	 * <pre>
 	 * var m = $('#myElement).get(['id', '@title', '$backgroundColor']); 
 	 * var id = m.id;
 	 * var title = m['@title'];
 	 * var bgColor = m.$backgroundColor;
 	 * </pre>
 	 *
 	 * @example Uses ##get() and ##set() to reposition an element:
 	 * <pre>
 	 * var coords = $('#myElement').get({$top: 0, $left: 0}, true); 
 	 * coords.$top = coords.$top + 10 + 'px';
 	 * coords.$left = coords.$left + 20 + 'px';
 	 * $('#myElement').set(coords);
 	 * </pre>
 	 * Please note that the values of $top and $left in the <var>get()</var> invocation do not matter and will be ignored!
 	 *
	 * @param name the name of a single property or attribute to modify. Unprefixed names set properties, a '$' prefix sets CSS styles and
	 *        '@' sets attributes. Please see the table above for special properties and other options.
 	 * @param list in order to retrieve more than one value, you can specify several names in an array or list. <var>get()</var> will then return an object map
 	 *        containing the values.
 	 * @param map if you specify an object that is neither list nor string, <var>get()</var> will use it as a map of property names. Each property name will be requested. 
 	 * The values of the properties in the map will be ignored. <var>get()</var> will then return a new object map containing of results.
 	 * @param toNumber if 'true', <var>get()</var> converts all returned values into numbers. If they are strings, 
 	 *                 <var>get()</var> removes any non-numeric characters before the conversion. This is useful when you request 
 	 *                 a CSS property such as '$marginTop'  that returns a value with a unit suffix, like "21px". <var>get()</var> will convert it 
 	 *                 into a number and return 21. If the returned value is not parsable as a number, <var>NaN</var> will be returned.
 	 * @return if <var>get()</var> was called with a single name, it returns the corresponding value. 
 	 *         If a list or map was given, <var>get()</var> returns a new object map with the names as keys and the values as values.
 	 *         It returns <var>undefined</var> if the list is empty.
	 *
 	 * @see ##set() sets values using the same property syntax.
 	 */
	'get': function(spec, toNumber) {
		var self = this, element = self[0];

		if (element) {
			if (isString(spec)) {
				var match = /^([$@]*)(.*)/.exec(replace(replace(spec, /^\$float$/, 'cssFloat'), /^%/,'@data-'));
				var s;
				if (spec == '$') 
					s = element.className;
				else if (spec == '$$') {
						s = element.getAttribute('style');
				}
				else if (spec == '$$fade' || spec == '$$show') {
					if  (self['get']('$visibility') == 'hidden' || self['get']('$display') == 'none')
						s = 0;
					else if (spec == '$$fade') {
						s = 
							isNaN(self['get']('$opacity', _true)) ? 1 : self['get']('$opacity', _true); 
					}
					else // $$show
						s = 1;
				}
				else if (spec == '$$slide')
					s = self['get']('$height');
				// @condblock scrollxy
				// @condend scrollxy
				else if (match[1] == '$') {
						s = _window['getComputedStyle'](element, _null)['getPropertyValue'](replace(match[2], /[A-Z]/g, function (match2) {  return '-' + match2.toLowerCase(); }));
				}
				else if (match[1] == '@')
					s = element.getAttribute(match[2]);
				else
					s = element[match[2]];
				return toNumber ? extractNumber(s) : s;
			}
			else {
				var r = {};
				(isList(spec) ? flexiEach : eachObj)(spec, function(name) {
					r[name] = self['get'](name, toNumber);
				});
				return r;
			}
		}
	},

	/*$
	 * @id set
	 * @group SELECTORS
	 * @requires dollar get
	 * @configurable default
	 * @name .set()
	 * @syntax list.set(name, value)
	 * @syntax list.set(properties)
	 * @syntax list.set(cssClasses)
 	 * @module WEB
	 * 
	 * Modifies the list's elements by setting their properties, attributes, CSS styles and/or CSS classes. You can either supply a 
	 * single name and value to set only one property, or you can provide an object that contains name/value pairs to describe more than one property.
	 * More complex operations can be accomplished by supplying functions as values. They will then be called for each element that will
	 * be set.
	 *
	 * The <var>name</var> parameter defines what kind of data you are setting. The following name schemes are supported:
	 * 
	 * <table>
	 * <tr><th>Name Schema</th><th>Example</th><th>Sets what?</th><th>Description</th></tr>
	 * <tr><td>name</td><td>innerHTML</td><td>Property</td><td>A name without prefix of '$' or '@' sets a property of the object.</td></tr>
	 * <tr><td>@name</td><td>@href</td><td>Attribute</td><td>Sets the HTML attribute using setAttribute(). In order to stay compatible with Internet Explorer 7 and earlier, 
	 *             you should not set the attributes '@class' and '@style'. Instead use '$' and '$$' as shown below.</td></tr>
	 * <tr><td>%name</td><td>%phone</td><td>Data-Attribute</td><td>Sets a data attribute using setAttribute(). Data attributes are
	 *         attributes whose names start with 'data-'. '%myattr' and '@data-myattr' are equivalent.</td></tr>
	 * <tr><td>$name</td><td>$fontSize</td><td>CSS Property</td><td>Sets a style using the element's <var>style</var> object.
	 *         The syntax for the CSS styles is camel-case (e.g. "$backgroundColor", not "$background-color"). </td></tr>
	 * <tr><td>$</td><td>$</td><td>CSS Classes</td><td>A simple <var>$</var> modifies the element's CSS classes using the object's <var>className</var> property. The value is a 
	 *             space-separated list of class names. If prefixed with '-' the class is removed, a '+' prefix adds the class and a class name without prefix toggles the class.
	 *             The name '$' can also be omitted if <var>set</var> is called with class names as only argument.</td></tr>
	 * <tr><td>$$</td><td>$$</td><td>Style</td><td>Sets the element's style attribute in a browser-independent way.</td></tr>
	 * <tr><td>$$show</td><td>$$show</td><td>Show/Hide</td><td>If <var>true</var> or a number not 0, it will make sure the element is visible by
	 *         making sure '$display' is not 'none' and by setting '$visibility' to 'visible'. Please see ##show() for details. If the value is <var>false</var> or 0, it
	 *         will be hidden by setting '$display' to 'none'.</td></tr>
	 * <tr><td>$$fade</td><td>$$fade</td><td>Fade Effect</td><td>The name '$$fade' sets the opacity of the element in a browser-independent way. The value must be a number
	 *              between 0 and 1. '$$fade' will also automatically control the element's 'visibility' style. If the value is 0,
	 *             the element's visibility will automatically be set to 'hidden'. If the value is larger, the visibility will be set to 
	 *             'visible'. '$$fade' only works with block elements.</td></tr>
	 * <tr><td>$$slide</td><td>$$slide</td><td>Slide Effect</td><td>The name '$$slide' allows a vertical slide-out or slide-in effect. The value must be a number
	 *              between 0 and 1 and will be used to set the element's '$height'. '$$slide' will also automatically control the element's 'visibility' 
	 *              style. If the value is 0, the element's visibility will automatically be set to 'hidden'. If the value is larger, 
	 *              the visibility will be set to 'visible'. '$$slide' only works with block elements and will not set the
	 *              element's margin or padding. If you need a margin or padding, you should wrap the elements in a simple &lt;div>.</td></tr>
	 * <tr><td>$$scrollX, $$scrollY</td><td>$$scrollY</td><td>Scroll Coordinates</td><td>The names '$$scrollX' and
	 *             '$$scrollY' can be used on <code>$(window)</code> to set the scroll coordinates of the document.
	 *             The coordinates are specified in pixels, but must not use a 'px' unit postfix.</td></tr>
	 * </table>
	 *
	 * @example Unchecking checkboxes:
	 * <pre>
	 * $('input.checkbox').set('checked', false);
	 * </pre>
	 * 
	 * @example Changing the <var>innerHTML</var> property of an element:
	 * <pre>
	 * $('#toc').set('innerHTML', 'Content');
	 * </pre>
	 * 
	 * @example Changing attributes:
	 * <pre>
	 * $('a.someLinks').set('@href', 'http://www.example.com/');
	 * </pre>
	 * 
	 * @example Removing attributes:
	 * <pre>
	 * $('a.someLinks').set('@title', null);
	 * </pre>
	 * 
	 * @example Changing styles:
	 * <pre>
	 * $('.bigText').set('$fontSize', 'x-large');
	 * </pre>
	 * 
	 * @example Adding and removing CSS classes:
	 * <pre>
	 * $('.myElem').set('$', '+myClass -otherClass');
	 * </pre>
	 *  
	 * @example Toggling a CSS class:
	 * <pre>
	 * $('.myElem').set('$', 'on');
	 * </pre>
	 * 
	 * @example Shortcut for CSS manipulation:
	 * <pre>
	 * $('.myElem').set('+myClass -otherClass on');
	 * </pre>
	 * 	 
	 * @example Making an element transparent:
	 * <pre>
	 * $('.seeThrough').set('$$fade', 0.5);
	 * </pre>
	 * 	  
	 * @example Making an element visible. Note that $$fade will set the element's display style to 'block' and visibility style to 'visible'.
	 * <pre>
	 * $('.myElem').set('$$fade', 1);
	 * </pre>
	 * 
	 * @example Using a map to change several properties:
	 * <pre>
	 * $('input.checkbox').set({checked: false,
	 *                          '@title': 'Check this'});
	 * </pre>
	 * 
	 * @example Changing CSS with a map:
	 * <pre>
	 * $('.importantText').set({$fontSize: 'x-large',
	 *                          $color: 'black',
	 *                          $backgroundColor: 'red',
	 *                          $: '+selected -default'});
	 * </pre>
	 * 
	 * @example You can specify a function as value to modify a value instead of just setting it:
	 * <pre>
	 * $('h2').set('innerHTML', function(oldValue, index) { 
	 *     return 'Chapter ' + index + ': ' + oldValue.toUpperCase(); 
	 * });
	 * </pre>
	 * 
	 * @param name the name of a single property or attribute to modify. Unprefixed names set properties, a '$' prefix sets CSS styles and
	 *        '@' sets attributes. Please see the table above for special properties and other options.
	 * @param value the value to set. If value is <var>null</var> and name specified an attribute, the attribute will be removed.
	 * If dollar ('$') has been passed as name, the value can contain space-separated CSS class names. If prefixed with a '+' the class will be added,
	 * with a '-' prefix the class will be removed. Without prefix, the class will be toggled.
	 * If <var>value</var> is a function, the <code>function(oldValue, index, obj)</code> will be invoked for each list element 
	 * to evaluate the new value: 
	 * <dl><dt>oldValue</dt><dd>The old value of the property to be changed, as returned by ##get().
	 * For the CSS style names, this is the computed style of the property </dd>
	 * <dt>index</dt><dd>The list index of the object owning the property</dd>
	 * <dt>obj</dt><dd>The list element owning the property.</dd>
	 * <dt class="returnValue">(callback return value)</dt><dd>The value to be set.</dd></dl>
	 * Functions are not supported by '$'.
	 * @param properties a Object as map containing names as keys and the values to set as map values. See above for the name and value syntax.
	 * @param cssClasses if <var>set()</var> is invoked with a string as single argument, the name "$" (CSS classes) is assumed and the argument is the
	 *                   value. See above for CSS syntax.
	 *                   Instead of a string, you can also specify a <code>function(oldValue, index, obj)</code> to modify the existing classes. 
	 * @return the list
	 * 
	 * @see ##get() retrieves values using the same property syntax.
	 * @see ##animate() animates values using the same property syntax.
	 * @see ##toggle() can toggle between two sets of values.
	 * @see ##dial() allows smooth transitions between two sets of values.
	 */
	 'set': function (name, value) {
		 var self = this;
		 if (value !== undef) {
			 var match = /^([$@]*)(.*)/.exec(replace(replace(name, /^\$float$/, 'cssFloat'), /^%/,'@data-'));

			 if (name == '$$fade') {
				 this['set']({'$visibility': value ? 'visible' : 'hidden', '$opacity': value});
			 }
			 else if (name == '$$slide') {
				 this['set']({'$visibility': value ? 'visible' : 'hidden', 
						 	  '$height': /px/.test(value) ? value : function(oldValue, idx, element) { return getNaturalHeight($(element), value);},
				              '$overflow': 'hidden'});
			 }
			 else if (name == '$$show') {
				 if (value)
					 this['set']({'$visibility': value ? 'visible' : 'hidden', '$display': ''}) // that value? part is only for gzip
			 		 	 ['set']({'$display': function(oldVal) {
			 		 		 return oldVal == 'none' ? 'block' : oldVal;
			 			 }}); 
				 else 
					 this['set']({'$display': 'none'});
			 }
		 	 else if (name == '$$') {
						this['set']('@style', value);
				 }
			 else
				 flexiEach(self, function(obj, c) { 
					 var newValue = isFunction(value) ? value($(obj).get(name), c, obj) : value;
					 if (name == '$') {
						 flexiEach(newValue && newValue.split(/\s+/), function(clzz) {
							 var cName = replace(clzz, /^[+-]/);
							 var oldClassName = obj['className'] || '';
							 var className = replace(oldClassName, RegExp('(^|\\s)' + cName + '(?=$|\\s)'));
							 if (/^\+/.test(clzz) || (cName==clzz && oldClassName == className)) // for + and toggle-add
								 className += ' ' + cName;
							 obj['className'] = replace(className, /^\s+|\s+(?=\s|$)/g);
						 });
					 }
   					// @condblock scrollxy
   				 	 else if (name == '$$scrollX') {
			 			 obj['scroll'](newValue, obj['scrollY']);
   				 	 }
   				 	 else if (name == '$$scrollY') {
			 			 obj['scroll'](obj['scrollX'], newValue);
   				 	 }
					 // @condend
					 else if (match[1] == '@') {
						 if (newValue != _null)  
							 obj.setAttribute(match[2], newValue);
						 else
							 obj.removeAttribute(match[2]);
					 }
					 else if (match[1] == '$')
						 obj['style'][match[2]] = newValue;
					 else
						 obj[match[2]] = newValue;
				 });
		 }
		 else if (isString(name) || isFunction(name))
			 this['set']('$', name);
		 else
			 eachObj(name, function(n,v) { self['set'](n, v); });
		 return self;
	 },

	/*$
	 * @id show
	 * @group ELEMENT
	 * @requires set
	 * @configurable default
	 * @name .show()
	 * @syntax list.show()
 	 * @module WEB
	 * Make the invisible element of the list visible. It does so by setting '$visibility' to 'visible' and making sure that 
	 * the '$display' style is not 'none'. Calling <var>show()</var> is the same as using ##set() to set '$$show' to 1.
	 * 
	 * First it will clear the element's direct '$display' style to remove any 'none' value that may be there. This helps
	 * if the element was hidden using the style attribute, or if it has been hidden using ##hide(). If the
	 * '$display' value is still null, it assumes that it has been hidden using a stylesheet and sets '$display' to 'none'.
	 * 
	 * Please note that because of the way <var>show()</var> works, it will not work correctly if you have hidden a non-block
	 * element like a table row using a stylesheet. In that case you can not use <var>show()</var> but should set '$display' manually using ##set().
	 *  
	 * Other properties that may hide elements, like '$opacity', are not modifed by <var>show()</var>.
	 *  
	 * @example Showing elements:
	 * <pre>
	 * $('.hidden').show();
	 * </pre> 
	 * 
	 * @return the current list
	 * 
	 * @see ##hide() hides elements.
	 * @see ##set() can do the same by setting '$$show' to 1, and is also still required for some non-block elements.
	 * @see ##animate() can be used with a '$$fade' or '$$slide' if you want to animate the element.
	 */
	 'show': function() {
		 return this['set']('$$show', 1);
	 },

	/*$
	 * @id hide
	 * @group ELEMENT
	 * @requires set
	 * @configurable default
	 * @name .hide()
	 * @syntax list.hide()
 	 * @module WEB
	 * Hides the elements of the list. It does so by writing 'none' into the '$display' style. This is the same as calling
	 * ##set() with the property name '$$show' and the value 0. 
	 * 
	 * Other properties that may hide elements, like '$visibility' or '$opacity', are not modifed by <var>hide()</var>.
	 *  
	 * @example Hiding elements:
	 * <pre>
	 * $('.visible').hide();
	 * </pre> 
	 * 
	 * @return the current list
	 * 
	 * @see ##show() makes elements visible.
	 * @see ##set() can do the same by setting '$$show' to 0.
	 * @see ##animate() can be used with a '$$fade' or '$$slide' if you want to animate the element.
	 */
	 'hide': function() {
		 return this['set']('$$show', 0);
	 },

	/*$
	 * @id add
	 * @group ELEMENT
	 * @requires dollar each
	 * @configurable default
	 * @name .add()
	 * @syntax list.add(text)
	 * @syntax list.add(node)
	 * @syntax list.add(list)
	 * @syntax list.add(factoryFunction)
 	 * @module WEB
	 * Adds the given node(s) as children to the list's HTML elements. If a string has been given, it will be added as text node.
	 * DOM nodes will be added directly. If you pass a list, all its elements will be added using the rules above.
	 *
	 * When you pass a DOM node and the target list has more than one element, the original node will be added to the first list element,
	 * and ##clone#clones## to all following list elements.
	 * 
	 * ##EE(), ##HTML() and ##clone() are compatible with <var>add()</var> and can help you create new HTML nodes.
	 *
	 * @example Using the following HTML:
	 * <pre>
	 * &lt;div id="comments">Here is some text.&lt;br/>&lt;/div>
	 * </pre> 
	 * The next line appends a text node to the div:
	 * <pre>
	 * $('#comments').add('Some additional text.');
	 * </pre>
	 * This results in:
	 * <pre>
	 * &lt;div id="comments">Here is some text.&lt;br/>Some additional text.&lt;/div>
	 * </pre> 
	 *
	 * @example Using the following HTML: 
	 * <pre>
	 * &lt;ul id="myList">
	 *   &lt;li>First list entry&lt;/li>
	 *   &lt;li>Second list entry&lt;/li>
	 * &lt;/ul>
	 * </pre>
	 * The following Javascript adds an element to the list:
	 * <pre>
	 * $('#myList').add(EE('li', 'My extra point');
	 * </pre>
	 * This results in
	 * <pre>
	 * &lt;ul id="myList">
	 *   &lt;li>First list entry&lt;/li>
	 *   &lt;li>Second list entry&lt;/li>
	 *   &lt;li>My extra point&lt;/li>
	 * &lt;/ul>
	 * </pre>
	 *
	 * @example Use a list to add several elements at once:
	 * <pre>
	 * $('#comments').add([
	 *      EE('br'), 
	 *     'Some text', 
	 *     EE('span', {'className': 'highlight'}, 'Some highlighted text')
	 * ]);
	 * </pre>
	 *
	 * @example If you need to customize the content, you can write a factory function:
	 * <pre>
	 * $('.chapter').add(function(parent, index) { return EE('h2', 'Chapter number ' + index); });
	 * </pre>
	 *
	 * @param text a string or number to add as text node
	 * @param node a DOM node to add to the list. If the list has more than one element, the given node will be added to the first element.
	 *             For all additional elements, the node will be cloned using ##clone().
	 * @param list a list containing text and/or nodes. May also contain nested lists with nodes or text..
	 * @param factoryFunction a <code>function(listItem, listIndex)</code> that will be invoked for each list element to create the nodes: 
	 * <dl><dt>listItem</dt><dd>The list element that will receive the new children.</dd>
	 * <dt>listIndex</dt><dd>The index of the list element that will receive the new children.</dd>
	 * <dt class="returnValue">(callback return value)<dt><dd>The node(s) to be added to the list element.
	 * Can be either a string for a text node, an HTML element or a list containing strings and/or DOM nodes.
	 * If a function is returned, it will be invoked recursively with the same arguments.</dd></dl>
	 * @return the current list
	 * 
	 * @see ##fill() works like <var>add()</var>, but deletes all children before adding the new nodes.
	 * @see ##addFront() adds nodes as first child, not as last.
	 * @see ##addAfter() adds nodes not as children but as siblings.
	 * @see ##addBefore() also adds nodes not as children but as siblings.
	 * @see ##replace() replaces existing nodes.
	 */
	'add': function (children, addFunction) {
		return this['each'](function(e, index) {
			var lastAdded;
			(function appendChildren(c) {
				if (isList(c))
					flexiEach(c, appendChildren);
				else if (isFunction(c))
					appendChildren(c(e, index));
				else if (c != _null) {   // must check null, as 0 is a valid parameter 
					var n = isNode(c) ? c : _document.createTextNode(c);
					if (lastAdded)
						lastAdded['parentNode']['insertBefore'](n, lastAdded['nextSibling']);
					else if (addFunction)
						addFunction(n, e, e['parentNode']); 
					else
						e.appendChild(n);
					lastAdded = n;
				}
			})(index &&!isFunction(children) ? clone(children) : children);
		});
	},

	/*$
	 * @id fill
	 * @group ELEMENT
	 * @requires dollar add remove each
	 * @configurable default
	 * @name .fill()
	 * @syntax list.fill()
	 * @syntax list.fill(text)
	 * @syntax list.fill(node)
	 * @syntax list.fill(list)
	 * @syntax list.fill(factoryFunction)
 	 * @module WEB
	 * Sets the content of the list's HTML elements, replacing old content. If a string has been given, it will be added as text node.
	 * DOM nodes will be added directly. If you pass a list, all its elements will be added using the rules above.
	 *
	 * When you pass a DOM node and the target list has more than one element, the original node will be added to the first list element,
	 * and ##clone#clones## to all following list elements.
	 * 
	 * ##EE(), ##HTML() and ##clone() are compatible with <var>fill()</var> and can help you create new HTML ndoes.
	 *
	 * Call <var>fill()</var> without arguments to remove all children from a node.
	 * 
	 * @example Using the following HTML:
	 * <pre>
	 * &lt;div id="status">Done&lt;/div>
	 * </pre> 
	 * <var>fill()</var> with a simple string replaces the element's content with the new text:
	 * <pre>
	 * $('#status').fill('Please Wait..');
	 * </pre>
	 * Results in:
	 * <pre>
	 * &lt;div id="status">Please Wait..&lt;/div>
	 * </pre> 
	 *
	 * @example Pass an element to replace the old content with the element:
	 * <pre>
	 * $('#status').fill(EE('span', {'className': 'bold'}, 'Please Wait...'));
	 * </pre>
	 * With the previous example's HTML, this would create this:
	 * <pre>
	 * &lt;div id="status">&lt;span class='bold'>Please Wait..&lt;/span>&lt;/div>
	 * </pre> 
	 *
	 * @example You can also pass a list of elements and texts:
	 * <pre>
	 * $('#status').fill(['Here', EE('br'), 'are', EE('br'), 'four', EE('br'), 'lines.]);
	 * </pre>
	 *
	 * @example Or a complete structure built using EE:
	 * <pre>
	 * $('#myListContainer').fill([
	 *     EE('h2', 'My List'), 
	 *     EE('ol', [EE('li', 'First Item'), EE('li', 'Second Item'), EE('li', 'Third Item')])
	 * ]);
	 * </pre>
	 *
	 * @example You can write a factory function that re-creates the list for every instance:
	 * <pre>
	 * $('.listContainers').fill(function(e, index) { return [
	 *     EE('h2', 'List Number '+index), 
	 *     EE('ol', [EE('li', 'First Item'), 
	 *     EE('li', 'Second Item'), 
	 *     EE('li', 'Third Item')
	 * ])]});
	 * </pre>
	 *
	 * @example <var>fill()</var> without arguments deletes the content of the list elements:
	 * <pre>
	 * $('.listContainers').fill();
	 * </pre>
	 *
	 * @param text a string to set as text node of the list elements
	 * @param node a DOM node to add to the list. If the list has more than one element, the given node will be added to the first element.
	 *             For all additional elements, the node will be cloned using ##clone().
	 * @param list a list containing text and/or nodes. May also contain nested lists with nodes or text..
	 * @param factoryFunction a <code>function(listItem, listIndex)</code> that will be invoked for each list element to create the nodes: 
	 * <dl><dt>listItem</dt><dd>The list element that will receive the new children.</dd>
	 * <dt>listIndex</dt><dd>The index of the list element that will receive the new children.</dd>
	 * <dt class="returnValue">(callback return value)<dt><dd>The node(s) to be added to the list element.
	 * Can be either a string for a text node, an HTML element or a list containing strings and/or DOM nodes.
	 * If a function is returned, it will be invoked recursively with the same arguments.</dd></dl>
	 * @return the current list
	 * 
	 * @see ##add() works like <var>fill()</var>, but does not delete children.
	 * @see ##addFront() adds nodes as first child, not as last.
	 * @see ##addAfter() adds nodes not as children but as siblings.
	 * @see ##addBefore() also adds nodes not as children but as siblings.
	 * @see ##replace() replaces existing nodes.
	 * @see ##ht() is a alternative for replacing element content with a HTML snippet.
	 */
	'fill': function (children) {
		return this['each'](function(e) { $(e['childNodes'])['remove'](); }).add(children);
	},

	/*$
	 * @id addbefore
	 * @group ELEMENT
	 * @requires dollar add
	 * @configurable default
	 * @name .addBefore()
	 * @syntax list.addBefore(text)
	 * @syntax list.addBefore(node)
	 * @syntax list.addBefore(list)
	 * @syntax list.addBefore(factoryFunction)
 	 * @module WEB
	 * Inserts the given text or element(s) as siblings in front of each HTML element in the list. 
	 * If a string has been given, it will be added as text node.
	 * DOM nodes will be added directly. If you pass a list, all its elements will be added using the rules above.
	 *
	 * When you pass a DOM node and the target list has more than one element, the original node will be added to the first list element,
	 * and ##clone#clones## to all following list elements.
	 * 
	 * ##EE(), ##HTML() and ##clone() are compatible with <var>addBefore()</var> and can help you create new HTML ndoes.
	 *
	 * @example Using the following HTML:
	 * <pre>
	 * &lt;div>
	 *   &lt;div id="mainText">Here is some text&lt;/div>
	 * &lt;/div>
	 * </pre>  
	 * addBefore() adds text in front of the selected list items.
	 * <pre>
	 * $('#mainText').addBefore('COMMENT');
	 * </pre>
	 * This results in:
	 * <pre>
	 * &lt;div>
	 *   COMMENT
	 *   &lt;div id="mainText">Here is some text&lt;/div>
	 * &lt;/div>
	 * </pre>  
	 *
	 * @example You can also pass an Element Factory:
	 * <pre>
	 * $('#mainText').addBefore(EE('span', {'className': 'important'}, 'WARNING'));
	 * </pre>
	 * With the previous example's HTML, this would create this HTML:
	 * <pre>
	 * &lt;div>
	 *   &lt;span class="important">WARNING&lt;/span>
	 *   &lt;div id="mainText">Here is some text&lt;/div>
	 * &lt;/div>
	 * </pre> 
	 *
	 * @example Lists of elements and nodes are possible as well.
	 * <pre>
	 * $('#status').addBefore([EE('hr'), 'WARNING']);
	 * </pre>
	 *
	 * @param text a string to add as text node to the list elements
	 * @param node a DOM node to add to the list. If the list has more than one element, the given node will be added to the first element.
	 *             For all additional elements, the node will be cloned using ##clone().
	 * @param list a list containing text and/or nodes. May also contain nested lists with nodes or text..
	 * @param factoryFunction a <code>function(listItem, listIndex)</code> that will be invoked for each list element to create the nodes: 
	 * <dl><dt>listItem</dt><dd>The list element that will receive the new children.</dd>
	 * <dt>listIndex</dt><dd>The index of the list element that will receive the new children.</dd>
	 * <dt class="returnValue">(callback return value)<dt><dd>The node(s) to be added to the list element.
	 * Can be either a string for a text node, an HTML element or a list containing strings and/or DOM nodes.
	 * If a function is returned, it will be invoked recursively with the same arguments.</dd></dl>
	 * @return the current list
	 *
	 * @see ##fill() replaces all children with new nodes.
	 * @see ##add() adds elements as last child.
	 * @see ##addFront() adds nodes as first child.
	 * @see ##addAfter() adds nodes as siblings after the list element(s).
	 * @see ##replace() replaces existing nodes.
	 */
	'addBefore': function (children) {
		return this['add'](children, function(newNode, refNode, parent) { parent['insertBefore'](newNode, refNode); });
	},

	/*$
	 * @id addafter
	 * @group ELEMENT
	 * @requires dollar add
	 * @configurable default
	 * @name .addAfter()
	 * @syntax list.addAfter(text)
	 * @syntax list.addAfter(node)
	 * @syntax list.addAfter(list)
	 * @syntax list.addAfter(factoryFunction)
 	 * @module WEB
	 * Inserts the given text or element(s) as siblings after each HTML element in the list. 
	 * If a string has been given, it will be added as text node.
	 * DOM nodes will be added directly. If you pass a list, all its elements will be added using the rules above.
	 *
	 * When you pass a DOM node and the target list has more than one element, the original node will be added to the first list element,
	 * and ##clone#clones## to all following list elements.
	 * 
	 * ##EE(), ##HTML() and ##clone() are compatible with <var>addAfter()</var> and can help you create new HTML ndoes.
	 *
	 * @example Using the following HTML:
	 * <pre>
	 * &lt;div>
	 *   &lt;div id="mainText">Here is some text&lt;/div>
	 * &lt;/div>
	 * </pre>   
	 * Use addAfter() with a simple string to add a text node.
	 * <pre>
	 * $('#mainText').addAfter('Disclaimer: bla bla bla');
	 * </pre>
	 * This results in the following HTML:
	 * <pre>
	 * &lt;div>
	 *   &lt;div id="mainText">Here is some text&lt;/div>
	 *   Disclaimer: bla bla bla
	 * &lt;/div>
	 * </pre>   
	 *
	 * @example You can also pass an element:
	 * <pre>
	 * $('#mainText').addAfter(EE('span', {'className': 'disclaimer'}, 'Disclaimer: bla bla bla'));
	 * </pre>
	 * With the previous example's HTML, this would create this:
	 * <pre>
	 * &lt;div>
	 *   &lt;div id="mainText">Disclaimer: bla bla bla&lt;/div>
	 *   &lt;span class="disclaimer">WARNING&lt;/span>
	 * &lt;/div>
	 * </pre> 
	 *
	 * @param text a string to add as text node to the list elements
	 * @param node a DOM node to add to the list. If the list has more than one element, the given node will be added to the first element.
	 *             For all additional elements, the node will be cloned using ##clone().
	 * @param list a list containing text and/or nodes. May also contain nested lists with nodes or text..
	 * @param factoryFunction a <code>function(listItem, listIndex)</code> that will be invoked for each list element to create the nodes:
	 * <dl><dt>listItem</dt><dd>The list element that will receive the new children.</dd>
	 * <dt>listIndex</dt><dd>The index of the list element that will receive the new children.</dd>
	 * <dt class="returnValue">(callback return value)<dt><dd>The node(s) to be added to the list element.
	 * Can be either a string for a text node, an HTML element or a list containing strings and/or DOM nodes.
	 * If a function is returned, it will be invoked recursively with the same arguments.</dd></dl>
	 * @return the current list
	 *
	 * @see ##fill() replaces all children with new nodes.
	 * @see ##add() adds elements as last child.
	 * @see ##addFront() adds nodes as first child.
	 * @see ##addBefore() also adds nodes as next sibling but as preceding sibling.
	 * @see ##replace() replaces existing nodes.
	 */
	'addAfter': function (children) {
		return this['add'](children, function(newNode, refNode, parent) { parent['insertBefore'](newNode, refNode['nextSibling']); });
	},

	/*$
	 * @id addfront
	 * @group ELEMENT
	 * @requires dollar add
	 * @configurable default
	 * @name .addFront()
	 * @syntax list.addFront(text)
	 * @syntax list.addFront(node)
	 * @syntax list.addFront(list)
	 * @syntax list.addFront(factoryFunction)
 	 * @module WEB
	 * Adds the given node(s) as children to the list's HTML elements. Unlike ##add(), the new nodes will be the first children and not the last.
	 * If a string has been given, it will be added as text node.
	 * DOM nodes will be added directly. If you pass a list, all its elements will be added using the rules above.
	 *
	 * When you pass a DOM node and the target list has more than one element, the original node will be added to the first list element,
	 * and ##clone#clones## to all following list elements.
	 *
	 * ##EE(), ##HTML() and ##clone() are compatible with <var>addFront()</var> and can help you create new HTML ndoes.
	 *
	 * @example Using the following HTML:
	 * <pre>
	 * &lt;div id="comments">Here is some text.&lt;br/>&lt;/div>
	 * </pre> 
	 * Add a text to the div:
	 * <pre>
	 * $('#comments').addFront('Some additional text. ');
	 * </pre>
	 * This results in:
	 * <pre>
	 * &lt;div id="comments">Some additional text. Here is some text.&lt;br/>&lt;/div>
	 * </pre> 
	 *
	 * @example Using the following HTML: 
	 * <pre>
	 * &lt;ul id="myList">
	 *   &lt;li>First list entry&lt;/li>
	 *   &lt;li>Second list entry&lt;/li>
	 * &lt;/ul>
	 * </pre>
	 * The following Javascript adds an element to the list:
	 * <pre>
	 * $('#myList').addFront(EE('li', 'My extra point'));
	 * </pre>
	 * This results in
	 * <pre>
	 * &lt;ul id="myList">
	 *   &lt;li>My extra point&lt;/li>
	 *   &lt;li>First list entry&lt;/li>
	 *   &lt;li>Second list entry&lt;/li>
	 * &lt;/ul>
	 * </pre>
	 *
	 * @example Use a list to add several elements at once:
	 * <pre>
	 * $('#comments').addFront([
	 *      EE('br'), 
	 *      'Some text', 
	 *      EE('span', {'className': 'highlight'}, 'Some highlighted text')
	 * ]);
	 * </pre>
	 *
	 * @param text a string to add as text node to the list elements
	 * @param node a DOM node to add to the list. If the list has more than one element, the given node will be added to the first element.
	 *             For all additional elements, the node will be cloned using ##clone().
	 * @param list a list containing text and/or nodes. May also contain nested lists with nodes or text..
	 * @param factoryFunction a <code>function(listItem, listIndex)</code> that will be invoked for each list element to create the nodes:
	 * <dl><dt>listItem</dt><dd>The list element that will receive the new children.</dd>
	 * <dt>listIndex</dt><dd>The index of the list element that will receive the new children.</dd>
	 * <dt class="returnValue">(callback return value)<dt><dd>The node(s) to be added to the list element.
	 * Can be either a string for a text node, an HTML element or a list containing strings and/or DOM nodes.
	 * If a function is returned, it will be invoked recursively with the same arguments.</dd></dl>
	 * @return the current list
	 * 
 	 * @see ##fill() replaces all children with new nodes.
	 * @see ##add() adds elements as last child.
	 * @see ##addAfter() adds nodes not as children but as siblings.
	 * @see ##addBefore() also adds nodes not as children but as siblings.
	 * @see ##replace() replaces existing nodes.
	 */
	'addFront': function (children) {
		return this['add'](children, function(newNode, refNode) { refNode.insertBefore(newNode, refNode.firstChild); });
	},

	/*$
	 * @id replace
	 * @group ELEMENT
	 * @requires dollar add
	 * @configurable default
	 * @name .replace()
	 * @syntax list.replace(text)
	 * @syntax list.replace(node)
	 * @syntax list.replace(list)
	 * @syntax list.replace(factoryFunction)
 	 * @module WEB
	 * Replaces the list items with the the given node(s) in the DOM tree. 
	 * If a string has been given, it will be set as text node.
	 * DOM nodes will be added directly. If you pass a list, all its elements will be added using the rules above.
	 *
	 * When you pass a DOM node and the target list has more than one element, the original node will be added to the first list element,
	 * and ##clone#clones## to all following list elements.
	 * 
	 * ##EE(), ##HTML() and ##clone() are compatible with <var>replace()</var> and can help you create new HTML ndoes.
	 *
	 * @example Using the following HTML:
	 * <pre>
	 * &lt;div id="comments">
	 *    &lt;div id="commentOne">My old comment.&lt;/div>
	 * &lt;/div>
	 * </pre> 
	 * This replaces the div 'commentOne':
	 * <pre>
	 * $('#commentOne').replace('Some new comment.');
	 * </pre>
	 * The resulting HTML is:
	 * <pre>
	 * &lt;div id="comments">
	 *    Some new comment.
	 * &lt;/div>
	 * </pre> 
	 * Please note that not only the text has changed, but the whole &lt;div> has been replaced. If you only want to replace the element's text content
	 * you should use ##fill() instead of <var>replace()</var>.
	 *
	 * @example Using the following HTML: 
	 * <pre>
	 * &lt;ul id="myList">
	 *   &lt;li>First list entry&lt;/li>
	 *   &lt;li>Second list entry&lt;/li>
	 * &lt;/ul>
	 * </pre>
	 * The following example will replace <strong>only the first &lt;li> element</strong>:
	 * <pre>
	 * $('#myList li').sub(0, 1).replace(EE('li', 'My extra point'));
	 * </pre>
	 * This results in
	 * <pre>
	 * &lt;ul id="myList">
	 *   &lt;li>My extra point&lt;/li>
	 *   &lt;li>Second list entry&lt;/li>
	 * &lt;/ul>
	 * </pre>
	 *
	 *
	 * @param text a text for the text nodes that replace the list elements
	 * @param node a DOM node to add to the list. If the list has more than one element, the given node will be added to the first element.
	 *             For all additional elements, the node will be cloned using ##clone().
	 * @param list a list containing text and/or nodes. May also contain nested lists with nodes or text..
	 * @param factoryFunction a <code>function(listItem, listIndex)</code> that will be invoked for each list element to determine its content: 
	 * <dl><dt>listItem</dt><dd>The list element that will receive the new children.</dd>
	 * <dt>listIndex</dt><dd>The index of the list element that will receive the new children.</dd>
	 * <dt class="returnValue">(callback return value)<dt><dd>The node(s) to be added to the list element.
	 * Can be either a string for a text node, an HTML element or a list containing strings and/or DOM nodes.
	 * If a function is returned, it will be invoked recursively with the same arguments.</dd></dl>
	 * @return the current list
	 * 
 	 * @see ##fill() replaces all children with new nodes.
	 * @see ##add() adds elements as last child.
	 * @see ##addFront() adds nodes as first child.
	 * @see ##addAfter() adds nodes not as children but as siblings.
	 * @see ##addBefore() also adds nodes not as children but as siblings.
	 */
	'replace': function (children) {
		return this['add'](children, function(newNode, refNode, parent) { parent['replaceChild'](newNode, refNode); });
	},

	/*$
	 * @id clone
	 * @group ELEMENT
	 * @requires each
	 * @configurable default
	 * @name .clone()
	 * @syntax list.clone()
 	 * @module WEB
	 * Clones all HTML nodes in the given list by creating a deep copy of them. Strings in the list will remain unchanged,
	 * and everything else will be removed. Nested lists will be automatically flattened. Objects other than nodes, strings or lists
	 * will be removed.
	 *
	 * <var>clone()</var> uses the browser's <var>cloneNode()</var> function to clone HTML internally, but will remove the ids from
	 * all top-level elements. This allows you to specify an element to clone by id without creating duplicate ids in the document.
	 * The ids of child elements will removed. 
	 * 
	 * Please note that event handlers will not be cloned.
	 * 
	 * @example Using the following HTML:
	 * <pre>
	 * &lt;div id="comments">
	 *    &lt;div id="comment1">My comment.&lt;/div>
	 * &lt;/div>
	 * </pre> 
	 * Creating a clone:
	 * <pre>
	 * var myClone = $('#comment1').clone();
	 * </pre>
	 * Adding it below the original:
	 * <pre>
	 * $('#comments').add(myClone);
	 * </pre> 
	 *
	 * @return the list containing copies of all supported items in the original list.
	 * 
	 * @see ##add() can add a cloned element to the HTML document.
	 */
	'clone':  function() {
		return new M(clone(this));
	},

	/*$
	 * @id animate
	 * @group ANIMATION
	 * @requires loop dollar dial get
	 * @configurable default
	 * @name .animate()
	 * @syntax list.animate(properties)
	 * @syntax list.animate(properties, durationMs)
	 * @syntax list.animate(properties, durationMs, linearity)
	 * @syntax list.animate(properties, durationMs, interpolationFunc)
 	 * @module WEB
	 * Animates the items of the list by modifying their properties, CSS styles and attributes. <var>animate()</var> can work with numbers, strings that contain exactly one
	 * number, and with colors in the CSS notations 'rgb(r,g,b)', '#rrggbb' or '#rgb'.
	 *
	 * When you invoke the function, it will first read all old values from the object and extract their numbers and colors. These start values will be compared to 
	 * the destination values that have been specified in the given properties. Then <var>animate()</var> will create a background task using ##$.loop() that updates the 
	 * specified properties in frequent intervals so that they transition to their destination values.
	 *
	 * The start values will be obtained using ##get(). It is recommended to set the start values using ##set() before you start the animation, even if this is not
	 * always required.
	 *
	 * You can define the kind of transition using the <var>linearity</var> parameter. If you omit it or pass 0, animate's default algorithm will cause a smooth transition
	 * from the start value to the end value. If you pass 1, the transition will be linear, with a sudden start and end of the animation. Any value between 0 and 1 
	 * is also allowed and will give you a transition that is 'somewhat smooth'. 
	 * 
	 * Instead of the <var>linearity</var> function you can provide your own interpolation <code>function(startValue, endValue, t)</code> which will be
	 * called every time an interpolated value is required. <var>startValue</var> and <var>endValue</var> define the start and end values. <var>t</var>
	 * is a value between 0 and 1 that specifies the current state of the transition. The function must return the <var>startValue</var> for 0 and 
	 * the <var>endValue</var> for 1. For values between 0 and 1, the function should return a transitional value.
	 *
	 * If the start value of a property is a string containing a number, <var>animate()</var> will always ignore all the surrounding text and use the destination value as a template 
	 * for the value to write. This can cause problems if you mix units in CSS. For example, if the start value is '10%' and you specify an end value of '20px', animate
	 * will do an animation from '10px' to '20px'. It is not able to convert units. 
	 *
	 * <var>animate()</var> does not only support strings with units, but any string containing exactly one number. This allows you, among other things, to work with 
	 * IE-specific CSS properties.
	 * For example, you can transition from a start value 'alpha(opacity = 0)' to 'alpha(opacity = 100)'. 
	 *
	 * When you animate colors, <var>animate()</var> is able to convert between the three notations rgb(r,g,b), #rrggbb or #rgb. You can use them interchangeably, but you can not 
	 * use color names such as 'red'.
	 *
	 * Instead of the end value, you can also specify a <code>function(oldValue, index, obj)</code> to calculate the actual end value. 
	 *
	 * To allow more complex animation, <var>animate()</var> returns a ##promiseClass#Promise## that is fulfilled when the animation has finished. You can also stop
	 * a running animation by calling the promise's ##stop() function. If you only use the Web module, <var>stop()</var> is only available in the promise returned by
	 * <var>animate()</var>. If you have the full package, the stop function will be propagated and can be called at any point of a promise chain.
	 *
	 * @example Move an element:
	 * <pre>
	 * $('#myMovingDiv').set({$left: '0px', $top: '0px'})                // start values
	 *                  .animate({$left: '50px', $top: '100px'}, 1000);  // animation
	 * </pre>
	 *
	 * @example Change the color of an element:
	 * <pre>
	 * $('#myBlushingDiv').set({$backgroundColor: '#000000'})
	 *                    .animate({$backgroundColor: '#ff0000'}, 1000);
	 * </pre>
	 * 
	 * @example Using a function to calulate the values for animation:
	 * <pre>
	 * $('#myMovingDiv').animate({$left: function(v) { return (parseFloat(v) + 100) + 'px'; }}, 1000);  
	 * </pre>
	 * 
	 * @example Fade-out effect:
	 * <pre>
	 * $('#myFadingDiv').animate({$$fade: 0}, 1000);
	 * </pre>
	 * 
 	 * @example Slide-in effect:
	 * <pre>
	 * $('#myInvisibleDiv').animate({$$show:1, $$slide: 1}, 1000);
	 * </pre>
	 *
	 *
	 * @example Stopping a simple animation. This requires only the Web module.
	 * <pre>
	 * var div = $('#myMovingDiv').set({$left: '0px', $top: '0px'});
	 * var p = div.animate({$left: '800px', $top: '0px'}, 5000, 0);
	 * $('#stopButton').on('click', p.stop);
	 * });
	 * </pre>
	 *
	 * @example Chained animation using ##promiseClass#Promise## callbacks. The element is first moved to the position 200/0, then to 200/200
	 *          and finally moves to 100/100.
	 *          A stop button allows you to interrupt the animation.<br/>
	 *          Please note that while chaining animations requires only the Web module,  
	 *          stopping a chained animation requires the full distribution with both Web and Util module. Only the complete Promises implementation 
	 *          supports this.
	 * <pre>
	 * var div = $('#myMovingDiv').set({$left: '0px', $top: '0px'});
	 * var p = div.animate({$left: '200px', $top: '0px'}, 600, 0)
	 *    .then(function() {
	 *           return div.animate({$left: '200px', $top: '200px'}, 800, 0);
	 *    }).then(function() {
	 *           return div.animate({$left: '100px', $top: '100px'}, 400);
	 *    });
	 *    
	 *  $('#stopButton').on('click', p.stop); // stopping requires Web+Util modules!
	 * });
	 * </pre>
	 *
	 *
	 * @param properties a property map describing the end values of the corresponding properties. The names can use the
	 *                   set() syntax ('@' prefix for attributes, '$' for styles, '$$fade' for fading,  '$$slide' for slide effects, 
	 *                   '$$scrollX' and '$$scrollY' for scroll coordinates). 
	 *                   Values must be either numbers, numbers with units (e.g. "2 px") or colors ('rgb(r,g,b)', '#rrggbb' or '#rgb') or
	 *                   a <code>function(oldValue, index, obj)</code>  to determine the new value. The function  will be invoked for each list element 
	 *                   to evaluate the new value: 
	 *                   <dl><dt>oldValue</dt><dd>The old value of the property to be changed, as returned by ##get().
	 *                   For the CSS style names, this is the computed style of the property </dd>
	 *                   <dt>index</dt><dd>The list index of the object owning the property</dd>
	 *                   <dt>obj</dt><dd>The list element owning the property.<dd>
	 *                   <dt class="returnValue">(callback return value)</dt><dd>The destination value to be set.</dd></dl> 
	 * @param durationMs optional the duration of the animation in milliseconds. Default: 500ms.
	 * @param linearity optional defines whether the animation should be linear (1), very smooth (0) or something in between. Default: 0.
	 * @param interpolationFunc optional an interpolation <code>function(startValue, endValue, t)</code> which will be
	 *             called every time an interpolated value is required:
	 *             <dl>
	 *             <dt>startValue</dt><dd>The start value of the transition.</dd>
	 *             <dt>endValue</dt><dd>The end value of the transition.</dd>
	 *             <dt>t</dt><dd>A value between 0 and 1 that specifies the state of the transition.</dd>
	 *             <dt class="returnValue">(callback return value)</dt><dd>The value at the time <var>t</var>.</dd>
	 *             </dl> 
	 * @return a ##promiseClass#Promise## object to monitor the animation's progress. 
	 *         It is fulfilled when the animation ended, and rejected if the animation had been stopped.
	 *         The fulfillment handler will be called as <code>function(list)</code>:
	 *         <dl><dt>list</dt><dd>A reference to the animated list.</dd></dl> 
	 *         The rejection handler is called as <code>function()</code> without arguments. 
	 *         The returned promise also has property 'stop', which is a function. Invoke the function without arguments to
	 *         interrupt a running animation. It will return the animations actual duration in ms. 
	 *         
	 * @see ##toggle() can be used to define animations between two states.
	 * @see ##$.loop() allows you to write more complex animations.
	 */	
	'animate': function (properties, duration, linearity) {
		var prom = promise(); 
		var self = this;
		var dials = collector(flexiEach, this, function(li, index) {
			var elList = $(li), dialStartProps, dialEndProps = {};
			eachObj(dialStartProps = elList.get(properties), function(name, start) {
				var dest = properties[name];
				dialEndProps[name] = isFunction(dest) ? dest(start, index, li) : 
					name == '$$slide' ? getNaturalHeight(elList, dest) : dest;
			});
			return elList['dial'](dialStartProps, dialEndProps, linearity);
		});

		var durationMs = duration || 500;
		var loopStop;

		prom['stop0'] = function() { prom(_false); return loopStop(); };

		// start animation
		loopStop = $.loop(function(timePassedMs) {
			if (timePassedMs >= durationMs || timePassedMs < 0) {
				timePassedMs = durationMs;
				loopStop();
				prom(_true, [self]);
			}

			callList(dials, [timePassedMs/durationMs]);
		});
		return prom;		
	},

	/*$
	 * @id dial
	 * @group ANIMATION
	 * @requires get set
	 * @configurable default
	 * @name .dial()
	 * @syntax list.dial(state1, state2)
	 * @syntax list.dial(state1, state2, linearity)
	 * @syntax list.dial(state1, state2, interpolationFunc)
	 * @module WEB
	 * 
	 * Creates a function allows you to set all list members to one of two states or any transitional state between them. 
	 * The states are specified using ##set() - compatible object maps containing the properties to set.
	 * Pass 0 to the function to set the first state for all list members, or 1 to set the second state.
	 * Any value between 0 and 1 will cause <var>dial()</var> to interpolate between the two states.
	 * Interpolation is supported for all numeric values, including those that have a string suffix (e.g. 'px' unit), 
	 * and for colors in all RGB notations (e.g. '#f00', '#f0d1ff' or 'rgb(23,0,100)').
	 *
	 * You can use the optional third parameter to define the kind of interpolation to use for values between 0 and 1.
	 * If 0, the dial uses a smooth, cubic interpolation. For 1 it uses linear interpolation. Values between 0 and 1
	 * will mix both algorithms. You can also specify your own interpolation function.
	 *
	 * @example Creates a dial function that changes the background color of the page.
	 * <pre>
	 * var light = $('body').dial({$backgroundColor: #000}, {$backgroundColor: #fff});
	 * light(0);     // set the first state (background color to #000)
	 * light(1);     // sets second state (background color to #fff).
	 * light(0.5);  // interpolates between two states, sets background color to #888.
	 * light(0.25);  // interpolates between two states, sets background color to #444.
	 * </pre>
	 * 
	 * @param state1 a property map in ##set() syntax describing the first state of the properties. The properties will be set for all elements of the list.
	 * @param state2 a property map describing the second state of the properties. Uses ##set() syntax. 
	 * @param linearity optional defines whether the animation should be linear (1), very smooth (0) or something in between. Default: 0. Ignored if durationMs is 0.
	 * @param interpolationFunc optional an interpolation <code>function(startValue, endValue, t)</code> which will be called every time
	 *       an interpolated value is required: 
	 *           <dl>
 	 *             <dt>startValue</dt><dd>The start value of the transition.</dd>
 	 *             <dt>endValue</dt><dd>The end value of the transition.</dd>
 	 *           <dt>t</dt><dd>A value between 0 and 1 that specifies the state of the transition.</dd>
 	 *             <dt class="returnValue">(callback return value)</dt><dd>The value at the time <var>t</var>.</dd>
 	 *             </dl> 		 
 	 * @return a dial function <code>function(newPosition)</code> that will set the state.
	 *             <dl>
	 *             <dt>newPosition</dt><dd>If 0 or lower, set the list members to the first state. 
	 *             If 1 or higher, sets them to the second state. For any value betweeen 0 and 1, the list members
	 *             will be set to interpolated values.</dd>
	 *             </dl>
	 *             
	 * @see ##toggle() is a related function that allows you to define two states and automatically animate between them.
	 */
	'dial': function (properties1, properties2, linf) {
		var self = this;
		var linearity = linf || 0;
		var interpolate = isFunction(linearity) ? linearity : function(startValue, endValue, t) {
			return startValue + t * (endValue - startValue) * (linearity + (1-linearity) * t * (3 - 2*t)); 
		};

		function getColorComponent(colorCode, index) {
			return (/^#/.test(colorCode)) ?
				parseInt(colorCode.length > 6 ? colorCode.substr(1+index*2, 2) : ((colorCode=colorCode.charAt(1+index))+colorCode), 16)
				:
				parseInt(replace(colorCode, /[^\d,]+/g).split(',')[index]);
		}
		return function(t) {
			eachObj(properties1, function(name, start) {
				var end=properties2[name], i = 0; 
				self['set'](name, t<=0?start:t>=1?end:
					 (/^#|rgb\(/.test(end)) ? // color in format '#rgb' or '#rrggbb' or 'rgb(r,g,b)'?
								('rgb('+ Math.round(interpolate(getColorComponent(start, i), getColorComponent(end, i++), t)) // expression repeated 3 times for gzip
								+ ',' + Math.round(interpolate(getColorComponent(start, i), getColorComponent(end, i++), t))
								+ ',' + Math.round(interpolate(getColorComponent(start, i), getColorComponent(end, i++), t))
							    + ')')
							:
								replace(end, /-?[\d.]+/, toString(interpolate(extractNumber(start), extractNumber(end), t)))
				);
			});
		};
	},

	/*$
	 * @id toggle
	 * @group ANIMATION
	 * @requires animate set
	 * @configurable default
	 * @name .toggle()
	 * @syntax list.toggle(cssClasses)
	 * @syntax list.toggle(state1, state2)
	 * @syntax list.toggle(state1, state2, durationMs)
	 * @syntax list.toggle(state1, state2, durationMs, linearity)
	 * @syntax list.toggle(state1, state2, durationMs, interpolationFunction)
	 * @module WEB
	 * 
	 * Creates a function that switches between the two given states for the list. The states use the ##set() property syntax. You can also
	 * just pass a string of CSS classes, as you do with <var>set()</var>.
	 *
	 * If no duration is given, the returned function changes the state immediately using ##set(). If a duration has been passed, the returned function
	 * uses ##animate() to smoothly transition the state. If the returned function is invoked while an animation is running, it interrupts the 
	 * animation and returns to the other state.
	 *
	 *
	 * @example Creates a toggle function that changes the background color of the page.
	 * <pre>
	 * var light = $('body').set({$backgroundColor: #000}, {$backgroundColor: #fff});
	 * light();      // toggles state to second state
	 * light(false); // sets first state (background color to #000).
	 * light(true);  // sets second state (background color to #fff).
	 * light();      // toggles state to first state
	 * </pre>
	 * 
	 * @example Takes the previous function, but adds it as an onclick event handler that toggles the color.
	 * <pre>
	 * var light = $('body').toggle({$backgroundColor: #000}, {$backgroundColor: #fff});
	 * $('#mySwitch').on('click', light);
	 * </pre>
	 *
	 * @example Using an animated transition by passing a duration:
	 * <pre>
	 * var dimmer = $('body').toggle({$backgroundColor: #000}, {$backgroundColor: #fff}, 500);
	 * $('#mySwitch').on('click', dimmer);
	 * </pre>
	 *
	 * @example Toggling CSS classes using the full syntax:
	 * <pre>
	 * var t = $('#myElement').toggle({$: '-myClass1 -myClass2'}, {$: '+myClass1 +myClass2'});
	 * $('#myController').on('click', t);
	 * </pre>
	 *
	 * @example There is a shortcut for toggling CSS classes. Just list them space-separated in a string:
	 * <pre>
	 * var t = $('#myElement').toggle('myClass1 myClass2');
	 * </pre>
	 * 
	 * @param cssClasses a string containing space-separated CSS class names to toggle. Classes are disabled in the first state
	 *                   and enabled in the second.
	 * @param state1 a property map in ##set() syntax describing the initial state of the properties. The properties will automatically be set when the
	 *                   <var>toggle()</var> function is created. The properties will be set for all elements of the list.
	 * @param state2 a property map describing the second state of the properties. Uses ##set() syntax, like the other state. 
	 * @param durationMs optional if set, the duration of the animation in milliseconds. By default, there is no animation and the 
	 * 					 properties will be changed immediately.
	 * @param linearity optional defines whether the animation should be linear (1), very smooth (0) or something in between. Default: 0. Ignored if durationMs is 0.
	 * @param interpolationFunc optional an interpolation <code>function(startValue, endValue, t)</code> for the animation which will be called every 
	 *     time an interpolated value is required: 
	 *           <dl>
 	 *             <dt>startValue</dt><dd>The start value of the transition.</dd>
 	 *             <dt>endValue</dt><dd>The end value of the transition.</dd>
 	 *           <dt>t</dt><dd>A value between 0 and 1 that specifies the state of the transition.</dd>
 	 *             <dt class="returnValue">(callback return value)</dt><dd>The value at the time <var>t</var>.</dd>
 	 *             </dl> 		 
 	 * @return a toggle function <code>function(newState)</code> that will toggle between the two states, or set a specific state.
	 *             <dl>
	 *             <dt>newState (optional)</dt><dd>If a boolean <var>true</var> or <var>false</var> is given, 
	 *             the toggle will set the first or second state respectively. If called with any other value, or without a value,
	 *             the function toggles to the other state.</dd>
	 *             </dl>
	 *             
	 * @see ##dial() is a similar function that allows you to smoothly interpolate between two states.
	 *
	 */
	'toggle': function(stateDesc1, stateDesc2, durationMs, linearity) {
		var self = this;
		var state = _false;
		var promise;
		var stateDesc;

		if (stateDesc2) {
			self['set'](stateDesc1);
			return function(newState) {
					if (newState !== state) {
						stateDesc = (state = newState===_true||newState===_false ? newState : !state) ? stateDesc2 : stateDesc1;

						if (durationMs) 
							(promise = self['animate'](stateDesc, promise ? promise['stop']() : durationMs, linearity))['then'](function(){promise=_null;});
						else
							self['set'](stateDesc);
					}
				};
		}
		else
			return self['toggle'](replace(stateDesc1, /\b(?=\w)/g, '-'), replace(stateDesc1, /\b(?=\w)/g, '+'));
	},

	/*$
	 * @id values
	 * @group REQUEST
	 * @requires each
	 * @configurable default
	 * @name .values()
	 * @syntax list.values()
	 * @syntax list.values(dataMap)
	 * @module WEB
	 * Creates a name/value map from the given form. values() looks at the list's form elements and writes each element's name into the map,
	 * using the element name as key and the element's value as value. As there can be more than one value with the same name, 
	 * the map's values are arrays if there is more than one value with the same name in the form. Form elements without name will be ignored.
	 *
	 * values() will use all elements in the list that have a name, such as input, textarea and select elements. For form elements in the list, all child form
	 * elements will be serialized.
	 * 
	 * The map format returned by values() is exactly the format used by request().
	 * 
	 * Please note that when you include an input element more than once, for example by having the input itself and its form in the list, the
	 * value will be included twice in the list.
	 *
	 * @example Serialize a form and send it as request parameters:
	 * <pre>
	 * $.request('get', '/exampleService', $('#myForm').values(), resultHandler);
	 * </pre>
	 * 
	 * @example Serialize only some selected input fields:
	 * <pre>
	 * var data = $('#myText, input.myRadios').values();
	 * </pre>
	 * 
	 * @param dataMap optional an optional map to write the values into. If not given, a new empty map will be created
	 * @return a map containing name->value pairs, using strings as name and value. If there is more than one value with the same name,
	 *         <var>values()</var> creates an array containing all values. 
	 *       
	 * @see ##$.request() can submit form data serialized by <var>values()</var> as HTTP POST.
	 */
	'values': function(data) {
		var r = data || {};
		this['each'](function(el) {
			var n = el['name'], v = toString(el['value']);
			if (/form/i.test(el['tagName']))
				// @condblock ie9compatibility 
				for (var i = 0; i < el['elements'].length; i++) // can't call directly, as IE<=9's elements have a nodeType prop and isList does not work
					$(el['elements'][i])['values'](r); 
				// @condend
				// @cond !ie9compatibility $(el['elements'])['values'](r);
			else if (n && (!/kbox|dio/i.test(el['type']) || el['checked'])) { // kbox|dio => short for checkbox, radio
				r[n] = r[n] == _null ? v : collector(flexiEach, [r[n], v], nonOp);
			}
		});
		return r;
	},

	/*$
	 * @id offset
	 * @group SELECTORS
	 * @requires dollar
	 * @configurable default
	 * @name .offset()
	 * @syntax list.offset()
	 * Returns the pixel page coordinates of the list's first element. Page coordinates are the pixel coordinates within the document, 
	 * with 0/0 being the upper left corner, independent of the user's current view (which depends on the user's current scroll position and zoom level).
	 *
	 * @example Displays the position of the element with the id 'myElement' in the element 'resultElement':
	 * <pre>
	 * var pos = $('#myElement').offset();
	 * $('#resultElement').ht('#myElement's position is left={x} top={y}', pos);
	 * </pre>
	 *
	 * @param element the element whose coordinates should be determined
	 * @return an object containing pixel coordinates in two properties 'x' and 'y'
	 * 
	 * @see ##get() can be used to read more general properties of a list element.
	 */
	'offset': function() {
		var elem = this[0];
		var dest = {'x': 0, 'y': 0};
		while (elem) {
			dest['x'] += elem['offsetLeft'];
			dest['y'] += elem['offsetTop'];
			elem = elem['offsetParent'];
		}
		return dest;
	},

	/*$
	 * @id on
	 * @group EVENTS
	 * @requires dollar each
	 * @configurable default
	 * @name .on()
	 * @syntax list.on(names, eventHandler)
	 * @syntax list.on(selector, names, eventHandler)
	 * @syntax list.on(names, customFunc, args)
	 * @syntax list.on(selector, names, customFunc, args)
	 * @syntax list.on(names, eventHandler, bubbleSelector)
	 * @syntax list.on(names, customFunc, args, bubbleSelector)
	 * @module WEB
	 * Registers the function as event handler for all items in the list.
	 * 
	 * By default, Minified cancels event propagation and disables element's default behavior for all elements that have an event handler. 
	 * You can override this, either by prefixing the event name with a '|', or by prefixing them with '?' and returning a <var>true</var>  
	 * in the handler. Both will reinstate the original JavaScript behavior. 
	 * 
	 * Handlers are called with the original event object as first argument, the index of the source element in the 
	 * list as second argument and 'this' set to the source element of the event (e.g. the button that has been clicked). 
	 * 
	 * Instead of the event objects, you can also pass an array of arguments that will be passed instead of event object and index. 
	 *
	 * Optionally you can specify two a selector strings to qualify only certain events. The first one is a selector
	 * that allows you to select only specific children of the list elements. This is mostly useful for adding events to DOM trees
	 * generated using ##HTML() or ##EE().
	 * 
	 * The second type of selector is the bubble selector that allows you to receive only events that bubbled up from 
	 * elements matching the selector. The selector is executed in the context of the element you registered on to identify whether the
	 * original target of the event qualifies. If not, the handler is not called.
	 * 
	 * Minified always registers event handlers with event bubbling enabled. Event capture is not supported.
	 * 
	 * Event handlers can be unregistered using #off#$.off().
	 * 
	 * @example Adds a handler to all divs which paints the div background color to red when clicked. 
	 * <pre>
	 * $('div').on('click', function() {
	 *    this.style.backgroundColor = 'red';    // 'this' contains the element that caused the event
	 * });
	 * </pre>
	 *
	 * @example Registers a handler to call a method setStatus('running') using an inline function:
	 * <pre>
	 * $('#myButton').on('click', function() {
	 *    setStatus('running');
	 * });
	 * </pre>
	 * The previous example can bere written like this, using <var>on()</var>'s <var>args</var> parameter:
	 * <pre>
	 * $('#myButton').on('click', setStatus, ['running']);
	 * </pre>
	 *
	 * @example Adds two handlers on an input field. The event names are prefixed with '|' and thus keep their original behavior: 
	 * <pre>
	 * $('#myInput').on('|keypress |keydown', function() {
	 *    // do something
	 * });
	 * </pre>
	 * 
	 * @example Adds a click handler that will abort the operation by returning false, unless the user confirms it:
	 * <pre>
	 * $('#myLink').on('?click', function() {
	 *    return window.confirm('Really leave?');
	 * });
	 * </pre>
	 * 
	 * @example Adds a button and registers a click handler for it using a sub-selector.
	 * <pre>
	 * $('#myForm').add(HTML("&lt;li>&ltbutton>click me&lt/button>&lt/li>").on('button', 'click', myClickHandler));
	 * </pre>
	 * 
	 * @example Adds listeners for all clicks on a table's rows using the bubble selector 'tr'.
	 * <pre>
	 * $('#table').on('change', 'tr', function(event, index, selectedIndex) {
	 *    alert("Click on table row number: " + selectedIndex);
	 * }, 'tr');
	 * </pre>
	 * Please note that bubble selectors will even listen to events for
	 * table rows that have been added <strong>after you registered for the events</strong>.
	 * 
	 * @param selector optional a selector string for ##dollar#$()## to register the event only on those children of the list elements that
	 *                match the selector. 
	 *                Supports all valid parameters for <var>$()</var> except functions.            
	 * @param names the space-separated names of the events to register for, e.g. 'click'. Case-sensitive. The 'on' prefix in front of 
	 *             the name must not used. You can register the handler for more than one event by specifying several 
	 *             space-separated event names. If the name is prefixed
	 *             with '|' (pipe), the event will be passed through and the event's default actions will be executed by the browser. 
	 *             If the name is prefixed with '?', the event will only be passed through if the handler returns <var>true</var>.
	 * @param eventHandler the callback <code>function(event, index)</code> to invoke when the event has been triggered:
	 * 		  <dl>
 	 *             <dt>event</dt><dd>The original DOM event object.</dd>
 	 *             <dt>index</dt><dd>The index of the target object in the ##list#Minified list## .</dd>
 	 *             <dt class="this">this</dt><dd>A ##list#Minified list## containing the target element as only item (same as <var>event.target</var>).</dd>
 	 *             <dt class="returnValue">(callback return value)</dt><dd>The return value will only be used if the event name prefix was '?'.
 	 *             Then, a return value <var>false</var> will stop all further processing of the event and disable event bubbling.
 	 *             <var>true</var> will keep the event alive.</dd>
 	 *             </dl>
	 * @param customFunc a function to be called instead of a regular event handler with the arguments given in <var>args</var>.
	 *                   'this' will be a ##list#Minified list## containing the target element as only item (same element as <var>event.target</var>).
	 * @param args optional an array of arguments to pass to the custom callback function instead of the event objects. If omitted, the function is
	 *             called as event handler with the event object as argument.
	 * @param bubbleSelector optional a selector string for ##dollar#$()## to receive only events that bubbled up from an
	 *                element that matches this selector.
	 *                Supports all valid parameters for <var>$()</var> except functions. Analog to ##is(), 
	 *                the selector is optimized for the simple patterns '.classname', 'tagname' and 'tagname.classname'.                
	 * @return the list
	 * @see ##off() allows you to unregister an event handler.
	 * @see ##onClick() as a shortcut for 'click' events.
	 * @see ##onOver() to simplify mouseover/mouseout events.
	 * @see ##onFocus() as convenient way to register for focus events.
	 * @see ##onChange() to get notified when an input's content changes.
	 */
	'on': on,

	/*$
	 * @id onover
	 * @group EVENTS
	 * @requires on dollar up
	 * @configurable default
	 * @name .onOver()
	 * @syntax list.onOver(handler)
	 * @syntax list.onOver(selector, handler)
	 * @module WEB
	 * Registers a function to be called whenever the mouse pointer enters or leaves one of the list's elements.
	 * The handler is called with a boolean parameter, <var>true</var> for entering and <var>false</var> for leaving,
	 * which allows you to use any ##toggle() function as handler.
	 * 
	 * @example Creates a toggle that animates the element on mouse over:
	 * <pre>
	 * $('#mouseSensitive').onOver($('#mouseSensitive').toggle({$color:'#000'}, {$color:'#f00'}, 500));
	 * </pre>
	 * 
	 * @param selector optional a selector string for ##dollar#$()## to register the event only on those children of the list elements that
	 *                match the selector. 
	 *                Supports all valid parameters for <var>$()</var> except functions.           
	 * @param toggle the callback <code>function(isOver, event)</code> to invoke when the event has been triggered:
	 * 		  <dl>
 	 *             <dt>isOver</dt><dd><var>true</var> if mouse is entering any element, <var>false</var> when leaving.</dd>
 	 *             <dt>event</dt><dd>The original event object given to ##on().</dd>
 	 *             <dt class="this">this</dt><dd>A ##list#Minified list## containing the target element that caused the event as only item.</dd>
 	 *             </dl>
	 * @return the list
	 * @see ##on() provides low-level event registration.
	 */
	'onOver': function(subSelect, toggle) {
		var self = this, curOverState = [];
		if (!toggle)
			return this['onOver'](_null, subSelect);
		else 
			return this['on'](subSelect, '|mouseover |mouseout', function(ev, index) {
				var overState = ev['type'] != 'mouseout';
				// @condblock ie9compatibility 
				var relatedTarget = ev['relatedTarget'] || ev['toElement'];
				// @condend
				// @cond !ie9compatibility var relatedTarget = ev['relatedTarget'];
				if (curOverState[index] !== overState) {
					if (overState || (!relatedTarget) || (relatedTarget != self[index] && !$(relatedTarget)['up'](self[index]).length)) {
						curOverState[index] = overState;
						toggle.call(this, overState, ev);
					}
				}
			});
	},

	/*$
	 * @id onfocus
	 * @group EVENTS
	 * @requires on dollar 
	 * @configurable default
	 * @name .onFocus()
	 * @syntax list.onFocus(handler)
	 * @syntax list.onFocus(selector, handler)
	 * @module WEB
	 * Registers a function to be called when a list element either gets the focus or the focus is removed (blur).
	 * The handler is called with a boolean parameter, <var>true</var> for entering and <var>false</var> for leaving,
	 * which allows you to use any ##toggle() function as handler.
	 * 
	 * @example Creates a toggle that changes the text color of the element on focus:
	 * <pre>
	 * $('#focusSensitive').onFocus($('#focusSensitive').toggle({$color:'#000'}, {$color:'#f00'}, 100));
	 * </pre>
	 * 
	 * @param selector optional a selector string for ##dollar#$()## to register the event only on those children of the list elements that
	 *                match the selector. 
	 *                Supports all valid parameters for <var>$()</var> except functions.           
	 * @param toggle the callback <code>function(hasFocus)</code> to invoke when the event has been triggered:
	 * 		  <dl>
 	 *             <dt>hasFocus</dt><dd><var>true</var> if an element gets the focus, <var>false</var> when an element looses it.</dd>
 	 *             <dt class="this">this</dt><dd>A ##list#Minified list## containing the target element that caused the event as only item.</dd>
 	 *             </dl>
	 * @return the list
	 * @see ##on() provides low-level event registration.
	 */
	'onFocus': function(selector, handler) {
		if (!handler)
			return this['onFocus'](_null, selector);
		else
			return this['on'](selector, '|focus', handler, [_true])
				       ['on'](selector, '|blur', handler, [_false]);
	},

	/*$
	 * @id onchange
	 * @group EVENTS
	 * @requires on dollar each
	 * @configurable default
	 * @name .onChange()
	 * @syntax list.onChange(handler)
	 * @syntax list.onChange(selector, handler)
	 * @module WEB
	 * Registers a handler to be called whenever content of the list's input fields changes. The handler is
	 * called in realtime and does not wait for the focus to change. Text fields as well
	 * as checkboxes and radio buttons are supported. The handler is called with the new value as first argument.
	 * It is boolean for checkbox/radio buttons and the new text as string for text fields. 
	 * 
	 * @example Creates a handler that writes the input's content into a text node:
	 * <pre>
	 * $('#myField').onChange(function(newValue, index, ev) { $('#target').fill(newValue); });
	 * </pre>
	 * 
	 * @param selector optional a selector string for ##dollar#$()## to register the event only on those children of the list elements that
	 *                match the selector. 
	 *                Supports all valid parameters for <var>$()</var> except functions.            
	 * @param handler the callback <code>function(newValue, index, ev)</code> to invoke when the event has been triggered:
	 * 		  <dl>
 	 *             <dt>newValue</dt><dd>For text fields the new <var>value</var> string. 
 	 *              For checkboxes/radio buttons it is the boolean returned by <var>checked</var>.</dd>
 	 *             <dt>index</dt><dd>The index of the target element in the ##list#Minified list## .</dd>
 	 *             <dt class="this">this</dt><dd>A ##list#Minified list## containing the target element that caused the event as only item.</dd>
 	 *             </dl>
	 * @return the list
	 * @see ##on() provides low-level event registration.
	 */
	'onChange': function onChange(subSelect, handler) {
		var oldValues = [];
		if (handler)
			return this['each'](function(el, index) {
				function register(eventNames, property) { $(el)['on'](subSelect, eventNames,  function() {handler.call(this, el[property], index);}); }
				if (/kbox|dio/i.test(el['type'])) {
					register('|click', 'checked');
				}
				else { 
					register('|input', 'value', index);
				}
			});
		else
			return this['onChange'](_null, subSelect); 

	},

	/*$
	 * @id onclick
	 * @group EVENTS
	 * @requires on 
	 * @configurable default
	 * @name .onClick()
	 * @syntax list.onClick(handler)
	 * @syntax list.onClick(customFunc, args)
	 * @syntax list.onClick(selector, handler)
	 * @syntax list.onClick(selector, customFunc, args)
	 * @module WEB
	 * Registers a function to be called for 'click' events. This is only a convenience method and identical to calling
	 * ##on() with 'click' as event type.
	 * You can specify a sub-selector to register only for specific children of the list elements, and you can
	 * specify arguments to pass to the handler instead of the default event object.
	 * 
	 * Event handlers registered using <var>onClick()</var> can be unregistered using ##$.off().
	 * 
	 * @example Says hello if you click:
	 * <pre>
	 * $('#sayHello').onClick(function() { window.alert('Hello!'); });
	 * </pre>
	 * 
	 * @example Using arguments:
	 * <pre>
	 * function saySomething(what) { window.alert(what); }
	 * 
	 * $('#sayHello').onClick(saySomething, ['Hello!']);
	 * $('#sayBye').onClick(saySomething, ['Goodbye!']);
	 * </pre>
	 * 
 	 * @example Creates an event handler that toggles the color of the text on click:
	 * <pre>
	 * $('#changeColor').onClick($('#colorChanger').toggle({$color:'#000'}, {$color:'#f00'}, 100));
	 * </pre>
	 * @param selector optional a selector string for ##dollar#$()## to register the event only on those children of the list elements that
	 *                match the selector. 
	 *                Supports all valid parameters for <var>$()</var> except functions.            
	 * @param eventHandler the callback <code>function(event, index)</code> to invoke when the event has been triggered:
	 * 		  <dl>
 	 *             <dt>event</dt><dd>The original DOM event object.</dd>
 	 *             <dt>index</dt><dd>The index of the target object in the ##list#Minified list## .</dd>
 	 *             <dt class="this">this</dt><dd>A ##list#Minified list## containing the target element as only item (same element as <var>event.target</var>).</dd>
 	 *        </dl>
	 * @param customFunc a function to be called instead of a regular event handler with the arguments given in <var>args</var>.
	 *                   'this' will be a ##list#Minified list## containing the target element as only item (same element as <var>event.target</var>).
	 * @param args optional an array of arguments to pass to the custom callback function instead of the event objects. If omitted, the function is
	 *             called as event handler with the event object as argument.
	 * @return the list	 
	 * @see ##on() provides low-level event registration.
	 * @see ##off() can unregister <var>onClick</var> event handlers.
	 */
	'onClick': function(subSelect, handler, args) {
	     return isFunction(subSelect) ? this['on']('click', subSelect, handler) : this['on'](subSelect, 'click', handler, args);
	},

	/*$
	 * @id trigger
	 * @group EVENTS
	 * @requires on each
	 * @configurable default
	 * @name .trigger()
	 * @syntax list.trigger(name)
	 * @syntax list.trigger(name, eventObject)
	 * @module WEB
	 * 
	 * Triggers event handlers registered with ##on().
	 * Any event that has been previously registered using ##on() can be invoked with <var>trigger()</var>. Please note that 
	 * it will not simulate the default behavior on the elements, such as a form submit when you click on a submit button. Event bubbling
	 * is supported, thus unless there's an event handler that cancels the event, the event will be triggered on all parent elements.
	 * 
	 * 
	 * @example Simulates a 'click' event on the button. 
	 * <pre>
	 * $('#myButton').trigger('click');
	 * </pre>
	 *
	 * @param name a single event name to trigger
	 * @param eventObj optional an object to pass to the event handler, provided the handler does not have custom arguments.
	 *                 Anything you pass here will be directly given to event handlers as event object, so you need to know what 
	 *                 they expect.
	 * @return the list
	 * @see ##on() registers events that can be triggered.
	 */
	'trigger': function (eventName, eventObj) {
		return this['each'](function(element, index) {
			var stopBubble, el = element;

			while(el && !stopBubble) {
			eachObj(el['M'], function(id, f) {
			stopBubble = stopBubble || f(eventName, eventObj, element); 
			});
			el = el['parentNode'];
			}
		});
	}

 	/*$
 	 * @stop
 	 */
		// @cond !trigger dummyTrigger:0
		,
		///#/snippet webListFuncs
	///#snippet extrasListFuncs

		/*$ 
		 * @id per
		 * @group LIST 
		 * @requires
		 * @configurable default 
		 * @name .per() 
		 * @syntax list.per(callback) 
		 * @syntax list.per(subSelector, callback) 
		 * @module UTIL
		 * Invokes the handler function for each list element with a single-element list containing only this element. It is very similar to
		 * ##each(), but instead of giving the element itself it wraps the element in a ##list#Minified list##. Additionally, you can specify 
		 * a sub-selector to iterate over the descendants matches by the selector instead of the list elements. 
		 *
		 * @example Create a mouseover toggle for a list:
		 * <pre>$('.toggler').per(function(el, i) {
		 *     el.onOver(el.toggle('myeffect'));
		 * });</pre>
		 * 
		 * @example Create click handlers for elements in a list:
		 * <pre>$('#list').add(HTML('{{each}}&lt;li>{{this.name}} &lt;a class="del" href="#">Delete&lt;/a>&lt;/li>{{each}}', items)
		 *                .per('.del', function(el, index) {
		 *                   el.on('click', deleteItemByName, [items[index].name]);
		 *                }));</pre>
		 *
		 * @param subSelector optional a selector as valid as first argument for #dollar#$(), to identify the descendants to iterate over.
		 * @param callback The callback <code>function(itemList, index)</code> to invoke for each list element. 
		 *                 <dl><dt>item</dt><dd>The current list element wrapped in a Minfified list.</dd>
		 *                 <dt>index</dt><dd>The second the zero-based index of the current element.</dd>
		 *                 <dt class="this">this</dt><dd>The list that is being iterated. If a sub-selector
		 *                 is being used, it is the list that resulted from using the sub-selector.</dd></dl>
		 *                 The callback's return value will be ignored.
		 * @return the list. Even if you specified a sub-selector, it will always return the original list.
		 */
		'per': function(subSelector, handler) {
			if (isFunction(subSelector))
				for (var len = this.length, i = 0; i < len; i++)
					subSelector.call(this, new M(_null, this[i]), i);
			else
				$(subSelector, this)['per'](handler);
			return this;
		},

		/*$
		 * @id ht
		 * @group ELEMENT
		 * @requires set template
		 * @configurable default
		 * @name .ht()
		 * @syntax list.ht(templateString)
		 * @syntax list.ht(templateString, object)
		 * @syntax list.ht(templateFunction)
		 * @syntax list.ht(templateFunction, object)
		 * @syntax list.ht(idSelector)
		 * @syntax list.ht(idSelector, object)
		 * @module WEB+UTIL
		 * Replaces the content of the list elements with the HTML generated using the given template. The template uses
		 * ##template() syntax and HTML-escaped its output using ##escapeHtml(). 
		 * 
		 * @example When you have a HTML snippet like this:
		 * <pre>
		 * &lt;div id="price">&lt;/div>
		 * </pre> 
		 * Then you can format the price value like this:
		 * <pre>
		 * var price = 14.9;
		 * $('#price').ht('&lt;b>${{::0.00}}&lt;/b>', price);
		 * </pre>
		 * Results in:
		 * <pre>
		 * &lt;div id="price">&lt;b>$14.90&lt;/b>&lt;/div>
		 * </pre> 
		 *
		 * @example Render a list of names:
		 * <pre>
		 * var names = [ {first: 'James', last: 'Sullivan'}, 
		 *               {first: 'Michael', last: 'Wazowski'} ];
		 * $('#list').ht('&lt;h2>{{listName}}&lt;/h2>'+
		 *               '&lt;ul>{{each n: names}}&lt;li>{{n.first}} {{n.last}}&lt;/li>{{/each}}&lt;/ul>', 
		 *               {listName: 'Guys', names: names});
		 * </pre>
		 * The code creates this:
		 * <pre>
		 * &lt;h2>Guys&lt;/h2>
		 * &lt;ul>&lt;li>James Sullivan&lt;li>&lt;li>Michael Wazowski&lt;/li>&lt;/ul>
		 * </pre> 
		 * 
		 * @example You can store templates in &lt;script&gt; tags. First you need to create a &lt;script&gt; tag with a type not
		 *          supported by the browser and put your template in there, like this:
		 * <pre>&lt;script id="myTimeTpl" type="minified-template"&gt;The time is {{HH:mm:ss}}.&lt;/script&gt;</pre>
		 * Then you can specify the tag's id directly to access it:
		 * <pre>$('#timeDisplay').ht('#myTimeTpl', new Date());</pre>
		 *
		 * @param templateString the template using ##template() syntax. Please note, because this is a template, you should
		 *                     avoid creating the template itself dynamically, as compiling templates is expensive and
		 *                     Minified will cache only a limited number of templates. Exception: If the template string does not use
		 *                     any template functionality (no {{}}), it does not need to be compiled and won't be cached.<br/>
		 *                     The template will use ##escapeHtml() as escape function, so all template substitutions will be HTML-escaped,
		 *                     unless you use triple curly-braces.
		 * @param templateFunction instead of a HTML template, <var>ht()</var> can also use a template function, e.g. one
		 *                         created by ##template(). It will be invoked with the object as only argument.
		 * @param idSelector if you pass an ID CSS selector in the form "#myScript", Minified will recognize this and use the content 
		 *                   of the specified &lt;script> element as template. This allows you to put your template into 
		 *                   a &lt;script&gt; tag with a non-JavaScript type (see example). Any string that starts with '#' and does not
		 *                   contain any spaces is used as selector.
		 * @param object optional the object to pass to the template. If object is not set, the template is called with <var>undefined</var>
		 *                        as object.
		 * @return the current list
		 * 
		 * @see ##HTML() creates only the nodes and can be used with ##add() and other methods to add the nodes to the DOM, giving you more flexibility than <var>ht()</var>.
		 */
		'ht': function(htmlTemplate, object) {
			return this['set']('innerHTML', isFunction(htmlTemplate) ? htmlTemplate(object) : 
				                            /{{/.test(htmlTemplate) ? formatHtml(htmlTemplate, object) : 
				                            /^#\S+$/.test(htmlTemplate) ? formatHtml($$(htmlTemplate)['text'], object) : htmlTemplate);
		 }
		/*$
		 * @stop
		 */
		// @cond !ht dummyHt:0
	///#/snippet extrasListFuncs
	}, M.prototype);

	//// DOLLAR FUNCTIONS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	copyObj({
	///#snippet webDollarFuncs
	/*$
	* @id request
	* @group REQUEST
	* @requires 
	* @configurable default
	* @name $.request()
	* @syntax $.request(method, url)
	* @syntax $.request(method, url, data)
	* @syntax $.request(method, url, data, settings)
	* @module WEB
	* Initiates a HTTP request to the given URL, using XMLHttpRequest. It returns a ##promiseClass#Promise## object that allows you to obtain the result.
	* 
	* @example Invokes a REST web service and parses the resulting document using JSON:
	* <pre>
	* $.request('get', 'http://service.example.com/weather', {zipcode: 90210})
	*    .then(function(txt) {
	*         var json = $.parseJSON(txt);
	*         $('#weatherResult').fill('Today's forecast is is: ' + json.today.forecast);
	*    })
	*    .error(function(status, statusText, responseText) {
	*         $('#weatherResult').fill('The weather service was not available.');
	*    });
	* </pre>
	* 
	* @example Sending a JSON object to a REST web service:
	* <pre>
	* var myRequest = {         // create a request object that can be serialized via JSON
	*      request: 'register',
	*      entries: [
	*        {name: 'Joe',
	*      	    job: 'Plumber'
	*        }
	*      ]};
	* 
	* function failureHandler() {
	*   $('#registrationResult').fill('Registration failed');
	* }
	*
	* $.request('post', 'http://service.example.com/directory', $.toJSON(myRequest))
	*     .then(function(txt) {
	*        if (txt == 'OK')
	*             $('#registrationResult').fill('Registration succeeded');
	*        else
	*              failureHandler();
	*        })
	*     .error(failureHandler);
	* </pre>
	* 
	* @example Using HTTP authentication and a custom XMLHttpRequest property.
	* <pre>var handler = $.request('get', 'http://service.example.com/userinfo', null, {withCredentials: true, user: 'me', pass: 'secret'});</pre>
	*
	* 
	* @param method the HTTP method, e.g. 'get', 'post' or 'head' (rule of thumb: use 'post' for requests that change data 
	*             on the server, and 'get' to request data). Not case sensitive.
	* @param url the server URL to request. May be a relative URL (relative to the document) or an absolute URL. Note that unless you do something 
	*             fancy on the server (keyword to google:  Access-Control-Allow-Origin), you can only call URLs on the server your script originates from.
	* @param data optional data to send in the request, either as POST body or as URL parameters. It can be either a plain object as map of 
	*             parameters (for all HTTP methods), a string (for all HTTP methods), a DOM document ('post' only) or a FormData object ('post' only). 
	*             If the method is 'post', it will be sent as body, otherwise parameters are appended to the URL. In order to send several parameters with the 
	*             same name, use an array of values in the map. Use null as value for a parameter without value.
	* @param settings optional a map of additional parameters. Supports the following properties (all optional):
	* <dl><dt>headers</dt><dd>a map of HTTP headers to add to the request. Note that you should use the proper capitalization for the
	*                header 'Content-Type', if you set it, because otherwise it may be overwritten.</dd>
	* <dt>xhr</dt><dd>a map of properties to set in the XMLHttpRequest object before the request is sent, for example <code>{withCredentials: true}</code>.</dd>
	* <dt>user</dt><dd>username for HTTP authentication, together with the <var>pass</var> parameter</dd>
	* <dt>pass</dt><dd>password for HTTP authentication, together with the <var>user</var> parameter</dd>
	* </dl>
	* @return a ##promiseClass#Promise## containing the request's status. If the request has successfully completed with HTTP status 200, 
	*         the success handler will be called as <code>function(text, xml)</code>:
	*         <dl><dt>text</dt><dd>The response sent by the server as text.</dd>
	*         <dt>xml</dt><dd>If the response was a XML document, the DOM <var>Document</var>. Otherwise null.</dd></dl>
	*         The failure handler will be called as <code>function(statusCode, statusText, text)</code>:
	*         <dl><dt>statusCode</dt><dd>The HTTP status (never 200; 0 if no HTTP request took place).</dd>
	*         <dt>statusText</dt><dd>The HTTP status text (or null, if the browser threw an exception).</dd>
	*         <dt>text</dt><dd>the response's body text, if there was any, or the exception as string if the browser threw one.</dd></dl>
	*         
	* @see ##values() serializes an HTML form in a format ready to be sent by <var>$.request</var>.
	* @see ##$.parseJSON() can be used to parse JSON responses.
	* @see ##$.toJSON() can create JSON messages.
	* @see ##_.format() can be useful for creating REST-like URLs, if you use JavaScript's built-in <var>escape()</var> function.
	*/
	'request': function (method, url, data, settings0) {
		var settings = settings0 || {}; 
		var xhr, callbackCalled = 0, prom = promise(), dataIsMap = data && (data['constructor'] == settings['constructor']);
		try {
			xhr = new XMLHttpRequest();
			if (dataIsMap) { // if data is parameter map...
				data = collector(eachObj, data, function processParam(paramName, paramValue) {
					return collector(flexiEach, paramValue, function(v) { 
						return encodeURIComponent(paramName) + ((v != _null) ?  '=' + encodeURIComponent(v) : '');
					});
				}).join('&');
			}

			if (data != _null && !/post/i.test(method)) {
				url += '?' + data;
				data = _null;
			}

			xhr['open'](method, url, _true, settings['user'], settings['pass']);
			if (dataIsMap && /post/i.test(method))
				xhr['setRequestHeader']('Content-Type', 'application/x-www-form-urlencoded');
			eachObj(settings['headers'], function(hdrName, hdrValue) {
				xhr['setRequestHeader'](hdrName, hdrValue);
			});
			eachObj(settings['xhr'], function(name, value) {
				xhr[name] = value;
			});

			xhr['onreadystatechange'] = function() {
				if (xhr['readyState'] == 4 && !callbackCalled++) {
					if (xhr['status'] == 200)
						prom(_true, [xhr['responseText'], xhr['responseXML']]);
					else
						prom(_false, [xhr['status'], xhr['statusText'], xhr['responseText']]);
				}
			};

			xhr['send'](data);
		}
		catch (e) {
			if (!callbackCalled) 
				prom(_false, [0, _null, toString(e)]);
		}
		return prom;
	},

	/*
	 * JSON Module. Uses browser built-ins or json.org implementation if available. Otherwise its own implementation,
	 * originally based on public domain implementation http://www.JSON.org/json2.js / http://www.JSON.org/js.html.
	 * Extremely simplified code, made variables local, removed all side-effects (especially new properties for String, Date and Number).
	 */

	/*$
	* @id tojson
	* @group JSON
	* @requires  
	* @configurable default
	* @name $.toJSON()
	* @syntax $.toJSON(value)
	* @module WEB
	* Converts the given value into a JSON string. The value may be a map-like object, an array or list, a string, number, boolean or null.
   	* If you build Minified without Internet Explorer compatibility, this is just an alias for <var>JSON.stringify</var>.
	*
	* The following types are supported by the built-in implementation:
	* <ul>
	*   <li>Objects (direct properties will be serialized)</li>
	*   <li>Arrays/Lists (with <var>length</var> property)</li>
	*   <li>Strings</li>
	*   <li>Numbers</li>
	*   <li>Boolean</li>
	*   <li>null</li>
	* </ul>
	* Any other types in your JSON tree, especially Dates, should be converted into Strings before being passed to <var>toJSON</var>.
	*
	* @example Converts an object into a JSON object:
	* <pre>
	* var myObj = {name: 'Fruits', roles: ['apple', 'banana', 'orange']};
	* var jsonString = $.toJSON(myObj);
	* </pre>
	* 
	* @param value the value (map-like object, array/list, string, number, boolean or null)
	* @return the JSON string
	* 
	* @see ##$.parseJON() parses JSON structures.
	*/
	'toJSON': JSON.stringify,

	/*$
	* @id parsejson
	* @group JSON
	* @requires 
	* @configurable default
	* @name $.parseJSON()
	* @syntax $.parseJSON(text)
	* @module WEB
	* Parses a string containing JSON and returns the de-serialized object.
	* 
	* In Minified builds without Internet Explorer 7 compatibility, the browser's built-in function 
	* <var>JSON.parse</var> is used for de-serialization.
 	*
	* Only if you have a legacy-build without IE7 support, and you are actually running on IE7 or earlier, 
	* Minified will actually use its own implementation. Because of subtle differences between the
	* browser implementation and Minified's own you need to test your code thoroughly in this constellation,
	* but but it is a recommended security practise to use the browser implementation whenever possible.
	*
	* @example Parsing a JSON string:
	* <pre>
	* var jsonString = "{name: 'Fruits', roles: ['apple', 'banana', 'orange']}";
	* var myObj = $.parseJSON(jsonString);
	* </pre>
	*
	* @param text the JSON string
	* @return the resulting JavaScript object. <var>Undefined</var> if not valid.
	* @see ##$.toJSON() converts JavaScript objects to JSON.
	*/
	'parseJSON': JSON.parse,

	/*$
	* @id ready
	* @group EVENTS
	* @requires ready_vars ready_init
	* @configurable default
	* @name $.ready()
	* @syntax $.ready(handler)
	* @module WEB
	* Registers a handler to be called as soon as the HTML has been fully loaded in the browser. Does not necessarily wait for images and other elements, 
	* only the main HTML document needs to be complete. On older browsers it is the same as <var>window.onload</var>. 
	* 
	* If you call <var>ready()</var> after the page is completed, the handler is scheduled for invocation in the event loop as soon as possible.
	*
	* A shortcut for <var>ready()</var> is to call ##dollar#$()## with the handler function. It does the same with fewer characters.
	*
	* @example Registers a handler that sets some text in an element:
	* <pre>
	* $.ready(function() {
	*   $('#someElement').fill('ready() called');
	* });
	* </pre>
	*
	* @param handler the <code>function()</code> to be called when the HTML is ready.
	* @see ##dollar#$()## calls <var>ready()</var> when invoked with a function, offering a more convenient syntax.
	*/
	'ready': ready,

	/*$
	* @id loop
	* @group ANIMATION
	* @requires animation_vars 
	* @configurable default
	* @name $.loop()
	* @syntax $.loop(paintCallback)
	* @module WEB
	* Runs an animation loop. The given callback method will be invoked repeatedly to create a new animation frame.
	* In modern browsers, <var>requestAnimationFrame</var> will be used to invoke the callback every time the browser is ready for a new 
	* animation frame. 
	* The exact frequency is determined by the browser and may vary depending on factors such as the time needed to 
	* render the current page, the screen's framerate and whether the page is currently visible to the user. 
	* In older browsers the callback function will be invoked approximately every 33 milliseconds.
	* 
	* An animation loop runs indefinitely. To stop it, you have two options:
	* <ul><li>Invoke the <var>stop()</var> function that <var>$.loop()</var> that will return.</li>
	* <li>The animation callback receives the same <var>stop()</var> function as second argument, so the callback can end the animation itself.</li>
	* </ul>
	*
	* @example Animates a div by moving along in a circle.
	* <pre>
	*   var myDiv = $$('#myAnimatedDiv');
	*   var rotationsPerMs = 1000;                           // one rotation per second
	*   var radius = 100;
	*   var d = 3000;                                        // duration in ms
	*   $.loop(function(t, stopFunc) {
	*     var a = 2 * Math.PI * Math.min(t, d) / rotationsPerMs; // angular position
	*     myDiv.style.left = (radius * Math.cos(a) + ' px';
	*     myDiv.style.top = (radius * Math.sin(a) + ' px';
	*     if (t > d)                                         // time is up: call stopFunc()!
	*       stopFunc();
	*   });
	* </pre>
	*
	* @param paintCallback a callback <code>function(timestamp, stopFunc)</code> that will be invoked repeatedly to prepare a frame. Parameters given to callback:
	* <dl>
	*            <dt>timestamp</dt><dd>The number of miliseconds since the animation's start (possibly as high-precision double, if the browser supports this).</dd>
	*            <dt>stop</dt><dd>Call this <code>function()</code> to stop the currently running animation.</dd>
	* </dl>
	* The callback's return value will be ignored.
	* @return a <code>function()</code> that stops the currently running animation. This is the same function that is also given to the callback.
	* 
	* @see ##animate() for simple, property-based animations.
	*/
	'loop': function(paintCallback) {
		var startTimestamp;
		var currentTime = 0;
		var id = idSequence++;
		var requestAnim = _window['requestAnimationFrame'] || function(f) { setTimeout(function() { f(+new Date()); }, 33); }; // 30 fps as fallback
		function raFunc(ts) {
			eachObj(ANIMATION_HANDLERS, function(id, f) { f(ts); });
			if (ANIMATION_HANDLER_COUNT) 
				requestAnim(raFunc);
		}; 
		function stop() {
			if (ANIMATION_HANDLERS[id]) {
				delete ANIMATION_HANDLERS[id];
				ANIMATION_HANDLER_COUNT--;
			}
			return currentTime;
		} 
		ANIMATION_HANDLERS[id] = function(ts) {
			paintCallback(currentTime = ts - (startTimestamp = startTimestamp || ts), stop);
		};

		if (!(ANIMATION_HANDLER_COUNT++)) 
			requestAnim(raFunc);
		return stop; 
	},

	/*$
	 * @id off
	 * @group EVENTS
	 * @requires on
	 * @configurable default
	 * @name $.off()
	 * @syntax $.off(handler)
 	 * @module WEB
	 * Removes the given event handler. The call will be ignored if the given handler has not been registered using ##on(). 
	 * If the handler has been registered for more than one element or event, it will be removed from all instances.
	 * 
	 * Please note that you can not unregister event handlers registered using ##onOver() or ##onChange().
	 * 
	 * @example Adds a handler to an element:
	 * <pre>
	 * function myEventHandler() {
	 *    this.style.backgroundColor = 'red';        // 'this' contains the element that caused the event
	 * }
	 * $('#myElement').on('click', myEventHandler);  // add event handler
	 *
	 * window.setInterval(function() {               // after 5s, remove event handler
	 *    $.off(myEventHandler);
	 * }, 5000);
	 * </pre>
	 * 
	 * @param handler the handler to unregister, as given to ##on(). It must be a handler that has previously been registered using ##on().
	 *                If the handler is not registered as event handler, the function does nothing.
	 *                
	 * @see ##on() registers an event handler.
	 */
	'off': off

 	/*$
 	 * @stop
 	 */
	// @cond !off dummyOff:null
	,
	///#/snippet webDollarFuncs
		///#snippet extrasDollarFuncs
		/*$
		 * @id setcookie
		 * @group COOKIE
		 * @configurable default
		 * @name $.setCookie()
		 * @syntax $.setCookie(name, value)
		 * @syntax $.setCookie(name, value, dateOrDays)
		 * @module WEB+UTIL
		 * Creates, updates or deletes a cookie. If there is an an existing cookie
		 * of the same name, will be overwritten with the new value and settings.
		 * 
		 * To delete a cookie, overwrite it with an expiration date in the past. The easiest way to do this is to 
		 * use <code>-1</code> as third argument.
		 *
		 * @example Reads the existing cookie 'numberOfVisits', increases the number and stores it:
		 * <pre>
		 * var visits = $.getCookie('numberOfVisits');
		 * $.setCookie('numberOfVisits', 
		 *                      visits ? (parseInt(visits) + 1) : 1,   // if cookie not set, start with 1
		 *                      365);                                  // store for 365 days
		 * </pre>
		 * 
		 * @example Deletes the cookie 'numberOfVisits':
		 * <pre>
		 * $.setCookie('numberOfVisits', '', -1);
		 * </pre>
		 * 
		 * @param name the name of the cookie. This should ideally be an alphanumeric name, as it will not be escaped by Minified and this
		 *             guarantees compatibility with all systems.
		 *             If it contains a '=', it is guaranteed not to work, because it breaks the cookie syntax. 
		 * @param value the value of the cookie. All characters can be used. Non-Alphanumeric other than "*@-_+./" will be escaped using the 
		 *              JavaScript <var>escape()</var> function, unless you set the optional <var>dontEscape</var> parameter.
		 * @param dateOrDays optional specifies when the cookie expires. Can be either a Date object or a number that specifies the
		 *                   amount of days. If not set, the cookie has a session lifetime, which means it will be deleted as soon as the
		 *                   browser has been closed. If the number negative or the date in the past, the cookie will be deleted.
		 * @param dontEscape optional if set, the cookie value is not escaped. Note that without escaping you can not use every possible
		 *                    character (e.g. ";" will break the cookie), but it may be needed for interoperability with systems that need
		 *                    some non-alphanumeric characters unescaped or use a different escaping algorithm.
		 * @see ##$.getCookie() reads a cookie.

		 */
		'setCookie': function(name, value, dateOrDays, dontEscape) {
			_document.cookie = name + '=' + (dontEscape ? value : escape(value)) + 
			    (dateOrDays ? ('; expires='+(isObject(dateOrDays) ? dateOrDays : new Date((+new Date()) + dateOrDays * 8.64E7)).toUTCString()) : '');
		},

		/*$
		 * @id getcookie
		 * @group COOKIE
		 * @requires
		 * @configurable default
		 * @name $.getCookie()
		 * @syntax $.getCookie(name)
		 * @syntax $.getCookie(name, dontUnescape)
		 * @module WEB+UTIL
		 * Returns the cookie with the given name. 
		 *
		 * @example Reads the existing cookie 'numberOfVisits' and displays the number in the element 'myCounter':
		 * <pre>
		 * var visits = $.getCookie('numberOfVisits');
		 * if (!visits)    // check whether cookie set. Null if not
		 *     $('#myCounter').set('innerHML', 'Your first visit.');
		 * else
		 *     $('#myCounter').set('innerHTML', 'Visit No ' + visits);
		 * </pre>
		 *  
		 * @param name the name of the cookie. Should consist of alphanumeric characters, percentage, minus and underscore only, as it will not be escaped. 
		 *             You may want to escape the name using <var>encodeURIComponent()</var> if it contains any other characters.
		 * @param dontUnescape optional if set and true, the value will be returned unescaped. Use this parameter only if the value has been encoded
		 *                     in a special way and not with the standard JavaScript <var>encode()</var> method.
		 * @return the value of the cookie, or <var>null</var> if not found. Unless <var>dontUnescape</var> has been set, the value has been unescaped
		 *         using JavaScript's <code>unescape()</code> function.
		 *
		 * @see ##$.setCookie() sets a cookie.
		 */
		'getCookie': function(name, dontUnescape) {
			var regexp, match = (regexp = new RegExp('(^|;)\\s*'+name+'=([^;]*)').exec(_document.cookie)) && regexp[2];
			return dontUnescape ? match : match && unescape(match);
		},

		/*$
		 * @id wait
		 * @group EVENTS
		 * @configurable default
		 * @requires promise
		 * @name $.wait()
		 * @syntax $.wait()
		 * @syntax $.wait(durationMs)
		 * @syntax $.wait(durationMs, args)
		 * @module WEB+UTIL
		 *
		 * Creates a new  ##promise#Promise## that will be fulfilled as soon as the specified number of milliseconds have passed. This is mainly useful for animation,
		 * because it allows you to chain delays into your animation chain.
		 * 
		 * The operation can be interrupted by calling the promise's ##stop() function.
		 *
		 * @example Chained animation using Promise callbacks. The element is first moved to the position 200/0, then to 200/200, waits for 50ms 
		 *          and finally moves to 100/100.
		 * <pre>
		 * var div = $('#myMovingDiv').set({$left: '0px', $top: '0px'});
		 * div.animate({$left: '200px', $top: '0px'}, 600, 0)
		 *    .then(function() {
		 *           div.animate({$left: '200px', $top: '200px'}, 800, 0);
		 *    }).then(function() {
		 *    	     return _.wait(50);
		 *    }).then(function() {
		 *           div.animate({$left: '100px', $top: '100px'}, 400);
		 *    });
		 * });
		 * </pre>
		 *
		 *
		 * @param durationMs optional the number of milliseconds to wait. If omitted, the promise will be fulfilled as soon as the browser can run it
		 *                   from the event loop.
		 * @param args optional an array or list of arguments to pass to the promise handler
		 * @return a ##promise#Promise## object that will be fulfilled when the time is over, or fail when the promise's ##stop() has been called. 
		 *         The promise argument of a fulfilled promise is the <var>args</var> parameter as given to <var>wait()</var>. The returned promise supports ##stop()
		 *         to interrupt the promise.
		 */
		'wait': function(durationMs, args) {
			var p = promise();
			var id = setTimeout(function() { 
				p(_true, args); 
			}, durationMs);
			p['stop0'] = function() { p(_false); clearTimeout(id); };
			return p;
		}

		/*$
		 * @stop
		 */
		// @cond !wait dummyWait:0

		///#/snippet extrasDollarFuncs
	}, $);

	//// UNDERSCORE FUNCTIONS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	copyObj({
		///#snippet utilUnderscoreFuncs
		 // @condblock filter
		'filter': funcArrayBind(filter),
		 // @condend
		 // @condblock collect
		'collect': funcArrayBind(collect),
		 // @condend
		 // @condblock map
		'map': funcArrayBind(map),
		 // @condend
		 // @condblock sub
		'sub': funcArrayBind(sub),
		 // @condend
		 // @condblock reverse
		'reverse': reverse,
		 // @condend
		 // @condblock each
		'each': each,
		 // @condend
		 // @condblock each
		'toObject': toObject,
		 // @condend
		 // @condblock find
		'find': find,
		 // @condend
		 // @condblock findlast
		'findLast': findLast,
		 // @condend
		 // @condblock contains
		'contains': contains,
		 // @condend
		 // @condblock startswith
	 	'startsWith': startsWith,
		 // @condend
		 // @condblock endswith
	 	'endsWith': endsWith,
		 // @condend
		 // @condblock equals
		'equals': equals,
		 // @condend
		 // @condblock call
		'call': funcArrayBind(callList),
		 // @condend
		 // @condblock array
		'array': array,
		 // @condend
		 // @condblock unite
		'unite': unite,
		 // @condend
		 // @condblock uniq
		'uniq': funcArrayBind(uniq),
		 // @condend
		 // @condblock intersection
		'intersection': funcArrayBind(intersection),
		 // @condend

		/*$ 
		 * @id keys 
		 * @group OBJECT 
		 * @requires
		 * @configurable default 
		 * @name _.keys() 
		 * @syntax _.keys(obj) 
		 * @module UTIL
		 * Creates a ##list#Minified list## containing all property names of the specified object. Only direct properies are
		 * included, not inherited ones. The order of the keys in the list is undefined and runtime-specific.
		 *
		 * @example Using <var>keys()</var>:
		 * <pre>var obj = {a: 2, b: 52};
		 * var keys = _.keys(obj);  // keys contains ['a', 'b'] now
		 * </pre>
		 *
		 * @param object The object to gather keys from.
		 * @return A Minified list containing the property names.
		 * 
		 * @see ##_.values() returns the values of an object as a list.
		 */
		'keys': funcArrayBind(keys),

		/*$ 
		 * @id objvalues 
		 * @group OBJECT 
		 * @requires
		 * @configurable default 
		 * @name _.values() 
		 * @syntax _.values(obj) 
		 * @module UTIL
		 * Creates a ##list#Minified list## containing all property values of the specified object. Only direct properies are
		 * included, not inherited ones. The order of the values in the list is undefined and runtime-specific.
		 *
		 * @example Using <var>values()</var>:
		 * <pre>var obj = {a: 2, b: 52};
		 * var values = _.values(obj);  // keys contains [2, 52] now
		 * </pre>
		 * 
		 * @param object The object to gather values from.
		 * @return A Minified list containing the property names.
		 * 
		 * @see ##_.keys() retrieves the property names of an object as a list.
		 */
		'values': funcArrayBind(values),

		/*$
		 * @id copyobj
		 * @group OBJECT
		 * @requires 
		 * @configurable default
		 * @name _.copyObj()
		 * @syntax _.copyObj(from, to)
		 * @module UTIL
		 * Copies every property of the first object into the second object. The properties are copied as shallow-copies. Only own properties
		 * are copied, but not inherited properties.
		 * 
		 *  @example Copying properties:
		 * <pre>var target = {a:3, c: 3};
		 * _.copyObj({a: 1, b: 2}, target); // target is now {a: 1, b: 2, c: 3}</pre>
		 *
		 *  @example Inline property merge:
		 * <pre>var target = _.copyObj({a: 1, b: 2}, {a:3, c: 3}); // target is now {a: 1, b: 2, c: 3}</pre>
		 *
		 * @param from the object to copy from
		 * @param to the object to copy to
		 * @return the object that has been copied to
		 * 
		 * @see ##extend() is very similar to <var>copyObj()</var>, but with a slightly different syntax.
		 */
		'copyObj': copyObj,

		/*$
		 * @id extend
		 * @group OBJECT
		 * @requires 
		 * @configurable default
		 * @name _.extend()
		 * @syntax _.extend(target, src...)
		 * @module UTIL
		 * Copies every property of the source objects into the first object. The source objects are specified using variable arguments. 
		 * There can be more than one. If a source parameter is <var>undefined</var> or <var>null</var>, it will be ignored.
		 * The properties are copied as shallow-copies. <var>undefined</var> values will not be copied or inherited properties
		 * will not be copied.
		 * 
		 * <b>Please note:</b> Unlike jQuery, <var>extend</var> does not directly a function to extend Minified, although
		 * you can use it to for this. To add a function to ##list#Minified lists##, add a property to
		 * ##M#MINI.M##. If you want to extend <var>$</var> or <var>_</var>, just assign the new function(s) as property.
		 * 
		 *  @example Copying properties:
		 * <pre>var target = {a:3, c: 3};
		 * _.extend(target, {a: 1, b: 2}); // target is now {a: 1, b: 2, c: 3}</pre>
		 *
		 *  @example Using several source values:
		 * <pre>var extend = _.extend({a: 1, b: 2}, {a:3, c: 3}, {d: 5}); // target is now {a: 1, b: 2, c: 3, d: 5}</pre>
		 *
		 * @param target the object to copy to
		 * @param src the object(s) to copy from. Variable argument, there can be any number of sources. Nulls and <var>undefined</var>
		 *            parameters will be ignored.
		 * @return the target
		 *
		 * @see ##copyObj() is very similar to <var>extend()</var>, but with a slightly different and more straightforward syntax.
		 */
		'extend': extend,

		/*$ 
		 * @id range 
		 * @group FUNC 
		 * @requires
		 * @configurable default 
		 * @name _.range() 
		 * @syntax _.range(end) 
		 * @syntax _.range(start, end) 
		 * @module LIST
		 * Creates a new ##list#Minified list## containing an interval of numbers from <var>start</var> (inclusive)
		 * until <var>end</var> (exclusive). <var>start</var> can also be omitted to start at 0.
		 *
		 * @example Creates some ranges
		 * <pre>var l123 = _.range(1, 4);      // same as _(1, 2, 3)
		 * var l0123 = _.range(3);        // same as _(0, 1, 2)
		 * var neg123 = _.range(-3, 0);   // same as _(-3, -2, -1)
		 * var empty = _.range(2,1);      // same as _()</pre>	
		 *
		 * @param start optional the start number. If omitted, the range starts at 0.
		 * @param end the end of the range (exclusive)
		 * @return the new Minfied list containing the numbers. Empty is <var>start</var> is not smaller than <var>end</var>.
		 */		
		'range': function(start, end) {
			var r = [], e = (end==_null) ? start : end;
			for (var i = (end!=_null)?start:0; i < e; i++)
				r.push(i);
			return new M(r);
		},

		/*$ 
		 * @id bind 
		 * @group FUNC 
		 * @requires
		 * @configurable default 
		 * @name _.bind() 
		 * @syntax _.bind(f, fThis) 
		 * @syntax _.bind(f, fThis, beforeArgs) 
		 * @syntax _.bind(f, fThis, beforeArgs, afterArgs) 
		 * @module UTIL
		 * Creates a new function that calls the given function bound to the given object as 'this', and optionally with the specified 'pre-filled' arguments
		 * to be appended or prepended to the arguments you all the new function with.
		 *
		 * See also ##_.partial(), if you do not need to set 'this'.
		 *
		 * @example Create a method that multiplies all list elements:
		 * <pre>function mul(factor) { return this.map(function(v) { return v * factor; }; }
		 * var myList = _(1, 2, 3);
		 * var mulMyList = _.bind(mul, myList);       // binding only 'this'
		 * var mulMyList5 = _.bind(mul, myList, 5);   // binding 'this' and prepending a parameter
		 * 
		 * var myList4 = mulMyList(4); // returns _(4, 8, 12)
		 * var myList5 = mulMyList(); // returns _(5, 10, 15)</pre>	
		 *
		 * @param f the function to bind
		 * @param fThis the object to pass as 'this'. Please note JavaScript's limitations for 'this'. If you attempt to pass a string or number, they will be wrapped using
		 *              JavaScript's wrapper classes String and Number.
		 * @param beforeArgs optional either a list of values to insert in front of the arguments, or a single non-list value to put in front. If null or not set,
		 *                             there won't be any arguments inserted. If you need to insert a <var>null</var>, <var>undefined</var> or a list, just wrap them in an array 
		 *                             (e.g. <code>[null]</code>).
		 * @param afterArgs optional either a list of values to append to the end of the arguments, or a single non-list value to append. If null or not set,
		 *                             there won't be any arguments appended. If you need to append a <var>null</var>, <var>undefined</var> or a list, just wrap them in an array 
		 *                             (e.g. <code>[null]</code>).
		 * @return the new function that will invoke <var>f</var> with its arguments modified as specified about.
		 * 
		 * @see _.partial() is similar to <var>bind()</var>, but without the 'this' argument.
		 */
		'bind': bind,

		/*$ 
	 	 * @id partial 
		 * @group FUNC 
		 * @requires
		 * @configurable default 
		 * @name _.partial() 
		 * @syntax _.partial(f, beforeArgs) 
		 * @syntax _.partial(f, beforeArgs, afterArgs) 
		 * @module UTIL
		 * Creates a new function that calls the given function with some arguments pre-filled. You can specify one or more arguments to 
		 * be put in front of the arguments list as well as arguments that will be appended to the argument list.
		 *
		 * See also ##_.bind(), if you want to set 'this' as well. <var>partial()</var> calls the wrapped function with the 'this' the 
		 * wrapper has been called with.
		 * 
		 * @example Create functions that divide:
		 * <pre>function div(a, b) { return a / b; }
		 * var div5 = _.partial(add, 5);         // like function(a) { return 5 / a; }
		 * var divBy5 = _.partial(add, null, 5); // like function(a) { return a / 5; }
		 * </pre>
		 *
		 * @example Create functions that remove characters from the beginning and/or end of a string:
		 * <pre>// This function multiplies the first <var>count</var> items of the <var>list</var> by <var>factor</var>
		 * function multiply(list, count, factor) { 
		 *     return list.map(function(v, index) { 
		 *         return index &lt; count ? factor * v : v; 
		 *     }); 
		 * }
		 * 
		 * var mul3by2 = _.partial(multiply, null, [3, 2]); 
		 * var r1 = mul10by2(_(1, 2, 3, 4, 5));   // returns _(2, 4, 6, 4, 5)
		 * 
		 * var mul123 = _.partial(multiply, [_(1, 2, 3)]);                // array wrapper required to pass a list!
		 * var r2 = mul123(2, 5);                 // returns _(5, 10, 3)
		 * 
		 * var mul12345By2 = _.partial(multiply, [_(1, 2, 3, 4, 5)], 2);  // array wrapper required!
		 * var r3 = mul12345By2(3);               // returns _(2, 4, 6, 4, 5)
		 * </pre>
		 *
		 * @param f the function to bind
		 * @param beforeArgs either a list of values to insert in front of the arguments, or a single non-list value to put in front. If null or not set,
		 *                             there won't be any arguments inserted. If you need to insert a <var>null</var>, <var>undefined</var> or a list, just wrap them in an array 
		 *                             (e.g. <code>[null]</code>).
		 * @param afterArgs optional either a list of values to append to the end of the arguments, or a single non-list value to append. If null or not set,
		 *                             there won't be any arguments appended. If you need to append a <var>null</var>, <var>undefined</var> or a list, just wrap them in an array 
		 *                             (e.g. <code>[null]</code>).
		 * @return the resulting string
		 * 
		 * @see ##_.bind() is similar to <var>partial()</var>, but allows you to set 'this'.
		 */
		'partial': partial,

		/*$
		 * @id eachobj
		 * @group OBJECT
		 * @requires 
		 * @configurable default
		 * @name _.eachObj()
		 * @syntax _.eachObj(obj, callback)
		 * @module UTIL
		 * Invokes the given function once for each property of the given object. The callback is not invoked for inherited properties.
		 *
		 * @example Dumps all properties of an object.
		 * <pre>
		 * var s = '';
		 * _.eachObj({a: 1, b: 5, c: 2}, function(key, value) {
		 *     s += 'key=' + key + ' value=' + value + '\n';
		 * });
		 * </pre>
		 * 
		 * @param obj the object to use
		 * @param callback The callback <code>function(key, value)</code> to invoke for each property. 
		 *                 <dl><dt>key</dt><dd>The name of the current property.</dd>
		 *                 <dt>value</dt><dd>The value of the current property.</dd>
		 *                 <dt class="this">this</dt><dd>This object.</dd></dl>
		 *                 The callback's return value will be ignored.
		 * @return the object
		 * 
		 * @see ##_.each() iterates through a list.
		 */
		'eachObj': eachObj,

		/*$
		 * @id mapobj
		 * @group OBJECT
		 * @requires 
		 * @configurable default
		 * @name _.mapObj()
		 * @syntax _.mapObj(obj, callback)
		 * @module UTIL
		 * Creates a new object with the same properties but different values using the given callback function. The function is called
		 * for each property of the input object to provice a new value for the property.
		 *
		 * @example Increases the values of all properties.
		 * <pre>
		 * var r = _.mapObj({a: 1, b: 5, c: 2}, function(key, value) {
		 *     return value + 1;
		 * });
		 * // r is now {a: 2, b: 6, c: 2}
		 * </pre>
		 * 
		 * @param obj the object to use
		 * @param callback The callback <code>function(key, value)</code> to invoke for each property. 
		 *                 <dl><dt>key</dt><dd>The name of the current property.</dd>
		 *                 <dt>value</dt><dd>The value of the current property.</dd>
		 *                 <dt class="this">this</dt><dd>This object.</dd>
		 *                 <dt class="returnValue">(callback return value)</dt><dd>This value will replace the original value in the new object.</dd></dl>
		 * @return the new object
		 * 
		 * @see ##_.filterObj() filters an object.
		 * @see ##map() maps a list.
		 */
		'mapObj': mapObj,

		/*$
		 * @id filterobj
		 * @group OBJECT
		 * @requires 
		 * @configurable default
		 * @name _.filterObj()
		 * @syntax _.filterObj(obj, filterFunc)
		 * @module UTIL
		 * Creates a new object that contains only those properties of the input object that have been approved by the filter function.
		 *  
		 * If the callback function returns true, the property and its value are shallow-copied in the new object, otherwise it will be removed.
		 *
		 * @example Removing all values over 10 from an object:
		 * <pre>
		 * var list = _.filterObj({a: 4, b: 22, c: 7, d: 2, e: 19}, function(key, value) {
		 *     return value &lt;= 10;
		 * });
		 * </pre>
		 * 
		 * @param obj the object to use
		 * @param callback The callback <code>function(key, value)</code> to invoke for each property. 
		 *                 <dl><dt>key</dt><dd>The name of the current property.</dd>
		 *                 <dt>value</dt><dd>The value of the current property.</dd>
		 *                 <dt class="this">this</dt><dd>This object.</dd>
		 *                 <dt class="returnValue">(callback return value)</dt><dd><var>true</var> to include the property in the new object, <var>false</var> to omit it.</dd></dl>
		 * @return the new object
		 * 
		 * @see ##_.mapObj() can be used to modify the values og an object.
		 */
		'filterObj': filterObj,

		/*$
		 * @id islist
		 * @group TYPE
		 * @requires 
		 * @configurable default
		 * @name _.isList()
		 * @syntax _.isList(obj)
		 * @module UTIL
		 * Checks whether the given object resembles a list or array. To qualify, it must have a <var>length</var> property, but must not be a string, a function or have a 
		 * <var>nodeType</var> property.
		 *
		 * @param obj the object to test
		 * @return <var>true</var> if the object is a list or array, <var>false</var> otherwise.
		 */
		'isList': isList,

		/*$
		 * @id isfunction
		 * @group TYPE
		 * @requires 
		 * @configurable default
		 * @name _.isFunction()
		 * @syntax _.isFunction(obj)
		 * @module UTIL
		 * Checks whether the given object is a function.
		 *
		 * @param obj the object to test
		 * @return <var>true</var> if the object is a function, <var>false</var> otherwise.
		 */
		'isFunction': isFunction,

		/*$
		 * @id isobject
		 * @group TYPE
		 * @requires 
		 * @configurable default
		 * @name _.isObject()
		 * @syntax _.isObject(obj)
		 * @module UTIL
		 * Checks whether the given reference is an object as defined by <var>typeof</var>.
		 *
		 * @param obj the object to test
		 * @return <var>true</var> if the object is an object, <var>false</var> otherwise.
		 */
		'isObject': isObject,

		/*$
		 * @id isnumber
		 * @group TYPE
		 * @requires 
		 * @configurable default
		 * @name _.isNumber()
		 * @syntax _.isNumber(obj)
		 * @module UTIL
		 * Checks whether the given reference is a number as defined by <var>typeof</var>.
		 *
		 * @param obj the object to test
		 * @return <var>true</var> if the object is a number, <var>false</var> otherwise.
		 * 
		 * @see ##_.isValue() matches basic types such as dates numbers.
		 */
		'isNumber': isNumber,

		/*$
		 * @id isbool
		 * @group TYPE
		 * @requires 
		 * @configurable default
		 * @name _.isBool()
		 * @syntax _.isBool(obj)
		 * @module UTIL
		 * Checks whether the given reference is a boolean <var>true</var>  or <var>false</var>.
		 *
		 * @param obj the object to test
		 * @return <var>true</var> if the object is a boolean, <var>false</var> otherwise.
		 *
		 * @see ##_.isValue() matches basic types such as booleans.
		 */
		'isBool': isBool,

		/*$
		 * @id isdate
		 * @group TYPE
		 * @requires 
		 * @configurable default
		 * @name _.isDate()
		 * @syntax _.isDate(obj)
		 * @module UTIL
		 * Checks whether the given object is a <var>Date</var>. To be recognized as a date, the object
		 * must pass ##_.isObject() and have a <var>getDate</var> property.
		 *
		 * @param obj the object to test
		 * @return <var>true</var> if the object is a <var>Date</var>, <var>false</var> otherwise.
		 * 
		 * @see ##_.isValue() matches basic types such as dates.
		 */
		'isDate': isDate,

		/*$
		 * @id isvalue
		 * @group TYPE
		 * @requires 
		 * @configurable default
		 * @name _.isValue()
		 * @syntax _.isValue(obj)
		 * @module UTIL
		 * Checks whether the given object is a value. Minified defines values as all basic types (strings, booleans and numbers)
		 * and Dates.
		 *
		 * @param obj the object to test
		 * @return <var>true</var> if the object is a value, <var>false</var> otherwise.
		 * 
		 * @see ##_.isString() checks for a string.
		 * @see ##_.isNumber() checks for a number.
		 * @see ##_.isBool() checks for a boolean.
		 * @see ##_.isDate() checks for a date.
		 */
		'isValue': isValue,

		/*$
		 * @id isstring
		 * @group TYPE
		 * @requires 
		 * @configurable default
		 * @name _.isString()
		 * @syntax _.isString(object)
		 * @module UTIL
		 * Checks whether the given reference is a string as defined by <var>typeof</var>.
		 *
		 * @param obj the object to test
		 * @return <var>true</var> if the object is a string, <var>false</var> otherwise.
		 * 
		 * @see ##_.isValue() matches basic types such as strings.
		 */
		'isString': isString,

		/*$
		 * @id tostring
		 * @group TYPE
		 * @requires 
		 * @configurable default
		 * @name _.toString()
		 * @syntax _.toString(obj)
		 * @module UTIL
		 * Converts the given object to a string. <var>null</var> and <var>undefined</var> will be converted to an empty string.
		 *
		 * @param obj the object to convert
		 * @return the resulting string
		 */
		'toString': toString,

		/*$
		 * @id dateclone
		 * @group DATE
		 * @requires 
		 * @configurable default
		 * @name _.dateClone()
		 * @syntax _.dateClone(date)
		 * @module UTIL
		 * Creates a new <var>Date</var> object that represents the same time as the given date.
		 *
		 * @param date the <var>Date</var> to clone
		 * @return the new <var>Date</var> copy
		 */
		'dateClone': dateClone,

		/*$
		 * @id dateadd
		 * @group DATE
		 * @requires 
		 * @configurable default
		 * @name _.dateAdd()
		 * @syntax _.dateAdd(date, property, value)
		 * @module UTIL
		 * Adds the specified time to the given <var>Date</var> and returns the result as a new <var>Date</var> .  The unit for the <var>value</var> can be any <var>Date</var>
		 * property that has get and set methods: 'fullYear', 'month', 'date', 'hours', 'minutes', 'seconds' or 'milliseconds'.
		 * 
		 * @example Calculate some dates based on the current time:
		 * <pre>var now = new Date();
		 * var yesterday = _.dateAdd(now, 'date', -1);
		 * var inOneHour = _.dateAdd(now, 'hours', 1);
		 * var tomorrow = _.dateAdd(now, 'date', 1);
		 * var inThreeMonths = _.dateAdd(now, 'month', 3);</pre>
		 *
		 * @param date the <var>Date</var> to add to
		 * @param property a property name to represent the unit of the <var>value</var>. Can be 'fullYear', 'month', 'date', 'hours', 'minutes', 'seconds' or 'milliseconds'.
		 * @param value the amount to add
		 * @return the new <var>Date</var> copy
		 */
		'dateAdd': dateAdd,

		/*$
		 * @id datediff
		 * @group DATE
		 * @requires 
		 * @configurable default
		 * @name _.dateDiff()
		 * @syntax _.dateDiff(property, date1, date2)
		 * @module UTIL
		 * 
		 * Calculates the time difference between both dates, using in the unit determined by the <var>property</var>.
		 * 
		 * If the unit is not calendar-based ('hours', 'minutes', 'seconds' or 'milliseconds')
		 * the result is calculated with full precision and not rounded. 
		 * If the unit is calendar-based ('fullYear', 'month', 'date'),
		 * the result is the amount of full units between those dates in the current time zone.
		 * 
		 * If <var>date2</var> is earlier than <var>date1</var>, the result is negative.
		 * 
		 * @example Calculate duration between two dates:
		 * <pre>function diff(d1, d2) {
		 *     return _.dateDiff('fullYears', d1, d2) + ' years,' +
		 *            _.dateDiff('months', d1, d2) + ' months and' +
		 *            _.dateDiff('date', d1, d2) + ' days';
		 * }</pre>
		 *
		 * @param date1 the first <var>Date</var>
		 * @param date2 the first <var>Date</var>
		 * @param property a property name to represent the unit of the <var>value</var>. Can be 'fullYear', 'month', 'date', 'hours', 'minutes', 'seconds' or 'milliseconds'.
		 * @return the time difference between the two dates. Negative if <var>date2</var> is earlier than <var>date1</var>.
		 */
		'dateDiff': dateDiff,

		/*$
		 * @id datemidnight
		 * @group DATE
		 * @requires 
		 * @configurable default
		 * @name _.dateMidnight()
		 * @syntax _.dateMidnight()
		 * @syntax _.dateMidnight(date)
		 * @module UTIL
		 * 
		 * Returns a new <var>Date</var> object with the same calendar date, but at midnight in the current time zone. If no parameter 
		 * is given, it returns the current day at midnight.
		 *
		 * @param date optional the <var>Date</var>. If omitted, the current date is used.
		 * @return a new <var>Date</var> representing midnight in the current time zone
		 */
		'dateMidnight': dateMidnight,

		/*$
		 * @id pad
		 * @group FORMAT
		 * @requires 
		 * @configurable default
		 * @name _.pad()
		 * @syntax _.pad(digits, number)
		 * @module UTIL
		 * 
		 * Converts a number into a string by 'padding' it with leading zeros until it has at least the given number of digits.
		 *
		 * @param digits the minimum number of digits for the number
		 * @param number the number to format
		 * @return the number converted to a string and padded with zeros
		 * 
		 * @see ##_.formatValue() offers real formatting of numbers.
		 */
		'pad' : pad,

		/*$
		 * @id formatvalue
		 * @group FORMAT
		 * @requires date_constants
		 * @configurable default
		 * @name _.formatValue()
		 * @syntax _.formatValue(format, value)
		 * @module UTIL
		 * 
		 * Formats a single value as a string, using the given format template.  It has support for numbers, dates, booleans and strings.
		 * 
		 * <b>Choice Formatting</b><br/>
		 * With a choice format, you can map input values into output values. In the format string the choices are separated by pipes ('|')
		 * and each choice has the format <code>&ltcmp>&ltvalue>:&lt;result></code>:
		 * <ul><li>&lt;cmp> is a comparison operator ('=', '>', '&lt;', '>=', '&lt;='), but can be omitted to check for equality.</li>
		 * <li>&lt;value> is the value as string.</li>
		 * <li>&lt;result> is the result, either a string or a number format</li></ul>
		 * You can have a default choice at the end without &lt;cmp> or &lt;value>.
		 * 
		 * <b>Examples</b> 
		 * <pre>_.formatValue('true:is True|is False', value);
		 * _.formatValue('&lt;5:under 5|&gt;=15:at least 15|=7:is seven|some other number', value);
		 * _.formatValue('1:one item|2:two items|&gt;3:many items', value);
		 * _.formatValue('ERR:error|WARN:warning|INFO:info|debug', value);
		 * </pre>
		 *
		 * <b>Number Formatting</b><br/> 
		 * Number formatting allows you to specify the number of digits before and optionally after the decimal separator, the decimal separator itself
		 * as well as how to group and decorate the digits. The following characters are used in the format:
		 * 
		 * <table><tr><th>Character</th><th>Description</th></tr>
		 * <tr><td>#</td><td>Optional digit before decimal separator.</td></tr>
		 * <tr><td>0</td><td>Required digit before decimal separator (0 if number is smaller).</td></tr>
		 * <tr><td>.</td><td>Decimal separator (if it occurs exactly once in the string)</td></tr>
		 * <tr><td>:</td><td>Required for choice formats. You can not use this in a number format.</td></tr>
		 * <tr><td>|</td><td>Required for choice formats. You can not use this in a number format.</td></tr>
		 * </table>
		 * 
		 * All other characters will stay unmodified in the format string. For negative numbers, a sign (-) is placed in front of the
		 * first digit.
		 * 
		 * If you don't provide sufficient pre-decimal placeholders for the number, the remaining digits will be put in front of the
		 * rest of the number, so the rendered number is always complete. However, there will be no grouping if there are no placeholders.
		 * 
		 * If you only define a group separator, but not a decimal separator, and you use a comma (,) or period (.) as separator, 
		 * the group separator must appear at least twice in the format. Otherwise it will be considered a decimal separator. 
		 *
		 * <b>Examples</b> 
		 * <pre>var v1  = _.formatValue('#', 15);           // '15'
		 * var v2  = _.formatValue('####', 15);        // '15'
		 * var v3  = _.formatValue('0000', 15);        // '0015'
		 * var v4  = _.formatValue('#.###', 15.14274); // '15.143'
		 * var v5  = _.formatValue('#.000', 15.14274); // '15.143'
		 * var v6  = _.formatValue('#.###', 15.1);     // '15.1'
		 * var v7  = _.formatValue('#.000', 15.1);     // '15.100'
		 * var v8  = _.formatValue('000,000', 15.1);   // '015,100'
		 * var v9  = _.formatValue('#.###', 15);       // '15'
		 * var v10 = _.formatValue('#.000', 15);       // '15.000'
		 * var v11 = _.formatValue('#,###', 15.1);     // '15,1' (comma as decimal separator)
		 * var v10 = _.formatValue('Total= $#.00 (VAT included)', 71);  // 'Total= $71.00 (VAT included)' (decoration)
		 * var v12 = _.formatValue('###,###,###', 92548);    // '92,548' (grouped digits)
		 * var v14 = _.formatValue('###.###.###,###', 92548.42); // '92.548,42' (comma as decimal separator)
		 * var v14 = _.formatValue('### ### ###.###', 92548.42); // '92 548,42' (space as decimal separator)
		 * var v15 = _.formatValue('&lt;10:#.00|&lt;100:#.0|#', 7.356); // '7.36' (choice format)
		 * var v16 = _.formatValue('&lt;10:#.00|&lt;100:#.0|#', 25.04); // '25.0' 
		 * var v17 = _.formatValue('&lt;10:#.00|&lt;100:#.0|#', 71.51); // '72' 
		 * </pre>
		 * 
		 * <b>Choice Number Formatting</b><br/>
		 * It is possible to combine number formatting with choices. You can also use additional characters in a number format.
		 * 
		 * <b>Examples</b> 
		 * <pre>_.formatValue('$#.00', 17);  // '$17.00'
		 * _.formatValue('0:no eggs|1:1 egg|>1:# eggs', 12);  // '12 eggs'
		 * </pre>
		 *
		 * <b>Date Formatting</b><br/> 
		 * In a date format, there are a number of reserved characters that represent parts of the date. If you repeat the same character, you
		 * specify the minimum number of digits. Some elements allow a comma-separated list of translations in angular brackets, see below.
		 * <table>
		 * <tr><th>Character</th><th>Description</th></tr>
		 * <tr><td>y</td><td>Year (4 digits)</td></tr>
		 * <tr><td>Y</td><td>Year (2 digits)</td></tr>
		 * <tr><td>M</td><td>Month (1-12)</td></tr>
		 * <tr><td>n</td><td>Month as short name ('Jan', 'Feb'...). Supports translations.</td></tr>
		 * <tr><td>N</td><td>Month as long name ('January', 'February'...). Supports translations.</td></tr>
		 * <tr><td>d</td><td>Day of month (1-31)</td></tr>
		 * <tr><td>m</td><td>Minutes (0-59)</td></tr> 
		 * <tr><td>H</td><td>Hours in 24h format (0-23)</td></tr>
		 * <tr><td>h</td><td>Hours in 12h format (1-12)</td></tr> 
		 * <tr><td>K</td><td>Hours in 0-based 12h format (0-11)</td></tr>
		 * <tr><td>k</td><td>Hours in 1-based 24h format (1-24)</td></tr> 
		 * <tr><td>s</td><td>Seconds (0-59)</td></tr>
		 * <tr><td>S</td><td>Milliseconds (0-999)</td></tr>
		 * <tr><td>a</td><td>Either 'am' or 'pm'. Supports translations.</td></tr>
		 * <tr><td>w</td><td>Day of week as short name ('Sun', 'Mon'...). Supports translations.</td></tr>
		 * <tr><td>W</td><td>Day of week as long name ('Sunday', 'Monday'...). Supports translations.</td></tr>
		 * <tr><td>z</td><td>Timezone offset, e.g. '+0700'</td></tr>
		 * </table>
		 * <var>formatValue</var> also supports formatting a date in a different timezone. You only need to put the timezone in brackets at the front of
		 * the format, e.g. '[+0100]'.
		 *
		 * <b>Examples</b> 
		 * <pre>var now = new Date();
		 * var v1  = _.formatValue('y-M-d', now);       // e.g. '2013-7-9'
		 * var v2  = _.formatValue('yyyy-MM-dd', now);  // e.g. '2013-07-09'
		 * var v3  = _.formatValue('yyyy-MM-ddTHH:mm:ss.SS z', now); // e.g. '2013-07-09T23:07:38.472 +0700'
		 * var v4  = _.formatValue('MM/dd/YY h:mm:ss a', now);       // e.g. '07/09/13 11:07:38 pm'
		 * var v5  = _.formatValue('dd.MM.yyyy HH:mm:ss', now);      // e.g. '09.07.2013 23:07:38'
		 * var v6  = _.formatValue('H:mm', now);                // e.g. '23:07'
		 * var v7  = _.formatValue('W, N d y', now);            // e.g. 'Tuesday, July 9 2013'
		 * var v8  = _.formatValue('Nd', now);                  // e.g. 'July9'
		 * var v9  = _.formatValue('d.N[Januar,Februar,M&auml;rz,April,Mai,Juni,Juli,'+
		 *             'August,September,Oktober,November,Dezember]', now); // German translation: '9. Juli'
		 * var v10 = _.formatValue('[+0100]yyyy-MM-dd h:mm a', now);  // different timezone: '2013-07-09 5:07 pm' 
		 * </pre>
		 *
		 * @param format the format that describes the output
		 * @param value the value to format. Either a Date, a number, a string or a value that can be converted to a string.
		 * @return the string-formatted value
		 * 
		 * @see ##_.pad() will pad a number with zeros.
		 * @see ##_.parseDate() parses a date.
		 * @see ##_.parseNumber() parses a number.
		 * @see ##_.format() allows more complex formats.
		 */
		'formatValue': formatValue,

		/*$
		 * @id parsedate
		 * @group FORMAT
		 * @requires date_constants
		 * @configurable default
		 * @name _.parseDate()
		 * @syntax _.parseDate(format, dateString)
		 * @module UTIL
		 * 
		 * Parses the given string as Date using the given format. The format specifies which date component is expected where in the string.
		 * It can also be used to specify the timezone of the input string, and it may specify whether an empty string (including strings containing
		 * only whitespace) is allowed.
		 *
		 * In the date format there are a number of reserved characters that are used as placeholders of date components. If you put a single
		 * character in the format, this will match numbers of any length. If you have two or more of the same character, this is recognized as
		 * fixed-length string.<br/>
		 * Some placeholders, such as month names, support translations. To parse dates in other languages, you can specify a comma-separated
		 * list of translations in brackets following the placeholder.<br/>
		 * The following placeholder characters are supported.
		 * <table>
		 * <tr><th>Character</th><th>Description</th></tr>
		 * <tr><td>y</td><td>Year (4 digits)</td></tr>
		 * <tr><td>Y</td><td>Year (2 digits, 2000-based)</td></tr>
		 * <tr><td>M</td><td>Month (1-12)</td></tr>
		 * <tr><td>n</td><td>Month as short name ('Jan', 'Feb'...). Supports translations.</td></tr>
		 * <tr><td>N</td><td>Month as long name ('January', 'February'...). Supports translations.</td></tr>
		 * <tr><td>d</td><td>Day of month (1-31)</td></tr>
		 * <tr><td>m</td><td>Minutes (0-59)</td></tr> 
		 * <tr><td>H</td><td>Hours in 24h format (0-23)</td></tr>
		 * <tr><td>h</td><td>Hours in 12h format (1-12)</td></tr> 
		 * <tr><td>K</td><td>Hours in 0-based 12h format (0-11)</td></tr>
		 * <tr><td>k</td><td>Hours in 1-based 24h format (1-24)</td></tr> 
		 * <tr><td>s</td><td>Seconds (0-59)</td></tr>
		 * <tr><td>S</td><td>Milliseconds (0-999)</td></tr>
		 * <tr><td>a</td><td>Either 'am' or 'pm'. Supports translations.</td></tr>
		 * <tr><td>w</td><td>Day of week as short name ('Sun', 'Mon'...). Supports translations.</td></tr>
		 * <tr><td>W</td><td>Day of week as long name ('Sunday', 'Monday'...). Supports translations.</td></tr>
		 * <tr><td>z</td><td>Timezone offset, e.g. '+0700'</td></tr>
		 * </table>
		 * If you prefix the input string with a question mark ('?'), this means that the date is optional. If the input string is empty or consists
		 * solely of whitespace, <var>parseDate</var> will return null.<br/>
		 * <var>parseDate()</var> also supports parsing a date in a different timezone. You only need to put the timezone in brackets at the front of
		 * the format, e.g. '[+0100]'.<br/>
		 * 
		 * All other characters  are expected to be identical in format and input string, with the exception of whitespace. Each whitespace character 
		 * in the format can match any number of other whitespace characters in the input string, but at least one.
		 *
		 * Any components that are not in the format will be set to 0. For example, if your format has only date, month and day, the resulting 
		 * date will be at midnight.
		 *
		 * @example Parsing dates in various formats.
		 * <pre>
		 * var v1  = _.parseDate('y-M-d', '2013-7-9');
		 * var v2  = _.parseDate('?yyyyMMdd', '20130709');
		 * var v3  = _.parseDate('?yyyyMMdd', ' ');  // returns null
		 * var v4  = _.parseDate('yyyy-MM-ddTHH:mm:ss.SS z', '2013-07-09T23:07:38.472 +0700');
		 * var v5  = _.parseDate('MM/dd/YY h:mm:ss a', '07/09/13 11:07:38 pm');
		 * var v6  = _.parseDate('dd.MM.yyyy HH:mm:ss', '09.07.2013 23:07:38');
		 * var v7  = _.parseDate('W, N d y', 'Tuesday, July 9 2013');
		 * var v8  = _.parseDate('d.N[Januar,Februar,Maerz,April,Mai,Juni,Juli,'+
		 *             'August,September,Oktober,November,Dezember] y', '9. Juli 2013'); // parsing german
		 * var v9  = _.parseDate('[+0100]yyyy-MM-dd h:mm a', '2013-07-09 5:07 pm');  // different timezone:  
		 * </pre>
		 *
		 * @param format the format that describes the output
		 * @param dateString the string-formatted date to parse
		 * @return the Date; <var>undefined</var> if parsing failed; or <var>null</var> if the string was empty and 
		 *              the date format is flagged as optional ('?' at the beginning)
		 *              
		 * @see ##_.formatValue() can format dates using the same syntax.
		 */
		'parseDate': parseDate,

		/*$
		 * @id parsenumber
		 * @group FORMAT
		 * @requires 
		 * @configurable default
		 * @name _.parseNumber()
		 * @syntax _.parseNumber(format, numberString)
		 * @module UTIL
		 * 
		 * Parses the given string as number using the given format. <var>parseNumber</var> uses the same format as <var>formatValue</var>,
		 * but does not support choices. These are the allowed placeholders in the format:
		 * <table>
		 * <tr><th>Character</th><th>Description</th></tr>
		 * <tr><td>#</td><td>Optional digit before decimal separator.</td></tr>
		 * <tr><td>0</td><td>Required digit before decimal separator (0 if number is smaller).</td></tr>
		 * <tr><td>_</td><td>Optional digit after decimal separator.</td></tr>
		 * <tr><td>9</td><td>Required digit after decimal separator (0 if number is smaller).</td></tr>
		 * <tr><td>.</td><td>Either decimal separator or group separator, depending on position.</td></tr>
		 * <tr><td>,</td><td>Either decimal separator or group separator, depending on position.</td></tr>
		 * </table>
		 *
		 * The format string is mainly used to find out what the decimal separator is ('.' or ','). It defaults to '.'. 
		 *
		 * <var>parseNumber</var> will ignore any non-numeric characters at the beginning or end of the input string.
		 *
		 * If you prefix the input string with a question mark ('?'), this means that the number is optional. If the input string is empty or consists
		 * solely of whitespace, <var>parseNumber</var> will return null.
		 *
		 * If the input string is not valid and can not be parsed,  <var>parseNumber</var> will return <var>undefined</var>.
		 *
		 * @example Parsing numbers in various formats.
		 * <pre>
		 * _.parseNumber('00.99', '2.1');      // returns 2.1
		 * _.parseNumber('00.99', '');          // returns undefined
		 * _.parseNumber('?00.99', '2.1');    // optional number. Returns 2.1
		 * _.parseNumber('?00.99', '');        // returns null
		 * _.parseNumber('0.9', '=2.1 inch'); // returns 2.1 (non-numeric characters ignored)
		 * _.parseNumber('0,9', '2,1');         // comma as decimal separator
		 * _.parseNumber('0,9', '2.1');         // returns 21!! '.' is used as group separator
		 * _.parseNumber('0.9', '20');         // returns 20 (number of digits ignored)
		 * _.parseNumber('0.9', '147.789');  // returns 147.789  (number of digits ignored)
		 * </pre>
		 *
		 * @param format the format that describes the input number
		 * @param numberString the string-formatted number to parse
		 * @return the resulting number; <var>undefined</var> if parsing failed; or <var>null</var> if the string was empty and 
		 *              the number format is flagged as optional ('?' at the beginning)
		 *              
		 * @see ##_.formatValue() can format numbers using the same syntax.
		 */
		'parseNumber': parseNumber,

		/*$
		 * @id trim
		 * @group STRING
		 * @requires 
		 * @configurable default
		 * @name _.trim()
		 * @syntax _.trim(s)
		 * @module UTIL
		 * Removes whitespace from the beginning and end of the given string and returns the result.
		 * 
		 * @example Removing whitespace
		 * <pre>_.trim('abc'); // no change: returns 'abc'
		 * _.trim('  abc '); // returns 'abc'
		 * _.trim(' a b c '); // returns 'a b c' (only whitespace at beginning and end is removed)</pre>
		 *
		 * @param s the string to trim. If not a string, it will be converted using ##_.toString().
		 * @return the trimmed string
		 */
		'trim': trim,

		/*$
		 * @id isempty
		 * @group STRING
		 * @requires 
		 * @configurable default
		 * @name _.isEmpty()
		 * @syntax _.isEmpty(s)
		 * @syntax _.isEmpty(list)
		 * @syntax _.isEmpty(s, ignoreWhitespace)
		 * @module UTIL
		 * Returns true if the given string or list is <var>null</var>, <var>undefined</var> or empty (zero length).
		 * If the second argument is <var>true</var>, the function will ignore whitespace in the string.
		 * 
		 * @example Checking empty
		 * <pre>_.isEmpty('abc');  // returns false
		 * _.isEmpty('');   // returns true
		 * _.isEmpty(null); // returns true
		 * _.isEmpty(' '); // returns false
		 * _.isEmpty(' ', true); // returns true
		 * 
		 * _.isEmpty([1, 2]); // returns false
		 * _.isEmpty([]);     // returns true
		 * </pre>
		 *
		 * @param s the string to check. May be <var>null</var> or <var>undefined</var>.
		 * @param list the list to check. May be <var>null</var> or <var>undefined</var>.
		 * @param ignoreWhitespace if true and a string was given, <var>isEmpty</var> will also return true if the string contains only whitespace.
		 * @return true if empty, false otherwise
		 */
		'isEmpty': isEmpty,

		/*$
		 * @id escaperegexp
		 * @group STRING
		 * @requires 
		 * @configurable default
		 * @name _.escapeRegExp()
		 * @syntax _.escapeRegExp(s)
		 * @module UTIL
		 * Escapes all reserved characters for regular expressions by preceding them with a backslash. 
		 * 
		 * @example Creating regular expressions for words:
		 * <pre>function createWordRE(s) {
		 *     return new RegExp('\b' + _.escapeRegExp(s) + '\b');
		 * }</pre>
		 *
		 * @param s the string to escape
		 * @return the escaped string
		 * 
		 * @see _.format() can use <var>escapeRegExp</var> as escape function.
		 * @see _.template() can use <var>escapeRegExp</var> as escape function.
		 */
		'escapeRegExp': escapeRegExp,

		/*$
		 * @id escapehtml
		 * @group STRING
		 * @requires 
		 * @configurable default
		 * @name _.escapeHtml()
		 * @syntax _.escapeHtml(s)
		 * @module UTIL
		 * Escapes all reserved characters for HTML so the string can be used in text or as attribute value. The escaped characters are
		 * '&amp;', '&lt;', '>', ''' (single quote) and '"' (double quote), and they will be escaped using char codes (e.g. '&amp;#123;').
		 * 
		 * @example Creating a HTML title
		 * <pre>function createTitle(s) {
		 *     return '&lt;h1>' + _.escapeHtml(s) + '&lt;/h1>';
		 * }</pre>
		 *
		 * @param s the string to escape
		 * @return the escaped string
		 * 
		 * @see _.formatHtml() uses <var>escapeHtml</var> for escaping.
		 * @see _.format() can use <var>escapeHtml</var> as escape function.
		 * @see _.template() can use <var>escapeHtml</var> as escape function.
		 */
		'escapeHtml': escapeHtml,

		/*$ 
		 * @id format 
		 * @group FORMAT
		 * @requires template
		 * @configurable default 
		 * @name _.format() 
		 * @syntax _.format()
		 * @syntax _.format(template, object)
	   	 * @module UTIL
		 * Formats an object using a ##template#template##. The template syntax is shared with ##_.template(). The only difference is that
		 * <var>format()</var> frees you from the extra step of creating the template. In any case, whether you use 
		 * <var>format()</var> or ##_.template(), the template will be cached. Be careful when you create templates dynamically, as 
		 * every template is cached and consumes memory.<br/>
		 * If you only want to format a single value, use ##_.formatValue().
		 * 
		 * @example Format a list of dates:
		 * <pre>var s = _.format("{{each}}{{::yyyy-MM-dd{{/each}}", dateList);</pre>
		 * 
		 * @param template The ##template#template## as a string. The template, once created, will be cached. 
		 * @param object the object to format 
		 * @param escapeFunction optional The callback <code>function(inputString)</code> that will be used
		 *        to escape all output:
		 * <dl><dt>inputString</dt><dd>The string to escape.</dd>
		 *     <dt class="returnValue">(callback return value)</dt><dd>The escaped string.</dd></dl>
		 *        If no escapeFunction has been given, the output will not be escaped.
		 *        ##_.escapeHtml() can be used as an escape function for HTML, and ##_.escapeRegExp() for regular expressions. 
		 *        JavaScript's built-in <var>escape()</var> function can escape URL components. 
		 *        See ##_.htmlFormat() for a version of <var>format()</var> that already includes HTML escaping.
		 * @return the string created by the template
		 * 
		 * @see ##_.template() creates a template function, using the same syntax. 
		 * @see ##_.formatHtml() is a variant of <var>format()</var> with HTML-escpaping built it.
		 * @see ##_.formatValue() formats a single number or date.
		 * @see ##_.escapeRegExp() can be used by <var>format()</var> to escape regular expressions. 
		 */ 
		'format': function(tpl, object, escapeFunction) {
			return template(tpl, escapeFunction)(object);
		},

		/*$ 
		 * @id template 
		 * @group FORMAT
		 * @requires date_constants
		 * @configurable default 
		 * @name _.template() 
		 * @syntax _.template(template)
		 * @syntax _.template(template, escapeFunction)
	   	 * @module UTIL
		 * Parses a Handlebars-like template to create a reusable template function.
		 * 
		 * The syntax of the template uses a syntax that superficially looks like 
		 * <a href="http://handlebarsjs.com/">Handlebars</a>. Unlike Handlebars, it is based on raw JavaScript expressions and thus gives you
		 * complete freedom, but also offers you shortcuts for formatting, iteration and conditionals. 
		 * 
		 * Every template can receive exactly one object as input. If you need more than one value as input, put all required values
		 * into an object.
		 * 
		 * Use double curly braces to embed a JavaScript expression and insert its result:
		 * <pre>{{a}} plus {{b}} is {{a+b}}</pre>
		 * 
		 * To use such a template, create it with <var>template()</var> and then execute the resulting function:
		 * <pre>var myTemplate = _.template('{{a}} plus {{b}} is {{a+b}}');
		 * var result = myTemplate({a: 5, b: 7});</pre>
		 * If you pass an object as input, its properties will be mapped using JavaScript's <code>with</code>
		 * statement and are available as variables throughout the template.
		 * 
		 * If you have only a simple value to render, you can pass it directly and access it through the pre-defined
		 * variable <var>obj</var>:
		 * <pre>var myTemplate = _.template('The result is {{obj}}.');
		 * var result = myTemplate(17);</pre>	     
		 * Alternatively, you could also access the input as <var>this</var>, but be aware that JavaScript wraps simples types
		 * such as Number and Boolean. <var>this</var> is the default, so you can omit it to get the same result:
		 * <pre>var myTemplate = _.template('The result is {{ }}.');
		 * var result = myTemplate(17);</pre>
		 * 
		 * Minified templates can use ##_.formatValue() formats directly. Just separate them from the expression by
		 * a double-colon:
		 * <pre>The price is {{obj::#.00}}.</pre>	     
		 * 
		 * Conditions can be expressed using <code>if</code> and <code>else</code>:
		 * <pre>Hello {{if visits==0}}New{{else if visits&lt;10}}Returning{{else}}Regular{{/if}} Customer.</pre>
		 * You can use any JavaScript expression as condition.
		 * 
		 * Use <code>each</code> to iterate through a list:
		 * <pre>var myTemplate = _.template(
		 * 	   '{{each names}}{{this.firstName}} {{this.lastName}}{{/each}}');
		 * var result = myTemplate({names: [{firstName: 'Joe', lastName: 'Jones'}, 
		 *                                  {firstName: 'Marc', lastName: 'Meyer'}]});</pre>
		 * <code>each</code> will iterate through the members of the given object. It 
		 * calls its body for each item and put a reference to the item into <var>this</var>.
		 * Optionally, you can specify up to two variables to store the value in and
		 * the zero-based index of the current item:
		 * <pre>var myTemplate = _.template(
		 * 	   '{{each value, index: names}}{{index}}. {{value.firstName}} {{value.lastName}}{{/each}}');
		 * </pre>
		 *
		 * If you do not pass an expression to <code>each</code>, it will take the list from <var>this</var>:
		 * <pre>var myTemplate = _.template('{{each value:}}{{value}};{{/each}}');
		 * var result = myTemplate([1, 2, 3]);</pre>
		 *  
		 * Beside lists, you can also iterate through the properties of an object. The property name will be stored
		 * in the first given parameter and the value in <var>this</var> and the second parameter:
		 * <pre>var myTemplate = _.template('{{each key, value: nicknames}}{{key}}: {{value}}{{/each}}');
		 * var result = myTemplate({nicknames: {Matt: 'Matthew', John: 'Jonathan'} });</pre>
		 * 
		 * Shorter version of the previous example that uses <var>this</var> for the value:
		 * <pre>var myTemplate = _.template('{{each key: nicknames}}{{key}}: {{this}}{{/each}}');</pre>
		 * 
		 * If you do not need the key, you can omit the variable specification:
		 * <pre>var myTemplate = _.template('{{each nicknames}}{{this}}{{/each}}');</pre>
		 *
		 * You can define your own variables, using the regular JavaScript syntax, with 'var':
		 * <pre>var myTemplate = _.template('{{var s=very.long.name, sum=a+b;}}{{s.desc}}, {{sum}}');</pre>
		 *
		 * In some situations, it may be inevitable to embed raw JavaScript in the template. 
		 * To embed JavaScript code, prefix the code with a '#':
		 * <pre>var myTemplate = _.template(
		 *     '{{each}}{{#var sum = 0; for (var i = 0; i &lt; 3; i++) sum += this.numbers[i]; }}{{sum}}{{/each}}');
		 * var result = myTemplate([['Foreword', 'Intro'], ['Something', 'Something else']]);</pre>
		 * 
		 * 
		 * By default, all output will be escaped. You can prevent this by using triple-curly-braces:
		 * <pre>Here's the original: {{{rawText}}}</pre>.
		 * 
		 * The template's JavaScript code is executed in a sandbox without access to global variables. Minified defines the
		 * following variables for you:
		 * <table>
		 * <tr><th>Name</th><th>Desciption</th></tr>
		 * <tr><td>this</td><td>The template object outside of <code>each</code>. Inside <code>each</code>s, the current value.</td></tr>
		 * <tr><td>obj</td><td>The parameter given to the template function.</td></tr>
		 * <tr><td>_</td><td>A reference to Minified Util.</td></tr>
		 * <tr><td>esc</td><td>The escape function given when the template has been defined. If no function has been given,
		 *                     a default function that returns the input unmodified.</td></tr>
		 * <tr><td>print</td><td>A <code>function(text,...)</code> that appends one or more strings to the template result.</td></tr>
		 * <tr><td>each</td><td>A <code>function(listOrObject, eachCallback)</code> that can iterate over lists or object properties.
		 * The <var>eachCallback</var> is a <code>function(key, value)</code> for objects or <code>function(value, index)</code>
		 * for arrays that will be invoked for each item.
		 * </table> 
		 * 
		 * Every template you create is already cached, so it not an expensive operation to call ##_.template() a second
		 * time with the same template. However, because of caching, you should be careful when creating templates
		 * dynamically, as this will fill the cache up quickly.
		 * 
		 * @param template The template as a string using the syntax described below. 
		 * @param escapeFunction optional The callback <code>function(inputString)</code> that will be used
		 *        to escape all output:
		 * <dl><dt>inputString</dt><dd>The string to escape.</dd>
		 *     <dt class="returnValue">(callback return value)</dt><dd>The escaped string.</dd></dl>
		 *        If no escapeFunction has been given, the output will not be escaped.
		 *        ##_.escapeHtml() can be used as an escape function for HTML, and ##_.escapeRegExp() for regular expressions. 
		 *        JavaScript's built-in <var>escape()</var> function can escape URL components. 
		 * @return the value returned by the last invocation of <var>func</var>
		 * 
		 * @see ##_.format() shares <var>template()</var>'s syntax but returns the result directly.
		 * @see ##_.formatHtml() is a variant of <var>format()</var> with HTML escaping.
		 * @see ##_.escapeHtml() can be used by <var>template()</var> to escape HTML. 
		 * @see ##_.escapeRegExp() can be used by <var>template()</var> to escape regular expressions. 
		 * @see ##HTML() creates a HTML element tree from a template.
		 */ 
		'template': template,

		/*$ 
		 * @id formathtml 
		 * @group FORMAT
		 * @requires template
		 * @configurable default 
		 * @name _.formatHtml() 
		 * @syntax _.formatHtml()
		 * @syntax _.formatHtml(template, object)
	   	 * @module UTIL
		 * Formats an object using a ##template#template## with HTML escaping for the output. 
		 * The template syntax is shared with ##_.template(). Output in double curly braces is automatically escaped using ##_.escapeHtml(). 
		 * <var>formatHtml()</var> just creates a new template with HTML escaping and invokes it immediately.
		 * The template will be cached. Be careful when you create templates dynamically, as 
		 * every template is cached and consumes memory.<br/>
		 * If you only want to format a single value, use ##_.formatValue().
		 * 
		 * @example Format a list of dates:
		 * <pre>var s = _.formatHtml("{{each}}{{::yyyy-MM-dd{{/each}}", dateList);</pre>
		 * 
		 * @param template The #template as a string. The template, once created, will be cached.
		 * @param object the object to format 
		 * @return the string created by the template
		 *
		 * @see ##ht() works uses <var>formatHtml</var> to set element's innerHTML. 
		 * @see ##HTML() create HTML nodes using <var>formatHtml</var>. 
		 * @see ##_.template() creates a template function, using the same syntax. 
		 * @see ##_.format() allows you to specify alternative escape mechanisms.
		 */ 
		 'formatHtml': formatHtml
		/*$
		 * @stop
		 */

		// @cond !format dummyFormatHtml:0
		,

	///#/snippet utilUnderscoreFuncs
		///#snippet extrasUnderscoreFuncs
		// @condblock promise
		'promise': promise
		// @condend promise

		/*$
		 * @stop
		 */
		// @cond !promise dummyPromise:0

		///#/snippet extrasUnderscoreFuncs
	}, _);

	////INITIALIZATION ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///#snippet webInit
	/*$
	 * @id ready_init
	 * @dependency
	 */
		_document.addEventListener("DOMContentLoaded", triggerDomReady, _false);
	/*$
	 @stop
	 */


	///#/snippet webInit

	return {
	///#snippet extrasExports

		/*$
		 * @id html
		 * @group ELEMENT
		 * @requires template ht
		 * @configurable default
		 * @name HTML()
		 * @syntax HTML(templateString)
		 * @syntax HTML(templateString, object)
		 * @syntax HTML(templateFunction)
		 * @syntax HTML(templateFunction, object)
		 * @syntax HTML(idSelector)
		 * @syntax HTML(idSelector, object)
		 * @module WEB
		 * Creates a ##list#list## of HTML nodes from the given HTML template. The list is compatible with ##add(), ##fill() and related methods.
		 * The template uses the ##template() syntax with ##escapeHtml() escaping for values.
		 * 
		 * Please note that the function <var>HTML</var> will not be automatically exported by Minified. You should always import it
		 * using the recommended import statement:
		 * <pre>
		 * var MINI = require('minified'), $ = MINI.$, $$ = MINI.$$, EE = MINI.EE, <strong>HTML = MINI.HTML</strong>;
		 * </pre>
		 * 
		 * @example Creating a HTML element showing a number:
		 * <pre>
		 * &lt;div id="price">-&lt;/div>
		 * </pre> 
		 * Then the price can be set like this:
		 * <pre>
		 * var price = 14.9;
		 * $('#price').fill(HTML('&lt;b>${{::0.99}}&lt;/b>', price));
		 * </pre>
		 * Results in:
		 * <pre>
		 * &lt;div id="price">&lt;b>$14.90&lt;/b>&lt;/div>
		 * </pre> 
		 *
		 * @example Adding elements to an existing list:
		 * <pre>
		 * var names = [ {first: 'James', last: 'Sullivan'}, 
		 *               {first: 'Michael', last: 'Wazowski'} ];
		 * $('#list').add(HTML('{{each}}&lt;li>{{this.first}} {{this.last}}&lt;/li>{{/each}}', names);
		 * </pre>
		 * The code adds this to #list:
		 * <pre>
		 * &lt;li>James Sullivan&lt;li>&lt;li>Michael Wazowski&lt;/li>
		 * </pre> 
		 * 
		 * @example You can store templates in &lt;script&gt; tags. First you need to create a &lt;script&gt; tag with a type not
		 *          supported by the browser and put your template in there, like this:
		 * <pre>&lt;script id="myTimeTpl" type="minified-template"&gt;The time is {{HH:mm:ss}}.&lt;/script&gt;</pre>
		 * Then you can specify the tag's id directly to access it:
		 * <pre>$('#timeDisplay').fill(HTML('#myTimeTpl', new Date()));</pre>
		 *
		 * @param templateString the template using ##template() syntax. Please note, because this is a template, you should
		 *                     avoid creating the template itself dynamically, as compiling templates is expensive and
		 *                     Minified will cache only a limited number of templates. Exception: If the template string does not use
		 *                     any template functionality (no {{}}), it does not need to be compiled and won't be cached.
		 *                     The template will use ##escapeHtml() as escape function, so all template substitutions will be HTML-escaped,
		 *                     unless you use triple curly-braces.
		 * @param templateFunction instead of a HTML template <var>HTML()</var> also accepts a template function, e.g. one
		 *                         created by ##template(). It will be invoked with the object as only argument.
		 * @param idSelector if you pass an ID CSS selector in the form "#myScript", Minified will recognize this and use the content 
		 *                   of the specified &lt;script> element as template. This allows you to put your template into 
		 *                   a &lt;script&gt; tag with a non-JavaScript type (see example). Any string that starts with '#' and does not
		 *                   contain any spaces is used as selector.
		 * @param object optional the object to pass to the template
		 * @return the list containing the new HTML nodes
		 *  
		 * @see ##ht() is a shortcut for <code>fill(HTML())</code>.
		 * @see ##EE() is a different way of creating HTML nodes.
		 */
		'HTML': function (htmlTemplate, object) {
		    return  _(EE('div')['ht'](htmlTemplate, object)[0].childNodes);
		},
		/*$
		 * @stop
		 */

		///#/snippet extrasExports
		///#snippet utilExports
		/*$
		 * @id underscore
		 * @group LIST
		 * @name _()
		 * @syntax _(item...)
		 * @configurable default
		 * @module UTIL
		 * Creates a new Minified list. Supports variable arguments so you can add items directly to the list. For arguments that are lists 
		 * (as defined by ##_.isList()), the list content will be added to the new list. Unlike #dollar#$()#, this is not done recursively
		 * and thus you can create a list of lists by wrapping arguments in a list. Another difference between <var>_()</var> and <var>$()</var>
		 * is that <var>$()</var> will automatically remove <var>null</var> values while <var>_()</var> will keep them.
		 * 
		 * @example Creating an empty list:
		 * <pre>_()</pre>
		 * 
		 * @example Creating a list with three items:
		 * <pre>_(1, 2, 3)</pre>
		 * 
		 * @example Creating the same list, but by passing an array. One array level will be flattened:
		 * <pre>_([1, 2, 3])</pre>
		 * 
		 * @example Creating a list containing the arrays [1, 2] and [3, 4].
		 * <pre>_([[1, 2], [3, 4]])</pre>
		 * 
		 * @example Merging two lists:
		 * <pre>var a = _("a", "b", "c");
		 * var b = _("x", "y", "z");
		 * var merged = _(a, b);    // contains _("a", "b", "c", "x", "y", "z")
		 * </pre>
		 * 
		 * @example Adding two elements to a list:
		 * <pre>var a = _(1, 2, 3);
		 * var a4 = _(a, 4);       // contains _(1, 2, 3, 4)
		 * </pre>
		 * 
		 * @example Mixing different list types and single elements:
		 * <pre>_(1, [], [2, 3], _(), _(4, 5)); // same content as _(1, 2, 3, 4, 5)</pre>
		 * 
		 * @param item an item to add to the new list. If it is a list (as defined by ##_.isList()), its content will be to the new
		 *        ##Minified list#list## (but NOT recursively).
		 */
		'_': _,
		/*$
		 * @stop 
		 */
		///#/snippet utilExports
	///#snippet webExports

		/*$
		 * @id dollar
		 * @group SELECTORS
		 * @requires  
		 * @dependency yes
		 * @name $()
		 * @syntax $()
		 * @syntax $(selector)
		 * @syntax $(selector, context)
		 * @syntax $(selector, context, childOnly)
		 * @syntax $(list)
		 * @syntax $(list, context)
		 * @syntax $(list, context, childOnly)
		 * @syntax $(object)
		 * @syntax $(object, context)
		 * @syntax $(object, context, childOnly)
		 * @syntax $(domreadyFunction)
	 	 * @module WEB
		 * Creates a new ##list#Minified list##, or register a DOMReady-handler. 
		 * The most common usage is with a CSS-like selector. <var>$()</var> will then create a list containing all elements of the current HTML
		 * document that fulfill the filter conditions. Alternatively you can also specify a list of objects or a single object. 
		 * Nested lists will automatically be flattened, and nulls will automatically be removed from the resulting list.
		 * If you call <var>$()</var> without any arguments, it will return an empty list.
		 * 
		 * Additionally, you can specify a second argument to provide a context. Contexts only make sense if you selected 
		 * HTML nodes with the first parameter. Then the context limits the resulting list to include only those nodes 
		 * that are descendants of the context nodes. The context can be either a selector, a list or a single HTML node, and will be 
		 * processed like the first argument. A third arguments allows you to limit the list to 
		 * only those elements that are direct children of the context nodes (so a child of a child would be filtered out).
		 *
		 * The lists created by <var>$()</var> are the same type as the ##list#Minified lists## created by Util's #underscore#_() constructor and other
		 * Util methods. All Util methods work on lists created by <var>$()</var>. If you want to add your own methods to those lists,
		 * use ##M#MINI.M##.
		 * 
		 * As a special shortcut, if you pass a function to <var>$()</var>, it will be registered using #ready#$.ready() to be executed 
		 * when the DOM model is complete.
		 *
		 * @example A simple selector to find an element by id.
		 * <pre>
		 * var l0 = $('#myElementId');
		 * </pre>
		 * 	 
		 * @example You can pass an object reference to create a list containing only this element:
		 * <pre>
		 * var l1 = $(document.getElementById('myElementId')); 
		 * </pre>
		 *
		 * @example Lists and arrays will be copied:
		 * <pre>
		 * var l2 = $([elementA, elementB, elementC]); 
		 * </pre>
		 * 	 
		 * @example Lists will be automatically flattened and nulls removed. So this list <var>l3</var> has the same content as <var>l2</var>:
		 * <pre>
		 * var l3 = $([elementA, [elementB, null, elementC], null]); 
		 * </pre>
		 * 	 
		 * @example This is a simple selector to find all elements with the given class.
		 * <pre>
		 * var l4 = $('.myClass');
		 * </pre>
		 * 	 
		 * @example A selector to find all elements of the given type.
		 * <pre>
		 * var l5 = $('input'); // finds all input elements
		 * </pre>
		 * 	 
		 * @example A selector to find all elements with the given type and class.
		 * <pre>
		 * var l6 = $('input.myRadio'); // finds all input elements with class 'myRadio'
		 * </pre>
		 * 	 
		 * @example A selector to find all elements that are descendants of the given element.
		 * <pre>
		 * var l7 = $('#myForm input'); // finds all input elements contained in the element myForm
		 * </pre>
		 * 	 
		 * @example A selector to find all elements that have either a CSS class 'a' or class 'b':
		 * <pre>
		 * var l8 = $('.a, .b'); // finds all elements that have class a or class b
		 * </pre>
		 * 	 
		 * @example A selector that finds all elements that are descendants of the element myDivision, are inside an element with the
		 * class .myForm and are input elements:
		 * <pre>
		 * var l9 = $('#myDivision .myForm input'); 
		 * </pre>
		 * 	 
		 * @example Contexts can make it easier to specify ancestors:
		 * <pre>
		 * var l10 = $('.myRadio', '#formA, #formB, #formC'); 
		 * </pre>
		 * The result is identical to:
		 * <pre>
		 * var l10 = $('#formA .myRadio, #formB .myRadio, #formC .myRadio'); 
		 * </pre>
		 * 
		 * @example Using one of the list functions, ##set(), on the list, and setting the element's text color. '$' at the beginning of the property name sets a CSS value.
		 * <pre>
		 * $('#myElementId').set('$color', 'red');
		 * </pre>
		 *
		 * @example Most list methods return the list you invoked them on, allowing you to chain them:
		 * <pre>
		 * $('#myForm .myRadio').addClass('uncheckedRadio')
		 *                      .set('checked', true)
		 *                      .on('click', function() {
		 *                             $(this).set({@: 'uncheckedRadio');
		 *                      });
		 * </pre>
		 * 
		 * @example Using $() as a #ready#$.ready() shortcut:
		 * <pre>
		 * $(function() {
		 *   // in here you can safely work with the HTML document
		 * });
		 * </pre>
		 * 
		 * @param selector a simple, CSS-like selector for HTML elements. It supports '#id' (lookup by id), '.class' (lookup by class),
		 *             'element' (lookup by elements) and 'element.class' (combined class and element). Use commas to combine several selectors.
		 *             You can also join two or more selectors by space to find elements which are descendants of the previous selectors.
		 *             For example, use 'div' to find all div elements, '.header' to find all elements containing a class name called 'header', and
		 *             'a.popup' for all a elements with the class 'popup'. To find all elements with 'header' or 'footer' class names, 
		 *             write '.header, .footer'. To find all divs elements below the element with the id 'main', use '#main div'.
		 *             The selector "*" will return all elements.
		 * @param list a list to copy. It can be an array, another Minified list, a DOM nodelist or anything else that has a <var>length</var> property and
		 *             allows read access by index. A shallow copy of the list will be returned. Nulls will be automatically removed from the copy. Nested lists 
		 *             will be flattened, so the result only contains nodes.
		 * @param object an object to create a single-element list containing only the object. If the argument is null, an empty list will be returned.
		 * @param domreadyFunction a function to be registered using #ready#$.ready().
		 * @param context optional an optional selector, node or list of nodes which specifies one or more common ancestor nodes for the selection. The context can be specified as
		 *             a selector, a list or using a single object, just like the first argument.
		 *             The returned list will contain only descendants of the context nodes. All others will be filtered out. 
		 * @param childOnly optional if set, only direct children of the context nodes are included in the list. Children of children will be filtered out. If omitted or not 
		 *             true, all descendants of the context will be included. 
		 * @return the array-like ##list#Minified list## object containing the content specified by the selector. 
		 *             Please note that if the first argument was a list, the existing order will be kept. If the first argument was a simple selector, the nodes are in document order. 
		 *             If you combined several selectors using commas, only the individual results of the selectors will keep the document order, 
		 *             but will then be joined to form a single list. This list will
		 *             not be in document order anymore, unless you use a build without legacy IE support.
		 *             Duplicate nodes will be removed from selectors, but not from lists.
		 *             
		 * @see #underscore#_() is Util's alternative constructor for ##list#Minified lists##
		 * @see ##dollardollar#$$()## works like <var>$()</var>, but returns the resulting list's first element.
		 */
		'$': $,

		/*$
		 * @id dollardollar
		 * @group SELECTORS
		 * @requires 
		 * @configurable default
		 * @name $$()
		 * @syntax $$(selector)
		 * @shortcut $$() - It is recommended that you assign MINI.$$ to a variable $$.
	 	 * @module WEB
		 * Returns a DOM object containing the first match of the given selector, or <var>undefined</var> if no match was found. 
		 * <var>$$</var> allows you to easily access an element directly. It is the equivalent to writing <code>$(selector)[0]</code>.
		 *
		 * Please note that the function <var>$$</var> will not be automatically exported by Minified. You should always import it
		 * using the recommended import statement:
		 * <pre>
		 * var MINI = require('minified'), $ = MINI.$, $$ = MINI.$$, EE = MINI.EE;
		 * </pre>
		 * 
		 * @example Select the checkbox 'myCheckbox':
		 * <pre>
		 * $$('#myCheckbox').checked = true;
		 * </pre>
		 * 
		 * @param selector a simple, CSS-like selector for the element. Uses the full syntax described in #dollar#$(). The most common
		 *                 parameter for this function is the id selector with the syntax "#id".
		 * @return a DOM object of the first match, or <var>undefined</var> if the selector did not return at least one match
		 * 
		 * @see ##dollar#$()## creates a list using the selector, instead of returning only the first result.
		 */
		'$$': $$,

		/*$
		 * @id ee
		 * @group ELEMENT
		 * @requires dollar set add
		 * @configurable default
		 * @name EE()
		 * @syntax EE(elementName)
		 * @syntax EE(elementName, properties)
		 * @syntax EE(elementName, children)
		 * @syntax EE(elementName, properties, children)
		 * @shortcut EE() - It is recommended that you assign MINI.EE to a variable EE.
	 	 * @module WEB
		 * Creates a new HTML Element, wrapped in a  ##list#Minified list##, optionally with attributes and children.
		 * Typically it will be used to insert elements into the DOM tree using ##add() or a similar function. 
		 *
		 * Please note that the function <var>EE</var> will not be automatically exported by Minified. You should always import it
		 * using the recommended import statement:
		 * <pre>
		 * var MINI = require('minified'), $ = MINI.$, $$ = MINI.$$, EE = MINI.EE;
		 * </pre>
		 * 
		 * @example Creating a simple &lt;span> element with some text:
		 * <pre>
		 * var mySpan = EE('span', 'Hello World'); 
		 * </pre>
		 * This is the result:
		 * <pre>
		 *  &lt;span>Hello World&lt;/span> 
		 * </pre>
		 * 
		 * @example Adding the '&lt;span>Hello World; &lt;span> element to all elements with the class '.greeting':
		 * <pre>
		 * $('.greeting').add(EE('span', 'Hello World')); 
		 * 
		 * @example Creating a &lt;span> element with style and some text:
		 * <pre>
		 * var span2 = EE('span', {'@title': 'Greetings'}, 'Hello World'); 
		 * </pre>
		 * The last line creates this:
		 * <pre>
		 *  &lt;span title="Greetings">Hello World&lt;/span> 
		 * </pre>
		 * 
		 * @example Creating a &lt;form> element with two text fields, labels and a submit button:
		 * <pre>var myForm = EE('form', {'@method': 'post'}, [
		 *     EE('label', {'@for': 'nameInput'}, 'Name:'),
		 *     EE('input', {'@id': 'nameInput', '@type': 'input'}),
		 *     EE('br'),
		 *     EE('label', {'@for': 'ageInput'}, 'Age:'),
		 *     EE('input', {'@id': 'ageInput', '@type': 'input'}),
		 *     EE('br'),
		 *     EE('input', {'@type': 'submit, '@value': 'Join'})
		 * ]); 
		 * </pre>
		 * results in (newlines and indentation added for readability):
		 * <pre>
		 * 	&lt;form method="post>
		 *     &lt;label for="nameInput">Name:&lt;/label>
		 *     &lt;input id="nameInput" type="input"/>
		 *     &lt;br/>
		 *     &lt;label for="ageInput"/>Age:&lt;/label>
		 *     &lt;input id="ageInput" type="input"/>
		 *     &lt;br/>
		 *     &lt;input value="Join" type="submit"/>
		 *  &lt;/form>
		 * </pre>
		 * 
		 * @example If you only want to add an attribute under a certain condition, 
		 * a simple trick is to pass null as value if you do not need it:
		 * <pre>
		 * var myInput = EE('input', {
		 * 				'@id': 'myCheckbox', 
		 * 				'@type': 'checkbox', 
		 * 				'@checked': shouldBeChecked() ? 'checked' : null
		 * 			});
		 * </pre>
		 * 
		 * @example You can set styles directly using a $ prefix for the name:
		 * <pre>
		 * var myStylesSpan = EE('span', {$color: "red", $fontWeight: "bold"}, "I'm styled");
		 * </pre>
		 * 
		 * @example ##on() makes it very easy to attach event handlers to the new elements directly after creating them:
		 * <pre>
		 * $('#target').add(EE('input', {'@name': "myInput"}).on('change', inputChanged));
		 * });
		 * </pre>
		 * 
		 * @param elementName the element name to create (e.g. 'div')
		 * @param properties optional an object which contains a map of attributes and other values. Uses the ##set() syntax: 
		 * 					 Attribute values are prefixed with '@', data attributes with '%', CSS styles with '$' and 
		 *                   regular properties can be set without prefix.
		 *                   If the attribute value is null, the attribute will omitted (styles and properties can be set to null). 
		 *                   In order to stay compatible with Internet Explorer 7 and earlier, you should not set the 
		 *                   attributes '@class' and '@style'. Instead set the property 'className' instead of '@class' and set 
		 *                   styles using the '$' syntax.
		 * @param children optional  a node or a list of nodes to be added as children. Strings will be converted to text nodes. 
		 *                         Functions will be invoked and their return value will be used. Lists can be 
		 *                         nested and will then automatically be flattened. Null elements in lists will be ignored. 
		 *                         The syntax is exactly like ##add().
		 * @return the HTML Element wrapped in a Minified list
		 */
		'EE': EE,

		/*$
		 * @id M
		 * @name M
		 * @syntax MINI.M
	 	 * @module WEB, UTIL
		 * 
		 * Exposes the internal class used by all  ##list#Minified lists##. This is mainly intended to allow you adding your
		 * own functions.
		 * 
		 * @example Adding a function printLength() to <var>M</var>:
		 * <pre>
		 * MINI.M.prototype.printLength = function() { console.log(this.length); };
		 * </pre>
		 */
		'M': M
		/*$
		 * @stop 
		 */
		///#/snippet webExports
	};

///#snippet commonAmdEnd
});
///#/snippet commonAmdEnd
///#snippet  webDocs

/*$
 * @id list
 * @name Minified Lists
 * @module WEB, UTIL
 * 
 * <i>Minified lists</i> are Array-like objects provided by Minified. Like a regular JavaScript array, 
 * they provide a <var>length</var> property and you can access their content using the index operator (<code>a[5]</code>). 
 * However, they do not provide the same methods as JavaScript's native array and are designed to be immutable, so
 * there is no direct way to add something to a Minified list. Instead Minified provides a number of functions and methods
 * that take a list and create a modified copy which, for example, may contain additional elements.
 *
 * Minified lists are typically created either using the Web module's #dollar#$()</a></code> function or with the Util module's
 * #underscore#_()</a></code> function, but many functions in the Util module also return a Minified list.
 * 
 * The Util module provides a function ##_.array() that converts a Minified list to a regular JavaScript array.
 */

/*$
 * @id promiseClass
 * @name Promise
 * @module WEB, UTIL
 * 
 * <i>Promises</i> are objects that represent the future result of an asynchronous operation. When you start such an operation, using #request#$.request(),
 * ##animate(), or ##wait(), you will get a Promise object that allows you to get the result as soon as the operation is finished.
 * 
 * Minified's full distribution ships with a <a href="http://promises-aplus.github.io/promises-spec/">Promises/A+</a>-compliant implementation of Promises that should
 * be able to interoperate with most other Promises implementations. Minified's Web module in stand-alone distribution comes with a limited implementation.
 * See below for details.
 * 
 * What may be somewhat surprising about this Promises specification is that the only standard-compliant way to access the result is to 
 * register callbacks. They will be invoked as soon as the operation is finished. 
 * If the operation already ended when you register the callbacks, the callback will then just be called from the event loop as soon
 * as possible (but never while the ##then() you register them with is still running).<br/>
 * This design forces you to handle the operation result asynchronously and disencourages 'bad' techniques such as polling.
 * 
 * The central method of a Promise, and indeed the only required function in Promises/A+, is ##then(). It allows you to register
 * two callback methods, one for success (called 'fulfillment' in Promises/A+ terminology) and one for failures (called 'rejection' in Promises/A+).
 * 
 * This example shows you how to use <var>then()</var>:
 * <pre>
 * $.request('get', 'http://example.com/weather?zip=90210')
 *  .then(function success(result) {
 *      alert('The weather is ' + result);
 *  }, function error(exception) {
 *  	alert('Something went wrong');
 *  });
 * </pre>
 * 
 * What makes Promises so special is that ##then() itself returns a new Promise, which is based on the Promise <var>then()</var> was called on, but can be
 * modified by the outcome of callbacks. Both arguments to <var>then()</var> are optional, and you can also write the code like this:
 * <pre>
 * $.request('get', 'http://example.com/weather?zip=90210')
 *  .then(function success(result) {
 *      alert('The weather is ' + result);
 *  })
 *  .then(null, function error(exception) {
 *  	alert('Something went wrong');
 *  });
 * </pre>
 * 
 * Because the first ##then() returns a new Promise based on the original Promise, the second <var>then()</var> will handle errors of the request just like 
 * the first one did. There is only one subtle difference in the second example: the error handler will not only be called if the request failed, 
 * but also when the request succeded but the success handler threw an exception. That's one of the two differences between the original Promise and 
 * the Promise returned by <var>then()</var>. Any exception thrown in a callback causes the new Promise to be in error state. 
 * 
 * Before I show you the second difference between the original Promise and the new Promise, let me make the example a bit more readable 
 * by using ##error(), which is not part of Promises/A+, but a simple extension by Minified. It just registers the failure callback without 
 * forcing you to specify <var>null</var> as first argument: 
 * <pre>
 * $.request('get', 'http://example.com/weather?zip=90210')
 *  .then(function success(result) {
 *      alert('The weather is ' + result);
 *  })
 *  .error(function error(exception) {  // error(callback) is equivalent to then(null, callback)
 *  	alert('Something went wrong');
 *  });
 * </pre>
 * 
 * A very powerful capability of Promises is that you can easily chain them. If a ##then() callback returns a value, the new Promise returned 
 * by <var>then()</var> will be marked as success (fulfilled) and this value is the result of the operation. If a callback returns a Promise, 
 * the new Promise will assume the state of the returned Promise. You can use the latter to create chains of asynchronous operations, 
 * but you still need only a single error handler for all of them and you do not need to nest functions to achieve this:
 * <pre>
 * $.request('get', 'http://example.com/zipcode?location=Beverly+Hills,+CA')
 *  .then(function(resultZip) {
 *      return $.request('get', 'http://example.com/weather', {zip: resultZip});
 *  })
 *  .then(function(resultWeather) {
 *      alert('The weather in Beverly Hills is ' + resultWeather);
 *  })
 *  .error(function(exception) {
 *  	alert('Something went wrong');
 *  });
 * </pre>
 *  
 * Only the full Minified distribution allows you to create promises yourself, using the ##promise() function. The Promises/A+ 
 * specification does not specify how to fulfill a promise, but in Minified's implementation every Promise object is a function  
 * that needs to be called when the promise result is ready. It requires two arguments.
 * The first is a boolean, <var>true</var> for a successful operation and <var>false</var> for a failure. The second is an array or list containing the
 * arguments to call the corresponding ##then() handler with.
 * 
 * The following example is a function, similar to ##wait(), that returns a Promise which succeeds after the given amount 
 * of milliseconds has passed.
 * It then fulfills the promise with the number of milliseconds as argument. 
 * 
 * <pre>
 * function timeout(durationMs) {
 *		var p = _.promise();
 *		setTimeout(function() { p(true, [durationMs]); }, durationMs);
 *		return p;
 * }
 * </pre>
 * Call it like this: 
 * <pre>
 * timeout(1000).then(function(ms) { window.alert(ms+ ' milliseconds have passed.'); });
 * </pre>
 * 
 * <h3>Limited Promises Implementation in Web module</h3>
 * If you use only the Web module, instead of the full implementation, the promises implementation is not fully Promises/A+ compliant. 
 * One major difference is that it does not allow you create promises yourself. The only way to get a promise in the Web module 
 * is from functions like ##animate() and ##request(). The other difference is that the interoperability with other promises frameworks 
 * is limited, even though it should be good enough most of the time.
 *
 * There are two things you may run into when you use Web's simplified implementation with a complete implementation:
 * <ol><li>The simplified implementation does not support recursive thenables. So when you register callbacks with ##then(), 
 * you can return a promise or a thenable, but only if that promise is not also returning a promise.</li>
 * <li>Many corner cases required by the Promises/A+ specification are not handled. When interoperating using 
 * reasonable implementations, you may never run into this, but Promises/A+ has detailed rules for things like ##then() 
 * methods implemented as dynamic getter and returning a new value on each invocation or throwing exceptions. If you need 
 * a water-proof implementation, you need to use the complete implementation in Minified's full package.</li></ol>
 */
/*$
 * @stop
 */

///#/snippet  webDocs

!function(){function n(n,t){return t>n?-1:n>t?1:n>=t?0:0/0}function t(n){return null!=n&&!isNaN(n)}function e(n){return{left:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)<0?r=i+1:u=i}return r},right:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)>0?u=i:r=i+1}return r}}}function r(n){return n.length}function u(n){for(var t=1;n*t%1;)t*=10;return t}function i(n,t){try{for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}catch(r){n.prototype=t}}function o(){}function a(n){return ha+n in this}function c(n){return n=ha+n,n in this&&delete this[n]}function s(){var n=[];return this.forEach(function(t){n.push(t)}),n}function l(){var n=0;for(var t in this)t.charCodeAt(0)===ga&&++n;return n}function f(){for(var n in this)if(n.charCodeAt(0)===ga)return!1;return!0}function h(){}function g(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function p(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.substring(1);for(var e=0,r=pa.length;r>e;++e){var u=pa[e]+t;if(u in n)return u}}function v(){}function d(){}function m(n){function t(){for(var t,r=e,u=-1,i=r.length;++u<i;)(t=r[u].on)&&t.apply(this,arguments);return n}var e=[],r=new o;return t.on=function(t,u){var i,o=r.get(t);return arguments.length<2?o&&o.on:(o&&(o.on=null,e=e.slice(0,i=e.indexOf(o)).concat(e.slice(i+1)),r.remove(t)),u&&e.push(r.set(t,{on:u})),n)},t}function y(){Go.event.preventDefault()}function x(){for(var n,t=Go.event;n=t.sourceEvent;)t=n;return t}function M(n){for(var t=new d,e=0,r=arguments.length;++e<r;)t[arguments[e]]=m(t);return t.of=function(e,r){return function(u){try{var i=u.sourceEvent=Go.event;u.target=n,Go.event=u,t[u.type].apply(e,r)}finally{Go.event=i}}},t}function _(n){return da(n,_a),n}function b(n){return"function"==typeof n?n:function(){return ma(n,this)}}function w(n){return"function"==typeof n?n:function(){return ya(n,this)}}function S(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function u(){this.setAttribute(n,t)}function i(){this.setAttributeNS(n.space,n.local,t)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=Go.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?a:o:n.local?i:u}function k(n){return n.trim().replace(/\s+/g," ")}function E(n){return new RegExp("(?:^|\\s+)"+Go.requote(n)+"(?:\\s+|$)","g")}function A(n){return n.trim().split(/^|\s+/)}function C(n,t){function e(){for(var e=-1;++e<u;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<u;)n[e](this,r)}n=A(n).map(N);var u=n.length;return"function"==typeof t?r:e}function N(n){var t=E(n);return function(e,r){if(u=e.classList)return r?u.add(n):u.remove(n);var u=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(u)||e.setAttribute("class",k(u+" "+n))):e.setAttribute("class",k(u.replace(t," ")))}}function L(n,t,e){function r(){this.style.removeProperty(n)}function u(){this.style.setProperty(n,t,e)}function i(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?i:u}function T(n,t){function e(){delete this[n]}function r(){this[n]=t}function u(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?u:r}function q(n){return"function"==typeof n?n:(n=Go.ns.qualify(n)).local?function(){return this.ownerDocument.createElementNS(n.space,n.local)}:function(){return this.ownerDocument.createElementNS(this.namespaceURI,n)}}function z(n){return{__data__:n}}function R(n){return function(){return Ma(this,n)}}function D(t){return arguments.length||(t=n),function(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}}function P(n,t){for(var e=0,r=n.length;r>e;e++)for(var u,i=n[e],o=0,a=i.length;a>o;o++)(u=i[o])&&t(u,o,e);return n}function U(n){return da(n,wa),n}function j(n){var t,e;return function(r,u,i){var o,a=n[i].update,c=a.length;for(i!=e&&(e=i,t=0),u>=t&&(t=u+1);!(o=a[t])&&++t<c;);return o}}function H(){var n=this.__transition__;n&&++n.active}function F(n,t,e){function r(){var t=this[o];t&&(this.removeEventListener(n,t,t.$),delete this[o])}function u(){var u=c(t,Qo(arguments));r.call(this),this.addEventListener(n,this[o]=u,u.$=e),u._=t}function i(){var t,e=new RegExp("^__on([^.]+)"+Go.requote(n)+"$");for(var r in this)if(t=r.match(e)){var u=this[r];this.removeEventListener(t[1],u,u.$),delete this[r]}}var o="__on"+n,a=n.indexOf("."),c=O;a>0&&(n=n.substring(0,a));var s=ka.get(n);return s&&(n=s,c=I),a?t?u:r:t?v:i}function O(n,t){return function(e){var r=Go.event;Go.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{Go.event=r}}}function I(n,t){var e=O(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function Y(){var n=".dragsuppress-"+ ++Aa,t="click"+n,e=Go.select(ea).on("touchmove"+n,y).on("dragstart"+n,y).on("selectstart"+n,y);if(Ea){var r=ta.style,u=r[Ea];r[Ea]="none"}return function(i){function o(){e.on(t,null)}e.on(n,null),Ea&&(r[Ea]=u),i&&(e.on(t,function(){y(),o()},!0),setTimeout(o,0))}}function Z(n,t){t.changedTouches&&(t=t.changedTouches[0]);var e=n.ownerSVGElement||n;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=t.clientX,r.y=t.clientY,r=r.matrixTransform(n.getScreenCTM().inverse()),[r.x,r.y]}var u=n.getBoundingClientRect();return[t.clientX-u.left-n.clientLeft,t.clientY-u.top-n.clientTop]}function V(){return Go.event.changedTouches[0].identifier}function $(){return Go.event.target}function X(){return ea}function B(n){return n>0?1:0>n?-1:0}function J(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function W(n){return n>1?0:-1>n?Ca:Math.acos(n)}function G(n){return n>1?La:-1>n?-La:Math.asin(n)}function K(n){return((n=Math.exp(n))-1/n)/2}function Q(n){return((n=Math.exp(n))+1/n)/2}function nt(n){return((n=Math.exp(2*n))-1)/(n+1)}function tt(n){return(n=Math.sin(n/2))*n}function et(){}function rt(n,t,e){return new ut(n,t,e)}function ut(n,t,e){this.h=n,this.s=t,this.l=e}function it(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?i+(o-i)*n/60:180>n?o:240>n?i+(o-i)*(240-n)/60:i}function u(n){return Math.round(255*r(n))}var i,o;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,o=.5>=e?e*(1+t):e+t-e*t,i=2*e-o,yt(u(n+120),u(n),u(n-120))}function ot(n,t,e){return new at(n,t,e)}function at(n,t,e){this.h=n,this.c=t,this.l=e}function ct(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),st(e,Math.cos(n*=za)*t,Math.sin(n)*t)}function st(n,t,e){return new lt(n,t,e)}function lt(n,t,e){this.l=n,this.a=t,this.b=e}function ft(n,t,e){var r=(n+16)/116,u=r+t/500,i=r-e/200;return u=gt(u)*Za,r=gt(r)*Va,i=gt(i)*$a,yt(vt(3.2404542*u-1.5371385*r-.4985314*i),vt(-.969266*u+1.8760108*r+.041556*i),vt(.0556434*u-.2040259*r+1.0572252*i))}function ht(n,t,e){return n>0?ot(Math.atan2(e,t)*Ra,Math.sqrt(t*t+e*e),n):ot(0/0,0/0,n)}function gt(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function pt(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function vt(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function dt(n){return yt(n>>16,255&n>>8,255&n)}function mt(n){return dt(n)+""}function yt(n,t,e){return new xt(n,t,e)}function xt(n,t,e){this.r=n,this.g=t,this.b=e}function Mt(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function _t(n,t,e){var r,u,i,o=0,a=0,c=0;if(r=/([a-z]+)\((.*)\)/i.exec(n))switch(u=r[2].split(","),r[1]){case"hsl":return e(parseFloat(u[0]),parseFloat(u[1])/100,parseFloat(u[2])/100);case"rgb":return t(kt(u[0]),kt(u[1]),kt(u[2]))}return(i=Ja.get(n))?t(i.r,i.g,i.b):(null==n||"#"!==n.charAt(0)||isNaN(i=parseInt(n.substring(1),16))||(4===n.length?(o=(3840&i)>>4,o=o>>4|o,a=240&i,a=a>>4|a,c=15&i,c=c<<4|c):7===n.length&&(o=(16711680&i)>>16,a=(65280&i)>>8,c=255&i)),t(o,a,c))}function bt(n,t,e){var r,u,i=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),a=o-i,c=(o+i)/2;return a?(u=.5>c?a/(o+i):a/(2-o-i),r=n==o?(t-e)/a+(e>t?6:0):t==o?(e-n)/a+2:(n-t)/a+4,r*=60):(r=0/0,u=c>0&&1>c?0:r),rt(r,u,c)}function wt(n,t,e){n=St(n),t=St(t),e=St(e);var r=pt((.4124564*n+.3575761*t+.1804375*e)/Za),u=pt((.2126729*n+.7151522*t+.072175*e)/Va),i=pt((.0193339*n+.119192*t+.9503041*e)/$a);return st(116*u-16,500*(r-u),200*(u-i))}function St(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function kt(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function Et(n){return"function"==typeof n?n:function(){return n}}function At(n){return n}function Ct(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),Nt(t,e,n,r)}}function Nt(n,t,e,r){function u(){var n,t=c.status;if(!t&&c.responseText||t>=200&&300>t||304===t){try{n=e.call(i,c)}catch(r){return o.error.call(i,r),void 0}o.load.call(i,n)}else o.error.call(i,c)}var i={},o=Go.dispatch("beforesend","progress","load","error"),a={},c=new XMLHttpRequest,s=null;return!ea.XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(n)||(c=new XDomainRequest),"onload"in c?c.onload=c.onerror=u:c.onreadystatechange=function(){c.readyState>3&&u()},c.onprogress=function(n){var t=Go.event;Go.event=n;try{o.progress.call(i,c)}finally{Go.event=t}},i.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+"",i)},i.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",i):t},i.responseType=function(n){return arguments.length?(s=n,i):s},i.response=function(n){return e=n,i},["get","post"].forEach(function(n){i[n]=function(){return i.send.apply(i,[n].concat(Qo(arguments)))}}),i.send=function(e,r,u){if(2===arguments.length&&"function"==typeof r&&(u=r,r=null),c.open(e,n,!0),null==t||"accept"in a||(a.accept=t+",*/*"),c.setRequestHeader)for(var l in a)c.setRequestHeader(l,a[l]);return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=s&&(c.responseType=s),null!=u&&i.on("error",u).on("load",function(n){u(null,n)}),o.beforesend.call(i,c),c.send(null==r?null:r),i},i.abort=function(){return c.abort(),i},Go.rebind(i,o,"on"),null==r?i:i.get(Lt(r))}function Lt(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function Tt(){var n=qt(),t=zt()-n;t>24?(isFinite(t)&&(clearTimeout(Qa),Qa=setTimeout(Tt,t)),Ka=0):(Ka=1,tc(Tt))}function qt(){var n=Date.now();for(nc=Wa;nc;)n>=nc.t&&(nc.f=nc.c(n-nc.t)),nc=nc.n;return n}function zt(){for(var n,t=Wa,e=1/0;t;)t.f?t=n?n.n=t.n:Wa=t.n:(t.t<e&&(e=t.t),t=(n=t).n);return Ga=n,e}function Rt(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Dt(n,t){var e=Math.pow(10,3*fa(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function Pt(n){var t=n.decimal,e=n.thousands,r=n.grouping,u=n.currency,i=r?function(n){for(var t=n.length,u=[],i=0,o=r[0];t>0&&o>0;)u.push(n.substring(t-=o,t+o)),o=r[i=(i+1)%r.length];return u.reverse().join(e)}:At;return function(n){var e=rc.exec(n),r=e[1]||" ",o=e[2]||">",a=e[3]||"",c=e[4]||"",s=e[5],l=+e[6],f=e[7],h=e[8],g=e[9],p=1,v="",d="",m=!1;switch(h&&(h=+h.substring(1)),(s||"0"===r&&"="===o)&&(s=r="0",o="=",f&&(l-=Math.floor((l-1)/4))),g){case"n":f=!0,g="g";break;case"%":p=100,d="%",g="f";break;case"p":p=100,d="%",g="r";break;case"b":case"o":case"x":case"X":"#"===c&&(v="0"+g.toLowerCase());case"c":case"d":m=!0,h=0;break;case"s":p=-1,g="r"}"$"===c&&(v=u[0],d=u[1]),"r"!=g||h||(g="g"),null!=h&&("g"==g?h=Math.max(1,Math.min(21,h)):("e"==g||"f"==g)&&(h=Math.max(0,Math.min(20,h)))),g=uc.get(g)||Ut;var y=s&&f;return function(n){var e=d;if(m&&n%1)return"";var u=0>n||0===n&&0>1/n?(n=-n,"-"):a;if(0>p){var c=Go.formatPrefix(n,h);n=c.scale(n),e=c.symbol+d}else n*=p;n=g(n,h);var x=n.lastIndexOf("."),M=0>x?n:n.substring(0,x),_=0>x?"":t+n.substring(x+1);!s&&f&&(M=i(M));var b=v.length+M.length+_.length+(y?0:u.length),w=l>b?new Array(b=l-b+1).join(r):"";return y&&(M=i(w+M)),u+=v,n=M+_,("<"===o?u+n+w:">"===o?w+u+n:"^"===o?w.substring(0,b>>=1)+u+n+w.substring(b):u+(y?n:w+n))+e}}}function Ut(n){return n+""}function jt(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Ht(n,t,e){function r(t){var e=n(t),r=i(e,1);return r-t>t-e?e:r}function u(e){return t(e=n(new oc(e-1)),1),e}function i(n,e){return t(n=new oc(+n),e),n}function o(n,r,i){var o=u(n),a=[];if(i>1)for(;r>o;)e(o)%i||a.push(new Date(+o)),t(o,1);else for(;r>o;)a.push(new Date(+o)),t(o,1);return a}function a(n,t,e){try{oc=jt;var r=new jt;return r._=n,o(r,t,e)}finally{oc=Date}}n.floor=n,n.round=r,n.ceil=u,n.offset=i,n.range=o;var c=n.utc=Ft(n);return c.floor=c,c.round=Ft(r),c.ceil=Ft(u),c.offset=Ft(i),c.range=a,n}function Ft(n){return function(t,e){try{oc=jt;var r=new jt;return r._=t,n(r,e)._}finally{oc=Date}}}function Ot(n){function t(n){function t(t){for(var e,u,i,o=[],a=-1,c=0;++a<r;)37===n.charCodeAt(a)&&(o.push(n.substring(c,a)),null!=(u=cc[e=n.charAt(++a)])&&(e=n.charAt(++a)),(i=C[e])&&(e=i(t,null==u?"e"===e?" ":"0":u)),o.push(e),c=a+1);return o.push(n.substring(c,a)),o.join("")}var r=n.length;return t.parse=function(t){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},u=e(r,n,t,0);if(u!=t.length)return null;"p"in r&&(r.H=r.H%12+12*r.p);var i=null!=r.Z&&oc!==jt,o=new(i?jt:oc);return"j"in r?o.setFullYear(r.y,0,r.j):"w"in r&&("W"in r||"U"in r)?(o.setFullYear(r.y,0,1),o.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(o.getDay()+5)%7:r.w+7*r.U-(o.getDay()+6)%7)):o.setFullYear(r.y,r.m,r.d),o.setHours(r.H+Math.floor(r.Z/100),r.M+r.Z%100,r.S,r.L),i?o._:o},t.toString=function(){return n},t}function e(n,t,e,r){for(var u,i,o,a=0,c=t.length,s=e.length;c>a;){if(r>=s)return-1;if(u=t.charCodeAt(a++),37===u){if(o=t.charAt(a++),i=N[o in cc?t.charAt(a++):o],!i||(r=i(n,e,r))<0)return-1}else if(u!=e.charCodeAt(r++))return-1}return r}function r(n,t,e){b.lastIndex=0;var r=b.exec(t.substring(e));return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1}function u(n,t,e){M.lastIndex=0;var r=M.exec(t.substring(e));return r?(n.w=_.get(r[0].toLowerCase()),e+r[0].length):-1}function i(n,t,e){E.lastIndex=0;var r=E.exec(t.substring(e));return r?(n.m=A.get(r[0].toLowerCase()),e+r[0].length):-1}function o(n,t,e){S.lastIndex=0;var r=S.exec(t.substring(e));return r?(n.m=k.get(r[0].toLowerCase()),e+r[0].length):-1}function a(n,t,r){return e(n,C.c.toString(),t,r)}function c(n,t,r){return e(n,C.x.toString(),t,r)}function s(n,t,r){return e(n,C.X.toString(),t,r)}function l(n,t,e){var r=x.get(t.substring(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}var f=n.dateTime,h=n.date,g=n.time,p=n.periods,v=n.days,d=n.shortDays,m=n.months,y=n.shortMonths;t.utc=function(n){function e(n){try{oc=jt;var t=new oc;return t._=n,r(t)}finally{oc=Date}}var r=t(n);return e.parse=function(n){try{oc=jt;var t=r.parse(n);return t&&t._}finally{oc=Date}},e.toString=r.toString,e},t.multi=t.utc.multi=ae;var x=Go.map(),M=Yt(v),_=Zt(v),b=Yt(d),w=Zt(d),S=Yt(m),k=Zt(m),E=Yt(y),A=Zt(y);p.forEach(function(n,t){x.set(n.toLowerCase(),t)});var C={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return y[n.getMonth()]},B:function(n){return m[n.getMonth()]},c:t(f),d:function(n,t){return It(n.getDate(),t,2)},e:function(n,t){return It(n.getDate(),t,2)},H:function(n,t){return It(n.getHours(),t,2)},I:function(n,t){return It(n.getHours()%12||12,t,2)},j:function(n,t){return It(1+ic.dayOfYear(n),t,3)},L:function(n,t){return It(n.getMilliseconds(),t,3)},m:function(n,t){return It(n.getMonth()+1,t,2)},M:function(n,t){return It(n.getMinutes(),t,2)},p:function(n){return p[+(n.getHours()>=12)]},S:function(n,t){return It(n.getSeconds(),t,2)},U:function(n,t){return It(ic.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return It(ic.mondayOfYear(n),t,2)},x:t(h),X:t(g),y:function(n,t){return It(n.getFullYear()%100,t,2)},Y:function(n,t){return It(n.getFullYear()%1e4,t,4)},Z:ie,"%":function(){return"%"}},N={a:r,A:u,b:i,B:o,c:a,d:Qt,e:Qt,H:te,I:te,j:ne,L:ue,m:Kt,M:ee,p:l,S:re,U:$t,w:Vt,W:Xt,x:c,X:s,y:Jt,Y:Bt,Z:Wt,"%":oe};return t}function It(n,t,e){var r=0>n?"-":"",u=(r?-n:n)+"",i=u.length;return r+(e>i?new Array(e-i+1).join(t)+u:u)}function Yt(n){return new RegExp("^(?:"+n.map(Go.requote).join("|")+")","i")}function Zt(n){for(var t=new o,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function Vt(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function $t(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e));return r?(n.U=+r[0],e+r[0].length):-1}function Xt(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e));return r?(n.W=+r[0],e+r[0].length):-1}function Bt(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Jt(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e,e+2));return r?(n.y=Gt(+r[0]),e+r[0].length):-1}function Wt(n,t,e){return/^[+-]\d{4}$/.test(t=t.substring(e,e+5))?(n.Z=-t,e+5):-1}function Gt(n){return n+(n>68?1900:2e3)}function Kt(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function Qt(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function ne(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function te(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function ee(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function re(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function ue(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function ie(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=~~(fa(t)/60),u=fa(t)%60;return e+It(r,"0",2)+It(u,"0",2)}function oe(n,t,e){lc.lastIndex=0;var r=lc.exec(t.substring(e,e+1));return r?e+r[0].length:-1}function ae(n){for(var t=n.length,e=-1;++e<t;)n[e][0]=this(n[e][0]);return function(t){for(var e=0,r=n[e];!r[1](t);)r=n[++e];return r[0](t)}}function ce(){}function se(n,t,e){var r=e.s=n+t,u=r-n,i=r-u;e.t=n-i+(t-u)}function le(n,t){n&&pc.hasOwnProperty(n.type)&&pc[n.type](n,t)}function fe(n,t,e){var r,u=-1,i=n.length-e;for(t.lineStart();++u<i;)r=n[u],t.point(r[0],r[1],r[2]);t.lineEnd()}function he(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)fe(n[e],t,1);t.polygonEnd()}function ge(){function n(n,t){n*=za,t=t*za/2+Ca/4;var e=n-r,o=e>=0?1:-1,a=o*e,c=Math.cos(t),s=Math.sin(t),l=i*s,f=u*c+l*Math.cos(a),h=l*o*Math.sin(a);dc.add(Math.atan2(h,f)),r=n,u=c,i=s}var t,e,r,u,i;mc.point=function(o,a){mc.point=n,r=(t=o)*za,u=Math.cos(a=(e=a)*za/2+Ca/4),i=Math.sin(a)},mc.lineEnd=function(){n(t,e)}}function pe(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function ve(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function de(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function me(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function ye(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function xe(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function Me(n){return[Math.atan2(n[1],n[0]),G(n[2])]}function _e(n,t){return fa(n[0]-t[0])<Ta&&fa(n[1]-t[1])<Ta}function be(n,t){n*=za;var e=Math.cos(t*=za);we(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function we(n,t,e){++yc,Mc+=(n-Mc)/yc,_c+=(t-_c)/yc,bc+=(e-bc)/yc}function Se(){function n(n,u){n*=za;var i=Math.cos(u*=za),o=i*Math.cos(n),a=i*Math.sin(n),c=Math.sin(u),s=Math.atan2(Math.sqrt((s=e*c-r*a)*s+(s=r*o-t*c)*s+(s=t*a-e*o)*s),t*o+e*a+r*c);xc+=s,wc+=s*(t+(t=o)),Sc+=s*(e+(e=a)),kc+=s*(r+(r=c)),we(t,e,r)}var t,e,r;Nc.point=function(u,i){u*=za;var o=Math.cos(i*=za);t=o*Math.cos(u),e=o*Math.sin(u),r=Math.sin(i),Nc.point=n,we(t,e,r)}}function ke(){Nc.point=be}function Ee(){function n(n,t){n*=za;var e=Math.cos(t*=za),o=e*Math.cos(n),a=e*Math.sin(n),c=Math.sin(t),s=u*c-i*a,l=i*o-r*c,f=r*a-u*o,h=Math.sqrt(s*s+l*l+f*f),g=r*o+u*a+i*c,p=h&&-W(g)/h,v=Math.atan2(h,g);Ec+=p*s,Ac+=p*l,Cc+=p*f,xc+=v,wc+=v*(r+(r=o)),Sc+=v*(u+(u=a)),kc+=v*(i+(i=c)),we(r,u,i)}var t,e,r,u,i;Nc.point=function(o,a){t=o,e=a,Nc.point=n,o*=za;var c=Math.cos(a*=za);r=c*Math.cos(o),u=c*Math.sin(o),i=Math.sin(a),we(r,u,i)},Nc.lineEnd=function(){n(t,e),Nc.lineEnd=ke,Nc.point=be}}function Ae(){return!0}function Ce(n,t,e,r,u){var i=[],o=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(_e(e,r)){u.lineStart();for(var a=0;t>a;++a)u.point((e=n[a])[0],e[1]);return u.lineEnd(),void 0}var c=new Le(e,n,null,!0),s=new Le(e,null,c,!1);c.o=s,i.push(c),o.push(s),c=new Le(r,n,null,!1),s=new Le(r,null,c,!0),c.o=s,i.push(c),o.push(s)}}),o.sort(t),Ne(i),Ne(o),i.length){for(var a=0,c=e,s=o.length;s>a;++a)o[a].e=c=!c;for(var l,f,h=i[0];;){for(var g=h,p=!0;g.v;)if((g=g.n)===h)return;l=g.z,u.lineStart();do{if(g.v=g.o.v=!0,g.e){if(p)for(var a=0,s=l.length;s>a;++a)u.point((f=l[a])[0],f[1]);else r(g.x,g.n.x,1,u);g=g.n}else{if(p){l=g.p.z;for(var a=l.length-1;a>=0;--a)u.point((f=l[a])[0],f[1])}else r(g.x,g.p.x,-1,u);g=g.p}g=g.o,l=g.z,p=!p}while(!g.v);u.lineEnd()}}}function Ne(n){if(t=n.length){for(var t,e,r=0,u=n[0];++r<t;)u.n=e=n[r],e.p=u,u=e;u.n=e=n[0],e.p=u}}function Le(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Te(n,t,e,r){return function(u,i){function o(t,e){var r=u(t,e);n(t=r[0],e=r[1])&&i.point(t,e)}function a(n,t){var e=u(n,t);d.point(e[0],e[1])}function c(){y.point=a,d.lineStart()}function s(){y.point=o,d.lineEnd()}function l(n,t){v.push([n,t]);var e=u(n,t);M.point(e[0],e[1])}function f(){M.lineStart(),v=[]}function h(){l(v[0][0],v[0][1]),M.lineEnd();var n,t=M.clean(),e=x.buffer(),r=e.length;if(v.pop(),p.push(v),v=null,r)if(1&t){n=e[0];var u,r=n.length-1,o=-1;if(r>0){for(_||(i.polygonStart(),_=!0),i.lineStart();++o<r;)i.point((u=n[o])[0],u[1]);i.lineEnd()}}else r>1&&2&t&&e.push(e.pop().concat(e.shift())),g.push(e.filter(qe))}var g,p,v,d=t(i),m=u.invert(r[0],r[1]),y={point:o,lineStart:c,lineEnd:s,polygonStart:function(){y.point=l,y.lineStart=f,y.lineEnd=h,g=[],p=[]},polygonEnd:function(){y.point=o,y.lineStart=c,y.lineEnd=s,g=Go.merge(g);var n=De(m,p);g.length?(_||(i.polygonStart(),_=!0),Ce(g,Re,n,e,i)):n&&(_||(i.polygonStart(),_=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),_&&(i.polygonEnd(),_=!1),g=p=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}},x=ze(),M=t(x),_=!1;return y}}function qe(n){return n.length>1}function ze(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:v,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function Re(n,t){return((n=n.x)[0]<0?n[1]-La-Ta:La-n[1])-((t=t.x)[0]<0?t[1]-La-Ta:La-t[1])}function De(n,t){var e=n[0],r=n[1],u=[Math.sin(e),-Math.cos(e),0],i=0,o=0;dc.reset();for(var a=0,c=t.length;c>a;++a){var s=t[a],l=s.length;if(l)for(var f=s[0],h=f[0],g=f[1]/2+Ca/4,p=Math.sin(g),v=Math.cos(g),d=1;;){d===l&&(d=0),n=s[d];var m=n[0],y=n[1]/2+Ca/4,x=Math.sin(y),M=Math.cos(y),_=m-h,b=_>=0?1:-1,w=b*_,S=w>Ca,k=p*x;if(dc.add(Math.atan2(k*b*Math.sin(w),v*M+k*Math.cos(w))),i+=S?_+b*Na:_,S^h>=e^m>=e){var E=de(pe(f),pe(n));xe(E);var A=de(u,E);xe(A);var C=(S^_>=0?-1:1)*G(A[2]);(r>C||r===C&&(E[0]||E[1]))&&(o+=S^_>=0?1:-1)}if(!d++)break;h=m,p=x,v=M,f=n}}return(-Ta>i||Ta>i&&0>dc)^1&o}function Pe(n){var t,e=0/0,r=0/0,u=0/0;return{lineStart:function(){n.lineStart(),t=1},point:function(i,o){var a=i>0?Ca:-Ca,c=fa(i-e);fa(c-Ca)<Ta?(n.point(e,r=(r+o)/2>0?La:-La),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(i,r),t=0):u!==a&&c>=Ca&&(fa(e-u)<Ta&&(e-=u*Ta),fa(i-a)<Ta&&(i-=a*Ta),r=Ue(e,r,i,o),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=i,r=o),u=a},lineEnd:function(){n.lineEnd(),e=r=0/0},clean:function(){return 2-t}}}function Ue(n,t,e,r){var u,i,o=Math.sin(n-e);return fa(o)>Ta?Math.atan((Math.sin(t)*(i=Math.cos(r))*Math.sin(e)-Math.sin(r)*(u=Math.cos(t))*Math.sin(n))/(u*i*o)):(t+r)/2}function je(n,t,e,r){var u;if(null==n)u=e*La,r.point(-Ca,u),r.point(0,u),r.point(Ca,u),r.point(Ca,0),r.point(Ca,-u),r.point(0,-u),r.point(-Ca,-u),r.point(-Ca,0),r.point(-Ca,u);else if(fa(n[0]-t[0])>Ta){var i=n[0]<t[0]?Ca:-Ca;u=e*i/2,r.point(-i,u),r.point(0,u),r.point(i,u)}else r.point(t[0],t[1])}function He(n){function t(n,t){return Math.cos(n)*Math.cos(t)>i}function e(n){var e,i,c,s,l;return{lineStart:function(){s=c=!1,l=1},point:function(f,h){var g,p=[f,h],v=t(f,h),d=o?v?0:u(f,h):v?u(f+(0>f?Ca:-Ca),h):0;if(!e&&(s=c=v)&&n.lineStart(),v!==c&&(g=r(e,p),(_e(e,g)||_e(p,g))&&(p[0]+=Ta,p[1]+=Ta,v=t(p[0],p[1]))),v!==c)l=0,v?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(a&&e&&o^v){var m;d&i||!(m=r(p,e,!0))||(l=0,o?(n.lineStart(),n.point(m[0][0],m[0][1]),n.point(m[1][0],m[1][1]),n.lineEnd()):(n.point(m[1][0],m[1][1]),n.lineEnd(),n.lineStart(),n.point(m[0][0],m[0][1])))}!v||e&&_e(e,p)||n.point(p[0],p[1]),e=p,c=v,i=d},lineEnd:function(){c&&n.lineEnd(),e=null},clean:function(){return l|(s&&c)<<1}}}function r(n,t,e){var r=pe(n),u=pe(t),o=[1,0,0],a=de(r,u),c=ve(a,a),s=a[0],l=c-s*s;if(!l)return!e&&n;var f=i*c/l,h=-i*s/l,g=de(o,a),p=ye(o,f),v=ye(a,h);me(p,v);var d=g,m=ve(p,d),y=ve(d,d),x=m*m-y*(ve(p,p)-1);if(!(0>x)){var M=Math.sqrt(x),_=ye(d,(-m-M)/y);if(me(_,p),_=Me(_),!e)return _;var b,w=n[0],S=t[0],k=n[1],E=t[1];w>S&&(b=w,w=S,S=b);var A=S-w,C=fa(A-Ca)<Ta,N=C||Ta>A;if(!C&&k>E&&(b=k,k=E,E=b),N?C?k+E>0^_[1]<(fa(_[0]-w)<Ta?k:E):k<=_[1]&&_[1]<=E:A>Ca^(w<=_[0]&&_[0]<=S)){var L=ye(d,(-m+M)/y);return me(L,p),[_,Me(L)]}}}function u(t,e){var r=o?n:Ca-n,u=0;return-r>t?u|=1:t>r&&(u|=2),-r>e?u|=4:e>r&&(u|=8),u}var i=Math.cos(n),o=i>0,a=fa(i)>Ta,c=gr(n,6*za);return Te(t,e,c,o?[0,-n]:[-Ca,n-Ca])}function Fe(n,t,e,r){return function(u){var i,o=u.a,a=u.b,c=o.x,s=o.y,l=a.x,f=a.y,h=0,g=1,p=l-c,v=f-s;if(i=n-c,p||!(i>0)){if(i/=p,0>p){if(h>i)return;g>i&&(g=i)}else if(p>0){if(i>g)return;i>h&&(h=i)}if(i=e-c,p||!(0>i)){if(i/=p,0>p){if(i>g)return;i>h&&(h=i)}else if(p>0){if(h>i)return;g>i&&(g=i)}if(i=t-s,v||!(i>0)){if(i/=v,0>v){if(h>i)return;g>i&&(g=i)}else if(v>0){if(i>g)return;i>h&&(h=i)}if(i=r-s,v||!(0>i)){if(i/=v,0>v){if(i>g)return;i>h&&(h=i)}else if(v>0){if(h>i)return;g>i&&(g=i)}return h>0&&(u.a={x:c+h*p,y:s+h*v}),1>g&&(u.b={x:c+g*p,y:s+g*v}),u}}}}}}function Oe(n,t,e,r){function u(r,u){return fa(r[0]-n)<Ta?u>0?0:3:fa(r[0]-e)<Ta?u>0?2:1:fa(r[1]-t)<Ta?u>0?1:0:u>0?3:2}function i(n,t){return o(n.x,t.x)}function o(n,t){var e=u(n,1),r=u(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(a){function c(n){for(var t=0,e=d.length,r=n[1],u=0;e>u;++u)for(var i,o=1,a=d[u],c=a.length,s=a[0];c>o;++o)i=a[o],s[1]<=r?i[1]>r&&J(s,i,n)>0&&++t:i[1]<=r&&J(s,i,n)<0&&--t,s=i;return 0!==t}function s(i,a,c,s){var l=0,f=0;if(null==i||(l=u(i,c))!==(f=u(a,c))||o(i,a)<0^c>0){do s.point(0===l||3===l?n:e,l>1?r:t);while((l=(l+c+4)%4)!==f)}else s.point(a[0],a[1])}function l(u,i){return u>=n&&e>=u&&i>=t&&r>=i}function f(n,t){l(n,t)&&a.point(n,t)}function h(){N.point=p,d&&d.push(m=[]),S=!0,w=!1,_=b=0/0}function g(){v&&(p(y,x),M&&w&&A.rejoin(),v.push(A.buffer())),N.point=f,w&&a.lineEnd()}function p(n,t){n=Math.max(-Tc,Math.min(Tc,n)),t=Math.max(-Tc,Math.min(Tc,t));var e=l(n,t);if(d&&m.push([n,t]),S)y=n,x=t,M=e,S=!1,e&&(a.lineStart(),a.point(n,t));else if(e&&w)a.point(n,t);else{var r={a:{x:_,y:b},b:{x:n,y:t}};C(r)?(w||(a.lineStart(),a.point(r.a.x,r.a.y)),a.point(r.b.x,r.b.y),e||a.lineEnd(),k=!1):e&&(a.lineStart(),a.point(n,t),k=!1)}_=n,b=t,w=e}var v,d,m,y,x,M,_,b,w,S,k,E=a,A=ze(),C=Fe(n,t,e,r),N={point:f,lineStart:h,lineEnd:g,polygonStart:function(){a=A,v=[],d=[],k=!0},polygonEnd:function(){a=E,v=Go.merge(v);var t=c([n,r]),e=k&&t,u=v.length;(e||u)&&(a.polygonStart(),e&&(a.lineStart(),s(null,null,1,a),a.lineEnd()),u&&Ce(v,i,t,s,a),a.polygonEnd()),v=d=m=null}};return N}}function Ie(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function Ye(n){var t=0,e=Ca/3,r=ir(n),u=r(t,e);return u.parallels=function(n){return arguments.length?r(t=n[0]*Ca/180,e=n[1]*Ca/180):[180*(t/Ca),180*(e/Ca)]},u}function Ze(n,t){function e(n,t){var e=Math.sqrt(i-2*u*Math.sin(t))/u;return[e*Math.sin(n*=u),o-e*Math.cos(n)]}var r=Math.sin(n),u=(r+Math.sin(t))/2,i=1+r*(2*u-r),o=Math.sqrt(i)/u;return e.invert=function(n,t){var e=o-t;return[Math.atan2(n,e)/u,G((i-(n*n+e*e)*u*u)/(2*u))]},e}function Ve(){function n(n,t){zc+=u*n-r*t,r=n,u=t}var t,e,r,u;jc.point=function(i,o){jc.point=n,t=r=i,e=u=o},jc.lineEnd=function(){n(t,e)}}function $e(n,t){Rc>n&&(Rc=n),n>Pc&&(Pc=n),Dc>t&&(Dc=t),t>Uc&&(Uc=t)}function Xe(){function n(n,t){o.push("M",n,",",t,i)}function t(n,t){o.push("M",n,",",t),a.point=e}function e(n,t){o.push("L",n,",",t)}function r(){a.point=n}function u(){o.push("Z")}var i=Be(4.5),o=[],a={point:n,lineStart:function(){a.point=t},lineEnd:r,polygonStart:function(){a.lineEnd=u},polygonEnd:function(){a.lineEnd=r,a.point=n},pointRadius:function(n){return i=Be(n),a},result:function(){if(o.length){var n=o.join("");return o=[],n}}};return a}function Be(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function Je(n,t){Mc+=n,_c+=t,++bc}function We(){function n(n,r){var u=n-t,i=r-e,o=Math.sqrt(u*u+i*i);wc+=o*(t+n)/2,Sc+=o*(e+r)/2,kc+=o,Je(t=n,e=r)}var t,e;Fc.point=function(r,u){Fc.point=n,Je(t=r,e=u)}}function Ge(){Fc.point=Je}function Ke(){function n(n,t){var e=n-r,i=t-u,o=Math.sqrt(e*e+i*i);wc+=o*(r+n)/2,Sc+=o*(u+t)/2,kc+=o,o=u*n-r*t,Ec+=o*(r+n),Ac+=o*(u+t),Cc+=3*o,Je(r=n,u=t)}var t,e,r,u;Fc.point=function(i,o){Fc.point=n,Je(t=r=i,e=u=o)},Fc.lineEnd=function(){n(t,e)}}function Qe(n){function t(t,e){n.moveTo(t,e),n.arc(t,e,o,0,Na)}function e(t,e){n.moveTo(t,e),a.point=r}function r(t,e){n.lineTo(t,e)}function u(){a.point=t}function i(){n.closePath()}var o=4.5,a={point:t,lineStart:function(){a.point=e},lineEnd:u,polygonStart:function(){a.lineEnd=i},polygonEnd:function(){a.lineEnd=u,a.point=t},pointRadius:function(n){return o=n,a},result:v};return a}function nr(n){function t(n){return(a?r:e)(n)}function e(t){return rr(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){x=0/0,S.point=i,t.lineStart()}function i(e,r){var i=pe([e,r]),o=n(e,r);u(x,M,y,_,b,w,x=o[0],M=o[1],y=e,_=i[0],b=i[1],w=i[2],a,t),t.point(x,M)}function o(){S.point=e,t.lineEnd()}function c(){r(),S.point=s,S.lineEnd=l}function s(n,t){i(f=n,h=t),g=x,p=M,v=_,d=b,m=w,S.point=i}function l(){u(x,M,y,_,b,w,g,p,f,v,d,m,a,t),S.lineEnd=o,o()}var f,h,g,p,v,d,m,y,x,M,_,b,w,S={point:e,lineStart:r,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=c},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}};return S}function u(t,e,r,a,c,s,l,f,h,g,p,v,d,m){var y=l-t,x=f-e,M=y*y+x*x;if(M>4*i&&d--){var _=a+g,b=c+p,w=s+v,S=Math.sqrt(_*_+b*b+w*w),k=Math.asin(w/=S),E=fa(fa(w)-1)<Ta||fa(r-h)<Ta?(r+h)/2:Math.atan2(b,_),A=n(E,k),C=A[0],N=A[1],L=C-t,T=N-e,q=x*L-y*T;(q*q/M>i||fa((y*L+x*T)/M-.5)>.3||o>a*g+c*p+s*v)&&(u(t,e,r,a,c,s,C,N,E,_/=S,b/=S,w,d,m),m.point(C,N),u(C,N,E,_,b,w,l,f,h,g,p,v,d,m))}}var i=.5,o=Math.cos(30*za),a=16;return t.precision=function(n){return arguments.length?(a=(i=n*n)>0&&16,t):Math.sqrt(i)},t}function tr(n){var t=nr(function(t,e){return n([t*Ra,e*Ra])});return function(n){return or(t(n))}}function er(n){this.stream=n}function rr(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function ur(n){return ir(function(){return n})()}function ir(n){function t(n){return n=a(n[0]*za,n[1]*za),[n[0]*h+c,s-n[1]*h]}function e(n){return n=a.invert((n[0]-c)/h,(s-n[1])/h),n&&[n[0]*Ra,n[1]*Ra]}function r(){a=Ie(o=sr(m,y,x),i);var n=i(v,d);return c=g-n[0]*h,s=p+n[1]*h,u()
}function u(){return l&&(l.valid=!1,l=null),t}var i,o,a,c,s,l,f=nr(function(n,t){return n=i(n,t),[n[0]*h+c,s-n[1]*h]}),h=150,g=480,p=250,v=0,d=0,m=0,y=0,x=0,M=Lc,_=At,b=null,w=null;return t.stream=function(n){return l&&(l.valid=!1),l=or(M(o,f(_(n)))),l.valid=!0,l},t.clipAngle=function(n){return arguments.length?(M=null==n?(b=n,Lc):He((b=+n)*za),u()):b},t.clipExtent=function(n){return arguments.length?(w=n,_=n?Oe(n[0][0],n[0][1],n[1][0],n[1][1]):At,u()):w},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],r()):[g,p]},t.center=function(n){return arguments.length?(v=n[0]%360*za,d=n[1]%360*za,r()):[v*Ra,d*Ra]},t.rotate=function(n){return arguments.length?(m=n[0]%360*za,y=n[1]%360*za,x=n.length>2?n[2]%360*za:0,r()):[m*Ra,y*Ra,x*Ra]},Go.rebind(t,f,"precision"),function(){return i=n.apply(this,arguments),t.invert=i.invert&&e,r()}}function or(n){return rr(n,function(t,e){n.point(t*za,e*za)})}function ar(n,t){return[n,t]}function cr(n,t){return[n>Ca?n-Na:-Ca>n?n+Na:n,t]}function sr(n,t,e){return n?t||e?Ie(fr(n),hr(t,e)):fr(n):t||e?hr(t,e):cr}function lr(n){return function(t,e){return t+=n,[t>Ca?t-Na:-Ca>t?t+Na:t,e]}}function fr(n){var t=lr(n);return t.invert=lr(-n),t}function hr(n,t){function e(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,s=Math.sin(t),l=s*r+a*u;return[Math.atan2(c*i-l*o,a*r-s*u),G(l*i+c*o)]}var r=Math.cos(n),u=Math.sin(n),i=Math.cos(t),o=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,s=Math.sin(t),l=s*i-c*o;return[Math.atan2(c*i+s*o,a*r+l*u),G(l*r-a*u)]},e}function gr(n,t){var e=Math.cos(n),r=Math.sin(n);return function(u,i,o,a){var c=o*t;null!=u?(u=pr(e,u),i=pr(e,i),(o>0?i>u:u>i)&&(u+=o*Na)):(u=n+o*Na,i=n-.5*c);for(var s,l=u;o>0?l>i:i>l;l-=c)a.point((s=Me([e,-r*Math.cos(l),-r*Math.sin(l)]))[0],s[1])}}function pr(n,t){var e=pe(t);e[0]-=n,xe(e);var r=W(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Ta)%(2*Math.PI)}function vr(n,t,e){var r=Go.range(n,t-Ta,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function dr(n,t,e){var r=Go.range(n,t-Ta,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function mr(n){return n.source}function yr(n){return n.target}function xr(n,t,e,r){var u=Math.cos(t),i=Math.sin(t),o=Math.cos(r),a=Math.sin(r),c=u*Math.cos(n),s=u*Math.sin(n),l=o*Math.cos(e),f=o*Math.sin(e),h=2*Math.asin(Math.sqrt(tt(r-t)+u*o*tt(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*c+t*l,u=e*s+t*f,o=e*i+t*a;return[Math.atan2(u,r)*Ra,Math.atan2(o,Math.sqrt(r*r+u*u))*Ra]}:function(){return[n*Ra,t*Ra]};return p.distance=h,p}function Mr(){function n(n,u){var i=Math.sin(u*=za),o=Math.cos(u),a=fa((n*=za)-t),c=Math.cos(a);Oc+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=r*i-e*o*c)*a),e*i+r*o*c),t=n,e=i,r=o}var t,e,r;Ic.point=function(u,i){t=u*za,e=Math.sin(i*=za),r=Math.cos(i),Ic.point=n},Ic.lineEnd=function(){Ic.point=Ic.lineEnd=v}}function _r(n,t){function e(t,e){var r=Math.cos(t),u=Math.cos(e),i=n(r*u);return[i*u*Math.sin(t),i*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),u=t(r),i=Math.sin(u),o=Math.cos(u);return[Math.atan2(n*i,r*o),Math.asin(r&&e*i/r)]},e}function br(n,t){function e(n,t){o>0?-La+Ta>t&&(t=-La+Ta):t>La-Ta&&(t=La-Ta);var e=o/Math.pow(u(t),i);return[e*Math.sin(i*n),o-e*Math.cos(i*n)]}var r=Math.cos(n),u=function(n){return Math.tan(Ca/4+n/2)},i=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(u(t)/u(n)),o=r*Math.pow(u(n),i)/i;return i?(e.invert=function(n,t){var e=o-t,r=B(i)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/i,2*Math.atan(Math.pow(o/r,1/i))-La]},e):Sr}function wr(n,t){function e(n,t){var e=i-t;return[e*Math.sin(u*n),i-e*Math.cos(u*n)]}var r=Math.cos(n),u=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),i=r/u+n;return fa(u)<Ta?ar:(e.invert=function(n,t){var e=i-t;return[Math.atan2(n,e)/u,i-B(u)*Math.sqrt(n*n+e*e)]},e)}function Sr(n,t){return[n,Math.log(Math.tan(Ca/4+t/2))]}function kr(n){var t,e=ur(n),r=e.scale,u=e.translate,i=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=u.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var o=i.apply(e,arguments);if(o===e){if(t=null==n){var a=Ca*r(),c=u();i([[c[0]-a,c[1]-a],[c[0]+a,c[1]+a]])}}else t&&(o=null);return o},e.clipExtent(null)}function Er(n,t){return[Math.log(Math.tan(Ca/4+t/2)),-n]}function Ar(n){return n[0]}function Cr(n){return n[1]}function Nr(n){for(var t=n.length,e=[0,1],r=2,u=2;t>u;u++){for(;r>1&&J(n[e[r-2]],n[e[r-1]],n[u])<=0;)--r;e[r++]=u}return e.slice(0,r)}function Lr(n,t){return n[0]-t[0]||n[1]-t[1]}function Tr(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function qr(n,t,e,r){var u=n[0],i=e[0],o=t[0]-u,a=r[0]-i,c=n[1],s=e[1],l=t[1]-c,f=r[1]-s,h=(a*(c-s)-f*(u-i))/(f*o-a*l);return[u+h*o,c+h*l]}function zr(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function Rr(){tu(this),this.edge=this.site=this.circle=null}function Dr(n){var t=ns.pop()||new Rr;return t.site=n,t}function Pr(n){$r(n),Gc.remove(n),ns.push(n),tu(n)}function Ur(n){var t=n.circle,e=t.x,r=t.cy,u={x:e,y:r},i=n.P,o=n.N,a=[n];Pr(n);for(var c=i;c.circle&&fa(e-c.circle.x)<Ta&&fa(r-c.circle.cy)<Ta;)i=c.P,a.unshift(c),Pr(c),c=i;a.unshift(c),$r(c);for(var s=o;s.circle&&fa(e-s.circle.x)<Ta&&fa(r-s.circle.cy)<Ta;)o=s.N,a.push(s),Pr(s),s=o;a.push(s),$r(s);var l,f=a.length;for(l=1;f>l;++l)s=a[l],c=a[l-1],Kr(s.edge,c.site,s.site,u);c=a[0],s=a[f-1],s.edge=Wr(c.site,s.site,null,u),Vr(c),Vr(s)}function jr(n){for(var t,e,r,u,i=n.x,o=n.y,a=Gc._;a;)if(r=Hr(a,o)-i,r>Ta)a=a.L;else{if(u=i-Fr(a,o),!(u>Ta)){r>-Ta?(t=a.P,e=a):u>-Ta?(t=a,e=a.N):t=e=a;break}if(!a.R){t=a;break}a=a.R}var c=Dr(n);if(Gc.insert(t,c),t||e){if(t===e)return $r(t),e=Dr(t.site),Gc.insert(c,e),c.edge=e.edge=Wr(t.site,c.site),Vr(t),Vr(e),void 0;if(!e)return c.edge=Wr(t.site,c.site),void 0;$r(t),$r(e);var s=t.site,l=s.x,f=s.y,h=n.x-l,g=n.y-f,p=e.site,v=p.x-l,d=p.y-f,m=2*(h*d-g*v),y=h*h+g*g,x=v*v+d*d,M={x:(d*y-g*x)/m+l,y:(h*x-v*y)/m+f};Kr(e.edge,s,p,M),c.edge=Wr(s,n,null,M),e.edge=Wr(n,p,null,M),Vr(t),Vr(e)}}function Hr(n,t){var e=n.site,r=e.x,u=e.y,i=u-t;if(!i)return r;var o=n.P;if(!o)return-1/0;e=o.site;var a=e.x,c=e.y,s=c-t;if(!s)return a;var l=a-r,f=1/i-1/s,h=l/s;return f?(-h+Math.sqrt(h*h-2*f*(l*l/(-2*s)-c+s/2+u-i/2)))/f+r:(r+a)/2}function Fr(n,t){var e=n.N;if(e)return Hr(e,t);var r=n.site;return r.y===t?r.x:1/0}function Or(n){this.site=n,this.edges=[]}function Ir(n){for(var t,e,r,u,i,o,a,c,s,l,f=n[0][0],h=n[1][0],g=n[0][1],p=n[1][1],v=Wc,d=v.length;d--;)if(i=v[d],i&&i.prepare())for(a=i.edges,c=a.length,o=0;c>o;)l=a[o].end(),r=l.x,u=l.y,s=a[++o%c].start(),t=s.x,e=s.y,(fa(r-t)>Ta||fa(u-e)>Ta)&&(a.splice(o,0,new Qr(Gr(i.site,l,fa(r-f)<Ta&&p-u>Ta?{x:f,y:fa(t-f)<Ta?e:p}:fa(u-p)<Ta&&h-r>Ta?{x:fa(e-p)<Ta?t:h,y:p}:fa(r-h)<Ta&&u-g>Ta?{x:h,y:fa(t-h)<Ta?e:g}:fa(u-g)<Ta&&r-f>Ta?{x:fa(e-g)<Ta?t:f,y:g}:null),i.site,null)),++c)}function Yr(n,t){return t.angle-n.angle}function Zr(){tu(this),this.x=this.y=this.arc=this.site=this.cy=null}function Vr(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,u=n.site,i=e.site;if(r!==i){var o=u.x,a=u.y,c=r.x-o,s=r.y-a,l=i.x-o,f=i.y-a,h=2*(c*f-s*l);if(!(h>=-qa)){var g=c*c+s*s,p=l*l+f*f,v=(f*g-s*p)/h,d=(c*p-l*g)/h,f=d+a,m=ts.pop()||new Zr;m.arc=n,m.site=u,m.x=v+o,m.y=f+Math.sqrt(v*v+d*d),m.cy=f,n.circle=m;for(var y=null,x=Qc._;x;)if(m.y<x.y||m.y===x.y&&m.x<=x.x){if(!x.L){y=x.P;break}x=x.L}else{if(!x.R){y=x;break}x=x.R}Qc.insert(y,m),y||(Kc=m)}}}}function $r(n){var t=n.circle;t&&(t.P||(Kc=t.N),Qc.remove(t),ts.push(t),tu(t),n.circle=null)}function Xr(n){for(var t,e=Jc,r=Fe(n[0][0],n[0][1],n[1][0],n[1][1]),u=e.length;u--;)t=e[u],(!Br(t,n)||!r(t)||fa(t.a.x-t.b.x)<Ta&&fa(t.a.y-t.b.y)<Ta)&&(t.a=t.b=null,e.splice(u,1))}function Br(n,t){var e=n.b;if(e)return!0;var r,u,i=n.a,o=t[0][0],a=t[1][0],c=t[0][1],s=t[1][1],l=n.l,f=n.r,h=l.x,g=l.y,p=f.x,v=f.y,d=(h+p)/2,m=(g+v)/2;if(v===g){if(o>d||d>=a)return;if(h>p){if(i){if(i.y>=s)return}else i={x:d,y:c};e={x:d,y:s}}else{if(i){if(i.y<c)return}else i={x:d,y:s};e={x:d,y:c}}}else if(r=(h-p)/(v-g),u=m-r*d,-1>r||r>1)if(h>p){if(i){if(i.y>=s)return}else i={x:(c-u)/r,y:c};e={x:(s-u)/r,y:s}}else{if(i){if(i.y<c)return}else i={x:(s-u)/r,y:s};e={x:(c-u)/r,y:c}}else if(v>g){if(i){if(i.x>=a)return}else i={x:o,y:r*o+u};e={x:a,y:r*a+u}}else{if(i){if(i.x<o)return}else i={x:a,y:r*a+u};e={x:o,y:r*o+u}}return n.a=i,n.b=e,!0}function Jr(n,t){this.l=n,this.r=t,this.a=this.b=null}function Wr(n,t,e,r){var u=new Jr(n,t);return Jc.push(u),e&&Kr(u,n,t,e),r&&Kr(u,t,n,r),Wc[n.i].edges.push(new Qr(u,n,t)),Wc[t.i].edges.push(new Qr(u,t,n)),u}function Gr(n,t,e){var r=new Jr(n,null);return r.a=t,r.b=e,Jc.push(r),r}function Kr(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function Qr(n,t,e){var r=n.a,u=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(u.x-r.x,r.y-u.y):Math.atan2(r.x-u.x,u.y-r.y)}function nu(){this._=null}function tu(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function eu(n,t){var e=t,r=t.R,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function ru(n,t){var e=t,r=t.L,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function uu(n){for(;n.L;)n=n.L;return n}function iu(n,t){var e,r,u,i=n.sort(ou).pop();for(Jc=[],Wc=new Array(n.length),Gc=new nu,Qc=new nu;;)if(u=Kc,i&&(!u||i.y<u.y||i.y===u.y&&i.x<u.x))(i.x!==e||i.y!==r)&&(Wc[i.i]=new Or(i),jr(i),e=i.x,r=i.y),i=n.pop();else{if(!u)break;Ur(u.arc)}t&&(Xr(t),Ir(t));var o={cells:Wc,edges:Jc};return Gc=Qc=Jc=Wc=null,o}function ou(n,t){return t.y-n.y||t.x-n.x}function au(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function cu(n){return n.x}function su(n){return n.y}function lu(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function fu(n,t,e,r,u,i){if(!n(t,e,r,u,i)){var o=.5*(e+u),a=.5*(r+i),c=t.nodes;c[0]&&fu(n,c[0],e,r,o,a),c[1]&&fu(n,c[1],o,r,u,a),c[2]&&fu(n,c[2],e,a,o,i),c[3]&&fu(n,c[3],o,a,u,i)}}function hu(n,t){n=Go.rgb(n),t=Go.rgb(t);var e=n.r,r=n.g,u=n.b,i=t.r-e,o=t.g-r,a=t.b-u;return function(n){return"#"+Mt(Math.round(e+i*n))+Mt(Math.round(r+o*n))+Mt(Math.round(u+a*n))}}function gu(n,t){var e,r={},u={};for(e in n)e in t?r[e]=du(n[e],t[e]):u[e]=n[e];for(e in t)e in n||(u[e]=t[e]);return function(n){for(e in r)u[e]=r[e](n);return u}}function pu(n,t){return t-=n=+n,function(e){return n+t*e}}function vu(n,t){var e,r,u,i=rs.lastIndex=us.lastIndex=0,o=-1,a=[],c=[];for(n+="",t+="";(e=rs.exec(n))&&(r=us.exec(t));)(u=r.index)>i&&(u=t.substring(i,u),a[o]?a[o]+=u:a[++o]=u),(e=e[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,c.push({i:o,x:pu(e,r)})),i=us.lastIndex;return i<t.length&&(u=t.substring(i),a[o]?a[o]+=u:a[++o]=u),a.length<2?c[0]?(t=c[0].x,function(n){return t(n)+""}):function(){return t}:(t=c.length,function(n){for(var e,r=0;t>r;++r)a[(e=c[r]).i]=e.x(n);return a.join("")})}function du(n,t){for(var e,r=Go.interpolators.length;--r>=0&&!(e=Go.interpolators[r](n,t)););return e}function mu(n,t){var e,r=[],u=[],i=n.length,o=t.length,a=Math.min(n.length,t.length);for(e=0;a>e;++e)r.push(du(n[e],t[e]));for(;i>e;++e)u[e]=n[e];for(;o>e;++e)u[e]=t[e];return function(n){for(e=0;a>e;++e)u[e]=r[e](n);return u}}function yu(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function xu(n){return function(t){return 1-n(1-t)}}function Mu(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function _u(n){return n*n}function bu(n){return n*n*n}function wu(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function Su(n){return function(t){return Math.pow(t,n)}}function ku(n){return 1-Math.cos(n*La)}function Eu(n){return Math.pow(2,10*(n-1))}function Au(n){return 1-Math.sqrt(1-n*n)}function Cu(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/Na*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*Na/t)}}function Nu(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function Lu(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Tu(n,t){n=Go.hcl(n),t=Go.hcl(t);var e=n.h,r=n.c,u=n.l,i=t.h-e,o=t.c-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.c:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return ct(e+i*n,r+o*n,u+a*n)+""}}function qu(n,t){n=Go.hsl(n),t=Go.hsl(t);var e=n.h,r=n.s,u=n.l,i=t.h-e,o=t.s-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.s:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return it(e+i*n,r+o*n,u+a*n)+""}}function zu(n,t){n=Go.lab(n),t=Go.lab(t);var e=n.l,r=n.a,u=n.b,i=t.l-e,o=t.a-r,a=t.b-u;return function(n){return ft(e+i*n,r+o*n,u+a*n)+""}}function Ru(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Du(n){var t=[n.a,n.b],e=[n.c,n.d],r=Uu(t),u=Pu(t,e),i=Uu(ju(e,t,-u))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,u*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Ra,this.translate=[n.e,n.f],this.scale=[r,i],this.skew=i?Math.atan2(u,i)*Ra:0}function Pu(n,t){return n[0]*t[0]+n[1]*t[1]}function Uu(n){var t=Math.sqrt(Pu(n,n));return t&&(n[0]/=t,n[1]/=t),t}function ju(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Hu(n,t){var e,r=[],u=[],i=Go.transform(n),o=Go.transform(t),a=i.translate,c=o.translate,s=i.rotate,l=o.rotate,f=i.skew,h=o.skew,g=i.scale,p=o.scale;return a[0]!=c[0]||a[1]!=c[1]?(r.push("translate(",null,",",null,")"),u.push({i:1,x:pu(a[0],c[0])},{i:3,x:pu(a[1],c[1])})):c[0]||c[1]?r.push("translate("+c+")"):r.push(""),s!=l?(s-l>180?l+=360:l-s>180&&(s+=360),u.push({i:r.push(r.pop()+"rotate(",null,")")-2,x:pu(s,l)})):l&&r.push(r.pop()+"rotate("+l+")"),f!=h?u.push({i:r.push(r.pop()+"skewX(",null,")")-2,x:pu(f,h)}):h&&r.push(r.pop()+"skewX("+h+")"),g[0]!=p[0]||g[1]!=p[1]?(e=r.push(r.pop()+"scale(",null,",",null,")"),u.push({i:e-4,x:pu(g[0],p[0])},{i:e-2,x:pu(g[1],p[1])})):(1!=p[0]||1!=p[1])&&r.push(r.pop()+"scale("+p+")"),e=u.length,function(n){for(var t,i=-1;++i<e;)r[(t=u[i]).i]=t.x(n);return r.join("")}}function Fu(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return(e-n)*t}}function Ou(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return Math.max(0,Math.min(1,(e-n)*t))}}function Iu(n){for(var t=n.source,e=n.target,r=Zu(t,e),u=[t];t!==r;)t=t.parent,u.push(t);for(var i=u.length;e!==r;)u.splice(i,0,e),e=e.parent;return u}function Yu(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Zu(n,t){if(n===t)return n;for(var e=Yu(n),r=Yu(t),u=e.pop(),i=r.pop(),o=null;u===i;)o=u,u=e.pop(),i=r.pop();return o}function Vu(n){n.fixed|=2}function $u(n){n.fixed&=-7}function Xu(n){n.fixed|=4,n.px=n.x,n.py=n.y}function Bu(n){n.fixed&=-5}function Ju(n,t,e){var r=0,u=0;if(n.charge=0,!n.leaf)for(var i,o=n.nodes,a=o.length,c=-1;++c<a;)i=o[c],null!=i&&(Ju(i,t,e),n.charge+=i.charge,r+=i.charge*i.cx,u+=i.charge*i.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var s=t*e[n.point.index];n.charge+=n.pointCharge=s,r+=s*n.point.x,u+=s*n.point.y}n.cx=r/n.charge,n.cy=u/n.charge}function Wu(n,t){return Go.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=ni,n}function Gu(n){return n.children}function Ku(n){return n.value}function Qu(n,t){return t.value-n.value}function ni(n){return Go.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function ti(n){return n.x}function ei(n){return n.y}function ri(n,t,e){n.y0=t,n.y=e}function ui(n){return Go.range(n.length)}function ii(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function oi(n){for(var t,e=1,r=0,u=n[0][1],i=n.length;i>e;++e)(t=n[e][1])>u&&(r=e,u=t);return r}function ai(n){return n.reduce(ci,0)}function ci(n,t){return n+t[1]}function si(n,t){return li(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function li(n,t){for(var e=-1,r=+n[0],u=(n[1]-r)/t,i=[];++e<=t;)i[e]=u*e+r;return i}function fi(n){return[Go.min(n),Go.max(n)]}function hi(n,t){return n.parent==t.parent?1:2}function gi(n){var t=n.children;return t&&t.length?t[0]:n._tree.thread}function pi(n){var t,e=n.children;return e&&(t=e.length)?e[t-1]:n._tree.thread}function vi(n,t){var e=n.children;if(e&&(u=e.length))for(var r,u,i=-1;++i<u;)t(r=vi(e[i],t),n)>0&&(n=r);return n}function di(n,t){return n.x-t.x}function mi(n,t){return t.x-n.x}function yi(n,t){return n.depth-t.depth}function xi(n,t){function e(n,r){var u=n.children;if(u&&(o=u.length))for(var i,o,a=null,c=-1;++c<o;)i=u[c],e(i,a),a=i;t(n,r)}e(n,null)}function Mi(n){for(var t,e=0,r=0,u=n.children,i=u.length;--i>=0;)t=u[i]._tree,t.prelim+=e,t.mod+=e,e+=t.shift+(r+=t.change)}function _i(n,t,e){n=n._tree,t=t._tree;var r=e/(t.number-n.number);n.change+=r,t.change-=r,t.shift+=e,t.prelim+=e,t.mod+=e}function bi(n,t,e){return n._tree.ancestor.parent==t.parent?n._tree.ancestor:e}function wi(n,t){return n.value-t.value}function Si(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function ki(n,t){n._pack_next=t,t._pack_prev=n}function Ei(n,t){var e=t.x-n.x,r=t.y-n.y,u=n.r+t.r;return.999*u*u>e*e+r*r}function Ai(n){function t(n){l=Math.min(n.x-n.r,l),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(s=e.length)){var e,r,u,i,o,a,c,s,l=1/0,f=-1/0,h=1/0,g=-1/0;if(e.forEach(Ci),r=e[0],r.x=-r.r,r.y=0,t(r),s>1&&(u=e[1],u.x=u.r,u.y=0,t(u),s>2))for(i=e[2],Ti(r,u,i),t(i),Si(r,i),r._pack_prev=i,Si(i,u),u=r._pack_next,o=3;s>o;o++){Ti(r,u,i=e[o]);var p=0,v=1,d=1;for(a=u._pack_next;a!==u;a=a._pack_next,v++)if(Ei(a,i)){p=1;break}if(1==p)for(c=r._pack_prev;c!==a._pack_prev&&!Ei(c,i);c=c._pack_prev,d++);p?(d>v||v==d&&u.r<r.r?ki(r,u=a):ki(r=c,u),o--):(Si(r,i),u=i,t(i))}var m=(l+f)/2,y=(h+g)/2,x=0;for(o=0;s>o;o++)i=e[o],i.x-=m,i.y-=y,x=Math.max(x,i.r+Math.sqrt(i.x*i.x+i.y*i.y));n.r=x,e.forEach(Ni)}}function Ci(n){n._pack_next=n._pack_prev=n}function Ni(n){delete n._pack_next,delete n._pack_prev}function Li(n,t,e,r){var u=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,u)for(var i=-1,o=u.length;++i<o;)Li(u[i],t,e,r)}function Ti(n,t,e){var r=n.r+e.r,u=t.x-n.x,i=t.y-n.y;if(r&&(u||i)){var o=t.r+e.r,a=u*u+i*i;o*=o,r*=r;var c=.5+(r-o)/(2*a),s=Math.sqrt(Math.max(0,2*o*(r+a)-(r-=a)*r-o*o))/(2*a);e.x=n.x+c*u+s*i,e.y=n.y+c*i-s*u}else e.x=n.x+r,e.y=n.y}function qi(n){return 1+Go.max(n,function(n){return n.y})}function zi(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Ri(n){var t=n.children;return t&&t.length?Ri(t[0]):n}function Di(n){var t,e=n.children;return e&&(t=e.length)?Di(e[t-1]):n}function Pi(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Ui(n,t){var e=n.x+t[3],r=n.y+t[0],u=n.dx-t[1]-t[3],i=n.dy-t[0]-t[2];return 0>u&&(e+=u/2,u=0),0>i&&(r+=i/2,i=0),{x:e,y:r,dx:u,dy:i}}function ji(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Hi(n){return n.rangeExtent?n.rangeExtent():ji(n.range())}function Fi(n,t,e,r){var u=e(n[0],n[1]),i=r(t[0],t[1]);return function(n){return i(u(n))}}function Oi(n,t){var e,r=0,u=n.length-1,i=n[r],o=n[u];return i>o&&(e=r,r=u,u=e,e=i,i=o,o=e),n[r]=t.floor(i),n[u]=t.ceil(o),n}function Ii(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:vs}function Yi(n,t,e,r){var u=[],i=[],o=0,a=Math.min(n.length,t.length)-1;for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<=a;)u.push(e(n[o-1],n[o])),i.push(r(t[o-1],t[o]));return function(t){var e=Go.bisect(n,t,1,a)-1;return i[e](u[e](t))}}function Zi(n,t,e,r){function u(){var u=Math.min(n.length,t.length)>2?Yi:Fi,c=r?Ou:Fu;return o=u(n,t,c,e),a=u(t,n,c,du),i}function i(n){return o(n)}var o,a;return i.invert=function(n){return a(n)},i.domain=function(t){return arguments.length?(n=t.map(Number),u()):n},i.range=function(n){return arguments.length?(t=n,u()):t},i.rangeRound=function(n){return i.range(n).interpolate(Ru)},i.clamp=function(n){return arguments.length?(r=n,u()):r},i.interpolate=function(n){return arguments.length?(e=n,u()):e},i.ticks=function(t){return Bi(n,t)},i.tickFormat=function(t,e){return Ji(n,t,e)},i.nice=function(t){return $i(n,t),u()},i.copy=function(){return Zi(n,t,e,r)},u()}function Vi(n,t){return Go.rebind(n,t,"range","rangeRound","interpolate","clamp")}function $i(n,t){return Oi(n,Ii(Xi(n,t)[2]))}function Xi(n,t){null==t&&(t=10);var e=ji(n),r=e[1]-e[0],u=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),i=t/r*u;return.15>=i?u*=10:.35>=i?u*=5:.75>=i&&(u*=2),e[0]=Math.ceil(e[0]/u)*u,e[1]=Math.floor(e[1]/u)*u+.5*u,e[2]=u,e}function Bi(n,t){return Go.range.apply(Go,Xi(n,t))}function Ji(n,t,e){var r=Xi(n,t);if(e){var u=rc.exec(e);if(u.shift(),"s"===u[8]){var i=Go.formatPrefix(Math.max(fa(r[0]),fa(r[1])));return u[7]||(u[7]="."+Wi(i.scale(r[2]))),u[8]="f",e=Go.format(u.join("")),function(n){return e(i.scale(n))+i.symbol}}u[7]||(u[7]="."+Gi(u[8],r)),e=u.join("")}else e=",."+Wi(r[2])+"f";return Go.format(e)}function Wi(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function Gi(n,t){var e=Wi(t[2]);return n in ds?Math.abs(e-Wi(Math.max(fa(t[0]),fa(t[1]))))+ +("e"!==n):e-2*("%"===n)}function Ki(n,t,e,r){function u(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function i(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function o(t){return n(u(t))}return o.invert=function(t){return i(n.invert(t))},o.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(u)),o):r},o.base=function(e){return arguments.length?(t=+e,n.domain(r.map(u)),o):t},o.nice=function(){var t=Oi(r.map(u),e?Math:ys);return n.domain(t),r=t.map(i),o},o.ticks=function(){var n=ji(r),o=[],a=n[0],c=n[1],s=Math.floor(u(a)),l=Math.ceil(u(c)),f=t%1?2:t;if(isFinite(l-s)){if(e){for(;l>s;s++)for(var h=1;f>h;h++)o.push(i(s)*h);o.push(i(s))}else for(o.push(i(s));s++<l;)for(var h=f-1;h>0;h--)o.push(i(s)*h);for(s=0;o[s]<a;s++);for(l=o.length;o[l-1]>c;l--);o=o.slice(s,l)}return o},o.tickFormat=function(n,t){if(!arguments.length)return ms;arguments.length<2?t=ms:"function"!=typeof t&&(t=Go.format(t));var r,a=Math.max(.1,n/o.ticks().length),c=e?(r=1e-12,Math.ceil):(r=-1e-12,Math.floor);return function(n){return n/i(c(u(n)+r))<=a?t(n):""}},o.copy=function(){return Ki(n.copy(),t,e,r)},Vi(o,n)}function Qi(n,t,e){function r(t){return n(u(t))}var u=no(t),i=no(1/t);return r.invert=function(t){return i(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(u)),r):e},r.ticks=function(n){return Bi(e,n)},r.tickFormat=function(n,t){return Ji(e,n,t)},r.nice=function(n){return r.domain($i(e,n))},r.exponent=function(o){return arguments.length?(u=no(t=o),i=no(1/t),n.domain(e.map(u)),r):t},r.copy=function(){return Qi(n.copy(),t,e)},Vi(r,n)}function no(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function to(n,t){function e(e){return i[((u.get(e)||("range"===t.t?u.set(e,n.push(e)):0/0))-1)%i.length]}function r(t,e){return Go.range(n.length).map(function(n){return t+e*n})}var u,i,a;return e.domain=function(r){if(!arguments.length)return n;n=[],u=new o;for(var i,a=-1,c=r.length;++a<c;)u.has(i=r[a])||u.set(i,n.push(i));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(i=n,a=0,t={t:"range",a:arguments},e):i},e.rangePoints=function(u,o){arguments.length<2&&(o=0);var c=u[0],s=u[1],l=(s-c)/(Math.max(1,n.length-1)+o);return i=r(n.length<2?(c+s)/2:c+l*o/2,l),a=0,t={t:"rangePoints",a:arguments},e},e.rangeBands=function(u,o,c){arguments.length<2&&(o=0),arguments.length<3&&(c=o);var s=u[1]<u[0],l=u[s-0],f=u[1-s],h=(f-l)/(n.length-o+2*c);return i=r(l+h*c,h),s&&i.reverse(),a=h*(1-o),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(u,o,c){arguments.length<2&&(o=0),arguments.length<3&&(c=o);var s=u[1]<u[0],l=u[s-0],f=u[1-s],h=Math.floor((f-l)/(n.length-o+2*c)),g=f-l-(n.length-o)*h;return i=r(l+Math.round(g/2),h),s&&i.reverse(),a=Math.round(h*(1-o)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return a},e.rangeExtent=function(){return ji(t.a[0])},e.copy=function(){return to(n,t)},e.domain(n)}function eo(e,r){function u(){var n=0,t=r.length;for(o=[];++n<t;)o[n-1]=Go.quantile(e,n/t);return i}function i(n){return isNaN(n=+n)?void 0:r[Go.bisect(o,n)]}var o;return i.domain=function(r){return arguments.length?(e=r.filter(t).sort(n),u()):e},i.range=function(n){return arguments.length?(r=n,u()):r},i.quantiles=function(){return o},i.invertExtent=function(n){return n=r.indexOf(n),0>n?[0/0,0/0]:[n>0?o[n-1]:e[0],n<o.length?o[n]:e[e.length-1]]},i.copy=function(){return eo(e,r)},u()}function ro(n,t,e){function r(t){return e[Math.max(0,Math.min(o,Math.floor(i*(t-n))))]}function u(){return i=e.length/(t-n),o=e.length-1,r}var i,o;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],u()):[n,t]},r.range=function(n){return arguments.length?(e=n,u()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?0/0:t/i+n,[t,t+1/i]},r.copy=function(){return ro(n,t,e)},u()}function uo(n,t){function e(e){return e>=e?t[Go.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return uo(n,t)},e}function io(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return Bi(n,t)},t.tickFormat=function(t,e){return Ji(n,t,e)},t.copy=function(){return io(n)},t}function oo(n){return n.innerRadius}function ao(n){return n.outerRadius}function co(n){return n.startAngle}function so(n){return n.endAngle}function lo(n){function t(t){function o(){s.push("M",i(n(l),a))}for(var c,s=[],l=[],f=-1,h=t.length,g=Et(e),p=Et(r);++f<h;)u.call(this,c=t[f],f)?l.push([+g.call(this,c,f),+p.call(this,c,f)]):l.length&&(o(),l=[]);return l.length&&o(),s.length?s.join(""):null}var e=Ar,r=Cr,u=Ae,i=fo,o=i.key,a=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(u=n,t):u},t.interpolate=function(n){return arguments.length?(o="function"==typeof n?i=n:(i=ks.get(n)||fo).key,t):o},t.tension=function(n){return arguments.length?(a=n,t):a},t}function fo(n){return n.join("L")}function ho(n){return fo(n)+"Z"}function go(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&u.push("H",r[0]),u.join("")}function po(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("V",(r=n[t])[1],"H",r[0]);return u.join("")}function vo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r=n[t])[0],"V",r[1]);return u.join("")}function mo(n,t){return n.length<4?fo(n):n[1]+Mo(n.slice(1,n.length-1),_o(n,t))}function yo(n,t){return n.length<3?fo(n):n[0]+Mo((n.push(n[0]),n),_o([n[n.length-2]].concat(n,[n[1]]),t))}function xo(n,t){return n.length<3?fo(n):n[0]+Mo(n,_o(n,t))}function Mo(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return fo(n);var e=n.length!=t.length,r="",u=n[0],i=n[1],o=t[0],a=o,c=1;if(e&&(r+="Q"+(i[0]-2*o[0]/3)+","+(i[1]-2*o[1]/3)+","+i[0]+","+i[1],u=n[1],c=2),t.length>1){a=t[1],i=n[c],c++,r+="C"+(u[0]+o[0])+","+(u[1]+o[1])+","+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1];for(var s=2;s<t.length;s++,c++)i=n[c],a=t[s],r+="S"+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1]}if(e){var l=n[c];r+="Q"+(i[0]+2*a[0]/3)+","+(i[1]+2*a[1]/3)+","+l[0]+","+l[1]}return r}function _o(n,t){for(var e,r=[],u=(1-t)/2,i=n[0],o=n[1],a=1,c=n.length;++a<c;)e=i,i=o,o=n[a],r.push([u*(o[0]-e[0]),u*(o[1]-e[1])]);return r}function bo(n){if(n.length<3)return fo(n);var t=1,e=n.length,r=n[0],u=r[0],i=r[1],o=[u,u,u,(r=n[1])[0]],a=[i,i,i,r[1]],c=[u,",",i,"L",Eo(Cs,o),",",Eo(Cs,a)];for(n.push(n[e-1]);++t<=e;)r=n[t],o.shift(),o.push(r[0]),a.shift(),a.push(r[1]),Ao(c,o,a);return n.pop(),c.push("L",r),c.join("")}function wo(n){if(n.length<4)return fo(n);for(var t,e=[],r=-1,u=n.length,i=[0],o=[0];++r<3;)t=n[r],i.push(t[0]),o.push(t[1]);for(e.push(Eo(Cs,i)+","+Eo(Cs,o)),--r;++r<u;)t=n[r],i.shift(),i.push(t[0]),o.shift(),o.push(t[1]),Ao(e,i,o);return e.join("")}function So(n){for(var t,e,r=-1,u=n.length,i=u+4,o=[],a=[];++r<4;)e=n[r%u],o.push(e[0]),a.push(e[1]);for(t=[Eo(Cs,o),",",Eo(Cs,a)],--r;++r<i;)e=n[r%u],o.shift(),o.push(e[0]),a.shift(),a.push(e[1]),Ao(t,o,a);return t.join("")}function ko(n,t){var e=n.length-1;if(e)for(var r,u,i=n[0][0],o=n[0][1],a=n[e][0]-i,c=n[e][1]-o,s=-1;++s<=e;)r=n[s],u=s/e,r[0]=t*r[0]+(1-t)*(i+u*a),r[1]=t*r[1]+(1-t)*(o+u*c);return bo(n)}function Eo(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function Ao(n,t,e){n.push("C",Eo(Es,t),",",Eo(Es,e),",",Eo(As,t),",",Eo(As,e),",",Eo(Cs,t),",",Eo(Cs,e))}function Co(n,t){return(t[1]-n[1])/(t[0]-n[0])}function No(n){for(var t=0,e=n.length-1,r=[],u=n[0],i=n[1],o=r[0]=Co(u,i);++t<e;)r[t]=(o+(o=Co(u=i,i=n[t+1])))/2;return r[t]=o,r}function Lo(n){for(var t,e,r,u,i=[],o=No(n),a=-1,c=n.length-1;++a<c;)t=Co(n[a],n[a+1]),fa(t)<Ta?o[a]=o[a+1]=0:(e=o[a]/t,r=o[a+1]/t,u=e*e+r*r,u>9&&(u=3*t/Math.sqrt(u),o[a]=u*e,o[a+1]=u*r));for(a=-1;++a<=c;)u=(n[Math.min(c,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a])),i.push([u||0,o[a]*u||0]);return i}function To(n){return n.length<3?fo(n):n[0]+Mo(n,Lo(n))}function qo(n){for(var t,e,r,u=-1,i=n.length;++u<i;)t=n[u],e=t[0],r=t[1]+ws,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function zo(n){function t(t){function c(){v.push("M",a(n(m),f),l,s(n(d.reverse()),f),"Z")}for(var h,g,p,v=[],d=[],m=[],y=-1,x=t.length,M=Et(e),_=Et(u),b=e===r?function(){return g}:Et(r),w=u===i?function(){return p}:Et(i);++y<x;)o.call(this,h=t[y],y)?(d.push([g=+M.call(this,h,y),p=+_.call(this,h,y)]),m.push([+b.call(this,h,y),+w.call(this,h,y)])):d.length&&(c(),d=[],m=[]);return d.length&&c(),v.length?v.join(""):null}var e=Ar,r=Ar,u=0,i=Cr,o=Ae,a=fo,c=a.key,s=a,l="L",f=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(u=i=n,t):i},t.y0=function(n){return arguments.length?(u=n,t):u},t.y1=function(n){return arguments.length?(i=n,t):i},t.defined=function(n){return arguments.length?(o=n,t):o},t.interpolate=function(n){return arguments.length?(c="function"==typeof n?a=n:(a=ks.get(n)||fo).key,s=a.reverse||a,l=a.closed?"M":"L",t):c},t.tension=function(n){return arguments.length?(f=n,t):f},t}function Ro(n){return n.radius}function Do(n){return[n.x,n.y]}function Po(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]+ws;return[e*Math.cos(r),e*Math.sin(r)]}}function Uo(){return 64}function jo(){return"circle"}function Ho(n){var t=Math.sqrt(n/Ca);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Fo(n,t){return da(n,Rs),n.id=t,n}function Oo(n,t,e,r){var u=n.id;return P(n,"function"==typeof e?function(n,i,o){n.__transition__[u].tween.set(t,r(e.call(n,n.__data__,i,o)))}:(e=r(e),function(n){n.__transition__[u].tween.set(t,e)}))}function Io(n){return null==n&&(n=""),function(){this.textContent=n}}function Yo(n,t,e,r){var u=n.__transition__||(n.__transition__={active:0,count:0}),i=u[e];if(!i){var a=r.time;i=u[e]={tween:new o,time:a,ease:r.ease,delay:r.delay,duration:r.duration},++u.count,Go.timer(function(r){function o(r){return u.active>e?s():(u.active=e,i.event&&i.event.start.call(n,l,t),i.tween.forEach(function(e,r){(r=r.call(n,l,t))&&v.push(r)}),Go.timer(function(){return p.c=c(r||1)?Ae:c,1},0,a),void 0)}function c(r){if(u.active!==e)return s();for(var o=r/g,a=f(o),c=v.length;c>0;)v[--c].call(n,a);return o>=1?(i.event&&i.event.end.call(n,l,t),s()):void 0}function s(){return--u.count?delete u[e]:delete n.__transition__,1}var l=n.__data__,f=i.ease,h=i.delay,g=i.duration,p=nc,v=[];return p.t=h+a,r>=h?o(r-h):(p.c=o,void 0)},0,a)}}function Zo(n,t){n.attr("transform",function(n){return"translate("+t(n)+",0)"})}function Vo(n,t){n.attr("transform",function(n){return"translate(0,"+t(n)+")"})}function $o(n){return n.toISOString()}function Xo(n,t,e){function r(t){return n(t)
}function u(n,e){var r=n[1]-n[0],u=r/e,i=Go.bisect(Ys,u);return i==Ys.length?[t.year,Xi(n.map(function(n){return n/31536e6}),e)[2]]:i?t[u/Ys[i-1]<Ys[i]/u?i-1:i]:[$s,Xi(n,e)[2]]}return r.invert=function(t){return Bo(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(Bo)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,Bo(+e+1),t).length}var i=r.domain(),o=ji(i),a=null==n?u(o,10):"number"==typeof n&&u(o,n);return a&&(n=a[0],t=a[1]),r.domain(Oi(i,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=Bo(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=Bo(+t+1);return t}}:n))},r.ticks=function(n,t){var e=ji(r.domain()),i=null==n?u(e,10):"number"==typeof n?u(e,n):!n.range&&[{range:n},t];return i&&(n=i[0],t=i[1]),n.range(e[0],Bo(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return Xo(n.copy(),t,e)},Vi(r,n)}function Bo(n){return new Date(n)}function Jo(n){return JSON.parse(n.responseText)}function Wo(n){var t=na.createRange();return t.selectNode(na.body),t.createContextualFragment(n.responseText)}var Go={version:"3.4.6"};Date.now||(Date.now=function(){return+new Date});var Ko=[].slice,Qo=function(n){return Ko.call(n)},na=document,ta=na.documentElement,ea=window;try{Qo(ta.childNodes)[0].nodeType}catch(ra){Qo=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}try{na.createElement("div").style.setProperty("opacity",0,"")}catch(ua){var ia=ea.Element.prototype,oa=ia.setAttribute,aa=ia.setAttributeNS,ca=ea.CSSStyleDeclaration.prototype,sa=ca.setProperty;ia.setAttribute=function(n,t){oa.call(this,n,t+"")},ia.setAttributeNS=function(n,t,e){aa.call(this,n,t,e+"")},ca.setProperty=function(n,t,e){sa.call(this,n,t+"",e)}}Go.ascending=n,Go.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:0/0},Go.min=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(e=n[u])&&e>=e);)e=void 0;for(;++u<i;)null!=(r=n[u])&&e>r&&(e=r)}else{for(;++u<i&&!(null!=(e=t.call(n,n[u],u))&&e>=e);)e=void 0;for(;++u<i;)null!=(r=t.call(n,n[u],u))&&e>r&&(e=r)}return e},Go.max=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(e=n[u])&&e>=e);)e=void 0;for(;++u<i;)null!=(r=n[u])&&r>e&&(e=r)}else{for(;++u<i&&!(null!=(e=t.call(n,n[u],u))&&e>=e);)e=void 0;for(;++u<i;)null!=(r=t.call(n,n[u],u))&&r>e&&(e=r)}return e},Go.extent=function(n,t){var e,r,u,i=-1,o=n.length;if(1===arguments.length){for(;++i<o&&!(null!=(e=u=n[i])&&e>=e);)e=u=void 0;for(;++i<o;)null!=(r=n[i])&&(e>r&&(e=r),r>u&&(u=r))}else{for(;++i<o&&!(null!=(e=u=t.call(n,n[i],i))&&e>=e);)e=void 0;for(;++i<o;)null!=(r=t.call(n,n[i],i))&&(e>r&&(e=r),r>u&&(u=r))}return[e,u]},Go.sum=function(n,t){var e,r=0,u=n.length,i=-1;if(1===arguments.length)for(;++i<u;)isNaN(e=+n[i])||(r+=e);else for(;++i<u;)isNaN(e=+t.call(n,n[i],i))||(r+=e);return r},Go.mean=function(n,e){var r,u=0,i=n.length,o=-1,a=i;if(1===arguments.length)for(;++o<i;)t(r=n[o])?u+=r:--a;else for(;++o<i;)t(r=e.call(n,n[o],o))?u+=r:--a;return a?u/a:void 0},Go.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),u=+n[r-1],i=e-r;return i?u+i*(n[r]-u):u},Go.median=function(e,r){return arguments.length>1&&(e=e.map(r)),e=e.filter(t),e.length?Go.quantile(e.sort(n),.5):void 0};var la=e(n);Go.bisectLeft=la.left,Go.bisect=Go.bisectRight=la.right,Go.bisector=function(t){return e(1===t.length?function(e,r){return n(t(e),r)}:t)},Go.shuffle=function(n){for(var t,e,r=n.length;r;)e=0|Math.random()*r--,t=n[r],n[r]=n[e],n[e]=t;return n},Go.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},Go.pairs=function(n){for(var t,e=0,r=n.length-1,u=n[0],i=new Array(0>r?0:r);r>e;)i[e]=[t=u,u=n[++e]];return i},Go.zip=function(){if(!(u=arguments.length))return[];for(var n=-1,t=Go.min(arguments,r),e=new Array(t);++n<t;)for(var u,i=-1,o=e[n]=new Array(u);++i<u;)o[i]=arguments[i][n];return e},Go.transpose=function(n){return Go.zip.apply(Go,n)},Go.keys=function(n){var t=[];for(var e in n)t.push(e);return t},Go.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},Go.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},Go.merge=function(n){for(var t,e,r,u=n.length,i=-1,o=0;++i<u;)o+=n[i].length;for(e=new Array(o);--u>=0;)for(r=n[u],t=r.length;--t>=0;)e[--o]=r[t];return e};var fa=Math.abs;Go.range=function(n,t,e){if(arguments.length<3&&(e=1,arguments.length<2&&(t=n,n=0)),1/0===(t-n)/e)throw new Error("infinite range");var r,i=[],o=u(fa(e)),a=-1;if(n*=o,t*=o,e*=o,0>e)for(;(r=n+e*++a)>t;)i.push(r/o);else for(;(r=n+e*++a)<t;)i.push(r/o);return i},Go.map=function(n){var t=new o;if(n instanceof o)n.forEach(function(n,e){t.set(n,e)});else for(var e in n)t.set(e,n[e]);return t},i(o,{has:a,get:function(n){return this[ha+n]},set:function(n,t){return this[ha+n]=t},remove:c,keys:s,values:function(){var n=[];return this.forEach(function(t,e){n.push(e)}),n},entries:function(){var n=[];return this.forEach(function(t,e){n.push({key:t,value:e})}),n},size:l,empty:f,forEach:function(n){for(var t in this)t.charCodeAt(0)===ga&&n.call(this,t.substring(1),this[t])}});var ha="\x00",ga=ha.charCodeAt(0);Go.nest=function(){function n(t,a,c){if(c>=i.length)return r?r.call(u,a):e?a.sort(e):a;for(var s,l,f,h,g=-1,p=a.length,v=i[c++],d=new o;++g<p;)(h=d.get(s=v(l=a[g])))?h.push(l):d.set(s,[l]);return t?(l=t(),f=function(e,r){l.set(e,n(t,r,c))}):(l={},f=function(e,r){l[e]=n(t,r,c)}),d.forEach(f),l}function t(n,e){if(e>=i.length)return n;var r=[],u=a[e++];return n.forEach(function(n,u){r.push({key:n,values:t(u,e)})}),u?r.sort(function(n,t){return u(n.key,t.key)}):r}var e,r,u={},i=[],a=[];return u.map=function(t,e){return n(e,t,0)},u.entries=function(e){return t(n(Go.map,e,0),0)},u.key=function(n){return i.push(n),u},u.sortKeys=function(n){return a[i.length-1]=n,u},u.sortValues=function(n){return e=n,u},u.rollup=function(n){return r=n,u},u},Go.set=function(n){var t=new h;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},i(h,{has:a,add:function(n){return this[ha+n]=!0,n},remove:function(n){return n=ha+n,n in this&&delete this[n]},values:s,size:l,empty:f,forEach:function(n){for(var t in this)t.charCodeAt(0)===ga&&n.call(this,t.substring(1))}}),Go.behavior={},Go.rebind=function(n,t){for(var e,r=1,u=arguments.length;++r<u;)n[e=arguments[r]]=g(n,t,t[e]);return n};var pa=["webkit","ms","moz","Moz","o","O"];Go.dispatch=function(){for(var n=new d,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=m(n);return n},d.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.substring(e+1),n=n.substring(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},Go.event=null,Go.requote=function(n){return n.replace(va,"\\$&")};var va=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,da={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},ma=function(n,t){return t.querySelector(n)},ya=function(n,t){return t.querySelectorAll(n)},xa=ta[p(ta,"matchesSelector")],Ma=function(n,t){return xa.call(n,t)};"function"==typeof Sizzle&&(ma=function(n,t){return Sizzle(n,t)[0]||null},ya=Sizzle,Ma=Sizzle.matchesSelector),Go.selection=function(){return Sa};var _a=Go.selection.prototype=[];_a.select=function(n){var t,e,r,u,i=[];n=b(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]),t.parentNode=(r=this[o]).parentNode;for(var c=-1,s=r.length;++c<s;)(u=r[c])?(t.push(e=n.call(u,u.__data__,c,o)),e&&"__data__"in u&&(e.__data__=u.__data__)):t.push(null)}return _(i)},_a.selectAll=function(n){var t,e,r=[];n=w(n);for(var u=-1,i=this.length;++u<i;)for(var o=this[u],a=-1,c=o.length;++a<c;)(e=o[a])&&(r.push(t=Qo(n.call(e,e.__data__,a,u))),t.parentNode=e);return _(r)};var ba={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};Go.ns={prefix:ba,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&(e=n.substring(0,t),n=n.substring(t+1)),ba.hasOwnProperty(e)?{space:ba[e],local:n}:n}},_a.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=Go.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(S(t,n[t]));return this}return this.each(S(n,t))},_a.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=A(n)).length,u=-1;if(t=e.classList){for(;++u<r;)if(!t.contains(n[u]))return!1}else for(t=e.getAttribute("class");++u<r;)if(!E(n[u]).test(t))return!1;return!0}for(t in n)this.each(C(t,n[t]));return this}return this.each(C(n,t))},_a.style=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t="");for(e in n)this.each(L(e,n[e],t));return this}if(2>r)return ea.getComputedStyle(this.node(),null).getPropertyValue(n);e=""}return this.each(L(n,t,e))},_a.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(T(t,n[t]));return this}return this.each(T(n,t))},_a.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},_a.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},_a.append=function(n){return n=q(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},_a.insert=function(n,t){return n=q(n),t=b(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},_a.remove=function(){return this.each(function(){var n=this.parentNode;n&&n.removeChild(this)})},_a.data=function(n,t){function e(n,e){var r,u,i,a=n.length,f=e.length,h=Math.min(a,f),g=new Array(f),p=new Array(f),v=new Array(a);if(t){var d,m=new o,y=new o,x=[];for(r=-1;++r<a;)d=t.call(u=n[r],u.__data__,r),m.has(d)?v[r]=u:m.set(d,u),x.push(d);for(r=-1;++r<f;)d=t.call(e,i=e[r],r),(u=m.get(d))?(g[r]=u,u.__data__=i):y.has(d)||(p[r]=z(i)),y.set(d,i),m.remove(d);for(r=-1;++r<a;)m.has(x[r])&&(v[r]=n[r])}else{for(r=-1;++r<h;)u=n[r],i=e[r],u?(u.__data__=i,g[r]=u):p[r]=z(i);for(;f>r;++r)p[r]=z(e[r]);for(;a>r;++r)v[r]=n[r]}p.update=g,p.parentNode=g.parentNode=v.parentNode=n.parentNode,c.push(p),s.push(g),l.push(v)}var r,u,i=-1,a=this.length;if(!arguments.length){for(n=new Array(a=(r=this[0]).length);++i<a;)(u=r[i])&&(n[i]=u.__data__);return n}var c=U([]),s=_([]),l=_([]);if("function"==typeof n)for(;++i<a;)e(r=this[i],n.call(r,r.parentNode.__data__,i));else for(;++i<a;)e(r=this[i],n);return s.enter=function(){return c},s.exit=function(){return l},s},_a.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},_a.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=R(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]),t.parentNode=(e=this[i]).parentNode;for(var a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return _(u)},_a.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],u=r.length-1,i=r[u];--u>=0;)(e=r[u])&&(i&&i!==e.nextSibling&&i.parentNode.insertBefore(e,i),i=e);return this},_a.sort=function(n){n=D.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},_a.each=function(n){return P(this,function(t,e,r){n.call(t,t.__data__,e,r)})},_a.call=function(n){var t=Qo(arguments);return n.apply(t[0]=this,t),this},_a.empty=function(){return!this.node()},_a.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,u=e.length;u>r;r++){var i=e[r];if(i)return i}return null},_a.size=function(){var n=0;return this.each(function(){++n}),n};var wa=[];Go.selection.enter=U,Go.selection.enter.prototype=wa,wa.append=_a.append,wa.empty=_a.empty,wa.node=_a.node,wa.call=_a.call,wa.size=_a.size,wa.select=function(n){for(var t,e,r,u,i,o=[],a=-1,c=this.length;++a<c;){r=(u=this[a]).update,o.push(t=[]),t.parentNode=u.parentNode;for(var s=-1,l=u.length;++s<l;)(i=u[s])?(t.push(r[s]=e=n.call(u.parentNode,i.__data__,s,a)),e.__data__=i.__data__):t.push(null)}return _(o)},wa.insert=function(n,t){return arguments.length<2&&(t=j(this)),_a.insert.call(this,n,t)},_a.transition=function(){for(var n,t,e=Ls||++Ds,r=[],u=Ts||{time:Date.now(),ease:wu,delay:0,duration:250},i=-1,o=this.length;++i<o;){r.push(n=[]);for(var a=this[i],c=-1,s=a.length;++c<s;)(t=a[c])&&Yo(t,c,e,u),n.push(t)}return Fo(r,e)},_a.interrupt=function(){return this.each(H)},Go.select=function(n){var t=["string"==typeof n?ma(n,na):n];return t.parentNode=ta,_([t])},Go.selectAll=function(n){var t=Qo("string"==typeof n?ya(n,na):n);return t.parentNode=ta,_([t])};var Sa=Go.select(ta);_a.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(F(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(F(n,t,e))};var ka=Go.map({mouseenter:"mouseover",mouseleave:"mouseout"});ka.forEach(function(n){"on"+n in na&&ka.remove(n)});var Ea="onselectstart"in na?null:p(ta.style,"userSelect"),Aa=0;Go.mouse=function(n){return Z(n,x())},Go.touches=function(n,t){return arguments.length<2&&(t=x().touches),t?Qo(t).map(function(t){var e=Z(n,t);return e.identifier=t.identifier,e}):[]},Go.behavior.drag=function(){function n(){this.on("mousedown.drag",u).on("touchstart.drag",i)}function t(n,t,u,i,o){return function(){function a(){var n,e,r=t(h,v);r&&(n=r[0]-x[0],e=r[1]-x[1],p|=n|e,x=r,g({type:"drag",x:r[0]+s[0],y:r[1]+s[1],dx:n,dy:e}))}function c(){t(h,v)&&(m.on(i+d,null).on(o+d,null),y(p&&Go.event.target===f),g({type:"dragend"}))}var s,l=this,f=Go.event.target,h=l.parentNode,g=e.of(l,arguments),p=0,v=n(),d=".drag"+(null==v?"":"-"+v),m=Go.select(u()).on(i+d,a).on(o+d,c),y=Y(),x=t(h,v);r?(s=r.apply(l,arguments),s=[s.x-x[0],s.y-x[1]]):s=[0,0],g({type:"dragstart"})}}var e=M(n,"drag","dragstart","dragend"),r=null,u=t(v,Go.mouse,X,"mousemove","mouseup"),i=t(V,Go.touch,$,"touchmove","touchend");return n.origin=function(t){return arguments.length?(r=t,n):r},Go.rebind(n,e,"on")};var Ca=Math.PI,Na=2*Ca,La=Ca/2,Ta=1e-6,qa=Ta*Ta,za=Ca/180,Ra=180/Ca,Da=Math.SQRT2,Pa=2,Ua=4;Go.interpolateZoom=function(n,t){function e(n){var t=n*y;if(m){var e=Q(v),o=i/(Pa*h)*(e*nt(Da*t+v)-K(v));return[r+o*s,u+o*l,i*e/Q(Da*t+v)]}return[r+n*s,u+n*l,i*Math.exp(Da*t)]}var r=n[0],u=n[1],i=n[2],o=t[0],a=t[1],c=t[2],s=o-r,l=a-u,f=s*s+l*l,h=Math.sqrt(f),g=(c*c-i*i+Ua*f)/(2*i*Pa*h),p=(c*c-i*i-Ua*f)/(2*c*Pa*h),v=Math.log(Math.sqrt(g*g+1)-g),d=Math.log(Math.sqrt(p*p+1)-p),m=d-v,y=(m||Math.log(c/i))/Da;return e.duration=1e3*y,e},Go.behavior.zoom=function(){function n(n){n.on(A,s).on(Fa+".zoom",f).on(C,h).on("dblclick.zoom",g).on(L,l)}function t(n){return[(n[0]-S.x)/S.k,(n[1]-S.y)/S.k]}function e(n){return[n[0]*S.k+S.x,n[1]*S.k+S.y]}function r(n){S.k=Math.max(E[0],Math.min(E[1],n))}function u(n,t){t=e(t),S.x+=n[0]-t[0],S.y+=n[1]-t[1]}function i(){_&&_.domain(x.range().map(function(n){return(n-S.x)/S.k}).map(x.invert)),w&&w.domain(b.range().map(function(n){return(n-S.y)/S.k}).map(b.invert))}function o(n){n({type:"zoomstart"})}function a(n){i(),n({type:"zoom",scale:S.k,translate:[S.x,S.y]})}function c(n){n({type:"zoomend"})}function s(){function n(){l=1,u(Go.mouse(r),g),a(s)}function e(){f.on(C,ea===r?h:null).on(N,null),p(l&&Go.event.target===i),c(s)}var r=this,i=Go.event.target,s=T.of(r,arguments),l=0,f=Go.select(ea).on(C,n).on(N,e),g=t(Go.mouse(r)),p=Y();H.call(r),o(s)}function l(){function n(){var n=Go.touches(g);return h=S.k,n.forEach(function(n){n.identifier in v&&(v[n.identifier]=t(n))}),n}function e(){for(var t=Go.event.changedTouches,e=0,i=t.length;i>e;++e)v[t[e].identifier]=null;var o=n(),c=Date.now();if(1===o.length){if(500>c-m){var s=o[0],l=v[s.identifier];r(2*S.k),u(s,l),y(),a(p)}m=c}else if(o.length>1){var s=o[0],f=o[1],h=s[0]-f[0],g=s[1]-f[1];d=h*h+g*g}}function i(){for(var n,t,e,i,o=Go.touches(g),c=0,s=o.length;s>c;++c,i=null)if(e=o[c],i=v[e.identifier]){if(t)break;n=e,t=i}if(i){var l=(l=e[0]-n[0])*l+(l=e[1]-n[1])*l,f=d&&Math.sqrt(l/d);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+i[0])/2,(t[1]+i[1])/2],r(f*h)}m=null,u(n,t),a(p)}function f(){if(Go.event.touches.length){for(var t=Go.event.changedTouches,e=0,r=t.length;r>e;++e)delete v[t[e].identifier];for(var u in v)return void n()}b.on(x,null),w.on(A,s).on(L,l),k(),c(p)}var h,g=this,p=T.of(g,arguments),v={},d=0,x=".zoom-"+Go.event.changedTouches[0].identifier,M="touchmove"+x,_="touchend"+x,b=Go.select(Go.event.target).on(M,i).on(_,f),w=Go.select(g).on(A,null).on(L,e),k=Y();H.call(g),e(),o(p)}function f(){var n=T.of(this,arguments);d?clearTimeout(d):(H.call(this),o(n)),d=setTimeout(function(){d=null,c(n)},50),y();var e=v||Go.mouse(this);p||(p=t(e)),r(Math.pow(2,.002*ja())*S.k),u(e,p),a(n)}function h(){p=null}function g(){var n=T.of(this,arguments),e=Go.mouse(this),i=t(e),s=Math.log(S.k)/Math.LN2;o(n),r(Math.pow(2,Go.event.shiftKey?Math.ceil(s)-1:Math.floor(s)+1)),u(e,i),a(n),c(n)}var p,v,d,m,x,_,b,w,S={x:0,y:0,k:1},k=[960,500],E=Ha,A="mousedown.zoom",C="mousemove.zoom",N="mouseup.zoom",L="touchstart.zoom",T=M(n,"zoomstart","zoom","zoomend");return n.event=function(n){n.each(function(){var n=T.of(this,arguments),t=S;Ls?Go.select(this).transition().each("start.zoom",function(){S=this.__chart__||{x:0,y:0,k:1},o(n)}).tween("zoom:zoom",function(){var e=k[0],r=k[1],u=e/2,i=r/2,o=Go.interpolateZoom([(u-S.x)/S.k,(i-S.y)/S.k,e/S.k],[(u-t.x)/t.k,(i-t.y)/t.k,e/t.k]);return function(t){var r=o(t),c=e/r[2];this.__chart__=S={x:u-r[0]*c,y:i-r[1]*c,k:c},a(n)}}).each("end.zoom",function(){c(n)}):(this.__chart__=S,o(n),a(n),c(n))})},n.translate=function(t){return arguments.length?(S={x:+t[0],y:+t[1],k:S.k},i(),n):[S.x,S.y]},n.scale=function(t){return arguments.length?(S={x:S.x,y:S.y,k:+t},i(),n):S.k},n.scaleExtent=function(t){return arguments.length?(E=null==t?Ha:[+t[0],+t[1]],n):E},n.center=function(t){return arguments.length?(v=t&&[+t[0],+t[1]],n):v},n.size=function(t){return arguments.length?(k=t&&[+t[0],+t[1]],n):k},n.x=function(t){return arguments.length?(_=t,x=t.copy(),S={x:0,y:0,k:1},n):_},n.y=function(t){return arguments.length?(w=t,b=t.copy(),S={x:0,y:0,k:1},n):w},Go.rebind(n,T,"on")};var ja,Ha=[0,1/0],Fa="onwheel"in na?(ja=function(){return-Go.event.deltaY*(Go.event.deltaMode?120:1)},"wheel"):"onmousewheel"in na?(ja=function(){return Go.event.wheelDelta},"mousewheel"):(ja=function(){return-Go.event.detail},"MozMousePixelScroll");et.prototype.toString=function(){return this.rgb()+""},Go.hsl=function(n,t,e){return 1===arguments.length?n instanceof ut?rt(n.h,n.s,n.l):_t(""+n,bt,rt):rt(+n,+t,+e)};var Oa=ut.prototype=new et;Oa.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),rt(this.h,this.s,this.l/n)},Oa.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),rt(this.h,this.s,n*this.l)},Oa.rgb=function(){return it(this.h,this.s,this.l)},Go.hcl=function(n,t,e){return 1===arguments.length?n instanceof at?ot(n.h,n.c,n.l):n instanceof lt?ht(n.l,n.a,n.b):ht((n=wt((n=Go.rgb(n)).r,n.g,n.b)).l,n.a,n.b):ot(+n,+t,+e)};var Ia=at.prototype=new et;Ia.brighter=function(n){return ot(this.h,this.c,Math.min(100,this.l+Ya*(arguments.length?n:1)))},Ia.darker=function(n){return ot(this.h,this.c,Math.max(0,this.l-Ya*(arguments.length?n:1)))},Ia.rgb=function(){return ct(this.h,this.c,this.l).rgb()},Go.lab=function(n,t,e){return 1===arguments.length?n instanceof lt?st(n.l,n.a,n.b):n instanceof at?ct(n.l,n.c,n.h):wt((n=Go.rgb(n)).r,n.g,n.b):st(+n,+t,+e)};var Ya=18,Za=.95047,Va=1,$a=1.08883,Xa=lt.prototype=new et;Xa.brighter=function(n){return st(Math.min(100,this.l+Ya*(arguments.length?n:1)),this.a,this.b)},Xa.darker=function(n){return st(Math.max(0,this.l-Ya*(arguments.length?n:1)),this.a,this.b)},Xa.rgb=function(){return ft(this.l,this.a,this.b)},Go.rgb=function(n,t,e){return 1===arguments.length?n instanceof xt?yt(n.r,n.g,n.b):_t(""+n,yt,it):yt(~~n,~~t,~~e)};var Ba=xt.prototype=new et;Ba.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,u=30;return t||e||r?(t&&u>t&&(t=u),e&&u>e&&(e=u),r&&u>r&&(r=u),yt(Math.min(255,~~(t/n)),Math.min(255,~~(e/n)),Math.min(255,~~(r/n)))):yt(u,u,u)},Ba.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),yt(~~(n*this.r),~~(n*this.g),~~(n*this.b))},Ba.hsl=function(){return bt(this.r,this.g,this.b)},Ba.toString=function(){return"#"+Mt(this.r)+Mt(this.g)+Mt(this.b)};var Ja=Go.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});Ja.forEach(function(n,t){Ja.set(n,dt(t))}),Go.functor=Et,Go.xhr=Ct(At),Go.dsv=function(n,t){function e(n,e,i){arguments.length<3&&(i=e,e=null);var o=Nt(n,t,null==e?r:u(e),i);return o.row=function(n){return arguments.length?o.response(null==(e=n)?r:u(n)):e},o}function r(n){return e.parse(n.responseText)}function u(n){return function(t){return e.parse(t.responseText,n)}}function i(t){return t.map(o).join(n)}function o(n){return a.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var a=new RegExp('["'+n+"\n]"),c=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var u=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(u(n),e)}:u})},e.parseRows=function(n,t){function e(){if(l>=s)return o;if(u)return u=!1,i;var t=l;if(34===n.charCodeAt(t)){for(var e=t;e++<s;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}l=e+2;var r=n.charCodeAt(e+1);return 13===r?(u=!0,10===n.charCodeAt(e+2)&&++l):10===r&&(u=!0),n.substring(t+1,e).replace(/""/g,'"')}for(;s>l;){var r=n.charCodeAt(l++),a=1;if(10===r)u=!0;else if(13===r)u=!0,10===n.charCodeAt(l)&&(++l,++a);else if(r!==c)continue;return n.substring(t,l-a)}return n.substring(t)}for(var r,u,i={},o={},a=[],s=n.length,l=0,f=0;(r=e())!==o;){for(var h=[];r!==i&&r!==o;)h.push(r),r=e();(!t||(h=t(h,f++)))&&a.push(h)}return a},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new h,u=[];return t.forEach(function(n){for(var t in n)r.has(t)||u.push(r.add(t))}),[u.map(o).join(n)].concat(t.map(function(t){return u.map(function(n){return o(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(i).join("\n")},e},Go.csv=Go.dsv(",","text/csv"),Go.tsv=Go.dsv("	","text/tab-separated-values"),Go.touch=function(n,t,e){if(arguments.length<3&&(e=t,t=x().changedTouches),t)for(var r,u=0,i=t.length;i>u;++u)if((r=t[u]).identifier===e)return Z(n,r)};var Wa,Ga,Ka,Qa,nc,tc=ea[p(ea,"requestAnimationFrame")]||function(n){setTimeout(n,17)};Go.timer=function(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var u=e+t,i={c:n,t:u,f:!1,n:null};Ga?Ga.n=i:Wa=i,Ga=i,Ka||(Qa=clearTimeout(Qa),Ka=1,tc(Tt))},Go.timer.flush=function(){qt(),zt()},Go.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var ec=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(Dt);Go.formatPrefix=function(n,t){var e=0;return n&&(0>n&&(n*=-1),t&&(n=Go.round(n,Rt(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((e-1)/3)))),ec[8+e/3]};var rc=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,uc=Go.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=Go.round(n,Rt(n,t))).toFixed(Math.max(0,Math.min(20,Rt(n*(1+1e-15),t))))}}),ic=Go.time={},oc=Date;jt.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){ac.setUTCDate.apply(this._,arguments)},setDay:function(){ac.setUTCDay.apply(this._,arguments)},setFullYear:function(){ac.setUTCFullYear.apply(this._,arguments)},setHours:function(){ac.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){ac.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){ac.setUTCMinutes.apply(this._,arguments)},setMonth:function(){ac.setUTCMonth.apply(this._,arguments)},setSeconds:function(){ac.setUTCSeconds.apply(this._,arguments)},setTime:function(){ac.setTime.apply(this._,arguments)}};var ac=Date.prototype;ic.year=Ht(function(n){return n=ic.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),ic.years=ic.year.range,ic.years.utc=ic.year.utc.range,ic.day=Ht(function(n){var t=new oc(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),ic.days=ic.day.range,ic.days.utc=ic.day.utc.range,ic.dayOfYear=function(n){var t=ic.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t;var e=ic[n]=Ht(function(n){return(n=ic.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=ic.year(n).getDay();return Math.floor((ic.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});ic[n+"s"]=e.range,ic[n+"s"].utc=e.utc.range,ic[n+"OfYear"]=function(n){var e=ic.year(n).getDay();return Math.floor((ic.dayOfYear(n)+(e+t)%7)/7)}}),ic.week=ic.sunday,ic.weeks=ic.sunday.range,ic.weeks.utc=ic.sunday.utc.range,ic.weekOfYear=ic.sundayOfYear;var cc={"-":"",_:" ",0:"0"},sc=/^\s*\d+/,lc=/^%/;Go.locale=function(n){return{numberFormat:Pt(n),timeFormat:Ot(n)}};var fc=Go.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});Go.format=fc.numberFormat,Go.geo={},ce.prototype={s:0,t:0,add:function(n){se(n,this.t,hc),se(hc.s,this.s,this),this.s?this.t+=hc.t:this.s=hc.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var hc=new ce;Go.geo.stream=function(n,t){n&&gc.hasOwnProperty(n.type)?gc[n.type](n,t):le(n,t)};var gc={Feature:function(n,t){le(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,u=e.length;++r<u;)le(e[r].geometry,t)}},pc={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){fe(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)fe(e[r],t,0)},Polygon:function(n,t){he(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)he(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,u=e.length;++r<u;)le(e[r],t)}};Go.geo.area=function(n){return vc=0,Go.geo.stream(n,mc),vc};var vc,dc=new ce,mc={sphere:function(){vc+=4*Ca},point:v,lineStart:v,lineEnd:v,polygonStart:function(){dc.reset(),mc.lineStart=ge},polygonEnd:function(){var n=2*dc;vc+=0>n?4*Ca+n:n,mc.lineStart=mc.lineEnd=mc.point=v}};Go.geo.bounds=function(){function n(n,t){x.push(M=[l=n,h=n]),f>t&&(f=t),t>g&&(g=t)}function t(t,e){var r=pe([t*za,e*za]);if(m){var u=de(m,r),i=[u[1],-u[0],0],o=de(i,u);xe(o),o=Me(o);var c=t-p,s=c>0?1:-1,v=o[0]*Ra*s,d=fa(c)>180;if(d^(v>s*p&&s*t>v)){var y=o[1]*Ra;y>g&&(g=y)}else if(v=(v+360)%360-180,d^(v>s*p&&s*t>v)){var y=-o[1]*Ra;f>y&&(f=y)}else f>e&&(f=e),e>g&&(g=e);d?p>t?a(l,t)>a(l,h)&&(h=t):a(t,h)>a(l,h)&&(l=t):h>=l?(l>t&&(l=t),t>h&&(h=t)):t>p?a(l,t)>a(l,h)&&(h=t):a(t,h)>a(l,h)&&(l=t)}else n(t,e);m=r,p=t}function e(){_.point=t}function r(){M[0]=l,M[1]=h,_.point=n,m=null}function u(n,e){if(m){var r=n-p;y+=fa(r)>180?r+(r>0?360:-360):r}else v=n,d=e;mc.point(n,e),t(n,e)}function i(){mc.lineStart()}function o(){u(v,d),mc.lineEnd(),fa(y)>Ta&&(l=-(h=180)),M[0]=l,M[1]=h,m=null}function a(n,t){return(t-=n)<0?t+360:t}function c(n,t){return n[0]-t[0]}function s(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var l,f,h,g,p,v,d,m,y,x,M,_={point:n,lineStart:e,lineEnd:r,polygonStart:function(){_.point=u,_.lineStart=i,_.lineEnd=o,y=0,mc.polygonStart()},polygonEnd:function(){mc.polygonEnd(),_.point=n,_.lineStart=e,_.lineEnd=r,0>dc?(l=-(h=180),f=-(g=90)):y>Ta?g=90:-Ta>y&&(f=-90),M[0]=l,M[1]=h}};return function(n){g=h=-(l=f=1/0),x=[],Go.geo.stream(n,_);var t=x.length;if(t){x.sort(c);for(var e,r=1,u=x[0],i=[u];t>r;++r)e=x[r],s(e[0],u)||s(e[1],u)?(a(u[0],e[1])>a(u[0],u[1])&&(u[1]=e[1]),a(e[0],u[1])>a(u[0],u[1])&&(u[0]=e[0])):i.push(u=e);
for(var o,e,p=-1/0,t=i.length-1,r=0,u=i[t];t>=r;u=e,++r)e=i[r],(o=a(u[1],e[0]))>p&&(p=o,l=e[0],h=u[1])}return x=M=null,1/0===l||1/0===f?[[0/0,0/0],[0/0,0/0]]:[[l,f],[h,g]]}}(),Go.geo.centroid=function(n){yc=xc=Mc=_c=bc=wc=Sc=kc=Ec=Ac=Cc=0,Go.geo.stream(n,Nc);var t=Ec,e=Ac,r=Cc,u=t*t+e*e+r*r;return qa>u&&(t=wc,e=Sc,r=kc,Ta>xc&&(t=Mc,e=_c,r=bc),u=t*t+e*e+r*r,qa>u)?[0/0,0/0]:[Math.atan2(e,t)*Ra,G(r/Math.sqrt(u))*Ra]};var yc,xc,Mc,_c,bc,wc,Sc,kc,Ec,Ac,Cc,Nc={sphere:v,point:be,lineStart:Se,lineEnd:ke,polygonStart:function(){Nc.lineStart=Ee},polygonEnd:function(){Nc.lineStart=Se}},Lc=Te(Ae,Pe,je,[-Ca,-Ca/2]),Tc=1e9;Go.geo.clipExtent=function(){var n,t,e,r,u,i,o={stream:function(n){return u&&(u.valid=!1),u=i(n),u.valid=!0,u},extent:function(a){return arguments.length?(i=Oe(n=+a[0][0],t=+a[0][1],e=+a[1][0],r=+a[1][1]),u&&(u.valid=!1,u=null),o):[[n,t],[e,r]]}};return o.extent([[0,0],[960,500]])},(Go.geo.conicEqualArea=function(){return Ye(Ze)}).raw=Ze,Go.geo.albers=function(){return Go.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},Go.geo.albersUsa=function(){function n(n){var i=n[0],o=n[1];return t=null,e(i,o),t||(r(i,o),t)||u(i,o),t}var t,e,r,u,i=Go.geo.albers(),o=Go.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=Go.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=i.scale(),e=i.translate(),r=(n[0]-e[0])/t,u=(n[1]-e[1])/t;return(u>=.12&&.234>u&&r>=-.425&&-.214>r?o:u>=.166&&.234>u&&r>=-.214&&-.115>r?a:i).invert(n)},n.stream=function(n){var t=i.stream(n),e=o.stream(n),r=a.stream(n);return{point:function(n,u){t.point(n,u),e.point(n,u),r.point(n,u)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(i.precision(t),o.precision(t),a.precision(t),n):i.precision()},n.scale=function(t){return arguments.length?(i.scale(t),o.scale(.35*t),a.scale(t),n.translate(i.translate())):i.scale()},n.translate=function(t){if(!arguments.length)return i.translate();var s=i.scale(),l=+t[0],f=+t[1];return e=i.translate(t).clipExtent([[l-.455*s,f-.238*s],[l+.455*s,f+.238*s]]).stream(c).point,r=o.translate([l-.307*s,f+.201*s]).clipExtent([[l-.425*s+Ta,f+.12*s+Ta],[l-.214*s-Ta,f+.234*s-Ta]]).stream(c).point,u=a.translate([l-.205*s,f+.212*s]).clipExtent([[l-.214*s+Ta,f+.166*s+Ta],[l-.115*s-Ta,f+.234*s-Ta]]).stream(c).point,n},n.scale(1070)};var qc,zc,Rc,Dc,Pc,Uc,jc={point:v,lineStart:v,lineEnd:v,polygonStart:function(){zc=0,jc.lineStart=Ve},polygonEnd:function(){jc.lineStart=jc.lineEnd=jc.point=v,qc+=fa(zc/2)}},Hc={point:$e,lineStart:v,lineEnd:v,polygonStart:v,polygonEnd:v},Fc={point:Je,lineStart:We,lineEnd:Ge,polygonStart:function(){Fc.lineStart=Ke},polygonEnd:function(){Fc.point=Je,Fc.lineStart=We,Fc.lineEnd=Ge}};Go.geo.path=function(){function n(n){return n&&("function"==typeof a&&i.pointRadius(+a.apply(this,arguments)),o&&o.valid||(o=u(i)),Go.geo.stream(n,o)),i.result()}function t(){return o=null,n}var e,r,u,i,o,a=4.5;return n.area=function(n){return qc=0,Go.geo.stream(n,u(jc)),qc},n.centroid=function(n){return Mc=_c=bc=wc=Sc=kc=Ec=Ac=Cc=0,Go.geo.stream(n,u(Fc)),Cc?[Ec/Cc,Ac/Cc]:kc?[wc/kc,Sc/kc]:bc?[Mc/bc,_c/bc]:[0/0,0/0]},n.bounds=function(n){return Pc=Uc=-(Rc=Dc=1/0),Go.geo.stream(n,u(Hc)),[[Rc,Dc],[Pc,Uc]]},n.projection=function(n){return arguments.length?(u=(e=n)?n.stream||tr(n):At,t()):e},n.context=function(n){return arguments.length?(i=null==(r=n)?new Xe:new Qe(n),"function"!=typeof a&&i.pointRadius(a),t()):r},n.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(i.pointRadius(+t),+t),n):a},n.projection(Go.geo.albersUsa()).context(null)},Go.geo.transform=function(n){return{stream:function(t){var e=new er(t);for(var r in n)e[r]=n[r];return e}}},er.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},Go.geo.projection=ur,Go.geo.projectionMutator=ir,(Go.geo.equirectangular=function(){return ur(ar)}).raw=ar.invert=ar,Go.geo.rotation=function(n){function t(t){return t=n(t[0]*za,t[1]*za),t[0]*=Ra,t[1]*=Ra,t}return n=sr(n[0]%360*za,n[1]*za,n.length>2?n[2]*za:0),t.invert=function(t){return t=n.invert(t[0]*za,t[1]*za),t[0]*=Ra,t[1]*=Ra,t},t},cr.invert=ar,Go.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=sr(-n[0]*za,-n[1]*za,0).invert,u=[];return e(null,null,1,{point:function(n,e){u.push(n=t(n,e)),n[0]*=Ra,n[1]*=Ra}}),{type:"Polygon",coordinates:[u]}}var t,e,r=[0,0],u=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=gr((t=+r)*za,u*za),n):t},n.precision=function(r){return arguments.length?(e=gr(t*za,(u=+r)*za),n):u},n.angle(90)},Go.geo.distance=function(n,t){var e,r=(t[0]-n[0])*za,u=n[1]*za,i=t[1]*za,o=Math.sin(r),a=Math.cos(r),c=Math.sin(u),s=Math.cos(u),l=Math.sin(i),f=Math.cos(i);return Math.atan2(Math.sqrt((e=f*o)*e+(e=s*l-c*f*a)*e),c*l+s*f*a)},Go.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return Go.range(Math.ceil(i/d)*d,u,d).map(h).concat(Go.range(Math.ceil(s/m)*m,c,m).map(g)).concat(Go.range(Math.ceil(r/p)*p,e,p).filter(function(n){return fa(n%d)>Ta}).map(l)).concat(Go.range(Math.ceil(a/v)*v,o,v).filter(function(n){return fa(n%m)>Ta}).map(f))}var e,r,u,i,o,a,c,s,l,f,h,g,p=10,v=p,d=90,m=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(i).concat(g(c).slice(1),h(u).reverse().slice(1),g(s).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(i=+t[0][0],u=+t[1][0],s=+t[0][1],c=+t[1][1],i>u&&(t=i,i=u,u=t),s>c&&(t=s,s=c,c=t),n.precision(y)):[[i,s],[u,c]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],a=+t[0][1],o=+t[1][1],r>e&&(t=r,r=e,e=t),a>o&&(t=a,a=o,o=t),n.precision(y)):[[r,a],[e,o]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],m=+t[1],n):[d,m]},n.minorStep=function(t){return arguments.length?(p=+t[0],v=+t[1],n):[p,v]},n.precision=function(t){return arguments.length?(y=+t,l=vr(a,o,90),f=dr(r,e,y),h=vr(s,c,90),g=dr(i,u,y),n):y},n.majorExtent([[-180,-90+Ta],[180,90-Ta]]).minorExtent([[-180,-80-Ta],[180,80+Ta]])},Go.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||u.apply(this,arguments)]}}var t,e,r=mr,u=yr;return n.distance=function(){return Go.geo.distance(t||r.apply(this,arguments),e||u.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(u=t,e="function"==typeof t?null:t,n):u},n.precision=function(){return arguments.length?n:0},n},Go.geo.interpolate=function(n,t){return xr(n[0]*za,n[1]*za,t[0]*za,t[1]*za)},Go.geo.length=function(n){return Oc=0,Go.geo.stream(n,Ic),Oc};var Oc,Ic={sphere:v,point:v,lineStart:Mr,lineEnd:v,polygonStart:v,polygonEnd:v},Yc=_r(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(Go.geo.azimuthalEqualArea=function(){return ur(Yc)}).raw=Yc;var Zc=_r(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},At);(Go.geo.azimuthalEquidistant=function(){return ur(Zc)}).raw=Zc,(Go.geo.conicConformal=function(){return Ye(br)}).raw=br,(Go.geo.conicEquidistant=function(){return Ye(wr)}).raw=wr;var Vc=_r(function(n){return 1/n},Math.atan);(Go.geo.gnomonic=function(){return ur(Vc)}).raw=Vc,Sr.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-La]},(Go.geo.mercator=function(){return kr(Sr)}).raw=Sr;var $c=_r(function(){return 1},Math.asin);(Go.geo.orthographic=function(){return ur($c)}).raw=$c;var Xc=_r(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(Go.geo.stereographic=function(){return ur(Xc)}).raw=Xc,Er.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-La]},(Go.geo.transverseMercator=function(){var n=kr(Er),t=n.center,e=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[-n[1],n[0]])},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])},n.rotate([0,0])}).raw=Er,Go.geom={},Go.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,u=Et(e),i=Et(r),o=n.length,a=[],c=[];for(t=0;o>t;t++)a.push([+u.call(this,n[t],t),+i.call(this,n[t],t),t]);for(a.sort(Lr),t=0;o>t;t++)c.push([a[t][0],-a[t][1]]);var s=Nr(a),l=Nr(c),f=l[0]===s[0],h=l[l.length-1]===s[s.length-1],g=[];for(t=s.length-1;t>=0;--t)g.push(n[a[s[t]][2]]);for(t=+f;t<l.length-h;++t)g.push(n[a[l[t]][2]]);return g}var e=Ar,r=Cr;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},Go.geom.polygon=function(n){return da(n,Bc),n};var Bc=Go.geom.polygon.prototype=[];Bc.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],u=0;++t<e;)n=r,r=this[t],u+=n[1]*r[0]-n[0]*r[1];return.5*u},Bc.centroid=function(n){var t,e,r=-1,u=this.length,i=0,o=0,a=this[u-1];for(arguments.length||(n=-1/(6*this.area()));++r<u;)t=a,a=this[r],e=t[0]*a[1]-a[0]*t[1],i+=(t[0]+a[0])*e,o+=(t[1]+a[1])*e;return[i*n,o*n]},Bc.clip=function(n){for(var t,e,r,u,i,o,a=zr(n),c=-1,s=this.length-zr(this),l=this[s-1];++c<s;){for(t=n.slice(),n.length=0,u=this[c],i=t[(r=t.length-a)-1],e=-1;++e<r;)o=t[e],Tr(o,l,u)?(Tr(i,l,u)||n.push(qr(i,o,l,u)),n.push(o)):Tr(i,l,u)&&n.push(qr(i,o,l,u)),i=o;a&&n.push(n[0]),l=u}return n};var Jc,Wc,Gc,Kc,Qc,ns=[],ts=[];Or.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(Yr),t.length},Qr.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},nu.prototype={insert:function(n,t){var e,r,u;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=uu(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(u=r.R,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.R&&(eu(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ru(this,r))):(u=r.L,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.L&&(ru(this,e),n=e,e=n.U),e.C=!1,r.C=!0,eu(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,u=n.U,i=n.L,o=n.R;if(e=i?o?uu(o):i:o,u?u.L===n?u.L=e:u.R=e:this._=e,i&&o?(r=e.C,e.C=n.C,e.L=i,i.U=e,e!==o?(u=e.U,e.U=n.U,n=e.R,u.L=n,e.R=o,o.U=e):(e.U=u,u=e,n=e.R)):(r=n.C,n=e),n&&(n.U=u),!r){if(n&&n.C)return n.C=!1,void 0;do{if(n===this._)break;if(n===u.L){if(t=u.R,t.C&&(t.C=!1,u.C=!0,eu(this,u),t=u.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,ru(this,t),t=u.R),t.C=u.C,u.C=t.R.C=!1,eu(this,u),n=this._;break}}else if(t=u.L,t.C&&(t.C=!1,u.C=!0,ru(this,u),t=u.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,eu(this,t),t=u.L),t.C=u.C,u.C=t.L.C=!1,ru(this,u),n=this._;break}t.C=!0,n=u,u=u.U}while(!n.C);n&&(n.C=!1)}}},Go.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=a[0][0],u=a[0][1],i=a[1][0],o=a[1][1];return iu(e(n),a).cells.forEach(function(e,a){var c=e.edges,s=e.site,l=t[a]=c.length?c.map(function(n){var t=n.start();return[t.x,t.y]}):s.x>=r&&s.x<=i&&s.y>=u&&s.y<=o?[[r,o],[i,o],[i,u],[r,u]]:[];l.point=n[a]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(i(n,t)/Ta)*Ta,y:Math.round(o(n,t)/Ta)*Ta,i:t}})}var r=Ar,u=Cr,i=r,o=u,a=es;return n?t(n):(t.links=function(n){return iu(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return iu(e(n)).cells.forEach(function(e,r){for(var u,i,o=e.site,a=e.edges.sort(Yr),c=-1,s=a.length,l=a[s-1].edge,f=l.l===o?l.r:l.l;++c<s;)u=l,i=f,l=a[c].edge,f=l.l===o?l.r:l.l,r<i.i&&r<f.i&&au(o,i,f)<0&&t.push([n[r],n[i.i],n[f.i]])}),t},t.x=function(n){return arguments.length?(i=Et(r=n),t):r},t.y=function(n){return arguments.length?(o=Et(u=n),t):u},t.clipExtent=function(n){return arguments.length?(a=null==n?es:n,t):a===es?null:a},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):a===es?null:a&&a[1]},t)};var es=[[-1e6,-1e6],[1e6,1e6]];Go.geom.delaunay=function(n){return Go.geom.voronoi().triangles(n)},Go.geom.quadtree=function(n,t,e,r,u){function i(n){function i(n,t,e,r,u,i,o,a){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var c=n.x,l=n.y;if(null!=c)if(fa(c-e)+fa(l-r)<.01)s(n,t,e,r,u,i,o,a);else{var f=n.point;n.x=n.y=n.point=null,s(n,f,c,l,u,i,o,a),s(n,t,e,r,u,i,o,a)}else n.x=e,n.y=r,n.point=t}else s(n,t,e,r,u,i,o,a)}function s(n,t,e,r,u,o,a,c){var s=.5*(u+a),l=.5*(o+c),f=e>=s,h=r>=l,g=(h<<1)+f;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=lu()),f?u=s:a=s,h?o=l:c=l,i(n,t,e,r,u,o,a,c)}var l,f,h,g,p,v,d,m,y,x=Et(a),M=Et(c);if(null!=t)v=t,d=e,m=r,y=u;else if(m=y=-(v=d=1/0),f=[],h=[],p=n.length,o)for(g=0;p>g;++g)l=n[g],l.x<v&&(v=l.x),l.y<d&&(d=l.y),l.x>m&&(m=l.x),l.y>y&&(y=l.y),f.push(l.x),h.push(l.y);else for(g=0;p>g;++g){var _=+x(l=n[g],g),b=+M(l,g);v>_&&(v=_),d>b&&(d=b),_>m&&(m=_),b>y&&(y=b),f.push(_),h.push(b)}var w=m-v,S=y-d;w>S?y=d+w:m=v+S;var k=lu();if(k.add=function(n){i(k,n,+x(n,++g),+M(n,g),v,d,m,y)},k.visit=function(n){fu(n,k,v,d,m,y)},g=-1,null==t){for(;++g<p;)i(k,n[g],f[g],h[g],v,d,m,y);--g}else n.forEach(k.add);return f=h=n=l=null,k}var o,a=Ar,c=Cr;return(o=arguments.length)?(a=cu,c=su,3===o&&(u=e,r=t,e=t=0),i(n)):(i.x=function(n){return arguments.length?(a=n,i):a},i.y=function(n){return arguments.length?(c=n,i):c},i.extent=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],u=+n[1][1]),i):null==t?null:[[t,e],[r,u]]},i.size=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=e=0,r=+n[0],u=+n[1]),i):null==t?null:[r-t,u-e]},i)},Go.interpolateRgb=hu,Go.interpolateObject=gu,Go.interpolateNumber=pu,Go.interpolateString=vu;var rs=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,us=new RegExp(rs.source,"g");Go.interpolate=du,Go.interpolators=[function(n,t){var e=typeof t;return("string"===e?Ja.has(t)||/^(#|rgb\(|hsl\()/.test(t)?hu:vu:t instanceof et?hu:Array.isArray(t)?mu:"object"===e&&isNaN(t)?gu:pu)(n,t)}],Go.interpolateArray=mu;var is=function(){return At},os=Go.map({linear:is,poly:Su,quad:function(){return _u},cubic:function(){return bu},sin:function(){return ku},exp:function(){return Eu},circle:function(){return Au},elastic:Cu,back:Nu,bounce:function(){return Lu}}),as=Go.map({"in":At,out:xu,"in-out":Mu,"out-in":function(n){return Mu(xu(n))}});Go.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.substring(0,t):n,r=t>=0?n.substring(t+1):"in";return e=os.get(e)||is,r=as.get(r)||At,yu(r(e.apply(null,Ko.call(arguments,1))))},Go.interpolateHcl=Tu,Go.interpolateHsl=qu,Go.interpolateLab=zu,Go.interpolateRound=Ru,Go.transform=function(n){var t=na.createElementNS(Go.ns.prefix.svg,"g");return(Go.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new Du(e?e.matrix:cs)})(n)},Du.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var cs={a:1,b:0,c:0,d:1,e:0,f:0};Go.interpolateTransform=Hu,Go.layout={},Go.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Iu(n[e]));return t}},Go.layout.chord=function(){function n(){var n,s,f,h,g,p={},v=[],d=Go.range(i),m=[];for(e=[],r=[],n=0,h=-1;++h<i;){for(s=0,g=-1;++g<i;)s+=u[h][g];v.push(s),m.push(Go.range(i)),n+=s}for(o&&d.sort(function(n,t){return o(v[n],v[t])}),a&&m.forEach(function(n,t){n.sort(function(n,e){return a(u[t][n],u[t][e])})}),n=(Na-l*i)/n,s=0,h=-1;++h<i;){for(f=s,g=-1;++g<i;){var y=d[h],x=m[y][g],M=u[y][x],_=s,b=s+=M*n;p[y+"-"+x]={index:y,subindex:x,startAngle:_,endAngle:b,value:M}}r[y]={index:y,startAngle:f,endAngle:s,value:(s-f)/n},s+=l}for(h=-1;++h<i;)for(g=h-1;++g<i;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}c&&t()}function t(){e.sort(function(n,t){return c((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,u,i,o,a,c,s={},l=0;return s.matrix=function(n){return arguments.length?(i=(u=n)&&u.length,e=r=null,s):u},s.padding=function(n){return arguments.length?(l=n,e=r=null,s):l},s.sortGroups=function(n){return arguments.length?(o=n,e=r=null,s):o},s.sortSubgroups=function(n){return arguments.length?(a=n,e=null,s):a},s.sortChords=function(n){return arguments.length?(c=n,e&&t(),s):c},s.chords=function(){return e||n(),e},s.groups=function(){return r||n(),r},s},Go.layout.force=function(){function n(n){return function(t,e,r,u){if(t.point!==n){var i=t.cx-n.x,o=t.cy-n.y,a=u-e,c=i*i+o*o;if(c>a*a/d){if(p>c){var s=t.charge/c;n.px-=i*s,n.py-=o*s}return!0}if(t.point&&c&&p>c){var s=t.pointCharge/c;n.px-=i*s,n.py-=o*s}}return!t.charge}}function t(n){n.px=Go.event.x,n.py=Go.event.y,a.resume()}var e,r,u,i,o,a={},c=Go.dispatch("start","tick","end"),s=[1,1],l=.9,f=ss,h=ls,g=-30,p=fs,v=.1,d=.64,m=[],y=[];return a.tick=function(){if((r*=.99)<.005)return c.end({type:"end",alpha:r=0}),!0;var t,e,a,f,h,p,d,x,M,_=m.length,b=y.length;for(e=0;b>e;++e)a=y[e],f=a.source,h=a.target,x=h.x-f.x,M=h.y-f.y,(p=x*x+M*M)&&(p=r*i[e]*((p=Math.sqrt(p))-u[e])/p,x*=p,M*=p,h.x-=x*(d=f.weight/(h.weight+f.weight)),h.y-=M*d,f.x+=x*(d=1-d),f.y+=M*d);if((d=r*v)&&(x=s[0]/2,M=s[1]/2,e=-1,d))for(;++e<_;)a=m[e],a.x+=(x-a.x)*d,a.y+=(M-a.y)*d;if(g)for(Ju(t=Go.geom.quadtree(m),r,o),e=-1;++e<_;)(a=m[e]).fixed||t.visit(n(a));for(e=-1;++e<_;)a=m[e],a.fixed?(a.x=a.px,a.y=a.py):(a.x-=(a.px-(a.px=a.x))*l,a.y-=(a.py-(a.py=a.y))*l);c.tick({type:"tick",alpha:r})},a.nodes=function(n){return arguments.length?(m=n,a):m},a.links=function(n){return arguments.length?(y=n,a):y},a.size=function(n){return arguments.length?(s=n,a):s},a.linkDistance=function(n){return arguments.length?(f="function"==typeof n?n:+n,a):f},a.distance=a.linkDistance,a.linkStrength=function(n){return arguments.length?(h="function"==typeof n?n:+n,a):h},a.friction=function(n){return arguments.length?(l=+n,a):l},a.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,a):g},a.chargeDistance=function(n){return arguments.length?(p=n*n,a):Math.sqrt(p)},a.gravity=function(n){return arguments.length?(v=+n,a):v},a.theta=function(n){return arguments.length?(d=n*n,a):Math.sqrt(d)},a.alpha=function(n){return arguments.length?(n=+n,r?r=n>0?n:0:n>0&&(c.start({type:"start",alpha:r=n}),Go.timer(a.tick)),a):r},a.start=function(){function n(n,r){if(!e){for(e=new Array(c),a=0;c>a;++a)e[a]=[];for(a=0;s>a;++a){var u=y[a];e[u.source.index].push(u.target),e[u.target.index].push(u.source)}}for(var i,o=e[t],a=-1,s=o.length;++a<s;)if(!isNaN(i=o[a][n]))return i;return Math.random()*r}var t,e,r,c=m.length,l=y.length,p=s[0],v=s[1];for(t=0;c>t;++t)(r=m[t]).index=t,r.weight=0;for(t=0;l>t;++t)r=y[t],"number"==typeof r.source&&(r.source=m[r.source]),"number"==typeof r.target&&(r.target=m[r.target]),++r.source.weight,++r.target.weight;for(t=0;c>t;++t)r=m[t],isNaN(r.x)&&(r.x=n("x",p)),isNaN(r.y)&&(r.y=n("y",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(u=[],"function"==typeof f)for(t=0;l>t;++t)u[t]=+f.call(this,y[t],t);else for(t=0;l>t;++t)u[t]=f;if(i=[],"function"==typeof h)for(t=0;l>t;++t)i[t]=+h.call(this,y[t],t);else for(t=0;l>t;++t)i[t]=h;if(o=[],"function"==typeof g)for(t=0;c>t;++t)o[t]=+g.call(this,m[t],t);else for(t=0;c>t;++t)o[t]=g;return a.resume()},a.resume=function(){return a.alpha(.1)},a.stop=function(){return a.alpha(0)},a.drag=function(){return e||(e=Go.behavior.drag().origin(At).on("dragstart.force",Vu).on("drag.force",t).on("dragend.force",$u)),arguments.length?(this.on("mouseover.force",Xu).on("mouseout.force",Bu).call(e),void 0):e},Go.rebind(a,c,"on")};var ss=20,ls=1,fs=1/0;Go.layout.hierarchy=function(){function n(t,o,a){var c=u.call(e,t,o);if(t.depth=o,a.push(t),c&&(s=c.length)){for(var s,l,f=-1,h=t.children=new Array(s),g=0,p=o+1;++f<s;)l=h[f]=n(c[f],p,a),l.parent=t,g+=l.value;r&&h.sort(r),i&&(t.value=g)}else delete t.children,i&&(t.value=+i.call(e,t,o)||0);return t}function t(n,r){var u=n.children,o=0;if(u&&(a=u.length))for(var a,c=-1,s=r+1;++c<a;)o+=t(u[c],s);else i&&(o=+i.call(e,n,r)||0);return i&&(n.value=o),o}function e(t){var e=[];return n(t,0,e),e}var r=Qu,u=Gu,i=Ku;return e.sort=function(n){return arguments.length?(r=n,e):r},e.children=function(n){return arguments.length?(u=n,e):u},e.value=function(n){return arguments.length?(i=n,e):i},e.revalue=function(n){return t(n,0),n},e},Go.layout.partition=function(){function n(t,e,r,u){var i=t.children;if(t.x=e,t.y=t.depth*u,t.dx=r,t.dy=u,i&&(o=i.length)){var o,a,c,s=-1;for(r=t.value?r/t.value:0;++s<o;)n(a=i[s],e,c=a.value*r,u),e+=c}}function t(n){var e=n.children,r=0;if(e&&(u=e.length))for(var u,i=-1;++i<u;)r=Math.max(r,t(e[i]));return 1+r}function e(e,i){var o=r.call(this,e,i);return n(o[0],0,u[0],u[1]/t(o[0])),o}var r=Go.layout.hierarchy(),u=[1,1];return e.size=function(n){return arguments.length?(u=n,e):u},Wu(e,r)},Go.layout.pie=function(){function n(i){var o=i.map(function(e,r){return+t.call(n,e,r)}),a=+("function"==typeof r?r.apply(this,arguments):r),c=(("function"==typeof u?u.apply(this,arguments):u)-a)/Go.sum(o),s=Go.range(i.length);null!=e&&s.sort(e===hs?function(n,t){return o[t]-o[n]}:function(n,t){return e(i[n],i[t])});var l=[];return s.forEach(function(n){var t;l[n]={data:i[n],value:t=o[n],startAngle:a,endAngle:a+=t*c}}),l}var t=Number,e=hs,r=0,u=Na;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(u=t,n):u},n};var hs={};Go.layout.stack=function(){function n(a,c){var s=a.map(function(e,r){return t.call(n,e,r)}),l=s.map(function(t){return t.map(function(t,e){return[i.call(n,t,e),o.call(n,t,e)]})}),f=e.call(n,l,c);s=Go.permute(s,f),l=Go.permute(l,f);var h,g,p,v=r.call(n,l,c),d=s.length,m=s[0].length;for(g=0;m>g;++g)for(u.call(n,s[0][g],p=v[g],l[0][g][1]),h=1;d>h;++h)u.call(n,s[h][g],p+=l[h-1][g][1],l[h][g][1]);return a}var t=At,e=ui,r=ii,u=ri,i=ti,o=ei;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:gs.get(t)||ui,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:ps.get(t)||ii,n):r},n.x=function(t){return arguments.length?(i=t,n):i},n.y=function(t){return arguments.length?(o=t,n):o},n.out=function(t){return arguments.length?(u=t,n):u},n};var gs=Go.map({"inside-out":function(n){var t,e,r=n.length,u=n.map(oi),i=n.map(ai),o=Go.range(r).sort(function(n,t){return u[n]-u[t]}),a=0,c=0,s=[],l=[];for(t=0;r>t;++t)e=o[t],c>a?(a+=i[e],s.push(e)):(c+=i[e],l.push(e));return l.reverse().concat(s)},reverse:function(n){return Go.range(n.length).reverse()},"default":ui}),ps=Go.map({silhouette:function(n){var t,e,r,u=n.length,i=n[0].length,o=[],a=0,c=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];r>a&&(a=r),o.push(r)}for(e=0;i>e;++e)c[e]=(a-o[e])/2;return c},wiggle:function(n){var t,e,r,u,i,o,a,c,s,l=n.length,f=n[0],h=f.length,g=[];for(g[0]=c=s=0,e=1;h>e;++e){for(t=0,u=0;l>t;++t)u+=n[t][e][1];for(t=0,i=0,a=f[e][0]-f[e-1][0];l>t;++t){for(r=0,o=(n[t][e][1]-n[t][e-1][1])/(2*a);t>r;++r)o+=(n[r][e][1]-n[r][e-1][1])/a;i+=o*n[t][e][1]}g[e]=c-=u?i/u*a:0,s>c&&(s=c)}for(e=0;h>e;++e)g[e]-=s;return g},expand:function(n){var t,e,r,u=n.length,i=n[0].length,o=1/u,a=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];if(r)for(t=0;u>t;t++)n[t][e][1]/=r;else for(t=0;u>t;t++)n[t][e][1]=o}for(e=0;i>e;++e)a[e]=0;return a},zero:ii});Go.layout.histogram=function(){function n(n,i){for(var o,a,c=[],s=n.map(e,this),l=r.call(this,s,i),f=u.call(this,l,s,i),i=-1,h=s.length,g=f.length-1,p=t?1:1/h;++i<g;)o=c[i]=[],o.dx=f[i+1]-(o.x=f[i]),o.y=0;if(g>0)for(i=-1;++i<h;)a=s[i],a>=l[0]&&a<=l[1]&&(o=c[Go.bisect(f,a,1,g)-1],o.y+=p,o.push(n[i]));return c}var t=!0,e=Number,r=fi,u=si;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=Et(t),n):r},n.bins=function(t){return arguments.length?(u="number"==typeof t?function(n){return li(n,t)}:Et(t),n):u},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},Go.layout.tree=function(){function n(n,i){function o(n,t){var r=n.children,u=n._tree;if(r&&(i=r.length)){for(var i,a,s,l=r[0],f=l,h=-1;++h<i;)s=r[h],o(s,a),f=c(s,a,f),a=s;Mi(n);var g=.5*(l._tree.prelim+s._tree.prelim);t?(u.prelim=t._tree.prelim+e(n,t),u.mod=u.prelim-g):u.prelim=g}else t&&(u.prelim=t._tree.prelim+e(n,t))}function a(n,t){n.x=n._tree.prelim+t;var e=n.children;if(e&&(r=e.length)){var r,u=-1;for(t+=n._tree.mod;++u<r;)a(e[u],t)}}function c(n,t,r){if(t){for(var u,i=n,o=n,a=t,c=n.parent.children[0],s=i._tree.mod,l=o._tree.mod,f=a._tree.mod,h=c._tree.mod;a=pi(a),i=gi(i),a&&i;)c=gi(c),o=pi(o),o._tree.ancestor=n,u=a._tree.prelim+f-i._tree.prelim-s+e(a,i),u>0&&(_i(bi(a,n,r),n,u),s+=u,l+=u),f+=a._tree.mod,s+=i._tree.mod,h+=c._tree.mod,l+=o._tree.mod;a&&!pi(o)&&(o._tree.thread=a,o._tree.mod+=f-l),i&&!gi(c)&&(c._tree.thread=i,c._tree.mod+=s-h,r=n)}return r}var s=t.call(this,n,i),l=s[0];xi(l,function(n,t){n._tree={ancestor:n,prelim:0,mod:0,change:0,shift:0,number:t?t._tree.number+1:0}}),o(l),a(l,-l._tree.prelim);var f=vi(l,mi),h=vi(l,di),g=vi(l,yi),p=f.x-e(f,h)/2,v=h.x+e(h,f)/2,d=g.depth||1;return xi(l,u?function(n){n.x*=r[0],n.y=n.depth*r[1],delete n._tree}:function(n){n.x=(n.x-p)/(v-p)*r[0],n.y=n.depth/d*r[1],delete n._tree}),s}var t=Go.layout.hierarchy().sort(null).value(null),e=hi,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},Wu(n,t)},Go.layout.pack=function(){function n(n,i){var o=e.call(this,n,i),a=o[0],c=u[0],s=u[1],l=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(a.x=a.y=0,xi(a,function(n){n.r=+l(n.value)}),xi(a,Ai),r){var f=r*(t?1:Math.max(2*a.r/c,2*a.r/s))/2;xi(a,function(n){n.r+=f}),xi(a,Ai),xi(a,function(n){n.r-=f})}return Li(a,c/2,s/2,t?1:1/Math.max(2*a.r/c,2*a.r/s)),o}var t,e=Go.layout.hierarchy().sort(wi),r=0,u=[1,1];return n.size=function(t){return arguments.length?(u=t,n):u},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},Wu(n,e)},Go.layout.cluster=function(){function n(n,i){var o,a=t.call(this,n,i),c=a[0],s=0;xi(c,function(n){var t=n.children;t&&t.length?(n.x=zi(t),n.y=qi(t)):(n.x=o?s+=e(n,o):0,n.y=0,o=n)});var l=Ri(c),f=Di(c),h=l.x-e(l,f)/2,g=f.x+e(f,l)/2;return xi(c,u?function(n){n.x=(n.x-c.x)*r[0],n.y=(c.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(g-h)*r[0],n.y=(1-(c.y?n.y/c.y:1))*r[1]}),a}var t=Go.layout.hierarchy().sort(null).value(null),e=hi,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},Wu(n,t)},Go.layout.treemap=function(){function n(n,t){for(var e,r,u=-1,i=n.length;++u<i;)r=(e=n[u]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var i=e.children;if(i&&i.length){var o,a,c,s=f(e),l=[],h=i.slice(),p=1/0,v="slice"===g?s.dx:"dice"===g?s.dy:"slice-dice"===g?1&e.depth?s.dy:s.dx:Math.min(s.dx,s.dy);for(n(h,s.dx*s.dy/e.value),l.area=0;(c=h.length)>0;)l.push(o=h[c-1]),l.area+=o.area,"squarify"!==g||(a=r(l,v))<=p?(h.pop(),p=a):(l.area-=l.pop().area,u(l,v,s,!1),v=Math.min(s.dx,s.dy),l.length=l.area=0,p=1/0);l.length&&(u(l,v,s,!0),l.length=l.area=0),i.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var i,o=f(t),a=r.slice(),c=[];for(n(a,o.dx*o.dy/t.value),c.area=0;i=a.pop();)c.push(i),c.area+=i.area,null!=i.z&&(u(c,i.z?o.dx:o.dy,o,!a.length),c.length=c.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,u=0,i=1/0,o=-1,a=n.length;++o<a;)(e=n[o].area)&&(i>e&&(i=e),e>u&&(u=e));return r*=r,t*=t,r?Math.max(t*u*p/r,r/(t*i*p)):1/0}function u(n,t,e,r){var u,i=-1,o=n.length,a=e.x,s=e.y,l=t?c(n.area/t):0;if(t==e.dx){for((r||l>e.dy)&&(l=e.dy);++i<o;)u=n[i],u.x=a,u.y=s,u.dy=l,a+=u.dx=Math.min(e.x+e.dx-a,l?c(u.area/l):0);u.z=!0,u.dx+=e.x+e.dx-a,e.y+=l,e.dy-=l}else{for((r||l>e.dx)&&(l=e.dx);++i<o;)u=n[i],u.x=a,u.y=s,u.dx=l,s+=u.dy=Math.min(e.y+e.dy-s,l?c(u.area/l):0);u.z=!1,u.dy+=e.y+e.dy-s,e.x+=l,e.dx-=l}}function i(r){var u=o||a(r),i=u[0];return i.x=0,i.y=0,i.dx=s[0],i.dy=s[1],o&&a.revalue(i),n([i],i.dx*i.dy/i.value),(o?e:t)(i),h&&(o=u),u}var o,a=Go.layout.hierarchy(),c=Math.round,s=[1,1],l=null,f=Pi,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));return i.size=function(n){return arguments.length?(s=n,i):s},i.padding=function(n){function t(t){var e=n.call(i,t,t.depth);return null==e?Pi(t):Ui(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Ui(t,n)}if(!arguments.length)return l;var r;return f=null==(l=n)?Pi:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,i},i.round=function(n){return arguments.length?(c=n?Math.round:Number,i):c!=Number},i.sticky=function(n){return arguments.length?(h=n,o=null,i):h},i.ratio=function(n){return arguments.length?(p=n,i):p},i.mode=function(n){return arguments.length?(g=n+"",i):g},Wu(i,a)},Go.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,u;do e=2*Math.random()-1,r=2*Math.random()-1,u=e*e+r*r;while(!u||u>1);return n+t*e*Math.sqrt(-2*Math.log(u)/u)}},logNormal:function(){var n=Go.random.normal.apply(Go,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=Go.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t}}},Go.scale={};var vs={floor:At,ceil:At};Go.scale.linear=function(){return Zi([0,1],[0,1],du,!1)};var ds={s:1,g:1,p:1,r:1,e:1};Go.scale.log=function(){return Ki(Go.scale.linear().domain([0,1]),10,!0,[1,10])};var ms=Go.format(".0e"),ys={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};Go.scale.pow=function(){return Qi(Go.scale.linear(),1,[0,1])},Go.scale.sqrt=function(){return Go.scale.pow().exponent(.5)},Go.scale.ordinal=function(){return to([],{t:"range",a:[[]]})},Go.scale.category10=function(){return Go.scale.ordinal().range(xs)},Go.scale.category20=function(){return Go.scale.ordinal().range(Ms)},Go.scale.category20b=function(){return Go.scale.ordinal().range(_s)},Go.scale.category20c=function(){return Go.scale.ordinal().range(bs)};var xs=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(mt),Ms=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(mt),_s=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(mt),bs=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(mt);Go.scale.quantile=function(){return eo([],[])},Go.scale.quantize=function(){return ro(0,1,[0,1])},Go.scale.threshold=function(){return uo([.5],[0,1])},Go.scale.identity=function(){return io([0,1])},Go.svg={},Go.svg.arc=function(){function n(){var n=t.apply(this,arguments),i=e.apply(this,arguments),o=r.apply(this,arguments)+ws,a=u.apply(this,arguments)+ws,c=(o>a&&(c=o,o=a,a=c),a-o),s=Ca>c?"0":"1",l=Math.cos(o),f=Math.sin(o),h=Math.cos(a),g=Math.sin(a);
return c>=Ss?n?"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"M0,"+n+"A"+n+","+n+" 0 1,0 0,"+-n+"A"+n+","+n+" 0 1,0 0,"+n+"Z":"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"Z":n?"M"+i*l+","+i*f+"A"+i+","+i+" 0 "+s+",1 "+i*h+","+i*g+"L"+n*h+","+n*g+"A"+n+","+n+" 0 "+s+",0 "+n*l+","+n*f+"Z":"M"+i*l+","+i*f+"A"+i+","+i+" 0 "+s+",1 "+i*h+","+i*g+"L0,0"+"Z"}var t=oo,e=ao,r=co,u=so;return n.innerRadius=function(e){return arguments.length?(t=Et(e),n):t},n.outerRadius=function(t){return arguments.length?(e=Et(t),n):e},n.startAngle=function(t){return arguments.length?(r=Et(t),n):r},n.endAngle=function(t){return arguments.length?(u=Et(t),n):u},n.centroid=function(){var n=(t.apply(this,arguments)+e.apply(this,arguments))/2,i=(r.apply(this,arguments)+u.apply(this,arguments))/2+ws;return[Math.cos(i)*n,Math.sin(i)*n]},n};var ws=-La,Ss=Na-Ta;Go.svg.line=function(){return lo(At)};var ks=Go.map({linear:fo,"linear-closed":ho,step:go,"step-before":po,"step-after":vo,basis:bo,"basis-open":wo,"basis-closed":So,bundle:ko,cardinal:xo,"cardinal-open":mo,"cardinal-closed":yo,monotone:To});ks.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var Es=[0,2/3,1/3,0],As=[0,1/3,2/3,0],Cs=[0,1/6,2/3,1/6];Go.svg.line.radial=function(){var n=lo(qo);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},po.reverse=vo,vo.reverse=po,Go.svg.area=function(){return zo(At)},Go.svg.area.radial=function(){var n=zo(qo);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},Go.svg.chord=function(){function n(n,a){var c=t(this,i,n,a),s=t(this,o,n,a);return"M"+c.p0+r(c.r,c.p1,c.a1-c.a0)+(e(c,s)?u(c.r,c.p1,c.r,c.p0):u(c.r,c.p1,s.r,s.p0)+r(s.r,s.p1,s.a1-s.a0)+u(s.r,s.p1,c.r,c.p0))+"Z"}function t(n,t,e,r){var u=t.call(n,e,r),i=a.call(n,u,r),o=c.call(n,u,r)+ws,l=s.call(n,u,r)+ws;return{r:i,a0:o,a1:l,p0:[i*Math.cos(o),i*Math.sin(o)],p1:[i*Math.cos(l),i*Math.sin(l)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>Ca)+",1 "+t}function u(n,t,e,r){return"Q 0,0 "+r}var i=mr,o=yr,a=Ro,c=co,s=so;return n.radius=function(t){return arguments.length?(a=Et(t),n):a},n.source=function(t){return arguments.length?(i=Et(t),n):i},n.target=function(t){return arguments.length?(o=Et(t),n):o},n.startAngle=function(t){return arguments.length?(c=Et(t),n):c},n.endAngle=function(t){return arguments.length?(s=Et(t),n):s},n},Go.svg.diagonal=function(){function n(n,u){var i=t.call(this,n,u),o=e.call(this,n,u),a=(i.y+o.y)/2,c=[i,{x:i.x,y:a},{x:o.x,y:a},o];return c=c.map(r),"M"+c[0]+"C"+c[1]+" "+c[2]+" "+c[3]}var t=mr,e=yr,r=Do;return n.source=function(e){return arguments.length?(t=Et(e),n):t},n.target=function(t){return arguments.length?(e=Et(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},Go.svg.diagonal.radial=function(){var n=Go.svg.diagonal(),t=Do,e=n.projection;return n.projection=function(n){return arguments.length?e(Po(t=n)):t},n},Go.svg.symbol=function(){function n(n,r){return(Ns.get(t.call(this,n,r))||Ho)(e.call(this,n,r))}var t=jo,e=Uo;return n.type=function(e){return arguments.length?(t=Et(e),n):t},n.size=function(t){return arguments.length?(e=Et(t),n):e},n};var Ns=Go.map({circle:Ho,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*zs)),e=t*zs;return"M0,"+-t+"L"+e+",0"+" 0,"+t+" "+-e+",0"+"Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/qs),e=t*qs/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/qs),e=t*qs/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});Go.svg.symbolTypes=Ns.keys();var Ls,Ts,qs=Math.sqrt(3),zs=Math.tan(30*za),Rs=[],Ds=0;Rs.call=_a.call,Rs.empty=_a.empty,Rs.node=_a.node,Rs.size=_a.size,Go.transition=function(n){return arguments.length?Ls?n.transition():n:Sa.transition()},Go.transition.prototype=Rs,Rs.select=function(n){var t,e,r,u=this.id,i=[];n=b(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]);for(var c=this[o],s=-1,l=c.length;++s<l;)(r=c[s])&&(e=n.call(r,r.__data__,s,o))?("__data__"in r&&(e.__data__=r.__data__),Yo(e,s,u,r.__transition__[u]),t.push(e)):t.push(null)}return Fo(i,u)},Rs.selectAll=function(n){var t,e,r,u,i,o=this.id,a=[];n=w(n);for(var c=-1,s=this.length;++c<s;)for(var l=this[c],f=-1,h=l.length;++f<h;)if(r=l[f]){i=r.__transition__[o],e=n.call(r,r.__data__,f,c),a.push(t=[]);for(var g=-1,p=e.length;++g<p;)(u=e[g])&&Yo(u,g,o,i),t.push(u)}return Fo(a,o)},Rs.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=R(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]);for(var e=this[i],a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return Fo(u,this.id)},Rs.tween=function(n,t){var e=this.id;return arguments.length<2?this.node().__transition__[e].tween.get(n):P(this,null==t?function(t){t.__transition__[e].tween.remove(n)}:function(r){r.__transition__[e].tween.set(n,t)})},Rs.attr=function(n,t){function e(){this.removeAttribute(a)}function r(){this.removeAttributeNS(a.space,a.local)}function u(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(a);return e!==n&&(t=o(e,n),function(n){this.setAttribute(a,t(n))})})}function i(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(a.space,a.local);return e!==n&&(t=o(e,n),function(n){this.setAttributeNS(a.space,a.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var o="transform"==n?Hu:du,a=Go.ns.qualify(n);return Oo(this,"attr."+n,t,a.local?i:u)},Rs.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(u));return r&&function(n){this.setAttribute(u,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(u.space,u.local));return r&&function(n){this.setAttributeNS(u.space,u.local,r(n))}}var u=Go.ns.qualify(n);return this.tween("attr."+n,u.local?r:e)},Rs.style=function(n,t,e){function r(){this.style.removeProperty(n)}function u(t){return null==t?r:(t+="",function(){var r,u=ea.getComputedStyle(this,null).getPropertyValue(n);return u!==t&&(r=du(u,t),function(t){this.style.setProperty(n,r(t),e)})})}var i=arguments.length;if(3>i){if("string"!=typeof n){2>i&&(t="");for(e in n)this.style(e,n[e],t);return this}e=""}return Oo(this,"style."+n,t,u)},Rs.styleTween=function(n,t,e){function r(r,u){var i=t.call(this,r,u,ea.getComputedStyle(this,null).getPropertyValue(n));return i&&function(t){this.style.setProperty(n,i(t),e)}}return arguments.length<3&&(e=""),this.tween("style."+n,r)},Rs.text=function(n){return Oo(this,"text",n,Io)},Rs.remove=function(){return this.each("end.transition",function(){var n;this.__transition__.count<2&&(n=this.parentNode)&&n.removeChild(this)})},Rs.ease=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].ease:("function"!=typeof n&&(n=Go.ease.apply(Go,arguments)),P(this,function(e){e.__transition__[t].ease=n}))},Rs.delay=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].delay:P(this,"function"==typeof n?function(e,r,u){e.__transition__[t].delay=+n.call(e,e.__data__,r,u)}:(n=+n,function(e){e.__transition__[t].delay=n}))},Rs.duration=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].duration:P(this,"function"==typeof n?function(e,r,u){e.__transition__[t].duration=Math.max(1,n.call(e,e.__data__,r,u))}:(n=Math.max(1,n),function(e){e.__transition__[t].duration=n}))},Rs.each=function(n,t){var e=this.id;if(arguments.length<2){var r=Ts,u=Ls;Ls=e,P(this,function(t,r,u){Ts=t.__transition__[e],n.call(t,t.__data__,r,u)}),Ts=r,Ls=u}else P(this,function(r){var u=r.__transition__[e];(u.event||(u.event=Go.dispatch("start","end"))).on(n,t)});return this},Rs.transition=function(){for(var n,t,e,r,u=this.id,i=++Ds,o=[],a=0,c=this.length;c>a;a++){o.push(n=[]);for(var t=this[a],s=0,l=t.length;l>s;s++)(e=t[s])&&(r=Object.create(e.__transition__[u]),r.delay+=r.duration,Yo(e,s,i,r)),n.push(e)}return Fo(o,i)},Go.svg.axis=function(){function n(n){n.each(function(){var n,s=Go.select(this),l=this.__chart__||e,f=this.__chart__=e.copy(),h=null==c?f.ticks?f.ticks.apply(f,a):f.domain():c,g=null==t?f.tickFormat?f.tickFormat.apply(f,a):At:t,p=s.selectAll(".tick").data(h,f),v=p.enter().insert("g",".domain").attr("class","tick").style("opacity",Ta),d=Go.transition(p.exit()).style("opacity",Ta).remove(),m=Go.transition(p.order()).style("opacity",1),y=Hi(f),x=s.selectAll(".domain").data([0]),M=(x.enter().append("path").attr("class","domain"),Go.transition(x));v.append("line"),v.append("text");var _=v.select("line"),b=m.select("line"),w=p.select("text").text(g),S=v.select("text"),k=m.select("text");switch(r){case"bottom":n=Zo,_.attr("y2",u),S.attr("y",Math.max(u,0)+o),b.attr("x2",0).attr("y2",u),k.attr("x",0).attr("y",Math.max(u,0)+o),w.attr("dy",".71em").style("text-anchor","middle"),M.attr("d","M"+y[0]+","+i+"V0H"+y[1]+"V"+i);break;case"top":n=Zo,_.attr("y2",-u),S.attr("y",-(Math.max(u,0)+o)),b.attr("x2",0).attr("y2",-u),k.attr("x",0).attr("y",-(Math.max(u,0)+o)),w.attr("dy","0em").style("text-anchor","middle"),M.attr("d","M"+y[0]+","+-i+"V0H"+y[1]+"V"+-i);break;case"left":n=Vo,_.attr("x2",-u),S.attr("x",-(Math.max(u,0)+o)),b.attr("x2",-u).attr("y2",0),k.attr("x",-(Math.max(u,0)+o)).attr("y",0),w.attr("dy",".32em").style("text-anchor","end"),M.attr("d","M"+-i+","+y[0]+"H0V"+y[1]+"H"+-i);break;case"right":n=Vo,_.attr("x2",u),S.attr("x",Math.max(u,0)+o),b.attr("x2",u).attr("y2",0),k.attr("x",Math.max(u,0)+o).attr("y",0),w.attr("dy",".32em").style("text-anchor","start"),M.attr("d","M"+i+","+y[0]+"H0V"+y[1]+"H"+i)}if(f.rangeBand){var E=f,A=E.rangeBand()/2;l=f=function(n){return E(n)+A}}else l.rangeBand?l=f:d.call(n,f);v.call(n,l),m.call(n,f)})}var t,e=Go.scale.linear(),r=Ps,u=6,i=6,o=3,a=[10],c=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Us?t+"":Ps,n):r},n.ticks=function(){return arguments.length?(a=arguments,n):a},n.tickValues=function(t){return arguments.length?(c=t,n):c},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(u=+t,i=+arguments[e-1],n):u},n.innerTickSize=function(t){return arguments.length?(u=+t,n):u},n.outerTickSize=function(t){return arguments.length?(i=+t,n):i},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(){return arguments.length&&n},n};var Ps="bottom",Us={top:1,right:1,bottom:1,left:1};Go.svg.brush=function(){function n(i){i.each(function(){var i=Go.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",u).on("touchstart.brush",u),o=i.selectAll(".background").data([0]);o.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),i.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var a=i.selectAll(".resize").data(p,At);a.exit().remove(),a.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return js[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),a.style("display",n.empty()?"none":null);var l,f=Go.transition(i),h=Go.transition(o);c&&(l=Hi(c),h.attr("x",l[0]).attr("width",l[1]-l[0]),e(f)),s&&(l=Hi(s),h.attr("y",l[0]).attr("height",l[1]-l[0]),r(f)),t(f)})}function t(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+l[+/e$/.test(n)]+","+f[+/^s/.test(n)]+")"})}function e(n){n.select(".extent").attr("x",l[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",l[1]-l[0])}function r(n){n.select(".extent").attr("y",f[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",f[1]-f[0])}function u(){function u(){32==Go.event.keyCode&&(C||(x=null,L[0]-=l[1],L[1]-=f[1],C=2),y())}function p(){32==Go.event.keyCode&&2==C&&(L[0]+=l[1],L[1]+=f[1],C=0,y())}function v(){var n=Go.mouse(_),u=!1;M&&(n[0]+=M[0],n[1]+=M[1]),C||(Go.event.altKey?(x||(x=[(l[0]+l[1])/2,(f[0]+f[1])/2]),L[0]=l[+(n[0]<x[0])],L[1]=f[+(n[1]<x[1])]):x=null),E&&d(n,c,0)&&(e(S),u=!0),A&&d(n,s,1)&&(r(S),u=!0),u&&(t(S),w({type:"brush",mode:C?"move":"resize"}))}function d(n,t,e){var r,u,a=Hi(t),c=a[0],s=a[1],p=L[e],v=e?f:l,d=v[1]-v[0];return C&&(c-=p,s-=d+p),r=(e?g:h)?Math.max(c,Math.min(s,n[e])):n[e],C?u=(r+=p)+d:(x&&(p=Math.max(c,Math.min(s,2*x[e]-r))),r>p?(u=r,r=p):u=p),v[0]!=r||v[1]!=u?(e?o=null:i=null,v[0]=r,v[1]=u,!0):void 0}function m(){v(),S.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),Go.select("body").style("cursor",null),T.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),N(),w({type:"brushend"})}var x,M,_=this,b=Go.select(Go.event.target),w=a.of(_,arguments),S=Go.select(_),k=b.datum(),E=!/^(n|s)$/.test(k)&&c,A=!/^(e|w)$/.test(k)&&s,C=b.classed("extent"),N=Y(),L=Go.mouse(_),T=Go.select(ea).on("keydown.brush",u).on("keyup.brush",p);if(Go.event.changedTouches?T.on("touchmove.brush",v).on("touchend.brush",m):T.on("mousemove.brush",v).on("mouseup.brush",m),S.interrupt().selectAll("*").interrupt(),C)L[0]=l[0]-L[0],L[1]=f[0]-L[1];else if(k){var q=+/w$/.test(k),z=+/^n/.test(k);M=[l[1-q]-L[0],f[1-z]-L[1]],L[0]=l[q],L[1]=f[z]}else Go.event.altKey&&(x=L.slice());S.style("pointer-events","none").selectAll(".resize").style("display",null),Go.select("body").style("cursor",b.style("cursor")),w({type:"brushstart"}),v()}var i,o,a=M(n,"brushstart","brush","brushend"),c=null,s=null,l=[0,0],f=[0,0],h=!0,g=!0,p=Hs[0];return n.event=function(n){n.each(function(){var n=a.of(this,arguments),t={x:l,y:f,i:i,j:o},e=this.__chart__||t;this.__chart__=t,Ls?Go.select(this).transition().each("start.brush",function(){i=e.i,o=e.j,l=e.x,f=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=mu(l,t.x),r=mu(f,t.y);return i=o=null,function(u){l=t.x=e(u),f=t.y=r(u),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){i=t.i,o=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,p=Hs[!c<<1|!s],n):c},n.y=function(t){return arguments.length?(s=t,p=Hs[!c<<1|!s],n):s},n.clamp=function(t){return arguments.length?(c&&s?(h=!!t[0],g=!!t[1]):c?h=!!t:s&&(g=!!t),n):c&&s?[h,g]:c?h:s?g:null},n.extent=function(t){var e,r,u,a,h;return arguments.length?(c&&(e=t[0],r=t[1],s&&(e=e[0],r=r[0]),i=[e,r],c.invert&&(e=c(e),r=c(r)),e>r&&(h=e,e=r,r=h),(e!=l[0]||r!=l[1])&&(l=[e,r])),s&&(u=t[0],a=t[1],c&&(u=u[1],a=a[1]),o=[u,a],s.invert&&(u=s(u),a=s(a)),u>a&&(h=u,u=a,a=h),(u!=f[0]||a!=f[1])&&(f=[u,a])),n):(c&&(i?(e=i[0],r=i[1]):(e=l[0],r=l[1],c.invert&&(e=c.invert(e),r=c.invert(r)),e>r&&(h=e,e=r,r=h))),s&&(o?(u=o[0],a=o[1]):(u=f[0],a=f[1],s.invert&&(u=s.invert(u),a=s.invert(a)),u>a&&(h=u,u=a,a=h))),c&&s?[[e,u],[r,a]]:c?[e,r]:s&&[u,a])},n.clear=function(){return n.empty()||(l=[0,0],f=[0,0],i=o=null),n},n.empty=function(){return!!c&&l[0]==l[1]||!!s&&f[0]==f[1]},Go.rebind(n,a,"on")};var js={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Hs=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Fs=ic.format=fc.timeFormat,Os=Fs.utc,Is=Os("%Y-%m-%dT%H:%M:%S.%LZ");Fs.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?$o:Is,$o.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},$o.toString=Is.toString,ic.second=Ht(function(n){return new oc(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),ic.seconds=ic.second.range,ic.seconds.utc=ic.second.utc.range,ic.minute=Ht(function(n){return new oc(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),ic.minutes=ic.minute.range,ic.minutes.utc=ic.minute.utc.range,ic.hour=Ht(function(n){var t=n.getTimezoneOffset()/60;return new oc(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),ic.hours=ic.hour.range,ic.hours.utc=ic.hour.utc.range,ic.month=Ht(function(n){return n=ic.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),ic.months=ic.month.range,ic.months.utc=ic.month.utc.range;var Ys=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Zs=[[ic.second,1],[ic.second,5],[ic.second,15],[ic.second,30],[ic.minute,1],[ic.minute,5],[ic.minute,15],[ic.minute,30],[ic.hour,1],[ic.hour,3],[ic.hour,6],[ic.hour,12],[ic.day,1],[ic.day,2],[ic.week,1],[ic.month,1],[ic.month,3],[ic.year,1]],Vs=Fs.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",Ae]]),$s={range:function(n,t,e){return Go.range(Math.ceil(n/e)*e,+t,e).map(Bo)},floor:At,ceil:At};Zs.year=ic.year,ic.scale=function(){return Xo(Go.scale.linear(),Zs,Vs)};var Xs=Zs.map(function(n){return[n[0].utc,n[1]]}),Bs=Os.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",Ae]]);Xs.year=ic.year.utc,ic.scale.utc=function(){return Xo(Go.scale.linear(),Xs,Bs)},Go.text=Ct(function(n){return n.responseText}),Go.json=function(n,t){return Nt(n,"application/json",Jo,t)},Go.html=function(n,t){return Nt(n,"text/html",Wo,t)},Go.xml=Ct(function(n){return n.responseXML}),"function"==typeof define&&define.amd?define(Go):"object"==typeof module&&module.exports?module.exports=Go:this.d3=Go}();if (typeof(L) !== 'undefined') {
    L.FullCanvas = L.Class.extend({
        initialize: function () {
            this._myCanvas = document.createElement('canvas');
            this._myCanvas.style.position = 'absolute';
            this._myCanvas.style.top = 0;
            this._myCanvas.style.left = 0;
            this._myContext = this._myCanvas.getContext('2d');
        },
        setData: function(data){
            var me = this;
            var bounds = new L.LatLngBounds([-90, -180], [90,180]);
            this._myQuad = new QuadTree(this.boundsToQuery(bounds), false, 10, 10);
            data.forEach(function(d){
                me._myQuad.insert({
                    x: d.slat, //lon
                    y: d.slon,  //lat
                    data: d
                });
                if (d.ty && d.tx){
                    me._myQuad.insert({
                        x: d.tlat, //lon
                        y: d.tlon,  //lat
                        data: d
                    });
                }
            });
        },
        onAdd: function (map) {
            this._myMap = map;
            map._panes.staticPane = map._createPane('leaflet-tile-pane', map._container);
            this._staticPane = map._panes.staticPane
            this._staticPane.appendChild(this._myCanvas);
            map.on('viewreset', this.canvasReset, this);
            map.on('move', this.canvasReset, this);
            map.on('resize', this.canvasReset, this);
            this.canvasReset();
        },
        getCanvas: function () {
            return this._myCanvas;
        },

        getOptions: function () {
            return this.options;
        },
        canvasReset: function(){
            var size = this._myMap.getSize();
            this._myCanvas.width = size.x;
            this._myCanvas.height = size.y;
            this.drawCanvas();
        },
        onRemove: function (map) {
            map._container.removeChild(this._staticPane);
            map.off('viewreset', this.canvasReset, this);
            map.off('move', this.canvasReset, this);
            map.off('resize', this.canvasReset, this);
        },
        addData: function(d) {
            this._myQuad.insert({
                x: d.slat, //lon
                y: d.slon,  //lat
                data: d
            });
            if (d.ty && d.tx){
                this._myQuad.insert({
                    x: d.tlat, //lon
                    y: d.tlon,  //lat
                    data: d
                });
            }
            this.drawCanvas();
        },
        drawCanvas: function() {
            var canvas = this.getCanvas();
            var ctx = canvas.getContext('2d');
            var me = this;
            // clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            var b = this._myMap.getBounds();
            var points = this._myQuad.retrieveInBounds(this.boundsToQuery(b));
            points.forEach(function(point){
                var d = point.data;
                var spoint = me._myMap.latLngToContainerPoint(new L.LatLng(d.slat, d.slon));
                me.drawSource(spoint, ctx, d);
                if (d.tlat && d.tlon){
                    var tpoint = me._myMap.latLngToContainerPoint(new L.LatLng(d.tlat, d.tlon));
                    me.drawTarget(tpoint);
                    me.drawCurve(spoint, tpoint);
                }
            });
        },
        boundsToQuery: function(bounds) {
            return {
                x: bounds.getSouthWest().lat,
                y: bounds.getSouthWest().lng,
                width: bounds.getNorthEast().lat-bounds.getSouthWest().lat,
                height: bounds.getNorthEast().lng-bounds.getSouthWest().lng
            };
        },
        drawSource: function(point, ctx) {
            ctx.beginPath();
            ctx.arc(point.x, point.y , 2, 0, 2 * Math.PI, true);
            ctx.fill();
        },
        drawTarget: function(point) {
            var ctx = this.getCanvas().getContext("2d");
            ctx.beginPath();
            ctx.arc(point.x, point.y , 2, 0, 2 * Math.PI, true);
            ctx.fillStyle = "rgba(0,255,0, 0.5)";
            ctx.fill();
        },

        drawCurve: function(startPoint,endPoint) {
            var context = layer.getCanvas().getContext("2d");
            context.strokeStyle = "rgba(0,0,255, 1)";
            var x = (startPoint.x+endPoint.x)/2;
            var y = (startPoint.y+endPoint.y)/2;
            var le = (endPoint.y - endPoint.y)/(startPoint.x-endPoint.x);
            var angle = Math.atan(le);
            var sx = Math.pow((startPoint.x-endPoint.x),2);
            var sy = Math.pow((endPoint.y - endPoint.y),2);
            var d = Math.sqrt(sx+sy)/2;

            var px = x- d*Math.sin(angle);
            var py = y+d*Math.cos(angle);
            context.moveTo(startPoint.x, startPoint.y);
            context.quadraticCurveTo(px,py,endPoint.x,endPoint.y);
            context.stroke();
        }
    });

}
/*
 The MIT License

 Copyright (c) 2011 Mike Chambers

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */

/*
 From https://github.com/jsmarkus/ExamplesByMesh/tree/master/JavaScript/QuadTree, slightly modified
 */


/**
 * A QuadTree implementation in JavaScript, a 2d spatial subdivision algorithm.
 * @module QuadTree
 **/

(function(window) {

    /****************** QuadTree ****************/

    /**
     * QuadTree data structure.
     * @class QuadTree
     * @constructor
     * @param {Object} An object representing the bounds of the top level of the QuadTree. The object
     * should contain the following properties : x, y, width, height
     * @param {Boolean} pointQuad Whether the QuadTree will contain points (true), or items with bounds
     * (width / height)(false). Default value is false.
     * @param {Number} maxDepth The maximum number of levels that the quadtree will create. Default is 4.
     * @param {Number} maxChildren The maximum number of children that a node can contain before it is split into sub-nodes.
     **/
    function QuadTree(bounds, pointQuad, maxDepth, maxChildren)
    {
        var node;
        if(pointQuad)
        {

            node = new Node(bounds, 0, maxDepth, maxChildren);
        }
        else
        {
            node = new BoundsNode(bounds, 0, maxDepth, maxChildren);
        }

        this.root = node;
    }

    /**
     * The root node of the QuadTree which covers the entire area being segmented.
     * @property root
     * @type Node
     **/
    QuadTree.prototype.root = null;


    /**
     * Inserts an item into the QuadTree.
     * @method insert
     * @param {Object|Array} item The item or Array of items to be inserted into the QuadTree. The item should expose x, y
     * properties that represents its position in 2D space.
     **/
    QuadTree.prototype.insert = function(item)
    {
        if(item instanceof Array)
        {
            var len = item.length;

            for(var i = 0; i < len; i++)
            {
                this.root.insert(item[i]);
            }
        }
        else
        {
            this.root.insert(item);
        }
    };

    /**
     * Clears all nodes and children from the QuadTree
     * @method clear
     **/
    QuadTree.prototype.clear = function()
    {
        this.root.clear();
    };

    /**
     * Retrieves all items / points in the same node as the specified item / point. If the specified item
     * overlaps the bounds of a node, then all children in both nodes will be returned.
     * @method retrieve
     * @param {Object} item An object representing a 2D coordinate point (with x, y properties), or a shape
     * with dimensions (x, y, width, height) properties.
     **/
    QuadTree.prototype.retrieve = function(item)
    {
        //get a copy of the array of items
        var out = this.root.retrieve(item).slice(0);
        //return QuadTree._filterResults(out, {x:item.x, y:item.y, width:0, height:0});
        return out;
    };

    QuadTree.prototype.retrieveInBounds = function (bounds)
    {
        var treeResult = this.root.retrieveInBounds(bounds);
        return QuadTree._filterResults(treeResult, bounds);
    };

    QuadTree._filterResults = function(treeResult, bounds)
    {
        var filteredResult = [];

        if(this.root instanceof BoundsNode)
        {
            for (var i=0; i < treeResult.length; i++)
            {
                var node = treeResult[i];
                if (QuadTree._isBoundOverlappingBound(node, bounds))
                {
                    filteredResult.push(node);
                }
            }
        }
        else
        {
            treeResult.forEach(function(node){
                if(QuadTree._isPointInsideBounds(node, bounds))
                {
                    filteredResult.push(node);
                }
            });
        }

        return filteredResult;
    };

    QuadTree._isPointInsideBounds = function (point, bounds)
    {
        return (
            (point.x >= bounds.x) &&
                (point.x <= bounds.x + bounds.width) &&
                (point.y >= bounds.y) &&
                (point.y <= bounds.y + bounds.height)
            );
    };


    QuadTree._isBoundOverlappingBound = function (b1, b2)
    {
        return !(
            b1.x > (b2.x + b2.width)  ||
                b2.x > (b1.x + b1.width)  ||
                b1.y > (b2.y + b2.height) ||
                b2.y > (b1.y + b1.height)
            );
    };

    /************** Node ********************/


    function Node(bounds, depth, maxDepth, maxChildren)
    {
        this._bounds = bounds;
        this.children = [];
        this.nodes = [];

        if(maxChildren)
        {
            this._maxChildren = maxChildren;

        }

        if(maxDepth)
        {
            this._maxDepth = maxDepth;
        }

        if(depth)
        {
            this._depth = depth;
        }
    };

//subnodes
    Node.prototype.nodes = null;
    Node.prototype._classConstructor = Node;

//children contained directly in the node
    Node.prototype.children = null;
    Node.prototype._bounds = null;

//read only
    Node.prototype._depth = 0;

    Node.prototype._maxChildren = 4;
    Node.prototype._maxDepth = 4;

    Node.TOP_LEFT = 0;
    Node.TOP_RIGHT = 1;
    Node.BOTTOM_LEFT = 2;
    Node.BOTTOM_RIGHT = 3;


    Node.prototype.insert = function(item)
    {
        if(this.nodes.length)
        {
            var index = this._findIndex(item);

            this.nodes[index].insert(item);

            return;
        }

        this.children.push(item);

        var len = this.children.length;
        if(!(this._depth >= this._maxDepth) &&
            len > this._maxChildren)
        {
            this.subdivide();

            for(var i = 0; i < len; i++)
            {
                this.insert(this.children[i]);
            }

            this.children.length = 0;
        }
    };

    Node.prototype.retrieve = function(item)
    {
        if(this.nodes.length)
        {
            var index = this._findIndex(item);

            return this.nodes[index].retrieve(item);
        }

        return this.children;
    };

    Node.prototype.retrieveInBounds = function(bounds)
    {
        var result = [];

        if(this.collidesWith(bounds))
        {
            result = result.concat(this._stuckChildren);

            if(this.children.length)
            {
                result = result.concat(this.children);
            }
            else
            {
                if(this.nodes.length)
                {
                    for (var i = 0; i < this.nodes.length; i++)
                    {
                        result = result.concat(this.nodes[i].retrieveInBounds(bounds));
                    }
                }
            }
        }

        return result;
    };


    Node.prototype.collidesWith = function (bounds)
    {
        var b1 = this._bounds;
        var b2 = bounds;

        return !(
            b1.x > (b2.x + b2.width)  ||
                b2.x > (b1.x + b1.width)  ||
                b1.y > (b2.y + b2.height) ||
                b2.y > (b1.y + b1.height)
            );
    };

    Node.prototype._findIndex = function(item)
    {
        var b = this._bounds;
        var left = (item.x > b.x + b.width / 2)? false : true;
        var top = (item.y > b.y + b.height / 2)? false : true;

        //top left
        var index = Node.TOP_LEFT;
        if(left)
        {
            //left side
            if(!top)
            {
                //bottom left
                index = Node.BOTTOM_LEFT;
            }
        }
        else
        {
            //right side
            if(top)
            {
                //top right
                index = Node.TOP_RIGHT;
            }
            else
            {
                //bottom right
                index = Node.BOTTOM_RIGHT;
            }
        }

        return index;
    };


    Node.prototype.subdivide = function()
    {
        var depth = this._depth + 1;

        var bx = this._bounds.x;
        var by = this._bounds.y;

        //floor the values
        var b_w_h = (this._bounds.width / 2)|0;
        var b_h_h = (this._bounds.height / 2)|0;
        var bx_b_w_h = bx + b_w_h;
        var by_b_h_h = by + b_h_h;

        //top left
        this.nodes[Node.TOP_LEFT] = new this._classConstructor({
                x:bx,
                y:by,
                width:b_w_h,
                height:b_h_h
            },
            depth, this._maxDepth, this._maxChildren);

        //top right
        this.nodes[Node.TOP_RIGHT] = new this._classConstructor({
                x:bx_b_w_h,
                y:by,
                width:b_w_h,
                height:b_h_h
            },
            depth, this._maxDepth, this._maxChildren);

        //bottom left
        this.nodes[Node.BOTTOM_LEFT] = new this._classConstructor({
                x:bx,
                y:by_b_h_h,
                width:b_w_h,
                height:b_h_h
            },
            depth, this._maxDepth, this._maxChildren);


        //bottom right
        this.nodes[Node.BOTTOM_RIGHT] = new this._classConstructor({
                x:bx_b_w_h,
                y:by_b_h_h,
                width:b_w_h,
                height:b_h_h
            },
            depth, this._maxDepth, this._maxChildren);
    };

    Node.prototype.clear = function()
    {
        this.children.length = 0;

        var len = this.nodes.length;
        for(var i = 0; i < len; i++)
        {
            this.nodes[i].clear();
        }

        this.nodes.length = 0;
    };


    /******************** BoundsQuadTree ****************/

    function BoundsNode(bounds, depth, maxChildren, maxDepth)
    {
        Node.call(this, bounds, depth, maxChildren, maxDepth);
        this._stuckChildren = [];
    }

    BoundsNode.prototype = new Node();
    BoundsNode.prototype._classConstructor = BoundsNode;
    BoundsNode.prototype._stuckChildren = null;

//we use this to collect and conctenate items being retrieved. This way
//we dont have to continuously create new Array instances.
//Note, when returned from QuadTree.retrieve, we then copy the array
    BoundsNode.prototype._out = [];

    BoundsNode.prototype.insert = function(item)
    {
        if(this.nodes.length)
        {
            var index = this._findIndex(item);
            var node = this.nodes[index];

            //todo: make _bounds bounds
            if(item.x >= node._bounds.x &&
                item.x + item.width <= node._bounds.x + node._bounds.width &&
                item.y >= node._bounds.y &&
                item.y + item.height <= node._bounds.y + node._bounds.height)
            {
                this.nodes[index].insert(item);
            }
            else
            {
                this._stuckChildren.push(item);
            }

            return;
        }

        this.children.push(item);

        var len = this.children.length;

        if(this._depth < this._maxDepth &&
            len > this._maxChildren)
        {
            this.subdivide();

            for(var i = 0; i < len; i++)
            {
                this.insert(this.children[i]);
            }

            this.children.length = 0;
        }
    };

    BoundsNode.prototype.getChildren = function()
    {
        return this.children.concat(this._stuckChildren);
    };

    BoundsNode.prototype.retrieve = function(item)
    {
        var out = this._out;
        out.length = 0;
        if(this.nodes.length)
        {
            var index = this._findIndex(item);

            out.push.apply(out, this.nodes[index].retrieve(item));
        }

        out.push.apply(out, this._stuckChildren);
        out.push.apply(out, this.children);

        return out;
    };

    BoundsNode.prototype.clear = function()
    {

        this._stuckChildren.length = 0;

        //array
        this.children.length = 0;

        var len = this.nodes.length;

        if(!len)
        {
            return;
        }

        for(var i = 0; i < len; i++)
        {
            this.nodes[i].clear();
        }

        //array
        this.nodes.length = 0;

        //we could call the super clear function but for now, im just going to inline it
        //call the hidden super.clear, and make sure its called with this = this instance
        //Object.getPrototypeOf(BoundsNode.prototype).clear.call(this);
    };

//BoundsNode.prototype.getChildCount

    window.QuadTree = QuadTree;

    /*
     //http://ejohn.org/blog/objectgetprototypeof/
     if ( typeof Object.getPrototypeOf !== "function" ) {
     if ( typeof "test".__proto__ === "object" ) {
     Object.getPrototypeOf = function(object){
     return object.__proto__;
     };
     } else {
     Object.getPrototypeOf = function(object){
     // May break if the constructor has been tampered with
     return object.constructor.prototype;
     };
     }
     }
     */

}(this));
