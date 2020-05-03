<template>
  <div>
    <AppAddForm @doSomethingCar ="doSomethingCar($event)" ></AppAddForm>
  </div>
</template>

<script lang = "ts">
import {Vue, Component} from "vue-property-decorator"
import AppAddForm from "../components/AppAddForm.vue"
import cars from "../store/modules/cars"
import {Car} from "../store/modules/models" 


@Component({
  components:{
    AppAddForm
  }
})

export default class AddCar extends Vue{


async doSomethingCar(car:Car){
await cars.addCar(car)
 }
}


</script>