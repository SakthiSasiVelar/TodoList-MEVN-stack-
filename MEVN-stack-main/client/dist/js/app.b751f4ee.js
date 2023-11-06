(function(){"use strict";var t={6125:function(t,e,o){var n=o(144),s=function(){var t=this,e=t._self._c;return e("router-view")},a=[],r=o(1001),i={},c=(0,r.Z)(i,s,a,!1,null,null,null),l=c.exports,u=o(8345),d=o(7359),f=o(998),p=o(3497),h=o(6190),m=o(9582),v=o(4886),b=o(266),Z=o(9256),g=o(1389),k=o(9930),x=o(1267),y=o(5125),P=o(4324),_=o(3201),w=o(3059),D=o(1713),O=o(9258),C=o(3687),j=o(7808),S=o(7953),T=o(3130),A=function(){var t=this,e=t._self._c;return e(f.Z,{attrs:{id:"inspire"}},[e("br"),e("br"),e(w.Z,[e(Z.Z,{staticClass:"scroll-y",attrs:{fluid:""}},[e(D.Z,{attrs:{align:"center",justify:"center"}},[e(b.Z,{attrs:{cols:"8",md:"8"}},[e(m.Z,{staticClass:"ml-5 mr-5"},[e(p.Z,{attrs:{dark:"",color:"#2C3A47"}},[e(h.Z,{attrs:{icon:""}},[e(P.Z,[t._v("local_offer")])],1),e(S.qW,[t._v("Posts")]),e(C.Z),e(k.Z,{attrs:{persistent:"","max-width":"800px"},scopedSlots:t._u([{key:"activator",fn:function({on:o}){return[e(h.Z,t._g({attrs:{color:"red",outlined:""}},o),[e(P.Z,{attrs:{left:""}},[t._v("add")]),t._v(" ADD ")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(m.Z,[e(y.Z,{ref:"postData",attrs:{"lazy-validation":"",enctype:"multipart/form-data",autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.savePost.apply(null,arguments)}}},[e(v.EB,[e("span",{staticClass:"headline"},[t._v("Posts")])]),e(v.ZB,[e(Z.Z,{attrs:{"grid-list-md":""}},[e(_.Z,{attrs:{wrap:""}},[e(x.Z,{attrs:{xs12:"",sm12:"",md12:""}},[e(j.Z,{attrs:{label:"Name*",color:"#2C3A47"},model:{value:t.postData.name,callback:function(e){t.$set(t.postData,"name",e)},expression:"postData.name"}})],1),e(x.Z,{attrs:{xs12:"",sm12:"",md12:""}},[e(j.Z,{attrs:{label:"Description",color:"#2C3A47"},model:{value:t.postData.description,callback:function(e){t.$set(t.postData,"description",e)},expression:"postData.description"}})],1)],1)],1)],1),e(v.h7,[e(C.Z),e(h.Z,{attrs:{color:"#2C3A47",dark:"",outlined:"",small:""},on:{click:t.close}},[e(P.Z,{attrs:{left:""}},[t._v("exit_to_app")]),t._v(" Close ")],1),e(h.Z,{attrs:{color:"light-green darken-4",dark:"",type:"submit",outlined:"",small:""}},[e(P.Z,{attrs:{left:""}},[t._v("save")]),t._v(" "+t._s(t.saveDialog)+" ")],1)],1)],1)],1)],1)],1),e(Z.Z,[e(m.Z,{staticClass:"mx-auto elevation-19"},[e(v.EB,[e(C.Z),e(j.Z,{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":"",color:"#2C3A47"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),e(g.Z,{attrs:{"item-key":"id",headers:t.headers,items:t.posts,search:t.search},scopedSlots:t._u([{key:"item.actions",fn:function({item:o}){return[e(P.Z,{attrs:{icon:"fa:fas fa-edit"}}),e(h.Z,{staticClass:"mx-2",attrs:{color:"success",fab:"","x-small":"",outlined:""},on:{click:function(e){return t.editPost(o)}}},[e(P.Z,{attrs:{small:""}},[t._v("mdi-pencil")])],1),e(h.Z,{attrs:{color:"pink",fab:"","x-small":"",outlined:""},on:{click:function(e){return t.deletePost(o._id)}}},[e(P.Z,{attrs:{small:""}},[t._v("mdi-delete")])],1)]}},{key:"no-results",fn:function(){return[e(d.Z,{attrs:{value:!0,color:"pink",icon:"warning",dark:""}},[t._v(" Your Search "+t._s(t.search)+" does not exist. ")])]},proxy:!0}],null,!0)})],1)],1)],1),e(O.Z,{attrs:{top:"",right:"",color:t.color},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.text)+" "),e(h.Z,{attrs:{color:"black",text:""},on:{click:function(e){t.snackbar=!1}}})],1)],1)],1)],1)],1),e(h.Z,{directives:[{def:T.Z,name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],attrs:{bottom:"",color:"red",dark:"",fab:"",fixed:"",right:""},on:{click:t.toTop}},[e(P.Z,[t._v("mdi-chevron-up")])],1)],1)},E=[],$=o(6154),I={props:{source:String},data:()=>({mini:!1,dialog:!1,fab:!1,search:"",snackbar:!1,text:"",color:"",posts:[],headers:[{text:"Name",value:"name",sortable:!0},{text:"Description",value:"description",sortable:!1},{text:"Action",value:"actions",sortable:!0,width:"180px"}],postData:{name:"",description:""},default:{name:"",description:""},editedIndex:-1}),watch:{dialog(t){t||this.close()}},computed:{saveDialog(){return-1===this.editedIndex?"Save":"Edit"}},mounted(){this.loadPosts()},methods:{loadPosts:async function(){let t="/api";$.Z.get(t).then((t=>{this.posts=t.data})).catch((t=>{console.log(t)}))},onScroll(t){if("undefined"===typeof window)return;const e=window.pageOffset||t.target.scrollTop||0;this.fab=e>20},toTop(){this.$vuetify.goTo(0)},close(){this.dialog=!1,setTimeout((()=>{this.postData=Object.assign({},this.default),this.editedIndex=-1}),300)},savePost:async function(){this.editedIndex>-1?this.updatePost():this.createPost()},createPost(){let t="/api/create-post";$.Z.post(t,this.postData).then((()=>{this.postData={name:"",description:""},this.close(),this.loadPosts(),this.color="success",this.text="Post has been successfully saved.",this.snackbar=!0})).catch((t=>{console.log(t)}))},editPost(t){this.editedIndex=this.posts.indexOf(t),this.postData=Object.assign({},t),this.dialog=!0},updatePost(){let t=`/api/update-post/${this.postData._id}`;$.Z.put(t,this.postData).then((t=>{console.log(t),this.close(),this.loadPosts(),this.color="info",this.text="Post has been modified.",this.snackbar=!0})).catch((t=>{console.log(t),console.log(this.$route.params.id)}))},deletePost(t){try{let e=`/api/delete-post/${t}`,o=this.posts.findIndex((e=>e._id===t));$.Z.delete(e).then((()=>{this.posts.splice(o,1)})).catch((t=>{console.log(t)}))}catch(e){alert(e)}}}},N=I,B=(0,r.Z)(N,A,E,!1,null,null,null),M=B.exports;n.ZP.use(u.ZP);const q=[{path:"/",name:"home",component:M},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,1272))}],F=new u.ZP({mode:"history",base:"/",routes:q});var L=F,z=o(629);n.ZP.use(z.ZP);var W=new z.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),Y=o(3982),G=o.n(Y),H=o(1705);n.ZP.use(H.Z);var J=new H.Z({icons:{iconfont:"md"}});n.ZP.config.productionTip=!1,n.ZP.use(G()),new n.ZP({router:L,store:W,vuetify:J,render:t=>t(l)}).$mount("#app")}},e={};function o(n){var s=e[n];if(void 0!==s)return s.exports;var a=e[n]={exports:{}};return t[n].call(a.exports,a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(e,n,s,a){if(!n){var r=1/0;for(u=0;u<t.length;u++){n=t[u][0],s=t[u][1],a=t[u][2];for(var i=!0,c=0;c<n.length;c++)(!1&a||r>=a)&&Object.keys(o.O).every((function(t){return o.O[t](n[c])}))?n.splice(c--,1):(i=!1,a<r&&(r=a));if(i){t.splice(u--,1);var l=s();void 0!==l&&(e=l)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[n,s,a]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.f={},o.e=function(t){return Promise.all(Object.keys(o.f).reduce((function(e,n){return o.f[n](t,e),e}),[]))}}(),function(){o.u=function(t){return"js/about.42148e61.js"}}(),function(){o.miniCssF=function(t){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="backend:";o.l=function(n,s,a,r){if(t[n])t[n].push(s);else{var i,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==e+a){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",e+a),i.src=n),t[n]=[s];var f=function(e,o){i.onerror=i.onload=null,clearTimeout(p);var s=t[n];if(delete t[n],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((function(t){return t(o)})),e)return e(o)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var t={143:0};o.f.j=function(e,n){var s=o.o(t,e)?t[e]:void 0;if(0!==s)if(s)n.push(s[2]);else{var a=new Promise((function(o,n){s=t[e]=[o,n]}));n.push(s[2]=a);var r=o.p+o.u(e),i=new Error,c=function(n){if(o.o(t,e)&&(s=t[e],0!==s&&(t[e]=void 0),s)){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",i.name="ChunkLoadError",i.type=a,i.request=r,s[1](i)}};o.l(r,c,"chunk-"+e,e)}},o.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,a,r=n[0],i=n[1],c=n[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(s in i)o.o(i,s)&&(o.m[s]=i[s]);if(c)var u=c(o)}for(e&&e(n);l<r.length;l++)a=r[l],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(u)},n=self["webpackChunkbackend"]=self["webpackChunkbackend"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(6125)}));n=o.O(n)})();
//# sourceMappingURL=app.b751f4ee.js.map