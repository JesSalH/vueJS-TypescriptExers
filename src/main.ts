import Vue from 'vue';
import App from './App.vue';

export const bus = new Vue();

Vue.config.productionTip = false;

// Filters
Vue.filter('shorten', function(value:any){
  return value.slice(0,20) + " ...";
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
