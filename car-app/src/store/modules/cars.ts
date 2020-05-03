import {VuexModule, Module, getModule, Mutation,Action} from 'vuex-module-decorators'
import store from '@/store'
import {Car} from './models'
import {getCarList, deleteCar, addCar, editCar} from './api'

@Module({
    namespaced:true,
    dynamic: true,
    name : 'cars',
    store
})

class CarModule extends VuexModule{
    car: Car[] = []

    @Mutation
    setCar(cars: Car[]){
        this.car = cars
    }

    @Action({commit : 'setCar'})
    async refreshCar(){
        const car = await getCarList()
        return car
    }

    @Mutation
    async deleteCar(car:Car){
        deleteCar(car)
    }

    @Mutation
    async addCar(car:Car){
       await addCar(car)
    }

    @Mutation
    async editCar(car:Car){
        editCar(car)
    }
}

export default getModule(CarModule)