<template>
<AppCarTable v-bind:carlist="carlist" @deleteCar ="deleteCar($event)" @saveCar = "saveCar($event)"></AppCarTable>
</template>

<script lang = "ts">
import {Vue, Component} from "vue-property-decorator"
import AppCarTable from "../components/AppCarTable.vue"
import cars from "../store/modules/cars"
import {Car} from "../store/modules/models" 


@Component({
  components:{
    AppCarTable
  }
})

export default class CarList extends Vue{
  message: string ="hi gwapa ko"
  carlist : Car[] = []

  mounted(){
  cars.refreshCar().then(() => {
    this.carlist = cars.car
  })
 }

 async deleteCar($event:any){
     await cars.deleteCar($event.car)
     this.carlist.splice($event.i,1)
 }

 async saveCar($event:any){
  await cars.editCar($event.car)
  console.log("this has been deleted") 
 }

}


</script>