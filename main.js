import Vue from 'vue';
import App from './App';

import pageFoot from './components/page-foot';
Vue.component("page-foot", pageFoot);

/*begin 多语言支持*/
import VueI18n from './static/i18n/vue-i18n.min.js';
Vue.use(VueI18n);

const i18n = new VueI18n({
	locale: 'zh-CN',
	messages: {
		'zh-CN': require("./static/i18n/langs/zh"),
		'en-US': require('./static/i18n/langs/en')
	}
});
Vue.prototype._i18n = i18n;
/*end 多语言支持*/

/* begin http */
import http from './utils/http.js';
Vue.prototype.http = http;
/* end http */

Vue.config.productionTip = false;
App.mpType = 'app'

const app = new Vue({
	i18n,
	...App
})
app.$mount()
