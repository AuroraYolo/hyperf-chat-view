import 'babel-polyfill';
import Vue from 'vue';
import App from '@/App';
import store from '@/store';
import router from '@/router';
import '@/icons';
import '@/permission';
import '@/directives/directives'; //引出全部指令
// 全局引入按需引入UI库 Element UI
import '@/plugins/element-ui';
// 全局引入自定义的WebSocket 插件
// import WsSocket from '@/plugins/socket/ws-socket';
import VueSocketIO from 'vue-socket.io';

import SocketIO from 'socket.io-client';


// 引入WebSocket消息处理类
// import SocketResourceHandle from '@/plugins/socket/socket-resource-handle';
// 引入自定义全局css
import '@static/css/im-base.css';

Vue.config.productionTip = false;

import {
  getToken
} from '@/utils/auth';
import {
  findUserSettingServ
} from "@/api/user";

let VueApp = new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App ref="view" />',
  data: {
    // WsSocket对象
    socket: null, //当前正在对话的用户数据
    message: {
      avatar: '',
      source: 0,
      receiveId: 0,
      records: [],
      index_name: '',
    },
  },
  created(){
    // 判断用户是否登录
    if(this.$store.getters.loginStatus){
      this.initialize();
    }
  },
  methods: {
    // 页面初始化设置
    initialize(){
      this.loadWebsocket();
      this.loadUserSetting();
    }, // 连接websocket服务器
    loadWebsocket(){
      let app = this, store = this.$store;
      const token = `${getToken()}`

      const socketInstance = SocketIO(process.env.WEB_SOCKET_URL, {
        transports: ['websocket','polling'],
        transportOptions: {
          polling: {
            extraHeaders: {
              Authorization: token
            }
          }
        },
        query:{
          token:token
        }
      });

      this.socket = new VueSocketIO({
        debug: true,
        connection: socketInstance
      })
      // Websocket 连接成功回调方法
      this.socket.io.on('connect', () => {
        store.commit('UPDATE_SOCKET_STATUS', true);
      })
      // Websocket 断开连接回调方法
      this.socket.io.on('disconnect', () => {
        store.commit('UPDATE_SOCKET_STATUS', false);
      })
      // Websocket 断开连接回调方法
      this.socket.io.on('reconnect', () => {
        store.commit('UPDATE_SOCKET_STATUS', true);
      })
      Vue.use(this.socket)
      // this.socket.initWebSocket();
    }, // 更新当前正在对话的用户数据
    updateMessage(source, receive_id, avatar = ''){
      this.message.source = parseInt(source);
      this.message.receiveId = parseInt(receive_id);
      this.message.avatar = avatar;
      this.message.records = [];
      this.message.index_name = source + '_' + receive_id;
    }, // 加载用户相关设置信息，更新本地缓存
    loadUserSetting(){
      findUserSettingServ().then(res => {
        if(res.code == 200){
          let setting = res.data.setting;
          let userInfo = res.data.user_info;
          this.$store.commit('UPDATE_USER_INFO', {
            uid: userInfo.uid,
            nickname: userInfo.nickname,
            sex: userInfo.gender,
            signature: userInfo.motto,
            avatar: userInfo.avatar
          });
        }
      });
    }, // 跳转到指定好友对话页
    dumpTalkPage(index_name){
      sessionStorage.setItem("send_message_index_name", index_name);
      if(this.$route.path == '/message'){
        this.$refs.view.refreshView();
        return;
      }
      this.$router.push({
        path: "/message"
      });
    }
  }
});
// 导出应用实例(其它js文件中可直接读取vue应用)
export default VueApp;
