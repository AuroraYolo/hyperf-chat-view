webpackJsonp([13],{ATbt:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("h4",[t._v("个性化设置")]),t._v(" "),a("el-row",{staticClass:"list-item",attrs:{type:"flex"}},[a("el-col",{staticClass:"left-col",attrs:{span:20}},[a("h4",[t._v("主题模式")]),t._v(" "),a("p",[t._v("当前主题模式 ："+t._s(t.themeMode?"全屏模式":"窗口居中模式"))])]),t._v(" "),a("el-col",{staticClass:"right-col",attrs:{span:4}},[a("div",{staticClass:"action"},[a("el-switch",{attrs:{"active-text":"全屏","inactive-text":"居中"},on:{change:t.changeThemeMode},model:{value:t.themeMode,callback:function(e){t.themeMode=e},expression:"themeMode"}})],1)])],1),t._v(" "),a("el-row",{staticClass:"list-item",attrs:{type:"flex"}},[a("el-col",{staticClass:"left-col",attrs:{span:20}},[a("h4",[t._v("主题背景幕布")]),t._v(" "),a("p",[t._v("当前未设置背景图片")])]),t._v(" "),a("el-col",{staticClass:"right-col",attrs:{span:4}},[a("span",{directives:[{name:"popover",rawName:"v-popover:popover",arg:"popover"}],staticClass:"action"},[t._v("设置")])])],1),t._v(" "),a("el-row",{staticClass:"list-item",attrs:{type:"flex"}},[a("el-col",{staticClass:"left-col",attrs:{span:20}},[a("h4",[t._v("我的名片")]),t._v(" "),a("p",[t._v("当前未设置名片背景")])]),t._v(" "),a("el-col",{staticClass:"right-col",attrs:{span:4}},[a("span",{staticClass:"action"},[t._v("修改")])])],1),t._v(" "),a("el-row",{staticClass:"list-item",attrs:{type:"flex"}},[a("el-col",{staticClass:"left-col",attrs:{span:20}},[a("h4",[t._v("聊天背景")]),t._v(" "),a("p",[t._v("当前未设置聊天背景图")])]),t._v(" "),a("el-col",{staticClass:"right-col",attrs:{span:4}},[a("span",{staticClass:"action"},[t._v("修改")])])],1),t._v(" "),a("el-popover",{ref:"popover",attrs:{placement:"left",title:"主题背景",width:"173",trigger:"click"}},t._l(t.bagItems,function(e,s){return a("div",{key:s,staticClass:"image-item",on:{click:function(a){return t.changeThemeBag(e)}}},[a("img",{attrs:{src:e.src}})])}),0)],1)])},staticRenderFns:[]};var c=a("VU/8")({name:"personalize-page",data:function(){return{themeMode:!1,bagItems:[{name:"bag001",src:"/static/image/background/001.jpg"},{name:"bag002",src:"/static/image/background/002.jpg"},{name:"bag003",src:"/static/image/background/003.jpg"},{name:"bag004",src:"/static/image/background/004.jpg"}]}},created:function(){this.themeMode=this.$store.state.settings.themeMode},methods:{changeThemeMode:function(t){this.$store.commit("SET_THEME_MODE",t)},changeThemeBag:function(t){var e=t.name;e=this.$store.state.settings.themeBagImg==t.name?"":t.name,this.$store.commit("SET_THEME_BAGIMG",e)}}},s,!1,function(t){a("F509")},"data-v-10633491",null);e.default=c.exports},F509:function(t,e){}});