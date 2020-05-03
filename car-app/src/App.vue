<template>
  <div id="app">
     <AppNavBar></AppNavBar>
    <router-view/>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import AppNavBar from '@/components/AppNavBar.vue'

@Component({
  components: {
    AppNavBar
  }
})
export default class App extends Vue {
}
</script>
