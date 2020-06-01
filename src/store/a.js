import { observable, decorate, action } from 'mobx';
// 这里主要用户存储录制用户事件行为与播放行为
class a {
  count = 1;
  // 设置事件队列
  add = (payload) => {
    this.count += 1
  }
}
decorate(a, {
  count: observable,
  add: action,
});
export default a;
