webpackJsonp([10],{"+yVJ":function(e,t){},z53R:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("vMJZ"),o=s("E4LH"),i=s("FRfw"),n={name:"new-register-page",data:function(){var e=this;return{forgetLoading:!1,form:{username:"",password:"",password2:"",sms_code:""},rules:{username:[{validator:function(e,t,s){""===t?s(new Error("手机号不能为空！")):o.a.validatPhone(t)?s():s(new Error("手机号格式不正确！"))},trigger:"blur"}],password:[{required:!0,message:"登录密码不能为空!",trigger:"blur"}],password2:[{validator:function(t,s,r){""===s?r(new Error("请再次输入密码")):s!==e.form.new_password?r(new Error("两次输入密码不一致!")):r()},trigger:"blur"}],sms_code:[{required:!0,message:"验证码不能为空!",trigger:"blur"},{min:6,max:6,message:"验证码格式不正确",trigger:"blur"}]},smsLock:!1,smsLockObj:null}},created:function(){this.smsLockObj=new i.a("FORGET_SMS",60)},destroyed:function(){clearInterval(this.smsLockObj.timer)},methods:{toLink:function(e){this.$router.push({path:e})},onSubmit:function(e){var t=this;if(this.forgetLoading)return!1;this.$refs[e].validate(function(e){if(!e)return!1;t.forgetLoading=!0,t.forgetAccount()})},forgetAccount:function(){var e=this,t=this;Object(r.k)({mobile:this.form.username,password:this.form.password,sms_code:this.form.sms_code}).then(function(s){e.forgetLoading=!1,200==s.code?(e.$notify({title:"成功",message:"密码修改成功,快去登录吧...",type:"success"}),e.$refs.form.resetFields(),setTimeout(function(){t.$router.push({path:"/login"})},1500)):e.$notify({message:s.msg})}).catch(function(t){e.forgetLoading=!1,e.$notify({message:"网络错误,请稍后再试..."})})},sendSms:function(){var e=this;return!this.smsLock&&(o.a.validatPhone(this.form.username)?(this.smsLock=!0,void Object(r.w)({mobile:this.form.username,type:"forget_password"}).then(function(t){200==t.code?(e.smsLockObj.start(),e.$notify({title:"成功",message:"验证码发送成功...",type:"success"}),t.data.is_debug&&(e.form.sms_code=t.data.sms_code,setTimeout(function(){e.$notify({title:"提示",message:"已自动填充验证码"}),e.form.sms_code=t.data.sms_code},500))):e.$notify({title:"提示",message:"验证码发送失败..."}),e.smsLock=!1}).catch(function(t){e.smsLock=!1})):(this.$refs.form.validateField("username"),!1))}}},a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("el-container",{attrs:{id:"auth-container"}},[s("el-main",{staticStyle:{position:"relative"}},[s("div",{staticClass:"animated slideInLeft",attrs:{id:"logo-name"}},[e._v(e._s(e.$store.state.website_name))]),e._v(" "),s("div",{attrs:{id:"login-box"}},[s("div",{staticClass:"header"},[e._v("\n          找回密码\n        ")]),e._v(" "),s("div",{staticClass:"main",staticStyle:{width:"100%"}},[s("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[s("el-form-item",{attrs:{prop:"username"}},[s("el-input",{staticClass:"cuborder-radius",attrs:{placeholder:"我的手机号",maxlength:"11"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSubmit("form")}},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),e._v(" "),s("el-form-item",{attrs:{prop:"sms_code"}},[s("el-input",{staticClass:"cuborder-radius",staticStyle:{width:"205px"},attrs:{placeholder:"短信验证码",maxlength:"6"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSubmit("form")}},model:{value:e.form.sms_code,callback:function(t){e.$set(e.form,"sms_code",t)},expression:"form.sms_code"}}),e._v(" "),e.smsLock?s("div",{staticClass:"send-code-btn send-sms-disable"},[e._v("正在发送 ...")]):0==e.smsLock&&null==e.smsLockObj.time?s("div",{staticClass:"send-code-btn",on:{click:e.sendSms}},[e._v("获取短信\n              ")]):s("div",{staticClass:"send-code-btn send-sms-disable"},[e._v("重新发送("+e._s(e.smsLockObj.time)+"s)")])],1),e._v(" "),s("el-form-item",{attrs:{prop:"password"}},[s("el-input",{staticClass:"cuborder-radius",attrs:{type:"password",placeholder:"设置新密码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSubmit("form")}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),s("el-form-item",{attrs:{prop:"password2"}},[s("el-input",{staticClass:"cuborder-radius",attrs:{type:"password",placeholder:"确认新密码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSubmit("form")}},model:{value:e.form.password2,callback:function(t){e.$set(e.form,"password2",t)},expression:"form.password2"}})],1),e._v(" "),s("el-form-item",[s("el-button",{staticClass:"submit-btn",attrs:{type:"primary",loading:e.forgetLoading},on:{click:function(t){return e.onSubmit("form")}}},[e._v("立即找回\n              ")])],1),e._v(" "),s("el-form-item",[s("div",{staticClass:"links"},[s("el-link",{attrs:{type:"primary",underline:!1},on:{click:function(t){return e.toLink("/register")}}},[e._v("注册账号")]),e._v(" "),s("el-link",{attrs:{type:"primary",underline:!1},on:{click:function(t){return e.toLink("/login")}}},[e._v("已有账号，立即登录?")])],1)])],1)],1)]),e._v(" "),s("div",{staticClass:"copyright",domProps:{innerHTML:e._s(e.$store.state.copyright)}})]),e._v(" "),s("el-aside",{staticClass:"login-broadside",attrs:{width:"500px"}},[s("p",{staticClass:"describe"},[e._v(e._s(e.$store.state.website_name)+" 是一款使用vue开发的聊天项目，功能点包含单聊、群聊,\n        消息类型包含文字、图片、文件、自定义表情包及代码块。新增编辑笔记及笔记分享好友功能 ...")])])],1),e._v(" "),s("div",{staticClass:"fly bg-fly-circle1"}),e._v(" "),s("div",{staticClass:"fly bg-fly-circle2"}),e._v(" "),s("div",{staticClass:"fly bg-fly-circle3"}),e._v(" "),s("div",{staticClass:"fly bg-fly-circle4"})],1)},staticRenderFns:[]};var c=s("VU/8")(n,a,!1,function(e){s("+yVJ")},"data-v-4fc9b368",null);t.default=c.exports}});