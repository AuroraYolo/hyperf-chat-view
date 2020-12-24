webpackJsonp([7],{fhdX:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("vMJZ"),n=i("TIfe"),s=i("E4LH"),a={name:"new-login-page",data:function(){return{loginLoading:!1,form:{username:"",password:""},rules:{username:[{validator:function(t,e,i){""===e?i(new Error("登录手机号不能为空！")):s.a.validatPhone(e)?i():i(new Error("登录手机号格式不正确！"))},trigger:"blur"},{min:11,max:11,message:"手机号格式不正确!",trigger:"blur"}],password:[{required:!0,message:"登录密码不能为空!",trigger:"blur"}]}}},methods:{onSubmit:function(t){var e=this;if(this.loginLoading)return!1;this.$refs[t].validate(function(t){if(!t)return!1;e.loginLoading=!0,e.login()})},login:function(){var t=this;Object(r.p)({mobile:this.form.username,password:this.form.password}).then(function(e){if(t.loginLoading=!1,200==e.code){var i=e.data;Object(n.e)(i.authorize.access_token,i.authorize.expires_in),t.$store.commit("UPDATE_USER_INFO",i.userInfo),t.$store.commit("UPDATE_LOGIN_STATUS"),t.$root.initialize(),t.$router.push({path:"/"}),setTimeout(function(){t.$notify({title:"友情提示",message:"此站点仅供演示、学习所用，请勿进行非法操作、上传或发布违法资讯。",duration:0})},3e3)}else t.$notify.info({title:"提示",message:"登录密码不正确或账号不存在..."})}).catch(function(e){t.loginLoading=!1})},toLink:function(t){this.$router.push({path:t})}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-container",{attrs:{id:"auth-container"}},[i("el-main",{staticStyle:{position:"relative"}},[i("div",{staticClass:"animated slideInLeft",attrs:{id:"logo-name"}},[t._v("\n        "+t._s(t.$store.state.website_name)+"\n      ")]),t._v(" "),i("div",{attrs:{id:"login-box"}},[i("div",{staticClass:"header"},[t._v("快捷登录")]),t._v(" "),i("div",{staticClass:"main",staticStyle:{width:"100%"}},[i("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules}},[i("el-form-item",{attrs:{prop:"username"}},[i("el-input",{staticClass:"cuborder-radius",attrs:{placeholder:"手机号",maxlength:"11"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSubmit("form")}},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),t._v(" "),i("el-form-item",{attrs:{prop:"password"}},[i("el-input",{staticClass:"cuborder-radius",attrs:{type:"password",placeholder:"密码"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSubmit("form")}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),i("el-form-item",[i("el-button",{staticClass:"submit-btn",attrs:{type:"primary",loading:t.loginLoading},on:{click:function(e){return t.onSubmit("form")}}},[t._v("立即登录\n              ")])],1),t._v(" "),i("el-form-item",[i("div",{staticClass:"links"},[i("el-link",{attrs:{type:"primary",underline:!1},on:{click:function(e){return t.toLink("/forget")}}},[t._v("找回密码")]),t._v(" "),i("el-link",{attrs:{type:"primary",underline:!1},on:{click:function(e){return t.toLink("/register")}}},[t._v("还没有账号？立即注册")])],1)]),t._v(" "),i("p",{staticStyle:{"margin-top":"50px"}},[i("el-divider",[i("span",{staticStyle:{color:"rgb(181, 176, 176)","font-weight":"200"}},[i("i",{staticClass:"el-icon-mobile-phone"}),t._v(" 预览账号")])])],1),t._v(" "),i("el-form-item",{staticClass:"preview-account"},[i("p",[t._v("预览账号:18798272054 / 密码: admin123")]),t._v(" "),i("p",[t._v("预览账号:18798272055 / 密码: admin123")])])],1)],1)]),t._v(" "),i("div",{staticClass:"copyright",domProps:{innerHTML:t._s(t.$store.state.copyright)}})]),t._v(" "),i("el-aside",{staticClass:"login-broadside",attrs:{width:"500px"}},[i("p",{staticClass:"describe"},[t._v("\n        "+t._s(t.$store.state.website_name)+"\n        是一款使用vue开发的聊天项目，功能点包含单聊、群聊,\n        消息类型包含文字、图片、文件、自定义表情包及代码块。新增编辑笔记及笔记分享好友功能\n        ...\n      ")])])],1),t._v(" "),i("div",{staticClass:"fly bg-fly-circle1"}),t._v(" "),i("div",{staticClass:"fly bg-fly-circle2"}),t._v(" "),i("div",{staticClass:"fly bg-fly-circle3"}),t._v(" "),i("div",{staticClass:"fly bg-fly-circle4"})],1)},staticRenderFns:[]};var l=i("VU/8")(a,o,!1,function(t){i("ramF")},"data-v-8a394a1c",null);e.default=l.exports},ramF:function(t,e){}});