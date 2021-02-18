import { createApp } from 'vue'
import App from './App.vue'
import { store, key } from './store'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
const app = createApp(App)
app.use(store, key)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
