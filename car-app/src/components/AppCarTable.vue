<template>
<div class="text-gray-900 bg-gray-200">
    <div class="p-4 flex">
        <h1 class="text-3xl">
            Cars
        </h1>
    </div>
    <div class="px-3 py-4 flex justify-center">
        <table class="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
                <tr class="border-b bg-center">
                    <th class="text-center p-3 px-5">Model</th>
                    <th class="text-center p-3 px-5">Price</th>
                    <th class="text-ceneter p-3 px-5">Action</th>
                    <th></th>
                </tr>
                   <tr v-for="(car,i) in carlist" :key="car.id" v-bind:car="car"  class="border-b hover:bg-orange-100 bg-gray-100">
                    <slot v-if= "editCar == car.id">
                       <td class="p-3 px-5 text-center"><input type="text" class="bg-white border border-red-500" v-model.lazy = "car.type"></td>
                        <td class="p-3 px-5 text-center"><input type="text" class="bg-white border border-red-500" v-model.lazy = "car.price"></td>
                        <td class="p-3 px-5 text-center"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" v-on:click="saveCar(car, editCar)">Save</button>
                        <button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" v-on:click="editCar = null">Cancel</button>
                        <button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" v-on:click="deleteCar(car, i)">Delete</button></td>
                    </slot>
                    <slot v-else>
                      <td class="p-3 px-5 text-center bg-transparent">{{car.type}}</td>
                      <td class="p-3 px-5 text-center  bg-transparent">{{car.price}}</td>
                       <td class="p-3 px-5 text-center"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" v-on:click="editCar = car.id">Edit</button>
                       <button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" v-on:click="deleteCar(car, i)">Delete</button></td>
                    </slot>
                  </tr>          
            </tbody>
        </table>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {Car} from '../store/modules/models'

@Component
export default class AppCarTable extends Vue {
  @Prop() private carlist?: Car;
  editCar = null

  deleteCar(car:Car, i:number) {
     this.$emit('deleteCar',{car, i})
   }

   saveCar(car:Car, editCar:any) {
     this.$emit('saveCar',{car, editCar})
     this.editCar = null
   }

}
</script>

