(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{405:function(t,e,r){"use strict";var n=r(414),a=r.n(n);a.a.defaults.baseURL="https://webdev-api.loftschool.com/",e.a=a.a},413:function(t,e,r){"use strict";r.d(e,"b",function(){return a}),r.d(e,"a",function(){return o});var n=r(405),a=function(t){var e=new FileReader;return new Promise(function(r){try{e.readAsDataURL(t),e.onloadend=function(){r(e.result)}}catch(t){throw new Error("Ошибка при чтении файла")}})},o=function(t){var e=n.a.defaults.baseURL;return"".concat(e,"/").concat(t)}},424:function(t,e,r){},479:function(t,e,r){"use strict";var n=r(424);r.n(n).a},485:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"avatar-upload"},[r("label",{staticClass:"avatar-upload__control",class:{"avatar-upload__control_drag":t.isDragImage},attrs:{for:"file-input"},on:{dragenter:function(e){return e.preventDefault(),t.dragenterFocusIn(e)},dragover:function(e){return e.preventDefault(),t.dragenterFocusIn(e)},dragleave:function(e){return e.preventDefault(),t.dragenterFocusOut(e)},drop:function(e){return e.preventDefault(),t.handleDrop(e)}}},[t.renderedPhoto&&!t.isDragImage?r("img",{staticClass:"avatar-upload__image",attrs:{src:t.renderedPhoto}}):t._e()]),r("input",{ref:"file-input",staticClass:"avatar-upload__file",attrs:{id:"file-input",type:"file",accept:"image/jpeg,image/png"},on:{change:t.handlePhotoUpload}}),r("basic-button",{staticClass:"avatar-upload__button",attrs:{size:"small",display:"flat"},on:{click:function(e){return t.uploadFile(e.target.files[0])}}},[t._v(t._s(t.value?"Изменить фото":"Добавить фото"))]),r("transition",{attrs:{name:"slide-up"}},[t.errorMessage?r("div",{staticClass:"avatar-upload__error"},[r("error-tooltip",[t._v(t._s(t.errorMessage))])],1):t._e()])],1)};n._withStripped=!0;var a=r(413);function o(t,e,r,n,a,o,i){try{var u=t[o](i),s=u.value}catch(t){return void r(t)}u.done?e(s):Promise.resolve(s).then(n,a)}function i(t){return function(){var e=this,r=arguments;return new Promise(function(n,a){var i=t.apply(e,r);function u(t){o(i,n,a,u,s,"next",t)}function s(t){o(i,n,a,u,s,"throw",t)}u(void 0)})}}var u={components:{ErrorTooltip:function(){return r.e(1).then(r.bind(null,501))},BasicButton:function(){return r.e(3).then(r.bind(null,489))}},props:{value:{type:File|String,default:null},maxSize:{type:Number,default:15e5},errorMessage:{type:String,default:""}},watch:{value:function(t){this.setRenderedPhoto()}},data:function(){return{isDragImage:!1,renderedPhoto:null}},methods:{uploadFile:function(){this.$refs["file-input"].click()},setRenderedPhoto:function(){"string"==typeof this.value?this.renderedPhoto=Object(a.a)(this.value):this.value?this.renderPhoto(this.value):this.renderedPhoto=null},renderPhoto:function(){var t=i(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(a.b)(e);case 3:r=t.sent,this.renderedPhoto=r,t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0.message),this.$emit("input",null);case 11:case"end":return t.stop()}},t,this,[[0,7]])}));return function(e){return t.apply(this,arguments)}}(),dragenterFocusIn:function(t){this.isDragImage=!0},dragenterFocusOut:function(){this.isDragImage=!1},handleDrop:function(t){var e=t.dataTransfer.files[0];this.handlePhotoUpload(e),this.isDragImage=!1},handlePhotoUpload:function(){var t=i(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.size>this.maxSize)){t.next=3;break}return alert("Слишком большой размер файла (максимум 1.5MB)"),t.abrupt("return");case 3:this.$emit("input",e);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},created:function(){this.setRenderedPhoto()}},s=(r(479),r(92)),c=Object(s.a)(u,n,[],!1,null,"18e1ac2c",null);c.options.__file="src/admin/components/AvatarUpload.vue";e.default=c.exports}}]);