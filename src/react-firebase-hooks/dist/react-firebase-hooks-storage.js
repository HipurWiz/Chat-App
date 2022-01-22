!function(e,r,t){"use strict";
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
    ***************************************************************************** */var n=function(){return n=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},n.apply(this,arguments)},o=function(e){return{loading:null==e,value:e}},u=function(e){var r=e?e():void 0,u=t.useReducer((function(e,r){switch(r.type){case"error":return n(n({},e),{error:r.error,loading:!1,value:void 0});case"reset":return o(r.defaultValue);case"value":return n(n({},e),{error:void 0,loading:!1,value:r.value});default:return e}}),o(r)),a=u[0],i=u[1],c=function(){var r=e?e():void 0;i({type:"reset",defaultValue:r})},l=function(e){i({type:"error",error:e})},f=function(e){i({type:"value",value:e})};return t.useMemo((function(){return{error:a.error,loading:a.loading,reset:c,setError:l,setValue:f,value:a.value}}),[a.error,a.loading,c,l,f,a.value])},a=function(e,r){var t=!e&&!r,n=!!e&&!!r&&e.fullPath===r.fullPath;return t||n};
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
    ***************************************************************************** */
function i(e,r,t,n){return new(t||(t=Promise))((function(o,u){function a(e){try{c(n.next(e))}catch(e){u(e)}}function i(e){try{c(n.throw(e))}catch(e){u(e)}}function c(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(a,i)}c((n=n.apply(e,r||[])).next())}))}function c(e,r){var t,n,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,n=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=r.call(e,a)}catch(e){u=[6,e],n=0}finally{t=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}}e.useDownloadURL=function(e){var n=u(),o=n.error,i=n.loading,c=n.reset,l=n.setError,f=n.setValue,s=n.value,v=function(e,r,n){var o=t.useRef(e);return t.useEffect((function(){r(e,o.current)||(o.current=e,n&&n())})),o}(e,a,c);return t.useEffect((function(){v.current?r.getDownloadURL(v.current).then(f).catch(l):f(void 0)}),[v.current]),[s,i,o]},e.useUploadFile=function(){var e=t.useState(),n=e[0],o=e[1],u=t.useState(!1),a=u[0],l=u[1],f=t.useState(),s=f[0],v=f[1],d=[function(e,t,n){return i(void 0,void 0,void 0,(function(){return c(this,(function(u){return[2,new Promise((function(u,a){l(!0);var i=r.uploadBytesResumable(e,t,n);i.on("state_changed",(function(e){v(e)}),(function(e){l(!1),o(e),u(void 0)}),(function(){l(!1),v(void 0),u({metadata:i.snapshot.metadata,ref:i.snapshot.ref})}))}))]}))}))},a,s,n];return t.useMemo((function(){return d}),d)},Object.defineProperty(e,"__esModule",{value:!0})}(this["react-firebase-hooks"]=this["react-firebase-hooks"]||{},storage,react);
//# sourceMappingURL=react-firebase-hooks-storage.js.map