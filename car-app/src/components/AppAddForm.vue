<template>
<div class="px-3 py-20 flex justify-center bg-gray-200">
<div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2">
        Model
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" v-model="car.type">
    </div>
     <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2">
        Price
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" v-model="car.price">
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="doSomethingCar()">
        Add
      </button>
    </div>
  </form>
</div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {Car} from '../store/modules/models'

@Component
export default class AddForm extends Vue {
  car : Car[] =[]
  

 doSomethingCar() {
     this.$emit('doSomethingCar', this.car)
     this.car = []
   }
}
</script>