import { renderVue, Vue } from 'hypernova-vue'
import ProductList from './components/ProductList.vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)

renderVue('ProductList', Vue.extend(ProductList))
