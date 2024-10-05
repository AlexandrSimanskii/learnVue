import "./assets/styles/main.scss"
import components from '@/components/UI'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from "./router"
import directives from '@/directives';





const app = createApp(App)


components.forEach(component => {
    app.component(component.name, component)
})

directives.forEach(directive => {
    app.directive(directive.name, directive)
})




app.use(createPinia())
app.use(router)

app.mount('#app')
