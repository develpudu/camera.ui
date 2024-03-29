import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import vuetify from '@/plugins/vuetify';
import '@/registerServiceWorker';

import '@/assets/css/tailwind.css';
import '@/assets/css/theme.css';
import '@/assets/css/main.css';

import 'vue-toastification/dist/index.css';
import 'xterm/css/xterm.css';

import permission from '@/mixins/permission.mixin';

import { i18n } from '@/i18n';
import Loader from '@/components/loader.vue';

import Toast from 'vue-toastification';
import ToastOptions from '@/common/toast.defaults.js';

import socket from '@/common/socket-instance';
import VueSocketIOExt from 'vue-socket.io-extended';

import JsonExcel from 'vue-json-excel';
import VueHtml2Canvas from 'vue-html2canvas';
import DatetimePicker from 'vuetify-datetime-picker';

Vue.use(Toast, ToastOptions);
Vue.use(VueSocketIOExt, socket, { store });
Vue.use(VueHtml2Canvas);

Vue.component('Loader', Loader);

Vue.component('DownloadExcel', JsonExcel);
Vue.use(DatetimePicker);
Vue.mixin(permission);

Vue.config.productionTip = false;

const bus = new Vue();

const app = new Vue({
  router,
  store,
  vuetify,
  i18n: i18n,
  render: (h) => h(App),
}).$mount('#app');

export { app, bus };
