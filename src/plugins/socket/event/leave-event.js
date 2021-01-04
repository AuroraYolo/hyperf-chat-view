import AppMessageEvent from './app-message-event';

/**
 * 好友邀请消息处理
 */
class LeaveEvent extends AppMessageEvent {
  resource;

  /**
   * 初始化构造方法
   *
   * @param {object} resource Socket消息
   */
  constructor(resource){
    super();
    this.resource = resource;
  }

  handle(){
    this.vm.$notify.error({
      message: '您的账号在其他地方登录,请注意是否是账号信息被泄漏,请及时更改密码!',
      duration: 5000
    });
    let that = this
    setTimeout(function(){
      that.vm.$store.dispatch("ACT_USER_LOGOUT", that.vm.$router);
    }, 3000);
  }
}

export default LeaveEvent;
