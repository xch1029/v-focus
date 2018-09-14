export default {
  install(Vue) {
    Vue.directive('focus', {
      inserted(el) {
        // 聚焦元素
        const input = el.tagName === 'INPUT' ? el : el.querySelector('input');
        input.focus();
      },
    });
  },
};
