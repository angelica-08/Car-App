<template>
 <div class="py-20 flex justify-center bg-gray-200">
    <div >
        <AppCard></AppCard>
     </div>
  </div>
</template>

<script lang = "ts">
import {Vue, Component} from "vue-property-decorator"
import AppCard from "../components/AppCard.vue"
import cars from "../store/modules/cars"
import {Car} from "../store/modules/models" 


@Component({
  components:{
    AppCard
  }
})

export default class AppHome extends Vue{
  
}

</script>