import { createApp } from 'vue'
import App from './App.vue'

// mitt 라이브러리 셋팅
import mitt from 'mitt'
let emitter = mitt();
let app = createApp(App)
app.config.globalProperties.emitter = emitter;

app.mount('#app')
