<template>
    <div class="h-[50px] bg-gray-900 pt-row text-center text-2xl text-white border-round">
       <h1>Holi Sale!!! get 20% discount on each supercart product</h1> 
        </div>
    <div class =header>
        <button class="button" v-on:click="preData()"> previous </button>


        <button  class="button" v-on:click="NextData()">Next</button>
     
   
        <div class="product" v-show="counter===flag" v-for=" (product,counter) in getProduct" :key="product.id">
            <div class="product-inner">
                <div class="prouct-text-wrap">
                    <h1 class="font-bold text-2xl italic">{{ product.title }}</h1>
                    </div>
                    <div class="product-image-wrap">
                        <span>
                        <img :src="product.image " class="image" />
                        
                        <h1>M.R.P. &#8377;{{ product.price }}</h1>
                        </span>
                        </div>
                        <h1>Description</h1>
                        <div class="product-details">
                            <p>{{product.description}}</p>
                        </div>

                    </div>
                </div>
            </div>
</template>
<script setup>
import {onMounted,computed} from "vue"
import { useProductStore } from "@/stores/product"

const store= useProductStore();

const getProduct= computed(()=>{
 return store.getProduct;
}
);

onMounted(() => {
    store.fetchproduct();
})




</script>
<script>
export default {
    name: 'side_bar',
    data()
    {
        return {
            counter:0,
            flag:0
        }
    },
    methods: {
        NextData()
        {
            this.flag++;
            this.counter
        }
        ,
        preData()
        {
            
            this.flag--;
            this.counter
        }
    }
    }



</script>

<style>
*{
    
    margin:0%;
    padding:0%;
    box-sizing: border-box;
} 
body{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.product{
    flex: 1 1 .33 .333%;
    width: 100%;
    padding: 25px;

}
.product-inner{
   position: relative;
   padding: 25px;
   box-shadow: 0px 0px 16px rgba(0,0, 0,0.25);
}
.image{
    padding :25px;
    margin: auto;
    width:30%;
    height: auto;
}
.product-text-wrap{
    position: absolute;
    top: 0%;
    left:0%;
    right: 0%;
    bottom: 0%;
    z-index: 0;
    overflow: hidden;
}
.button{  padding: 1rem 3rem;
       
        font-size: 16px;
        text-transform: uppercase;
        cursor: pointer;
        background: linear-gradient(90deg, #5f83a5 0%, rgba(95, 212, 48, 0.63) 100%);
        border-radius: 53px;
        border: none;
        color: #fff;
        font-weight: bold;
     
         margin-inline:250px auto ;}

    
</style>