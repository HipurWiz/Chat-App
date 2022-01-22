!function(e,r,n){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function t(e,r,n,t){return new(n||(n=Promise))((function(u,o){function c(e){try{i(t.next(e))}catch(e){o(e)}}function a(e){try{i(t.throw(e))}catch(e){o(e)}}function i(e){var r;e.done?u(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(c,a)}i((t=t.apply(e,r||[])).next())}))}function u(e,r){var n,t,u,o,c={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,t&&(u=2&o[0]?t.return:o[0]?t.throw||((u=t.return)&&u.call(t),0):t.next)&&!(u=u.call(t,o[1])).done)return u;switch(t=0,u&&(o=[2&o[0],u.value]),o[0]){case 0:case 1:u=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,t=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!(u=c.trys,(u=u.length>0&&u[u.length-1])||6!==o[0]&&2!==o[0])){c=0;continue}if(3===o[0]&&(!u||o[1]>u[0]&&o[1]<u[3])){c.label=o[1];break}if(6===o[0]&&c.label<u[1]){c.label=u[1],u=o;break}if(u&&c.label<u[2]){c.label=u[2],c.ops.push(o);break}u[2]&&c.ops.pop(),c.trys.pop();continue}o=r.call(e,c)}catch(e){o=[6,e],t=0}finally{n=u=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var o=function(){return o=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var u in r=arguments[n])Object.prototype.hasOwnProperty.call(r,u)&&(e[u]=r[u]);return e},o.apply(this,arguments)},c=function(e){return{loading:null==e,value:e}},a=function(e){var r=e?e():void 0,t=n.useReducer((function(e,r){switch(r.type){case"error":return o(o({},e),{error:r.error,loading:!1,value:void 0});case"reset":return c(r.defaultValue);case"value":return o(o({},e),{error:void 0,loading:!1,value:r.value});default:return e}}),c(r)),u=t[0],a=t[1],i=function(){var r=e?e():void 0;a({type:"reset",defaultValue:r})},s=function(e){a({type:"error",error:e})},l=function(e){a({type:"value",value:e})};return n.useMemo((function(){return{error:u.error,loading:u.loading,reset:i,setError:s,setValue:l,value:u.value}}),[u.error,u.loading,i,s,l,u.value])},i=function(e,r,t){var u=n.useRef(e);return n.useEffect((function(){r(e,u.current)||(u.current=e,t&&t())})),u},s=function(e,n){var t=!e&&!n,u=!!e&&!!n&&r.refEqual(e,n);return t||u},l=function(e,r){return i(e,s,r)},f=function(e,n){var t=!e&&!n,u=!!e&&!!n&&r.queryEqual(e,n);return t||u},v=function(e,r){return i(e,f,r)},d=function(e,t){var u=a(),o=u.error,c=u.loading,i=u.reset,s=u.setError,l=u.setValue,f=u.value,d=v(e,i);n.useEffect((function(){if(d.current){var e=(null==t?void 0:t.snapshotListenOptions)?r.onSnapshot(d.current,t.snapshotListenOptions,l,s):r.onSnapshot(d.current,l,s);return function(){e()}}l(void 0)}),[d.current,t]);var p=[f,c,o];return n.useMemo((function(){return p}),p)},p=function(e,r){var o=a(),c=o.error,i=o.loading,s=o.reset,l=o.setError,f=o.setValue,d=o.value,p=!0,h=v(e,s),m=function(e,r){return t(void 0,void 0,void 0,(function(){var n,t,o;return u(this,(function(u){switch(u.label){case 0:if(!e)return f(void 0),[2];n=y(null==r?void 0:r.getOptions),u.label=1;case 1:return u.trys.push([1,3,,4]),[4,n(e)];case 2:return t=u.sent(),p&&f(t),[3,4];case 3:return o=u.sent(),p&&l(o),[3,4];case 4:return[2]}}))}))};n.useEffect((function(){return m(h.current,r),function(){p=!1}}),[h.current,r]);var b=[d,i,c,function(){return m(h.current,r)}];return n.useMemo((function(){return b}),b)},h=function(e,r){return n.useMemo((function(){return null==e?void 0:e.docs.map((function(e){return e.data(r)}))}),[e,r])},y=function(e){switch((void 0===e?{source:"default"}:e).source){default:case"default":return r.getDocs;case"cache":return r.getDocsFromCache;case"server":return r.getDocsFromServer}},m=function(e,t){var u=a(),o=u.error,c=u.loading,i=u.reset,s=u.setError,f=u.setValue,v=u.value,d=l(e,i);n.useEffect((function(){if(d.current){var e=(null==t?void 0:t.snapshotListenOptions)?r.onSnapshot(d.current,t.snapshotListenOptions,f,s):r.onSnapshot(d.current,f,s);return function(){e()}}f(void 0)}),[d.current,t]);var p=[v,c,o];return n.useMemo((function(){return p}),p)},b=function(e,r){var o=a(),c=o.error,i=o.loading,s=o.reset,f=o.setError,v=o.setValue,d=o.value,p=!0,h=l(e,s),y=function(e,r){return t(void 0,void 0,void 0,(function(){var n,t,o;return u(this,(function(u){switch(u.label){case 0:if(!e)return v(void 0),[2];n=g(null==r?void 0:r.getOptions),u.label=1;case 1:return u.trys.push([1,3,,4]),[4,n(e)];case 2:return t=u.sent(),p&&v(t),[3,4];case 3:return o=u.sent(),p&&f(o),[3,4];case 4:return[2]}}))}))};n.useEffect((function(){if(h.current)return y(h.current,r),function(){p=!1};v(void 0)}),[h.current,r]);var m=[d,i,c,function(){return y(h.current,r)}];return n.useMemo((function(){return m}),m)},g=function(e){switch((void 0===e?{source:"default"}:e).source){default:case"default":return r.getDoc;case"cache":return r.getDocFromCache;case"server":return r.getDocFromServer}};e.useCollection=d,e.useCollectionData=function(e,r){var t=null==r?void 0:r.snapshotOptions,u=d(e,r),o=u[0],c=u[1],a=u[2],i=[h(o,t),c,a,o];return n.useMemo((function(){return i}),i)},e.useCollectionDataOnce=function(e,r){var t=null==r?void 0:r.snapshotOptions,u=p(e,r),o=u[0],c=u[1],a=u[2],i=u[3],s=[h(o,t),c,a,o,i];return n.useMemo((function(){return s}),s)},e.useCollectionOnce=p,e.useDocument=m,e.useDocumentData=function(e,r){var t=null==r?void 0:r.snapshotOptions,u=m(e,r),o=u[0],c=u[1],a=u[2],i=[n.useMemo((function(){return null==o?void 0:o.data(t)}),[o,t]),c,a,o];return n.useMemo((function(){return i}),i)},e.useDocumentDataOnce=function(e,r){var t=null==r?void 0:r.snapshotOptions,u=b(e,r),o=u[0],c=u[1],a=u[2],i=u[3],s=[n.useMemo((function(){return null==o?void 0:o.data(t)}),[o,t]),c,a,o,i];return n.useMemo((function(){return s}),s)},e.useDocumentOnce=b,Object.defineProperty(e,"__esModule",{value:!0})}(this["react-firebase-hooks"]=this["react-firebase-hooks"]||{},firestore,react);
//# sourceMappingURL=react-firebase-hooks-firestore.js.map
