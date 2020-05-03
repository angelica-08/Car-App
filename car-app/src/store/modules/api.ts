import axios from "axios";
import {Car} from './models'


export const carApi = axios.create({
    baseURL : "https://5ea956cf0ebc1d0016490b5c.mockapi.io/api/v1",
});

export async function getCarList(){
    try{
    const response = await carApi.get('/cars')
    return response.data as Car
    }
    catch (err) {
        throw err;
      }  
}

export async function deleteCar(car:Car){
    carApi.delete('/cars/' + car.id)
    .then(() =>
    console.log("this has been deleted"))
    .catch(function (error) {
        console.log(error);
      });
}

export async function addCar(car:Car){
    carApi.post('/cars', {
        type :car.type,
        price: car.price
    }).then((response) =>{
        alert("This has been added")
    }).catch(function (error) {
        alert("There seems to be an error")
        console.log(error);
      });
}

export async function editCar(car:Car){
    carApi.put('/cars/' +car.id, {
      type :car.type,
      price: car.price
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}


    
