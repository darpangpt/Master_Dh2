

/*===============================
/media/jui/js/jquery.min.js
================================================================================*/;
/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){var n=[],r=e.document,i=n.slice,o=n.concat,a=n.push,s=n.indexOf,u={},l=u.toString,c=u.hasOwnProperty,f={},d=function(e,t){return new d.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,h=/^-ms-/,g=/-([\da-z])/gi,m=function(e,t){return t.toUpperCase()};function v(e){var t=!!e&&"length"in e&&e.length,n=d.type(e);return"function"!==n&&!d.isWindow(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}d.fn=d.prototype={jquery:"1.12.4",constructor:d,selector:"",length:0,toArray:function(){return i.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:i.call(this)},pushStack:function(e){var t=d.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e){return d.each(this,e)},map:function(e){return this.pushStack(d.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(i.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:a,sort:n.sort,splice:n.splice},d.extend=d.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||d.isFunction(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(i=arguments[s]))for(r in i)e=a[r],n=i[r],"__proto__"!==r&&a!==n&&(l&&n&&(d.isPlainObject(n)||(t=d.isArray(n)))?(t?(t=!1,o=e&&d.isArray(e)?e:[]):o=e&&d.isPlainObject(e)?e:{},a[r]=d.extend(l,o,n)):void 0!==n&&(a[r]=n));return a},d.extend({expando:"jQuery"+("1.12.4"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===d.type(e)},isArray:Array.isArray||function(e){return"array"===d.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){var t=e&&e.toString();return!d.isArray(e)&&t-parseFloat(t)+1>=0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},isPlainObject:function(e){var t;if(!e||"object"!==d.type(e)||e.nodeType||d.isWindow(e))return!1;try{if(e.constructor&&!c.call(e,"constructor")&&!c.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}if(!f.ownFirst)for(t in e)return c.call(e,t);for(t in e);return void 0===t||c.call(e,t)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?u[l.call(e)]||"object":typeof e},globalEval:function(t){t&&d.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(h,"ms-").replace(g,m)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t){var n,r=0;if(v(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(v(Object(e))?d.merge(n,"string"==typeof e?[e]:e):a.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(s)return s.call(t,e,n);for(r=t.length,n=n?n<0?Math.max(0,r+n):n:0;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;)e[i++]=t[r++];if(n!=n)for(;void 0!==t[r];)e[i++]=t[r++];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,a=0,s=[];if(v(e))for(r=e.length;a<r;a++)null!=(i=t(e[a],a,n))&&s.push(i);else for(a in e)null!=(i=t(e[a],a,n))&&s.push(i);return o.apply([],s)},guid:1,proxy:function(e,t){var n,r,o;if("string"==typeof t&&(o=e[t],t=e,e=o),d.isFunction(e))return n=i.call(arguments,2),(r=function(){return e.apply(t||this,n.concat(i.call(arguments)))}).guid=e.guid=e.guid||d.guid++,r},now:function(){return+new Date},support:f}),"function"==typeof Symbol&&(d.fn[Symbol.iterator]=n[Symbol.iterator]),d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){u["[object "+t+"]"]=t.toLowerCase()});var y=function(e){var t,n,r,i,o,a,s,u,l,c,f,d,p,h,g,m,v,y,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=oe(),N=oe(),k=oe(),S=function(e,t){return e===t&&(f=!0),0},A=1<<31,D={}.hasOwnProperty,j=[],L=j.pop,H=j.push,q=j.push,_=j.slice,F=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},M="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",O="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",P="\\["+O+"*("+R+")(?:"+O+"*([*^$|!~]?=)"+O+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+O+"*\\]",B=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",W=new RegExp(O+"+","g"),I=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),$=new RegExp("^"+O+"*,"+O+"*"),z=new RegExp("^"+O+"*([>+~]|"+O+")"+O+"*"),X=new RegExp("="+O+"*([^\\]'\"]*?)"+O+"*\\]","g"),U=new RegExp(B),V=new RegExp("^"+R+"$"),Y={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+B),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),bool:new RegExp("^(?:"+M+")$","i"),needsContext:new RegExp("^"+O+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)","i")},J=/^(?:input|select|textarea|button)$/i,G=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/[+~]/,ee=/'|\\/g,te=new RegExp("\\\\([\\da-f]{1,6}"+O+"?|("+O+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=function(){d()};try{q.apply(j=_.call(w.childNodes),w.childNodes),j[w.childNodes.length].nodeType}catch(e){q={apply:j.length?function(e,t){H.apply(e,_.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function ie(e,t,r,i){var o,s,l,c,f,h,v,y,T=t&&t.ownerDocument,C=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==C&&9!==C&&11!==C)return r;if(!i&&((t?t.ownerDocument||t:w)!==p&&d(t),t=t||p,g)){if(11!==C&&(h=K.exec(e)))if(o=h[1]){if(9===C){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(T&&(l=T.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(h[2])return q.apply(r,t.getElementsByTagName(e)),r;if((o=h[3])&&n.getElementsByClassName&&t.getElementsByClassName)return q.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!k[e+" "]&&(!m||!m.test(e))){if(1!==C)T=t,y=e;else if("object"!==t.nodeName.toLowerCase()){for((c=t.getAttribute("id"))?c=c.replace(ee,"\\$&"):t.setAttribute("id",c=b),s=(v=a(e)).length,f=V.test(c)?"#"+c:"[id='"+c+"']";s--;)v[s]=f+" "+ge(v[s]);y=v.join(","),T=Z.test(e)&&pe(t.parentNode)||t}if(y)try{return q.apply(r,T.querySelectorAll(y)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(I,"$1"),t,r,i)}function oe(){var e=[];return function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}}function ae(e){return e[b]=!0,e}function se(e){var t=p.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ue(e,t){for(var n=e.split("|"),i=n.length;i--;)r.attrHandle[n[i]]=t}function le(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||A)-(~e.sourceIndex||A);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function ce(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function fe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return ae(function(t){return t=+t,ae(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function pe(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=ie.support={},o=ie.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},d=ie.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==p&&9===a.nodeType&&a.documentElement?(h=(p=a).documentElement,g=!o(p),(i=p.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=se(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=se(function(e){return e.appendChild(p.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(p.getElementsByClassName),n.getById=se(function(e){return h.appendChild(e).id=b,!p.getElementsByName||!p.getElementsByName(b).length}),n.getById?(r.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}},r.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}}):(delete r.find.ID,r.filter.ID=function(e){var t=e.replace(te,ne);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),r.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],m=[],(n.qsa=Q.test(p.querySelectorAll))&&(se(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+O+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||m.push("\\["+O+"*(?:value|"+M+")"),e.querySelectorAll("[id~="+b+"-]").length||m.push("~="),e.querySelectorAll(":checked").length||m.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||m.push(".#.+[+~]")}),se(function(e){var t=p.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&m.push("name"+O+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||m.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),m.push(",.*:")})),(n.matchesSelector=Q.test(y=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&se(function(e){n.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),v.push("!=",B)}),m=m.length&&new RegExp(m.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},S=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===p||e.ownerDocument===w&&x(w,e)?-1:t===p||t.ownerDocument===w&&x(w,t)?1:c?F(c,e)-F(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===p?-1:t===p?1:i?-1:o?1:c?F(c,e)-F(c,t):0;if(i===o)return le(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)s.unshift(n);for(;a[r]===s[r];)r++;return r?le(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},p):p},ie.matches=function(e,t){return ie(e,null,null,t)},ie.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&d(e),t=t.replace(X,"='$1']"),n.matchesSelector&&g&&!k[t+" "]&&(!v||!v.test(t))&&(!m||!m.test(t)))try{var r=y.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return ie(t,p,null,[e]).length>0},ie.contains=function(e,t){return(e.ownerDocument||e)!==p&&d(e),x(e,t)},ie.attr=function(e,t){(e.ownerDocument||e)!==p&&d(e);var i=r.attrHandle[t.toLowerCase()],o=i&&D.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},ie.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ie.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(S),f){for(;t=e[o++];)t===e[o]&&(i=r.push(o));for(;i--;)e.splice(r[i],1)}return c=null,e},i=ie.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=i(t);return n},(r=ie.selectors={cacheLength:50,createPseudo:ae,match:Y,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ie.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ie.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return Y.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&U.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ie.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(W," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,d,p,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!u&&!s,x=!1;if(m){if(o){for(;g;){for(d=t;d=d[g];)if(s?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&y){for(x=(p=(l=(c=(f=(d=m)[b]||(d[b]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],d=p&&m.childNodes[p];d=++p&&d&&d[g]||(x=p=0)||h.pop();)if(1===d.nodeType&&++x&&d===t){c[e]=[T,p,x];break}}else if(y&&(x=p=(l=(c=(f=(d=t)[b]||(d[b]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)for(;(d=++p&&d&&d[g]||(x=p=0)||h.pop())&&((s?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++x||(y&&((c=(f=d[b]||(d[b]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]=[T,x]),d!==t)););return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||ie.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?ae(function(e,n){for(var r,o=i(e,t),a=o.length;a--;)e[r=F(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:ae(function(e){var t=[],n=[],r=s(e.replace(I,"$1"));return r[b]?ae(function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:ae(function(e){return function(t){return ie(e,t).length>0}}),contains:ae(function(e){return e=e.replace(te,ne),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:ae(function(e){return V.test(e||"")||ie.error("unsupported lang: "+e),e=e.replace(te,ne).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return G.test(e.nodeName)},input:function(e){return J.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:de(function(){return[0]}),last:de(function(e,t){return[t-1]}),eq:de(function(e,t,n){return[n<0?n+t:n]}),even:de(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:de(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:de(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:de(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=ce(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=fe(t);function he(){}function ge(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=C++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,u,l,c=[T,o];if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if((s=(u=(l=t[b]||(t[b]={}))[t.uniqueID]||(l[t.uniqueID]={}))[r])&&s[0]===T&&s[1]===o)return c[2]=s[2];if(u[r]=c,c[2]=e(t,n,a))return!0}}}function ve(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function ye(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function xe(e,t,n,r,i,o){return r&&!r[b]&&(r=xe(r)),i&&!i[b]&&(i=xe(i,o)),ae(function(o,a,s,u){var l,c,f,d=[],p=[],h=a.length,g=o||function(e,t,n){for(var r=0,i=t.length;r<i;r++)ie(e,t[r],n);return n}(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:ye(g,d,e,s,u),v=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,v,s,u),r)for(l=ye(v,p),r(l,[],s,u),c=l.length;c--;)(f=l[c])&&(v[p[c]]=!(m[p[c]]=f));if(o){if(i||e){if(i){for(l=[],c=v.length;c--;)(f=v[c])&&l.push(m[c]=f);i(null,v=[],l,u)}for(c=v.length;c--;)(f=v[c])&&(l=i?F(o,f):d[c])>-1&&(o[l]=!(a[l]=f))}}else v=ye(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):q.apply(a,v)})}function be(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return F(t,e)>-1},s,!0),d=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])d=[me(ve(d),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o&&!r.relative[e[i].type];i++);return xe(u>1&&ve(d),u>1&&ge(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(I,"$1"),n,u<i&&be(e.slice(u,i)),i<o&&be(e=e.slice(i)),i<o&&ge(e))}d.push(n)}return ve(d)}return he.prototype=r.filters=r.pseudos,r.setFilters=new he,a=ie.tokenize=function(e,t){var n,i,o,a,s,u,l,c=N[e+" "];if(c)return t?0:c.slice(0);for(s=e,u=[],l=r.preFilter;s;){for(a in n&&!(i=$.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=z.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(I," ")}),s=s.slice(n.length)),r.filter)!(i=Y[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?ie.error(e):N(e,u).slice(0)},s=ie.compile=function(e,t){var n,i=[],o=[],s=k[e+" "];if(!s){for(t||(t=a(e)),n=t.length;n--;)(s=be(t[n]))[b]?i.push(s):o.push(s);(s=k(e,function(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,m,v=0,y="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,N=C.length;for(c&&(l=a===p||a||c);y!==N&&null!=(f=C[y]);y++){if(i&&f){for(h=0,a||f.ownerDocument===p||(d(f),s=!g);m=e[h++];)if(m(f,a||p,s)){u.push(f);break}c&&(T=E)}n&&((f=!m&&f)&&v--,o&&x.push(f))}if(v+=y,n&&y!==v){for(h=0;m=t[h++];)m(x,b,a,s);if(o){if(v>0)for(;y--;)x[y]||b[y]||(b[y]=L.call(u));b=ye(b)}q.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&ie.uniqueSort(u)}return c&&(T=E,l=w),x};return n?ae(o):o}(o,i))).selector=e}return s},u=ie.select=function(e,t,i,o){var u,l,c,f,d,p="function"==typeof e&&e,h=!o&&a(e=p.selector||e);if(i=i||[],1===h.length){if((l=h[0]=h[0].slice(0)).length>2&&"ID"===(c=l[0]).type&&n.getById&&9===t.nodeType&&g&&r.relative[l[1].type]){if(!(t=(r.find.ID(c.matches[0].replace(te,ne),t)||[])[0]))return i;p&&(t=t.parentNode),e=e.slice(l.shift().value.length)}for(u=Y.needsContext.test(e)?0:l.length;u--&&(c=l[u],!r.relative[f=c.type]);)if((d=r.find[f])&&(o=d(c.matches[0].replace(te,ne),Z.test(l[0].type)&&pe(t.parentNode)||t))){if(l.splice(u,1),!(e=o.length&&ge(l)))return q.apply(i,o),i;break}}return(p||s(e,h))(o,t,!g,i,!t||Z.test(e)&&pe(t.parentNode)||t),i},n.sortStable=b.split("").sort(S).join("")===b,n.detectDuplicates=!!f,d(),n.sortDetached=se(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),se(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ue("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&se(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ue("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),se(function(e){return null==e.getAttribute("disabled")})||ue(M,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),ie}(e);d.find=y,d.expr=y.selectors,d.expr[":"]=d.expr.pseudos,d.uniqueSort=d.unique=y.uniqueSort,d.text=y.getText,d.isXMLDoc=y.isXML,d.contains=y.contains;var x=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&d(e).is(n))break;r.push(e)}return r},b=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},w=d.expr.match.needsContext,T=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,C=/^.[^:#\[\.,]*$/;function E(e,t,n){if(d.isFunction(t))return d.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return d.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(C.test(t))return d.filter(t,e,n);t=d.filter(t,e)}return d.grep(e,function(e){return d.inArray(e,t)>-1!==n})}d.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?d.find.matchesSelector(r,e)?[r]:[]:d.find.matches(e,d.grep(t,function(e){return 1===e.nodeType}))},d.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(d(e).filter(function(){for(t=0;t<i;t++)if(d.contains(r[t],this))return!0}));for(t=0;t<i;t++)d.find(e,r[t],n);return(n=this.pushStack(i>1?d.unique(n):n)).selector=this.selector?this.selector+" "+e:e,n},filter:function(e){return this.pushStack(E(this,e||[],!1))},not:function(e){return this.pushStack(E(this,e||[],!0))},is:function(e){return!!E(this,"string"==typeof e&&w.test(e)?d(e):e||[],!1).length}});var N,k=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(d.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||N,"string"==typeof e){if(!(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:k.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof d?t[0]:t,d.merge(this,d.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),T.test(i[1])&&d.isPlainObject(t))for(i in t)d.isFunction(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}if((o=r.getElementById(i[2]))&&o.parentNode){if(o.id!==i[2])return N.find(e);this.length=1,this[0]=o}return this.context=r,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):d.isFunction(e)?void 0!==n.ready?n.ready(e):e(d):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),d.makeArray(e,this))}).prototype=d.fn,N=d(r);var S=/^(?:parents|prev(?:Until|All))/,A={children:!0,contents:!0,next:!0,prev:!0};function D(e,t){do{e=e[t]}while(e&&1!==e.nodeType);return e}d.fn.extend({has:function(e){var t,n=d(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(d.contains(this,n[t]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=w.test(e)||"string"!=typeof e?d(e,t||this.context):0;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&d.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?d.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?d.inArray(this[0],d(e)):d.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(d.uniqueSort(d.merge(this.get(),d(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),d.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x(e,"parentNode")},parentsUntil:function(e,t,n){return x(e,"parentNode",n)},next:function(e){return D(e,"nextSibling")},prev:function(e){return D(e,"previousSibling")},nextAll:function(e){return x(e,"nextSibling")},prevAll:function(e){return x(e,"previousSibling")},nextUntil:function(e,t,n){return x(e,"nextSibling",n)},prevUntil:function(e,t,n){return x(e,"previousSibling",n)},siblings:function(e){return b((e.parentNode||{}).firstChild,e)},children:function(e){return b(e.firstChild)},contents:function(e){return d.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:d.merge([],e.childNodes)}},function(e,t){d.fn[e]=function(n,r){var i=d.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=d.filter(r,i)),this.length>1&&(A[e]||(i=d.uniqueSort(i)),S.test(e)&&(i=i.reverse())),this.pushStack(i)}});var j,L,H=/\S+/g;function q(){r.addEventListener?(r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_)):(r.detachEvent("onreadystatechange",_),e.detachEvent("onload",_))}function _(){(r.addEventListener||"load"===e.event.type||"complete"===r.readyState)&&(q(),d.ready())}for(L in d.Callbacks=function(e){e="string"==typeof e?function(e){var t={};return d.each(e.match(H)||[],function(e,n){t[n]=!0}),t}(e):d.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=e.once,r=t=!0;a.length;s=-1)for(n=a.shift();++s<o.length;)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1);e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){d.each(n,function(n,r){d.isFunction(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==d.type(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return d.each(arguments,function(e,t){for(var n;(n=d.inArray(t,o,n))>-1;)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?d.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=!0,n||l.disable(),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l},d.extend({Deferred:function(e){var t=[["resolve","done",d.Callbacks("once memory"),"resolved"],["reject","fail",d.Callbacks("once memory"),"rejected"],["notify","progress",d.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return d.Deferred(function(n){d.each(t,function(t,o){var a=d.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&d.isFunction(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[o[0]+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?d.extend(e,r):r}},i={};return r.pipe=r.then,d.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,o=0,a=i.call(arguments),s=a.length,u=1!==s||e&&d.isFunction(e.promise)?s:0,l=1===u?e:d.Deferred(),c=function(e,n,r){return function(o){n[e]=this,r[e]=arguments.length>1?i.call(arguments):o,r===t?l.notifyWith(n,r):--u||l.resolveWith(n,r)}};if(s>1)for(t=new Array(s),n=new Array(s),r=new Array(s);o<s;o++)a[o]&&d.isFunction(a[o].promise)?a[o].promise().progress(c(o,n,t)).done(c(o,r,a)).fail(l.reject):--u;return u||l.resolveWith(r,a),l.promise()}}),d.fn.ready=function(e){return d.ready.promise().done(e),this},d.extend({isReady:!1,readyWait:1,holdReady:function(e){e?d.readyWait++:d.ready(!0)},ready:function(e){(!0===e?--d.readyWait:d.isReady)||(d.isReady=!0,!0!==e&&--d.readyWait>0||(j.resolveWith(r,[d]),d.fn.triggerHandler&&(d(r).triggerHandler("ready"),d(r).off("ready"))))}}),d.ready.promise=function(t){if(!j)if(j=d.Deferred(),"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll)e.setTimeout(d.ready);else if(r.addEventListener)r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_);else{r.attachEvent("onreadystatechange",_),e.attachEvent("onload",_);var n=!1;try{n=null==e.frameElement&&r.documentElement}catch(e){}n&&n.doScroll&&function t(){if(!d.isReady){try{n.doScroll("left")}catch(n){return e.setTimeout(t,50)}q(),d.ready()}}()}return j.promise(t)},d.ready.promise(),d(f))break;f.ownFirst="0"===L,f.inlineBlockNeedsLayout=!1,d(function(){var e,t,n,i;(n=r.getElementsByTagName("body")[0])&&n.style&&(t=r.createElement("div"),(i=r.createElement("div")).style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(i).appendChild(t),void 0!==t.style.zoom&&(t.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",f.inlineBlockNeedsLayout=e=3===t.offsetWidth,e&&(n.style.zoom=1)),n.removeChild(i))}),function(){var e=r.createElement("div");f.deleteExpando=!0;try{delete e.test}catch(e){f.deleteExpando=!1}e=null}();var F,M=function(e){var t=d.noData[(e.nodeName+" ").toLowerCase()],n=+e.nodeType||1;return(1===n||9===n)&&(!t||!0!==t&&e.getAttribute("classid")===t)},O=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,R=/([A-Z])/g;function P(e,t,n){if(void 0===n&&1===e.nodeType){var r="data-"+t.replace(R,"-$1").toLowerCase();if("string"==typeof(n=e.getAttribute(r))){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:O.test(n)?d.parseJSON(n):n)}catch(e){}d.data(e,t,n)}else n=void 0}return n}function B(e){var t;for(t in e)if(("data"!==t||!d.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function W(e,t,r,i){if(M(e)){var o,a,s=d.expando,u=e.nodeType,l=u?d.cache:e,c=u?e[s]:e[s]&&s;if(c&&l[c]&&(i||l[c].data)||void 0!==r||"string"!=typeof t)return c||(c=u?e[s]=n.pop()||d.guid++:s),l[c]||(l[c]=u?{}:{toJSON:d.noop}),"object"!=typeof t&&"function"!=typeof t||(i?l[c]=d.extend(l[c],t):l[c].data=d.extend(l[c].data,t)),a=l[c],i||(a.data||(a.data={}),a=a.data),void 0!==r&&(a[d.camelCase(t)]=r),"string"==typeof t?null==(o=a[t])&&(o=a[d.camelCase(t)]):o=a,o}}function I(e,t,n){if(M(e)){var r,i,o=e.nodeType,a=o?d.cache:e,s=o?e[d.expando]:d.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){i=(t=d.isArray(t)?t.concat(d.map(t,d.camelCase)):t in r?[t]:(t=d.camelCase(t))in r?[t]:t.split(" ")).length;for(;i--;)delete r[t[i]];if(n?!B(r):!d.isEmptyObject(r))return}(n||(delete a[s].data,B(a[s])))&&(o?d.cleanData([e],!0):f.deleteExpando||a!=a.window?delete a[s]:a[s]=void 0)}}}d.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return!!(e=e.nodeType?d.cache[e[d.expando]]:e[d.expando])&&!B(e)},data:function(e,t,n){return W(e,t,n)},removeData:function(e,t){return I(e,t)},_data:function(e,t,n){return W(e,t,n,!0)},_removeData:function(e,t){return I(e,t,!0)}}),d.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=d.data(o),1===o.nodeType&&!d._data(o,"parsedAttrs"))){for(n=a.length;n--;)a[n]&&0===(r=a[n].name).indexOf("data-")&&P(o,r=d.camelCase(r.slice(5)),i[r]);d._data(o,"parsedAttrs",!0)}return i}return"object"==typeof e?this.each(function(){d.data(this,e)}):arguments.length>1?this.each(function(){d.data(this,e,t)}):o?P(o,e,d.data(o,e)):void 0},removeData:function(e){return this.each(function(){d.removeData(this,e)})}}),d.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=d._data(e,t),n&&(!r||d.isArray(n)?r=d._data(e,t,d.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=d.queue(e,t),r=n.length,i=n.shift(),o=d._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){d.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return d._data(e,n)||d._data(e,n,{empty:d.Callbacks("once memory").add(function(){d._removeData(e,t+"queue"),d._removeData(e,n)})})}}),d.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?d.queue(this[0],e):void 0===t?this:this.each(function(){var n=d.queue(this,e,t);d._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&d.dequeue(this,e)})},dequeue:function(e){return this.each(function(){d.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=d.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=d._data(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}}),f.shrinkWrapBlocks=function(){return null!=F?F:(F=!1,(t=r.getElementsByTagName("body")[0])&&t.style?(e=r.createElement("div"),(n=r.createElement("div")).style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",t.appendChild(n).appendChild(e),void 0!==e.style.zoom&&(e.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",e.appendChild(r.createElement("div")).style.width="5px",F=3!==e.offsetWidth),t.removeChild(n),F):void 0);var e,t,n};var $=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,z=new RegExp("^(?:([+-])=|)("+$+")([a-z%]*)$","i"),X=["Top","Right","Bottom","Left"],U=function(e,t){return e=t||e,"none"===d.css(e,"display")||!d.contains(e.ownerDocument,e)};function V(e,t,n,r){var i,o=1,a=20,s=r?function(){return r.cur()}:function(){return d.css(e,t,"")},u=s(),l=n&&n[3]||(d.cssNumber[t]?"":"px"),c=(d.cssNumber[t]||"px"!==l&&+u)&&z.exec(d.css(e,t));if(c&&c[3]!==l){l=l||c[3],n=n||[],c=+u||1;do{c/=o=o||".5",d.style(e,t,c+l)}while(o!==(o=s()/u)&&1!==o&&--a)}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var Y,J,G,Q=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===d.type(n))for(s in i=!0,n)Q(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,d.isFunction(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(d(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},K=/^(?:checkbox|radio)$/i,Z=/<([\w:-]+)/,ee=/^$|\/(?:java|ecma)script/i,te=/^\s+/,ne="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function re(e){var t=ne.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}Y=r.createElement("div"),J=r.createDocumentFragment(),G=r.createElement("input"),Y.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",f.leadingWhitespace=3===Y.firstChild.nodeType,f.tbody=!Y.getElementsByTagName("tbody").length,f.htmlSerialize=!!Y.getElementsByTagName("link").length,f.html5Clone="<:nav></:nav>"!==r.createElement("nav").cloneNode(!0).outerHTML,G.type="checkbox",G.checked=!0,J.appendChild(G),f.appendChecked=G.checked,Y.innerHTML="<textarea>x</textarea>",f.noCloneChecked=!!Y.cloneNode(!0).lastChild.defaultValue,J.appendChild(Y),(G=r.createElement("input")).setAttribute("type","radio"),G.setAttribute("checked","checked"),G.setAttribute("name","t"),Y.appendChild(G),f.checkClone=Y.cloneNode(!0).cloneNode(!0).lastChild.checked,f.noCloneEvent=!!Y.addEventListener,Y[d.expando]=1,f.attributes=!Y.getAttribute(d.expando);var ie={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:f.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};function oe(e,t){var n,r,i=0,o=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):void 0;if(!o)for(o=[],n=e.childNodes||e;null!=(r=n[i]);i++)!t||d.nodeName(r,t)?o.push(r):d.merge(o,oe(r,t));return void 0===t||t&&d.nodeName(e,t)?d.merge([e],o):o}function ae(e,t){for(var n,r=0;null!=(n=e[r]);r++)d._data(n,"globalEval",!t||d._data(t[r],"globalEval"))}ie.optgroup=ie.option,ie.tbody=ie.tfoot=ie.colgroup=ie.caption=ie.thead,ie.th=ie.td;var se=/<|&#?\w+;/,ue=/<tbody/i;function le(e){K.test(e.type)&&(e.defaultChecked=e.checked)}function ce(e,t,n,r,i){for(var o,a,s,u,l,c,p,h=e.length,g=re(t),m=[],v=0;v<h;v++)if((a=e[v])||0===a)if("object"===d.type(a))d.merge(m,a.nodeType?[a]:a);else if(se.test(a)){for(u=u||g.appendChild(t.createElement("div")),l=(Z.exec(a)||["",""])[1].toLowerCase(),p=ie[l]||ie._default,u.innerHTML=p[1]+d.htmlPrefilter(a)+p[2],o=p[0];o--;)u=u.lastChild;if(!f.leadingWhitespace&&te.test(a)&&m.push(t.createTextNode(te.exec(a)[0])),!f.tbody)for(o=(a="table"!==l||ue.test(a)?"<table>"!==p[1]||ue.test(a)?0:u:u.firstChild)&&a.childNodes.length;o--;)d.nodeName(c=a.childNodes[o],"tbody")&&!c.childNodes.length&&a.removeChild(c);for(d.merge(m,u.childNodes),u.textContent="";u.firstChild;)u.removeChild(u.firstChild);u=g.lastChild}else m.push(t.createTextNode(a));for(u&&g.removeChild(u),f.appendChecked||d.grep(oe(m,"input"),le),v=0;a=m[v++];)if(r&&d.inArray(a,r)>-1)i&&i.push(a);else if(s=d.contains(a.ownerDocument,a),u=oe(g.appendChild(a),"script"),s&&ae(u),n)for(o=0;a=u[o++];)ee.test(a.type||"")&&n.push(a);return u=null,g}!function(){var t,n,i=r.createElement("div");for(t in{submit:!0,change:!0,focusin:!0})n="on"+t,(f[t]=n in e)||(i.setAttribute(n,"t"),f[t]=!1===i.attributes[n].expando);i=null}();var fe=/^(?:input|select|textarea)$/i,de=/^key/,pe=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,he=/^(?:focusinfocus|focusoutblur)$/,ge=/^([^.]*)(?:\.(.+)|)/;function me(){return!0}function ve(){return!1}function ye(){try{return r.activeElement}catch(e){}}function xe(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)xe(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ve;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return d().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=d.guid++)),e.each(function(){d.event.add(this,t,i,r,n)})}d.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,h,g,m,v=d._data(e);if(v){for(n.handler&&(n=(u=n).handler,i=u.selector),n.guid||(n.guid=d.guid++),(a=v.events)||(a=v.events={}),(c=v.handle)||((c=v.handle=function(e){return void 0===d||e&&d.event.triggered===e.type?void 0:d.event.dispatch.apply(c.elem,arguments)}).elem=e),s=(t=(t||"").match(H)||[""]).length;s--;)h=m=(o=ge.exec(t[s])||[])[1],g=(o[2]||"").split(".").sort(),h&&(l=d.event.special[h]||{},h=(i?l.delegateType:l.bindType)||h,l=d.event.special[h]||{},f=d.extend({type:h,origType:m,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&d.expr.match.needsContext.test(i),namespace:g.join(".")},u),(p=a[h])||((p=a[h]=[]).delegateCount=0,l.setup&&!1!==l.setup.call(e,r,g,c)||(e.addEventListener?e.addEventListener(h,c,!1):e.attachEvent&&e.attachEvent("on"+h,c))),l.add&&(l.add.call(e,f),f.handler.guid||(f.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,f):p.push(f),d.event.global[h]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,h,g,m,v=d.hasData(e)&&d._data(e);if(v&&(c=v.events)){for(l=(t=(t||"").match(H)||[""]).length;l--;)if(h=m=(s=ge.exec(t[l])||[])[1],g=(s[2]||"").split(".").sort(),h){for(f=d.event.special[h]||{},p=c[h=(r?f.delegateType:f.bindType)||h]||[],s=s[2]&&new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=p.length;o--;)a=p[o],!i&&m!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(p.splice(o,1),a.selector&&p.delegateCount--,f.remove&&f.remove.call(e,a));u&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,g,v.handle)||d.removeEvent(e,h,v.handle),delete c[h])}else for(h in c)d.event.remove(e,h+t[l],n,r,!0);d.isEmptyObject(c)&&(delete v.handle,d._removeData(e,"events"))}},trigger:function(t,n,i,o){var a,s,u,l,f,p,h,g=[i||r],m=c.call(t,"type")?t.type:t,v=c.call(t,"namespace")?t.namespace.split("."):[];if(u=p=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!he.test(m+d.event.triggered)&&(m.indexOf(".")>-1&&(v=m.split("."),m=v.shift(),v.sort()),s=m.indexOf(":")<0&&"on"+m,(t=t[d.expando]?t:new d.Event(m,"object"==typeof t&&t)).isTrigger=o?2:3,t.namespace=v.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+v.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:d.makeArray(n,[t]),f=d.event.special[m]||{},o||!f.trigger||!1!==f.trigger.apply(i,n))){if(!o&&!f.noBubble&&!d.isWindow(i)){for(l=f.delegateType||m,he.test(l+m)||(u=u.parentNode);u;u=u.parentNode)g.push(u),p=u;p===(i.ownerDocument||r)&&g.push(p.defaultView||p.parentWindow||e)}for(h=0;(u=g[h++])&&!t.isPropagationStopped();)t.type=h>1?l:f.bindType||m,(a=(d._data(u,"events")||{})[t.type]&&d._data(u,"handle"))&&a.apply(u,n),(a=s&&u[s])&&a.apply&&M(u)&&(t.result=a.apply(u,n),!1===t.result&&t.preventDefault());if(t.type=m,!o&&!t.isDefaultPrevented()&&(!f._default||!1===f._default.apply(g.pop(),n))&&M(i)&&s&&i[m]&&!d.isWindow(i)){(p=i[s])&&(i[s]=null),d.event.triggered=m;try{i[m]()}catch(e){}d.event.triggered=void 0,p&&(i[s]=p)}return t.result}},dispatch:function(e){e=d.event.fix(e);var t,n,r,o,a,s,u=i.call(arguments),l=(d._data(this,"events")||{})[e.type]||[],c=d.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,e)){for(s=d.event.handlers.call(this,e,l),t=0;(o=s[t++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,n=0;(a=o.handlers[n++])&&!e.isImmediatePropagationStopped();)e.rnamespace&&!e.rnamespace.test(a.namespace)||(e.handleObj=a,e.data=a.data,void 0!==(r=((d.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(e.result=r)&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,a=[],s=t.delegateCount,u=e.target;if(s&&u.nodeType&&("click"!==e.type||isNaN(e.button)||e.button<1))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(!0!==u.disabled||"click"!==e.type)){for(r=[],n=0;n<s;n++)void 0===r[i=(o=t[n]).selector+" "]&&(r[i]=o.needsContext?d(i,this).index(u)>-1:d.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&a.push({elem:u,handlers:r})}return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a},fix:function(e){if(e[d.expando])return e;var t,n,i,o=e.type,a=e,s=this.fixHooks[o];for(s||(this.fixHooks[o]=s=pe.test(o)?this.mouseHooks:de.test(o)?this.keyHooks:{}),i=s.props?this.props.concat(s.props):this.props,e=new d.Event(a),t=i.length;t--;)e[n=i[t]]=a[n];return e.target||(e.target=a.srcElement||r),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,i,o,a=t.button,s=t.fromElement;return null==e.pageX&&null!=t.clientX&&(o=(i=e.target.ownerDocument||r).documentElement,n=i.body,e.pageX=t.clientX+(o&&o.scrollLeft||n&&n.scrollLeft||0)-(o&&o.clientLeft||n&&n.clientLeft||0),e.pageY=t.clientY+(o&&o.scrollTop||n&&n.scrollTop||0)-(o&&o.clientTop||n&&n.clientTop||0)),!e.relatedTarget&&s&&(e.relatedTarget=s===e.target?t.toElement:s),e.which||void 0===a||(e.which=1&a?1:2&a?3:4&a?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ye()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){if(this===ye()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(d.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1},_default:function(e){return d.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n){var r=d.extend(new d.Event,n,{type:e,isSimulated:!0});d.event.trigger(r,null,t),r.isDefaultPrevented()&&n.preventDefault()}},d.removeEvent=r.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)}:function(e,t,n){var r="on"+t;e.detachEvent&&(void 0===e[r]&&(e[r]=null),e.detachEvent(r,n))},d.Event=function(e,t){if(!(this instanceof d.Event))return new d.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?me:ve):this.type=e,t&&d.extend(this,t),this.timeStamp=e&&e.timeStamp||d.now(),this[d.expando]=!0},d.Event.prototype={constructor:d.Event,isDefaultPrevented:ve,isPropagationStopped:ve,isImmediatePropagationStopped:ve,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=me,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=me,e&&!this.isSimulated&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=me,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},d.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){d.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj;return r&&(r===this||d.contains(this,r))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),f.submit||(d.event.special.submit={setup:function(){if(d.nodeName(this,"form"))return!1;d.event.add(this,"click._submit keypress._submit",function(e){var t=e.target,n=d.nodeName(t,"input")||d.nodeName(t,"button")?d.prop(t,"form"):void 0;n&&!d._data(n,"submit")&&(d.event.add(n,"submit._submit",function(e){e._submitBubble=!0}),d._data(n,"submit",!0))})},postDispatch:function(e){e._submitBubble&&(delete e._submitBubble,this.parentNode&&!e.isTrigger&&d.event.simulate("submit",this.parentNode,e))},teardown:function(){if(d.nodeName(this,"form"))return!1;d.event.remove(this,"._submit")}}),f.change||(d.event.special.change={setup:function(){if(fe.test(this.nodeName))return"checkbox"!==this.type&&"radio"!==this.type||(d.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._justChanged=!0)}),d.event.add(this,"click._change",function(e){this._justChanged&&!e.isTrigger&&(this._justChanged=!1),d.event.simulate("change",this,e)})),!1;d.event.add(this,"beforeactivate._change",function(e){var t=e.target;fe.test(t.nodeName)&&!d._data(t,"change")&&(d.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||d.event.simulate("change",this.parentNode,e)}),d._data(t,"change",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type)return e.handleObj.handler.apply(this,arguments)},teardown:function(){return d.event.remove(this,"._change"),!fe.test(this.nodeName)}}),f.focusin||d.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){d.event.simulate(t,e.target,d.event.fix(e))};d.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=d._data(r,t);i||r.addEventListener(e,n,!0),d._data(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=d._data(r,t)-1;i?d._data(r,t,i):(r.removeEventListener(e,n,!0),d._removeData(r,t))}}}),d.fn.extend({on:function(e,t,n,r){return xe(this,e,t,n,r)},one:function(e,t,n,r){return xe(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,d(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ve),this.each(function(){d.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){d.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return d.event.trigger(e,t,n,!0)}});var be=/ jQuery\d+="(?:null|\d+)"/g,we=new RegExp("<(?:"+ne+")[\\s/>]","i"),Te=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,Ce=/<script|<style|<link/i,Ee=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^true\/(.*)/,ke=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Se=re(r).appendChild(r.createElement("div"));function Ae(e,t){return d.nodeName(e,"table")&&d.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function De(e){return e.type=(null!==d.find.attr(e,"type"))+"/"+e.type,e}function je(e){var t=Ne.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Le(e,t){if(1===t.nodeType&&d.hasData(e)){var n,r,i,o=d._data(e),a=d._data(t,o),s=o.events;if(s)for(n in delete a.handle,a.events={},s)for(r=0,i=s[n].length;r<i;r++)d.event.add(t,n,s[n][r]);a.data&&(a.data=d.extend({},a.data))}}function He(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!f.noCloneEvent&&t[d.expando]){for(r in(i=d._data(t)).events)d.removeEvent(t,r,i.handle);t.removeAttribute(d.expando)}"script"===n&&t.text!==e.text?(De(t).text=e.text,je(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),f.html5Clone&&e.innerHTML&&!d.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&K.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}}function qe(e,t,n,r){t=o.apply([],t);var i,a,s,u,l,c,p=0,h=e.length,g=h-1,m=t[0],v=d.isFunction(m);if(v||h>1&&"string"==typeof m&&!f.checkClone&&Ee.test(m))return e.each(function(i){var o=e.eq(i);v&&(t[0]=m.call(this,i,o.html())),qe(o,t,n,r)});if(h&&(i=(c=ce(t,e[0].ownerDocument,!1,e,r)).firstChild,1===c.childNodes.length&&(c=i),i||r)){for(s=(u=d.map(oe(c,"script"),De)).length;p<h;p++)a=c,p!==g&&(a=d.clone(a,!0,!0),s&&d.merge(u,oe(a,"script"))),n.call(e[p],a,p);if(s)for(l=u[u.length-1].ownerDocument,d.map(u,je),p=0;p<s;p++)a=u[p],ee.test(a.type||"")&&!d._data(a,"globalEval")&&d.contains(l,a)&&(a.src?d._evalUrl&&d._evalUrl(a.src):d.globalEval((a.text||a.textContent||a.innerHTML||"").replace(ke,"")));c=i=null}return e}function _e(e,t,n){for(var r,i=t?d.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||d.cleanData(oe(r)),r.parentNode&&(n&&d.contains(r.ownerDocument,r)&&ae(oe(r,"script")),r.parentNode.removeChild(r));return e}d.extend({htmlPrefilter:function(e){return e.replace(Te,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u=d.contains(e.ownerDocument,e);if(f.html5Clone||d.isXMLDoc(e)||!we.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Se.innerHTML=e.outerHTML,Se.removeChild(o=Se.firstChild)),!(f.noCloneEvent&&f.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||d.isXMLDoc(e)))for(r=oe(o),s=oe(e),a=0;null!=(i=s[a]);++a)r[a]&&He(i,r[a]);if(t)if(n)for(s=s||oe(e),r=r||oe(o),a=0;null!=(i=s[a]);a++)Le(i,r[a]);else Le(e,o);return(r=oe(o,"script")).length>0&&ae(r,!u&&oe(e,"script")),r=s=i=null,o},cleanData:function(e,t){for(var r,i,o,a,s=0,u=d.expando,l=d.cache,c=f.attributes,p=d.event.special;null!=(r=e[s]);s++)if((t||M(r))&&(a=(o=r[u])&&l[o])){if(a.events)for(i in a.events)p[i]?d.event.remove(r,i):d.removeEvent(r,i,a.handle);l[o]&&(delete l[o],c||void 0===r.removeAttribute?r[u]=void 0:r.removeAttribute(u),n.push(o))}}}),d.fn.extend({domManip:qe,detach:function(e){return _e(this,e,!0)},remove:function(e){return _e(this,e)},text:function(e){return Q(this,function(e){return void 0===e?d.text(this):this.empty().append((this[0]&&this[0].ownerDocument||r).createTextNode(e))},null,e,arguments.length)},append:function(){return qe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Ae(this,e).appendChild(e)})},prepend:function(){return qe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Ae(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return qe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return qe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&d.cleanData(oe(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&d.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return d.clone(this,e,t)})},html:function(e){return Q(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e)return 1===t.nodeType?t.innerHTML.replace(be,""):void 0;if("string"==typeof e&&!Ce.test(e)&&(f.htmlSerialize||!we.test(e))&&(f.leadingWhitespace||!te.test(e))&&!ie[(Z.exec(e)||["",""])[1].toLowerCase()]){e=d.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(d.cleanData(oe(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return qe(this,arguments,function(t){var n=this.parentNode;d.inArray(this,e)<0&&(d.cleanData(oe(this)),n&&n.replaceChild(t,this))},e)}}),d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){d.fn[e]=function(e){for(var n,r=0,i=[],o=d(e),s=o.length-1;r<=s;r++)n=r===s?this:this.clone(!0),d(o[r])[t](n),a.apply(i,n.get());return this.pushStack(i)}});var Fe,Me={HTML:"block",BODY:"block"};function Oe(e,t){var n=d(t.createElement(e)).appendTo(t.body),r=d.css(n[0],"display");return n.detach(),r}function Re(e){var t=r,n=Me[e];return n||("none"!==(n=Oe(e,t))&&n||((t=((Fe=(Fe||d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow||Fe[0].contentDocument).document).write(),t.close(),n=Oe(e,t),Fe.detach()),Me[e]=n),n}var Pe=/^margin/,Be=new RegExp("^("+$+")(?!px)[a-z%]+$","i"),We=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i},Ie=r.documentElement;!function(){var t,n,i,o,a,s,u=r.createElement("div"),l=r.createElement("div");function c(){var c,f,d=r.documentElement;d.appendChild(u),l.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",t=i=s=!1,n=a=!0,e.getComputedStyle&&(f=e.getComputedStyle(l),t="1%"!==(f||{}).top,s="2px"===(f||{}).marginLeft,i="4px"===(f||{width:"4px"}).width,l.style.marginRight="50%",n="4px"===(f||{marginRight:"4px"}).marginRight,(c=l.appendChild(r.createElement("div"))).style.cssText=l.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",l.style.width="1px",a=!parseFloat((e.getComputedStyle(c)||{}).marginRight),l.removeChild(c)),l.style.display="none",(o=0===l.getClientRects().length)&&(l.style.display="",l.innerHTML="<table><tr><td></td><td>t</td></tr></table>",l.childNodes[0].style.borderCollapse="separate",(c=l.getElementsByTagName("td"))[0].style.cssText="margin:0;border:0;padding:0;display:none",(o=0===c[0].offsetHeight)&&(c[0].style.display="",c[1].style.display="none",o=0===c[0].offsetHeight)),d.removeChild(u)}l.style&&(l.style.cssText="float:left;opacity:.5",f.opacity="0.5"===l.style.opacity,f.cssFloat=!!l.style.cssFloat,l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",f.clearCloneStyle="content-box"===l.style.backgroundClip,(u=r.createElement("div")).style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",l.innerHTML="",u.appendChild(l),f.boxSizing=""===l.style.boxSizing||""===l.style.MozBoxSizing||""===l.style.WebkitBoxSizing,d.extend(f,{reliableHiddenOffsets:function(){return null==t&&c(),o},boxSizingReliable:function(){return null==t&&c(),i},pixelMarginRight:function(){return null==t&&c(),n},pixelPosition:function(){return null==t&&c(),t},reliableMarginRight:function(){return null==t&&c(),a},reliableMarginLeft:function(){return null==t&&c(),s}}))}();var $e,ze,Xe=/^(top|right|bottom|left)$/;function Ue(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}e.getComputedStyle?($e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},ze=function(e,t,n){var r,i,o,a,s=e.style;return""!==(a=(n=n||$e(e))?n.getPropertyValue(t)||n[t]:void 0)&&void 0!==a||d.contains(e.ownerDocument,e)||(a=d.style(e,t)),n&&!f.pixelMarginRight()&&Be.test(a)&&Pe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o),void 0===a?a:a+""}):Ie.currentStyle&&($e=function(e){return e.currentStyle},ze=function(e,t,n){var r,i,o,a,s=e.style;return null==(a=(n=n||$e(e))?n[t]:void 0)&&s&&s[t]&&(a=s[t]),Be.test(a)&&!Xe.test(t)&&(r=s.left,(o=(i=e.runtimeStyle)&&i.left)&&(i.left=e.currentStyle.left),s.left="fontSize"===t?"1em":a,a=s.pixelLeft+"px",s.left=r,o&&(i.left=o)),void 0===a?a:a+""||"auto"});var Ve=/alpha\([^)]*\)/i,Ye=/opacity\s*=\s*([^)]*)/i,Je=/^(none|table(?!-c[ea]).+)/,Ge=new RegExp("^("+$+")(.*)$","i"),Qe={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"},Ze=["Webkit","O","Moz","ms"],et=r.createElement("div").style;function tt(e){if(e in et)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=Ze.length;n--;)if((e=Ze[n]+t)in et)return e}function nt(e,t){for(var n,r,i,o=[],a=0,s=e.length;a<s;a++)(r=e[a]).style&&(o[a]=d._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&U(r)&&(o[a]=d._data(r,"olddisplay",Re(r.nodeName)))):(i=U(r),(n&&"none"!==n||!i)&&d._data(r,"olddisplay",i?n:d.css(r,"display"))));for(a=0;a<s;a++)(r=e[a]).style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}function rt(e,t,n){var r=Ge.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function it(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;o<4;o+=2)"margin"===n&&(a+=d.css(e,n+X[o],!0,i)),r?("content"===n&&(a-=d.css(e,"padding"+X[o],!0,i)),"margin"!==n&&(a-=d.css(e,"border"+X[o]+"Width",!0,i))):(a+=d.css(e,"padding"+X[o],!0,i),"padding"!==n&&(a+=d.css(e,"border"+X[o]+"Width",!0,i)));return a}function ot(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=$e(e),a=f.boxSizing&&"border-box"===d.css(e,"boxSizing",!1,o);if(i<=0||null==i){if(((i=ze(e,t,o))<0||null==i)&&(i=e.style[t]),Be.test(i))return i;r=a&&(f.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+it(e,t,n||(a?"border":"content"),r,o)+"px"}function at(e,t,n,r,i){return new at.prototype.init(e,t,n,r,i)}d.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=ze(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:f.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=d.camelCase(t),u=e.style;if(t=d.cssProps[s]||(d.cssProps[s]=tt(s)||s),a=d.cssHooks[t]||d.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:u[t];if("string"===(o=typeof n)&&(i=z.exec(n))&&i[1]&&(n=V(e,t,i),o="number"),null!=n&&n==n&&("number"===o&&(n+=i&&i[3]||(d.cssNumber[s]?"":"px")),f.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),!(a&&"set"in a&&void 0===(n=a.set(e,n,r)))))try{u[t]=n}catch(e){}}},css:function(e,t,n,r){var i,o,a,s=d.camelCase(t);return t=d.cssProps[s]||(d.cssProps[s]=tt(s)||s),(a=d.cssHooks[t]||d.cssHooks[s])&&"get"in a&&(o=a.get(e,!0,n)),void 0===o&&(o=ze(e,t,r)),"normal"===o&&t in Ke&&(o=Ke[t]),""===n||n?(i=parseFloat(o),!0===n||isFinite(i)?i||0:o):o}}),d.each(["height","width"],function(e,t){d.cssHooks[t]={get:function(e,n,r){if(n)return Je.test(d.css(e,"display"))&&0===e.offsetWidth?We(e,Qe,function(){return ot(e,t,r)}):ot(e,t,r)},set:function(e,n,r){var i=r&&$e(e);return rt(0,n,r?it(e,t,r,f.boxSizing&&"border-box"===d.css(e,"boxSizing",!1,i),i):0)}}}),f.opacity||(d.cssHooks.opacity={get:function(e,t){return Ye.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=d.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===d.trim(o.replace(Ve,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=Ve.test(o)?o.replace(Ve,i):o+" "+i)}}),d.cssHooks.marginRight=Ue(f.reliableMarginRight,function(e,t){if(t)return We(e,{display:"inline-block"},ze,[e,"marginRight"])}),d.cssHooks.marginLeft=Ue(f.reliableMarginLeft,function(e,t){if(t)return(parseFloat(ze(e,"marginLeft"))||(d.contains(e.ownerDocument,e)?e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}):0))+"px"}),d.each({margin:"",padding:"",border:"Width"},function(e,t){d.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+X[r]+t]=o[r]||o[r-2]||o[0];return i}},Pe.test(e)||(d.cssHooks[e+t].set=rt)}),d.fn.extend({css:function(e,t){return Q(this,function(e,t,n){var r,i,o={},a=0;if(d.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=d.css(e,t[a],!1,r);return o}return void 0!==n?d.style(e,t,n):d.css(e,t)},e,t,arguments.length>1)},show:function(){return nt(this,!0)},hide:function(){return nt(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){U(this)?d(this).show():d(this).hide()})}}),d.Tween=at,at.prototype={constructor:at,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||d.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(d.cssNumber[n]?"":"px")},cur:function(){var e=at.propHooks[this.prop];return e&&e.get?e.get(this):at.propHooks._default.get(this)},run:function(e){var t,n=at.propHooks[this.prop];return this.options.duration?this.pos=t=d.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):at.propHooks._default.set(this),this}},at.prototype.init.prototype=at.prototype,at.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=d.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){d.fx.step[e.prop]?d.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[d.cssProps[e.prop]]&&!d.cssHooks[e.prop]?e.elem[e.prop]=e.now:d.style(e.elem,e.prop,e.now+e.unit)}}},at.propHooks.scrollTop=at.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},d.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},d.fx=at.prototype.init,d.fx.step={};var st,ut,lt=/^(?:toggle|show|hide)$/,ct=/queueHooks$/;function ft(){return e.setTimeout(function(){st=void 0}),st=d.now()}function dt(e,t){var n,r={height:e},i=0;for(t=t?1:0;i<4;i+=2-t)r["margin"+(n=X[i])]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function pt(e,t,n){for(var r,i=(ht.tweeners[t]||[]).concat(ht.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ht(e,t,n){var r,i,o=0,a=ht.prefilters.length,s=d.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=st||ft(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:d.extend({},t),opts:d.extend(!0,{specialEasing:{},easing:d.easing._default},n),originalProperties:t,originalOptions:n,startTime:st||ft(),duration:n.duration,tweens:[],createTween:function(t,n){var r=d.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=d.camelCase(n)],o=e[n],d.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=d.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);o<a;o++)if(r=ht.prefilters[o].call(l,e,c,l.opts))return d.isFunction(r.stop)&&(d._queueHooks(l.elem,l.opts.queue).stop=d.proxy(r.stop,r)),r;return d.map(c,pt,l),d.isFunction(l.opts.start)&&l.opts.start.call(e,l),d.fx.timer(d.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}d.Animation=d.extend(ht,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return V(n.elem,e,z.exec(t),n),n}]},tweener:function(e,t){d.isFunction(e)?(t=e,e=["*"]):e=e.match(H);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ht.tweeners[n]=ht.tweeners[n]||[],ht.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c=this,p={},h=e.style,g=e.nodeType&&U(e),m=d._data(e,"fxshow");for(r in n.queue||(null==(s=d._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,u=s.empty.fire,s.empty.fire=function(){s.unqueued||u()}),s.unqueued++,c.always(function(){c.always(function(){s.unqueued--,d.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],"inline"===("none"===(l=d.css(e,"display"))?d._data(e,"olddisplay")||Re(e.nodeName):l)&&"none"===d.css(e,"float")&&(f.inlineBlockNeedsLayout&&"inline"!==Re(e.nodeName)?h.zoom=1:h.display="inline-block")),n.overflow&&(h.overflow="hidden",f.shrinkWrapBlocks()||c.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),t)if(i=t[r],lt.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!m||void 0===m[r])continue;g=!0}p[r]=m&&m[r]||d.style(e,r)}else l=void 0;if(d.isEmptyObject(p))"inline"===("none"===l?Re(e.nodeName):l)&&(h.display=l);else for(r in m?"hidden"in m&&(g=m.hidden):m=d._data(e,"fxshow",{}),o&&(m.hidden=!g),g?d(e).show():c.done(function(){d(e).hide()}),c.done(function(){var t;for(t in d._removeData(e,"fxshow"),p)d.style(e,t,p[t])}),p)a=pt(g?m[r]:0,r,c),r in m||(m[r]=a.start,g&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}],prefilter:function(e,t){t?ht.prefilters.unshift(e):ht.prefilters.push(e)}}),d.speed=function(e,t,n){var r=e&&"object"==typeof e?d.extend({},e):{complete:n||!n&&t||d.isFunction(e)&&e,duration:e,easing:n&&t||t&&!d.isFunction(t)&&t};return r.duration=d.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in d.fx.speeds?d.fx.speeds[r.duration]:d.fx.speeds._default,null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){d.isFunction(r.old)&&r.old.call(this),r.queue&&d.dequeue(this,r.queue)},r},d.fn.extend({fadeTo:function(e,t,n,r){return this.filter(U).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=d.isEmptyObject(e),o=d.speed(t,n,r),a=function(){var t=ht(this,d.extend({},e),o);(i||d._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=d.timers,a=d._data(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ct.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||d.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=d._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=d.timers,a=r?r.length:0;for(n.finish=!0,d.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),d.each(["toggle","show","hide"],function(e,t){var n=d.fn[t];d.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(dt(t,!0),e,r,i)}}),d.each({slideDown:dt("show"),slideUp:dt("hide"),slideToggle:dt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){d.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),d.timers=[],d.fx.tick=function(){var e,t=d.timers,n=0;for(st=d.now();n<t.length;n++)(e=t[n])()||t[n]!==e||t.splice(n--,1);t.length||d.fx.stop(),st=void 0},d.fx.timer=function(e){d.timers.push(e),e()?d.fx.start():d.timers.pop()},d.fx.interval=13,d.fx.start=function(){ut||(ut=e.setInterval(d.fx.tick,d.fx.interval))},d.fx.stop=function(){e.clearInterval(ut),ut=null},d.fx.speeds={slow:600,fast:200,_default:400},d.fn.delay=function(t,n){return t=d.fx&&d.fx.speeds[t]||t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e,t=r.createElement("input"),n=r.createElement("div"),i=r.createElement("select"),o=i.appendChild(r.createElement("option"));(n=r.createElement("div")).setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",e=n.getElementsByTagName("a")[0],t.setAttribute("type","checkbox"),n.appendChild(t),(e=n.getElementsByTagName("a")[0]).style.cssText="top:1px",f.getSetAttribute="t"!==n.className,f.style=/top/.test(e.getAttribute("style")),f.hrefNormalized="/a"===e.getAttribute("href"),f.checkOn=!!t.value,f.optSelected=o.selected,f.enctype=!!r.createElement("form").enctype,i.disabled=!0,f.optDisabled=!o.disabled,(t=r.createElement("input")).setAttribute("value",""),f.input=""===t.getAttribute("value"),t.value="t",t.setAttribute("type","radio"),f.radioValue="t"===t.value}();var gt=/\r/g,mt=/[\x20\t\r\n\f]+/g;d.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=d.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,d(this).val()):e)?i="":"number"==typeof i?i+="":d.isArray(i)&&(i=d.map(i,function(e){return null==e?"":e+""})),(t=d.valHooks[this.type]||d.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=d.valHooks[i.type]||d.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(gt,""):null==n?"":n:void 0}}),d.extend({valHooks:{option:{get:function(e){var t=d.find.attr(e,"value");return null!=t?t:d.trim(d.text(e)).replace(mt," ")}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||i<0,a=o?null:[],s=o?i+1:r.length,u=i<0?s:o?i:0;u<s;u++)if(((n=r[u]).selected||u===i)&&(f.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!d.nodeName(n.parentNode,"optgroup"))){if(t=d(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=d.makeArray(t),a=i.length;a--;)if(r=i[a],d.inArray(d.valHooks.option.get(r),o)>-1)try{r.selected=n=!0}catch(e){r.scrollHeight}else r.selected=!1;return n||(e.selectedIndex=-1),i}}}}),d.each(["radio","checkbox"],function(){d.valHooks[this]={set:function(e,t){if(d.isArray(t))return e.checked=d.inArray(d(e).val(),t)>-1}},f.checkOn||(d.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var vt,yt,xt=d.expr.attrHandle,bt=/^(?:checked|selected)$/i,wt=f.getSetAttribute,Tt=f.input;d.fn.extend({attr:function(e,t){return Q(this,d.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){d.removeAttr(this,e)})}}),d.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?d.prop(e,t,n):(1===o&&d.isXMLDoc(e)||(t=t.toLowerCase(),i=d.attrHooks[t]||(d.expr.match.bool.test(t)?yt:vt)),void 0!==n?null===n?void d.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=d.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!f.radioValue&&"radio"===t&&d.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(H);if(o&&1===e.nodeType)for(;n=o[i++];)r=d.propFix[n]||n,d.expr.match.bool.test(n)?Tt&&wt||!bt.test(n)?e[r]=!1:e[d.camelCase("default-"+n)]=e[r]=!1:d.attr(e,n,""),e.removeAttribute(wt?n:r)}}),yt={set:function(e,t,n){return!1===t?d.removeAttr(e,n):Tt&&wt||!bt.test(n)?e.setAttribute(!wt&&d.propFix[n]||n,n):e[d.camelCase("default-"+n)]=e[n]=!0,n}},d.each(d.expr.match.bool.source.match(/\w+/g),function(e,t){var n=xt[t]||d.find.attr;Tt&&wt||!bt.test(t)?xt[t]=function(e,t,r){var i,o;return r||(o=xt[t],xt[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,xt[t]=o),i}:xt[t]=function(e,t,n){if(!n)return e[d.camelCase("default-"+t)]?t.toLowerCase():null}}),Tt&&wt||(d.attrHooks.value={set:function(e,t,n){if(!d.nodeName(e,"input"))return vt&&vt.set(e,t,n);e.defaultValue=t}}),wt||(vt={set:function(e,t,n){var r=e.getAttributeNode(n);if(r||e.setAttributeNode(r=e.ownerDocument.createAttribute(n)),r.value=t+="","value"===n||t===e.getAttribute(n))return t}},xt.id=xt.name=xt.coords=function(e,t,n){var r;if(!n)return(r=e.getAttributeNode(t))&&""!==r.value?r.value:null},d.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);if(n&&n.specified)return n.value},set:vt.set},d.attrHooks.contenteditable={set:function(e,t,n){vt.set(e,""!==t&&t,n)}},d.each(["width","height"],function(e,t){d.attrHooks[t]={set:function(e,n){if(""===n)return e.setAttribute(t,"auto"),n}}})),f.style||(d.attrHooks.style={get:function(e){return e.style.cssText||void 0},set:function(e,t){return e.style.cssText=t+""}});var Ct=/^(?:input|select|textarea|button|object)$/i,Et=/^(?:a|area)$/i;d.fn.extend({prop:function(e,t){return Q(this,d.prop,e,t,arguments.length>1)},removeProp:function(e){return e=d.propFix[e]||e,this.each(function(){try{this[e]=void 0,delete this[e]}catch(e){}})}}),d.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&d.isXMLDoc(e)||(t=d.propFix[t]||t,i=d.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=d.find.attr(e,"tabindex");return t?parseInt(t,10):Ct.test(e.nodeName)||Et.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),f.hrefNormalized||d.each(["href","src"],function(e,t){d.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),f.optSelected||(d.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),d.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){d.propFix[this.toLowerCase()]=this}),f.enctype||(d.propFix.enctype="encoding");var Nt=/[\t\r\n\f]/g;function kt(e){return d.attr(e,"class")||""}d.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(d.isFunction(e))return this.each(function(t){d(this).addClass(e.call(this,t,kt(this)))});if("string"==typeof e&&e)for(t=e.match(H)||[];n=this[u++];)if(i=kt(n),r=1===n.nodeType&&(" "+i+" ").replace(Nt," ")){for(a=0;o=t[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=d.trim(r))&&d.attr(n,"class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(d.isFunction(e))return this.each(function(t){d(this).removeClass(e.call(this,t,kt(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(t=e.match(H)||[];n=this[u++];)if(i=kt(n),r=1===n.nodeType&&(" "+i+" ").replace(Nt," ")){for(a=0;o=t[a++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");i!==(s=d.trim(r))&&d.attr(n,"class",s)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):d.isFunction(e)?this.each(function(n){d(this).toggleClass(e.call(this,n,kt(this),t),t)}):this.each(function(){var t,r,i,o;if("string"===n)for(r=0,i=d(this),o=e.match(H)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else void 0!==e&&"boolean"!==n||((t=kt(this))&&d._data(this,"__className__",t),d.attr(this,"class",t||!1===e?"":d._data(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+kt(n)+" ").replace(Nt," ").indexOf(t)>-1)return!0;return!1}}),d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){d.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),d.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}});var St=e.location,At=d.now(),Dt=/\?/,jt=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;d.parseJSON=function(t){if(e.JSON&&e.JSON.parse)return e.JSON.parse(t+"");var n,r=null,i=d.trim(t+"");return i&&!d.trim(i.replace(jt,function(e,t,i,o){return n&&t&&(r=0),0===r?e:(n=i||t,r+=!o-!i,"")}))?Function("return "+i)():d.error("Invalid JSON: "+t)},d.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{e.DOMParser?n=(new e.DOMParser).parseFromString(t,"text/xml"):((n=new e.ActiveXObject("Microsoft.XMLDOM")).async="false",n.loadXML(t))}catch(e){n=void 0}return n&&n.documentElement&&!n.getElementsByTagName("parsererror").length||d.error("Invalid XML: "+t),n};var Lt=/#.*$/,Ht=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,_t=/^(?:GET|HEAD)$/,Ft=/^\/\//,Mt=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ot={},Rt={},Pt="*/".concat("*"),Bt=St.href,Wt=Mt.exec(Bt.toLowerCase())||[];function It(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(H)||[];if(d.isFunction(n))for(;r=o[i++];)"+"===r.charAt(0)?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function $t(e,t,n,r){var i={},o=e===Rt;function a(s){var u;return i[s]=!0,d.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=d.ajaxSettings.flatOptions||{};for(r in t)void 0!==t[r]&&((i[r]?e:n||(n={}))[r]=t[r]);return n&&d.extend(!0,e,n),e}function Xt(e){return e.style&&e.style.display||d.css(e,"display")}d.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Bt,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Wt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Pt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":d.parseJSON,"text xml":d.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,d.ajaxSettings),t):zt(d.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Rt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var r,i,o,a,s,u,l,c,f=d.ajaxSetup({},n),p=f.context||f,h=f.context&&(p.nodeType||p.jquery)?d(p):d.event,g=d.Deferred(),m=d.Callbacks("once memory"),v=f.statusCode||{},y={},x={},b=0,w="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c)for(c={};t=qt.exec(a);)c[t[1].toLowerCase()]=t[2];t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=x[n]=x[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(b<2)for(t in e)v[t]=[v[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||w;return l&&l.abort(t),C(0,t),this}};if(g.promise(T).complete=m.add,T.success=T.done,T.error=T.fail,f.url=((t||f.url||Bt)+"").replace(Lt,"").replace(Ft,Wt[1]+"//"),f.type=n.method||n.type||f.method||f.type,f.dataTypes=d.trim(f.dataType||"*").toLowerCase().match(H)||[""],null==f.crossDomain&&(r=Mt.exec(f.url.toLowerCase()),f.crossDomain=!(!r||r[1]===Wt[1]&&r[2]===Wt[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(Wt[3]||("http:"===Wt[1]?"80":"443")))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=d.param(f.data,f.traditional)),$t(Ot,f,n,T),2===b)return T;for(i in(u=d.event&&f.global)&&0==d.active++&&d.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!_t.test(f.type),o=f.url,f.hasContent||(f.data&&(o=f.url+=(Dt.test(o)?"&":"?")+f.data,delete f.data),!1===f.cache&&(f.url=Ht.test(o)?o.replace(Ht,"$1_="+At++):o+(Dt.test(o)?"&":"?")+"_="+At++)),f.ifModified&&(d.lastModified[o]&&T.setRequestHeader("If-Modified-Since",d.lastModified[o]),d.etag[o]&&T.setRequestHeader("If-None-Match",d.etag[o])),(f.data&&f.hasContent&&!1!==f.contentType||n.contentType)&&T.setRequestHeader("Content-Type",f.contentType),T.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Pt+"; q=0.01":""):f.accepts["*"]),f.headers)T.setRequestHeader(i,f.headers[i]);if(f.beforeSend&&(!1===f.beforeSend.call(p,T,f)||2===b))return T.abort();for(i in w="abort",{success:1,error:1,complete:1})T[i](f[i]);if(l=$t(Rt,f,n,T)){if(T.readyState=1,u&&h.trigger("ajaxSend",[T,f]),2===b)return T;f.async&&f.timeout>0&&(s=e.setTimeout(function(){T.abort("timeout")},f.timeout));try{b=1,l.send(y,C)}catch(e){if(!(b<2))throw e;C(-1,e)}}else C(-1,"No Transport");function C(t,n,r,i){var c,y,x,w,C,E=n;2!==b&&(b=2,s&&e.clearTimeout(s),l=void 0,a=i||"",T.readyState=t>0?4:0,c=t>=200&&t<300||304===t,r&&(w=function(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(a in s)if(s[a]&&s[a].test(i)){u.unshift(a);break}if(u[0]in n)o=u[0];else{for(a in n){if(!u[0]||e.converters[a+" "+u[0]]){o=a;break}r||(r=a)}o=o||r}if(o)return o!==u[0]&&u.unshift(o),n[o]}(f,T,r)),w=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(e.crossDomain&&"script"===o)continue;if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(f,w,T,c),c?(f.ifModified&&((C=T.getResponseHeader("Last-Modified"))&&(d.lastModified[o]=C),(C=T.getResponseHeader("etag"))&&(d.etag[o]=C)),204===t||"HEAD"===f.type?E="nocontent":304===t?E="notmodified":(E=w.state,y=w.data,c=!(x=w.error))):(x=E,!t&&E||(E="error",t<0&&(t=0))),T.status=t,T.statusText=(n||E)+"",c?g.resolveWith(p,[y,E,T]):g.rejectWith(p,[T,E,x]),T.statusCode(v),v=void 0,u&&h.trigger(c?"ajaxSuccess":"ajaxError",[T,f,c?y:x]),m.fireWith(p,[T,E]),u&&(h.trigger("ajaxComplete",[T,f]),--d.active||d.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return d.get(e,t,n,"json")},getScript:function(e,t){return d.get(e,void 0,t,"script")}}),d.each(["get","post"],function(e,t){d[t]=function(e,n,r,i){return d.isFunction(n)&&(i=i||r,r=n,n=void 0),d.ajax(d.extend({url:e,type:t,dataType:i,data:n,success:r},d.isPlainObject(e)&&e))}}),d._evalUrl=function(e){return d.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},d.fn.extend({wrapAll:function(e){if(d.isFunction(e))return this.each(function(t){d(this).wrapAll(e.call(this,t))});if(this[0]){var t=d(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return d.isFunction(e)?this.each(function(t){d(this).wrapInner(e.call(this,t))}):this.each(function(){var t=d(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=d.isFunction(e);return this.each(function(n){d(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){d.nodeName(this,"body")||d(this).replaceWith(this.childNodes)}).end()}}),d.expr.filters.hidden=function(e){return f.reliableHiddenOffsets()?e.offsetWidth<=0&&e.offsetHeight<=0&&!e.getClientRects().length:function(e){if(!d.contains(e.ownerDocument||r,e))return!0;for(;e&&1===e.nodeType;){if("none"===Xt(e)||"hidden"===e.type)return!0;e=e.parentNode}return!1}(e)},d.expr.filters.visible=function(e){return!d.expr.filters.hidden(e)};var Ut=/%20/g,Vt=/\[\]$/,Yt=/\r?\n/g,Jt=/^(?:submit|button|image|reset|file)$/i,Gt=/^(?:input|select|textarea|keygen)/i;function Qt(e,t,n,r){var i;if(d.isArray(t))d.each(t,function(t,i){n||Vt.test(e)?r(e,i):Qt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==d.type(t))r(e,t);else for(i in t)Qt(e+"["+i+"]",t[i],n,r)}d.param=function(e,t){var n,r=[],i=function(e,t){t=d.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=d.ajaxSettings&&d.ajaxSettings.traditional),d.isArray(e)||e.jquery&&!d.isPlainObject(e))d.each(e,function(){i(this.name,this.value)});else for(n in e)Qt(n,e[n],t,i);return r.join("&").replace(Ut,"+")},d.fn.extend({serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=d.prop(this,"elements");return e?d.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!d(this).is(":disabled")&&Gt.test(this.nodeName)&&!Jt.test(e)&&(this.checked||!K.test(e))}).map(function(e,t){var n=d(this).val();return null==n?null:d.isArray(n)?d.map(n,function(e){return{name:t.name,value:e.replace(Yt,"\r\n")}}):{name:t.name,value:n.replace(Yt,"\r\n")}}).get()}}),d.ajaxSettings.xhr=void 0!==e.ActiveXObject?function(){return this.isLocal?nn():r.documentMode>8?tn():/^(get|post|head|put|delete|options)$/i.test(this.type)&&tn()||nn()}:tn;var Kt=0,Zt={},en=d.ajaxSettings.xhr();function tn(){try{return new e.XMLHttpRequest}catch(e){}}function nn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}e.attachEvent&&e.attachEvent("onunload",function(){for(var e in Zt)Zt[e](void 0,!0)}),f.cors=!!en&&"withCredentials"in en,(en=f.ajax=!!en)&&d.ajaxTransport(function(t){var n;if(!t.crossDomain||f.cors)return{send:function(r,i){var o,a=t.xhr(),s=++Kt;if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(o in t.xhrFields)a[o]=t.xhrFields[o];for(o in t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest"),r)void 0!==r[o]&&a.setRequestHeader(o,r[o]+"");a.send(t.hasContent&&t.data||null),n=function(e,r){var o,u,l;if(n&&(r||4===a.readyState))if(delete Zt[s],n=void 0,a.onreadystatechange=d.noop,r)4!==a.readyState&&a.abort();else{l={},o=a.status,"string"==typeof a.responseText&&(l.text=a.responseText);try{u=a.statusText}catch(e){u=""}o||!t.isLocal||t.crossDomain?1223===o&&(o=204):o=l.text?200:404}l&&i(o,u,l,a.getAllResponseHeaders())},t.async?4===a.readyState?e.setTimeout(n):a.onreadystatechange=Zt[s]=n:n()},abort:function(){n&&n(void 0,!0)}}}),d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return d.globalEval(e),e}}}),d.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),d.ajaxTransport("script",function(e){if(e.crossDomain){var t,n=r.head||d("head")[0]||r.documentElement;return{send:function(i,o){(t=r.createElement("script")).async=!0,e.scriptCharset&&(t.charset=e.scriptCharset),t.src=e.url,t.onload=t.onreadystatechange=function(e,n){(n||!t.readyState||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),t=null,n||o(200,"success"))},n.insertBefore(t,n.firstChild)},abort:function(){t&&t.onload(void 0,!0)}}}});var rn=[],on=/(=)\?(?=&|$)|\?\?/;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=rn.pop()||d.expando+"_"+At++;return this[e]=!0,e}}),d.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(on.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&on.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=d.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(on,"$1"+i):!1!==t.jsonp&&(t.url+=(Dt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||d.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?d(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,rn.push(i)),a&&d.isFunction(o)&&o(a[0]),a=o=void 0}),"script"}),d.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||r;var i=T.exec(e),o=!n&&[];return i?[t.createElement(i[1])]:(i=ce([e],t,o),o&&o.length&&d(o).remove(),d.merge([],i.childNodes))};var an=d.fn.load;function sn(e){return d.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)}d.fn.load=function(e,t,n){if("string"!=typeof e&&an)return an.apply(this,arguments);var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=d.trim(e.slice(s,e.length)),e=e.slice(0,s)),d.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&d.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?d("<div>").append(d.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},d.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){d.fn[t]=function(e){return this.on(t,e)}}),d.expr.filters.animated=function(e){return d.grep(d.timers,function(t){return e===t.elem}).length},d.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=d.css(e,"position"),c=d(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=d.css(e,"top"),u=d.css(e,"left"),("absolute"===l||"fixed"===l)&&d.inArray("auto",[o,u])>-1?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),d.isFunction(t)&&(t=t.call(e,n,d.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},d.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){d.offset.setOffset(this,e,t)});var t,n,r={top:0,left:0},i=this[0],o=i&&i.ownerDocument;return o?(t=o.documentElement,d.contains(t,i)?(void 0!==i.getBoundingClientRect&&(r=i.getBoundingClientRect()),n=sn(o),{top:r.top+(n.pageYOffset||t.scrollTop)-(t.clientTop||0),left:r.left+(n.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}):r):void 0},position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===d.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),d.nodeName(e[0],"html")||(n=e.offset()),n.top+=d.css(e[0],"borderTopWidth",!0),n.left+=d.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-d.css(r,"marginTop",!0),left:t.left-n.left-d.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&!d.nodeName(e,"html")&&"static"===d.css(e,"position");)e=e.offsetParent;return e||Ie})}}),d.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n=/Y/.test(t);d.fn[e]=function(r){return Q(this,function(e,r,i){var o=sn(e);if(void 0===i)return o?t in o?o[t]:o.document.documentElement[r]:e[r];o?o.scrollTo(n?d(o).scrollLeft():i,n?i:d(o).scrollTop()):e[r]=i},e,r,arguments.length,null)}}),d.each(["top","left"],function(e,t){d.cssHooks[t]=Ue(f.pixelPosition,function(e,n){if(n)return n=ze(e,t),Be.test(n)?d(e).position()[t]+"px":n})}),d.each({Height:"height",Width:"width"},function(e,t){d.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){d.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),a=n||(!0===r||!0===i?"margin":"border");return Q(this,function(t,n,r){var i;return d.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?d.css(t,n,a):d.style(t,n,r,a)},t,o?r:void 0,o,null)}})}),d.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),d.fn.size=function(){return this.length},d.fn.andSelf=d.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return d});var un=e.jQuery,ln=e.$;return d.noConflict=function(t){return e.$===d&&(e.$=ln),t&&e.jQuery===d&&(e.jQuery=un),d},t||(e.jQuery=e.$=d),d});


/*===============================
/media/jui/js/jquery-noconflict.js
================================================================================*/;
jQuery.noConflict();



/*===============================
/media/jui/js/jquery-migrate.min.js
================================================================================*/;
/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);


/*===============================
/media/jui/js/jquery.ui.core.min.js
================================================================================*/;
/*! jQuery UI - v1.9.2 - 2013-07-14
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js
* Copyright 2013 jQuery Foundation and other contributors Licensed MIT */
(function(b,f){var a=0,e=/^ui-id-\d+$/;b.ui=b.ui||{};if(b.ui.version){return}b.extend(b.ui,{version:"1.9.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});b.fn.extend({_focus:b.fn.focus,focus:function(g,h){return typeof g==="number"?this.each(function(){var i=this;setTimeout(function(){b(i).focus();if(h){h.call(i)}},g)}):this._focus.apply(this,arguments)},scrollParent:function(){var g;if((b.ui.ie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){g=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(b.css(this,"position"))&&(/(auto|scroll)/).test(b.css(this,"overflow")+b.css(this,"overflow-y")+b.css(this,"overflow-x"))}).eq(0)}else{g=this.parents().filter(function(){return(/(auto|scroll)/).test(b.css(this,"overflow")+b.css(this,"overflow-y")+b.css(this,"overflow-x"))}).eq(0)}return(/fixed/).test(this.css("position"))||!g.length?b(document):g},zIndex:function(j){if(j!==f){return this.css("zIndex",j)}if(this.length){var h=b(this[0]),g,i;while(h.length&&h[0]!==document){g=h.css("position");if(g==="absolute"||g==="relative"||g==="fixed"){i=parseInt(h.css("zIndex"),10);if(!isNaN(i)&&i!==0){return i}}h=h.parent()}}return 0},uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++a)}})},removeUniqueId:function(){return this.each(function(){if(e.test(this.id)){b(this).removeAttr("id")}})}});function d(i,g){var k,j,h,l=i.nodeName.toLowerCase();if("area"===l){k=i.parentNode;j=k.name;if(!i.href||!j||k.nodeName.toLowerCase()!=="map"){return false}h=b("img[usemap=#"+j+"]")[0];return !!h&&c(h)}return(/input|select|textarea|button|object/.test(l)?!i.disabled:"a"===l?i.href||g:g)&&c(i)}function c(g){return b.expr.filters.visible(g)&&!b(g).parents().andSelf().filter(function(){return b.css(this,"visibility")==="hidden"}).length}b.extend(b.expr[":"],{data:b.expr.createPseudo?b.expr.createPseudo(function(g){return function(h){return !!b.data(h,g)}}):function(j,h,g){return !!b.data(j,g[3])},focusable:function(g){return d(g,!isNaN(b.attr(g,"tabindex")))},tabbable:function(i){var g=b.attr(i,"tabindex"),h=isNaN(g);return(h||g>=0)&&d(i,!h)}});b(function(){var g=document.body,h=g.appendChild(h=document.createElement("div"));h.offsetHeight;b.extend(h.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});b.support.minHeight=h.offsetHeight===100;b.support.selectstart="onselectstart" in h;g.removeChild(h).style.display="none"});if(!b("<a>").outerWidth(1).jquery){b.each(["Width","Height"],function(j,g){var h=g==="Width"?["Left","Right"]:["Top","Bottom"],k=g.toLowerCase(),m={innerWidth:b.fn.innerWidth,innerHeight:b.fn.innerHeight,outerWidth:b.fn.outerWidth,outerHeight:b.fn.outerHeight};function l(o,n,i,p){b.each(h,function(){n-=parseFloat(b.css(o,"padding"+this))||0;if(i){n-=parseFloat(b.css(o,"border"+this+"Width"))||0}if(p){n-=parseFloat(b.css(o,"margin"+this))||0}});return n}b.fn["inner"+g]=function(i){if(i===f){return m["inner"+g].call(this)}return this.each(function(){b(this).css(k,l(this,i)+"px")})};b.fn["outer"+g]=function(i,n){if(typeof i!=="number"){return m["outer"+g].call(this,i)}return this.each(function(){b(this).css(k,l(this,i,true,n)+"px")})}})}if(b("<a>").data("a-b","a").removeData("a-b").data("a-b")){b.fn.removeData=(function(g){return function(h){if(arguments.length){return g.call(this,b.camelCase(h))}else{return g.call(this)}}})(b.fn.removeData)}(function(){var g=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||[];b.ui.ie=g.length?true:false;b.ui.ie6=parseFloat(g[1],10)===6})();b.fn.extend({disableSelection:function(){return this.bind((b.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(g){g.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});b.extend(b.ui,{plugin:{add:function(h,j,l){var g,k=b.ui[h].prototype;for(g in l){k.plugins[g]=k.plugins[g]||[];k.plugins[g].push([j,l[g]])}},call:function(g,j,h){var k,l=g.plugins[j];if(!l||!g.element[0].parentNode||g.element[0].parentNode.nodeType===11){return}for(k=0;k<l.length;k++){if(g.options[l[k][0]]){l[k][1].apply(g.element,h)}}}},contains:b.contains,hasScroll:function(j,h){if(b(j).css("overflow")==="hidden"){return false}var g=(h&&h==="left")?"scrollLeft":"scrollTop",i=false;if(j[g]>0){return true}j[g]=1;i=(j[g]>0);j[g]=0;return i},isOverAxis:function(h,g,i){return(h>g)&&(h<(g+i))},isOver:function(l,h,k,j,g,i){return b.ui.isOverAxis(l,k,g)&&b.ui.isOverAxis(h,j,i)}})})(jQuery);(function(b,e){var a=0,d=Array.prototype.slice,c=b.cleanData;b.cleanData=function(f){for(var g=0,h;(h=f[g])!=null;g++){try{b(h).triggerHandler("remove")}catch(j){}}c(f)};b.widget=function(g,j,f){var m,l,i,k,h=g.split(".")[0];g=g.split(".")[1];m=h+"-"+g;if(!f){f=j;j=b.Widget}b.expr[":"][m.toLowerCase()]=function(n){return !!b.data(n,m)};b[h]=b[h]||{};l=b[h][g];i=b[h][g]=function(n,o){if(!this._createWidget){return new i(n,o)}if(arguments.length){this._createWidget(n,o)}};b.extend(i,l,{version:f.version,_proto:b.extend({},f),_childConstructors:[]});k=new j();k.options=b.widget.extend({},k.options);b.each(f,function(o,n){if(b.isFunction(n)){f[o]=(function(){var p=function(){return j.prototype[o].apply(this,arguments)},q=function(r){return j.prototype[o].apply(this,r)};return function(){var t=this._super,r=this._superApply,s;this._super=p;this._superApply=q;s=n.apply(this,arguments);this._super=t;this._superApply=r;return s}})()}});i.prototype=b.widget.extend(k,{widgetEventPrefix:l?k.widgetEventPrefix:g},f,{constructor:i,namespace:h,widgetName:g,widgetBaseClass:m,widgetFullName:m});if(l){b.each(l._childConstructors,function(o,p){var n=p.prototype;b.widget(n.namespace+"."+n.widgetName,i,p._proto)});delete l._childConstructors}else{j._childConstructors.push(i)}b.widget.bridge(g,i)};b.widget.extend=function(k){var g=d.call(arguments,1),j=0,f=g.length,h,i;for(;j<f;j++){for(h in g[j]){i=g[j][h];if(g[j].hasOwnProperty(h)&&i!==e){if(b.isPlainObject(i)){k[h]=b.isPlainObject(k[h])?b.widget.extend({},k[h],i):b.widget.extend({},i)}else{k[h]=i}}}}return k};b.widget.bridge=function(g,f){var h=f.prototype.widgetFullName||g;b.fn[g]=function(k){var i=typeof k==="string",j=d.call(arguments,1),l=this;k=!i&&j.length?b.widget.extend.apply(null,[k].concat(j)):k;if(i){this.each(function(){var n,m=b.data(this,h);if(!m){return b.error("cannot call methods on "+g+" prior to initialization; attempted to call method '"+k+"'")}if(!b.isFunction(m[k])||k.charAt(0)==="_"){return b.error("no such method '"+k+"' for "+g+" widget instance")}n=m[k].apply(m,j);if(n!==m&&n!==e){l=n&&n.jquery?l.pushStack(n.get()):n;return false}})}else{this.each(function(){var m=b.data(this,h);if(m){m.option(k||{})._init()}else{b.data(this,h,new f(k,this))}})}return l}};b.Widget=function(){};b.Widget._childConstructors=[];b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(f,g){g=b(g||this.defaultElement||this)[0];this.element=b(g);this.uuid=a++;this.eventNamespace="."+this.widgetName+this.uuid;this.options=b.widget.extend({},this.options,this._getCreateOptions(),f);this.bindings=b();this.hoverable=b();this.focusable=b();if(g!==this){b.data(g,this.widgetName,this);b.data(g,this.widgetFullName,this);this._on(true,this.element,{remove:function(h){if(h.target===g){this.destroy()}}});this.document=b(g.style?g.ownerDocument:g.document||g);this.window=b(this.document[0].defaultView||this.document[0].parentWindow)}this._create();this._trigger("create",null,this._getCreateEventData());this._init()},_getCreateOptions:b.noop,_getCreateEventData:b.noop,_create:b.noop,_init:b.noop,destroy:function(){this._destroy();this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(b.camelCase(this.widgetFullName));this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");this.bindings.unbind(this.eventNamespace);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")},_destroy:b.noop,widget:function(){return this.element},option:function(j,k){var f=j,l,h,g;if(arguments.length===0){return b.widget.extend({},this.options)}if(typeof j==="string"){f={};l=j.split(".");j=l.shift();if(l.length){h=f[j]=b.widget.extend({},this.options[j]);for(g=0;g<l.length-1;g++){h[l[g]]=h[l[g]]||{};h=h[l[g]]}j=l.pop();if(k===e){return h[j]===e?null:h[j]}h[j]=k}else{if(k===e){return this.options[j]===e?null:this.options[j]}f[j]=k}}this._setOptions(f);return this},_setOptions:function(f){var g;for(g in f){this._setOption(g,f[g])}return this},_setOption:function(f,g){this.options[f]=g;if(f==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!g).attr("aria-disabled",g);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")}return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_on:function(i,h,g){var j,f=this;if(typeof i!=="boolean"){g=h;h=i;i=false}if(!g){g=h;h=this.element;j=this.widget()}else{h=j=b(h);this.bindings=this.bindings.add(h)}b.each(g,function(p,o){function m(){if(!i&&(f.options.disabled===true||b(this).hasClass("ui-state-disabled"))){return}return(typeof o==="string"?f[o]:o).apply(f,arguments)}if(typeof o!=="string"){m.guid=o.guid=o.guid||m.guid||b.guid++}var n=p.match(/^(\w+)\s*(.*)$/),l=n[1]+f.eventNamespace,k=n[2];if(k){j.delegate(k,l,m)}else{h.bind(l,m)}})},_off:function(g,f){f=(f||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;g.unbind(f).undelegate(f)},_delay:function(i,h){function g(){return(typeof i==="string"?f[i]:i).apply(f,arguments)}var f=this;return setTimeout(g,h||0)},_hoverable:function(f){this.hoverable=this.hoverable.add(f);this._on(f,{mouseenter:function(g){b(g.currentTarget).addClass("ui-state-hover")},mouseleave:function(g){b(g.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(f){this.focusable=this.focusable.add(f);this._on(f,{focusin:function(g){b(g.currentTarget).addClass("ui-state-focus")},focusout:function(g){b(g.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(f,g,h){var k,j,i=this.options[f];h=h||{};g=b.Event(g);g.type=(f===this.widgetEventPrefix?f:this.widgetEventPrefix+f).toLowerCase();g.target=this.element[0];j=g.originalEvent;if(j){for(k in j){if(!(k in g)){g[k]=j[k]}}}this.element.trigger(g,h);return !(b.isFunction(i)&&i.apply(this.element[0],[g].concat(h))===false||g.isDefaultPrevented())}};b.each({show:"fadeIn",hide:"fadeOut"},function(g,f){b.Widget.prototype["_"+g]=function(j,i,l){if(typeof i==="string"){i={effect:i}}var k,h=!i?g:i===true||typeof i==="number"?f:i.effect||f;i=i||{};if(typeof i==="number"){i={duration:i}}k=!b.isEmptyObject(i);i.complete=l;if(i.delay){j.delay(i.delay)}if(k&&b.effects&&(b.effects.effect[h]||b.uiBackCompat!==false&&b.effects[h])){j[g](i)}else{if(h!==g&&j[h]){j[h](i.duration,i.easing,l)}else{j.queue(function(m){b(this)[g]();if(l){l.call(j[0])}m()})}}}});if(b.uiBackCompat!==false){b.Widget.prototype._getCreateOptions=function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]}}})(jQuery);(function(b,c){var a=false;b(document).mouseup(function(d){a=false});b.widget("ui.mouse",{version:"1.9.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var d=this;this.element.bind("mousedown."+this.widgetName,function(e){return d._mouseDown(e)}).bind("click."+this.widgetName,function(e){if(true===b.data(e.target,d.widgetName+".preventClickEvent")){b.removeData(e.target,d.widgetName+".preventClickEvent");e.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);if(this._mouseMoveDelegate){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)}},_mouseDown:function(f){if(a){return}(this._mouseStarted&&this._mouseUp(f));this._mouseDownEvent=f;var e=this,g=(f.which===1),d=(typeof this.options.cancel==="string"&&f.target.nodeName?b(f.target).closest(this.options.cancel).length:false);if(!g||d||!this._mouseCapture(f)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){e.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(f)&&this._mouseDelayMet(f)){this._mouseStarted=(this._mouseStart(f)!==false);if(!this._mouseStarted){f.preventDefault();return true}}if(true===b.data(f.target,this.widgetName+".preventClickEvent")){b.removeData(f.target,this.widgetName+".preventClickEvent")}this._mouseMoveDelegate=function(h){return e._mouseMove(h)};this._mouseUpDelegate=function(h){return e._mouseUp(h)};b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);f.preventDefault();a=true;return true},_mouseMove:function(d){if(b.ui.ie&&!(document.documentMode>=9)&&!d.button){return this._mouseUp(d)}if(this._mouseStarted){this._mouseDrag(d);return d.preventDefault()}if(this._mouseDistanceMet(d)&&this._mouseDelayMet(d)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,d)!==false);(this._mouseStarted?this._mouseDrag(d):this._mouseUp(d))}return !this._mouseStarted},_mouseUp:function(d){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;if(d.target===this._mouseDownEvent.target){b.data(d.target,this.widgetName+".preventClickEvent",true)}this._mouseStop(d)}return false},_mouseDistanceMet:function(d){return(Math.max(Math.abs(this._mouseDownEvent.pageX-d.pageX),Math.abs(this._mouseDownEvent.pageY-d.pageY))>=this.options.distance)},_mouseDelayMet:function(d){return this.mouseDelayMet},_mouseStart:function(d){},_mouseDrag:function(d){},_mouseStop:function(d){},_mouseCapture:function(d){return true}})})(jQuery);(function(e,c){e.ui=e.ui||{};var i,j=Math.max,n=Math.abs,l=Math.round,d=/left|center|right/,g=/top|center|bottom/,a=/[\+\-]\d+%?/,k=/^\w+/,b=/%$/,f=e.fn.position;function m(q,p,o){return[parseInt(q[0],10)*(b.test(q[0])?p/100:1),parseInt(q[1],10)*(b.test(q[1])?o/100:1)]}function h(o,p){return parseInt(e.css(o,p),10)||0}e.position={scrollbarWidth:function(){if(i!==c){return i}var p,o,r=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),q=r.children()[0];e("body").append(r);p=q.offsetWidth;r.css("overflow","scroll");o=q.offsetWidth;if(p===o){o=r[0].clientWidth}r.remove();return(i=p-o)},getScrollInfo:function(s){var r=s.isWindow?"":s.element.css("overflow-x"),q=s.isWindow?"":s.element.css("overflow-y"),p=r==="scroll"||(r==="auto"&&s.width<s.element[0].scrollWidth),o=q==="scroll"||(q==="auto"&&s.height<s.element[0].scrollHeight);return{width:p?e.position.scrollbarWidth():0,height:o?e.position.scrollbarWidth():0}},getWithinInfo:function(p){var q=e(p||window),o=e.isWindow(q[0]);return{element:q,isWindow:o,offset:q.offset()||{left:0,top:0},scrollLeft:q.scrollLeft(),scrollTop:q.scrollTop(),width:o?q.width():q.outerWidth(),height:o?q.height():q.outerHeight()}}};e.fn.position=function(y){if(!y||!y.of){return f.apply(this,arguments)}y=e.extend({},y);var z,v,s,x,r,u=e(y.of),q=e.position.getWithinInfo(y.within),o=e.position.getScrollInfo(q),t=u[0],w=(y.collision||"flip").split(" "),p={};if(t.nodeType===9){v=u.width();s=u.height();x={top:0,left:0}}else{if(e.isWindow(t)){v=u.width();s=u.height();x={top:u.scrollTop(),left:u.scrollLeft()}}else{if(t.preventDefault){y.at="left top";v=s=0;x={top:t.pageY,left:t.pageX}}else{v=u.outerWidth();s=u.outerHeight();x=u.offset()}}}r=e.extend({},x);e.each(["my","at"],function(){var C=(y[this]||"").split(" "),B,A;if(C.length===1){C=d.test(C[0])?C.concat(["center"]):g.test(C[0])?["center"].concat(C):["center","center"]}C[0]=d.test(C[0])?C[0]:"center";C[1]=g.test(C[1])?C[1]:"center";B=a.exec(C[0]);A=a.exec(C[1]);p[this]=[B?B[0]:0,A?A[0]:0];y[this]=[k.exec(C[0])[0],k.exec(C[1])[0]]});if(w.length===1){w[1]=w[0]}if(y.at[0]==="right"){r.left+=v}else{if(y.at[0]==="center"){r.left+=v/2}}if(y.at[1]==="bottom"){r.top+=s}else{if(y.at[1]==="center"){r.top+=s/2}}z=m(p.at,v,s);r.left+=z[0];r.top+=z[1];return this.each(function(){var B,K,D=e(this),F=D.outerWidth(),C=D.outerHeight(),E=h(this,"marginLeft"),A=h(this,"marginTop"),J=F+E+h(this,"marginRight")+o.width,I=C+A+h(this,"marginBottom")+o.height,G=e.extend({},r),H=m(p.my,D.outerWidth(),D.outerHeight());if(y.my[0]==="right"){G.left-=F}else{if(y.my[0]==="center"){G.left-=F/2}}if(y.my[1]==="bottom"){G.top-=C}else{if(y.my[1]==="center"){G.top-=C/2}}G.left+=H[0];G.top+=H[1];if(!e.support.offsetFractions){G.left=l(G.left);G.top=l(G.top)}B={marginLeft:E,marginTop:A};e.each(["left","top"],function(M,L){if(e.ui.position[w[M]]){e.ui.position[w[M]][L](G,{targetWidth:v,targetHeight:s,elemWidth:F,elemHeight:C,collisionPosition:B,collisionWidth:J,collisionHeight:I,offset:[z[0]+H[0],z[1]+H[1]],my:y.my,at:y.at,within:q,elem:D})}});if(e.fn.bgiframe){D.bgiframe()}if(y.using){K=function(O){var Q=x.left-G.left,N=Q+v-F,P=x.top-G.top,M=P+s-C,L={target:{element:u,left:x.left,top:x.top,width:v,height:s},element:{element:D,left:G.left,top:G.top,width:F,height:C},horizontal:N<0?"left":Q>0?"right":"center",vertical:M<0?"top":P>0?"bottom":"middle"};if(v<F&&n(Q+N)<v){L.horizontal="center"}if(s<C&&n(P+M)<s){L.vertical="middle"}if(j(n(Q),n(N))>j(n(P),n(M))){L.important="horizontal"}else{L.important="vertical"}y.using.call(this,O,L)}}D.offset(e.extend(G,{using:K}))})};e.ui.position={fit:{left:function(s,r){var q=r.within,u=q.isWindow?q.scrollLeft:q.offset.left,w=q.width,t=s.left-r.collisionPosition.marginLeft,v=u-t,p=t+r.collisionWidth-w-u,o;if(r.collisionWidth>w){if(v>0&&p<=0){o=s.left+v+r.collisionWidth-w-u;s.left+=v-o}else{if(p>0&&v<=0){s.left=u}else{if(v>p){s.left=u+w-r.collisionWidth}else{s.left=u}}}}else{if(v>0){s.left+=v}else{if(p>0){s.left-=p}else{s.left=j(s.left-t,s.left)}}}},top:function(r,q){var p=q.within,v=p.isWindow?p.scrollTop:p.offset.top,w=q.within.height,t=r.top-q.collisionPosition.marginTop,u=v-t,s=t+q.collisionHeight-w-v,o;if(q.collisionHeight>w){if(u>0&&s<=0){o=r.top+u+q.collisionHeight-w-v;r.top+=u-o}else{if(s>0&&u<=0){r.top=v}else{if(u>s){r.top=v+w-q.collisionHeight}else{r.top=v}}}}else{if(u>0){r.top+=u}else{if(s>0){r.top-=s}else{r.top=j(r.top-t,r.top)}}}}},flip:{left:function(u,t){var s=t.within,y=s.offset.left+s.scrollLeft,B=s.width,q=s.isWindow?s.scrollLeft:s.offset.left,v=u.left-t.collisionPosition.marginLeft,z=v-q,p=v+t.collisionWidth-B-q,x=t.my[0]==="left"?-t.elemWidth:t.my[0]==="right"?t.elemWidth:0,A=t.at[0]==="left"?t.targetWidth:t.at[0]==="right"?-t.targetWidth:0,r=-2*t.offset[0],o,w;if(z<0){o=u.left+x+A+r+t.collisionWidth-B-y;if(o<0||o<n(z)){u.left+=x+A+r}}else{if(p>0){w=u.left-t.collisionPosition.marginLeft+x+A+r-q;if(w>0||n(w)<p){u.left+=x+A+r}}}},top:function(t,s){var r=s.within,A=r.offset.top+r.scrollTop,B=r.height,o=r.isWindow?r.scrollTop:r.offset.top,v=t.top-s.collisionPosition.marginTop,x=v-o,u=v+s.collisionHeight-B-o,y=s.my[1]==="top",w=y?-s.elemHeight:s.my[1]==="bottom"?s.elemHeight:0,C=s.at[1]==="top"?s.targetHeight:s.at[1]==="bottom"?-s.targetHeight:0,q=-2*s.offset[1],z,p;if(x<0){p=t.top+w+C+q+s.collisionHeight-B-A;if((t.top+w+C+q)>x&&(p<0||p<n(x))){t.top+=w+C+q}}else{if(u>0){z=t.top-s.collisionPosition.marginTop+w+C+q-o;if((t.top+w+C+q)>u&&(z>0||n(z)<u)){t.top+=w+C+q}}}}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments);e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments);e.ui.position.fit.top.apply(this,arguments)}}};(function(){var s,u,p,r,q,o=document.getElementsByTagName("body")[0],t=document.createElement("div");s=document.createElement(o?"div":"body");p={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};if(o){e.extend(p,{position:"absolute",left:"-1000px",top:"-1000px"})}for(q in p){s.style[q]=p[q]}s.appendChild(t);u=o||document.documentElement;u.insertBefore(s,u.firstChild);t.style.cssText="position: absolute; left: 10.7432222px;";r=e(t).offset().left;e.support.offsetFractions=r>10&&r<11;s.innerHTML="";u.removeChild(s)})();if(e.uiBackCompat!==false){(function(p){var o=p.fn.position;p.fn.position=function(r){if(!r||!r.offset){return o.call(this,r)}var s=r.offset.split(" "),q=r.at.split(" ");if(s.length===1){s[1]=s[0]}if(/^\d/.test(s[0])){s[0]="+"+s[0]}if(/^\d/.test(s[1])){s[1]="+"+s[1]}if(q.length===1){if(/left|center|right/.test(q[0])){q[1]="center"}else{q[1]=q[0];q[0]="center"}}return o.call(this,p.extend(r,{at:q[0]+s[0]+" "+q[1]+s[1],offset:c}))}}(jQuery))}}(jQuery));


/*===============================
/media/com_ems/js/lib/jquery.form.min.js
================================================================================*/;
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=this;if(i.clk=r,"image"==r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n={};n.fileapi=void 0!==e("<input type='file'/>").get(0).files,n.formdata=void 0!==window.FormData;var i=!!e.fn.prop;e.fn.attr2=function(){if(!i)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function r(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;o>a;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function o(a){for(var n=new FormData,i=0;i<a.length;i++)n.append(a[i].name,a[i].value);if(t.extraData){var o=r(t.extraData);for(i=0;i<o.length;i++)o[i]&&n.append(o[i][0],o[i][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(s.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),s.data=null;var c=s.beforeSend;return s.beforeSend=function(e,r){r.data=t.formData?t.formData:n,c&&c.call(this,e,r)},e.ajax(s)}function s(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(r){a("cannot get iframe.contentWindow document: "+r)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function o(){function t(){try{var e=n(g).readyState;a("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(r){a("Server abort: ",r," (",r.name,")"),s(k),j&&clearTimeout(j),j=void 0}}var r=f.attr2("target"),i=f.attr2("action"),o="multipart/form-data",c=f.attr("enctype")||f.attr("encoding")||o;w.setAttribute("target",p),(!u||/post/i.test(u))&&w.setAttribute("method","POST"),i!=m.url&&w.setAttribute("action",m.url),m.skipEncodingOverride||u&&!/post/i.test(u)||f.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(j=setTimeout(function(){T=!0,s(D)},m.timeout));var l=[];try{if(m.extraData)for(var d in m.extraData)m.extraData.hasOwnProperty(d)&&l.push(e.isPlainObject(m.extraData[d])&&m.extraData[d].hasOwnProperty("name")&&m.extraData[d].hasOwnProperty("value")?e('<input type="hidden" name="'+m.extraData[d].name+'">').val(m.extraData[d].value).appendTo(w)[0]:e('<input type="hidden" name="'+d+'">').val(m.extraData[d]).appendTo(w)[0]);m.iframeTarget||v.appendTo("body"),g.attachEvent?g.attachEvent("onload",s):g.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(h){var x=document.createElement("form").submit;x.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",c),r?w.setAttribute("target",r):f.removeAttr("target"),e(l).remove()}}function s(t){if(!x.aborted&&!F){if(M=n(g),M||(a("cannot access response document"),t=k),t===D&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t==k&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(M&&M.location.href!=m.iframeSrc||T){g.detachEvent?g.detachEvent("onload",s):g.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"==m.dataType||M.XMLDocument||e.isXMLDoc(M);if(a("isXml="+o),!o&&window.opera&&(null===M.body||!M.body.innerHTML)&&--O)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=M.body?M.body:M.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=M.XMLDocument?M.XMLDocument:M,o&&(m.dataType="xml"),x.getResponseHeader=function(e){var t={"content-type":m.dataType};return t[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(m.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||m.textarea){var f=M.getElementsByTagName("textarea")[0];if(f)x.responseText=f.value,x.status=Number(f.getAttribute("status"))||x.status,x.statusText=f.getAttribute("statusText")||x.statusText;else if(l){var p=M.getElementsByTagName("pre")[0],h=M.getElementsByTagName("body")[0];p?x.responseText=p.textContent?p.textContent:p.innerText:h&&(x.responseText=h.textContent?h.textContent:h.innerText)}}else"xml"==c&&!x.responseXML&&x.responseText&&(x.responseXML=X(x.responseText));try{E=_(x,c,m)}catch(y){i="parsererror",x.error=r=y||i}}catch(y){a("error caught: ",y),i="error",x.error=r=y||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(m.success&&m.success.call(m.context,E,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,m])):i&&(void 0===r&&(r=x.statusText),m.error&&m.error.call(m.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,m,r])),d&&e.event.trigger("ajaxComplete",[x,m]),d&&!--e.active&&e.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,x,i),F=!0,m.timeout&&clearTimeout(j),setTimeout(function(){m.iframeTarget?v.attr("src",m.iframeSrc):v.remove(),x.responseXML=null},100)}}}var c,l,m,d,p,v,g,x,y,b,T,j,w=f[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(l=0;l<h.length;l++)c=e(h[l]),i?c.prop("disabled",!1):c.removeAttr("disabled");if(m=e.extend(!0,{},e.ajaxSettings,t),m.context=m.context||m,p="jqFormIO"+(new Date).getTime(),m.iframeTarget?(v=e(m.iframeTarget),b=v.attr2("name"),b?p=b:v.attr2("name",p)):(v=e('<iframe name="'+p+'" src="'+m.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"})),g=v[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{g.contentWindow.document.execCommand&&g.contentWindow.document.execCommand("Stop")}catch(n){}v.attr("src",m.iframeSrc),x.error=r,m.error&&m.error.call(m.context,x,r,t),d&&e.event.trigger("ajaxError",[x,m,r]),m.complete&&m.complete.call(m.context,x,r)}},d=m.global,d&&0===e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,m]),m.beforeSend&&m.beforeSend.call(m.context,x,m)===!1)return m.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;y=w.clk,y&&(b=y.name,b&&!y.disabled&&(m.extraData=m.extraData||{},m.extraData[b]=y.value,"image"==y.type&&(m.extraData[b+".x"]=w.clk_x,m.extraData[b+".y"]=w.clk_y)));var D=1,k=2,A=e("meta[name=csrf-token]").attr("content"),L=e("meta[name=csrf-param]").attr("content");L&&A&&(m.extraData=m.extraData||{},m.extraData[L]=A),m.forceSync?o():setTimeout(o,10);var E,M,F,O=50,X=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},C=e.parseJSON||function(e){return window.eval("("+e+")")},_=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i="xml"===r||!r&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=C(o):("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var u,c,l,f=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),u=t.type||this.attr2("method"),c=t.url||this.attr2("action"),l="string"==typeof c?e.trim(c):"",l=l||window.location.href||"",l&&(l=(l.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:l,success:e.ajaxSettings.success,type:u||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var d=t.traditional;void 0===d&&(d=e.ajaxSettings.traditional);var p,h=[],v=this.formToArray(t.semantic,h);if(t.data&&(t.extraData=t.data,p=e.param(t.data,d)),t.beforeSubmit&&t.beforeSubmit(v,this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var g=e.param(v,d);p&&(g=g?g+"&"+p:p),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,t.data=null):t.data=g;var x=[];if(t.resetForm&&x.push(function(){f.resetForm()}),t.clearForm&&x.push(function(){f.clearForm(t.includeHidden)}),!t.dataType&&t.target){var y=t.success||function(){};x.push(function(r){var a=t.replaceTarget?"replaceWith":"html";e(t.target)[a](r).each(y,arguments)})}else t.success&&x.push(t.success);if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=x.length;o>i;i++)x[i].apply(n,[e,r,a||f,f])},t.error){var b=t.error;t.error=function(e,r,a){var n=t.context||this;b.apply(n,[e,r,a,f])}}if(t.complete){var T=t.complete;t.complete=function(e,r){var a=t.context||this;T.apply(a,[e,r,f])}}var j=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}),w=j.length>0,S="multipart/form-data",D=f.attr("enctype")==S||f.attr("encoding")==S,k=n.fileapi&&n.formdata;a("fileAPI :"+k);var A,L=(w||D)&&!k;t.iframe!==!1&&(t.iframe||L)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){A=s(v)}):A=s(v):A=(w||D)&&k?o(v):e.ajax(t),f.removeData("jqxhr").data("jqxhr",A);for(var E=0;E<h.length;E++)h[E]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n){if(n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var i={s:this.selector,c:this.context};return!e.isReady&&i.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(i.s,i.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",n,t).bind("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r){var a=[];if(0===this.length)return a;var i,o=this[0],s=this.attr("id"),u=t?o.getElementsByTagName("*"):o.elements;if(u&&!/MSIE [678]/.test(navigator.userAgent)&&(u=e(u).get()),s&&(i=e(':input[form="'+s+'"]').get(),i.length&&(u=(u||[]).concat(i))),!u||!u.length)return a;var c,l,f,m,d,p,h;for(c=0,p=u.length;p>c;c++)if(d=u[c],f=d.name,f&&!d.disabled)if(t&&o.clk&&"image"==d.type)o.clk==d&&(a.push({name:f,value:e(d).val(),type:d.type}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}));else if(m=e.fieldValue(d,!0),m&&m.constructor==Array)for(r&&r.push(d),l=0,h=m.length;h>l;l++)a.push({name:f,value:m[l]});else if(n.fileapi&&"file"==d.type){r&&r.push(d);var v=d.files;if(v.length)for(l=0;l<v.length;l++)a.push({name:f,value:v[l],type:d.type});else a.push({name:f,value:"",type:d.type})}else null!==m&&"undefined"!=typeof m&&(r&&r.push(d),a.push({name:f,value:m,type:d.type,required:d.required}));if(!t&&o.clk){var g=e(o.clk),x=g[0];f=x.name,f&&!x.disabled&&"image"==x.type&&(a.push({name:f,value:g.val()}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}))}return a},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;o>i;i++)r.push({name:a,value:n[i]});else null!==n&&"undefined"!=typeof n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;n>a;a++){var i=this[a],o=e.fieldValue(i,t);null===o||"undefined"==typeof o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(0>o)return null;for(var s=[],u=t.options,c="select-one"==n,l=c?o+1:u.length,f=c?o:0;l>f;f++){var m=u[f];if(m.selected){var d=m.value;if(d||(d=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),c)return d;s.push(d)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"==n?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==n?this.selectedIndex=-1:"file"==a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});


/*===============================
/media/com_ems/js/lib/typeahead_0.11.1.js
================================================================================*/;
/*!
 * typeahead.js 0.11.1
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2015 Twitter, Inc. and other contributors; Licensed MIT
 */

(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define("bloodhound", [ "jquery" ], function(a0) {
            return root["Bloodhound"] = factory(a0);
        });
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"));
    } else {
        root["Bloodhound"] = factory(jQuery);
    }
})(this, function($) {
    var _ = function() {
        "use strict";
        return {
            isMsie: function() {
                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
            },
            isBlankString: function(str) {
                return !str || /^\s*$/.test(str);
            },
            escapeRegExChars: function(str) {
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            },
            isString: function(obj) {
                return typeof obj === "string";
            },
            isNumber: function(obj) {
                return typeof obj === "number";
            },
            isArray: $.isArray,
            isFunction: $.isFunction,
            isObject: $.isPlainObject,
            isUndefined: function(obj) {
                return typeof obj === "undefined";
            },
            isElement: function(obj) {
                return !!(obj && obj.nodeType === 1);
            },
            isJQuery: function(obj) {
                return obj instanceof $;
            },
            toStr: function toStr(s) {
                return _.isUndefined(s) || s === null ? "" : s + "";
            },
            bind: $.proxy,
            each: function(collection, cb) {
                $.each(collection, reverseArgs);
                function reverseArgs(index, value) {
                    return cb(value, index);
                }
            },
            map: $.map,
            filter: $.grep,
            every: function(obj, test) {
                var result = true;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (!(result = test.call(null, val, key, obj))) {
                        return false;
                    }
                });
                return !!result;
            },
            some: function(obj, test) {
                var result = false;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (result = test.call(null, val, key, obj)) {
                        return false;
                    }
                });
                return !!result;
            },
            mixin: $.extend,
            identity: function(x) {
                return x;
            },
            clone: function(obj) {
                return $.extend(true, {}, obj);
            },
            getIdGenerator: function() {
                var counter = 0;
                return function() {
                    return counter++;
                };
            },
            templatify: function templatify(obj) {
                return $.isFunction(obj) ? obj : template;
                function template() {
                    return String(obj);
                }
            },
            defer: function(fn) {
                setTimeout(fn, 0);
            },
            debounce: function(func, wait, immediate) {
                var timeout, result;
                return function() {
                    var context = this, args = arguments, later, callNow;
                    later = function() {
                        timeout = null;
                        if (!immediate) {
                            result = func.apply(context, args);
                        }
                    };
                    callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) {
                        result = func.apply(context, args);
                    }
                    return result;
                };
            },
            throttle: function(func, wait) {
                var context, args, timeout, result, previous, later;
                previous = 0;
                later = function() {
                    previous = new Date();
                    timeout = null;
                    result = func.apply(context, args);
                };
                return function() {
                    var now = new Date(), remaining = wait - (now - previous);
                    context = this;
                    args = arguments;
                    if (remaining <= 0) {
                        clearTimeout(timeout);
                        timeout = null;
                        previous = now;
                        result = func.apply(context, args);
                    } else if (!timeout) {
                        timeout = setTimeout(later, remaining);
                    }
                    return result;
                };
            },
            stringify: function(val) {
                return _.isString(val) ? val : JSON.stringify(val);
            },
            noop: function() {}
        };
    }();
    var VERSION = "0.11.1";
    var tokenizers = function() {
        "use strict";
        return {
            nonword: nonword,
            whitespace: whitespace,
            obj: {
                nonword: getObjTokenizer(nonword),
                whitespace: getObjTokenizer(whitespace)
            }
        };
        function whitespace(str) {
            str = _.toStr(str);
            return str ? str.split(/\s+/) : [];
        }
        function nonword(str) {
            str = _.toStr(str);
            return str ? str.split(/\W+/) : [];
        }
        function getObjTokenizer(tokenizer) {
            return function setKey(keys) {
                keys = _.isArray(keys) ? keys : [].slice.call(arguments, 0);
                return function tokenize(o) {
                    var tokens = [];
                    _.each(keys, function(k) {
                        tokens = tokens.concat(tokenizer(_.toStr(o[k])));
                    });
                    return tokens;
                };
            };
        }
    }();
    var LruCache = function() {
        "use strict";
        function LruCache(maxSize) {
            this.maxSize = _.isNumber(maxSize) ? maxSize : 100;
            this.reset();
            if (this.maxSize <= 0) {
                this.set = this.get = $.noop;
            }
        }
        _.mixin(LruCache.prototype, {
            set: function set(key, val) {
                var tailItem = this.list.tail, node;
                if (this.size >= this.maxSize) {
                    this.list.remove(tailItem);
                    delete this.hash[tailItem.key];
                    this.size--;
                }
                if (node = this.hash[key]) {
                    node.val = val;
                    this.list.moveToFront(node);
                } else {
                    node = new Node(key, val);
                    this.list.add(node);
                    this.hash[key] = node;
                    this.size++;
                }
            },
            get: function get(key) {
                var node = this.hash[key];
                if (node) {
                    this.list.moveToFront(node);
                    return node.val;
                }
            },
            reset: function reset() {
                this.size = 0;
                this.hash = {};
                this.list = new List();
            }
        });
        function List() {
            this.head = this.tail = null;
        }
        _.mixin(List.prototype, {
            add: function add(node) {
                if (this.head) {
                    node.next = this.head;
                    this.head.prev = node;
                }
                this.head = node;
                this.tail = this.tail || node;
            },
            remove: function remove(node) {
                node.prev ? node.prev.next = node.next : this.head = node.next;
                node.next ? node.next.prev = node.prev : this.tail = node.prev;
            },
            moveToFront: function(node) {
                this.remove(node);
                this.add(node);
            }
        });
        function Node(key, val) {
            this.key = key;
            this.val = val;
            this.prev = this.next = null;
        }
        return LruCache;
    }();
    var PersistentStorage = function() {
        "use strict";
        var LOCAL_STORAGE;
        try {
            LOCAL_STORAGE = window.localStorage;
            LOCAL_STORAGE.setItem("~~~", "!");
            LOCAL_STORAGE.removeItem("~~~");
        } catch (err) {
            LOCAL_STORAGE = null;
        }
        function PersistentStorage(namespace, override) {
            this.prefix = [ "__", namespace, "__" ].join("");
            this.ttlKey = "__ttl__";
            this.keyMatcher = new RegExp("^" + _.escapeRegExChars(this.prefix));
            this.ls = override || LOCAL_STORAGE;
            !this.ls && this._noop();
        }
        _.mixin(PersistentStorage.prototype, {
            _prefix: function(key) {
                return this.prefix + key;
            },
            _ttlKey: function(key) {
                return this._prefix(key) + this.ttlKey;
            },
            _noop: function() {
                this.get = this.set = this.remove = this.clear = this.isExpired = _.noop;
            },
            _safeSet: function(key, val) {
                try {
                    this.ls.setItem(key, val);
                } catch (err) {
                    if (err.name === "QuotaExceededError") {
                        this.clear();
                        this._noop();
                    }
                }
            },
            get: function(key) {
                if (this.isExpired(key)) {
                    this.remove(key);
                }
                return decode(this.ls.getItem(this._prefix(key)));
            },
            set: function(key, val, ttl) {
                if (_.isNumber(ttl)) {
                    this._safeSet(this._ttlKey(key), encode(now() + ttl));
                } else {
                    this.ls.removeItem(this._ttlKey(key));
                }
                return this._safeSet(this._prefix(key), encode(val));
            },
            remove: function(key) {
                this.ls.removeItem(this._ttlKey(key));
                this.ls.removeItem(this._prefix(key));
                return this;
            },
            clear: function() {
                var i, keys = gatherMatchingKeys(this.keyMatcher);
                for (i = keys.length; i--; ) {
                    this.remove(keys[i]);
                }
                return this;
            },
            isExpired: function(key) {
                var ttl = decode(this.ls.getItem(this._ttlKey(key)));
                return _.isNumber(ttl) && now() > ttl ? true : false;
            }
        });
        return PersistentStorage;
        function now() {
            return new Date().getTime();
        }
        function encode(val) {
            return JSON.stringify(_.isUndefined(val) ? null : val);
        }
        function decode(val) {
            return $.parseJSON(val);
        }
        function gatherMatchingKeys(keyMatcher) {
            var i, key, keys = [], len = LOCAL_STORAGE.length;
            for (i = 0; i < len; i++) {
                if ((key = LOCAL_STORAGE.key(i)).match(keyMatcher)) {
                    keys.push(key.replace(keyMatcher, ""));
                }
            }
            return keys;
        }
    }();
    var Transport = function() {
        "use strict";
        var pendingRequestsCount = 0, pendingRequests = {}, maxPendingRequests = 6, sharedCache = new LruCache(10);
        function Transport(o) {
            o = o || {};
            this.cancelled = false;
            this.lastReq = null;
            this._send = o.transport;
            this._get = o.limiter ? o.limiter(this._get) : this._get;
            this._cache = o.cache === false ? new LruCache(0) : sharedCache;
        }
        Transport.setMaxPendingRequests = function setMaxPendingRequests(num) {
            maxPendingRequests = num;
        };
        Transport.resetCache = function resetCache() {
            sharedCache.reset();
        };
        _.mixin(Transport.prototype, {
            _fingerprint: function fingerprint(o) {
                o = o || {};
                return o.url + o.type + $.param(o.data || {});
            },
            _get: function(o, cb) {
                var that = this, fingerprint, jqXhr;
                fingerprint = this._fingerprint(o);
                if (this.cancelled || fingerprint !== this.lastReq) {
                    return;
                }
                if (jqXhr = pendingRequests[fingerprint]) {
                    jqXhr.done(done).fail(fail);
                } else if (pendingRequestsCount < maxPendingRequests) {
                    pendingRequestsCount++;
                    pendingRequests[fingerprint] = this._send(o).done(done).fail(fail).always(always);
                } else {
                    this.onDeckRequestArgs = [].slice.call(arguments, 0);
                }
                function done(resp) {
                    cb(null, resp);
                    that._cache.set(fingerprint, resp);
                }
                function fail() {
                    cb(true);
                }
                function always() {
                    pendingRequestsCount--;
                    delete pendingRequests[fingerprint];
                    if (that.onDeckRequestArgs) {
                        that._get.apply(that, that.onDeckRequestArgs);
                        that.onDeckRequestArgs = null;
                    }
                }
            },
            get: function(o, cb) {
                var resp, fingerprint;
                cb = cb || $.noop;
                o = _.isString(o) ? {
                    url: o
                } : o || {};
                fingerprint = this._fingerprint(o);
                this.cancelled = false;
                this.lastReq = fingerprint;
                if (resp = this._cache.get(fingerprint)) {
                    cb(null, resp);
                } else {
                    this._get(o, cb);
                }
            },
            cancel: function() {
                this.cancelled = true;
            }
        });
        return Transport;
    }();
    var SearchIndex = window.SearchIndex = function() {
        "use strict";
        var CHILDREN = "c", IDS = "i";
        function SearchIndex(o) {
            o = o || {};
            if (!o.datumTokenizer || !o.queryTokenizer) {
                $.error("datumTokenizer and queryTokenizer are both required");
            }
            this.identify = o.identify || _.stringify;
            this.datumTokenizer = o.datumTokenizer;
            this.queryTokenizer = o.queryTokenizer;
            this.reset();
        }
        _.mixin(SearchIndex.prototype, {
            bootstrap: function bootstrap(o) {
                this.datums = o.datums;
                this.trie = o.trie;
            },
            add: function(data) {
                var that = this;
                data = _.isArray(data) ? data : [ data ];
                _.each(data, function(datum) {
                    var id, tokens;
                    that.datums[id = that.identify(datum)] = datum;
                    tokens = normalizeTokens(that.datumTokenizer(datum));
                    _.each(tokens, function(token) {
                        var node, chars, ch;
                        node = that.trie;
                        chars = token.split("");
                        while (ch = chars.shift()) {
                            node = node[CHILDREN][ch] || (node[CHILDREN][ch] = newNode());
                            node[IDS].push(id);
                        }
                    });
                });
            },
            get: function get(ids) {
                var that = this;
                return _.map(ids, function(id) {
                    return that.datums[id];
                });
            },
            search: function search(query) {
                var that = this, tokens, matches;
                tokens = normalizeTokens(this.queryTokenizer(query));
                _.each(tokens, function(token) {
                    var node, chars, ch, ids;
                    if (matches && matches.length === 0) {
                        return false;
                    }
                    node = that.trie;
                    chars = token.split("");
                    while (node && (ch = chars.shift())) {
                        node = node[CHILDREN][ch];
                    }
                    if (node && chars.length === 0) {
                        ids = node[IDS].slice(0);
                        matches = matches ? getIntersection(matches, ids) : ids;
                    } else {
                        matches = [];
                        return false;
                    }
                });
                return matches ? _.map(unique(matches), function(id) {
                    return that.datums[id];
                }) : [];
            },
            all: function all() {
                var values = [];
                for (var key in this.datums) {
                    values.push(this.datums[key]);
                }
                return values;
            },
            reset: function reset() {
                this.datums = {};
                this.trie = newNode();
            },
            serialize: function serialize() {
                return {
                    datums: this.datums,
                    trie: this.trie
                };
            }
        });
        return SearchIndex;
        function normalizeTokens(tokens) {
            tokens = _.filter(tokens, function(token) {
                return !!token;
            });
            tokens = _.map(tokens, function(token) {
                return token.toLowerCase();
            });
            return tokens;
        }
        function newNode() {
            var node = {};
            node[IDS] = [];
            node[CHILDREN] = {};
            return node;
        }
        function unique(array) {
            var seen = {}, uniques = [];
            for (var i = 0, len = array.length; i < len; i++) {
                if (!seen[array[i]]) {
                    seen[array[i]] = true;
                    uniques.push(array[i]);
                }
            }
            return uniques;
        }
        function getIntersection(arrayA, arrayB) {
            var ai = 0, bi = 0, intersection = [];
            arrayA = arrayA.sort();
            arrayB = arrayB.sort();
            var lenArrayA = arrayA.length, lenArrayB = arrayB.length;
            while (ai < lenArrayA && bi < lenArrayB) {
                if (arrayA[ai] < arrayB[bi]) {
                    ai++;
                } else if (arrayA[ai] > arrayB[bi]) {
                    bi++;
                } else {
                    intersection.push(arrayA[ai]);
                    ai++;
                    bi++;
                }
            }
            return intersection;
        }
    }();
    var Prefetch = function() {
        "use strict";
        var keys;
        keys = {
            data: "data",
            protocol: "protocol",
            thumbprint: "thumbprint"
        };
        function Prefetch(o) {
            this.url = o.url;
            this.ttl = o.ttl;
            this.cache = o.cache;
            this.prepare = o.prepare;
            this.transform = o.transform;
            this.transport = o.transport;
            this.thumbprint = o.thumbprint;
            this.storage = new PersistentStorage(o.cacheKey);
        }
        _.mixin(Prefetch.prototype, {
            _settings: function settings() {
                return {
                    url: this.url,
                    type: "GET",
                    dataType: "json"
                };
            },
            store: function store(data) {
                if (!this.cache) {
                    return;
                }
                this.storage.set(keys.data, data, this.ttl);
                this.storage.set(keys.protocol, location.protocol, this.ttl);
                this.storage.set(keys.thumbprint, this.thumbprint, this.ttl);
            },
            fromCache: function fromCache() {
                var stored = {}, isExpired;
                if (!this.cache) {
                    return null;
                }
                stored.data = this.storage.get(keys.data);
                stored.protocol = this.storage.get(keys.protocol);
                stored.thumbprint = this.storage.get(keys.thumbprint);
                isExpired = stored.thumbprint !== this.thumbprint || stored.protocol !== location.protocol;
                return stored.data && !isExpired ? stored.data : null;
            },
            fromNetwork: function(cb) {
                var that = this, settings;
                if (!cb) {
                    return;
                }
                settings = this.prepare(this._settings());
                this.transport(settings).fail(onError).done(onResponse);
                function onError() {
                    cb(true);
                }
                function onResponse(resp) {
                    cb(null, that.transform(resp));
                }
            },
            clear: function clear() {
                this.storage.clear();
                return this;
            }
        });
        return Prefetch;
    }();
    var Remote = function() {
        "use strict";
        function Remote(o) {
            this.url = o.url;
            this.prepare = o.prepare;
            this.transform = o.transform;
            this.transport = new Transport({
                cache: o.cache,
                limiter: o.limiter,
                transport: o.transport
            });
        }
        _.mixin(Remote.prototype, {
            _settings: function settings() {
                return {
                    url: this.url,
                    type: "GET",
                    dataType: "json"
                };
            },
            get: function get(query, cb) {
                var that = this, settings;
                if (!cb) {
                    return;
                }
                query = query || "";
                settings = this.prepare(query, this._settings());
                return this.transport.get(settings, onResponse);
                function onResponse(err, resp) {
                    err ? cb([]) : cb(that.transform(resp));
                }
            },
            cancelLastRequest: function cancelLastRequest() {
                this.transport.cancel();
            }
        });
        return Remote;
    }();
    var oParser = function() {
        "use strict";
        return function parse(o) {
            var defaults, sorter;
            defaults = {
                initialize: true,
                identify: _.stringify,
                datumTokenizer: null,
                queryTokenizer: null,
                sufficient: 5,
                sorter: null,
                local: [],
                prefetch: null,
                remote: null
            };
            o = _.mixin(defaults, o || {});
            !o.datumTokenizer && $.error("datumTokenizer is required");
            !o.queryTokenizer && $.error("queryTokenizer is required");
            sorter = o.sorter;
            o.sorter = sorter ? function(x) {
                return x.sort(sorter);
            } : _.identity;
            o.local = _.isFunction(o.local) ? o.local() : o.local;
            o.prefetch = parsePrefetch(o.prefetch);
            o.remote = parseRemote(o.remote);
            return o;
        };
        function parsePrefetch(o) {
            var defaults;
            if (!o) {
                return null;
            }
            defaults = {
                url: null,
                ttl: 24 * 60 * 60 * 1e3,
                cache: true,
                cacheKey: null,
                thumbprint: "",
                prepare: _.identity,
                transform: _.identity,
                transport: null
            };
            o = _.isString(o) ? {
                url: o
            } : o;
            o = _.mixin(defaults, o);
            !o.url && $.error("prefetch requires url to be set");
            o.transform = o.filter || o.transform;
            o.cacheKey = o.cacheKey || o.url;
            o.thumbprint = VERSION + o.thumbprint;
            o.transport = o.transport ? callbackToDeferred(o.transport) : $.ajax;
            return o;
        }
        function parseRemote(o) {
            var defaults;
            if (!o) {
                return;
            }
            defaults = {
                url: null,
                cache: true,
                prepare: null,
                replace: null,
                wildcard: null,
                limiter: null,
                rateLimitBy: "debounce",
                rateLimitWait: 300,
                transform: _.identity,
                transport: null
            };
            o = _.isString(o) ? {
                url: o
            } : o;
            o = _.mixin(defaults, o);
            !o.url && $.error("remote requires url to be set");
            o.transform = o.filter || o.transform;
            o.prepare = toRemotePrepare(o);
            o.limiter = toLimiter(o);
            o.transport = o.transport ? callbackToDeferred(o.transport) : $.ajax;
            delete o.replace;
            delete o.wildcard;
            delete o.rateLimitBy;
            delete o.rateLimitWait;
            return o;
        }
        function toRemotePrepare(o) {
            var prepare, replace, wildcard;
            prepare = o.prepare;
            replace = o.replace;
            wildcard = o.wildcard;
            if (prepare) {
                return prepare;
            }
            if (replace) {
                prepare = prepareByReplace;
            } else if (o.wildcard) {
                prepare = prepareByWildcard;
            } else {
                prepare = idenityPrepare;
            }
            return prepare;
            function prepareByReplace(query, settings) {
                settings.url = replace(settings.url, query);
                return settings;
            }
            function prepareByWildcard(query, settings) {
                settings.url = settings.url.replace(wildcard, encodeURIComponent(query));
                return settings;
            }
            function idenityPrepare(query, settings) {
                return settings;
            }
        }
        function toLimiter(o) {
            var limiter, method, wait;
            limiter = o.limiter;
            method = o.rateLimitBy;
            wait = o.rateLimitWait;
            if (!limiter) {
                limiter = /^throttle$/i.test(method) ? throttle(wait) : debounce(wait);
            }
            return limiter;
            function debounce(wait) {
                return function debounce(fn) {
                    return _.debounce(fn, wait);
                };
            }
            function throttle(wait) {
                return function throttle(fn) {
                    return _.throttle(fn, wait);
                };
            }
        }
        function callbackToDeferred(fn) {
            return function wrapper(o) {
                var deferred = $.Deferred();
                fn(o, onSuccess, onError);
                return deferred;
                function onSuccess(resp) {
                    _.defer(function() {
                        deferred.resolve(resp);
                    });
                }
                function onError(err) {
                    _.defer(function() {
                        deferred.reject(err);
                    });
                }
            };
        }
    }();
    var Bloodhound = function() {
        "use strict";
        var old;
        old = window && window.Bloodhound;
        function Bloodhound(o) {
            o = oParser(o);
            this.sorter = o.sorter;
            this.identify = o.identify;
            this.sufficient = o.sufficient;
            this.local = o.local;
            this.remote = o.remote ? new Remote(o.remote) : null;
            this.prefetch = o.prefetch ? new Prefetch(o.prefetch) : null;
            this.index = new SearchIndex({
                identify: this.identify,
                datumTokenizer: o.datumTokenizer,
                queryTokenizer: o.queryTokenizer
            });
            o.initialize !== false && this.initialize();
        }
        Bloodhound.noConflict = function noConflict() {
            window && (window.Bloodhound = old);
            return Bloodhound;
        };
        Bloodhound.tokenizers = tokenizers;
        _.mixin(Bloodhound.prototype, {
            __ttAdapter: function ttAdapter() {
                var that = this;
                return this.remote ? withAsync : withoutAsync;
                function withAsync(query, sync, async) {
                    return that.search(query, sync, async);
                }
                function withoutAsync(query, sync) {
                    return that.search(query, sync);
                }
            },
            _loadPrefetch: function loadPrefetch() {
                var that = this, deferred, serialized;
                deferred = $.Deferred();
                if (!this.prefetch) {
                    deferred.resolve();
                } else if (serialized = this.prefetch.fromCache()) {
                    this.index.bootstrap(serialized);
                    deferred.resolve();
                } else {
                    this.prefetch.fromNetwork(done);
                }
                return deferred.promise();
                function done(err, data) {
                    if (err) {
                        return deferred.reject();
                    }
                    that.add(data);
                    that.prefetch.store(that.index.serialize());
                    deferred.resolve();
                }
            },
            _initialize: function initialize() {
                var that = this, deferred;
                this.clear();
                (this.initPromise = this._loadPrefetch()).done(addLocalToIndex);
                return this.initPromise;
                function addLocalToIndex() {
                    that.add(that.local);
                }
            },
            initialize: function initialize(force) {
                return !this.initPromise || force ? this._initialize() : this.initPromise;
            },
            add: function add(data) {
                this.index.add(data);
                return this;
            },
            get: function get(ids) {
                ids = _.isArray(ids) ? ids : [].slice.call(arguments);
                return this.index.get(ids);
            },
            search: function search(query, sync, async) {
                var that = this, local;
                local = this.sorter(this.index.search(query));
                sync(this.remote ? local.slice() : local);
                if (this.remote && local.length < this.sufficient) {
                    this.remote.get(query, processRemote);
                } else if (this.remote) {
                    this.remote.cancelLastRequest();
                }
                return this;
                function processRemote(remote) {
                    var nonDuplicates = [];
                    _.each(remote, function(r) {
                        !_.some(local, function(l) {
                            return that.identify(r) === that.identify(l);
                        }) && nonDuplicates.push(r);
                    });
                    async && async(nonDuplicates);
                }
            },
            all: function all() {
                return this.index.all();
            },
            clear: function clear() {
                this.index.reset();
                return this;
            },
            clearPrefetchCache: function clearPrefetchCache() {
                this.prefetch && this.prefetch.clear();
                return this;
            },
            clearRemoteCache: function clearRemoteCache() {
                Transport.resetCache();
                return this;
            },
            ttAdapter: function ttAdapter() {
                return this.__ttAdapter();
            }
        });
        return Bloodhound;
    }();
    return Bloodhound;
});

(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define("typeahead.js", [ "jquery" ], function(a0) {
            return factory(a0);
        });
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"));
    } else {
        factory(jQuery);
    }
})(this, function($) {
    var _ = function() {
        "use strict";
        return {
            isMsie: function() {
                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
            },
            isBlankString: function(str) {
                return !str || /^\s*$/.test(str);
            },
            escapeRegExChars: function(str) {
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            },
            isString: function(obj) {
                return typeof obj === "string";
            },
            isNumber: function(obj) {
                return typeof obj === "number";
            },
            isArray: $.isArray,
            isFunction: $.isFunction,
            isObject: $.isPlainObject,
            isUndefined: function(obj) {
                return typeof obj === "undefined";
            },
            isElement: function(obj) {
                return !!(obj && obj.nodeType === 1);
            },
            isJQuery: function(obj) {
                return obj instanceof $;
            },
            toStr: function toStr(s) {
                return _.isUndefined(s) || s === null ? "" : s + "";
            },
            bind: $.proxy,
            each: function(collection, cb) {
                $.each(collection, reverseArgs);
                function reverseArgs(index, value) {
                    return cb(value, index);
                }
            },
            map: $.map,
            filter: $.grep,
            every: function(obj, test) {
                var result = true;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (!(result = test.call(null, val, key, obj))) {
                        return false;
                    }
                });
                return !!result;
            },
            some: function(obj, test) {
                var result = false;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (result = test.call(null, val, key, obj)) {
                        return false;
                    }
                });
                return !!result;
            },
            mixin: $.extend,
            identity: function(x) {
                return x;
            },
            clone: function(obj) {
                return $.extend(true, {}, obj);
            },
            getIdGenerator: function() {
                var counter = 0;
                return function() {
                    return counter++;
                };
            },
            templatify: function templatify(obj) {
                return $.isFunction(obj) ? obj : template;
                function template() {
                    return String(obj);
                }
            },
            defer: function(fn) {
                setTimeout(fn, 0);
            },
            debounce: function(func, wait, immediate) {
                var timeout, result;
                return function() {
                    var context = this, args = arguments, later, callNow;
                    later = function() {
                        timeout = null;
                        if (!immediate) {
                            result = func.apply(context, args);
                        }
                    };
                    callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) {
                        result = func.apply(context, args);
                    }
                    return result;
                };
            },
            throttle: function(func, wait) {
                var context, args, timeout, result, previous, later;
                previous = 0;
                later = function() {
                    previous = new Date();
                    timeout = null;
                    result = func.apply(context, args);
                };
                return function() {
                    var now = new Date(), remaining = wait - (now - previous);
                    context = this;
                    args = arguments;
                    if (remaining <= 0) {
                        clearTimeout(timeout);
                        timeout = null;
                        previous = now;
                        result = func.apply(context, args);
                    } else if (!timeout) {
                        timeout = setTimeout(later, remaining);
                    }
                    return result;
                };
            },
            stringify: function(val) {
                return _.isString(val) ? val : JSON.stringify(val);
            },
            noop: function() {}
        };
    }();
    var WWW = function() {
        "use strict";
        var defaultClassNames = {
            wrapper: "twitter-typeahead",
            input: "tt-input",
            hint: "tt-hint",
            menu: "tt-menu",
            dataset: "tt-dataset",
            suggestion: "tt-suggestion",
            selectable: "tt-selectable",
            empty: "tt-empty",
            open: "tt-open",
            cursor: "tt-cursor",
            highlight: "tt-highlight"
        };
        return build;
        function build(o) {
            var www, classes;
            classes = _.mixin({}, defaultClassNames, o);
            www = {
                css: buildCss(),
                classes: classes,
                html: buildHtml(classes),
                selectors: buildSelectors(classes)
            };
            return {
                css: www.css,
                html: www.html,
                classes: www.classes,
                selectors: www.selectors,
                mixin: function(o) {
                    _.mixin(o, www);
                }
            };
        }
        function buildHtml(c) {
            return {
                wrapper: '<span class="' + c.wrapper + '"></span>',
                menu: '<div class="' + c.menu + '"></div>'
            };
        }
        function buildSelectors(classes) {
            var selectors = {};
            _.each(classes, function(v, k) {
                selectors[k] = "." + v;
            });
            return selectors;
        }
        function buildCss() {
            var css = {
                wrapper: {
                    position: "relative",
                    display: "inline-block"
                },
                hint: {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    borderColor: "transparent",
                    boxShadow: "none",
                    opacity: "1"
                },
                input: {
                    position: "relative",
                    verticalAlign: "top",
                    backgroundColor: "transparent"
                },
                inputWithNoHint: {
                    position: "relative",
                    verticalAlign: "top"
                },
                menu: {
                    position: "absolute",
                    top: "100%",
                    left: "0",
                    zIndex: "100",
                    display: "none"
                },
                ltr: {
                    left: "0",
                    right: "auto"
                },
                rtl: {
                    left: "auto",
                    right: " 0"
                }
            };
            if (_.isMsie()) {
                _.mixin(css.input, {
                    backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
                });
            }
            return css;
        }
    }();
    var EventBus = function() {
        "use strict";
        var namespace, deprecationMap;
        namespace = "typeahead:";
        deprecationMap = {
            render: "rendered",
            cursorchange: "cursorchanged",
            select: "selected",
            autocomplete: "autocompleted"
        };
        function EventBus(o) {
            if (!o || !o.el) {
                $.error("EventBus initialized without el");
            }
            this.$el = $(o.el);
        }
        _.mixin(EventBus.prototype, {
            _trigger: function(type, args) {
                var $e;
                $e = $.Event(namespace + type);
                (args = args || []).unshift($e);
                this.$el.trigger.apply(this.$el, args);
                return $e;
            },
            before: function(type) {
                var args, $e;
                args = [].slice.call(arguments, 1);
                $e = this._trigger("before" + type, args);
                return $e.isDefaultPrevented();
            },
            trigger: function(type) {
                var deprecatedType;
                this._trigger(type, [].slice.call(arguments, 1));
                if (deprecatedType = deprecationMap[type]) {
                    this._trigger(deprecatedType, [].slice.call(arguments, 1));
                }
            }
        });
        return EventBus;
    }();
    var EventEmitter = function() {
        "use strict";
        var splitter = /\s+/, nextTick = getNextTick();
        return {
            onSync: onSync,
            onAsync: onAsync,
            off: off,
            trigger: trigger
        };
        function on(method, types, cb, context) {
            var type;
            if (!cb) {
                return this;
            }
            types = types.split(splitter);
            cb = context ? bindContext(cb, context) : cb;
            this._callbacks = this._callbacks || {};
            while (type = types.shift()) {
                this._callbacks[type] = this._callbacks[type] || {
                        sync: [],
                        async: []
                    };
                this._callbacks[type][method].push(cb);
            }
            return this;
        }
        function onAsync(types, cb, context) {
            return on.call(this, "async", types, cb, context);
        }
        function onSync(types, cb, context) {
            return on.call(this, "sync", types, cb, context);
        }
        function off(types) {
            var type;
            if (!this._callbacks) {
                return this;
            }
            types = types.split(splitter);
            while (type = types.shift()) {
                delete this._callbacks[type];
            }
            return this;
        }
        function trigger(types) {
            var type, callbacks, args, syncFlush, asyncFlush;
            if (!this._callbacks) {
                return this;
            }
            types = types.split(splitter);
            args = [].slice.call(arguments, 1);
            while ((type = types.shift()) && (callbacks = this._callbacks[type])) {
                syncFlush = getFlush(callbacks.sync, this, [ type ].concat(args));
                asyncFlush = getFlush(callbacks.async, this, [ type ].concat(args));
                syncFlush() && nextTick(asyncFlush);
            }
            return this;
        }
        function getFlush(callbacks, context, args) {
            return flush;
            function flush() {
                var cancelled;
                for (var i = 0, len = callbacks.length; !cancelled && i < len; i += 1) {
                    cancelled = callbacks[i].apply(context, args) === false;
                }
                return !cancelled;
            }
        }
        function getNextTick() {
            var nextTickFn;
            if (window.setImmediate) {
                nextTickFn = function nextTickSetImmediate(fn) {
                    setImmediate(function() {
                        fn();
                    });
                };
            } else {
                nextTickFn = function nextTickSetTimeout(fn) {
                    setTimeout(function() {
                        fn();
                    }, 0);
                };
            }
            return nextTickFn;
        }
        function bindContext(fn, context) {
            return fn.bind ? fn.bind(context) : function() {
                fn.apply(context, [].slice.call(arguments, 0));
            };
        }
    }();
    var highlight = function(doc) {
        "use strict";
        var defaults = {
            node: null,
            pattern: null,
            tagName: "strong",
            className: null,
            wordsOnly: false,
            caseSensitive: false
        };
        return function hightlight(o) {
            var regex;
            o = _.mixin({}, defaults, o);
            if (!o.node || !o.pattern) {
                return;
            }
            o.pattern = _.isArray(o.pattern) ? o.pattern : [ o.pattern ];
            regex = getRegex(o.pattern, o.caseSensitive, o.wordsOnly);
            traverse(o.node, hightlightTextNode);
            function hightlightTextNode(textNode) {
                var match, patternNode, wrapperNode;
                if (match = regex.exec(textNode.data)) {
                    wrapperNode = doc.createElement(o.tagName);
                    o.className && (wrapperNode.className = o.className);
                    patternNode = textNode.splitText(match.index);
                    patternNode.splitText(match[0].length);
                    wrapperNode.appendChild(patternNode.cloneNode(true));
                    textNode.parentNode.replaceChild(wrapperNode, patternNode);
                }
                return !!match;
            }
            function traverse(el, hightlightTextNode) {
                var childNode, TEXT_NODE_TYPE = 3;
                for (var i = 0; i < el.childNodes.length; i++) {
                    childNode = el.childNodes[i];
                    if (childNode.nodeType === TEXT_NODE_TYPE) {
                        i += hightlightTextNode(childNode) ? 1 : 0;
                    } else {
                        traverse(childNode, hightlightTextNode);
                    }
                }
            }
        };
        function getRegex(patterns, caseSensitive, wordsOnly) {
            var escapedPatterns = [], regexStr;
            for (var i = 0, len = patterns.length; i < len; i++) {
                escapedPatterns.push(_.escapeRegExChars(patterns[i]));
            }
            regexStr = wordsOnly ? "\\b(" + escapedPatterns.join("|") + ")\\b" : "(" + escapedPatterns.join("|") + ")";
            return caseSensitive ? new RegExp(regexStr) : new RegExp(regexStr, "i");
        }
    }(window.document);
    var Input = function() {
        "use strict";
        var specialKeyCodeMap;
        specialKeyCodeMap = {
            9: "tab",
            27: "esc",
            37: "left",
            39: "right",
            13: "enter",
            38: "up",
            40: "down"
        };
        function Input(o, www) {
            o = o || {};
            if (!o.input) {
                $.error("input is missing");
            }
            www.mixin(this);
            this.$hint = $(o.hint);
            this.$input = $(o.input);
            this.query = this.$input.val();
            this.queryWhenFocused = this.hasFocus() ? this.query : null;
            this.$overflowHelper = buildOverflowHelper(this.$input);
            this._checkLanguageDirection();
            if (this.$hint.length === 0) {
                this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = _.noop;
            }
        }
        Input.normalizeQuery = function(str) {
            return _.toStr(str).replace(/^\s*/g, "").replace(/\s{2,}/g, " ");
        };
        _.mixin(Input.prototype, EventEmitter, {
            _onBlur: function onBlur() {
                this.resetInputValue();
                this.trigger("blurred");
            },
            _onFocus: function onFocus() {
                this.queryWhenFocused = this.query;
                this.trigger("focused");
            },
            _onKeydown: function onKeydown($e) {
                var keyName = specialKeyCodeMap[$e.which || $e.keyCode];
                this._managePreventDefault(keyName, $e);
                if (keyName && this._shouldTrigger(keyName, $e)) {
                    this.trigger(keyName + "Keyed", $e);
                }
            },
            _onInput: function onInput() {
                this._setQuery(this.getInputValue());
                this.clearHintIfInvalid();
                this._checkLanguageDirection();
            },
            _managePreventDefault: function managePreventDefault(keyName, $e) {
                var preventDefault;
                switch (keyName) {
                    case "up":
                    case "down":
                        preventDefault = !withModifier($e);
                        break;

                    default:
                        preventDefault = false;
                }
                preventDefault && $e.preventDefault();
            },
            _shouldTrigger: function shouldTrigger(keyName, $e) {
                var trigger;
                switch (keyName) {
                    case "tab":
                        trigger = !withModifier($e);
                        break;

                    default:
                        trigger = true;
                }
                return trigger;
            },
            _checkLanguageDirection: function checkLanguageDirection() {
                var dir = (this.$input.css("direction") || "ltr").toLowerCase();
                if (this.dir !== dir) {
                    this.dir = dir;
                    this.$hint.attr("dir", dir);
                    this.trigger("langDirChanged", dir);
                }
            },
            _setQuery: function setQuery(val, silent) {
                var areEquivalent, hasDifferentWhitespace;
                areEquivalent = areQueriesEquivalent(val, this.query);
                hasDifferentWhitespace = areEquivalent ? this.query.length !== val.length : false;
                this.query = val;
                if (!silent && !areEquivalent) {
                    this.trigger("queryChanged", this.query);
                } else if (!silent && hasDifferentWhitespace) {
                    this.trigger("whitespaceChanged", this.query);
                }
            },
            bind: function() {
                var that = this, onBlur, onFocus, onKeydown, onInput;
                onBlur = _.bind(this._onBlur, this);
                onFocus = _.bind(this._onFocus, this);
                onKeydown = _.bind(this._onKeydown, this);
                onInput = _.bind(this._onInput, this);
                this.$input.on("blur.tt", onBlur).on("focus.tt", onFocus).on("keydown.tt", onKeydown);
                if (!_.isMsie() || _.isMsie() > 9) {
                    this.$input.on("input.tt", onInput);
                } else {
                    this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function($e) {
                        if (specialKeyCodeMap[$e.which || $e.keyCode]) {
                            return;
                        }
                        _.defer(_.bind(that._onInput, that, $e));
                    });
                }
                return this;
            },
            focus: function focus() {
                this.$input.focus();
            },
            blur: function blur() {
                this.$input.blur();
            },
            getLangDir: function getLangDir() {
                return this.dir;
            },
            getQuery: function getQuery() {
                return this.query || "";
            },
            setQuery: function setQuery(val, silent) {
                this.setInputValue(val);
                this._setQuery(val, silent);
            },
            hasQueryChangedSinceLastFocus: function hasQueryChangedSinceLastFocus() {
                return this.query !== this.queryWhenFocused;
            },
            getInputValue: function getInputValue() {
                return this.$input.val();
            },
            setInputValue: function setInputValue(value) {
                this.$input.val(value);
                this.clearHintIfInvalid();
                this._checkLanguageDirection();
            },
            resetInputValue: function resetInputValue() {
                this.setInputValue(this.query);
            },
            getHint: function getHint() {
                return this.$hint.val();
            },
            setHint: function setHint(value) {
                this.$hint.val(value);
            },
            clearHint: function clearHint() {
                this.setHint("");
            },
            clearHintIfInvalid: function clearHintIfInvalid() {
                var val, hint, valIsPrefixOfHint, isValid;
                val = this.getInputValue();
                hint = this.getHint();
                valIsPrefixOfHint = val !== hint && hint.indexOf(val) === 0;
                isValid = val !== "" && valIsPrefixOfHint && !this.hasOverflow();
                !isValid && this.clearHint();
            },
            hasFocus: function hasFocus() {
                return this.$input.is(":focus");
            },
            hasOverflow: function hasOverflow() {
                var constraint = this.$input.width() - 2;
                this.$overflowHelper.text(this.getInputValue());
                return this.$overflowHelper.width() >= constraint;
            },
            isCursorAtEnd: function() {
                var valueLength, selectionStart, range;
                valueLength = this.$input.val().length;
                selectionStart = this.$input[0].selectionStart;
                if (_.isNumber(selectionStart)) {
                    return selectionStart === valueLength;
                } else if (document.selection) {
                    range = document.selection.createRange();
                    range.moveStart("character", -valueLength);
                    return valueLength === range.text.length;
                }
                return true;
            },
            destroy: function destroy() {
                this.$hint.off(".tt");
                this.$input.off(".tt");
                this.$overflowHelper.remove();
                this.$hint = this.$input = this.$overflowHelper = $("<div>");
            }
        });
        return Input;
        function buildOverflowHelper($input) {
            return $('<pre aria-hidden="true"></pre>').css({
                position: "absolute",
                visibility: "hidden",
                whiteSpace: "pre",
                fontFamily: $input.css("font-family"),
                fontSize: $input.css("font-size"),
                fontStyle: $input.css("font-style"),
                fontVariant: $input.css("font-variant"),
                fontWeight: $input.css("font-weight"),
                wordSpacing: $input.css("word-spacing"),
                letterSpacing: $input.css("letter-spacing"),
                textIndent: $input.css("text-indent"),
                textRendering: $input.css("text-rendering"),
                textTransform: $input.css("text-transform")
            }).insertAfter($input);
        }
        function areQueriesEquivalent(a, b) {
            return Input.normalizeQuery(a) === Input.normalizeQuery(b);
        }
        function withModifier($e) {
            return $e.altKey || $e.ctrlKey || $e.metaKey || $e.shiftKey;
        }
    }();
    var Dataset = function() {
        "use strict";
        var keys, nameGenerator;
        keys = {
            val: "tt-selectable-display",
            obj: "tt-selectable-object"
        };
        nameGenerator = _.getIdGenerator();
        function Dataset(o, www) {
            o = o || {};
            o.templates = o.templates || {};
            o.templates.notFound = o.templates.notFound || o.templates.empty;
            if (!o.source) {
                $.error("missing source");
            }
            if (!o.node) {
                $.error("missing node");
            }
            if (o.name && !isValidName(o.name)) {
                $.error("invalid dataset name: " + o.name);
            }
            www.mixin(this);
            this.highlight = !!o.highlight;
            this.name = o.name || nameGenerator();
            this.limit = o.limit || 5;
            this.displayFn = getDisplayFn(o.display || o.displayKey);
            this.templates = getTemplates(o.templates, this.displayFn);
            this.source = o.source.__ttAdapter ? o.source.__ttAdapter() : o.source;
            this.async = _.isUndefined(o.async) ? this.source.length > 2 : !!o.async;
            this._resetLastSuggestion();
            this.$el = $(o.node).addClass(this.classes.dataset).addClass(this.classes.dataset + "-" + this.name);
        }
        Dataset.extractData = function extractData(el) {
            var $el = $(el);
            if ($el.data(keys.obj)) {
                return {
                    val: $el.data(keys.val) || "",
                    obj: $el.data(keys.obj) || null
                };
            }
            return null;
        };
        _.mixin(Dataset.prototype, EventEmitter, {
            _overwrite: function overwrite(query, suggestions) {
                suggestions = suggestions || [];
                if (suggestions.length) {
                    this._renderSuggestions(query, suggestions);
                } else if (this.async && this.templates.pending) {
                    this._renderPending(query);
                } else if (!this.async && this.templates.notFound) {
                    this._renderNotFound(query);
                } else {
                    this._empty();
                }
                this.trigger("rendered", this.name, suggestions, false);
            },
            _append: function append(query, suggestions) {
                suggestions = suggestions || [];
                if (suggestions.length && this.$lastSuggestion.length) {
                    this._appendSuggestions(query, suggestions);
                } else if (suggestions.length) {
                    this._renderSuggestions(query, suggestions);
                } else if (!this.$lastSuggestion.length && this.templates.notFound) {
                    this._renderNotFound(query);
                }
                this.trigger("rendered", this.name, suggestions, true);
            },
            _renderSuggestions: function renderSuggestions(query, suggestions) {
                var $fragment;
                $fragment = this._getSuggestionsFragment(query, suggestions);
                this.$lastSuggestion = $fragment.children().last();
                this.$el.html($fragment).prepend(this._getHeader(query, suggestions)).append(this._getFooter(query, suggestions));
            },
            _appendSuggestions: function appendSuggestions(query, suggestions) {
                var $fragment, $lastSuggestion;
                $fragment = this._getSuggestionsFragment(query, suggestions);
                $lastSuggestion = $fragment.children().last();
                this.$lastSuggestion.after($fragment);
                this.$lastSuggestion = $lastSuggestion;
            },
            _renderPending: function renderPending(query) {
                var template = this.templates.pending;
                this._resetLastSuggestion();
                template && this.$el.html(template({
                    query: query,
                    dataset: this.name
                }));
            },
            _renderNotFound: function renderNotFound(query) {
                var template = this.templates.notFound;
                this._resetLastSuggestion();
                template && this.$el.html(template({
                    query: query,
                    dataset: this.name
                }));
            },
            _empty: function empty() {
                this.$el.empty();
                this._resetLastSuggestion();
            },
            _getSuggestionsFragment: function getSuggestionsFragment(query, suggestions) {
                var that = this, fragment;
                fragment = document.createDocumentFragment();
                _.each(suggestions, function getSuggestionNode(suggestion) {
                    var $el, context;
                    context = that._injectQuery(query, suggestion);
                    $el = $(that.templates.suggestion(context)).data(keys.obj, suggestion).data(keys.val, that.displayFn(suggestion)).addClass(that.classes.suggestion + " " + that.classes.selectable);
                    fragment.appendChild($el[0]);
                });
                this.highlight && highlight({
                    className: this.classes.highlight,
                    node: fragment,
                    pattern: query
                });
                return $(fragment);
            },
            _getFooter: function getFooter(query, suggestions) {
                return this.templates.footer ? this.templates.footer({
                    query: query,
                    suggestions: suggestions,
                    dataset: this.name
                }) : null;
            },
            _getHeader: function getHeader(query, suggestions) {
                return this.templates.header ? this.templates.header({
                    query: query,
                    suggestions: suggestions,
                    dataset: this.name
                }) : null;
            },
            _resetLastSuggestion: function resetLastSuggestion() {
                this.$lastSuggestion = $();
            },
            _injectQuery: function injectQuery(query, obj) {
                return _.isObject(obj) ? _.mixin({
                    _query: query
                }, obj) : obj;
            },
            update: function update(query) {
                var that = this, canceled = false, syncCalled = false, rendered = 0;
                this.cancel();
                this.cancel = function cancel() {
                    canceled = true;
                    that.cancel = $.noop;
                    that.async && that.trigger("asyncCanceled", query);
                };
                this.source(query, sync, async);
                !syncCalled && sync([]);
                function sync(suggestions) {
                    if (syncCalled) {
                        return;
                    }
                    syncCalled = true;
                    suggestions = (suggestions || []).slice(0, that.limit);
                    rendered = suggestions.length;
                    that._overwrite(query, suggestions);
                    if (rendered < that.limit && that.async) {
                        that.trigger("asyncRequested", query);
                    }
                }
                function async(suggestions) {
                    suggestions = suggestions || [];
                    if (!canceled && rendered < that.limit) {
                        that.cancel = $.noop;
                        rendered += suggestions.length;
                        that._append(query, suggestions.slice(0, that.limit - rendered));
                        that.async && that.trigger("asyncReceived", query);
                    }
                }
            },
            cancel: $.noop,
            clear: function clear() {
                this._empty();
                this.cancel();
                this.trigger("cleared");
            },
            isEmpty: function isEmpty() {
                return this.$el.is(":empty");
            },
            destroy: function destroy() {
                this.$el = $("<div>");
            }
        });
        return Dataset;
        function getDisplayFn(display) {
            display = display || _.stringify;
            return _.isFunction(display) ? display : displayFn;
            function displayFn(obj) {
                return obj[display];
            }
        }
        function getTemplates(templates, displayFn) {
            return {
                notFound: templates.notFound && _.templatify(templates.notFound),
                pending: templates.pending && _.templatify(templates.pending),
                header: templates.header && _.templatify(templates.header),
                footer: templates.footer && _.templatify(templates.footer),
                suggestion: templates.suggestion || suggestionTemplate
            };
            function suggestionTemplate(context) {
                return $("<div>").text(displayFn(context));
            }
        }
        function isValidName(str) {
            return /^[_a-zA-Z0-9-]+$/.test(str);
        }
    }();
    var Menu = function() {
        "use strict";
        function Menu(o, www) {
            var that = this;
            o = o || {};
            if (!o.node) {
                $.error("node is required");
            }
            www.mixin(this);
            this.$node = $(o.node);
            this.query = null;
            this.datasets = _.map(o.datasets, initializeDataset);
            function initializeDataset(oDataset) {
                var node = that.$node.find(oDataset.node).first();
                oDataset.node = node.length ? node : $("<div>").appendTo(that.$node);
                return new Dataset(oDataset, www);
            }
        }
        _.mixin(Menu.prototype, EventEmitter, {
            _onSelectableClick: function onSelectableClick($e) {
                this.trigger("selectableClicked", $($e.currentTarget));
            },
            _onRendered: function onRendered(type, dataset, suggestions, async) {
                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty());
                this.trigger("datasetRendered", dataset, suggestions, async);
            },
            _onCleared: function onCleared() {
                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty());
                this.trigger("datasetCleared");
            },
            _propagate: function propagate() {
                this.trigger.apply(this, arguments);
            },
            _allDatasetsEmpty: function allDatasetsEmpty() {
                return _.every(this.datasets, isDatasetEmpty);
                function isDatasetEmpty(dataset) {
                    return dataset.isEmpty();
                }
            },
            _getSelectables: function getSelectables() {
                return this.$node.find(this.selectors.selectable);
            },
            _removeCursor: function _removeCursor() {
                var $selectable = this.getActiveSelectable();
                $selectable && $selectable.removeClass(this.classes.cursor);
            },
            _ensureVisible: function ensureVisible($el) {
                var elTop, elBottom, nodeScrollTop, nodeHeight;
                elTop = $el.position().top;
                elBottom = elTop + $el.outerHeight(true);
                nodeScrollTop = this.$node.scrollTop();
                nodeHeight = this.$node.height() + parseInt(this.$node.css("paddingTop"), 10) + parseInt(this.$node.css("paddingBottom"), 10);
                if (elTop < 0) {
                    this.$node.scrollTop(nodeScrollTop + elTop);
                } else if (nodeHeight < elBottom) {
                    this.$node.scrollTop(nodeScrollTop + (elBottom - nodeHeight));
                }
            },
            bind: function() {
                var that = this, onSelectableClick;
                onSelectableClick = _.bind(this._onSelectableClick, this);
                this.$node.on("click.tt", this.selectors.selectable, onSelectableClick);
                _.each(this.datasets, function(dataset) {
                    dataset.onSync("asyncRequested", that._propagate, that).onSync("asyncCanceled", that._propagate, that).onSync("asyncReceived", that._propagate, that).onSync("rendered", that._onRendered, that).onSync("cleared", that._onCleared, that);
                });
                return this;
            },
            isOpen: function isOpen() {
                return this.$node.hasClass(this.classes.open);
            },
            open: function open() {
                this.$node.addClass(this.classes.open);
            },
            close: function close() {
                this.$node.removeClass(this.classes.open);
                this._removeCursor();
            },
            setLanguageDirection: function setLanguageDirection(dir) {
                this.$node.attr("dir", dir);
            },
            selectableRelativeToCursor: function selectableRelativeToCursor(delta) {
                var $selectables, $oldCursor, oldIndex, newIndex;
                $oldCursor = this.getActiveSelectable();
                $selectables = this._getSelectables();
                oldIndex = $oldCursor ? $selectables.index($oldCursor) : -1;
                newIndex = oldIndex + delta;
                newIndex = (newIndex + 1) % ($selectables.length + 1) - 1;
                newIndex = newIndex < -1 ? $selectables.length - 1 : newIndex;
                return newIndex === -1 ? null : $selectables.eq(newIndex);
            },
            setCursor: function setCursor($selectable) {
                this._removeCursor();
                if ($selectable = $selectable && $selectable.first()) {
                    $selectable.addClass(this.classes.cursor);
                    this._ensureVisible($selectable);
                }
            },
            getSelectableData: function getSelectableData($el) {
                return $el && $el.length ? Dataset.extractData($el) : null;
            },
            getActiveSelectable: function getActiveSelectable() {
                var $selectable = this._getSelectables().filter(this.selectors.cursor).first();
                return $selectable.length ? $selectable : null;
            },
            getTopSelectable: function getTopSelectable() {
                var $selectable = this._getSelectables().first();
                return $selectable.length ? $selectable : null;
            },
            update: function update(query) {
                var isValidUpdate = query !== this.query;
                if (isValidUpdate) {
                    this.query = query;
                    _.each(this.datasets, updateDataset);
                }
                return isValidUpdate;
                function updateDataset(dataset) {
                    dataset.update(query);
                }
            },
            empty: function empty() {
                _.each(this.datasets, clearDataset);
                this.query = null;
                this.$node.addClass(this.classes.empty);
                function clearDataset(dataset) {
                    dataset.clear();
                }
            },
            destroy: function destroy() {
                this.$node.off(".tt");
                this.$node = $("<div>");
                _.each(this.datasets, destroyDataset);
                function destroyDataset(dataset) {
                    dataset.destroy();
                }
            }
        });
        return Menu;
    }();
    var DefaultMenu = function() {
        "use strict";
        var s = Menu.prototype;
        function DefaultMenu() {
            Menu.apply(this, [].slice.call(arguments, 0));
        }
        _.mixin(DefaultMenu.prototype, Menu.prototype, {
            open: function open() {
                !this._allDatasetsEmpty() && this._show();
                return s.open.apply(this, [].slice.call(arguments, 0));
            },
            close: function close() {
                this._hide();
                return s.close.apply(this, [].slice.call(arguments, 0));
            },
            _onRendered: function onRendered() {
                if (this._allDatasetsEmpty()) {
                    this._hide();
                } else {
                    this.isOpen() && this._show();
                }
                return s._onRendered.apply(this, [].slice.call(arguments, 0));
            },
            _onCleared: function onCleared() {
                if (this._allDatasetsEmpty()) {
                    this._hide();
                } else {
                    this.isOpen() && this._show();
                }
                return s._onCleared.apply(this, [].slice.call(arguments, 0));
            },
            setLanguageDirection: function setLanguageDirection(dir) {
                this.$node.css(dir === "ltr" ? this.css.ltr : this.css.rtl);
                return s.setLanguageDirection.apply(this, [].slice.call(arguments, 0));
            },
            _hide: function hide() {
                this.$node.hide();
            },
            _show: function show() {
                this.$node.css("display", "block");
            }
        });
        return DefaultMenu;
    }();
    var Typeahead = function() {
        "use strict";
        function Typeahead(o, www) {
            var onFocused, onBlurred, onEnterKeyed, onTabKeyed, onEscKeyed, onUpKeyed, onDownKeyed, onLeftKeyed, onRightKeyed, onQueryChanged, onWhitespaceChanged;
            o = o || {};
            if (!o.input) {
                $.error("missing input");
            }
            if (!o.menu) {
                $.error("missing menu");
            }
            if (!o.eventBus) {
                $.error("missing event bus");
            }
            www.mixin(this);
            this.eventBus = o.eventBus;
            this.minLength = _.isNumber(o.minLength) ? o.minLength : 1;
            this.input = o.input;
            this.menu = o.menu;
            this.enabled = true;
            this.active = false;
            this.input.hasFocus() && this.activate();
            this.dir = this.input.getLangDir();
            this._hacks();
            this.menu.bind().onSync("selectableClicked", this._onSelectableClicked, this).onSync("asyncRequested", this._onAsyncRequested, this).onSync("asyncCanceled", this._onAsyncCanceled, this).onSync("asyncReceived", this._onAsyncReceived, this).onSync("datasetRendered", this._onDatasetRendered, this).onSync("datasetCleared", this._onDatasetCleared, this);
            onFocused = c(this, "activate", "open", "_onFocused");
            onBlurred = c(this, "deactivate", "_onBlurred");
            onEnterKeyed = c(this, "isActive", "isOpen", "_onEnterKeyed");
            onTabKeyed = c(this, "isActive", "isOpen", "_onTabKeyed");
            onEscKeyed = c(this, "isActive", "_onEscKeyed");
            onUpKeyed = c(this, "isActive", "open", "_onUpKeyed");
            onDownKeyed = c(this, "isActive", "open", "_onDownKeyed");
            onLeftKeyed = c(this, "isActive", "isOpen", "_onLeftKeyed");
            onRightKeyed = c(this, "isActive", "isOpen", "_onRightKeyed");
            onQueryChanged = c(this, "_openIfActive", "_onQueryChanged");
            onWhitespaceChanged = c(this, "_openIfActive", "_onWhitespaceChanged");
            this.input.bind().onSync("focused", onFocused, this).onSync("blurred", onBlurred, this).onSync("enterKeyed", onEnterKeyed, this).onSync("tabKeyed", onTabKeyed, this).onSync("escKeyed", onEscKeyed, this).onSync("upKeyed", onUpKeyed, this).onSync("downKeyed", onDownKeyed, this).onSync("leftKeyed", onLeftKeyed, this).onSync("rightKeyed", onRightKeyed, this).onSync("queryChanged", onQueryChanged, this).onSync("whitespaceChanged", onWhitespaceChanged, this).onSync("langDirChanged", this._onLangDirChanged, this);
        }
        _.mixin(Typeahead.prototype, {
            _hacks: function hacks() {
                var $input, $menu;
                $input = this.input.$input || $("<div>");
                $menu = this.menu.$node || $("<div>");
                $input.on("blur.tt", function($e) {
                    var active, isActive, hasActive;
                    active = document.activeElement;
                    isActive = $menu.is(active);
                    hasActive = $menu.has(active).length > 0;
                    if (_.isMsie() && (isActive || hasActive)) {
                        $e.preventDefault();
                        $e.stopImmediatePropagation();
                        _.defer(function() {
                            $input.focus();
                        });
                    }
                });
                $menu.on("mousedown.tt", function($e) {
                    $e.preventDefault();
                });
            },
            _onSelectableClicked: function onSelectableClicked(type, $el) {
                this.select($el);
            },
            _onDatasetCleared: function onDatasetCleared() {
                this._updateHint();
            },
            _onDatasetRendered: function onDatasetRendered(type, dataset, suggestions, async) {
                this._updateHint();
                this.eventBus.trigger("render", suggestions, async, dataset);
            },
            _onAsyncRequested: function onAsyncRequested(type, dataset, query) {
                this.eventBus.trigger("asyncrequest", query, dataset);
            },
            _onAsyncCanceled: function onAsyncCanceled(type, dataset, query) {
                this.eventBus.trigger("asynccancel", query, dataset);
            },
            _onAsyncReceived: function onAsyncReceived(type, dataset, query) {
                this.eventBus.trigger("asyncreceive", query, dataset);
            },
            _onFocused: function onFocused() {
                this._minLengthMet() && this.menu.update(this.input.getQuery());
            },
            _onBlurred: function onBlurred() {
                if (this.input.hasQueryChangedSinceLastFocus()) {
                    this.eventBus.trigger("change", this.input.getQuery());
                }
            },
            _onEnterKeyed: function onEnterKeyed(type, $e) {
                var $selectable;
                if ($selectable = this.menu.getActiveSelectable()) {
                    this.select($selectable) && $e.preventDefault();
                }
            },
            _onTabKeyed: function onTabKeyed(type, $e) {
                var $selectable;
                if ($selectable = this.menu.getActiveSelectable()) {
                    this.select($selectable) && $e.preventDefault();
                } else if ($selectable = this.menu.getTopSelectable()) {
                    this.autocomplete($selectable) && $e.preventDefault();
                }
            },
            _onEscKeyed: function onEscKeyed() {
                this.close();
            },
            _onUpKeyed: function onUpKeyed() {
                this.moveCursor(-1);
            },
            _onDownKeyed: function onDownKeyed() {
                this.moveCursor(+1);
            },
            _onLeftKeyed: function onLeftKeyed() {
                if (this.dir === "rtl" && this.input.isCursorAtEnd()) {
                    this.autocomplete(this.menu.getTopSelectable());
                }
            },
            _onRightKeyed: function onRightKeyed() {
                if (this.dir === "ltr" && this.input.isCursorAtEnd()) {
                    this.autocomplete(this.menu.getTopSelectable());
                }
            },
            _onQueryChanged: function onQueryChanged(e, query) {
                this._minLengthMet(query) ? this.menu.update(query) : this.menu.empty();
            },
            _onWhitespaceChanged: function onWhitespaceChanged() {
                this._updateHint();
            },
            _onLangDirChanged: function onLangDirChanged(e, dir) {
                if (this.dir !== dir) {
                    this.dir = dir;
                    this.menu.setLanguageDirection(dir);
                }
            },
            _openIfActive: function openIfActive() {
                this.isActive() && this.open();
            },
            _minLengthMet: function minLengthMet(query) {
                query = _.isString(query) ? query : this.input.getQuery() || "";
                return query.length >= this.minLength;
            },
            _updateHint: function updateHint() {
                var $selectable, data, val, query, escapedQuery, frontMatchRegEx, match;
                $selectable = this.menu.getTopSelectable();
                data = this.menu.getSelectableData($selectable);
                val = this.input.getInputValue();
                if (data && !_.isBlankString(val) && !this.input.hasOverflow()) {
                    query = Input.normalizeQuery(val);
                    escapedQuery = _.escapeRegExChars(query);
                    frontMatchRegEx = new RegExp("^(?:" + escapedQuery + ")(.+$)", "i");
                    match = frontMatchRegEx.exec(data.val);
                    match && this.input.setHint(val + match[1]);
                } else {
                    this.input.clearHint();
                }
            },
            isEnabled: function isEnabled() {
                return this.enabled;
            },
            enable: function enable() {
                this.enabled = true;
            },
            disable: function disable() {
                this.enabled = false;
            },
            isActive: function isActive() {
                return this.active;
            },
            activate: function activate() {
                if (this.isActive()) {
                    return true;
                } else if (!this.isEnabled() || this.eventBus.before("active")) {
                    return false;
                } else {
                    this.active = true;
                    this.eventBus.trigger("active");
                    return true;
                }
            },
            deactivate: function deactivate() {
                if (!this.isActive()) {
                    return true;
                } else if (this.eventBus.before("idle")) {
                    return false;
                } else {
                    this.active = false;
                    this.close();
                    this.eventBus.trigger("idle");
                    return true;
                }
            },
            isOpen: function isOpen() {
                return this.menu.isOpen();
            },
            open: function open() {
                if (!this.isOpen() && !this.eventBus.before("open")) {
                    this.menu.open();
                    this._updateHint();
                    this.eventBus.trigger("open");
                }
                return this.isOpen();
            },
            close: function close() {
                if (this.isOpen() && !this.eventBus.before("close")) {
                    this.menu.close();
                    this.input.clearHint();
                    this.input.resetInputValue();
                    this.eventBus.trigger("close");
                }
                return !this.isOpen();
            },
            setVal: function setVal(val) {
                this.input.setQuery(_.toStr(val));
            },
            getVal: function getVal() {
                return this.input.getQuery();
            },
            select: function select($selectable) {
                var data = this.menu.getSelectableData($selectable);
                if (data && !this.eventBus.before("select", data.obj)) {
                    this.input.setQuery(data.val, true);
                    this.eventBus.trigger("select", data.obj);
                    this.close();
                    return true;
                }
                return false;
            },
            autocomplete: function autocomplete($selectable) {
                var query, data, isValid;
                query = this.input.getQuery();
                data = this.menu.getSelectableData($selectable);
                isValid = data && query !== data.val;
                if (isValid && !this.eventBus.before("autocomplete", data.obj)) {
                    this.input.setQuery(data.val);
                    this.eventBus.trigger("autocomplete", data.obj);
                    return true;
                }
                return false;
            },
            moveCursor: function moveCursor(delta) {
                var query, $candidate, data, payload, cancelMove;
                query = this.input.getQuery();
                $candidate = this.menu.selectableRelativeToCursor(delta);
                data = this.menu.getSelectableData($candidate);
                payload = data ? data.obj : null;
                cancelMove = this._minLengthMet() && this.menu.update(query);
                if (!cancelMove && !this.eventBus.before("cursorchange", payload)) {
                    this.menu.setCursor($candidate);
                    if (data) {
                        this.input.setInputValue(data.val);
                    } else {
                        this.input.resetInputValue();
                        this._updateHint();
                    }
                    this.eventBus.trigger("cursorchange", payload);
                    return true;
                }
                return false;
            },
            destroy: function destroy() {
                this.input.destroy();
                this.menu.destroy();
            }
        });
        return Typeahead;
        function c(ctx) {
            var methods = [].slice.call(arguments, 1);
            return function() {
                var args = [].slice.call(arguments);
                _.each(methods, function(method) {
                    return ctx[method].apply(ctx, args);
                });
            };
        }
    }();
    (function() {
        "use strict";
        var old, keys, methods;
        old = $.fn.typeahead;
        keys = {
            www: "tt-www",
            attrs: "tt-attrs",
            typeahead: "tt-typeahead"
        };
        methods = {
            initialize: function initialize(o, datasets) {
                var www;
                datasets = _.isArray(datasets) ? datasets : [].slice.call(arguments, 1);
                o = o || {};
                www = WWW(o.classNames);
                return this.each(attach);
                function attach() {
                    var $input, $wrapper, $hint, $menu, defaultHint, defaultMenu, eventBus, input, menu, typeahead, MenuConstructor;
                    _.each(datasets, function(d) {
                        d.highlight = !!o.highlight;
                    });
                    $input = $(this);
                    $wrapper = $(www.html.wrapper);
                    $hint = $elOrNull(o.hint);
                    $menu = $elOrNull(o.menu);
                    defaultHint = o.hint !== false && !$hint;
                    defaultMenu = o.menu !== false && !$menu;
                    defaultHint && ($hint = buildHintFromInput($input, www));
                    defaultMenu && ($menu = $(www.html.menu).css(www.css.menu));
                    $hint && $hint.val("");
                    $input = prepInput($input, www);
                    if (defaultHint || defaultMenu) {
                        $wrapper.css(www.css.wrapper);
                        $input.css(defaultHint ? www.css.input : www.css.inputWithNoHint);
                        $input.wrap($wrapper).parent().prepend(defaultHint ? $hint : null).append(defaultMenu ? $menu : null);
                    }
                    MenuConstructor = defaultMenu ? DefaultMenu : Menu;
                    eventBus = new EventBus({
                        el: $input
                    });
                    input = new Input({
                        hint: $hint,
                        input: $input
                    }, www);
                    menu = new MenuConstructor({
                        node: $menu,
                        datasets: datasets
                    }, www);
                    typeahead = new Typeahead({
                        input: input,
                        menu: menu,
                        eventBus: eventBus,
                        minLength: o.minLength
                    }, www);
                    $input.data(keys.www, www);
                    $input.data(keys.typeahead, typeahead);
                }
            },
            isEnabled: function isEnabled() {
                var enabled;
                ttEach(this.first(), function(t) {
                    enabled = t.isEnabled();
                });
                return enabled;
            },
            enable: function enable() {
                ttEach(this, function(t) {
                    t.enable();
                });
                return this;
            },
            disable: function disable() {
                ttEach(this, function(t) {
                    t.disable();
                });
                return this;
            },
            isActive: function isActive() {
                var active;
                ttEach(this.first(), function(t) {
                    active = t.isActive();
                });
                return active;
            },
            activate: function activate() {
                ttEach(this, function(t) {
                    t.activate();
                });
                return this;
            },
            deactivate: function deactivate() {
                ttEach(this, function(t) {
                    t.deactivate();
                });
                return this;
            },
            isOpen: function isOpen() {
                var open;
                ttEach(this.first(), function(t) {
                    open = t.isOpen();
                });
                return open;
            },
            open: function open() {
                ttEach(this, function(t) {
                    t.open();
                });
                return this;
            },
            close: function close() {
                ttEach(this, function(t) {
                    t.close();
                });
                return this;
            },
            select: function select(el) {
                var success = false, $el = $(el);
                ttEach(this.first(), function(t) {
                    success = t.select($el);
                });
                return success;
            },
            autocomplete: function autocomplete(el) {
                var success = false, $el = $(el);
                ttEach(this.first(), function(t) {
                    success = t.autocomplete($el);
                });
                return success;
            },
            moveCursor: function moveCursoe(delta) {
                var success = false;
                ttEach(this.first(), function(t) {
                    success = t.moveCursor(delta);
                });
                return success;
            },
            val: function val(newVal) {
                var query;
                if (!arguments.length) {
                    ttEach(this.first(), function(t) {
                        query = t.getVal();
                    });
                    return query;
                } else {
                    ttEach(this, function(t) {
                        t.setVal(newVal);
                    });
                    return this;
                }
            },
            destroy: function destroy() {
                ttEach(this, function(typeahead, $input) {
                    revert($input);
                    typeahead.destroy();
                });
                return this;
            }
        };
        $.fn.typeahead = function(method) {
            if (methods[method]) {
                return methods[method].apply(this, [].slice.call(arguments, 1));
            } else {
                return methods.initialize.apply(this, arguments);
            }
        };
        $.fn.typeahead.noConflict = function noConflict() {
            $.fn.typeahead = old;
            return this;
        };
        function ttEach($els, fn) {
            $els.each(function() {
                var $input = $(this), typeahead;
                (typeahead = $input.data(keys.typeahead)) && fn(typeahead, $input);
            });
        }
        function buildHintFromInput($input, www) {
            return $input.clone().addClass(www.classes.hint).removeData().css(www.css.hint).css(getBackgroundStyles($input)).prop("readonly", true).removeAttr("id name placeholder required").attr({
                autocomplete: "off",
                spellcheck: "false",
                tabindex: -1
            });
        }
        function prepInput($input, www) {
            $input.data(keys.attrs, {
                dir: $input.attr("dir"),
                autocomplete: $input.attr("autocomplete"),
                spellcheck: $input.attr("spellcheck"),
                style: $input.attr("style")
            });
            $input.addClass(www.classes.input).attr({
                autocomplete: "off",
                spellcheck: false
            });
            try {
                !$input.attr("dir") && $input.attr("dir", "auto");
            } catch (e) {}
            return $input;
        }
        function getBackgroundStyles($el) {
            return {
                backgroundAttachment: $el.css("background-attachment"),
                backgroundClip: $el.css("background-clip"),
                backgroundColor: $el.css("background-color"),
                backgroundImage: $el.css("background-image"),
                backgroundOrigin: $el.css("background-origin"),
                backgroundPosition: $el.css("background-position"),
                backgroundRepeat: $el.css("background-repeat"),
                backgroundSize: $el.css("background-size")
            };
        }
        function revert($input) {
            var www, $wrapper;
            www = $input.data(keys.www);
            $wrapper = $input.parent().filter(www.selectors.wrapper);
            _.each($input.data(keys.attrs), function(val, key) {
                _.isUndefined(val) ? $input.removeAttr(key) : $input.attr(key, val);
            });
            $input.removeData(keys.typeahead).removeData(keys.www).removeData(keys.attr).removeClass(www.classes.input);
            if ($wrapper.length) {
                $input.detach().insertAfter($wrapper);
                $wrapper.remove();
            }
        }
        function $elOrNull(obj) {
            var isValid, $el;
            isValid = _.isJQuery(obj) || _.isElement(obj);
            $el = isValid ? $(obj).first() : [];
            return $el.length ? $el : null;
        }
    })();
});


/*===============================
/media/com_ems/js/lib/handlebars.js
================================================================================*/;
/*!

 handlebars v1.2.0

 Copyright (C) 2011 by Yehuda Katz

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

 @license
 */
var Handlebars = (function() {
// handlebars/safe-string.js
    var __module4__ = (function() {
        "use strict";
        var __exports__;
        // Build out our basic SafeString type
        function SafeString(string) {
            this.string = string;
        }

        SafeString.prototype.toString = function() {
            return "" + this.string;
        };

        __exports__ = SafeString;
        return __exports__;
    })();

// handlebars/utils.js
    var __module3__ = (function(__dependency1__) {
        "use strict";
        var __exports__ = {};
        /*jshint -W004 */
        var SafeString = __dependency1__;

        var escape = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        };

        var badChars = /[&<>"'`]/g;
        var possible = /[&<>"'`]/;

        function escapeChar(chr) {
            return escape[chr] || "&amp;";
        }

        function extend(obj, value) {
            for(var key in value) {
                if(Object.prototype.hasOwnProperty.call(value, key)) {
                    obj[key] = value[key];
                }
            }
        }

        __exports__.extend = extend;var toString = Object.prototype.toString;
        __exports__.toString = toString;
        // Sourced from lodash
        // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
        var isFunction = function(value) {
            return typeof value === 'function';
        };
        // fallback for older versions of Chrome and Safari
        if (isFunction(/x/)) {
            isFunction = function(value) {
                return typeof value === 'function' && toString.call(value) === '[object Function]';
            };
        }
        var isFunction;
        __exports__.isFunction = isFunction;
        var isArray = Array.isArray || function(value) {
                return (value && typeof value === 'object') ? toString.call(value) === '[object Array]' : false;
            };
        __exports__.isArray = isArray;

        function escapeExpression(string) {
            // don't escape SafeStrings, since they're already safe
            if (string instanceof SafeString) {
                return string.toString();
            } else if (!string && string !== 0) {
                return "";
            }

            // Force a string conversion as this will be done by the append regardless and
            // the regex test will do this transparently behind the scenes, causing issues if
            // an object's to string has escaped characters in it.
            string = "" + string;

            if(!possible.test(string)) { return string; }
            return string.replace(badChars, escapeChar);
        }

        __exports__.escapeExpression = escapeExpression;function isEmpty(value) {
            if (!value && value !== 0) {
                return true;
            } else if (isArray(value) && value.length === 0) {
                return true;
            } else {
                return false;
            }
        }

        __exports__.isEmpty = isEmpty;
        return __exports__;
    })(__module4__);

// handlebars/exception.js
    var __module5__ = (function() {
        "use strict";
        var __exports__;

        var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

        function Exception(/* message */) {
            var tmp = Error.prototype.constructor.apply(this, arguments);

            // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
            for (var idx = 0; idx < errorProps.length; idx++) {
                this[errorProps[idx]] = tmp[errorProps[idx]];
            }
        }

        Exception.prototype = new Error();

        __exports__ = Exception;
        return __exports__;
    })();

// handlebars/base.js
    var __module2__ = (function(__dependency1__, __dependency2__) {
        "use strict";
        var __exports__ = {};
        var Utils = __dependency1__;
        var Exception = __dependency2__;

        var VERSION = "1.2.0";
        __exports__.VERSION = VERSION;var COMPILER_REVISION = 4;
        __exports__.COMPILER_REVISION = COMPILER_REVISION;
        var REVISION_CHANGES = {
            1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
            2: '== 1.0.0-rc.3',
            3: '== 1.0.0-rc.4',
            4: '>= 1.0.0'
        };
        __exports__.REVISION_CHANGES = REVISION_CHANGES;
        var isArray = Utils.isArray,
            isFunction = Utils.isFunction,
            toString = Utils.toString,
            objectType = '[object Object]';

        function HandlebarsEnvironment(helpers, partials) {
            this.helpers = helpers || {};
            this.partials = partials || {};

            registerDefaultHelpers(this);
        }

        __exports__.HandlebarsEnvironment = HandlebarsEnvironment;HandlebarsEnvironment.prototype = {
            constructor: HandlebarsEnvironment,

            logger: logger,
            log: log,

            registerHelper: function(name, fn, inverse) {
                if (toString.call(name) === objectType) {
                    if (inverse || fn) { throw new Exception('Arg not supported with multiple helpers'); }
                    Utils.extend(this.helpers, name);
                } else {
                    if (inverse) { fn.not = inverse; }
                    this.helpers[name] = fn;
                }
            },

            registerPartial: function(name, str) {
                if (toString.call(name) === objectType) {
                    Utils.extend(this.partials,  name);
                } else {
                    this.partials[name] = str;
                }
            }
        };

        function registerDefaultHelpers(instance) {
            instance.registerHelper('helperMissing', function(arg) {
                if(arguments.length === 2) {
                    return undefined;
                } else {
                    throw new Error("Missing helper: '" + arg + "'");
                }
            });

            instance.registerHelper('blockHelperMissing', function(context, options) {
                var inverse = options.inverse || function() {}, fn = options.fn;

                if (isFunction(context)) { context = context.call(this); }

                if(context === true) {
                    return fn(this);
                } else if(context === false || context == null) {
                    return inverse(this);
                } else if (isArray(context)) {
                    if(context.length > 0) {
                        return instance.helpers.each(context, options);
                    } else {
                        return inverse(this);
                    }
                } else {
                    return fn(context);
                }
            });

            instance.registerHelper('each', function(context, options) {
                var fn = options.fn, inverse = options.inverse;
                var i = 0, ret = "", data;

                if (isFunction(context)) { context = context.call(this); }

                if (options.data) {
                    data = createFrame(options.data);
                }

                if(context && typeof context === 'object') {
                    if (isArray(context)) {
                        for(var j = context.length; i<j; i++) {
                            if (data) {
                                data.index = i;
                                data.first = (i === 0);
                                data.last  = (i === (context.length-1));
                            }
                            ret = ret + fn(context[i], { data: data });
                        }
                    } else {
                        for(var key in context) {
                            if(context.hasOwnProperty(key)) {
                                if(data) {
                                    data.key = key;
                                    data.index = i;
                                    data.first = (i === 0);
                                }
                                ret = ret + fn(context[key], {data: data});
                                i++;
                            }
                        }
                    }
                }

                if(i === 0){
                    ret = inverse(this);
                }

                return ret;
            });

            instance.registerHelper('if', function(conditional, options) {
                if (isFunction(conditional)) { conditional = conditional.call(this); }

                // Default behavior is to render the positive path if the value is truthy and not empty.
                // The `includeZero` option may be set to treat the condtional as purely not empty based on the
                // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
                if ((!options.hash.includeZero && !conditional) || Utils.isEmpty(conditional)) {
                    return options.inverse(this);
                } else {
                    return options.fn(this);
                }
            });

            instance.registerHelper('unless', function(conditional, options) {
                return instance.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn, hash: options.hash});
            });

            instance.registerHelper('with', function(context, options) {
                if (isFunction(context)) { context = context.call(this); }

                if (!Utils.isEmpty(context)) return options.fn(context);
            });

            instance.registerHelper('log', function(context, options) {
                var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
                instance.log(level, context);
            });
        }

        var logger = {
            methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

            // State enum
            DEBUG: 0,
            INFO: 1,
            WARN: 2,
            ERROR: 3,
            level: 3,

            // can be overridden in the host environment
            log: function(level, obj) {
                if (logger.level <= level) {
                    var method = logger.methodMap[level];
                    if (typeof console !== 'undefined' && console[method]) {
                        console[method].call(console, obj);
                    }
                }
            }
        };
        __exports__.logger = logger;
        function log(level, obj) { logger.log(level, obj); }

        __exports__.log = log;var createFrame = function(object) {
            var obj = {};
            Utils.extend(obj, object);
            return obj;
        };
        __exports__.createFrame = createFrame;
        return __exports__;
    })(__module3__, __module5__);

// handlebars/runtime.js
    var __module6__ = (function(__dependency1__, __dependency2__, __dependency3__) {
        "use strict";
        var __exports__ = {};
        var Utils = __dependency1__;
        var Exception = __dependency2__;
        var COMPILER_REVISION = __dependency3__.COMPILER_REVISION;
        var REVISION_CHANGES = __dependency3__.REVISION_CHANGES;

        function checkRevision(compilerInfo) {
            var compilerRevision = compilerInfo && compilerInfo[0] || 1,
                currentRevision = COMPILER_REVISION;

            if (compilerRevision !== currentRevision) {
                if (compilerRevision < currentRevision) {
                    var runtimeVersions = REVISION_CHANGES[currentRevision],
                        compilerVersions = REVISION_CHANGES[compilerRevision];
                    throw new Error("Template was precompiled with an older version of Handlebars than the current runtime. "+
                        "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").");
                } else {
                    // Use the embedded version info since the runtime doesn't know about this revision yet
                    throw new Error("Template was precompiled with a newer version of Handlebars than the current runtime. "+
                        "Please update your runtime to a newer version ("+compilerInfo[1]+").");
                }
            }
        }

        __exports__.checkRevision = checkRevision;// TODO: Remove this line and break up compilePartial

        function template(templateSpec, env) {
            if (!env) {
                throw new Error("No environment passed to template");
            }

            // Note: Using env.VM references rather than local var references throughout this section to allow
            // for external users to override these as psuedo-supported APIs.
            var invokePartialWrapper = function(partial, name, context, helpers, partials, data) {
                var result = env.VM.invokePartial.apply(this, arguments);
                if (result != null) { return result; }

                if (env.compile) {
                    var options = { helpers: helpers, partials: partials, data: data };
                    partials[name] = env.compile(partial, { data: data !== undefined }, env);
                    return partials[name](context, options);
                } else {
                    throw new Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
                }
            };

            // Just add water
            var container = {
                escapeExpression: Utils.escapeExpression,
                invokePartial: invokePartialWrapper,
                programs: [],
                program: function(i, fn, data) {
                    var programWrapper = this.programs[i];
                    if(data) {
                        programWrapper = program(i, fn, data);
                    } else if (!programWrapper) {
                        programWrapper = this.programs[i] = program(i, fn);
                    }
                    return programWrapper;
                },
                merge: function(param, common) {
                    var ret = param || common;

                    if (param && common && (param !== common)) {
                        ret = {};
                        Utils.extend(ret, common);
                        Utils.extend(ret, param);
                    }
                    return ret;
                },
                programWithDepth: env.VM.programWithDepth,
                noop: env.VM.noop,
                compilerInfo: null
            };

            return function(context, options) {
                options = options || {};
                var namespace = options.partial ? options : env,
                    helpers,
                    partials;

                if (!options.partial) {
                    helpers = options.helpers;
                    partials = options.partials;
                }
                var result = templateSpec.call(
                    container,
                    namespace, context,
                    helpers,
                    partials,
                    options.data);

                if (!options.partial) {
                    env.VM.checkRevision(container.compilerInfo);
                }

                return result;
            };
        }

        __exports__.template = template;function programWithDepth(i, fn, data /*, $depth */) {
            var args = Array.prototype.slice.call(arguments, 3);

            var prog = function(context, options) {
                options = options || {};

                return fn.apply(this, [context, options.data || data].concat(args));
            };
            prog.program = i;
            prog.depth = args.length;
            return prog;
        }

        __exports__.programWithDepth = programWithDepth;function program(i, fn, data) {
            var prog = function(context, options) {
                options = options || {};

                return fn(context, options.data || data);
            };
            prog.program = i;
            prog.depth = 0;
            return prog;
        }

        __exports__.program = program;function invokePartial(partial, name, context, helpers, partials, data) {
            var options = { partial: true, helpers: helpers, partials: partials, data: data };

            if(partial === undefined) {
                throw new Exception("The partial " + name + " could not be found");
            } else if(partial instanceof Function) {
                return partial(context, options);
            }
        }

        __exports__.invokePartial = invokePartial;function noop() { return ""; }

        __exports__.noop = noop;
        return __exports__;
    })(__module3__, __module5__, __module2__);

// handlebars.runtime.js
    var __module1__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
        "use strict";
        var __exports__;
        /*globals Handlebars: true */
        var base = __dependency1__;

        // Each of these augment the Handlebars object. No need to setup here.
        // (This is done to easily share code between commonjs and browse envs)
        var SafeString = __dependency2__;
        var Exception = __dependency3__;
        var Utils = __dependency4__;
        var runtime = __dependency5__;

        // For compatibility and usage outside of module systems, make the Handlebars object a namespace
        var create = function() {
            var hb = new base.HandlebarsEnvironment();

            Utils.extend(hb, base);
            hb.SafeString = SafeString;
            hb.Exception = Exception;
            hb.Utils = Utils;

            hb.VM = runtime;
            hb.template = function(spec) {
                return runtime.template(spec, hb);
            };

            return hb;
        };

        var Handlebars = create();
        Handlebars.create = create;

        __exports__ = Handlebars;
        return __exports__;
    })(__module2__, __module4__, __module5__, __module3__, __module6__);

// handlebars/compiler/ast.js
    var __module7__ = (function(__dependency1__) {
        "use strict";
        var __exports__;
        var Exception = __dependency1__;

        var AST = {
            ProgramNode: function(statements, inverseStrip, inverse) {
                this.type = "program";
                this.statements = statements;
                this.strip = {};

                if(inverse) {
                    this.inverse = new AST.ProgramNode(inverse, inverseStrip);
                    this.strip.right = inverseStrip.left;
                } else if (inverseStrip) {
                    this.strip.left = inverseStrip.right;
                }
            },

            MustacheNode: function(rawParams, hash, open, strip) {
                this.type = "mustache";
                this.hash = hash;
                this.strip = strip;

                // Open may be a string parsed from the parser or a passed boolean flag
                if (open != null && open.charAt) {
                    // Must use charAt to support IE pre-10
                    var escapeFlag = open.charAt(3) || open.charAt(2);
                    this.escaped = escapeFlag !== '{' && escapeFlag !== '&';
                } else {
                    this.escaped = !!open;
                }

                var id = this.id = rawParams[0];
                var params = this.params = rawParams.slice(1);

                // a mustache is an eligible helper if:
                // * its id is simple (a single part, not `this` or `..`)
                var eligibleHelper = this.eligibleHelper = id.isSimple;

                // a mustache is definitely a helper if:
                // * it is an eligible helper, and
                // * it has at least one parameter or hash segment
                this.isHelper = eligibleHelper && (params.length || hash);

                // if a mustache is an eligible helper but not a definite
                // helper, it is ambiguous, and will be resolved in a later
                // pass or at runtime.
            },

            PartialNode: function(partialName, context, strip) {
                this.type         = "partial";
                this.partialName  = partialName;
                this.context      = context;
                this.strip = strip;
            },

            BlockNode: function(mustache, program, inverse, close) {
                if(mustache.id.original !== close.path.original) {
                    throw new Exception(mustache.id.original + " doesn't match " + close.path.original);
                }

                this.type = "block";
                this.mustache = mustache;
                this.program  = program;
                this.inverse  = inverse;

                this.strip = {
                    left: mustache.strip.left,
                    right: close.strip.right
                };

                (program || inverse).strip.left = mustache.strip.right;
                (inverse || program).strip.right = close.strip.left;

                if (inverse && !program) {
                    this.isInverse = true;
                }
            },

            ContentNode: function(string) {
                this.type = "content";
                this.string = string;
            },

            HashNode: function(pairs) {
                this.type = "hash";
                this.pairs = pairs;
            },

            IdNode: function(parts) {
                this.type = "ID";

                var original = "",
                    dig = [],
                    depth = 0;

                for(var i=0,l=parts.length; i<l; i++) {
                    var part = parts[i].part;
                    original += (parts[i].separator || '') + part;

                    if (part === ".." || part === "." || part === "this") {
                        if (dig.length > 0) { throw new Exception("Invalid path: " + original); }
                        else if (part === "..") { depth++; }
                        else { this.isScoped = true; }
                    }
                    else { dig.push(part); }
                }

                this.original = original;
                this.parts    = dig;
                this.string   = dig.join('.');
                this.depth    = depth;

                // an ID is simple if it only has one part, and that part is not
                // `..` or `this`.
                this.isSimple = parts.length === 1 && !this.isScoped && depth === 0;

                this.stringModeValue = this.string;
            },

            PartialNameNode: function(name) {
                this.type = "PARTIAL_NAME";
                this.name = name.original;
            },

            DataNode: function(id) {
                this.type = "DATA";
                this.id = id;
            },

            StringNode: function(string) {
                this.type = "STRING";
                this.original =
                    this.string =
                        this.stringModeValue = string;
            },

            IntegerNode: function(integer) {
                this.type = "INTEGER";
                this.original =
                    this.integer = integer;
                this.stringModeValue = Number(integer);
            },

            BooleanNode: function(bool) {
                this.type = "BOOLEAN";
                this.bool = bool;
                this.stringModeValue = bool === "true";
            },

            CommentNode: function(comment) {
                this.type = "comment";
                this.comment = comment;
            }
        };

        // Must be exported as an object rather than the root of the module as the jison lexer
        // most modify the object to operate properly.
        __exports__ = AST;
        return __exports__;
    })(__module5__);

// handlebars/compiler/parser.js
    var __module9__ = (function() {
        "use strict";
        var __exports__;
        /* jshint ignore:start */
        /* Jison generated parser */
        var handlebars = (function(){
            var parser = {trace: function trace() { },
                yy: {},
                symbols_: {"error":2,"root":3,"statements":4,"EOF":5,"program":6,"simpleInverse":7,"statement":8,"openInverse":9,"closeBlock":10,"openBlock":11,"mustache":12,"partial":13,"CONTENT":14,"COMMENT":15,"OPEN_BLOCK":16,"inMustache":17,"CLOSE":18,"OPEN_INVERSE":19,"OPEN_ENDBLOCK":20,"path":21,"OPEN":22,"OPEN_UNESCAPED":23,"CLOSE_UNESCAPED":24,"OPEN_PARTIAL":25,"partialName":26,"partial_option0":27,"inMustache_repetition0":28,"inMustache_option0":29,"dataName":30,"param":31,"STRING":32,"INTEGER":33,"BOOLEAN":34,"hash":35,"hash_repetition_plus0":36,"hashSegment":37,"ID":38,"EQUALS":39,"DATA":40,"pathSegments":41,"SEP":42,"$accept":0,"$end":1},
                terminals_: {2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"CLOSE_UNESCAPED",25:"OPEN_PARTIAL",32:"STRING",33:"INTEGER",34:"BOOLEAN",38:"ID",39:"EQUALS",40:"DATA",42:"SEP"},
                productions_: [0,[3,2],[3,1],[6,2],[6,3],[6,2],[6,1],[6,1],[6,0],[4,1],[4,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,4],[7,2],[17,3],[17,1],[31,1],[31,1],[31,1],[31,1],[31,1],[35,1],[37,3],[26,1],[26,1],[26,1],[30,2],[21,1],[41,3],[41,1],[27,0],[27,1],[28,0],[28,2],[29,0],[29,1],[36,1],[36,2]],
                performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

                    var $0 = $$.length - 1;
                    switch (yystate) {
                        case 1: return new yy.ProgramNode($$[$0-1]);
                            break;
                        case 2: return new yy.ProgramNode([]);
                            break;
                        case 3:this.$ = new yy.ProgramNode([], $$[$0-1], $$[$0]);
                            break;
                        case 4:this.$ = new yy.ProgramNode($$[$0-2], $$[$0-1], $$[$0]);
                            break;
                        case 5:this.$ = new yy.ProgramNode($$[$0-1], $$[$0], []);
                            break;
                        case 6:this.$ = new yy.ProgramNode($$[$0]);
                            break;
                        case 7:this.$ = new yy.ProgramNode([]);
                            break;
                        case 8:this.$ = new yy.ProgramNode([]);
                            break;
                        case 9:this.$ = [$$[$0]];
                            break;
                        case 10: $$[$0-1].push($$[$0]); this.$ = $$[$0-1];
                            break;
                        case 11:this.$ = new yy.BlockNode($$[$0-2], $$[$0-1].inverse, $$[$0-1], $$[$0]);
                            break;
                        case 12:this.$ = new yy.BlockNode($$[$0-2], $$[$0-1], $$[$0-1].inverse, $$[$0]);
                            break;
                        case 13:this.$ = $$[$0];
                            break;
                        case 14:this.$ = $$[$0];
                            break;
                        case 15:this.$ = new yy.ContentNode($$[$0]);
                            break;
                        case 16:this.$ = new yy.CommentNode($$[$0]);
                            break;
                        case 17:this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1], $$[$0-2], stripFlags($$[$0-2], $$[$0]));
                            break;
                        case 18:this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1], $$[$0-2], stripFlags($$[$0-2], $$[$0]));
                            break;
                        case 19:this.$ = {path: $$[$0-1], strip: stripFlags($$[$0-2], $$[$0])};
                            break;
                        case 20:this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1], $$[$0-2], stripFlags($$[$0-2], $$[$0]));
                            break;
                        case 21:this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1], $$[$0-2], stripFlags($$[$0-2], $$[$0]));
                            break;
                        case 22:this.$ = new yy.PartialNode($$[$0-2], $$[$0-1], stripFlags($$[$0-3], $$[$0]));
                            break;
                        case 23:this.$ = stripFlags($$[$0-1], $$[$0]);
                            break;
                        case 24:this.$ = [[$$[$0-2]].concat($$[$0-1]), $$[$0]];
                            break;
                        case 25:this.$ = [[$$[$0]], null];
                            break;
                        case 26:this.$ = $$[$0];
                            break;
                        case 27:this.$ = new yy.StringNode($$[$0]);
                            break;
                        case 28:this.$ = new yy.IntegerNode($$[$0]);
                            break;
                        case 29:this.$ = new yy.BooleanNode($$[$0]);
                            break;
                        case 30:this.$ = $$[$0];
                            break;
                        case 31:this.$ = new yy.HashNode($$[$0]);
                            break;
                        case 32:this.$ = [$$[$0-2], $$[$0]];
                            break;
                        case 33:this.$ = new yy.PartialNameNode($$[$0]);
                            break;
                        case 34:this.$ = new yy.PartialNameNode(new yy.StringNode($$[$0]));
                            break;
                        case 35:this.$ = new yy.PartialNameNode(new yy.IntegerNode($$[$0]));
                            break;
                        case 36:this.$ = new yy.DataNode($$[$0]);
                            break;
                        case 37:this.$ = new yy.IdNode($$[$0]);
                            break;
                        case 38: $$[$0-2].push({part: $$[$0], separator: $$[$0-1]}); this.$ = $$[$0-2];
                            break;
                        case 39:this.$ = [{part: $$[$0]}];
                            break;
                        case 42:this.$ = [];
                            break;
                        case 43:$$[$0-1].push($$[$0]);
                            break;
                        case 46:this.$ = [$$[$0]];
                            break;
                        case 47:$$[$0-1].push($$[$0]);
                            break;
                    }
                },
                table: [{3:1,4:2,5:[1,3],8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[3]},{5:[1,16],8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[2,2]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9]},{4:20,6:18,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{4:20,6:22,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],25:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],25:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],25:[2,16]},{17:23,21:24,30:25,38:[1,28],40:[1,27],41:26},{17:29,21:24,30:25,38:[1,28],40:[1,27],41:26},{17:30,21:24,30:25,38:[1,28],40:[1,27],41:26},{17:31,21:24,30:25,38:[1,28],40:[1,27],41:26},{21:33,26:32,32:[1,34],33:[1,35],38:[1,28],41:26},{1:[2,1]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10]},{10:36,20:[1,37]},{4:38,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,7],22:[1,13],23:[1,14],25:[1,15]},{7:39,8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,6],22:[1,13],23:[1,14],25:[1,15]},{17:23,18:[1,40],21:24,30:25,38:[1,28],40:[1,27],41:26},{10:41,20:[1,37]},{18:[1,42]},{18:[2,42],24:[2,42],28:43,32:[2,42],33:[2,42],34:[2,42],38:[2,42],40:[2,42]},{18:[2,25],24:[2,25]},{18:[2,37],24:[2,37],32:[2,37],33:[2,37],34:[2,37],38:[2,37],40:[2,37],42:[1,44]},{21:45,38:[1,28],41:26},{18:[2,39],24:[2,39],32:[2,39],33:[2,39],34:[2,39],38:[2,39],40:[2,39],42:[2,39]},{18:[1,46]},{18:[1,47]},{24:[1,48]},{18:[2,40],21:50,27:49,38:[1,28],41:26},{18:[2,33],38:[2,33]},{18:[2,34],38:[2,34]},{18:[2,35],38:[2,35]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11]},{21:51,38:[1,28],41:26},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,3],22:[1,13],23:[1,14],25:[1,15]},{4:52,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,5],22:[1,13],23:[1,14],25:[1,15]},{14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],25:[2,23]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],25:[2,12]},{14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],25:[2,18]},{18:[2,44],21:56,24:[2,44],29:53,30:60,31:54,32:[1,57],33:[1,58],34:[1,59],35:55,36:61,37:62,38:[1,63],40:[1,27],41:26},{38:[1,64]},{18:[2,36],24:[2,36],32:[2,36],33:[2,36],34:[2,36],38:[2,36],40:[2,36]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],25:[2,17]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],25:[2,21]},{18:[1,65]},{18:[2,41]},{18:[1,66]},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],25:[1,15]},{18:[2,24],24:[2,24]},{18:[2,43],24:[2,43],32:[2,43],33:[2,43],34:[2,43],38:[2,43],40:[2,43]},{18:[2,45],24:[2,45]},{18:[2,26],24:[2,26],32:[2,26],33:[2,26],34:[2,26],38:[2,26],40:[2,26]},{18:[2,27],24:[2,27],32:[2,27],33:[2,27],34:[2,27],38:[2,27],40:[2,27]},{18:[2,28],24:[2,28],32:[2,28],33:[2,28],34:[2,28],38:[2,28],40:[2,28]},{18:[2,29],24:[2,29],32:[2,29],33:[2,29],34:[2,29],38:[2,29],40:[2,29]},{18:[2,30],24:[2,30],32:[2,30],33:[2,30],34:[2,30],38:[2,30],40:[2,30]},{18:[2,31],24:[2,31],37:67,38:[1,68]},{18:[2,46],24:[2,46],38:[2,46]},{18:[2,39],24:[2,39],32:[2,39],33:[2,39],34:[2,39],38:[2,39],39:[1,69],40:[2,39],42:[2,39]},{18:[2,38],24:[2,38],32:[2,38],33:[2,38],34:[2,38],38:[2,38],40:[2,38],42:[2,38]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],25:[2,22]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],25:[2,19]},{18:[2,47],24:[2,47],38:[2,47]},{39:[1,69]},{21:56,30:60,31:70,32:[1,57],33:[1,58],34:[1,59],38:[1,28],40:[1,27],41:26},{18:[2,32],24:[2,32],38:[2,32]}],
                defaultActions: {3:[2,2],16:[2,1],50:[2,41]},
                parseError: function parseError(str, hash) {
                    throw new Error(str);
                },
                parse: function parse(input) {
                    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
                    this.lexer.setInput(input);
                    this.lexer.yy = this.yy;
                    this.yy.lexer = this.lexer;
                    this.yy.parser = this;
                    if (typeof this.lexer.yylloc == "undefined")
                        this.lexer.yylloc = {};
                    var yyloc = this.lexer.yylloc;
                    lstack.push(yyloc);
                    var ranges = this.lexer.options && this.lexer.options.ranges;
                    if (typeof this.yy.parseError === "function")
                        this.parseError = this.yy.parseError;
                    function popStack(n) {
                        stack.length = stack.length - 2 * n;
                        vstack.length = vstack.length - n;
                        lstack.length = lstack.length - n;
                    }
                    function lex() {
                        var token;
                        token = self.lexer.lex() || 1;
                        if (typeof token !== "number") {
                            token = self.symbols_[token] || token;
                        }
                        return token;
                    }
                    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
                    while (true) {
                        state = stack[stack.length - 1];
                        if (this.defaultActions[state]) {
                            action = this.defaultActions[state];
                        } else {
                            if (symbol === null || typeof symbol == "undefined") {
                                symbol = lex();
                            }
                            action = table[state] && table[state][symbol];
                        }
                        if (typeof action === "undefined" || !action.length || !action[0]) {
                            var errStr = "";
                            if (!recovering) {
                                expected = [];
                                for (p in table[state])
                                    if (this.terminals_[p] && p > 2) {
                                        expected.push("'" + this.terminals_[p] + "'");
                                    }
                                if (this.lexer.showPosition) {
                                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                                } else {
                                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                                }
                                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
                            }
                        }
                        if (action[0] instanceof Array && action.length > 1) {
                            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
                        }
                        switch (action[0]) {
                            case 1:
                                stack.push(symbol);
                                vstack.push(this.lexer.yytext);
                                lstack.push(this.lexer.yylloc);
                                stack.push(action[1]);
                                symbol = null;
                                if (!preErrorSymbol) {
                                    yyleng = this.lexer.yyleng;
                                    yytext = this.lexer.yytext;
                                    yylineno = this.lexer.yylineno;
                                    yyloc = this.lexer.yylloc;
                                    if (recovering > 0)
                                        recovering--;
                                } else {
                                    symbol = preErrorSymbol;
                                    preErrorSymbol = null;
                                }
                                break;
                            case 2:
                                len = this.productions_[action[1]][1];
                                yyval.$ = vstack[vstack.length - len];
                                yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
                                if (ranges) {
                                    yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
                                }
                                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
                                if (typeof r !== "undefined") {
                                    return r;
                                }
                                if (len) {
                                    stack = stack.slice(0, -1 * len * 2);
                                    vstack = vstack.slice(0, -1 * len);
                                    lstack = lstack.slice(0, -1 * len);
                                }
                                stack.push(this.productions_[action[1]][0]);
                                vstack.push(yyval.$);
                                lstack.push(yyval._$);
                                newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                                stack.push(newState);
                                break;
                            case 3:
                                return true;
                        }
                    }
                    return true;
                }
            };


            function stripFlags(open, close) {
                return {
                    left: open.charAt(2) === '~',
                    right: close.charAt(0) === '~' || close.charAt(1) === '~'
                };
            }

            /* Jison generated lexer */
            var lexer = (function(){
                var lexer = ({EOF:1,
                    parseError:function parseError(str, hash) {
                        if (this.yy.parser) {
                            this.yy.parser.parseError(str, hash);
                        } else {
                            throw new Error(str);
                        }
                    },
                    setInput:function (input) {
                        this._input = input;
                        this._more = this._less = this.done = false;
                        this.yylineno = this.yyleng = 0;
                        this.yytext = this.matched = this.match = '';
                        this.conditionStack = ['INITIAL'];
                        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
                        if (this.options.ranges) this.yylloc.range = [0,0];
                        this.offset = 0;
                        return this;
                    },
                    input:function () {
                        var ch = this._input[0];
                        this.yytext += ch;
                        this.yyleng++;
                        this.offset++;
                        this.match += ch;
                        this.matched += ch;
                        var lines = ch.match(/(?:\r\n?|\n).*/g);
                        if (lines) {
                            this.yylineno++;
                            this.yylloc.last_line++;
                        } else {
                            this.yylloc.last_column++;
                        }
                        if (this.options.ranges) this.yylloc.range[1]++;

                        this._input = this._input.slice(1);
                        return ch;
                    },
                    unput:function (ch) {
                        var len = ch.length;
                        var lines = ch.split(/(?:\r\n?|\n)/g);

                        this._input = ch + this._input;
                        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
                        //this.yyleng -= len;
                        this.offset -= len;
                        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                        this.match = this.match.substr(0, this.match.length-1);
                        this.matched = this.matched.substr(0, this.matched.length-1);

                        if (lines.length-1) this.yylineno -= lines.length-1;
                        var r = this.yylloc.range;

                        this.yylloc = {first_line: this.yylloc.first_line,
                            last_line: this.yylineno+1,
                            first_column: this.yylloc.first_column,
                            last_column: lines ?
                            (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
                            this.yylloc.first_column - len
                        };

                        if (this.options.ranges) {
                            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
                        }
                        return this;
                    },
                    more:function () {
                        this._more = true;
                        return this;
                    },
                    less:function (n) {
                        this.unput(this.match.slice(n));
                    },
                    pastInput:function () {
                        var past = this.matched.substr(0, this.matched.length - this.match.length);
                        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
                    },
                    upcomingInput:function () {
                        var next = this.match;
                        if (next.length < 20) {
                            next += this._input.substr(0, 20-next.length);
                        }
                        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
                    },
                    showPosition:function () {
                        var pre = this.pastInput();
                        var c = new Array(pre.length + 1).join("-");
                        return pre + this.upcomingInput() + "\n" + c+"^";
                    },
                    next:function () {
                        if (this.done) {
                            return this.EOF;
                        }
                        if (!this._input) this.done = true;

                        var token,
                            match,
                            tempMatch,
                            index,
                            col,
                            lines;
                        if (!this._more) {
                            this.yytext = '';
                            this.match = '';
                        }
                        var rules = this._currentRules();
                        for (var i=0;i < rules.length; i++) {
                            tempMatch = this._input.match(this.rules[rules[i]]);
                            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                                match = tempMatch;
                                index = i;
                                if (!this.options.flex) break;
                            }
                        }
                        if (match) {
                            lines = match[0].match(/(?:\r\n?|\n).*/g);
                            if (lines) this.yylineno += lines.length;
                            this.yylloc = {first_line: this.yylloc.last_line,
                                last_line: this.yylineno+1,
                                first_column: this.yylloc.last_column,
                                last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
                            this.yytext += match[0];
                            this.match += match[0];
                            this.matches = match;
                            this.yyleng = this.yytext.length;
                            if (this.options.ranges) {
                                this.yylloc.range = [this.offset, this.offset += this.yyleng];
                            }
                            this._more = false;
                            this._input = this._input.slice(match[0].length);
                            this.matched += match[0];
                            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
                            if (this.done && this._input) this.done = false;
                            if (token) return token;
                            else return;
                        }
                        if (this._input === "") {
                            return this.EOF;
                        } else {
                            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                                {text: "", token: null, line: this.yylineno});
                        }
                    },
                    lex:function lex() {
                        var r = this.next();
                        if (typeof r !== 'undefined') {
                            return r;
                        } else {
                            return this.lex();
                        }
                    },
                    begin:function begin(condition) {
                        this.conditionStack.push(condition);
                    },
                    popState:function popState() {
                        return this.conditionStack.pop();
                    },
                    _currentRules:function _currentRules() {
                        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
                    },
                    topState:function () {
                        return this.conditionStack[this.conditionStack.length-2];
                    },
                    pushState:function begin(condition) {
                        this.begin(condition);
                    }});
                lexer.options = {};
                lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {


                    function strip(start, end) {
                        return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng-end);
                    }


                    var YYSTATE=YY_START
                    switch($avoiding_name_collisions) {
                        case 0:
                            if(yy_.yytext.slice(-2) === "\\\\") {
                                strip(0,1);
                                this.begin("mu");
                            } else if(yy_.yytext.slice(-1) === "\\") {
                                strip(0,1);
                                this.begin("emu");
                            } else {
                                this.begin("mu");
                            }
                            if(yy_.yytext) return 14;

                            break;
                        case 1:return 14;
                            break;
                        case 2:
                            this.popState();
                            return 14;

                            break;
                        case 3:strip(0,4); this.popState(); return 15;
                            break;
                        case 4:return 25;
                            break;
                        case 5:return 16;
                            break;
                        case 6:return 20;
                            break;
                        case 7:return 19;
                            break;
                        case 8:return 19;
                            break;
                        case 9:return 23;
                            break;
                        case 10:return 22;
                            break;
                        case 11:this.popState(); this.begin('com');
                            break;
                        case 12:strip(3,5); this.popState(); return 15;
                            break;
                        case 13:return 22;
                            break;
                        case 14:return 39;
                            break;
                        case 15:return 38;
                            break;
                        case 16:return 38;
                            break;
                        case 17:return 42;
                            break;
                        case 18:// ignore whitespace
                            break;
                        case 19:this.popState(); return 24;
                            break;
                        case 20:this.popState(); return 18;
                            break;
                        case 21:yy_.yytext = strip(1,2).replace(/\\"/g,'"'); return 32;
                            break;
                        case 22:yy_.yytext = strip(1,2).replace(/\\'/g,"'"); return 32;
                            break;
                        case 23:return 40;
                            break;
                        case 24:return 34;
                            break;
                        case 25:return 34;
                            break;
                        case 26:return 33;
                            break;
                        case 27:return 38;
                            break;
                        case 28:yy_.yytext = strip(1,2); return 38;
                            break;
                        case 29:return 'INVALID';
                            break;
                        case 30:return 5;
                            break;
                    }
                };
                lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s])))/,/^(?:false(?=([~}\s])))/,/^(?:-?[0-9]+(?=([~}\s])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];
                lexer.conditions = {"mu":{"rules":[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],"inclusive":false},"emu":{"rules":[2],"inclusive":false},"com":{"rules":[3],"inclusive":false},"INITIAL":{"rules":[0,1,30],"inclusive":true}};
                return lexer;})()
            parser.lexer = lexer;
            function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
            return new Parser;
        })();__exports__ = handlebars;
        /* jshint ignore:end */
        return __exports__;
    })();

// handlebars/compiler/base.js
    var __module8__ = (function(__dependency1__, __dependency2__) {
        "use strict";
        var __exports__ = {};
        var parser = __dependency1__;
        var AST = __dependency2__;

        __exports__.parser = parser;

        function parse(input) {
            // Just return if an already-compile AST was passed in.
            if(input.constructor === AST.ProgramNode) { return input; }

            parser.yy = AST;
            return parser.parse(input);
        }

        __exports__.parse = parse;
        return __exports__;
    })(__module9__, __module7__);

// handlebars/compiler/javascript-compiler.js
    var __module11__ = (function(__dependency1__) {
        "use strict";
        var __exports__;
        var COMPILER_REVISION = __dependency1__.COMPILER_REVISION;
        var REVISION_CHANGES = __dependency1__.REVISION_CHANGES;
        var log = __dependency1__.log;

        function Literal(value) {
            this.value = value;
        }

        function JavaScriptCompiler() {}

        JavaScriptCompiler.prototype = {
            // PUBLIC API: You can override these methods in a subclass to provide
            // alternative compiled forms for name lookup and buffering semantics
            nameLookup: function(parent, name /* , type*/) {
                var wrap,
                    ret;
                if (parent.indexOf('depth') === 0) {
                    wrap = true;
                }

                if (/^[0-9]+$/.test(name)) {
                    ret = parent + "[" + name + "]";
                } else if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
                    ret = parent + "." + name;
                }
                else {
                    ret = parent + "['" + name + "']";
                }

                if (wrap) {
                    return '(' + parent + ' && ' + ret + ')';
                } else {
                    return ret;
                }
            },

            compilerInfo: function() {
                var revision = COMPILER_REVISION,
                    versions = REVISION_CHANGES[revision];
                return "this.compilerInfo = ["+revision+",'"+versions+"'];\n";
            },

            appendToBuffer: function(string) {
                if (this.environment.isSimple) {
                    return "return " + string + ";";
                } else {
                    return {
                        appendToBuffer: true,
                        content: string,
                        toString: function() { return "buffer += " + string + ";"; }
                    };
                }
            },

            initializeBuffer: function() {
                return this.quotedString("");
            },

            namespace: "Handlebars",
            // END PUBLIC API

            compile: function(environment, options, context, asObject) {
                this.environment = environment;
                this.options = options || {};

                log('debug', this.environment.disassemble() + "\n\n");

                this.name = this.environment.name;
                this.isChild = !!context;
                this.context = context || {
                        programs: [],
                        environments: [],
                        aliases: { }
                    };

                this.preamble();

                this.stackSlot = 0;
                this.stackVars = [];
                this.registers = { list: [] };
                this.compileStack = [];
                this.inlineStack = [];

                this.compileChildren(environment, options);

                var opcodes = environment.opcodes, opcode;

                this.i = 0;

                for(var l=opcodes.length; this.i<l; this.i++) {
                    opcode = opcodes[this.i];

                    if(opcode.opcode === 'DECLARE') {
                        this[opcode.name] = opcode.value;
                    } else {
                        this[opcode.opcode].apply(this, opcode.args);
                    }

                    // Reset the stripNext flag if it was not set by this operation.
                    if (opcode.opcode !== this.stripNext) {
                        this.stripNext = false;
                    }
                }

                // Flush any trailing content that might be pending.
                this.pushSource('');

                return this.createFunctionContext(asObject);
            },

            preamble: function() {
                var out = [];

                if (!this.isChild) {
                    var namespace = this.namespace;

                    var copies = "helpers = this.merge(helpers, " + namespace + ".helpers);";
                    if (this.environment.usePartial) { copies = copies + " partials = this.merge(partials, " + namespace + ".partials);"; }
                    if (this.options.data) { copies = copies + " data = data || {};"; }
                    out.push(copies);
                } else {
                    out.push('');
                }

                if (!this.environment.isSimple) {
                    out.push(", buffer = " + this.initializeBuffer());
                } else {
                    out.push("");
                }

                // track the last context pushed into place to allow skipping the
                // getContext opcode when it would be a noop
                this.lastContext = 0;
                this.source = out;
            },

            createFunctionContext: function(asObject) {
                var locals = this.stackVars.concat(this.registers.list);

                if(locals.length > 0) {
                    this.source[1] = this.source[1] + ", " + locals.join(", ");
                }

                // Generate minimizer alias mappings
                if (!this.isChild) {
                    for (var alias in this.context.aliases) {
                        if (this.context.aliases.hasOwnProperty(alias)) {
                            this.source[1] = this.source[1] + ', ' + alias + '=' + this.context.aliases[alias];
                        }
                    }
                }

                if (this.source[1]) {
                    this.source[1] = "var " + this.source[1].substring(2) + ";";
                }

                // Merge children
                if (!this.isChild) {
                    this.source[1] += '\n' + this.context.programs.join('\n') + '\n';
                }

                if (!this.environment.isSimple) {
                    this.pushSource("return buffer;");
                }

                var params = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"];

                for(var i=0, l=this.environment.depths.list.length; i<l; i++) {
                    params.push("depth" + this.environment.depths.list[i]);
                }

                // Perform a second pass over the output to merge content when possible
                var source = this.mergeSource();

                if (!this.isChild) {
                    source = this.compilerInfo()+source;
                }

                if (asObject) {
                    params.push(source);

                    return Function.apply(this, params);
                } else {
                    var functionSource = 'function ' + (this.name || '') + '(' + params.join(',') + ') {\n  ' + source + '}';
                    log('debug', functionSource + "\n\n");
                    return functionSource;
                }
            },
            mergeSource: function() {
                // WARN: We are not handling the case where buffer is still populated as the source should
                // not have buffer append operations as their final action.
                var source = '',
                    buffer;
                for (var i = 0, len = this.source.length; i < len; i++) {
                    var line = this.source[i];
                    if (line.appendToBuffer) {
                        if (buffer) {
                            buffer = buffer + '\n    + ' + line.content;
                        } else {
                            buffer = line.content;
                        }
                    } else {
                        if (buffer) {
                            source += 'buffer += ' + buffer + ';\n  ';
                            buffer = undefined;
                        }
                        source += line + '\n  ';
                    }
                }
                return source;
            },

            // [blockValue]
            //
            // On stack, before: hash, inverse, program, value
            // On stack, after: return value of blockHelperMissing
            //
            // The purpose of this opcode is to take a block of the form
            // `{{#foo}}...{{/foo}}`, resolve the value of `foo`, and
            // replace it on the stack with the result of properly
            // invoking blockHelperMissing.
            blockValue: function() {
                this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

                var params = ["depth0"];
                this.setupParams(0, params);

                this.replaceStack(function(current) {
                    params.splice(1, 0, current);
                    return "blockHelperMissing.call(" + params.join(", ") + ")";
                });
            },

            // [ambiguousBlockValue]
            //
            // On stack, before: hash, inverse, program, value
            // Compiler value, before: lastHelper=value of last found helper, if any
            // On stack, after, if no lastHelper: same as [blockValue]
            // On stack, after, if lastHelper: value
            ambiguousBlockValue: function() {
                this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

                var params = ["depth0"];
                this.setupParams(0, params);

                var current = this.topStack();
                params.splice(1, 0, current);

                // Use the options value generated from the invocation
                params[params.length-1] = 'options';

                this.pushSource("if (!" + this.lastHelper + ") { " + current + " = blockHelperMissing.call(" + params.join(", ") + "); }");
            },

            // [appendContent]
            //
            // On stack, before: ...
            // On stack, after: ...
            //
            // Appends the string value of `content` to the current buffer
            appendContent: function(content) {
                if (this.pendingContent) {
                    content = this.pendingContent + content;
                }
                if (this.stripNext) {
                    content = content.replace(/^\s+/, '');
                }

                this.pendingContent = content;
            },

            // [strip]
            //
            // On stack, before: ...
            // On stack, after: ...
            //
            // Removes any trailing whitespace from the prior content node and flags
            // the next operation for stripping if it is a content node.
            strip: function() {
                if (this.pendingContent) {
                    this.pendingContent = this.pendingContent.replace(/\s+$/, '');
                }
                this.stripNext = 'strip';
            },

            // [append]
            //
            // On stack, before: value, ...
            // On stack, after: ...
            //
            // Coerces `value` to a String and appends it to the current buffer.
            //
            // If `value` is truthy, or 0, it is coerced into a string and appended
            // Otherwise, the empty string is appended
            append: function() {
                // Force anything that is inlined onto the stack so we don't have duplication
                // when we examine local
                this.flushInline();
                var local = this.popStack();
                this.pushSource("if(" + local + " || " + local + " === 0) { " + this.appendToBuffer(local) + " }");
                if (this.environment.isSimple) {
                    this.pushSource("else { " + this.appendToBuffer("''") + " }");
                }
            },

            // [appendEscaped]
            //
            // On stack, before: value, ...
            // On stack, after: ...
            //
            // Escape `value` and append it to the buffer
            appendEscaped: function() {
                this.context.aliases.escapeExpression = 'this.escapeExpression';

                this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"));
            },

            // [getContext]
            //
            // On stack, before: ...
            // On stack, after: ...
            // Compiler value, after: lastContext=depth
            //
            // Set the value of the `lastContext` compiler value to the depth
            getContext: function(depth) {
                if(this.lastContext !== depth) {
                    this.lastContext = depth;
                }
            },

            // [lookupOnContext]
            //
            // On stack, before: ...
            // On stack, after: currentContext[name], ...
            //
            // Looks up the value of `name` on the current context and pushes
            // it onto the stack.
            lookupOnContext: function(name) {
                this.push(this.nameLookup('depth' + this.lastContext, name, 'context'));
            },

            // [pushContext]
            //
            // On stack, before: ...
            // On stack, after: currentContext, ...
            //
            // Pushes the value of the current context onto the stack.
            pushContext: function() {
                this.pushStackLiteral('depth' + this.lastContext);
            },

            // [resolvePossibleLambda]
            //
            // On stack, before: value, ...
            // On stack, after: resolved value, ...
            //
            // If the `value` is a lambda, replace it on the stack by
            // the return value of the lambda
            resolvePossibleLambda: function() {
                this.context.aliases.functionType = '"function"';

                this.replaceStack(function(current) {
                    return "typeof " + current + " === functionType ? " + current + ".apply(depth0) : " + current;
                });
            },

            // [lookup]
            //
            // On stack, before: value, ...
            // On stack, after: value[name], ...
            //
            // Replace the value on the stack with the result of looking
            // up `name` on `value`
            lookup: function(name) {
                this.replaceStack(function(current) {
                    return current + " == null || " + current + " === false ? " + current + " : " + this.nameLookup(current, name, 'context');
                });
            },

            // [lookupData]
            //
            // On stack, before: ...
            // On stack, after: data, ...
            //
            // Push the data lookup operator
            lookupData: function() {
                this.push('data');
            },

            // [pushStringParam]
            //
            // On stack, before: ...
            // On stack, after: string, currentContext, ...
            //
            // This opcode is designed for use in string mode, which
            // provides the string value of a parameter along with its
            // depth rather than resolving it immediately.
            pushStringParam: function(string, type) {
                this.pushStackLiteral('depth' + this.lastContext);

                this.pushString(type);

                if (typeof string === 'string') {
                    this.pushString(string);
                } else {
                    this.pushStackLiteral(string);
                }
            },

            emptyHash: function() {
                this.pushStackLiteral('{}');

                if (this.options.stringParams) {
                    this.register('hashTypes', '{}');
                    this.register('hashContexts', '{}');
                }
            },
            pushHash: function() {
                this.hash = {values: [], types: [], contexts: []};
            },
            popHash: function() {
                var hash = this.hash;
                this.hash = undefined;

                if (this.options.stringParams) {
                    this.register('hashContexts', '{' + hash.contexts.join(',') + '}');
                    this.register('hashTypes', '{' + hash.types.join(',') + '}');
                }
                this.push('{\n    ' + hash.values.join(',\n    ') + '\n  }');
            },

            // [pushString]
            //
            // On stack, before: ...
            // On stack, after: quotedString(string), ...
            //
            // Push a quoted version of `string` onto the stack
            pushString: function(string) {
                this.pushStackLiteral(this.quotedString(string));
            },

            // [push]
            //
            // On stack, before: ...
            // On stack, after: expr, ...
            //
            // Push an expression onto the stack
            push: function(expr) {
                this.inlineStack.push(expr);
                return expr;
            },

            // [pushLiteral]
            //
            // On stack, before: ...
            // On stack, after: value, ...
            //
            // Pushes a value onto the stack. This operation prevents
            // the compiler from creating a temporary variable to hold
            // it.
            pushLiteral: function(value) {
                this.pushStackLiteral(value);
            },

            // [pushProgram]
            //
            // On stack, before: ...
            // On stack, after: program(guid), ...
            //
            // Push a program expression onto the stack. This takes
            // a compile-time guid and converts it into a runtime-accessible
            // expression.
            pushProgram: function(guid) {
                if (guid != null) {
                    this.pushStackLiteral(this.programExpression(guid));
                } else {
                    this.pushStackLiteral(null);
                }
            },

            // [invokeHelper]
            //
            // On stack, before: hash, inverse, program, params..., ...
            // On stack, after: result of helper invocation
            //
            // Pops off the helper's parameters, invokes the helper,
            // and pushes the helper's return value onto the stack.
            //
            // If the helper is not found, `helperMissing` is called.
            invokeHelper: function(paramSize, name) {
                this.context.aliases.helperMissing = 'helpers.helperMissing';

                var helper = this.lastHelper = this.setupHelper(paramSize, name, true);
                var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');

                this.push(helper.name + ' || ' + nonHelper);
                this.replaceStack(function(name) {
                    return name + ' ? ' + name + '.call(' +
                        helper.callParams + ") " + ": helperMissing.call(" +
                        helper.helperMissingParams + ")";
                });
            },

            // [invokeKnownHelper]
            //
            // On stack, before: hash, inverse, program, params..., ...
            // On stack, after: result of helper invocation
            //
            // This operation is used when the helper is known to exist,
            // so a `helperMissing` fallback is not required.
            invokeKnownHelper: function(paramSize, name) {
                var helper = this.setupHelper(paramSize, name);
                this.push(helper.name + ".call(" + helper.callParams + ")");
            },

            // [invokeAmbiguous]
            //
            // On stack, before: hash, inverse, program, params..., ...
            // On stack, after: result of disambiguation
            //
            // This operation is used when an expression like `{{foo}}`
            // is provided, but we don't know at compile-time whether it
            // is a helper or a path.
            //
            // This operation emits more code than the other options,
            // and can be avoided by passing the `knownHelpers` and
            // `knownHelpersOnly` flags at compile-time.
            invokeAmbiguous: function(name, helperCall) {
                this.context.aliases.functionType = '"function"';

                this.pushStackLiteral('{}');    // Hash value
                var helper = this.setupHelper(0, name, helperCall);

                var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

                var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');
                var nextStack = this.nextStack();

                this.pushSource('if (' + nextStack + ' = ' + helperName + ') { ' + nextStack + ' = ' + nextStack + '.call(' + helper.callParams + '); }');
                this.pushSource('else { ' + nextStack + ' = ' + nonHelper + '; ' + nextStack + ' = typeof ' + nextStack + ' === functionType ? ' + nextStack + '.call(' + helper.callParams + ') : ' + nextStack + '; }');
            },

            // [invokePartial]
            //
            // On stack, before: context, ...
            // On stack after: result of partial invocation
            //
            // This operation pops off a context, invokes a partial with that context,
            // and pushes the result of the invocation back.
            invokePartial: function(name) {
                var params = [this.nameLookup('partials', name, 'partial'), "'" + name + "'", this.popStack(), "helpers", "partials"];

                if (this.options.data) {
                    params.push("data");
                }

                this.context.aliases.self = "this";
                this.push("self.invokePartial(" + params.join(", ") + ")");
            },

            // [assignToHash]
            //
            // On stack, before: value, hash, ...
            // On stack, after: hash, ...
            //
            // Pops a value and hash off the stack, assigns `hash[key] = value`
            // and pushes the hash back onto the stack.
            assignToHash: function(key) {
                var value = this.popStack(),
                    context,
                    type;

                if (this.options.stringParams) {
                    type = this.popStack();
                    context = this.popStack();
                }

                var hash = this.hash;
                if (context) {
                    hash.contexts.push("'" + key + "': " + context);
                }
                if (type) {
                    hash.types.push("'" + key + "': " + type);
                }
                hash.values.push("'" + key + "': (" + value + ")");
            },

            // HELPERS

            compiler: JavaScriptCompiler,

            compileChildren: function(environment, options) {
                var children = environment.children, child, compiler;

                for(var i=0, l=children.length; i<l; i++) {
                    child = children[i];
                    compiler = new this.compiler();

                    var index = this.matchExistingProgram(child);

                    if (index == null) {
                        this.context.programs.push('');     // Placeholder to prevent name conflicts for nested children
                        index = this.context.programs.length;
                        child.index = index;
                        child.name = 'program' + index;
                        this.context.programs[index] = compiler.compile(child, options, this.context);
                        this.context.environments[index] = child;
                    } else {
                        child.index = index;
                        child.name = 'program' + index;
                    }
                }
            },
            matchExistingProgram: function(child) {
                for (var i = 0, len = this.context.environments.length; i < len; i++) {
                    var environment = this.context.environments[i];
                    if (environment && environment.equals(child)) {
                        return i;
                    }
                }
            },

            programExpression: function(guid) {
                this.context.aliases.self = "this";

                if(guid == null) {
                    return "self.noop";
                }

                var child = this.environment.children[guid],
                    depths = child.depths.list, depth;

                var programParams = [child.index, child.name, "data"];

                for(var i=0, l = depths.length; i<l; i++) {
                    depth = depths[i];

                    if(depth === 1) { programParams.push("depth0"); }
                    else { programParams.push("depth" + (depth - 1)); }
                }

                return (depths.length === 0 ? "self.program(" : "self.programWithDepth(") + programParams.join(", ") + ")";
            },

            register: function(name, val) {
                this.useRegister(name);
                this.pushSource(name + " = " + val + ";");
            },

            useRegister: function(name) {
                if(!this.registers[name]) {
                    this.registers[name] = true;
                    this.registers.list.push(name);
                }
            },

            pushStackLiteral: function(item) {
                return this.push(new Literal(item));
            },

            pushSource: function(source) {
                if (this.pendingContent) {
                    this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent)));
                    this.pendingContent = undefined;
                }

                if (source) {
                    this.source.push(source);
                }
            },

            pushStack: function(item) {
                this.flushInline();

                var stack = this.incrStack();
                if (item) {
                    this.pushSource(stack + " = " + item + ";");
                }
                this.compileStack.push(stack);
                return stack;
            },

            replaceStack: function(callback) {
                var prefix = '',
                    inline = this.isInline(),
                    stack;

                // If we are currently inline then we want to merge the inline statement into the
                // replacement statement via ','
                if (inline) {
                    var top = this.popStack(true);

                    if (top instanceof Literal) {
                        // Literals do not need to be inlined
                        stack = top.value;
                    } else {
                        // Get or create the current stack name for use by the inline
                        var name = this.stackSlot ? this.topStackName() : this.incrStack();

                        prefix = '(' + this.push(name) + ' = ' + top + '),';
                        stack = this.topStack();
                    }
                } else {
                    stack = this.topStack();
                }

                var item = callback.call(this, stack);

                if (inline) {
                    if (this.inlineStack.length || this.compileStack.length) {
                        this.popStack();
                    }
                    this.push('(' + prefix + item + ')');
                } else {
                    // Prevent modification of the context depth variable. Through replaceStack
                    if (!/^stack/.test(stack)) {
                        stack = this.nextStack();
                    }

                    this.pushSource(stack + " = (" + prefix + item + ");");
                }
                return stack;
            },

            nextStack: function() {
                return this.pushStack();
            },

            incrStack: function() {
                this.stackSlot++;
                if(this.stackSlot > this.stackVars.length) { this.stackVars.push("stack" + this.stackSlot); }
                return this.topStackName();
            },
            topStackName: function() {
                return "stack" + this.stackSlot;
            },
            flushInline: function() {
                var inlineStack = this.inlineStack;
                if (inlineStack.length) {
                    this.inlineStack = [];
                    for (var i = 0, len = inlineStack.length; i < len; i++) {
                        var entry = inlineStack[i];
                        if (entry instanceof Literal) {
                            this.compileStack.push(entry);
                        } else {
                            this.pushStack(entry);
                        }
                    }
                }
            },
            isInline: function() {
                return this.inlineStack.length;
            },

            popStack: function(wrapped) {
                var inline = this.isInline(),
                    item = (inline ? this.inlineStack : this.compileStack).pop();

                if (!wrapped && (item instanceof Literal)) {
                    return item.value;
                } else {
                    if (!inline) {
                        this.stackSlot--;
                    }
                    return item;
                }
            },

            topStack: function(wrapped) {
                var stack = (this.isInline() ? this.inlineStack : this.compileStack),
                    item = stack[stack.length - 1];

                if (!wrapped && (item instanceof Literal)) {
                    return item.value;
                } else {
                    return item;
                }
            },

            quotedString: function(str) {
                return '"' + str
                        .replace(/\\/g, '\\\\')
                        .replace(/"/g, '\\"')
                        .replace(/\n/g, '\\n')
                        .replace(/\r/g, '\\r')
                        .replace(/\u2028/g, '\\u2028')   // Per Ecma-262 7.3 + 7.8.4
                        .replace(/\u2029/g, '\\u2029') + '"';
            },

            setupHelper: function(paramSize, name, missingParams) {
                var params = [];
                this.setupParams(paramSize, params, missingParams);
                var foundHelper = this.nameLookup('helpers', name, 'helper');

                return {
                    params: params,
                    name: foundHelper,
                    callParams: ["depth0"].concat(params).join(", "),
                    helperMissingParams: missingParams && ["depth0", this.quotedString(name)].concat(params).join(", ")
                };
            },

            // the params and contexts arguments are passed in arrays
            // to fill in
            setupParams: function(paramSize, params, useRegister) {
                var options = [], contexts = [], types = [], param, inverse, program;

                options.push("hash:" + this.popStack());

                inverse = this.popStack();
                program = this.popStack();

                // Avoid setting fn and inverse if neither are set. This allows
                // helpers to do a check for `if (options.fn)`
                if (program || inverse) {
                    if (!program) {
                        this.context.aliases.self = "this";
                        program = "self.noop";
                    }

                    if (!inverse) {
                        this.context.aliases.self = "this";
                        inverse = "self.noop";
                    }

                    options.push("inverse:" + inverse);
                    options.push("fn:" + program);
                }

                for(var i=0; i<paramSize; i++) {
                    param = this.popStack();
                    params.push(param);

                    if(this.options.stringParams) {
                        types.push(this.popStack());
                        contexts.push(this.popStack());
                    }
                }

                if (this.options.stringParams) {
                    options.push("contexts:[" + contexts.join(",") + "]");
                    options.push("types:[" + types.join(",") + "]");
                    options.push("hashContexts:hashContexts");
                    options.push("hashTypes:hashTypes");
                }

                if(this.options.data) {
                    options.push("data:data");
                }

                options = "{" + options.join(",") + "}";
                if (useRegister) {
                    this.register('options', options);
                    params.push('options');
                } else {
                    params.push(options);
                }
                return params.join(", ");
            }
        };

        var reservedWords = (
            "break else new var" +
            " case finally return void" +
            " catch for switch while" +
            " continue function this with" +
            " default if throw" +
            " delete in try" +
            " do instanceof typeof" +
            " abstract enum int short" +
            " boolean export interface static" +
            " byte extends long super" +
            " char final native synchronized" +
            " class float package throws" +
            " const goto private transient" +
            " debugger implements protected volatile" +
            " double import public let yield"
        ).split(" ");

        var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

        for(var i=0, l=reservedWords.length; i<l; i++) {
            compilerWords[reservedWords[i]] = true;
        }

        JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
            if(!JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(name)) {
                return true;
            }
            return false;
        };

        __exports__ = JavaScriptCompiler;
        return __exports__;
    })(__module2__);

// handlebars/compiler/compiler.js
    var __module10__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__) {
        "use strict";
        var __exports__ = {};
        var Exception = __dependency1__;
        var parse = __dependency2__.parse;
        var JavaScriptCompiler = __dependency3__;
        var AST = __dependency4__;

        function Compiler() {}

        __exports__.Compiler = Compiler;// the foundHelper register will disambiguate helper lookup from finding a
        // function in a context. This is necessary for mustache compatibility, which
        // requires that context functions in blocks are evaluated by blockHelperMissing,
        // and then proceed as if the resulting value was provided to blockHelperMissing.

        Compiler.prototype = {
            compiler: Compiler,

            disassemble: function() {
                var opcodes = this.opcodes, opcode, out = [], params, param;

                for (var i=0, l=opcodes.length; i<l; i++) {
                    opcode = opcodes[i];

                    if (opcode.opcode === 'DECLARE') {
                        out.push("DECLARE " + opcode.name + "=" + opcode.value);
                    } else {
                        params = [];
                        for (var j=0; j<opcode.args.length; j++) {
                            param = opcode.args[j];
                            if (typeof param === "string") {
                                param = "\"" + param.replace("\n", "\\n") + "\"";
                            }
                            params.push(param);
                        }
                        out.push(opcode.opcode + " " + params.join(" "));
                    }
                }

                return out.join("\n");
            },

            equals: function(other) {
                var len = this.opcodes.length;
                if (other.opcodes.length !== len) {
                    return false;
                }

                for (var i = 0; i < len; i++) {
                    var opcode = this.opcodes[i],
                        otherOpcode = other.opcodes[i];
                    if (opcode.opcode !== otherOpcode.opcode || opcode.args.length !== otherOpcode.args.length) {
                        return false;
                    }
                    for (var j = 0; j < opcode.args.length; j++) {
                        if (opcode.args[j] !== otherOpcode.args[j]) {
                            return false;
                        }
                    }
                }

                len = this.children.length;
                if (other.children.length !== len) {
                    return false;
                }
                for (i = 0; i < len; i++) {
                    if (!this.children[i].equals(other.children[i])) {
                        return false;
                    }
                }

                return true;
            },

            guid: 0,

            compile: function(program, options) {
                this.opcodes = [];
                this.children = [];
                this.depths = {list: []};
                this.options = options;

                // These changes will propagate to the other compiler components
                var knownHelpers = this.options.knownHelpers;
                this.options.knownHelpers = {
                    'helperMissing': true,
                    'blockHelperMissing': true,
                    'each': true,
                    'if': true,
                    'unless': true,
                    'with': true,
                    'log': true
                };
                if (knownHelpers) {
                    for (var name in knownHelpers) {
                        this.options.knownHelpers[name] = knownHelpers[name];
                    }
                }

                return this.accept(program);
            },

            accept: function(node) {
                var strip = node.strip || {},
                    ret;
                if (strip.left) {
                    this.opcode('strip');
                }

                ret = this[node.type](node);

                if (strip.right) {
                    this.opcode('strip');
                }

                return ret;
            },

            program: function(program) {
                var statements = program.statements;

                for(var i=0, l=statements.length; i<l; i++) {
                    this.accept(statements[i]);
                }
                this.isSimple = l === 1;

                this.depths.list = this.depths.list.sort(function(a, b) {
                    return a - b;
                });

                return this;
            },

            compileProgram: function(program) {
                var result = new this.compiler().compile(program, this.options);
                var guid = this.guid++, depth;

                this.usePartial = this.usePartial || result.usePartial;

                this.children[guid] = result;

                for(var i=0, l=result.depths.list.length; i<l; i++) {
                    depth = result.depths.list[i];

                    if(depth < 2) { continue; }
                    else { this.addDepth(depth - 1); }
                }

                return guid;
            },

            block: function(block) {
                var mustache = block.mustache,
                    program = block.program,
                    inverse = block.inverse;

                if (program) {
                    program = this.compileProgram(program);
                }

                if (inverse) {
                    inverse = this.compileProgram(inverse);
                }

                var type = this.classifyMustache(mustache);

                if (type === "helper") {
                    this.helperMustache(mustache, program, inverse);
                } else if (type === "simple") {
                    this.simpleMustache(mustache);

                    // now that the simple mustache is resolved, we need to
                    // evaluate it by executing `blockHelperMissing`
                    this.opcode('pushProgram', program);
                    this.opcode('pushProgram', inverse);
                    this.opcode('emptyHash');
                    this.opcode('blockValue');
                } else {
                    this.ambiguousMustache(mustache, program, inverse);

                    // now that the simple mustache is resolved, we need to
                    // evaluate it by executing `blockHelperMissing`
                    this.opcode('pushProgram', program);
                    this.opcode('pushProgram', inverse);
                    this.opcode('emptyHash');
                    this.opcode('ambiguousBlockValue');
                }

                this.opcode('append');
            },

            hash: function(hash) {
                var pairs = hash.pairs, pair, val;

                this.opcode('pushHash');

                for(var i=0, l=pairs.length; i<l; i++) {
                    pair = pairs[i];
                    val  = pair[1];

                    if (this.options.stringParams) {
                        if(val.depth) {
                            this.addDepth(val.depth);
                        }
                        this.opcode('getContext', val.depth || 0);
                        this.opcode('pushStringParam', val.stringModeValue, val.type);
                    } else {
                        this.accept(val);
                    }

                    this.opcode('assignToHash', pair[0]);
                }
                this.opcode('popHash');
            },

            partial: function(partial) {
                var partialName = partial.partialName;
                this.usePartial = true;

                if(partial.context) {
                    this.ID(partial.context);
                } else {
                    this.opcode('push', 'depth0');
                }

                this.opcode('invokePartial', partialName.name);
                this.opcode('append');
            },

            content: function(content) {
                this.opcode('appendContent', content.string);
            },

            mustache: function(mustache) {
                var options = this.options;
                var type = this.classifyMustache(mustache);

                if (type === "simple") {
                    this.simpleMustache(mustache);
                } else if (type === "helper") {
                    this.helperMustache(mustache);
                } else {
                    this.ambiguousMustache(mustache);
                }

                if(mustache.escaped && !options.noEscape) {
                    this.opcode('appendEscaped');
                } else {
                    this.opcode('append');
                }
            },

            ambiguousMustache: function(mustache, program, inverse) {
                var id = mustache.id,
                    name = id.parts[0],
                    isBlock = program != null || inverse != null;

                this.opcode('getContext', id.depth);

                this.opcode('pushProgram', program);
                this.opcode('pushProgram', inverse);

                this.opcode('invokeAmbiguous', name, isBlock);
            },

            simpleMustache: function(mustache) {
                var id = mustache.id;

                if (id.type === 'DATA') {
                    this.DATA(id);
                } else if (id.parts.length) {
                    this.ID(id);
                } else {
                    // Simplified ID for `this`
                    this.addDepth(id.depth);
                    this.opcode('getContext', id.depth);
                    this.opcode('pushContext');
                }

                this.opcode('resolvePossibleLambda');
            },

            helperMustache: function(mustache, program, inverse) {
                var params = this.setupFullMustacheParams(mustache, program, inverse),
                    name = mustache.id.parts[0];

                if (this.options.knownHelpers[name]) {
                    this.opcode('invokeKnownHelper', params.length, name);
                } else if (this.options.knownHelpersOnly) {
                    throw new Error("You specified knownHelpersOnly, but used the unknown helper " + name);
                } else {
                    this.opcode('invokeHelper', params.length, name);
                }
            },

            ID: function(id) {
                this.addDepth(id.depth);
                this.opcode('getContext', id.depth);

                var name = id.parts[0];
                if (!name) {
                    this.opcode('pushContext');
                } else {
                    this.opcode('lookupOnContext', id.parts[0]);
                }

                for(var i=1, l=id.parts.length; i<l; i++) {
                    this.opcode('lookup', id.parts[i]);
                }
            },

            DATA: function(data) {
                this.options.data = true;
                if (data.id.isScoped || data.id.depth) {
                    throw new Exception('Scoped data references are not supported: ' + data.original);
                }

                this.opcode('lookupData');
                var parts = data.id.parts;
                for(var i=0, l=parts.length; i<l; i++) {
                    this.opcode('lookup', parts[i]);
                }
            },

            STRING: function(string) {
                this.opcode('pushString', string.string);
            },

            INTEGER: function(integer) {
                this.opcode('pushLiteral', integer.integer);
            },

            BOOLEAN: function(bool) {
                this.opcode('pushLiteral', bool.bool);
            },

            comment: function() {},

            // HELPERS
            opcode: function(name) {
                this.opcodes.push({ opcode: name, args: [].slice.call(arguments, 1) });
            },

            declare: function(name, value) {
                this.opcodes.push({ opcode: 'DECLARE', name: name, value: value });
            },

            addDepth: function(depth) {
                if(isNaN(depth)) { throw new Error("EWOT"); }
                if(depth === 0) { return; }

                if(!this.depths[depth]) {
                    this.depths[depth] = true;
                    this.depths.list.push(depth);
                }
            },

            classifyMustache: function(mustache) {
                var isHelper   = mustache.isHelper;
                var isEligible = mustache.eligibleHelper;
                var options    = this.options;

                // if ambiguous, we can possibly resolve the ambiguity now
                if (isEligible && !isHelper) {
                    var name = mustache.id.parts[0];

                    if (options.knownHelpers[name]) {
                        isHelper = true;
                    } else if (options.knownHelpersOnly) {
                        isEligible = false;
                    }
                }

                if (isHelper) { return "helper"; }
                else if (isEligible) { return "ambiguous"; }
                else { return "simple"; }
            },

            pushParams: function(params) {
                var i = params.length, param;

                while(i--) {
                    param = params[i];

                    if(this.options.stringParams) {
                        if(param.depth) {
                            this.addDepth(param.depth);
                        }

                        this.opcode('getContext', param.depth || 0);
                        this.opcode('pushStringParam', param.stringModeValue, param.type);
                    } else {
                        this[param.type](param);
                    }
                }
            },

            setupMustacheParams: function(mustache) {
                var params = mustache.params;
                this.pushParams(params);

                if(mustache.hash) {
                    this.hash(mustache.hash);
                } else {
                    this.opcode('emptyHash');
                }

                return params;
            },

            // this will replace setupMustacheParams when we're done
            setupFullMustacheParams: function(mustache, program, inverse) {
                var params = mustache.params;
                this.pushParams(params);

                this.opcode('pushProgram', program);
                this.opcode('pushProgram', inverse);

                if(mustache.hash) {
                    this.hash(mustache.hash);
                } else {
                    this.opcode('emptyHash');
                }

                return params;
            }
        };

        function precompile(input, options) {
            if (input == null || (typeof input !== 'string' && input.constructor !== AST.ProgramNode)) {
                throw new Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input);
            }

            options = options || {};
            if (!('data' in options)) {
                options.data = true;
            }

            var ast = parse(input);
            var environment = new Compiler().compile(ast, options);
            return new JavaScriptCompiler().compile(environment, options);
        }

        __exports__.precompile = precompile;function compile(input, options, env) {
            if (input == null || (typeof input !== 'string' && input.constructor !== AST.ProgramNode)) {
                throw new Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input);
            }

            options = options || {};

            if (!('data' in options)) {
                options.data = true;
            }

            var compiled;

            function compileInput() {
                var ast = parse(input);
                var environment = new Compiler().compile(ast, options);
                var templateSpec = new JavaScriptCompiler().compile(environment, options, undefined, true);
                return env.template(templateSpec);
            }

            // Template is only compiled on first use and cached after that point.
            return function(context, options) {
                if (!compiled) {
                    compiled = compileInput();
                }
                return compiled.call(this, context, options);
            };
        }

        __exports__.compile = compile;
        return __exports__;
    })(__module5__, __module8__, __module11__, __module7__);

// handlebars.js
    var __module0__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
        "use strict";
        var __exports__;
        /*globals Handlebars: true */
        var Handlebars = __dependency1__;

        // Compiler imports
        var AST = __dependency2__;
        var Parser = __dependency3__.parser;
        var parse = __dependency3__.parse;
        var Compiler = __dependency4__.Compiler;
        var compile = __dependency4__.compile;
        var precompile = __dependency4__.precompile;
        var JavaScriptCompiler = __dependency5__;

        var _create = Handlebars.create;
        var create = function() {
            var hb = _create();

            hb.compile = function(input, options) {
                return compile(input, options, hb);
            };
            hb.precompile = precompile;

            hb.AST = AST;
            hb.Compiler = Compiler;
            hb.JavaScriptCompiler = JavaScriptCompiler;
            hb.Parser = Parser;
            hb.parse = parse;

            return hb;
        };

        Handlebars = create();
        Handlebars.create = create;

        __exports__ = Handlebars;
        return __exports__;
    })(__module1__, __module7__, __module8__, __module10__, __module11__);

    return __module0__;
})();



/*===============================
/media/com_ems/js/lib/moment-with-locales.min.js
================================================================================*/;
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return Md.apply(null,arguments)}function b(a){Md=a}function c(a){return"[object Array]"===Object.prototype.toString.call(a)}function d(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function e(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function f(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function g(a,b){for(var c in b)f(b,c)&&(a[c]=b[c]);return f(b,"toString")&&(a.toString=b.toString),f(b,"valueOf")&&(a.valueOf=b.valueOf),a}function h(a,b,c,d){return Ca(a,b,c,d,!0).utc()}function i(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function j(a){return null==a._pf&&(a._pf=i()),a._pf}function k(a){if(null==a._isValid){var b=j(a);a._isValid=!(isNaN(a._d.getTime())||!(b.overflow<0)||b.empty||b.invalidMonth||b.invalidWeekday||b.nullInput||b.invalidFormat||b.userInvalidated),a._strict&&(a._isValid=a._isValid&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour)}return a._isValid}function l(a){var b=h(NaN);return null!=a?g(j(b),a):j(b).userInvalidated=!0,b}function m(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=j(b)),"undefined"!=typeof b._locale&&(a._locale=b._locale),Od.length>0)for(c in Od)d=Od[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function n(b){m(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),Pd===!1&&(Pd=!0,a.updateOffset(this),Pd=!1)}function o(a){return a instanceof n||null!=a&&null!=a._isAMomentObject}function p(a){return 0>a?Math.ceil(a):Math.floor(a)}function q(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=p(b)),c}function r(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&q(a[d])!==q(b[d]))&&g++;return g+f}function s(){}function t(a){return a?a.toLowerCase().replace("_","-"):a}function u(a){for(var b,c,d,e,f=0;f<a.length;){for(e=t(a[f]).split("-"),b=e.length,c=t(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=v(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&r(e,c,!0)>=b-1)break;b--}f++}return null}function v(a){var b=null;if(!Qd[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=Nd._abbr,require("./locale/"+a),w(b)}catch(c){}return Qd[a]}function w(a,b){var c;return a&&(c="undefined"==typeof b?y(a):x(a,b),c&&(Nd=c)),Nd._abbr}function x(a,b){return null!==b?(b.abbr=a,Qd[a]=Qd[a]||new s,Qd[a].set(b),w(a),Qd[a]):(delete Qd[a],null)}function y(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return Nd;if(!c(a)){if(b=v(a))return b;a=[a]}return u(a)}function z(a,b){var c=a.toLowerCase();Rd[c]=Rd[c+"s"]=Rd[b]=a}function A(a){return"string"==typeof a?Rd[a]||Rd[a.toLowerCase()]:void 0}function B(a){var b,c,d={};for(c in a)f(a,c)&&(b=A(c),b&&(d[b]=a[c]));return d}function C(b,c){return function(d){return null!=d?(E(this,b,d),a.updateOffset(this,c),this):D(this,b)}}function D(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function E(a,b,c){return a._d["set"+(a._isUTC?"UTC":"")+b](c)}function F(a,b){var c;if("object"==typeof a)for(c in a)this.set(c,a[c]);else if(a=A(a),"function"==typeof this[a])return this[a](b);return this}function G(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}function H(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Vd[a]=e),b&&(Vd[b[0]]=function(){return G(e.apply(this,arguments),b[1],b[2])}),c&&(Vd[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function I(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function J(a){var b,c,d=a.match(Sd);for(b=0,c=d.length;c>b;b++)Vd[d[b]]?d[b]=Vd[d[b]]:d[b]=I(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function K(a,b){return a.isValid()?(b=L(b,a.localeData()),Ud[b]=Ud[b]||J(b),Ud[b](a)):a.localeData().invalidDate()}function L(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Td.lastIndex=0;d>=0&&Td.test(a);)a=a.replace(Td,c),Td.lastIndex=0,d-=1;return a}function M(a){return"function"==typeof a&&"[object Function]"===Object.prototype.toString.call(a)}function N(a,b,c){ie[a]=M(b)?b:function(a){return a&&c?c:b}}function O(a,b){return f(ie,a)?ie[a](b._strict,b._locale):new RegExp(P(a))}function P(a){return a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Q(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),"number"==typeof b&&(d=function(a,c){c[b]=q(a)}),c=0;c<a.length;c++)je[a[c]]=d}function R(a,b){Q(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function S(a,b,c){null!=b&&f(je,a)&&je[a](b,c._a,c,a)}function T(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function U(a){return this._months[a.month()]}function V(a){return this._monthsShort[a.month()]}function W(a,b,c){var d,e,f;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=h([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}function X(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),T(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function Y(b){return null!=b?(X(this,b),a.updateOffset(this,!0),this):D(this,"Month")}function Z(){return T(this.year(),this.month())}function $(a){var b,c=a._a;return c&&-2===j(a).overflow&&(b=c[le]<0||c[le]>11?le:c[me]<1||c[me]>T(c[ke],c[le])?me:c[ne]<0||c[ne]>24||24===c[ne]&&(0!==c[oe]||0!==c[pe]||0!==c[qe])?ne:c[oe]<0||c[oe]>59?oe:c[pe]<0||c[pe]>59?pe:c[qe]<0||c[qe]>999?qe:-1,j(a)._overflowDayOfYear&&(ke>b||b>me)&&(b=me),j(a).overflow=b),a}function _(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function aa(a,b){var c=!0;return g(function(){return c&&(_(a+"\n"+(new Error).stack),c=!1),b.apply(this,arguments)},b)}function ba(a,b){te[a]||(_(b),te[a]=!0)}function ca(a){var b,c,d=a._i,e=ue.exec(d);if(e){for(j(a).iso=!0,b=0,c=ve.length;c>b;b++)if(ve[b][1].exec(d)){a._f=ve[b][0];break}for(b=0,c=we.length;c>b;b++)if(we[b][1].exec(d)){a._f+=(e[6]||" ")+we[b][0];break}d.match(fe)&&(a._f+="Z"),va(a)}else a._isValid=!1}function da(b){var c=xe.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(ca(b),void(b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b))))}function ea(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function fa(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function ga(a){return ha(a)?366:365}function ha(a){return a%4===0&&a%100!==0||a%400===0}function ia(){return ha(this.year())}function ja(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=Da(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function ka(a){return ja(a,this._week.dow,this._week.doy).week}function la(){return this._week.dow}function ma(){return this._week.doy}function na(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function oa(a){var b=ja(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}function pa(a,b,c,d,e){var f,g=6+e-d,h=fa(a,0,1+g),i=h.getUTCDay();return e>i&&(i+=7),c=null!=c?1*c:e,f=1+g+7*(b-1)-i+c,{year:f>0?a:a-1,dayOfYear:f>0?f:ga(a-1)+f}}function qa(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function ra(a,b,c){return null!=a?a:null!=b?b:c}function sa(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function ta(a){var b,c,d,e,f=[];if(!a._d){for(d=sa(a),a._w&&null==a._a[me]&&null==a._a[le]&&ua(a),a._dayOfYear&&(e=ra(a._a[ke],d[ke]),a._dayOfYear>ga(e)&&(j(a)._overflowDayOfYear=!0),c=fa(e,0,a._dayOfYear),a._a[le]=c.getUTCMonth(),a._a[me]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=f[b]=d[b];for(;7>b;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];24===a._a[ne]&&0===a._a[oe]&&0===a._a[pe]&&0===a._a[qe]&&(a._nextDay=!0,a._a[ne]=0),a._d=(a._useUTC?fa:ea).apply(null,f),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[ne]=24)}}function ua(a){var b,c,d,e,f,g,h;b=a._w,null!=b.GG||null!=b.W||null!=b.E?(f=1,g=4,c=ra(b.GG,a._a[ke],ja(Da(),1,4).year),d=ra(b.W,1),e=ra(b.E,1)):(f=a._locale._week.dow,g=a._locale._week.doy,c=ra(b.gg,a._a[ke],ja(Da(),f,g).year),d=ra(b.w,1),null!=b.d?(e=b.d,f>e&&++d):e=null!=b.e?b.e+f:f),h=pa(c,d,e,g,f),a._a[ke]=h.year,a._dayOfYear=h.dayOfYear}function va(b){if(b._f===a.ISO_8601)return void ca(b);b._a=[],j(b).empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,k=0;for(e=L(b._f,b._locale).match(Sd)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(O(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&j(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),k+=d.length),Vd[f]?(d?j(b).empty=!1:j(b).unusedTokens.push(f),S(f,d,b)):b._strict&&!d&&j(b).unusedTokens.push(f);j(b).charsLeftOver=i-k,h.length>0&&j(b).unusedInput.push(h),j(b).bigHour===!0&&b._a[ne]<=12&&b._a[ne]>0&&(j(b).bigHour=void 0),b._a[ne]=wa(b._locale,b._a[ne],b._meridiem),ta(b),$(b)}function wa(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}function xa(a){var b,c,d,e,f;if(0===a._f.length)return j(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=m({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],va(b),k(b)&&(f+=j(b).charsLeftOver,f+=10*j(b).unusedTokens.length,j(b).score=f,(null==d||d>f)&&(d=f,c=b));g(a,c||b)}function ya(a){if(!a._d){var b=B(a._i);a._a=[b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],ta(a)}}function za(a){var b=new n($(Aa(a)));return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function Aa(a){var b=a._i,e=a._f;return a._locale=a._locale||y(a._l),null===b||void 0===e&&""===b?l({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),o(b)?new n($(b)):(c(e)?xa(a):e?va(a):d(b)?a._d=b:Ba(a),a))}function Ba(b){var f=b._i;void 0===f?b._d=new Date:d(f)?b._d=new Date(+f):"string"==typeof f?da(b):c(f)?(b._a=e(f.slice(0),function(a){return parseInt(a,10)}),ta(b)):"object"==typeof f?ya(b):"number"==typeof f?b._d=new Date(f):a.createFromInputFallback(b)}function Ca(a,b,c,d,e){var f={};return"boolean"==typeof c&&(d=c,c=void 0),f._isAMomentObject=!0,f._useUTC=f._isUTC=e,f._l=c,f._i=a,f._f=b,f._strict=d,za(f)}function Da(a,b,c,d){return Ca(a,b,c,d,!1)}function Ea(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return Da();for(d=b[0],e=1;e<b.length;++e)(!b[e].isValid()||b[e][a](d))&&(d=b[e]);return d}function Fa(){var a=[].slice.call(arguments,0);return Ea("isBefore",a)}function Ga(){var a=[].slice.call(arguments,0);return Ea("isAfter",a)}function Ha(a){var b=B(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=y(),this._bubble()}function Ia(a){return a instanceof Ha}function Ja(a,b){H(a,0,0,function(){var a=this.utcOffset(),c="+";return 0>a&&(a=-a,c="-"),c+G(~~(a/60),2)+b+G(~~a%60,2)})}function Ka(a){var b=(a||"").match(fe)||[],c=b[b.length-1]||[],d=(c+"").match(Ce)||["-",0,0],e=+(60*d[1])+q(d[2]);return"+"===d[0]?e:-e}function La(b,c){var e,f;return c._isUTC?(e=c.clone(),f=(o(b)||d(b)?+b:+Da(b))-+e,e._d.setTime(+e._d+f),a.updateOffset(e,!1),e):Da(b).local()}function Ma(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)}function Na(b,c){var d,e=this._offset||0;return null!=b?("string"==typeof b&&(b=Ka(b)),Math.abs(b)<16&&(b=60*b),!this._isUTC&&c&&(d=Ma(this)),this._offset=b,this._isUTC=!0,null!=d&&this.add(d,"m"),e!==b&&(!c||this._changeInProgress?bb(this,Ya(b-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?e:Ma(this)}function Oa(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Pa(a){return this.utcOffset(0,a)}function Qa(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Ma(this),"m")),this}function Ra(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(Ka(this._i)),this}function Sa(a){return a=a?Da(a).utcOffset():0,(this.utcOffset()-a)%60===0}function Ta(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ua(){if("undefined"!=typeof this._isDSTShifted)return this._isDSTShifted;var a={};if(m(a,this),a=Aa(a),a._a){var b=a._isUTC?h(a._a):Da(a._a);this._isDSTShifted=this.isValid()&&r(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Va(){return!this._isUTC}function Wa(){return this._isUTC}function Xa(){return this._isUTC&&0===this._offset}function Ya(a,b){var c,d,e,g=a,h=null;return Ia(a)?g={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(g={},b?g[b]=a:g.milliseconds=a):(h=De.exec(a))?(c="-"===h[1]?-1:1,g={y:0,d:q(h[me])*c,h:q(h[ne])*c,m:q(h[oe])*c,s:q(h[pe])*c,ms:q(h[qe])*c}):(h=Ee.exec(a))?(c="-"===h[1]?-1:1,g={y:Za(h[2],c),M:Za(h[3],c),d:Za(h[4],c),h:Za(h[5],c),m:Za(h[6],c),s:Za(h[7],c),w:Za(h[8],c)}):null==g?g={}:"object"==typeof g&&("from"in g||"to"in g)&&(e=_a(Da(g.from),Da(g.to)),g={},g.ms=e.milliseconds,g.M=e.months),d=new Ha(g),Ia(a)&&f(a,"_locale")&&(d._locale=a._locale),d}function Za(a,b){var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function $a(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function _a(a,b){var c;return b=La(b,a),a.isBefore(b)?c=$a(a,b):(c=$a(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function ab(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(ba(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Ya(c,d),bb(this,e,a),this}}function bb(b,c,d,e){var f=c._milliseconds,g=c._days,h=c._months;e=null==e?!0:e,f&&b._d.setTime(+b._d+f*d),g&&E(b,"Date",D(b,"Date")+g*d),h&&X(b,D(b,"Month")+h*d),e&&a.updateOffset(b,g||h)}function cb(a,b){var c=a||Da(),d=La(c,this).startOf("day"),e=this.diff(d,"days",!0),f=-6>e?"sameElse":-1>e?"lastWeek":0>e?"lastDay":1>e?"sameDay":2>e?"nextDay":7>e?"nextWeek":"sameElse";return this.format(b&&b[f]||this.localeData().calendar(f,this,Da(c)))}function db(){return new n(this)}function eb(a,b){var c;return b=A("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=o(a)?a:Da(a),+this>+a):(c=o(a)?+a:+Da(a),c<+this.clone().startOf(b))}function fb(a,b){var c;return b=A("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=o(a)?a:Da(a),+a>+this):(c=o(a)?+a:+Da(a),+this.clone().endOf(b)<c)}function gb(a,b,c){return this.isAfter(a,c)&&this.isBefore(b,c)}function hb(a,b){var c;return b=A(b||"millisecond"),"millisecond"===b?(a=o(a)?a:Da(a),+this===+a):(c=+Da(a),+this.clone().startOf(b)<=c&&c<=+this.clone().endOf(b))}function ib(a,b,c){var d,e,f=La(a,this),g=6e4*(f.utcOffset()-this.utcOffset());return b=A(b),"year"===b||"month"===b||"quarter"===b?(e=jb(this,f),"quarter"===b?e/=3:"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:p(e)}function jb(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)}function kb(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function lb(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():K(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):K(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function mb(b){var c=K(this,b||a.defaultFormat);return this.localeData().postformat(c)}function nb(a,b){return this.isValid()?Ya({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function ob(a){return this.from(Da(),a)}function pb(a,b){return this.isValid()?Ya({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function qb(a){return this.to(Da(),a)}function rb(a){var b;return void 0===a?this._locale._abbr:(b=y(a),null!=b&&(this._locale=b),this)}function sb(){return this._locale}function tb(a){switch(a=A(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function ub(a){return a=A(a),void 0===a||"millisecond"===a?this:this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms")}function vb(){return+this._d-6e4*(this._offset||0)}function wb(){return Math.floor(+this/1e3)}function xb(){return this._offset?new Date(+this):this._d}function yb(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function zb(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function Ab(){return k(this)}function Bb(){return g({},j(this))}function Cb(){return j(this).overflow}function Db(a,b){H(0,[a,a.length],0,b)}function Eb(a,b,c){return ja(Da([a,11,31+b-c]),b,c).week}function Fb(a){var b=ja(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")}function Gb(a){var b=ja(this,1,4).year;return null==a?b:this.add(a-b,"y")}function Hb(){return Eb(this.year(),1,4)}function Ib(){var a=this.localeData()._week;return Eb(this.year(),a.dow,a.doy)}function Jb(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}function Kb(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function Lb(a){return this._weekdays[a.day()]}function Mb(a){return this._weekdaysShort[a.day()]}function Nb(a){return this._weekdaysMin[a.day()]}function Ob(a){var b,c,d;for(this._weekdaysParse=this._weekdaysParse||[],b=0;7>b;b++)if(this._weekdaysParse[b]||(c=Da([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b}function Pb(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Kb(a,this.localeData()),this.add(a-b,"d")):b}function Qb(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function Rb(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)}function Sb(a,b){H(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function Tb(a,b){return b._meridiemParse}function Ub(a){return"p"===(a+"").toLowerCase().charAt(0)}function Vb(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Wb(a,b){b[qe]=q(1e3*("0."+a))}function Xb(){return this._isUTC?"UTC":""}function Yb(){return this._isUTC?"Coordinated Universal Time":""}function Zb(a){return Da(1e3*a)}function $b(){return Da.apply(null,arguments).parseZone()}function _b(a,b,c){var d=this._calendar[a];return"function"==typeof d?d.call(b,c):d}function ac(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function bc(){return this._invalidDate}function cc(a){return this._ordinal.replace("%d",a)}function dc(a){return a}function ec(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)}function fc(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)}function gc(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function hc(a,b,c,d){var e=y(),f=h().set(d,b);return e[c](f,a)}function ic(a,b,c,d,e){if("number"==typeof a&&(b=a,a=void 0),a=a||"",null!=b)return hc(a,b,c,e);var f,g=[];for(f=0;d>f;f++)g[f]=hc(a,f,c,e);return g}function jc(a,b){return ic(a,b,"months",12,"month")}function kc(a,b){return ic(a,b,"monthsShort",12,"month")}function lc(a,b){return ic(a,b,"weekdays",7,"day")}function mc(a,b){return ic(a,b,"weekdaysShort",7,"day")}function nc(a,b){return ic(a,b,"weekdaysMin",7,"day")}function oc(){var a=this._data;return this._milliseconds=_e(this._milliseconds),this._days=_e(this._days),this._months=_e(this._months),a.milliseconds=_e(a.milliseconds),a.seconds=_e(a.seconds),a.minutes=_e(a.minutes),a.hours=_e(a.hours),a.months=_e(a.months),a.years=_e(a.years),this}function pc(a,b,c,d){var e=Ya(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}function qc(a,b){return pc(this,a,b,1)}function rc(a,b){return pc(this,a,b,-1)}function sc(a){return 0>a?Math.floor(a):Math.ceil(a)}function tc(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;return f>=0&&g>=0&&h>=0||0>=f&&0>=g&&0>=h||(f+=864e5*sc(vc(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=p(f/1e3),i.seconds=a%60,b=p(a/60),i.minutes=b%60,c=p(b/60),i.hours=c%24,g+=p(c/24),e=p(uc(g)),h+=e,g-=sc(vc(e)),d=p(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function uc(a){return 4800*a/146097}function vc(a){return 146097*a/4800}function wc(a){var b,c,d=this._milliseconds;if(a=A(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+uc(b),"month"===a?c:c/12;switch(b=this._days+Math.round(vc(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}function xc(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*q(this._months/12)}function yc(a){return function(){return this.as(a)}}function zc(a){return a=A(a),this[a+"s"]()}function Ac(a){return function(){return this._data[a]}}function Bc(){return p(this.days()/7)}function Cc(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function Dc(a,b,c){var d=Ya(a).abs(),e=qf(d.as("s")),f=qf(d.as("m")),g=qf(d.as("h")),h=qf(d.as("d")),i=qf(d.as("M")),j=qf(d.as("y")),k=e<rf.s&&["s",e]||1===f&&["m"]||f<rf.m&&["mm",f]||1===g&&["h"]||g<rf.h&&["hh",g]||1===h&&["d"]||h<rf.d&&["dd",h]||1===i&&["M"]||i<rf.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,Cc.apply(null,k)}function Ec(a,b){return void 0===rf[a]?!1:void 0===b?rf[a]:(rf[a]=b,!0)}function Fc(a){var b=this.localeData(),c=Dc(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function Gc(){var a,b,c,d=sf(this._milliseconds)/1e3,e=sf(this._days),f=sf(this._months);a=p(d/60),b=p(a/60),d%=60,a%=60,c=p(f/12),f%=12;var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(0>m?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}
//! moment.js locale configuration
//! locale : belarusian (be)
//! author : Dmitry Demidov : https://github.com/demidov91
//! author: Praleska: http://praleska.pro/
//! Author : Menelion Elens??le : https://github.com/Oire
    function Hc(a,b){var c=a.split("_");return b%10===1&&b%100!==11?c[0]:b%10>=2&&4>=b%10&&(10>b%100||b%100>=20)?c[1]:c[2]}function Ic(a,b,c){var d={mm:b?"??????????????_??????????????_????????????":"??????????????_??????????????_????????????",hh:b?"??????????????_??????????????_????????????":"??????????????_??????????????_????????????",dd:"??????????_??????_????????",MM:"??????????_????????????_??????????????",yy:"??????_????????_??????????"};return"m"===c?b?"??????????????":"??????????????":"h"===c?b?"??????????????":"??????????????":a+" "+Hc(d[c],+a)}function Jc(a,b){var c={nominative:"????????????????_????????_??????????????_????????????????_??????????????_??????????????_????????????_??????????????_????????????????_????????????????????_????????????????_??????????????".split("_"),accusative:"????????????????_????????????_????????????????_??????????????????_????????????_??????????????_????????????_????????????_??????????????_??????????????????????_??????????????????_????????????".split("_")},d=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b)?"accusative":"nominative";return c[d][a.month()]}function Kc(a,b){var c={nominative:"??????????????_????????????????????_??????????????_????????????_????????????_??????????????_????????????".split("_"),accusative:"??????????????_????????????????????_??????????????_????????????_????????????_??????????????_????????????".split("_")},d=/\[ ?[????] ?(?:??????????????|??????????????????)? ?\] ?dddd/.test(b)?"accusative":"nominative";return c[d][a.day()]}
//! moment.js locale configuration
//! locale : breton (br)
//! author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou
    function Lc(a,b,c){var d={mm:"munutenn",MM:"miz",dd:"devezh"};return a+" "+Oc(d[c],a)}function Mc(a){switch(Nc(a)){case 1:case 3:case 4:case 5:case 9:return a+" bloaz";default:return a+" vloaz"}}function Nc(a){return a>9?Nc(a%10):a}function Oc(a,b){return 2===b?Pc(a):a}function Pc(a){var b={m:"v",b:"v",d:"z"};return void 0===b[a.charAt(0)]?a:b[a.charAt(0)]+a.substring(1)}
//! moment.js locale configuration
//! locale : bosnian (bs)
//! author : Nedim Cholich : https://github.com/frontyard
//! based on (hr) translation by Bojan Markovi??
    function Qc(a,b,c){var d=a+" ";switch(c){case"m":return b?"jedna minuta":"jedne minute";case"mm":return d+=1===a?"minuta":2===a||3===a||4===a?"minute":"minuta";case"h":return b?"jedan sat":"jednog sata";case"hh":return d+=1===a?"sat":2===a||3===a||4===a?"sata":"sati";case"dd":return d+=1===a?"dan":"dana";case"MM":return d+=1===a?"mjesec":2===a||3===a||4===a?"mjeseca":"mjeseci";case"yy":return d+=1===a?"godina":2===a||3===a||4===a?"godine":"godina"}}function Rc(a){return a>1&&5>a&&1!==~~(a/10)}function Sc(a,b,c,d){var e=a+" ";switch(c){case"s":return b||d?"p??r sekund":"p??r sekundami";case"m":return b?"minuta":d?"minutu":"minutou";case"mm":return b||d?e+(Rc(a)?"minuty":"minut"):e+"minutami";break;case"h":return b?"hodina":d?"hodinu":"hodinou";case"hh":return b||d?e+(Rc(a)?"hodiny":"hodin"):e+"hodinami";break;case"d":return b||d?"den":"dnem";case"dd":return b||d?e+(Rc(a)?"dny":"dn??"):e+"dny";break;case"M":return b||d?"m??s??c":"m??s??cem";case"MM":return b||d?e+(Rc(a)?"m??s??ce":"m??s??c??"):e+"m??s??ci";break;case"y":return b||d?"rok":"rokem";case"yy":return b||d?e+(Rc(a)?"roky":"let"):e+"lety"}}
//! moment.js locale configuration
//! locale : austrian german (de-at)
//! author : lluchs : https://github.com/lluchs
//! author: Menelion Elens??le: https://github.com/Oire
//! author : Martin Groller : https://github.com/MadMG
    function Tc(a,b,c,d){var e={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[a+" Tage",a+" Tagen"],M:["ein Monat","einem Monat"],MM:[a+" Monate",a+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[a+" Jahre",a+" Jahren"]};return b?e[c][0]:e[c][1]}
//! moment.js locale configuration
//! locale : german (de)
//! author : lluchs : https://github.com/lluchs
//! author: Menelion Elens??le: https://github.com/Oire
    function Uc(a,b,c,d){var e={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[a+" Tage",a+" Tagen"],M:["ein Monat","einem Monat"],MM:[a+" Monate",a+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[a+" Jahre",a+" Jahren"]};return b?e[c][0]:e[c][1]}
//! moment.js locale configuration
//! locale : estonian (et)
//! author : Henry Kehlmann : https://github.com/madhenry
//! improvements : Illimar Tambek : https://github.com/ragulka
    function Vc(a,b,c,d){var e={s:["m??ne sekundi","m??ni sekund","paar sekundit"],m:["??he minuti","??ks minut"],mm:[a+" minuti",a+" minutit"],h:["??he tunni","tund aega","??ks tund"],hh:[a+" tunni",a+" tundi"],d:["??he p??eva","??ks p??ev"],M:["kuu aja","kuu aega","??ks kuu"],MM:[a+" kuu",a+" kuud"],y:["??he aasta","aasta","??ks aasta"],yy:[a+" aasta",a+" aastat"]};return b?e[c][2]?e[c][2]:e[c][1]:d?e[c][0]:e[c][1]}function Wc(a,b,c,d){var e="";switch(c){case"s":return d?"muutaman sekunnin":"muutama sekunti";case"m":return d?"minuutin":"minuutti";case"mm":e=d?"minuutin":"minuuttia";break;case"h":return d?"tunnin":"tunti";case"hh":e=d?"tunnin":"tuntia";break;case"d":return d?"p??iv??n":"p??iv??";case"dd":e=d?"p??iv??n":"p??iv????";break;case"M":return d?"kuukauden":"kuukausi";case"MM":e=d?"kuukauden":"kuukautta";break;case"y":return d?"vuoden":"vuosi";case"yy":e=d?"vuoden":"vuotta"}return e=Xc(a,d)+" "+e}function Xc(a,b){return 10>a?b?Pf[a]:Of[a]:a}
//! moment.js locale configuration
//! locale : hrvatski (hr)
//! author : Bojan Markovi?? : https://github.com/bmarkovic
    function Yc(a,b,c){var d=a+" ";switch(c){case"m":return b?"jedna minuta":"jedne minute";case"mm":return d+=1===a?"minuta":2===a||3===a||4===a?"minute":"minuta";case"h":return b?"jedan sat":"jednog sata";case"hh":return d+=1===a?"sat":2===a||3===a||4===a?"sata":"sati";case"dd":return d+=1===a?"dan":"dana";case"MM":return d+=1===a?"mjesec":2===a||3===a||4===a?"mjeseca":"mjeseci";case"yy":return d+=1===a?"godina":2===a||3===a||4===a?"godine":"godina"}}function Zc(a,b,c,d){var e=a;switch(c){case"s":return d||b?"n??h??ny m??sodperc":"n??h??ny m??sodperce";case"m":return"egy"+(d||b?" perc":" perce");case"mm":return e+(d||b?" perc":" perce");case"h":return"egy"+(d||b?" ??ra":" ??r??ja");case"hh":return e+(d||b?" ??ra":" ??r??ja");case"d":return"egy"+(d||b?" nap":" napja");case"dd":return e+(d||b?" nap":" napja");case"M":return"egy"+(d||b?" h??nap":" h??napja");case"MM":return e+(d||b?" h??nap":" h??napja");case"y":return"egy"+(d||b?" ??v":" ??ve");case"yy":return e+(d||b?" ??v":" ??ve")}return""}function $c(a){return(a?"":"[m??lt] ")+"["+Uf[this.day()]+"] LT[-kor]"}
//! moment.js locale configuration
//! locale : Armenian (hy-am)
//! author : Armendarabyan : https://github.com/armendarabyan
    function _c(a,b){var c={nominative:"??????????????_??????????????_????????_??????????_??????????_????????????_????????????_??????????????_??????????????????_??????????????????_????????????????_??????????????????".split("_"),accusative:"????????????????_????????????????_??????????_????????????_????????????_??????????????_??????????????_????????????????_????????????????????_????????????????????_??????????????????_????????????????????".split("_")},d=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b)?"accusative":"nominative";return c[d][a.month()]}function ad(a,b){var c="??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????".split("_");return c[a.month()]}function bd(a,b){var c="????????????_????????????????????_??????????????????_????????????????????_??????????????????_????????????_??????????".split("_");return c[a.day()]}
//! moment.js locale configuration
//! locale : icelandic (is)
//! author : Hinrik ??rn Sigur??sson : https://github.com/hinrik
    function cd(a){return a%100===11?!0:a%10===1?!1:!0}function dd(a,b,c,d){var e=a+" ";switch(c){case"s":return b||d?"nokkrar sek??ndur":"nokkrum sek??ndum";case"m":return b?"m??n??ta":"m??n??tu";case"mm":return cd(a)?e+(b||d?"m??n??tur":"m??n??tum"):b?e+"m??n??ta":e+"m??n??tu";case"hh":return cd(a)?e+(b||d?"klukkustundir":"klukkustundum"):e+"klukkustund";case"d":return b?"dagur":d?"dag":"degi";case"dd":return cd(a)?b?e+"dagar":e+(d?"daga":"d??gum"):b?e+"dagur":e+(d?"dag":"degi");case"M":return b?"m??nu??ur":d?"m??nu??":"m??nu??i";case"MM":return cd(a)?b?e+"m??nu??ir":e+(d?"m??nu??i":"m??nu??um"):b?e+"m??nu??ur":e+(d?"m??nu??":"m??nu??i");case"y":return b||d?"??r":"??ri";case"yy":return cd(a)?e+(b||d?"??r":"??rum"):e+(b||d?"??r":"??ri")}}
//! moment.js locale configuration
//! locale : Georgian (ka)
//! author : Irakli Janiashvili : https://github.com/irakli-janiashvili
    function ed(a,b){var c={nominative:"?????????????????????_???????????????????????????_???????????????_??????????????????_???????????????_??????????????????_??????????????????_?????????????????????_??????????????????????????????_???????????????????????????_????????????????????????_???????????????????????????".split("_"),accusative:"?????????????????????_???????????????????????????_???????????????_?????????????????????_???????????????_??????????????????_??????????????????_?????????????????????_??????????????????????????????_???????????????????????????_????????????????????????_???????????????????????????".split("_")},d=/D[oD] *MMMM?/.test(b)?"accusative":"nominative";return c[d][a.month()]}function fd(a,b){var c={nominative:"???????????????_????????????????????????_???????????????????????????_???????????????????????????_???????????????????????????_???????????????????????????_??????????????????".split("_"),accusative:"??????????????????_????????????????????????_???????????????????????????_???????????????????????????_???????????????????????????_???????????????????????????_??????????????????".split("_")},d=/(????????????|??????????????????)/.test(b)?"accusative":"nominative";return c[d][a.day()]}
//! moment.js locale configuration
//! locale : Luxembourgish (lb)
//! author : mweimerskirch : https://github.com/mweimerskirch, David Raison : https://github.com/kwisatz
    function gd(a,b,c,d){var e={m:["eng Minutt","enger Minutt"],h:["eng Stonn","enger Stonn"],d:["een Dag","engem Dag"],M:["ee Mount","engem Mount"],y:["ee Joer","engem Joer"]};return b?e[c][0]:e[c][1]}function hd(a){var b=a.substr(0,a.indexOf(" "));return jd(b)?"a "+a:"an "+a}function id(a){var b=a.substr(0,a.indexOf(" "));return jd(b)?"viru "+a:"virun "+a}function jd(a){if(a=parseInt(a,10),isNaN(a))return!1;if(0>a)return!0;if(10>a)return a>=4&&7>=a?!0:!1;if(100>a){var b=a%10,c=a/10;return jd(0===b?c:b)}if(1e4>a){for(;a>=10;)a/=10;return jd(a)}return a/=1e3,jd(a)}function kd(a,b,c,d){return b?"kelios sekund??s":d?"keli?? sekund??i??":"kelias sekundes"}function ld(a,b){var c={nominative:"sausis_vasaris_kovas_balandis_gegu????_bir??elis_liepa_rugpj??tis_rugs??jis_spalis_lapkritis_gruodis".split("_"),accusative:"sausio_vasario_kovo_baland??io_gegu????s_bir??elio_liepos_rugpj????io_rugs??jo_spalio_lapkri??io_gruod??io".split("_")},d=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b)?"accusative":"nominative";return c[d][a.month()]}function md(a,b,c,d){return b?od(c)[0]:d?od(c)[1]:od(c)[2]}function nd(a){return a%10===0||a>10&&20>a}function od(a){return Vf[a].split("_")}function pd(a,b,c,d){var e=a+" ";return 1===a?e+md(a,b,c[0],d):b?e+(nd(a)?od(c)[1]:od(c)[0]):d?e+od(c)[1]:e+(nd(a)?od(c)[1]:od(c)[2])}function qd(a,b){var c=-1===b.indexOf("dddd HH:mm"),d=Wf[a.day()];return c?d:d.substring(0,d.length-2)+"??"}function rd(a,b,c){return c?b%10===1&&11!==b?a[2]:a[3]:b%10===1&&11!==b?a[0]:a[1]}function sd(a,b,c){return a+" "+rd(Xf[c],a,b)}function td(a,b,c){return rd(Xf[c],a,b)}function ud(a,b){return b?"da??as sekundes":"da????m sekund??m"}function vd(a){return 5>a%10&&a%10>1&&~~(a/10)%10!==1}function wd(a,b,c){var d=a+" ";switch(c){case"m":return b?"minuta":"minut??";case"mm":return d+(vd(a)?"minuty":"minut");case"h":return b?"godzina":"godzin??";case"hh":return d+(vd(a)?"godziny":"godzin");case"MM":return d+(vd(a)?"miesi??ce":"miesi??cy");case"yy":return d+(vd(a)?"lata":"lat")}}
//! moment.js locale configuration
//! locale : romanian (ro)
//! author : Vlad Gurdiga : https://github.com/gurdiga
//! author : Valentin Agachi : https://github.com/avaly
    function xd(a,b,c){var d={mm:"minute",hh:"ore",dd:"zile",MM:"luni",yy:"ani"},e=" ";return(a%100>=20||a>=100&&a%100===0)&&(e=" de "),a+e+d[c]}
//! moment.js locale configuration
//! locale : russian (ru)
//! author : Viktorminator : https://github.com/Viktorminator
//! Author : Menelion Elens??le : https://github.com/Oire
    function yd(a,b){var c=a.split("_");return b%10===1&&b%100!==11?c[0]:b%10>=2&&4>=b%10&&(10>b%100||b%100>=20)?c[1]:c[2]}function zd(a,b,c){var d={mm:b?"????????????_????????????_??????????":"????????????_????????????_??????????",hh:"??????_????????_??????????",dd:"????????_??????_????????",MM:"??????????_????????????_??????????????",yy:"??????_????????_??????"};return"m"===c?b?"????????????":"????????????":a+" "+yd(d[c],+a)}function Ad(a,b){var c={nominative:"????????????_??????????????_????????_????????????_??????_????????_????????_????????????_????????????????_??????????????_????????????_??????????????".split("_"),accusative:"????????????_??????????????_??????????_????????????_??????_????????_????????_??????????????_????????????????_??????????????_????????????_??????????????".split("_")},d=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b)?"accusative":"nominative";return c[d][a.month()]}function Bd(a,b){var c={nominative:"??????_??????_????????_??????_??????_????????_????????_??????_??????_??????_??????_??????".split("_"),accusative:"??????_??????_??????_??????_??????_????????_????????_??????_??????_??????_??????_??????".split("_")},d=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b)?"accusative":"nominative";return c[d][a.month()]}function Cd(a,b){var c={nominative:"??????????????????????_??????????????????????_??????????????_??????????_??????????????_??????????????_??????????????".split("_"),accusative:"??????????????????????_??????????????????????_??????????????_??????????_??????????????_??????????????_??????????????".split("_")},d=/\[ ?[????] ?(?:??????????????|??????????????????|??????)? ?\] ?dddd/.test(b)?"accusative":"nominative";return c[d][a.day()]}function Dd(a){return a>1&&5>a}function Ed(a,b,c,d){var e=a+" ";switch(c){case"s":return b||d?"p??r sek??nd":"p??r sekundami";case"m":return b?"min??ta":d?"min??tu":"min??tou";case"mm":return b||d?e+(Dd(a)?"min??ty":"min??t"):e+"min??tami";break;case"h":return b?"hodina":d?"hodinu":"hodinou";case"hh":return b||d?e+(Dd(a)?"hodiny":"hod??n"):e+"hodinami";break;case"d":return b||d?"de??":"d??om";case"dd":return b||d?e+(Dd(a)?"dni":"dn??"):e+"d??ami";break;case"M":return b||d?"mesiac":"mesiacom";case"MM":return b||d?e+(Dd(a)?"mesiace":"mesiacov"):e+"mesiacmi";break;case"y":return b||d?"rok":"rokom";case"yy":return b||d?e+(Dd(a)?"roky":"rokov"):e+"rokmi"}}
//! moment.js locale configuration
//! locale : slovenian (sl)
//! author : Robert Sedov??ek : https://github.com/sedovsek
    function Fd(a,b,c,d){var e=a+" ";switch(c){case"s":return b||d?"nekaj sekund":"nekaj sekundami";case"m":return b?"ena minuta":"eno minuto";case"mm":return e+=1===a?b?"minuta":"minuto":2===a?b||d?"minuti":"minutama":5>a?b||d?"minute":"minutami":b||d?"minut":"minutami";case"h":return b?"ena ura":"eno uro";case"hh":return e+=1===a?b?"ura":"uro":2===a?b||d?"uri":"urama":5>a?b||d?"ure":"urami":b||d?"ur":"urami";case"d":return b||d?"en dan":"enim dnem";case"dd":return e+=1===a?b||d?"dan":"dnem":2===a?b||d?"dni":"dnevoma":b||d?"dni":"dnevi";case"M":return b||d?"en mesec":"enim mesecem";case"MM":return e+=1===a?b||d?"mesec":"mesecem":2===a?b||d?"meseca":"mesecema":5>a?b||d?"mesece":"meseci":b||d?"mesecev":"meseci";case"y":return b||d?"eno leto":"enim letom";case"yy":return e+=1===a?b||d?"leto":"letom":2===a?b||d?"leti":"letoma":5>a?b||d?"leta":"leti":b||d?"let":"leti"}}function Gd(a,b,c,d){var e={s:["viensas secunds","'iensas secunds"],m:["'n m??ut","'iens m??ut"],mm:[a+" m??uts"," "+a+" m??uts"],h:["'n ??ora","'iensa ??ora"],hh:[a+" ??oras"," "+a+" ??oras"],d:["'n ziua","'iensa ziua"],dd:[a+" ziuas"," "+a+" ziuas"],M:["'n mes","'iens mes"],MM:[a+" mesen"," "+a+" mesen"],y:["'n ar","'iens ar"],yy:[a+" ars"," "+a+" ars"]};return d?e[c][0]:b?e[c][0]:e[c][1].trim()}
//! moment.js locale configuration
//! locale : ukrainian (uk)
//! author : zemlanin : https://github.com/zemlanin
//! Author : Menelion Elens??le : https://github.com/Oire
    function Hd(a,b){var c=a.split("_");return b%10===1&&b%100!==11?c[0]:b%10>=2&&4>=b%10&&(10>b%100||b%100>=20)?c[1]:c[2]}function Id(a,b,c){var d={mm:"??????????????_??????????????_????????????",hh:"????????????_????????????_??????????",dd:"????????_??????_????????",MM:"????????????_????????????_??????????????",yy:"??????_????????_??????????"};return"m"===c?b?"??????????????":"??????????????":"h"===c?b?"????????????":"????????????":a+" "+Hd(d[c],+a)}function Jd(a,b){var c={nominative:"????????????_??????????_????????????????_??????????????_??????????????_??????????????_????????????_??????????????_????????????????_??????????????_????????????????_??????????????".split("_"),accusative:"??????????_????????????_??????????????_????????????_????????????_????????????_??????????_????????????_??????????????_????????????_??????????????????_????????????".split("_")},d=/D[oD]? *MMMM?/.test(b)?"accusative":"nominative";return c[d][a.month()]}function Kd(a,b){var c={nominative:"????????????_??????????????????_????????????????_????????????_????????????_?????????????????_????????????".split("_"),accusative:"????????????_??????????????????_????????????????_????????????_????????????_?????????????????_????????????".split("_"),genitive:"????????????_??????????????????_????????????????_????????????_????????????????_?????????????????_????????????".split("_")},d=/(\[[????????]\]) ?dddd/.test(b)?"accusative":/\[?(?:??????????????|??????????????????)? ?\] ?dddd/.test(b)?"genitive":"nominative";return c[d][a.day()]}function Ld(a){return function(){return a+"??"+(11===this.hours()?"??":"")+"] LT"}}var Md,Nd,Od=a.momentProperties=[],Pd=!1,Qd={},Rd={},Sd=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Td=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Ud={},Vd={},Wd=/\d/,Xd=/\d\d/,Yd=/\d{3}/,Zd=/\d{4}/,$d=/[+-]?\d{6}/,_d=/\d\d?/,ae=/\d{1,3}/,be=/\d{1,4}/,ce=/[+-]?\d{1,6}/,de=/\d+/,ee=/[+-]?\d+/,fe=/Z|[+-]\d\d:?\d\d/gi,ge=/[+-]?\d+(\.\d{1,3})?/,he=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,ie={},je={},ke=0,le=1,me=2,ne=3,oe=4,pe=5,qe=6;H("M",["MM",2],"Mo",function(){return this.month()+1}),H("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),H("MMMM",0,0,function(a){return this.localeData().months(this,a)}),z("month","M"),N("M",_d),N("MM",_d,Xd),N("MMM",he),N("MMMM",he),Q(["M","MM"],function(a,b){b[le]=q(a)-1}),Q(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[le]=e:j(c).invalidMonth=a});var re="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),se="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),te={};a.suppressDeprecationWarnings=!1;var ue=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,ve=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],we=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],xe=/^\/?Date\((\-?\d+)/i;a.createFromInputFallback=aa("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),H(0,["YY",2],0,function(){return this.year()%100}),H(0,["YYYY",4],0,"year"),H(0,["YYYYY",5],0,"year"),H(0,["YYYYYY",6,!0],0,"year"),z("year","y"),N("Y",ee),N("YY",_d,Xd),N("YYYY",be,Zd),N("YYYYY",ce,$d),N("YYYYYY",ce,$d),Q(["YYYYY","YYYYYY"],ke),Q("YYYY",function(b,c){c[ke]=2===b.length?a.parseTwoDigitYear(b):q(b)}),Q("YY",function(b,c){c[ke]=a.parseTwoDigitYear(b)}),a.parseTwoDigitYear=function(a){return q(a)+(q(a)>68?1900:2e3)};var ye=C("FullYear",!1);H("w",["ww",2],"wo","week"),H("W",["WW",2],"Wo","isoWeek"),z("week","w"),z("isoWeek","W"),N("w",_d),N("ww",_d,Xd),N("W",_d),N("WW",_d,Xd),R(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=q(a)});var ze={dow:0,doy:6};H("DDD",["DDDD",3],"DDDo","dayOfYear"),z("dayOfYear","DDD"),N("DDD",ae),N("DDDD",Yd),Q(["DDD","DDDD"],function(a,b,c){c._dayOfYear=q(a)}),a.ISO_8601=function(){};var Ae=aa("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var a=Da.apply(null,arguments);return this>a?this:a}),Be=aa("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var a=Da.apply(null,arguments);return a>this?this:a});Ja("Z",":"),Ja("ZZ",""),N("Z",fe),N("ZZ",fe),Q(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Ka(a)});var Ce=/([\+\-]|\d\d)/gi;a.updateOffset=function(){};var De=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Ee=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;Ya.fn=Ha.prototype;var Fe=ab(1,"add"),Ge=ab(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";var He=aa("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});H(0,["gg",2],0,function(){return this.weekYear()%100}),H(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Db("gggg","weekYear"),Db("ggggg","weekYear"),Db("GGGG","isoWeekYear"),Db("GGGGG","isoWeekYear"),z("weekYear","gg"),z("isoWeekYear","GG"),N("G",ee),N("g",ee),N("GG",_d,Xd),N("gg",_d,Xd),N("GGGG",be,Zd),N("gggg",be,Zd),N("GGGGG",ce,$d),N("ggggg",ce,$d),R(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=q(a)}),R(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),H("Q",0,0,"quarter"),z("quarter","Q"),N("Q",Wd),Q("Q",function(a,b){b[le]=3*(q(a)-1)}),H("D",["DD",2],"Do","date"),z("date","D"),N("D",_d),N("DD",_d,Xd),N("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient}),Q(["D","DD"],me),Q("Do",function(a,b){b[me]=q(a.match(_d)[0],10)});var Ie=C("Date",!0);H("d",0,"do","day"),H("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),H("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),H("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),H("e",0,0,"weekday"),H("E",0,0,"isoWeekday"),z("day","d"),z("weekday","e"),z("isoWeekday","E"),N("d",_d),N("e",_d),N("E",_d),N("dd",he),N("ddd",he),N("dddd",he),R(["dd","ddd","dddd"],function(a,b,c){var d=c._locale.weekdaysParse(a);null!=d?b.d=d:j(c).invalidWeekday=a}),R(["d","e","E"],function(a,b,c,d){b[d]=q(a)});var Je="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Ke="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Le="Su_Mo_Tu_We_Th_Fr_Sa".split("_");H("H",["HH",2],0,"hour"),H("h",["hh",2],0,function(){return this.hours()%12||12}),Sb("a",!0),Sb("A",!1),z("hour","h"),N("a",Tb),N("A",Tb),N("H",_d),N("h",_d),N("HH",_d,Xd),N("hh",_d,Xd),Q(["H","HH"],ne),Q(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),Q(["h","hh"],function(a,b,c){b[ne]=q(a),j(c).bigHour=!0});var Me=/[ap]\.?m?\.?/i,Ne=C("Hours",!0);H("m",["mm",2],0,"minute"),z("minute","m"),N("m",_d),N("mm",_d,Xd),Q(["m","mm"],oe);var Oe=C("Minutes",!1);H("s",["ss",2],0,"second"),z("second","s"),N("s",_d),N("ss",_d,Xd),Q(["s","ss"],pe);var Pe=C("Seconds",!1);H("S",0,0,function(){return~~(this.millisecond()/100)}),H(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),H(0,["SSS",3],0,"millisecond"),H(0,["SSSS",4],0,function(){return 10*this.millisecond()}),H(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),H(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),H(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),H(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),H(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),z("millisecond","ms"),N("S",ae,Wd),N("SS",ae,Xd),N("SSS",ae,Yd);var Qe;for(Qe="SSSS";Qe.length<=9;Qe+="S")N(Qe,de);for(Qe="S";Qe.length<=9;Qe+="S")Q(Qe,Wb);var Re=C("Milliseconds",!1);H("z",0,0,"zoneAbbr"),H("zz",0,0,"zoneName");var Se=n.prototype;Se.add=Fe,Se.calendar=cb,Se.clone=db,Se.diff=ib,Se.endOf=ub,Se.format=mb,Se.from=nb,Se.fromNow=ob,Se.to=pb,Se.toNow=qb,Se.get=F,Se.invalidAt=Cb,Se.isAfter=eb,Se.isBefore=fb,Se.isBetween=gb,Se.isSame=hb,Se.isValid=Ab,Se.lang=He,Se.locale=rb,Se.localeData=sb,Se.max=Be,Se.min=Ae,Se.parsingFlags=Bb,Se.set=F,Se.startOf=tb,Se.subtract=Ge,Se.toArray=yb,Se.toObject=zb,Se.toDate=xb,Se.toISOString=lb,Se.toJSON=lb,Se.toString=kb,Se.unix=wb,Se.valueOf=vb,Se.year=ye,Se.isLeapYear=ia,Se.weekYear=Fb,Se.isoWeekYear=Gb,Se.quarter=Se.quarters=Jb,Se.month=Y,Se.daysInMonth=Z,Se.week=Se.weeks=na,Se.isoWeek=Se.isoWeeks=oa,Se.weeksInYear=Ib,Se.isoWeeksInYear=Hb,Se.date=Ie,Se.day=Se.days=Pb,Se.weekday=Qb,Se.isoWeekday=Rb,Se.dayOfYear=qa,Se.hour=Se.hours=Ne,Se.minute=Se.minutes=Oe,Se.second=Se.seconds=Pe,Se.millisecond=Se.milliseconds=Re,Se.utcOffset=Na,Se.utc=Pa,Se.local=Qa,Se.parseZone=Ra,Se.hasAlignedHourOffset=Sa,Se.isDST=Ta,Se.isDSTShifted=Ua,Se.isLocal=Va,Se.isUtcOffset=Wa,Se.isUtc=Xa,Se.isUTC=Xa,Se.zoneAbbr=Xb,Se.zoneName=Yb,Se.dates=aa("dates accessor is deprecated. Use date instead.",Ie),Se.months=aa("months accessor is deprecated. Use month instead",Y),Se.years=aa("years accessor is deprecated. Use year instead",ye),Se.zone=aa("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",Oa);var Te=Se,Ue={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Ve={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},We="Invalid date",Xe="%d",Ye=/\d{1,2}/,Ze={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},$e=s.prototype;$e._calendar=Ue,$e.calendar=_b,$e._longDateFormat=Ve,$e.longDateFormat=ac,$e._invalidDate=We,$e.invalidDate=bc,$e._ordinal=Xe,$e.ordinal=cc,$e._ordinalParse=Ye,$e.preparse=dc,$e.postformat=dc,$e._relativeTime=Ze,$e.relativeTime=ec,$e.pastFuture=fc,$e.set=gc,$e.months=U,$e._months=re,$e.monthsShort=V,$e._monthsShort=se,$e.monthsParse=W,$e.week=ka,$e._week=ze,$e.firstDayOfYear=ma,$e.firstDayOfWeek=la,$e.weekdays=Lb,$e._weekdays=Je,$e.weekdaysMin=Nb,$e._weekdaysMin=Le,$e.weekdaysShort=Mb,$e._weekdaysShort=Ke,$e.weekdaysParse=Ob,$e.isPM=Ub,$e._meridiemParse=Me,$e.meridiem=Vb,w("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===q(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),a.lang=aa("moment.lang is deprecated. Use moment.locale instead.",w),a.langData=aa("moment.langData is deprecated. Use moment.localeData instead.",y);var _e=Math.abs,af=yc("ms"),bf=yc("s"),cf=yc("m"),df=yc("h"),ef=yc("d"),ff=yc("w"),gf=yc("M"),hf=yc("y"),jf=Ac("milliseconds"),kf=Ac("seconds"),lf=Ac("minutes"),mf=Ac("hours"),nf=Ac("days"),of=Ac("months"),pf=Ac("years"),qf=Math.round,rf={s:45,m:45,h:22,d:26,M:11},sf=Math.abs,tf=Ha.prototype;tf.abs=oc,tf.add=qc,tf.subtract=rc,tf.as=wc,tf.asMilliseconds=af,tf.asSeconds=bf,tf.asMinutes=cf,tf.asHours=df,tf.asDays=ef,tf.asWeeks=ff,tf.asMonths=gf,tf.asYears=hf,tf.valueOf=xc,tf._bubble=tc,tf.get=zc,tf.milliseconds=jf,tf.seconds=kf,tf.minutes=lf,tf.hours=mf,tf.days=nf,tf.weeks=Bc,tf.months=of,tf.years=pf,tf.humanize=Fc,tf.toISOString=Gc,tf.toString=Gc,tf.toJSON=Gc,tf.locale=rb,tf.localeData=sb,tf.toIsoString=aa("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Gc),tf.lang=He,H("X",0,0,"unix"),H("x",0,0,"valueOf"),N("x",ee),N("X",ge),Q("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),Q("x",function(a,b,c){c._d=new Date(q(a))}),
//! moment.js
//! version : 2.10.6
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
        a.version="2.10.6",b(Da),a.fn=Te,a.min=Fa,a.max=Ga,a.utc=h,a.unix=Zb,a.months=jc,a.isDate=d,a.locale=w,a.invalid=l,a.duration=Ya,a.isMoment=o,a.weekdays=lc,a.parseZone=$b,a.localeData=y,a.isDuration=Ia,a.monthsShort=kc,a.weekdaysMin=nc,a.defineLocale=x,a.weekdaysShort=mc,a.normalizeUnits=A,a.relativeTimeThreshold=Ec;var uf=a,vf=(uf.defineLocale("af",{months:"Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),weekdays:"Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),weekdaysShort:"Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),weekdaysMin:"So_Ma_Di_Wo_Do_Vr_Sa".split("_"),meridiemParse:/vm|nm/i,isPM:function(a){return/^nm$/i.test(a)},meridiem:function(a,b,c){return 12>a?c?"vm":"VM":c?"nm":"NM"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Vandag om] LT",nextDay:"[M??re om] LT",nextWeek:"dddd [om] LT",lastDay:"[Gister om] LT",lastWeek:"[Laas] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oor %s",past:"%s gelede",s:"'n paar sekondes",m:"'n minuut",mm:"%d minute",h:"'n uur",hh:"%d ure",d:"'n dag",dd:"%d dae",M:"'n maand",MM:"%d maande",y:"'n jaar",yy:"%d jaar"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(a){return a+(1===a||8===a||a>=20?"ste":"de")},week:{dow:1,doy:4}}),uf.defineLocale("ar-ma",{months:"??????????_????????????_????????_??????????_??????_??????????_????????????_??????_??????????_????????????_??????????_??????????".split("_"),monthsShort:"??????????_????????????_????????_??????????_??????_??????????_????????????_??????_??????????_????????????_??????????_??????????".split("_"),weekdays:"??????????_??????????????_????????????????_????????????????_????????????_????????????_??????????".split("_"),weekdaysShort:"??????_??????????_????????????_????????????_????????_????????_??????".split("_"),weekdaysMin:"??_??_??_??_??_??_??".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[?????????? ?????? ????????????] LT",nextDay:"[?????? ?????? ????????????] LT",nextWeek:"dddd [?????? ????????????] LT",lastDay:"[?????? ?????? ????????????] LT",lastWeek:"dddd [?????? ????????????] LT",sameElse:"L"},relativeTime:{future:"???? %s",past:"?????? %s",s:"????????",m:"??????????",mm:"%d ??????????",h:"????????",hh:"%d ??????????",d:"??????",dd:"%d ????????",M:"??????",MM:"%d ????????",y:"??????",yy:"%d ??????????"},week:{dow:6,doy:12}}),{1:"??",2:"??",3:"??",4:"??",5:"??",6:"??",7:"??",8:"??",9:"??",0:"??"}),wf={"??":"1","??":"2","??":"3","??":"4","??":"5","??":"6","??":"7","??":"8","??":"9","??":"0"},xf=(uf.defineLocale("ar-sa",{months:"??????????_????????????_????????_??????????_????????_??????????_??????????_??????????_????????????_????????????_????????????_????????????".split("_"),monthsShort:"??????????_????????????_????????_??????????_????????_??????????_??????????_??????????_????????????_????????????_????????????_????????????".split("_"),weekdays:"??????????_??????????????_????????????????_????????????????_????????????_????????????_??????????".split("_"),weekdaysShort:"??????_??????????_????????????_????????????_????????_????????_??????".split("_"),weekdaysMin:"??_??_??_??_??_??_??".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/??|??/,isPM:function(a){return"??"===a},meridiem:function(a,b,c){return 12>a?"??":"??"},calendar:{sameDay:"[?????????? ?????? ????????????] LT",nextDay:"[?????? ?????? ????????????] LT",nextWeek:"dddd [?????? ????????????] LT",lastDay:"[?????? ?????? ????????????] LT",lastWeek:"dddd [?????? ????????????] LT",sameElse:"L"},relativeTime:{future:"???? %s",past:"?????? %s",s:"????????",m:"??????????",mm:"%d ??????????",h:"????????",hh:"%d ??????????",d:"??????",dd:"%d ????????",M:"??????",MM:"%d ????????",y:"??????",yy:"%d ??????????"},preparse:function(a){return a.replace(/[????????????????????]/g,function(a){return wf[a]}).replace(/??/g,",")},postformat:function(a){return a.replace(/\d/g,function(a){return vf[a]}).replace(/,/g,"??")},week:{dow:6,doy:12}}),uf.defineLocale("ar-tn",{months:"??????????_??????????_????????_??????????_??????_????????_????????????_??????_????????????_????????????_????????????_????????????".split("_"),monthsShort:"??????????_??????????_????????_??????????_??????_????????_????????????_??????_????????????_????????????_????????????_????????????".split("_"),weekdays:"??????????_??????????????_????????????????_????????????????_????????????_????????????_??????????".split("_"),weekdaysShort:"??????_??????????_????????????_????????????_????????_????????_??????".split("_"),weekdaysMin:"??_??_??_??_??_??_??".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[?????????? ?????? ????????????] LT",nextDay:"[?????? ?????? ????????????] LT",nextWeek:"dddd [?????? ????????????] LT",lastDay:"[?????? ?????? ????????????] LT",lastWeek:"dddd [?????? ????????????] LT",sameElse:"L"},relativeTime:{future:"???? %s",past:"?????? %s",s:"????????",m:"??????????",mm:"%d ??????????",h:"????????",hh:"%d ??????????",d:"??????",dd:"%d ????????",M:"??????",MM:"%d ????????",y:"??????",yy:"%d ??????????"},week:{dow:1,doy:4}}),{1:"??",2:"??",3:"??",4:"??",5:"??",6:"??",7:"??",8:"??",9:"??",0:"??"}),yf={"??":"1","??":"2","??":"3","??":"4","??":"5","??":"6","??":"7","??":"8","??":"9","??":"0"},zf=function(a){return 0===a?0:1===a?1:2===a?2:a%100>=3&&10>=a%100?3:a%100>=11?4:5},Af={s:["?????? ???? ??????????","?????????? ??????????",["??????????????","??????????????"],"%d ????????","%d ??????????","%d ??????????"],m:["?????? ???? ??????????","?????????? ??????????",["??????????????","??????????????"],"%d ??????????","%d ??????????","%d ??????????"],h:["?????? ???? ????????","???????? ??????????",["????????????","????????????"],"%d ??????????","%d ????????","%d ????????"],d:["?????? ???? ??????","?????? ????????",["??????????","??????????"],"%d ????????","%d ??????????","%d ??????"],M:["?????? ???? ??????","?????? ????????",["??????????","??????????"],"%d ????????","%d ????????","%d ??????"],y:["?????? ???? ??????","?????? ????????",["??????????","??????????"],"%d ??????????","%d ??????????","%d ??????"]},Bf=function(a){return function(b,c,d,e){var f=zf(b),g=Af[a][zf(b)];return 2===f&&(g=g[c?0:1]),g.replace(/%d/i,b)}},Cf=["?????????? ???????????? ??????????","???????? ????????????","???????? ????????","?????????? ??????????","???????? ????????","???????????? ??????????","???????? ??????????","???? ??????????","?????????? ????????????","?????????? ?????????? ????????????","?????????? ???????????? ????????????","?????????? ?????????? ????????????"],Df=(uf.defineLocale("ar",{months:Cf,monthsShort:Cf,weekdays:"??????????_??????????????_????????????????_????????????????_????????????_????????????_??????????".split("_"),weekdaysShort:"??????_??????????_????????????_????????????_????????_????????_??????".split("_"),weekdaysMin:"??_??_??_??_??_??_??".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/???M/???YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/??|??/,isPM:function(a){return"??"===a},meridiem:function(a,b,c){return 12>a?"??":"??"},calendar:{sameDay:"[?????????? ?????? ????????????] LT",nextDay:"[???????? ?????? ????????????] LT",nextWeek:"dddd [?????? ????????????] LT",lastDay:"[?????? ?????? ????????????] LT",lastWeek:"dddd [?????? ????????????] LT",sameElse:"L"},relativeTime:{future:"?????? %s",past:"?????? %s",s:Bf("s"),m:Bf("m"),mm:Bf("m"),h:Bf("h"),hh:Bf("h"),d:Bf("d"),dd:Bf("d"),M:Bf("M"),MM:Bf("M"),y:Bf("y"),yy:Bf("y")},preparse:function(a){return a.replace(/\u200f/g,"").replace(/[????????????????????]/g,function(a){return yf[a]}).replace(/??/g,",")},postformat:function(a){return a.replace(/\d/g,function(a){return xf[a]}).replace(/,/g,"??")},week:{dow:6,doy:12}}),{1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-??nc??",4:"-??nc??",100:"-??nc??",6:"-nc??",9:"-uncu",10:"-uncu",30:"-uncu",60:"-??nc??",90:"-??nc??"}),Ef=(uf.defineLocale("az",{months:"yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),monthsShort:"yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),weekdays:"Bazar_Bazar ert??si_????r????nb?? ax??am??_????r????nb??_C??m?? ax??am??_C??m??_????nb??".split("_"),weekdaysShort:"Baz_BzE_??Ax_????r_CAx_C??m_????n".split("_"),weekdaysMin:"Bz_BE_??A_????_CA_C??_????".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bug??n saat] LT",nextDay:"[sabah saat] LT",nextWeek:"[g??l??n h??ft??] dddd [saat] LT",lastDay:"[d??n??n] LT",lastWeek:"[ke????n h??ft??] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s ??vv??l",s:"birne???? saniyy??",m:"bir d??qiq??",mm:"%d d??qiq??",h:"bir saat",hh:"%d saat",d:"bir g??n",dd:"%d g??n",M:"bir ay",MM:"%d ay",y:"bir il",yy:"%d il"},meridiemParse:/gec??|s??h??r|g??nd??z|ax??am/,isPM:function(a){return/^(g??nd??z|ax??am)$/.test(a)},meridiem:function(a,b,c){return 4>a?"gec??":12>a?"s??h??r":17>a?"g??nd??z":"ax??am"},ordinalParse:/\d{1,2}-(??nc??|inci|nci|??nc??|nc??|uncu)/,ordinal:function(a){if(0===a)return a+"-??nc??";var b=a%10,c=a%100-b,d=a>=100?100:null;return a+(Df[b]||Df[c]||Df[d])},week:{dow:1,doy:7}}),uf.defineLocale("be",{months:Jc,monthsShort:"????????_??????_??????_????????_????????_????????_??????_????????_??????_????????_????????_????????".split("_"),weekdays:Kc,weekdaysShort:"????_????_????_????_????_????_????".split("_"),weekdaysMin:"????_????_????_????_????_????_????".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY ??.",LLL:"D MMMM YYYY ??., HH:mm",LLLL:"dddd, D MMMM YYYY ??., HH:mm"},calendar:{sameDay:"[?????????? ??] LT",nextDay:"[???????????? ??] LT",lastDay:"[?????????? ??] LT",nextWeek:function(){return"[??] dddd [??] LT"},lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return"[?? ??????????????] dddd [??] LT";case 1:case 2:case 4:return"[?? ????????????] dddd [??] LT"}},sameElse:"L"},relativeTime:{future:"???????? %s",past:"%s ????????",s:"???????????????? ????????????",m:Ic,mm:Ic,h:Ic,hh:Ic,d:"??????????",dd:Ic,M:"??????????",MM:Ic,y:"??????",yy:Ic},meridiemParse:/????????|????????????|??????|????????????/,isPM:function(a){return/^(??????|????????????)$/.test(a)},meridiem:function(a,b,c){return 4>a?"????????":12>a?"????????????":17>a?"??????":"????????????"},ordinalParse:/\d{1,2}-(??|??|????)/,ordinal:function(a,b){switch(b){case"M":case"d":case"DDD":case"w":case"W":return a%10!==2&&a%10!==3||a%100===12||a%100===13?a+"-??":a+"-??";case"D":return a+"-????";default:return a}},week:{dow:1,doy:7}}),uf.defineLocale("bg",{months:"????????????_????????????????_????????_??????????_??????_??????_??????_????????????_??????????????????_????????????????_??????????????_????????????????".split("_"),monthsShort:"??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????".split("_"),weekdays:"????????????_????????????????????_??????????????_??????????_??????????????????_??????????_????????????".split("_"),weekdaysShort:"??????_??????_??????_??????_??????_??????_??????".split("_"),weekdaysMin:"????_????_????_????_????_????_????".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[???????? ??] LT",nextDay:"[???????? ??] LT",nextWeek:"dddd [??] LT",lastDay:"[?????????? ??] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[?? ????????????????????] dddd [??] LT";case 1:case 2:case 4:case 5:return"[?? ??????????????????] dddd [??] LT"}},sameElse:"L"},relativeTime:{future:"???????? %s",past:"?????????? %s",s:"?????????????? ??????????????",m:"????????????",mm:"%d ????????????",h:"??????",hh:"%d ????????",d:"??????",dd:"%d ??????",M:"??????????",MM:"%d ????????????",y:"????????????",yy:"%d ????????????"},ordinalParse:/\d{1,2}-(????|????|????|????|????|????)/,ordinal:function(a){var b=a%10,c=a%100;return 0===a?a+"-????":0===c?a+"-????":c>10&&20>c?a+"-????":1===b?a+"-????":2===b?a+"-????":7===b||8===b?a+"-????":a+"-????"},week:{dow:1,doy:7}}),{1:"???",2:"???",3:"???",4:"???",5:"???",6:"???",7:"???",8:"???",9:"???",0:"???"}),Ff={"???":"1","???":"2","???":"3","???":"4","???":"5","???":"6","???":"7","???":"8","???":"9","???":"0"},Gf=(uf.defineLocale("bn",{months:"????????????????????????_????????????????????????_???????????????_??????????????????_??????_?????????_???????????????_??????????????????_??????????????????????????????_?????????????????????_?????????????????????_????????????????????????".split("_"),monthsShort:"????????????_?????????_???????????????_?????????_??????_?????????_?????????_??????_???????????????_???????????????_??????_??????????????????".split("_"),weekdays:"??????????????????_??????????????????_????????????????????????_??????????????????_???????????????????????????????????????_???????????????????????????_??????????????????".split("_"),weekdaysShort:"?????????_?????????_???????????????_?????????_??????????????????????????????_??????????????????_?????????".split("_"),weekdaysMin:"??????_??????_????????????_??????_???????????????_??????_?????????".split("_"),longDateFormat:{LT:"A h:mm ?????????",LTS:"A h:mm:ss ?????????",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm ?????????",LLLL:"dddd, D MMMM YYYY, A h:mm ?????????"},calendar:{sameDay:"[??????] LT",nextDay:"[????????????????????????] LT",nextWeek:"dddd, LT",lastDay:"[???????????????] LT",lastWeek:"[??????] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ?????????",past:"%s ?????????",s:"????????? ?????????????????????",m:"?????? ???????????????",mm:"%d ???????????????",h:"?????? ???????????????",hh:"%d ???????????????",d:"?????? ?????????",dd:"%d ?????????",M:"?????? ?????????",MM:"%d ?????????",y:"?????? ?????????",yy:"%d ?????????"},preparse:function(a){return a.replace(/[??????????????????????????????]/g,function(a){return Ff[a]})},postformat:function(a){return a.replace(/\d/g,function(a){return Ef[a]})},meridiemParse:/?????????|????????????|???????????????|???????????????|?????????/,isPM:function(a){return/^(???????????????|???????????????|?????????)$/.test(a)},meridiem:function(a,b,c){return 4>a?"?????????":10>a?"????????????":17>a?"???????????????":20>a?"???????????????":"?????????"},week:{dow:0,doy:6}}),{1:"???",2:"???",3:"???",4:"???",5:"???",6:"???",7:"???",8:"???",9:"???",0:"???"}),Hf={"???":"1","???":"2","???":"3","???":"4","???":"5","???":"6","???":"7","???":"8","???":"9","???":"0"},If=(uf.defineLocale("bo",{months:"??????????????????????????????_?????????????????????????????????_?????????????????????????????????_??????????????????????????????_???????????????????????????_?????????????????????????????????_?????????????????????????????????_????????????????????????????????????_??????????????????????????????_??????????????????????????????_?????????????????????????????????????????????_?????????????????????????????????????????????".split("_"),monthsShort:"??????????????????????????????_?????????????????????????????????_?????????????????????????????????_??????????????????????????????_???????????????????????????_?????????????????????????????????_?????????????????????????????????_????????????????????????????????????_??????????????????????????????_??????????????????????????????_?????????????????????????????????????????????_?????????????????????????????????????????????".split("_"),weekdays:"???????????????????????????_???????????????????????????_????????????????????????????????????_??????????????????????????????_??????????????????????????????_??????????????????????????????_?????????????????????????????????".split("_"),weekdaysShort:"???????????????_???????????????_????????????????????????_??????????????????_??????????????????_??????????????????_?????????????????????".split("_"),weekdaysMin:"???????????????_???????????????_????????????????????????_??????????????????_??????????????????_??????????????????_?????????????????????".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[??????????????????] LT",nextDay:"[??????????????????] LT",nextWeek:"[?????????????????????????????????????????????], LT",lastDay:"[????????????] LT",lastWeek:"[??????????????????????????????????????????] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ??????",past:"%s ???????????????",s:"???????????????",m:"??????????????????????????????",mm:"%d ???????????????",h:"?????????????????????????????????",hh:"%d ??????????????????",d:"????????????????????????",dd:"%d ????????????",M:"???????????????????????????",MM:"%d ????????????",y:"?????????????????????",yy:"%d ??????"},preparse:function(a){return a.replace(/[??????????????????????????????]/g,function(a){return Hf[a]})},postformat:function(a){return a.replace(/\d/g,function(a){return Gf[a]})},meridiemParse:/??????????????????|?????????????????????|?????????????????????|?????????????????????|??????????????????/,isPM:function(a){return/^(?????????????????????|?????????????????????|??????????????????)$/.test(a)},meridiem:function(a,b,c){return 4>a?"??????????????????":10>a?"?????????????????????":17>a?"?????????????????????":20>a?"?????????????????????":"??????????????????"},week:{dow:0,doy:6}}),uf.defineLocale("br",{months:"Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),monthsShort:"Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),weekdays:"Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),weekdaysShort:"Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),weekdaysMin:"Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),longDateFormat:{LT:"h[e]mm A",LTS:"h[e]mm:ss A",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY h[e]mm A",LLLL:"dddd, D [a viz] MMMM YYYY h[e]mm A"},calendar:{sameDay:"[Hiziv da] LT",nextDay:"[Warc'hoazh da] LT",nextWeek:"dddd [da] LT",lastDay:"[Dec'h da] LT",lastWeek:"dddd [paset da] LT",sameElse:"L"},relativeTime:{future:"a-benn %s",past:"%s 'zo",s:"un nebeud segondenno??",m:"ur vunutenn",mm:Lc,h:"un eur",hh:"%d eur",d:"un devezh",dd:Lc,M:"ur miz",MM:Lc,y:"ur bloaz",yy:Mc},ordinalParse:/\d{1,2}(a??|vet)/,ordinal:function(a){var b=1===a?"a??":"vet";return a+b},week:{dow:1,doy:4}}),uf.defineLocale("bs",{months:"januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),weekdays:"nedjelja_ponedjeljak_utorak_srijeda_??etvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._??et._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_??e_pe_su".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[ju??er u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[pro??lu] dddd [u] LT";case 6:return"[pro??le] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[pro??li] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:Qc,mm:Qc,h:Qc,hh:Qc,d:"dan",dd:Qc,M:"mjesec",MM:Qc,y:"godinu",yy:Qc},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),uf.defineLocale("ca",{months:"gener_febrer_mar??_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),monthsShort:"gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),weekdays:"diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dt._dc._dj._dv._ds.".split("_"),weekdaysMin:"Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd D MMMM YYYY H:mm"},calendar:{sameDay:function(){return"[avui a "+(1!==this.hours()?"les":"la")+"] LT"},nextDay:function(){return"[dem?? a "+(1!==this.hours()?"les":"la")+"] LT"},nextWeek:function(){return"dddd [a "+(1!==this.hours()?"les":"la")+"] LT"},lastDay:function(){return"[ahir a "+(1!==this.hours()?"les":"la")+"] LT"},lastWeek:function(){return"[el] dddd [passat a "+(1!==this.hours()?"les":"la")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"fa %s",s:"uns segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},ordinalParse:/\d{1,2}(r|n|t|??|a)/,ordinal:function(a,b){var c=1===a?"r":2===a?"n":3===a?"r":4===a?"t":"??";return("w"===b||"W"===b)&&(c="a"),a+c},week:{dow:1,doy:4}}),"leden_??nor_b??ezen_duben_kv??ten_??erven_??ervenec_srpen_z??????_????jen_listopad_prosinec".split("_")),Jf="led_??no_b??e_dub_kv??_??vn_??vc_srp_z????_????j_lis_pro".split("_"),Kf=(uf.defineLocale("cs",{months:If,monthsShort:Jf,monthsParse:function(a,b){var c,d=[];for(c=0;12>c;c++)d[c]=new RegExp("^"+a[c]+"$|^"+b[c]+"$","i");return d}(If,Jf),weekdays:"ned??le_pond??l??_??ter??_st??eda_??tvrtek_p??tek_sobota".split("_"),weekdaysShort:"ne_po_??t_st_??t_p??_so".split("_"),weekdaysMin:"ne_po_??t_st_??t_p??_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes v] LT",nextDay:"[z??tra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v ned??li v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve st??edu v] LT";case 4:return"[ve ??tvrtek v] LT";case 5:return"[v p??tek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[v??era v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou ned??li v] LT";case 1:case 2:return"[minul??] dddd [v] LT";case 3:return"[minulou st??edu v] LT";case 4:case 5:return"[minul??] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"p??ed %s",s:Sc,m:Sc,mm:Sc,h:Sc,hh:Sc,d:Sc,dd:Sc,M:Sc,MM:Sc,y:Sc,yy:Sc},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),uf.defineLocale("cv",{months:"????????????_??????????_??????_??????_??????_????????????_??????_??????????_????????_??????_??????_????????????".split("_"),monthsShort:"??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????".split("_"),weekdays:"??????????????????????_????????????????_??????????????????_??????????_??????????????????????_??????????????_????????????????".split("_"),weekdaysShort:"??????_??????_??????_????_??????_??????_??????".split("_"),weekdaysMin:"????_????_????_????_????_????_????".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"YYYY [??????????] MMMM [????????????] D[-????????]",LLL:"YYYY [??????????] MMMM [????????????] D[-????????], HH:mm",LLLL:"dddd, YYYY [??????????] MMMM [????????????] D[-????????], HH:mm"},calendar:{sameDay:"[????????] LT [??????????????]",nextDay:"[????????] LT [??????????????]",lastDay:"[????????] LT [??????????????]",nextWeek:"[??????????] dddd LT [??????????????]",lastWeek:"[??????????] dddd LT [??????????????]",sameElse:"L"},relativeTime:{future:function(a){var b=/??????????$/i.exec(a)?"??????":/??????$/i.exec(a)?"??????":"??????";return a+b},past:"%s ????????????",s:"??????-???? ??????????????",m:"?????? ??????????",mm:"%d ??????????",h:"?????? ??????????",hh:"%d ??????????",d:"?????? ??????",dd:"%d ??????",M:"?????? ????????",MM:"%d ????????",y:"?????? ??????",yy:"%d ??????"},ordinalParse:/\d{1,2}-??????/,ordinal:"%d-??????",week:{dow:1,doy:7}}),uf.defineLocale("cy",{months:"Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),monthsShort:"Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),weekdays:"Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),weekdaysShort:"Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),weekdaysMin:"Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Heddiw am] LT",nextDay:"[Yfory am] LT",nextWeek:"dddd [am] LT",lastDay:"[Ddoe am] LT",lastWeek:"dddd [diwethaf am] LT",sameElse:"L"},relativeTime:{future:"mewn %s",past:"%s yn ??l",s:"ychydig eiliadau",m:"munud",mm:"%d munud",h:"awr",hh:"%d awr",d:"diwrnod",dd:"%d diwrnod",M:"mis",MM:"%d mis",y:"blwyddyn",yy:"%d flynedd"},ordinalParse:/\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,ordinal:function(a){var b=a,c="",d=["","af","il","ydd","ydd","ed","ed","ed","fed","fed","fed","eg","fed","eg","eg","fed","eg","eg","fed","eg","fed"];return b>20?c=40===b||50===b||60===b||80===b||100===b?"fed":"ain":b>0&&(c=d[b]),a+c},week:{dow:1,doy:4}}),uf.defineLocale("da",{months:"januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"s??ndag_mandag_tirsdag_onsdag_torsdag_fredag_l??rdag".split("_"),weekdaysShort:"s??n_man_tir_ons_tor_fre_l??r".split("_"),weekdaysMin:"s??_ma_ti_on_to_fr_l??".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd [d.] D. MMMM YYYY HH:mm"},calendar:{sameDay:"[I dag kl.] LT",nextDay:"[I morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[I g??r kl.] LT",lastWeek:"[sidste] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"f?? sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en m??ned",MM:"%d m??neder",y:"et ??r",yy:"%d ??r"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),uf.defineLocale("de-at",{months:"J??nner_Februar_M??rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"J??n._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[Heute um] LT [Uhr]",sameElse:"L",nextDay:"[Morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[Gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:Tc,mm:"%d Minuten",h:Tc,hh:"%d Stunden",d:Tc,dd:Tc,M:Tc,MM:Tc,y:Tc,yy:Tc},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),uf.defineLocale("de",{months:"Januar_Februar_M??rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[Heute um] LT [Uhr]",sameElse:"L",nextDay:"[Morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[Gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:Uc,mm:"%d Minuten",h:Uc,hh:"%d Stunden",d:Uc,dd:Uc,M:Uc,MM:Uc,y:Uc,yy:Uc},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),uf.defineLocale("el",{monthsNominativeEl:"????????????????????_??????????????????????_??????????????_????????????????_??????????_??????????????_??????????????_??????????????????_??????????????????????_??????????????????_??????????????????_????????????????????".split("_"),monthsGenitiveEl:"????????????????????_??????????????????????_??????????????_????????????????_??????????_??????????????_??????????????_??????????????????_??????????????????????_??????????????????_??????????????????_????????????????????".split("_"),months:function(a,b){return/D/.test(b.substring(0,b.indexOf("MMMM")))?this._monthsGenitiveEl[a.month()]:this._monthsNominativeEl[a.month()]},monthsShort:"??????_??????_??????_??????_??????_????????_????????_??????_??????_??????_??????_??????".split("_"),weekdays:"??????????????_??????????????_??????????_??????????????_????????????_??????????????????_??????????????".split("_"),weekdaysShort:"??????_??????_??????_??????_??????_??????_??????".split("_"),weekdaysMin:"????_????_????_????_????_????_????".split("_"),meridiem:function(a,b,c){return a>11?c?"????":"????":c?"????":"????"},isPM:function(a){return"??"===(a+"").toLowerCase()[0]},meridiemParse:/[????]\.????\.?/i,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendarEl:{sameDay:"[???????????? {}] LT",nextDay:"[?????????? {}] LT",nextWeek:"dddd [{}] LT",lastDay:"[???????? {}] LT",lastWeek:function(){switch(this.day()){case 6:return"[???? ??????????????????????] dddd [{}] LT";default:return"[?????? ??????????????????????] dddd [{}] LT"}},sameElse:"L"},calendar:function(a,b){var c=this._calendarEl[a],d=b&&b.hours();return"function"==typeof c&&(c=c.apply(b)),c.replace("{}",d%12===1?"??????":"????????")},relativeTime:{future:"???? %s",past:"%s ????????",s:"???????? ????????????????????????",m:"?????? ??????????",mm:"%d ??????????",h:"?????? ??????",hh:"%d ????????",d:"?????? ????????",dd:"%d ??????????",M:"???????? ??????????",MM:"%d ??????????",y:"???????? ????????????",yy:"%d ????????????"},ordinalParse:/\d{1,2}??/,ordinal:"%d??",week:{dow:1,doy:4}}),uf.defineLocale("en-au",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(a){var b=a%10,c=1===~~(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c},week:{dow:1,doy:4}}),uf.defineLocale("en-ca",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"YYYY-MM-DD",LL:"D MMMM, YYYY",LLL:"D MMMM, YYYY h:mm A",LLLL:"dddd, D MMMM, YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(a){var b=a%10,c=1===~~(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),uf.defineLocale("en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(a){var b=a%10,c=1===~~(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c},week:{dow:1,doy:4}}),uf.defineLocale("eo",{months:"januaro_februaro_marto_aprilo_majo_junio_julio_a??gusto_septembro_oktobro_novembro_decembro".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_a??g_sep_okt_nov_dec".split("_"),weekdays:"Diman??o_Lundo_Mardo_Merkredo_??a??do_Vendredo_Sabato".split("_"),weekdaysShort:"Dim_Lun_Mard_Merk_??a??_Ven_Sab".split("_"),weekdaysMin:"Di_Lu_Ma_Me_??a_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D[-an de] MMMM, YYYY",LLL:"D[-an de] MMMM, YYYY HH:mm",LLLL:"dddd, [la] D[-an de] MMMM, YYYY HH:mm"},meridiemParse:/[ap]\.t\.m/i,isPM:function(a){return"p"===a.charAt(0).toLowerCase()},meridiem:function(a,b,c){return a>11?c?"p.t.m.":"P.T.M.":c?"a.t.m.":"A.T.M."},calendar:{sameDay:"[Hodia?? je] LT",nextDay:"[Morga?? je] LT",nextWeek:"dddd [je] LT",lastDay:"[Hiera?? je] LT",lastWeek:"[pasinta] dddd [je] LT",sameElse:"L"},relativeTime:{future:"je %s",past:"anta?? %s",s:"sekundoj",m:"minuto",mm:"%d minutoj",h:"horo",hh:"%d horoj",d:"tago",dd:"%d tagoj",M:"monato",MM:"%d monatoj",y:"jaro",yy:"%d jaroj"},ordinalParse:/\d{1,2}a/,ordinal:"%da",week:{dow:1,doy:7}}),"Ene._Feb._Mar._Abr._May._Jun._Jul._Ago._Sep._Oct._Nov._Dic.".split("_")),Lf="Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic".split("_"),Mf=(uf.defineLocale("es",{months:"Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"),monthsShort:function(a,b){return/-MMM-/.test(b)?Lf[a.month()]:Kf[a.month()]},weekdays:"Domingo_Lunes_Martes_Mi??rcoles_Jueves_Viernes_S??bado".split("_"),weekdaysShort:"Dom._Lun._Mar._Mi??._Jue._Vie._S??b.".split("_"),weekdaysMin:"Do_Lu_Ma_Mi_Ju_Vi_S??".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[ma??ana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d??a",dd:"%d d??as",M:"un mes",MM:"%d meses",y:"un a??o",yy:"%d a??os"},ordinalParse:/\d{1,2}??/,ordinal:"%d??",week:{dow:1,doy:4}}),uf.defineLocale("et",{months:"jaanuar_veebruar_m??rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_m??rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),weekdays:"p??hap??ev_esmasp??ev_teisip??ev_kolmap??ev_neljap??ev_reede_laup??ev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[T??na,] LT",nextDay:"[Homme,] LT",nextWeek:"[J??rgmine] dddd LT",lastDay:"[Eile,] LT",lastWeek:"[Eelmine] dddd LT",sameElse:"L"},relativeTime:{future:"%s p??rast",past:"%s tagasi",s:Vc,m:Vc,mm:Vc,h:Vc,hh:Vc,d:Vc,dd:"%d p??eva",M:Vc,MM:Vc,y:Vc,yy:Vc},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),uf.defineLocale("eu",{months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),weekdaysMin:"ig_al_ar_az_og_ol_lr".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY[ko] MMMM[ren] D[a]",LLL:"YYYY[ko] MMMM[ren] D[a] HH:mm",LLLL:"dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",l:"YYYY-M-D",ll:"YYYY[ko] MMM D[a]",lll:"YYYY[ko] MMM D[a] HH:mm",llll:"ddd, YYYY[ko] MMM D[a] HH:mm"},calendar:{sameDay:"[gaur] LT[etan]",nextDay:"[bihar] LT[etan]",nextWeek:"dddd LT[etan]",
        lastDay:"[atzo] LT[etan]",lastWeek:"[aurreko] dddd LT[etan]",sameElse:"L"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),{1:"??",2:"??",3:"??",4:"??",5:"??",6:"??",7:"??",8:"??",9:"??",0:"??"}),Nf={"??":"1","??":"2","??":"3","??":"4","??":"5","??":"6","??":"7","??":"8","??":"9","??":"0"},Of=(uf.defineLocale("fa",{months:"????????????_??????????_????????_??????????_????_????????_??????????_??????_??????????????_??????????_????????????_????????????".split("_"),monthsShort:"????????????_??????????_????????_??????????_????_????????_??????????_??????_??????????????_??????????_????????????_????????????".split("_"),weekdays:"???????????????_????????????_???????????????_????????????????_?????????????????_????????_????????".split("_"),weekdaysShort:"???????????????_????????????_???????????????_????????????????_?????????????????_????????_????????".split("_"),weekdaysMin:"??_??_??_??_??_??_??".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/?????? ???? ??????|?????? ???? ??????/,isPM:function(a){return/?????? ???? ??????/.test(a)},meridiem:function(a,b,c){return 12>a?"?????? ???? ??????":"?????? ???? ??????"},calendar:{sameDay:"[?????????? ????????] LT",nextDay:"[???????? ????????] LT",nextWeek:"dddd [????????] LT",lastDay:"[?????????? ????????] LT",lastWeek:"dddd [??????] [????????] LT",sameElse:"L"},relativeTime:{future:"???? %s",past:"%s ??????",s:"?????????? ??????????",m:"???? ??????????",mm:"%d ??????????",h:"???? ????????",hh:"%d ????????",d:"???? ??????",dd:"%d ??????",M:"???? ??????",MM:"%d ??????",y:"???? ??????",yy:"%d ??????"},preparse:function(a){return a.replace(/[??-??]/g,function(a){return Nf[a]}).replace(/??/g,",")},postformat:function(a){return a.replace(/\d/g,function(a){return Mf[a]}).replace(/,/g,"??")},ordinalParse:/\d{1,2}??/,ordinal:"%d??",week:{dow:6,doy:12}}),"nolla yksi kaksi kolme nelj?? viisi kuusi seitsem??n kahdeksan yhdeks??n".split(" ")),Pf=["nolla","yhden","kahden","kolmen","nelj??n","viiden","kuuden",Of[7],Of[8],Of[9]],Qf=(uf.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes??kuu_hein??kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kes??_hein??_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] HH.mm",llll:"ddd, Do MMM YYYY, [klo] HH.mm"},calendar:{sameDay:"[t??n????n] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s p????st??",past:"%s sitten",s:Wc,m:Wc,mm:Wc,h:Wc,hh:Wc,d:Wc,dd:Wc,M:Wc,MM:Wc,y:Wc,yy:Wc},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),uf.defineLocale("fo",{months:"januar_februar_mars_apr??l_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sunnudagur_m??nadagur_t??sdagur_mikudagur_h??sdagur_fr??ggjadagur_leygardagur".split("_"),weekdaysShort:"sun_m??n_t??s_mik_h??s_fr??_ley".split("_"),weekdaysMin:"su_m??_t??_mi_h??_fr_le".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D. MMMM, YYYY HH:mm"},calendar:{sameDay:"[?? dag kl.] LT",nextDay:"[?? morgin kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[?? gj??r kl.] LT",lastWeek:"[s????stu] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"um %s",past:"%s s????ani",s:"f?? sekund",m:"ein minutt",mm:"%d minuttir",h:"ein t??mi",hh:"%d t??mar",d:"ein dagur",dd:"%d dagar",M:"ein m??na??i",MM:"%d m??na??ir",y:"eitt ??r",yy:"%d ??r"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),uf.defineLocale("fr-ca",{months:"janvier_f??vrier_mars_avril_mai_juin_juillet_ao??t_septembre_octobre_novembre_d??cembre".split("_"),monthsShort:"janv._f??vr._mars_avr._mai_juin_juil._ao??t_sept._oct._nov._d??c.".split("_"),weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd'hui ??] LT",nextDay:"[Demain ??] LT",nextWeek:"dddd [??] LT",lastDay:"[Hier ??] LT",lastWeek:"dddd [dernier ??] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|e)/,ordinal:function(a){return a+(1===a?"er":"e")}}),uf.defineLocale("fr",{months:"janvier_f??vrier_mars_avril_mai_juin_juillet_ao??t_septembre_octobre_novembre_d??cembre".split("_"),monthsShort:"janv._f??vr._mars_avr._mai_juin_juil._ao??t_sept._oct._nov._d??c.".split("_"),weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd'hui ??] LT",nextDay:"[Demain ??] LT",nextWeek:"dddd [??] LT",lastDay:"[Hier ??] LT",lastWeek:"dddd [dernier ??] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|)/,ordinal:function(a){return a+(1===a?"er":"")},week:{dow:1,doy:4}}),"jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_")),Rf="jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),Sf=(uf.defineLocale("fy",{months:"jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),monthsShort:function(a,b){return/-MMM-/.test(b)?Rf[a.month()]:Qf[a.month()]},weekdays:"snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),weekdaysShort:"si._mo._ti._wo._to._fr._so.".split("_"),weekdaysMin:"Si_Mo_Ti_Wo_To_Fr_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[hjoed om] LT",nextDay:"[moarn om] LT",nextWeek:"dddd [om] LT",lastDay:"[juster om] LT",lastWeek:"[??fr??ne] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oer %s",past:"%s lyn",s:"in pear sekonden",m:"ien min??t",mm:"%d minuten",h:"ien oere",hh:"%d oeren",d:"ien dei",dd:"%d dagen",M:"ien moanne",MM:"%d moannen",y:"ien jier",yy:"%d jierren"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(a){return a+(1===a||8===a||a>=20?"ste":"de")},week:{dow:1,doy:4}}),uf.defineLocale("gl",{months:"Xaneiro_Febreiro_Marzo_Abril_Maio_Xu??o_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),monthsShort:"Xan._Feb._Mar._Abr._Mai._Xu??._Xul._Ago._Set._Out._Nov._Dec.".split("_"),weekdays:"Domingo_Luns_Martes_M??rcores_Xoves_Venres_S??bado".split("_"),weekdaysShort:"Dom._Lun._Mar._M??r._Xov._Ven._S??b.".split("_"),weekdaysMin:"Do_Lu_Ma_M??_Xo_Ve_S??".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd D MMMM YYYY H:mm"},calendar:{sameDay:function(){return"[hoxe "+(1!==this.hours()?"??s":"??")+"] LT"},nextDay:function(){return"[ma???? "+(1!==this.hours()?"??s":"??")+"] LT"},nextWeek:function(){return"dddd ["+(1!==this.hours()?"??s":"a")+"] LT"},lastDay:function(){return"[onte "+(1!==this.hours()?"??":"a")+"] LT"},lastWeek:function(){return"[o] dddd [pasado "+(1!==this.hours()?"??s":"a")+"] LT"},sameElse:"L"},relativeTime:{future:function(a){return"uns segundos"===a?"nuns segundos":"en "+a},past:"hai %s",s:"uns segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un d??a",dd:"%d d??as",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},ordinalParse:/\d{1,2}??/,ordinal:"%d??",week:{dow:1,doy:7}}),uf.defineLocale("he",{months:"??????????_????????????_??????_??????????_??????_????????_????????_????????????_????????????_??????????????_????????????_??????????".split("_"),monthsShort:"????????_????????_??????_????????_??????_????????_????????_????????_????????_????????_????????_????????".split("_"),weekdays:"??????????_??????_??????????_??????????_??????????_????????_??????".split("_"),weekdaysShort:"????_????_????_????_????_????_????".split("_"),weekdaysMin:"??_??_??_??_??_??_??".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [??]MMMM YYYY",LLL:"D [??]MMMM YYYY HH:mm",LLLL:"dddd, D [??]MMMM YYYY HH:mm",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[???????? ????]LT",nextDay:"[?????? ????]LT",nextWeek:"dddd [????????] LT",lastDay:"[?????????? ????]LT",lastWeek:"[????????] dddd [???????????? ????????] LT",sameElse:"L"},relativeTime:{future:"???????? %s",past:"???????? %s",s:"???????? ??????????",m:"??????",mm:"%d ????????",h:"??????",hh:function(a){return 2===a?"????????????":a+" ????????"},d:"??????",dd:function(a){return 2===a?"????????????":a+" ????????"},M:"????????",MM:function(a){return 2===a?"??????????????":a+" ????????????"},y:"??????",yy:function(a){return 2===a?"????????????":a%10===0&&10!==a?a+" ??????":a+" ????????"}}}),{1:"???",2:"???",3:"???",4:"???",5:"???",6:"???",7:"???",8:"???",9:"???",0:"???"}),Tf={"???":"1","???":"2","???":"3","???":"4","???":"5","???":"6","???":"7","???":"8","???":"9","???":"0"},Uf=(uf.defineLocale("hi",{months:"???????????????_??????????????????_???????????????_??????????????????_??????_?????????_???????????????_???????????????_?????????????????????_?????????????????????_??????????????????_?????????????????????".split("_"),monthsShort:"??????._?????????._???????????????_???????????????._??????_?????????_?????????._??????._?????????._???????????????._??????._?????????.".split("_"),weekdays:"??????????????????_??????????????????_?????????????????????_??????????????????_?????????????????????_????????????????????????_??????????????????".split("_"),weekdaysShort:"?????????_?????????_????????????_?????????_????????????_???????????????_?????????".split("_"),weekdaysMin:"???_??????_??????_??????_??????_??????_???".split("_"),longDateFormat:{LT:"A h:mm ?????????",LTS:"A h:mm:ss ?????????",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm ?????????",LLLL:"dddd, D MMMM YYYY, A h:mm ?????????"},calendar:{sameDay:"[??????] LT",nextDay:"[??????] LT",nextWeek:"dddd, LT",lastDay:"[??????] LT",lastWeek:"[???????????????] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ?????????",past:"%s ????????????",s:"????????? ?????? ????????????",m:"?????? ????????????",mm:"%d ????????????",h:"?????? ????????????",hh:"%d ????????????",d:"?????? ?????????",dd:"%d ?????????",M:"?????? ???????????????",MM:"%d ???????????????",y:"?????? ????????????",yy:"%d ????????????"},preparse:function(a){return a.replace(/[??????????????????????????????]/g,function(a){return Tf[a]})},postformat:function(a){return a.replace(/\d/g,function(a){return Sf[a]})},meridiemParse:/?????????|????????????|???????????????|?????????/,meridiemHour:function(a,b){return 12===a&&(a=0),"?????????"===b?4>a?a:a+12:"????????????"===b?a:"???????????????"===b?a>=10?a:a+12:"?????????"===b?a+12:void 0},meridiem:function(a,b,c){return 4>a?"?????????":10>a?"????????????":17>a?"???????????????":20>a?"?????????":"?????????"},week:{dow:0,doy:6}}),uf.defineLocale("hr",{months:"sije??anj_velja??a_o??ujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"),monthsShort:"sij._velj._o??u._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),weekdays:"nedjelja_ponedjeljak_utorak_srijeda_??etvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._??et._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_??e_pe_su".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[ju??er u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[pro??lu] dddd [u] LT";case 6:return"[pro??le] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[pro??li] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:Yc,mm:Yc,h:Yc,hh:Yc,d:"dan",dd:Yc,M:"mjesec",MM:Yc,y:"godinu",yy:Yc},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),"vas??rnap h??tf??n kedden szerd??n cs??t??rt??k??n p??nteken szombaton".split(" ")),Vf=(uf.defineLocale("hu",{months:"janu??r_febru??r_m??rcius_??prilis_m??jus_j??nius_j??lius_augusztus_szeptember_okt??ber_november_december".split("_"),monthsShort:"jan_feb_m??rc_??pr_m??j_j??n_j??l_aug_szept_okt_nov_dec".split("_"),weekdays:"vas??rnap_h??tf??_kedd_szerda_cs??t??rt??k_p??ntek_szombat".split("_"),weekdaysShort:"vas_h??t_kedd_sze_cs??t_p??n_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,isPM:function(a){return"u"===a.charAt(1).toLowerCase()},meridiem:function(a,b,c){return 12>a?c===!0?"de":"DE":c===!0?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return $c.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return $c.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s m??lva",past:"%s",s:Zc,m:Zc,mm:Zc,h:Zc,hh:Zc,d:Zc,dd:Zc,M:Zc,MM:Zc,y:Zc,yy:Zc},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),uf.defineLocale("hy-am",{months:_c,monthsShort:ad,weekdays:bd,weekdaysShort:"??????_??????_??????_??????_??????_????????_??????".split("_"),weekdaysMin:"??????_??????_??????_??????_??????_????????_??????".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY ??.",LLL:"D MMMM YYYY ??., HH:mm",LLLL:"dddd, D MMMM YYYY ??., HH:mm"},calendar:{sameDay:"[??????????] LT",nextDay:"[????????] LT",lastDay:"[????????] LT",nextWeek:function(){return"dddd [?????? ????????] LT"},lastWeek:function(){return"[??????????] dddd [?????? ????????] LT"},sameElse:"L"},relativeTime:{future:"%s ????????",past:"%s ????????",s:"???? ???????? ????????????????",m:"????????",mm:"%d ????????",h:"??????",hh:"%d ??????",d:"????",dd:"%d ????",M:"????????",MM:"%d ????????",y:"????????",yy:"%d ????????"},meridiemParse:/??????????????|????????????????|??????????????|????????????????/,isPM:function(a){return/^(??????????????|????????????????)$/.test(a)},meridiem:function(a){return 4>a?"??????????????":12>a?"????????????????":17>a?"??????????????":"????????????????"},ordinalParse:/\d{1,2}|\d{1,2}-(????|????)/,ordinal:function(a,b){switch(b){case"DDD":case"w":case"W":case"DDDo":return 1===a?a+"-????":a+"-????";default:return a}},week:{dow:1,doy:7}}),uf.defineLocale("id",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|siang|sore|malam/,meridiemHour:function(a,b){return 12===a&&(a=0),"pagi"===b?a:"siang"===b?a>=11?a:a+12:"sore"===b||"malam"===b?a+12:void 0},meridiem:function(a,b,c){return 11>a?"pagi":15>a?"siang":19>a?"sore":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}}),uf.defineLocale("is",{months:"jan??ar_febr??ar_mars_apr??l_ma??_j??n??_j??l??_??g??st_september_okt??ber_n??vember_desember".split("_"),monthsShort:"jan_feb_mar_apr_ma??_j??n_j??l_??g??_sep_okt_n??v_des".split("_"),weekdays:"sunnudagur_m??nudagur_??ri??judagur_mi??vikudagur_fimmtudagur_f??studagur_laugardagur".split("_"),weekdaysShort:"sun_m??n_??ri_mi??_fim_f??s_lau".split("_"),weekdaysMin:"Su_M??_??r_Mi_Fi_F??_La".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"},calendar:{sameDay:"[?? dag kl.] LT",nextDay:"[?? morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[?? g??r kl.] LT",lastWeek:"[s????asta] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"eftir %s",past:"fyrir %s s????an",s:dd,m:dd,mm:dd,h:"klukkustund",hh:dd,d:dd,dd:dd,M:dd,MM:dd,y:dd,yy:dd},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),uf.defineLocale("it",{months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"Domenica_Luned??_Marted??_Mercoled??_Gioved??_Venerd??_Sabato".split("_"),weekdaysShort:"Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),weekdaysMin:"D_L_Ma_Me_G_V_S".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",lastDay:"[Ieri alle] LT",lastWeek:function(){switch(this.day()){case 0:return"[la scorsa] dddd [alle] LT";default:return"[lo scorso] dddd [alle] LT"}},sameElse:"L"},relativeTime:{future:function(a){return(/^[0-9].+$/.test(a)?"tra":"in")+" "+a},past:"%s fa",s:"alcuni secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},ordinalParse:/\d{1,2}??/,ordinal:"%d??",week:{dow:1,doy:4}}),uf.defineLocale("ja",{months:"1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???".split("_"),monthsShort:"1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???".split("_"),weekdays:"?????????_?????????_?????????_?????????_?????????_?????????_?????????".split("_"),weekdaysShort:"???_???_???_???_???_???_???".split("_"),weekdaysMin:"???_???_???_???_???_???_???".split("_"),longDateFormat:{LT:"Ah???m???",LTS:"Ah???m???s???",L:"YYYY/MM/DD",LL:"YYYY???M???D???",LLL:"YYYY???M???D???Ah???m???",LLLL:"YYYY???M???D???Ah???m??? dddd"},meridiemParse:/??????|??????/i,isPM:function(a){return"??????"===a},meridiem:function(a,b,c){return 12>a?"??????":"??????"},calendar:{sameDay:"[??????] LT",nextDay:"[??????] LT",nextWeek:"[??????]dddd LT",lastDay:"[??????] LT",lastWeek:"[??????]dddd LT",sameElse:"L"},relativeTime:{future:"%s???",past:"%s???",s:"??????",m:"1???",mm:"%d???",h:"1??????",hh:"%d??????",d:"1???",dd:"%d???",M:"1??????",MM:"%d??????",y:"1???",yy:"%d???"}}),uf.defineLocale("jv",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),weekdays:"Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),weekdaysShort:"Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/enjing|siyang|sonten|ndalu/,meridiemHour:function(a,b){return 12===a&&(a=0),"enjing"===b?a:"siyang"===b?a>=11?a:a+12:"sonten"===b||"ndalu"===b?a+12:void 0},meridiem:function(a,b,c){return 11>a?"enjing":15>a?"siyang":19>a?"sonten":"ndalu"},calendar:{sameDay:"[Dinten puniko pukul] LT",nextDay:"[Mbenjang pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kala wingi pukul] LT",lastWeek:"dddd [kepengker pukul] LT",sameElse:"L"},relativeTime:{future:"wonten ing %s",past:"%s ingkang kepengker",s:"sawetawis detik",m:"setunggal menit",mm:"%d menit",h:"setunggal jam",hh:"%d jam",d:"sedinten",dd:"%d dinten",M:"sewulan",MM:"%d wulan",y:"setaun",yy:"%d taun"},week:{dow:1,doy:7}}),uf.defineLocale("ka",{months:ed,monthsShort:"?????????_?????????_?????????_?????????_?????????_?????????_?????????_?????????_?????????_?????????_?????????_?????????".split("_"),weekdays:fd,weekdaysShort:"?????????_?????????_?????????_?????????_?????????_?????????_?????????".split("_"),weekdaysMin:"??????_??????_??????_??????_??????_??????_??????".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[????????????] LT[-??????]",nextDay:"[????????????] LT[-??????]",lastDay:"[???????????????] LT[-??????]",nextWeek:"[??????????????????] dddd LT[-??????]",lastWeek:"[????????????] dddd LT-??????",sameElse:"L"},relativeTime:{future:function(a){return/(????????????|????????????|???????????????|????????????)/.test(a)?a.replace(/???$/,"??????"):a+"??????"},past:function(a){return/(????????????|????????????|???????????????|?????????|?????????)/.test(a)?a.replace(/(???|???)$/,"?????? ?????????"):/????????????/.test(a)?a.replace(/????????????$/,"???????????? ?????????"):void 0},s:"??????????????????????????? ????????????",m:"????????????",mm:"%d ????????????",h:"???????????????",hh:"%d ???????????????",d:"?????????",dd:"%d ?????????",M:"?????????",MM:"%d ?????????",y:"????????????",yy:"%d ????????????"},ordinalParse:/0|1-??????|??????-\d{1,2}|\d{1,2}-???/,ordinal:function(a){return 0===a?a:1===a?a+"-??????":20>a||100>=a&&a%20===0||a%100===0?"??????-"+a:a+"-???"},week:{dow:1,doy:7}}),uf.defineLocale("km",{months:"????????????_??????????????????_????????????_????????????_????????????_??????????????????_??????????????????_????????????_???????????????_????????????_????????????????????????_????????????".split("_"),monthsShort:"????????????_??????????????????_????????????_????????????_????????????_??????????????????_??????????????????_????????????_???????????????_????????????_????????????????????????_????????????".split("_"),weekdays:"?????????????????????_???????????????_??????????????????_?????????_??????????????????????????????_???????????????_????????????".split("_"),weekdaysShort:"?????????????????????_???????????????_??????????????????_?????????_??????????????????????????????_???????????????_????????????".split("_"),weekdaysMin:"?????????????????????_???????????????_??????????????????_?????????_??????????????????????????????_???????????????_????????????".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[?????????????????? ????????????] LT",nextDay:"[??????????????? ????????????] LT",nextWeek:"dddd [????????????] LT",lastDay:"[???????????????????????? ????????????] LT",lastWeek:"dddd [??????????????????????????????] [????????????] LT",sameElse:"L"},relativeTime:{future:"%s?????????",past:"%s?????????",s:"??????????????????????????????????????????",m:"?????????????????????",mm:"%d ????????????",h:"?????????????????????",hh:"%d ????????????",d:"?????????????????????",dd:"%d ????????????",M:"???????????????",MM:"%d ??????",y:"????????????????????????",yy:"%d ???????????????"},week:{dow:1,doy:4}}),uf.defineLocale("ko",{months:"1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???".split("_"),monthsShort:"1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???".split("_"),weekdays:"?????????_?????????_?????????_?????????_?????????_?????????_?????????".split("_"),weekdaysShort:"???_???_???_???_???_???_???".split("_"),weekdaysMin:"???_???_???_???_???_???_???".split("_"),longDateFormat:{LT:"A h??? m???",LTS:"A h??? m??? s???",L:"YYYY.MM.DD",LL:"YYYY??? MMMM D???",LLL:"YYYY??? MMMM D??? A h??? m???",LLLL:"YYYY??? MMMM D??? dddd A h??? m???"},calendar:{sameDay:"?????? LT",nextDay:"?????? LT",nextWeek:"dddd LT",lastDay:"?????? LT",lastWeek:"????????? dddd LT",sameElse:"L"},relativeTime:{future:"%s ???",past:"%s ???",s:"??????",ss:"%d???",m:"??????",mm:"%d???",h:"?????????",hh:"%d??????",d:"??????",dd:"%d???",M:"??????",MM:"%d???",y:"??????",yy:"%d???"},ordinalParse:/\d{1,2}???/,ordinal:"%d???",meridiemParse:/??????|??????/,isPM:function(a){return"??????"===a},meridiem:function(a,b,c){return 12>a?"??????":"??????"}}),uf.defineLocale("lb",{months:"Januar_Februar_M??erz_Abr??ll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays:"Sonndeg_M??indeg_D??nschdeg_M??ttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),weekdaysShort:"So._M??._D??._M??._Do._Fr._Sa.".split("_"),weekdaysMin:"So_M??_D??_M??_Do_Fr_Sa".split("_"),longDateFormat:{LT:"H:mm [Auer]",LTS:"H:mm:ss [Auer]",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm [Auer]",LLLL:"dddd, D. MMMM YYYY H:mm [Auer]"},calendar:{sameDay:"[Haut um] LT",sameElse:"L",nextDay:"[Muer um] LT",nextWeek:"dddd [um] LT",lastDay:"[G??schter um] LT",lastWeek:function(){switch(this.day()){case 2:case 4:return"[Leschten] dddd [um] LT";default:return"[Leschte] dddd [um] LT"}}},relativeTime:{future:hd,past:id,s:"e puer Sekonnen",m:gd,mm:"%d Minutten",h:gd,hh:"%d Stonnen",d:gd,dd:"%d Deeg",M:gd,MM:"%d M??int",y:gd,yy:"%d Joer"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),{m:"minut??_minut??s_minut??",mm:"minut??s_minu??i??_minutes",h:"valanda_valandos_valand??",hh:"valandos_valand??_valandas",d:"diena_dienos_dien??",dd:"dienos_dien??_dienas",M:"m??nuo_m??nesio_m??nes??",MM:"m??nesiai_m??nesi??_m??nesius",y:"metai_met??_metus",yy:"metai_met??_metus"}),Wf="sekmadienis_pirmadienis_antradienis_tre??iadienis_ketvirtadienis_penktadienis_??e??tadienis".split("_"),Xf=(uf.defineLocale("lt",{months:ld,monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:qd,weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_??e??".split("_"),weekdaysMin:"S_P_A_T_K_Pn_??".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},calendar:{sameDay:"[??iandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[Pra??jus??] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prie?? %s",s:kd,m:md,mm:pd,h:md,hh:pd,d:md,dd:pd,M:md,MM:pd,y:md,yy:pd},ordinalParse:/\d{1,2}-oji/,ordinal:function(a){return a+"-oji"},week:{dow:1,doy:4}}),{m:"min??tes_min??t??m_min??te_min??tes".split("_"),mm:"min??tes_min??t??m_min??te_min??tes".split("_"),h:"stundas_stund??m_stunda_stundas".split("_"),hh:"stundas_stund??m_stunda_stundas".split("_"),d:"dienas_dien??m_diena_dienas".split("_"),dd:"dienas_dien??m_diena_dienas".split("_"),M:"m??ne??a_m??ne??iem_m??nesis_m??ne??i".split("_"),MM:"m??ne??a_m??ne??iem_m??nesis_m??ne??i".split("_"),y:"gada_gadiem_gads_gadi".split("_"),yy:"gada_gadiem_gads_gadi".split("_")}),Yf=(uf.defineLocale("lv",{months:"janv??ris_febru??ris_marts_apr??lis_maijs_j??nijs_j??lijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort:"jan_feb_mar_apr_mai_j??n_j??l_aug_sep_okt_nov_dec".split("_"),weekdays:"sv??tdiena_pirmdiena_otrdiena_tre??diena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY.",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, HH:mm",LLLL:"YYYY. [gada] D. MMMM, dddd, HH:mm"},calendar:{sameDay:"[??odien pulksten] LT",nextDay:"[R??t pulksten] LT",nextWeek:"dddd [pulksten] LT",lastDay:"[Vakar pulksten] LT",lastWeek:"[Pag??ju????] dddd [pulksten] LT",sameElse:"L"},relativeTime:{future:"p??c %s",past:"pirms %s",s:ud,m:td,mm:sd,h:td,hh:sd,d:td,dd:sd,M:td,MM:sd,y:td,yy:sd},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),{words:{m:["jedan minut","jednog minuta"],mm:["minut","minuta","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mjesec","mjeseca","mjeseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(a,b){return 1===a?b[0]:a>=2&&4>=a?b[1]:b[2]},translate:function(a,b,c){var d=Yf.words[c];return 1===c.length?b?d[0]:d[1]:a+" "+Yf.correctGrammaticalCase(a,d)}}),Zf=(uf.defineLocale("me",{months:["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"],monthsShort:["jan.","feb.","mar.","apr.","maj","jun","jul","avg.","sep.","okt.","nov.","dec."],weekdays:["nedjelja","ponedjeljak","utorak","srijeda","??etvrtak","petak","subota"],weekdaysShort:["ned.","pon.","uto.","sri.","??et.","pet.","sub."],weekdaysMin:["ne","po","ut","sr","??e","pe","su"],longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sjutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[ju??e u] LT",lastWeek:function(){var a=["[pro??le] [nedjelje] [u] LT","[pro??log] [ponedjeljka] [u] LT","[pro??log] [utorka] [u] LT","[pro??le] [srijede] [u] LT","[pro??log] [??etvrtka] [u] LT","[pro??log] [petka] [u] LT","[pro??le] [subote] [u] LT"];return a[this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"nekoliko sekundi",m:Yf.translate,mm:Yf.translate,h:Yf.translate,hh:Yf.translate,d:"dan",dd:Yf.translate,M:"mjesec",MM:Yf.translate,y:"godinu",yy:Yf.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),uf.defineLocale("mk",{months:"??????????????_????????????????_????????_??????????_??????_????????_????????_????????????_??????????????????_????????????????_??????????????_????????????????".split("_"),monthsShort:"??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????".split("_"),weekdays:"????????????_????????????????????_??????????????_??????????_????????????????_??????????_????????????".split("_"),weekdaysShort:"??????_??????_??????_??????_??????_??????_??????".split("_"),weekdaysMin:"??e_??o_????_????_????_????_??a".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[?????????? ????] LT",nextDay:"[???????? ????] LT",nextWeek:"dddd [????] LT",lastDay:"[?????????? ????] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[???? ????????????????????] dddd [????] LT";case 1:case 2:case 4:case 5:return"[???? ????????????????????] dddd [????] LT"}},sameElse:"L"},relativeTime:{future:"?????????? %s",past:"???????? %s",s:"?????????????? ??????????????",m:"????????????",mm:"%d ????????????",h:"??????",hh:"%d ????????",d:"??????",dd:"%d ????????",M:"??????????",MM:"%d ????????????",y:"????????????",yy:"%d ????????????"},ordinalParse:/\d{1,2}-(????|????|????|????|????|????)/,ordinal:function(a){var b=a%10,c=a%100;return 0===a?a+"-????":0===c?a+"-????":c>10&&20>c?a+"-????":1===b?a+"-????":2===b?a+"-????":7===b||8===b?a+"-????":a+"-????"},week:{dow:1,doy:7}}),uf.defineLocale("ml",{months:"??????????????????_???????????????????????????_?????????????????????_??????????????????_????????????_?????????_????????????_????????????????????????_??????????????????????????????_?????????????????????_???????????????_??????????????????".split("_"),monthsShort:"?????????._??????????????????._?????????._???????????????._????????????_?????????_????????????._??????._?????????????????????._???????????????._?????????._????????????.".split("_"),weekdays:"????????????????????????_??????????????????????????????_???????????????????????????_????????????????????????_???????????????????????????_?????????????????????????????????_????????????????????????".split("_"),weekdaysShort:"????????????_??????????????????_???????????????_????????????_??????????????????_??????????????????_?????????".split("_"),weekdaysMin:"??????_??????_??????_??????_????????????_??????_???".split("_"),longDateFormat:{LT:"A h:mm -??????",LTS:"A h:mm:ss -??????",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm -??????",LLLL:"dddd, D MMMM YYYY, A h:mm -??????"},calendar:{sameDay:"[???????????????] LT",nextDay:"[????????????] LT",nextWeek:"dddd, LT",lastDay:"[??????????????????] LT",lastWeek:"[??????????????????] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ?????????????????????",past:"%s ???????????????",s:"????????? ???????????????????????????",m:"????????? ????????????????????????",mm:"%d ????????????????????????",h:"????????? ????????????????????????",hh:"%d ????????????????????????",d:"????????? ???????????????",dd:"%d ???????????????",M:"????????? ????????????",MM:"%d ????????????",y:"????????? ????????????",yy:"%d ????????????"},meridiemParse:/??????????????????|??????????????????|???????????? ?????????????????????|??????????????????????????????|??????????????????/i,isPM:function(a){return/^(???????????? ?????????????????????|??????????????????????????????|??????????????????)$/.test(a)},meridiem:function(a,b,c){return 4>a?"??????????????????":12>a?"??????????????????":17>a?"???????????? ?????????????????????":20>a?"??????????????????????????????":"??????????????????"}}),{1:"???",2:"???",3:"???",4:"???",5:"???",6:"???",7:"???",8:"???",9:"???",0:"???"}),$f={"???":"1","???":"2","???":"3","???":"4","???":"5","???":"6","???":"7","???":"8","???":"9","???":"0"},_f=(uf.defineLocale("mr",{months:"????????????????????????_??????????????????????????????_???????????????_??????????????????_??????_?????????_????????????_???????????????_????????????????????????_?????????????????????_???????????????????????????_?????????????????????".split("_"),monthsShort:"????????????._??????????????????._???????????????._???????????????._??????._?????????._????????????._??????._??????????????????._???????????????._?????????????????????._???????????????.".split("_"),weekdays:"??????????????????_??????????????????_?????????????????????_??????????????????_?????????????????????_????????????????????????_??????????????????".split("_"),weekdaysShort:"?????????_?????????_????????????_?????????_????????????_???????????????_?????????".split("_"),weekdaysMin:"???_??????_??????_??????_??????_??????_???".split("_"),longDateFormat:{LT:"A h:mm ???????????????",LTS:"A h:mm:ss ???????????????",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm ???????????????",LLLL:"dddd, D MMMM YYYY, A h:mm ???????????????"},calendar:{sameDay:"[??????] LT",nextDay:"[???????????????] LT",nextWeek:"dddd, LT",lastDay:"[?????????] LT",lastWeek:"[???????????????] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ????????????",past:"%s ??????????????????",s:"???????????????",m:"?????? ???????????????",mm:"%d ??????????????????",h:"?????? ?????????",hh:"%d ?????????",d:"?????? ????????????",dd:"%d ????????????",M:"?????? ???????????????",MM:"%d ???????????????",y:"?????? ????????????",yy:"%d ???????????????"},preparse:function(a){return a.replace(/[??????????????????????????????]/g,function(a){return $f[a]})},postformat:function(a){return a.replace(/\d/g,function(a){return Zf[a]})},meridiemParse:/??????????????????|???????????????|??????????????????|????????????????????????/,meridiemHour:function(a,b){return 12===a&&(a=0),"??????????????????"===b?4>a?a:a+12:"???????????????"===b?a:"??????????????????"===b?a>=10?a:a+12:"????????????????????????"===b?a+12:void 0},meridiem:function(a,b,c){return 4>a?"??????????????????":10>a?"???????????????":17>a?"??????????????????":20>a?"????????????????????????":"??????????????????"},week:{dow:0,doy:6}}),uf.defineLocale("ms-my",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(a,b){return 12===a&&(a=0),"pagi"===b?a:"tengahari"===b?a>=11?a:a+12:"petang"===b||"malam"===b?a+12:void 0},meridiem:function(a,b,c){return 11>a?"pagi":15>a?"tengahari":19>a?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",
        lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}}),uf.defineLocale("ms",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(a,b){return 12===a&&(a=0),"pagi"===b?a:"tengahari"===b?a>=11?a:a+12:"petang"===b||"malam"===b?a+12:void 0},meridiem:function(a,b,c){return 11>a?"pagi":15>a?"tengahari":19>a?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}}),{1:"???",2:"???",3:"???",4:"???",5:"???",6:"???",7:"???",8:"???",9:"???",0:"???"}),ag={"???":"1","???":"2","???":"3","???":"4","???":"5","???":"6","???":"7","???":"8","???":"9","???":"0"},bg=(uf.defineLocale("my",{months:"????????????????????????_??????????????????????????????_?????????_????????????_??????_????????????_?????????????????????_??????????????????_????????????????????????_??????????????????????????????_????????????????????????_?????????????????????".split("_"),monthsShort:"?????????_??????_?????????_?????????_??????_????????????_???????????????_??????_?????????_???????????????_?????????_??????".split("_"),weekdays:"???????????????????????????_?????????????????????_??????????????????_????????????????????????_????????????????????????_??????????????????_?????????".split("_"),weekdaysShort:"?????????_??????_??????_?????????_?????????_?????????_??????".split("_"),weekdaysMin:"?????????_??????_??????_?????????_?????????_?????????_??????".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[?????????.] LT [?????????]",nextDay:"[????????????????????????] LT [?????????]",nextWeek:"dddd LT [?????????]",lastDay:"[?????????.???] LT [?????????]",lastWeek:"[??????????????????????????????] dddd LT [?????????]",sameElse:"L"},relativeTime:{future:"?????????????????? %s ?????????",past:"?????????????????????????????? %s ???",s:"??????????????????.????????????????????????",m:"????????????????????????",mm:"%d ???????????????",h:"?????????????????????",hh:"%d ????????????",d:"??????????????????",dd:"%d ?????????",M:"????????????",MM:"%d ???",y:"?????????????????????",yy:"%d ????????????"},preparse:function(a){return a.replace(/[??????????????????????????????]/g,function(a){return ag[a]})},postformat:function(a){return a.replace(/\d/g,function(a){return _f[a]})},week:{dow:1,doy:4}}),uf.defineLocale("nb",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"s??ndag_mandag_tirsdag_onsdag_torsdag_fredag_l??rdag".split("_"),weekdaysShort:"s??n_man_tirs_ons_tors_fre_l??r".split("_"),weekdaysMin:"s??_ma_ti_on_to_fr_l??".split("_"),longDateFormat:{LT:"H.mm",LTS:"H.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H.mm",LLLL:"dddd D. MMMM YYYY [kl.] H.mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[i g??r kl.] LT",lastWeek:"[forrige] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"for %s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en m??ned",MM:"%d m??neder",y:"ett ??r",yy:"%d ??r"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),{1:"???",2:"???",3:"???",4:"???",5:"???",6:"???",7:"???",8:"???",9:"???",0:"???"}),cg={"???":"1","???":"2","???":"3","???":"4","???":"5","???":"6","???":"7","???":"8","???":"9","???":"0"},dg=(uf.defineLocale("ne",{months:"???????????????_???????????????????????????_???????????????_??????????????????_??????_?????????_???????????????_???????????????_??????????????????????????????_?????????????????????_????????????????????????_????????????????????????".split("_"),monthsShort:"??????._??????????????????._???????????????_???????????????._??????_?????????_???????????????._??????._???????????????._???????????????._????????????._????????????.".split("_"),weekdays:"??????????????????_??????????????????_????????????????????????_??????????????????_?????????????????????_????????????????????????_??????????????????".split("_"),weekdaysShort:"?????????._?????????._???????????????._?????????._????????????._???????????????._?????????.".split("_"),weekdaysMin:"??????._??????._?????????_??????._??????._??????._???.".split("_"),longDateFormat:{LT:"A?????? h:mm ?????????",LTS:"A?????? h:mm:ss ?????????",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A?????? h:mm ?????????",LLLL:"dddd, D MMMM YYYY, A?????? h:mm ?????????"},preparse:function(a){return a.replace(/[??????????????????????????????]/g,function(a){return cg[a]})},postformat:function(a){return a.replace(/\d/g,function(a){return bg[a]})},meridiemParse:/????????????|???????????????|??????????????????|??????????????????|????????????|????????????/,meridiemHour:function(a,b){return 12===a&&(a=0),"????????????"===b?3>a?a:a+12:"???????????????"===b?a:"??????????????????"===b?a>=10?a:a+12:"??????????????????"===b||"????????????"===b?a+12:void 0},meridiem:function(a,b,c){return 3>a?"????????????":10>a?"???????????????":15>a?"??????????????????":18>a?"??????????????????":20>a?"????????????":"????????????"},calendar:{sameDay:"[??????] LT",nextDay:"[????????????] LT",nextWeek:"[???????????????] dddd[,] LT",lastDay:"[????????????] LT",lastWeek:"[????????????] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%s??????",past:"%s ???????????????",s:"???????????? ?????????",m:"?????? ???????????????",mm:"%d ???????????????",h:"?????? ???????????????",hh:"%d ???????????????",d:"?????? ?????????",dd:"%d ?????????",M:"?????? ???????????????",MM:"%d ???????????????",y:"?????? ????????????",yy:"%d ????????????"},week:{dow:1,doy:7}}),"jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")),eg="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),fg=(uf.defineLocale("nl",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(a,b){return/-MMM-/.test(b)?eg[a.month()]:dg[a.month()]},weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"????n minuut",mm:"%d minuten",h:"????n uur",hh:"%d uur",d:"????n dag",dd:"%d dagen",M:"????n maand",MM:"%d maanden",y:"????n jaar",yy:"%d jaar"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(a){return a+(1===a||8===a||a>=20?"ste":"de")},week:{dow:1,doy:4}}),uf.defineLocale("nn",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sundag_m??ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),weekdaysShort:"sun_m??n_tys_ons_tor_fre_lau".split("_"),weekdaysMin:"su_m??_ty_on_to_fr_l??".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[I dag klokka] LT",nextDay:"[I morgon klokka] LT",nextWeek:"dddd [klokka] LT",lastDay:"[I g??r klokka] LT",lastWeek:"[F??reg??ande] dddd [klokka] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"for %s sidan",s:"nokre sekund",m:"eit minutt",mm:"%d minutt",h:"ein time",hh:"%d timar",d:"ein dag",dd:"%d dagar",M:"ein m??nad",MM:"%d m??nader",y:"eit ??r",yy:"%d ??r"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),"stycze??_luty_marzec_kwiecie??_maj_czerwiec_lipiec_sierpie??_wrzesie??_pa??dziernik_listopad_grudzie??".split("_")),gg="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze??nia_pa??dziernika_listopada_grudnia".split("_"),hg=(uf.defineLocale("pl",{months:function(a,b){return""===b?"("+gg[a.month()]+"|"+fg[a.month()]+")":/D MMMM/.test(b)?gg[a.month()]:fg[a.month()]},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa??_lis_gru".split("_"),weekdays:"niedziela_poniedzia??ek_wtorek_??roda_czwartek_pi??tek_sobota".split("_"),weekdaysShort:"nie_pon_wt_??r_czw_pt_sb".split("_"),weekdaysMin:"N_Pn_Wt_??r_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dzi?? o] LT",nextDay:"[Jutro o] LT",nextWeek:"[W] dddd [o] LT",lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zesz???? niedziel?? o] LT";case 3:return"[W zesz???? ??rod?? o] LT";case 6:return"[W zesz???? sobot?? o] LT";default:return"[W zesz??y] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:wd,mm:wd,h:wd,hh:wd,d:"1 dzie??",dd:"%d dni",M:"miesi??c",MM:wd,y:"rok",yy:wd},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),uf.defineLocale("pt-br",{months:"Janeiro_Fevereiro_Mar??o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingo_Segunda-Feira_Ter??a-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_S??bado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_S??b".split("_"),weekdaysMin:"Dom_2??_3??_4??_5??_6??_S??b".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [??s] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [??s] HH:mm"},calendar:{sameDay:"[Hoje ??s] LT",nextDay:"[Amanh?? ??s] LT",nextWeek:"dddd [??s] LT",lastDay:"[Ontem ??s] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[??ltimo] dddd [??s] LT":"[??ltima] dddd [??s] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"%s atr??s",s:"poucos segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um m??s",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinalParse:/\d{1,2}??/,ordinal:"%d??"}),uf.defineLocale("pt",{months:"Janeiro_Fevereiro_Mar??o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingo_Segunda-Feira_Ter??a-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_S??bado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_S??b".split("_"),weekdaysMin:"Dom_2??_3??_4??_5??_6??_S??b".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY HH:mm"},calendar:{sameDay:"[Hoje ??s] LT",nextDay:"[Amanh?? ??s] LT",nextWeek:"dddd [??s] LT",lastDay:"[Ontem ??s] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[??ltimo] dddd [??s] LT":"[??ltima] dddd [??s] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"h?? %s",s:"segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um m??s",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinalParse:/\d{1,2}??/,ordinal:"%d??",week:{dow:1,doy:4}}),uf.defineLocale("ro",{months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),monthsShort:"ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),weekdays:"duminic??_luni_mar??i_miercuri_joi_vineri_s??mb??t??".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_S??m".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_S??".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[m??ine la] LT",nextWeek:"dddd [la] LT",lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s ??n urm??",s:"c??teva secunde",m:"un minut",mm:xd,h:"o or??",hh:xd,d:"o zi",dd:xd,M:"o lun??",MM:xd,y:"un an",yy:xd},week:{dow:1,doy:7}}),uf.defineLocale("ru",{months:Ad,monthsShort:Bd,weekdays:Cd,weekdaysShort:"????_????_????_????_????_????_????".split("_"),weekdaysMin:"????_????_????_????_????_????_????".split("_"),monthsParse:[/^??????/i,/^??????/i,/^??????/i,/^??????/i,/^????[??|??]/i,/^??????/i,/^??????/i,/^??????/i,/^??????/i,/^??????/i,/^??????/i,/^??????/i],longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY ??.",LLL:"D MMMM YYYY ??., HH:mm",LLLL:"dddd, D MMMM YYYY ??., HH:mm"},calendar:{sameDay:"[?????????????? ??] LT",nextDay:"[???????????? ??] LT",lastDay:"[?????????? ??] LT",nextWeek:function(){return 2===this.day()?"[????] dddd [??] LT":"[??] dddd [??] LT"},lastWeek:function(a){if(a.week()===this.week())return 2===this.day()?"[????] dddd [??] LT":"[??] dddd [??] LT";switch(this.day()){case 0:return"[?? ??????????????] dddd [??] LT";case 1:case 2:case 4:return"[?? ??????????????] dddd [??] LT";case 3:case 5:case 6:return"[?? ??????????????] dddd [??] LT"}},sameElse:"L"},relativeTime:{future:"?????????? %s",past:"%s ??????????",s:"?????????????????? ????????????",m:zd,mm:zd,h:"??????",hh:zd,d:"????????",dd:zd,M:"??????????",MM:zd,y:"??????",yy:zd},meridiemParse:/????????|????????|??????|????????????/i,isPM:function(a){return/^(??????|????????????)$/.test(a)},meridiem:function(a,b,c){return 4>a?"????????":12>a?"????????":17>a?"??????":"????????????"},ordinalParse:/\d{1,2}-(??|????|??)/,ordinal:function(a,b){switch(b){case"M":case"d":case"DDD":return a+"-??";case"D":return a+"-????";case"w":case"W":return a+"-??";default:return a}},week:{dow:1,doy:7}}),uf.defineLocale("si",{months:"??????????????????_????????????????????????_??????????????????_????????????????????????_????????????_????????????_????????????_?????????????????????_?????????????????????????????????_????????????????????????_???????????????????????????_???????????????????????????".split("_"),monthsShort:"??????_?????????_????????????_?????????_????????????_????????????_????????????_?????????_????????????_?????????_????????????_????????????".split("_"),weekdays:"???????????????_???????????????_???????????????????????????_???????????????_??????????????????????????????????????????_????????????????????????_???????????????????????????".split("_"),weekdaysShort:"?????????_?????????_??????_?????????_???????????????_????????????_?????????".split("_"),weekdaysMin:"???_???_???_???_????????????_??????_??????".split("_"),longDateFormat:{LT:"a h:mm",LTS:"a h:mm:ss",L:"YYYY/MM/DD",LL:"YYYY MMMM D",LLL:"YYYY MMMM D, a h:mm",LLLL:"YYYY MMMM D [????????????] dddd, a h:mm:ss"},calendar:{sameDay:"[??????] LT[???]",nextDay:"[?????????] LT[???]",nextWeek:"dddd LT[???]",lastDay:"[?????????] LT[???]",lastWeek:"[??????????????????] dddd LT[???]",sameElse:"L"},relativeTime:{future:"%s????????????",past:"%s?????? ?????????",s:"??????????????? ??????????????????",m:"???????????????????????????",mm:"???????????????????????? %d",h:"?????????",hh:"????????? %d",d:"????????????",dd:"????????? %d",M:"????????????",MM:"????????? %d",y:"?????????",yy:"????????? %d"},ordinalParse:/\d{1,2} ????????????/,ordinal:function(a){return a+" ????????????"},meridiem:function(a,b,c){return a>11?c?"???.???.":"????????? ?????????":c?"??????.???.":"????????? ?????????"}}),"janu??r_febru??r_marec_apr??l_m??j_j??n_j??l_august_september_okt??ber_november_december".split("_")),ig="jan_feb_mar_apr_m??j_j??n_j??l_aug_sep_okt_nov_dec".split("_"),jg=(uf.defineLocale("sk",{months:hg,monthsShort:ig,monthsParse:function(a,b){var c,d=[];for(c=0;12>c;c++)d[c]=new RegExp("^"+a[c]+"$|^"+b[c]+"$","i");return d}(hg,ig),weekdays:"nede??a_pondelok_utorok_streda_??tvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_??t_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_??t_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nede??u o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo ??tvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[v??era o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minul?? nede??u o] LT";case 1:case 2:return"[minul??] dddd [o] LT";case 3:return"[minul?? stredu o] LT";case 4:case 5:return"[minul??] dddd [o] LT";case 6:return"[minul?? sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:Ed,m:Ed,mm:Ed,h:Ed,hh:Ed,d:Ed,dd:Ed,M:Ed,MM:Ed,y:Ed,yy:Ed},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),uf.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),weekdays:"nedelja_ponedeljek_torek_sreda_??etrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._??et._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_??e_pe_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"}},lastDay:"[v??eraj ob] LT",lastWeek:function(){switch(this.day()){case 0:return"[prej??njo] [nedeljo] [ob] LT";case 3:return"[prej??njo] [sredo] [ob] LT";case 6:return"[prej??njo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[prej??nji] dddd [ob] LT"}},sameElse:"L"},relativeTime:{future:"??ez %s",past:"pred %s",s:Fd,m:Fd,mm:Fd,h:Fd,hh:Fd,d:Fd,dd:Fd,M:Fd,MM:Fd,y:Fd,yy:Fd},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),uf.defineLocale("sq",{months:"Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_N??ntor_Dhjetor".split("_"),monthsShort:"Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_N??n_Dhj".split("_"),weekdays:"E Diel_E H??n??_E Mart??_E M??rkur??_E Enjte_E Premte_E Shtun??".split("_"),weekdaysShort:"Die_H??n_Mar_M??r_Enj_Pre_Sht".split("_"),weekdaysMin:"D_H_Ma_M??_E_P_Sh".split("_"),meridiemParse:/PD|MD/,isPM:function(a){return"M"===a.charAt(0)},meridiem:function(a,b,c){return 12>a?"PD":"MD"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Sot n??] LT",nextDay:"[Nes??r n??] LT",nextWeek:"dddd [n??] LT",lastDay:"[Dje n??] LT",lastWeek:"dddd [e kaluar n??] LT",sameElse:"L"},relativeTime:{future:"n?? %s",past:"%s m?? par??",s:"disa sekonda",m:"nj?? minut??",mm:"%d minuta",h:"nj?? or??",hh:"%d or??",d:"nj?? dit??",dd:"%d dit??",M:"nj?? muaj",MM:"%d muaj",y:"nj?? vit",yy:"%d vite"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),{words:{m:["?????????? ??????????","?????????? ????????????"],mm:["??????????","????????????","????????????"],h:["?????????? ??????","???????????? ????????"],hh:["??????","????????","????????"],dd:["??????","????????","????????"],MM:["??????????","????????????","????????????"],yy:["????????????","????????????","????????????"]},correctGrammaticalCase:function(a,b){return 1===a?b[0]:a>=2&&4>=a?b[1]:b[2]},translate:function(a,b,c){var d=jg.words[c];return 1===c.length?b?d[0]:d[1]:a+" "+jg.correctGrammaticalCase(a,d)}}),kg=(uf.defineLocale("sr-cyrl",{months:["????????????","??????????????","????????","??????????","??????","??????","??????","????????????","??????????????????","??????????????","????????????????","????????????????"],monthsShort:["??????.","??????.","??????.","??????.","??????","??????","??????","??????.","??????.","??????.","??????.","??????."],weekdays:["????????????","??????????????????","????????????","??????????","????????????????","??????????","????????????"],weekdaysShort:["??????.","??????.","??????.","??????.","??????.","??????.","??????."],weekdaysMin:["????","????","????","????","????","????","????"],longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[?????????? ??] LT",nextDay:"[?????????? ??] LT",nextWeek:function(){switch(this.day()){case 0:return"[??] [????????????] [??] LT";case 3:return"[??] [??????????] [??] LT";case 6:return"[??] [????????????] [??] LT";case 1:case 2:case 4:case 5:return"[??] dddd [??] LT"}},lastDay:"[???????? ??] LT",lastWeek:function(){var a=["[????????????] [????????????] [??] LT","[??????????????] [??????????????????] [??] LT","[??????????????] [????????????] [??] LT","[????????????] [??????????] [??] LT","[??????????????] [????????????????] [??] LT","[??????????????] [??????????] [??] LT","[????????????] [????????????] [??] LT"];return a[this.day()]},sameElse:"L"},relativeTime:{future:"???? %s",past:"?????? %s",s:"???????????????? ??????????????",m:jg.translate,mm:jg.translate,h:jg.translate,hh:jg.translate,d:"??????",dd:jg.translate,M:"??????????",MM:jg.translate,y:"????????????",yy:jg.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),{words:{m:["jedan minut","jedne minute"],mm:["minut","minute","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mesec","meseca","meseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(a,b){return 1===a?b[0]:a>=2&&4>=a?b[1]:b[2]},translate:function(a,b,c){var d=kg.words[c];return 1===c.length?b?d[0]:d[1]:a+" "+kg.correctGrammaticalCase(a,d)}}),lg=(uf.defineLocale("sr",{months:["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"],monthsShort:["jan.","feb.","mar.","apr.","maj","jun","jul","avg.","sep.","okt.","nov.","dec."],weekdays:["nedelja","ponedeljak","utorak","sreda","??etvrtak","petak","subota"],weekdaysShort:["ned.","pon.","uto.","sre.","??et.","pet.","sub."],weekdaysMin:["ne","po","ut","sr","??e","pe","su"],longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedelju] [u] LT";case 3:return"[u] [sredu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[ju??e u] LT",lastWeek:function(){var a=["[pro??le] [nedelje] [u] LT","[pro??log] [ponedeljka] [u] LT","[pro??log] [utorka] [u] LT","[pro??le] [srede] [u] LT","[pro??log] [??etvrtka] [u] LT","[pro??log] [petka] [u] LT","[pro??le] [subote] [u] LT"];return a[this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",m:kg.translate,mm:kg.translate,h:kg.translate,hh:kg.translate,d:"dan",dd:kg.translate,M:"mesec",MM:kg.translate,y:"godinu",yy:kg.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),uf.defineLocale("sv",{months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"s??ndag_m??ndag_tisdag_onsdag_torsdag_fredag_l??rdag".split("_"),weekdaysShort:"s??n_m??n_tis_ons_tor_fre_l??r".split("_"),weekdaysMin:"s??_m??_ti_on_to_fr_l??".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Idag] LT",nextDay:"[Imorgon] LT",lastDay:"[Ig??r] LT",nextWeek:"[P??] dddd LT",lastWeek:"[I] dddd[s] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"f??r %s sedan",s:"n??gra sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en m??nad",MM:"%d m??nader",y:"ett ??r",yy:"%d ??r"},ordinalParse:/\d{1,2}(e|a)/,ordinal:function(a){var b=a%10,c=1===~~(a%100/10)?"e":1===b?"a":2===b?"a":"e";return a+c},week:{dow:1,doy:4}}),uf.defineLocale("ta",{months:"???????????????_????????????????????????_??????????????????_??????????????????_??????_????????????_????????????_??????????????????_?????????????????????????????????_???????????????????????????_?????????????????????_????????????????????????".split("_"),monthsShort:"???????????????_????????????????????????_??????????????????_??????????????????_??????_????????????_????????????_??????????????????_?????????????????????????????????_???????????????????????????_?????????????????????_????????????????????????".split("_"),weekdays:"?????????????????????????????????????????????_????????????????????????????????????_???????????????????????????????????????_??????????????????????????????_????????????????????????????????????_???????????????????????????????????????_??????????????????????????????".split("_"),weekdaysShort:"??????????????????_?????????????????????_????????????????????????_???????????????_?????????????????????_??????????????????_?????????".split("_"),weekdaysMin:"??????_??????_??????_??????_??????_??????_???".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, HH:mm",LLLL:"dddd, D MMMM YYYY, HH:mm"},calendar:{sameDay:"[???????????????] LT",nextDay:"[????????????] LT",nextWeek:"dddd, LT",lastDay:"[??????????????????] LT",lastWeek:"[??????????????? ???????????????] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ?????????",past:"%s ????????????",s:"????????? ????????? ???????????????????????????",m:"????????? ?????????????????????",mm:"%d ??????????????????????????????",h:"????????? ????????? ???????????????",hh:"%d ????????? ???????????????",d:"????????? ????????????",dd:"%d ?????????????????????",M:"????????? ???????????????",MM:"%d ????????????????????????",y:"????????? ??????????????????",yy:"%d ????????????????????????"},ordinalParse:/\d{1,2}?????????/,ordinal:function(a){return a+"?????????"},meridiemParse:/???????????????|???????????????|????????????|?????????????????????|?????????????????????|????????????/,meridiem:function(a,b,c){return 2>a?" ???????????????":6>a?" ???????????????":10>a?" ????????????":14>a?" ?????????????????????":18>a?" ?????????????????????":22>a?" ????????????":" ???????????????"},meridiemHour:function(a,b){return 12===a&&(a=0),"???????????????"===b?2>a?a:a+12:"???????????????"===b||"????????????"===b?a:"?????????????????????"===b&&a>=10?a:a+12},week:{dow:0,doy:6}}),uf.defineLocale("th",{months:"??????????????????_??????????????????????????????_??????????????????_??????????????????_?????????????????????_????????????????????????_?????????????????????_?????????????????????_?????????????????????_??????????????????_???????????????????????????_?????????????????????".split("_"),monthsShort:"????????????_???????????????_????????????_????????????_???????????????_??????????????????_???????????????_???????????????_???????????????_????????????_?????????????????????_???????????????".split("_"),weekdays:"?????????????????????_??????????????????_??????????????????_?????????_????????????????????????_???????????????_???????????????".split("_"),weekdaysShort:"?????????????????????_??????????????????_??????????????????_?????????_???????????????_???????????????_???????????????".split("_"),weekdaysMin:"??????._???._???._???._??????._???._???.".split("_"),longDateFormat:{LT:"H ?????????????????? m ????????????",LTS:"H ?????????????????? m ???????????? s ??????????????????",L:"YYYY/MM/DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY ???????????? H ?????????????????? m ????????????",LLLL:"?????????dddd????????? D MMMM YYYY ???????????? H ?????????????????? m ????????????"},meridiemParse:/??????????????????????????????|??????????????????????????????/,isPM:function(a){return"??????????????????????????????"===a},meridiem:function(a,b,c){return 12>a?"??????????????????????????????":"??????????????????????????????"},calendar:{sameDay:"[?????????????????? ????????????] LT",nextDay:"[???????????????????????? ????????????] LT",nextWeek:"dddd[???????????? ????????????] LT",lastDay:"[????????????????????????????????? ????????????] LT",lastWeek:"[?????????]dddd[????????????????????? ????????????] LT",sameElse:"L"},relativeTime:{future:"????????? %s",past:"%s?????????????????????",s:"????????????????????????????????????",m:"1 ????????????",mm:"%d ????????????",h:"1 ?????????????????????",hh:"%d ?????????????????????",d:"1 ?????????",dd:"%d ?????????",M:"1 ???????????????",MM:"%d ???????????????",y:"1 ??????",yy:"%d ??????"}}),uf.defineLocale("tl-ph",{months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),weekdaysShort:"Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),weekdaysMin:"Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"MM/D/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY HH:mm",LLLL:"dddd, MMMM DD, YYYY HH:mm"},calendar:{sameDay:"[Ngayon sa] LT",nextDay:"[Bukas sa] LT",nextWeek:"dddd [sa] LT",lastDay:"[Kahapon sa] LT",lastWeek:"dddd [huling linggo] LT",sameElse:"L"},relativeTime:{future:"sa loob ng %s",past:"%s ang nakalipas",s:"ilang segundo",m:"isang minuto",mm:"%d minuto",h:"isang oras",hh:"%d oras",d:"isang araw",dd:"%d araw",M:"isang buwan",MM:"%d buwan",y:"isang taon",yy:"%d taon"},ordinalParse:/\d{1,2}/,ordinal:function(a){return a},week:{dow:1,doy:4}}),{1:"'inci",5:"'inci",8:"'inci",70:"'inci",80:"'inci",2:"'nci",7:"'nci",20:"'nci",50:"'nci",3:"'??nc??",4:"'??nc??",100:"'??nc??",6:"'nc??",9:"'uncu",10:"'uncu",30:"'uncu",60:"'??nc??",90:"'??nc??"}),mg=(uf.defineLocale("tr",{months:"Ocak_??ubat_Mart_Nisan_May??s_Haziran_Temmuz_A??ustos_Eyl??l_Ekim_Kas??m_Aral??k".split("_"),monthsShort:"Oca_??ub_Mar_Nis_May_Haz_Tem_A??u_Eyl_Eki_Kas_Ara".split("_"),weekdays:"Pazar_Pazartesi_Sal??_??ar??amba_Per??embe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pts_Sal_??ar_Per_Cum_Cts".split("_"),weekdaysMin:"Pz_Pt_Sa_??a_Pe_Cu_Ct".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bug??n saat] LT",nextDay:"[yar??n saat] LT",nextWeek:"[haftaya] dddd [saat] LT",lastDay:"[d??n] LT",lastWeek:"[ge??en hafta] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s ??nce",s:"birka?? saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir g??n",dd:"%d g??n",M:"bir ay",MM:"%d ay",y:"bir y??l",yy:"%d y??l"},ordinalParse:/\d{1,2}'(inci|nci|??nc??|nc??|uncu|??nc??)/,ordinal:function(a){if(0===a)return a+"'??nc??";var b=a%10,c=a%100-b,d=a>=100?100:null;return a+(lg[b]||lg[c]||lg[d])},week:{dow:1,doy:7}}),uf.defineLocale("tzl",{months:"Januar_Fevraglh_Mar??_Avr??u_Mai_G??n_Julia_Guscht_Setemvar_Listop??ts_Noemvar_Zecemvar".split("_"),monthsShort:"Jan_Fev_Mar_Avr_Mai_G??n_Jul_Gus_Set_Lis_Noe_Zec".split("_"),weekdays:"S??ladi_L??ne??i_Maitzi_M??rcuri_Xh??adi_Vi??ner??i_S??turi".split("_"),weekdaysShort:"S??l_L??n_Mai_M??r_Xh??_Vi??_S??t".split("_"),weekdaysMin:"S??_L??_Ma_M??_Xh_Vi_S??".split("_"),longDateFormat:{LT:"HH.mm",LTS:"LT.ss",L:"DD.MM.YYYY",LL:"D. MMMM [dallas] YYYY",LLL:"D. MMMM [dallas] YYYY LT",LLLL:"dddd, [li] D. MMMM [dallas] YYYY LT"},meridiem:function(a,b,c){return a>11?c?"d'o":"D'O":c?"d'a":"D'A"},calendar:{sameDay:"[oxhi ??] LT",nextDay:"[dem?? ??] LT",nextWeek:"dddd [??] LT",lastDay:"[ieiri ??] LT",lastWeek:"[s??r el] dddd [lasteu ??] LT",sameElse:"L"},relativeTime:{future:"osprei %s",past:"ja%s",s:Gd,m:Gd,mm:Gd,h:Gd,hh:Gd,d:Gd,dd:Gd,M:Gd,MM:Gd,y:Gd,yy:Gd},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),uf.defineLocale("tzm-latn",{months:"innayr_br??ayr??_mar??s??_ibrir_mayyw_ywnyw_ywlywz_??w??t_??wtanbir_kt??wbr??_nwwanbir_dwjnbir".split("_"),monthsShort:"innayr_br??ayr??_mar??s??_ibrir_mayyw_ywnyw_ywlywz_??w??t_??wtanbir_kt??wbr??_nwwanbir_dwjnbir".split("_"),weekdays:"asamas_aynas_asinas_akras_akwas_asimwas_asi???yas".split("_"),weekdaysShort:"asamas_aynas_asinas_akras_akwas_asimwas_asi???yas".split("_"),weekdaysMin:"asamas_aynas_asinas_akras_akwas_asimwas_asi???yas".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[asdkh g] LT",nextDay:"[aska g] LT",nextWeek:"dddd [g] LT",lastDay:"[assant g] LT",lastWeek:"dddd [g] LT",sameElse:"L"},relativeTime:{future:"dadkh s yan %s",past:"yan %s",s:"imik",m:"minu???",mm:"%d minu???",h:"sa??a",hh:"%d tassa??in",d:"ass",dd:"%d ossan",M:"ayowr",MM:"%d iyyirn",y:"asgas",yy:"%d isgasn"},week:{dow:6,doy:12}}),uf.defineLocale("tzm",{months:"??????????????????_???????????????_????????????_???????????????_???????????????_???????????????_??????????????????_????????????_????????????????????????_???????????????_????????????????????????_?????????????????????".split("_"),monthsShort:"??????????????????_???????????????_????????????_???????????????_???????????????_???????????????_??????????????????_????????????_????????????????????????_???????????????_????????????????????????_?????????????????????".split("_"),weekdays:"??????????????????_???????????????_??????????????????_???????????????_???????????????_?????????????????????_?????????????????????".split("_"),weekdaysShort:"??????????????????_???????????????_??????????????????_???????????????_???????????????_?????????????????????_?????????????????????".split("_"),weekdaysMin:"??????????????????_???????????????_??????????????????_???????????????_???????????????_?????????????????????_?????????????????????".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[???????????? ???] LT",nextDay:"[???????????? ???] LT",nextWeek:"dddd [???] LT",lastDay:"[??????????????? ???] LT",lastWeek:"dddd [???] LT",sameElse:"L"},relativeTime:{future:"???????????? ??? ????????? %s",past:"????????? %s",s:"????????????",m:"???????????????",mm:"%d ???????????????",h:"????????????",hh:"%d ????????????????????????",d:"?????????",dd:"%d o????????????",M:"??????o??????",MM:"%d ??????????????????",y:"???????????????",yy:"%d ??????????????????"},week:{dow:6,doy:12}}),uf.defineLocale("uk",{months:Jd,monthsShort:"??????_??????_??????_????????_????????_????????_??????_????????_??????_????????_????????_????????".split("_"),weekdays:Kd,weekdaysShort:"????_????_????_????_????_????_????".split("_"),weekdaysMin:"????_????_????_????_????_????_????".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY ??.",LLL:"D MMMM YYYY ??., HH:mm",LLLL:"dddd, D MMMM YYYY ??., HH:mm"},calendar:{sameDay:Ld("[???????????????? "),nextDay:Ld("[???????????? "),lastDay:Ld("[?????????? "),nextWeek:Ld("[??] dddd ["),lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return Ld("[??????????????] dddd [").call(this);case 1:case 2:case 4:return Ld("[????????????????] dddd [").call(this)}},sameElse:"L"},relativeTime:{future:"???? %s",past:"%s ????????",s:"???????????????? ????????????",m:Id,mm:Id,h:"????????????",hh:Id,d:"????????",dd:Id,M:"????????????",MM:Id,y:"??????",yy:Id},meridiemParse:/????????|??????????|??????|????????????/,isPM:function(a){return/^(??????|????????????)$/.test(a)},meridiem:function(a,b,c){return 4>a?"????????":12>a?"??????????":17>a?"??????":"????????????"},ordinalParse:/\d{1,2}-(??|????)/,ordinal:function(a,b){switch(b){case"M":case"d":case"DDD":case"w":case"W":return a+"-??";case"D":return a+"-????";default:return a}},week:{dow:1,doy:7}}),uf.defineLocale("uz",{months:"????????????_??????????????_????????_????????????_??????_????????_????????_????????????_????????????????_??????????????_????????????_??????????????".split("_"),monthsShort:"??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????".split("_"),weekdays:"??????????????_??????????????_??????????????_????????????????_????????????????_????????_??????????".split("_"),weekdaysShort:"??????_??????_??????_??????_??????_??????_??????".split("_"),weekdaysMin:"????_????_????_????_????_????_????".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},calendar:{sameDay:"[?????????? ????????] LT [????]",nextDay:"[????????????] LT [????]",nextWeek:"dddd [???????? ????????] LT [????]",lastDay:"[???????? ????????] LT [????]",lastWeek:"[??????????] dddd [???????? ????????] LT [????]",sameElse:"L"},relativeTime:{future:"???????? %s ??????????",past:"?????? ???????? %s ??????????",s:"????????????",m:"?????? ????????????",mm:"%d ????????????",h:"?????? ????????",hh:"%d ????????",d:"?????? ??????",dd:"%d ??????",M:"?????? ????",MM:"%d ????",y:"?????? ??????",yy:"%d ??????"},week:{dow:1,doy:7}}),uf.defineLocale("vi",{months:"th??ng 1_th??ng 2_th??ng 3_th??ng 4_th??ng 5_th??ng 6_th??ng 7_th??ng 8_th??ng 9_th??ng 10_th??ng 11_th??ng 12".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),weekdays:"ch??? nh???t_th??? hai_th??? ba_th??? t??_th??? n??m_th??? s??u_th??? b???y".split("_"),weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [n??m] YYYY",LLL:"D MMMM [n??m] YYYY HH:mm",LLLL:"dddd, D MMMM [n??m] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",
        llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[H??m nay l??c] LT",nextDay:"[Ng??y mai l??c] LT",nextWeek:"dddd [tu???n t???i l??c] LT",lastDay:"[H??m qua l??c] LT",lastWeek:"dddd [tu???n r???i l??c] LT",sameElse:"L"},relativeTime:{future:"%s t???i",past:"%s tr?????c",s:"v??i gi??y",m:"m???t ph??t",mm:"%d ph??t",h:"m???t gi???",hh:"%d gi???",d:"m???t ng??y",dd:"%d ng??y",M:"m???t th??ng",MM:"%d th??ng",y:"m???t n??m",yy:"%d n??m"},ordinalParse:/\d{1,2}/,ordinal:function(a){return a},week:{dow:1,doy:4}}),uf.defineLocale("zh-cn",{months:"??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_?????????_?????????".split("_"),monthsShort:"1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???".split("_"),weekdays:"?????????_?????????_?????????_?????????_?????????_?????????_?????????".split("_"),weekdaysShort:"??????_??????_??????_??????_??????_??????_??????".split("_"),weekdaysMin:"???_???_???_???_???_???_???".split("_"),longDateFormat:{LT:"Ah???mm???",LTS:"Ah???m???s???",L:"YYYY-MM-DD",LL:"YYYY???MMMD???",LLL:"YYYY???MMMD???Ah???mm???",LLLL:"YYYY???MMMD???ddddAh???mm???",l:"YYYY-MM-DD",ll:"YYYY???MMMD???",lll:"YYYY???MMMD???Ah???mm???",llll:"YYYY???MMMD???ddddAh???mm???"},meridiemParse:/??????|??????|??????|??????|??????|??????/,meridiemHour:function(a,b){return 12===a&&(a=0),"??????"===b||"??????"===b||"??????"===b?a:"??????"===b||"??????"===b?a+12:a>=11?a:a+12},meridiem:function(a,b,c){var d=100*a+b;return 600>d?"??????":900>d?"??????":1130>d?"??????":1230>d?"??????":1800>d?"??????":"??????"},calendar:{sameDay:function(){return 0===this.minutes()?"[??????]Ah[??????]":"[??????]LT"},nextDay:function(){return 0===this.minutes()?"[??????]Ah[??????]":"[??????]LT"},lastDay:function(){return 0===this.minutes()?"[??????]Ah[??????]":"[??????]LT"},nextWeek:function(){var a,b;return a=uf().startOf("week"),b=this.unix()-a.unix()>=604800?"[???]":"[???]",0===this.minutes()?b+"dddAh??????":b+"dddAh???mm"},lastWeek:function(){var a,b;return a=uf().startOf("week"),b=this.unix()<a.unix()?"[???]":"[???]",0===this.minutes()?b+"dddAh??????":b+"dddAh???mm"},sameElse:"LL"},ordinalParse:/\d{1,2}(???|???|???)/,ordinal:function(a,b){switch(b){case"d":case"D":case"DDD":return a+"???";case"M":return a+"???";case"w":case"W":return a+"???";default:return a}},relativeTime:{future:"%s???",past:"%s???",s:"??????",m:"1 ??????",mm:"%d ??????",h:"1 ??????",hh:"%d ??????",d:"1 ???",dd:"%d ???",M:"1 ??????",MM:"%d ??????",y:"1 ???",yy:"%d ???"},week:{dow:1,doy:4}}),uf.defineLocale("zh-tw",{months:"??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_?????????_?????????".split("_"),monthsShort:"1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???".split("_"),weekdays:"?????????_?????????_?????????_?????????_?????????_?????????_?????????".split("_"),weekdaysShort:"??????_??????_??????_??????_??????_??????_??????".split("_"),weekdaysMin:"???_???_???_???_???_???_???".split("_"),longDateFormat:{LT:"Ah???mm???",LTS:"Ah???m???s???",L:"YYYY???MMMD???",LL:"YYYY???MMMD???",LLL:"YYYY???MMMD???Ah???mm???",LLLL:"YYYY???MMMD???ddddAh???mm???",l:"YYYY???MMMD???",ll:"YYYY???MMMD???",lll:"YYYY???MMMD???Ah???mm???",llll:"YYYY???MMMD???ddddAh???mm???"},meridiemParse:/??????|??????|??????|??????|??????/,meridiemHour:function(a,b){return 12===a&&(a=0),"??????"===b||"??????"===b?a:"??????"===b?a>=11?a:a+12:"??????"===b||"??????"===b?a+12:void 0},meridiem:function(a,b,c){var d=100*a+b;return 900>d?"??????":1130>d?"??????":1230>d?"??????":1800>d?"??????":"??????"},calendar:{sameDay:"[??????]LT",nextDay:"[??????]LT",nextWeek:"[???]ddddLT",lastDay:"[??????]LT",lastWeek:"[???]ddddLT",sameElse:"L"},ordinalParse:/\d{1,2}(???|???|???)/,ordinal:function(a,b){switch(b){case"d":case"D":case"DDD":return a+"???";case"M":return a+"???";case"w":case"W":return a+"???";default:return a}},relativeTime:{future:"%s???",past:"%s???",s:"??????",m:"?????????",mm:"%d??????",h:"?????????",hh:"%d??????",d:"??????",dd:"%d???",M:"?????????",MM:"%d??????",y:"??????",yy:"%d???"}}),uf);return mg.locale("en"),mg});