import a from './a.js';
import b from './b.js';
let as = new a();
let bs = new b();
const stores = {
  as,
  bs,
};
/// 默认导出接口
export default stores;
