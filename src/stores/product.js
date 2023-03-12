import {defineStore} from "pinia"
import axios from "axios";
export const useProductStore= defineStore("product",
{
 state:()=>
 ({
    list:[],

 }),
 getters: {
    getProduct(state)
    {
        return state.list;
    }
 },
 actions :
 {
    async fetchproduct()
    {
        try{
            const result= await axios.get("https://fakestoreapi.com/products")
            console.warn(result.data)
            this.list=result.data}
        catch(error)
        {
           alert(error)
           console.log(error)
        }
    }
 }

})