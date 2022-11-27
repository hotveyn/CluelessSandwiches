import {defineStore} from "pinia";


export const useProductsStore = defineStore('products',{
    state: async () =>{
        return {

        }
    },
    getters:{
        async products(){
            let response = await fetch("http://127.0.0.1:8000/api/product")
            if(response.ok) {
                return await response.json();
            }
        }
    }
});
