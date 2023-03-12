<template>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <div class="h-screen w-screen flex italic">
        <div class="w-[400px] h-full bg-gray-700 text-center font-bold ">
            <div class="h-[50px] bg-gray-500 font-bold text-2xl text-black-700 ">
    
                superkart
            </div>
    
            <ul class="h-[calc(100vh-50px)] bg-gray-800 text-xl flex-col space-y-[10px] text-white">
                <li> <button class="sidebar-toggle" :class="isSidebarOpen ? 'toggle-button' : ''">
                <IconAngle @click="toggleSidebar" />
            </button></li>
                
                   <li>
                <router-link to="/src/views/HOME.vue" class="inline-flex relative items-center py-[20px] px-[100px] w-full  rounded-full border-gray-200 hover:bg-gray-300 hover:text-gray-600">
    
                    <i class="material-icons" style="font-size:36px;color:whitesmoke">home</i>
                    Home</router-link>
                    </li>
                    <li>
                    <router-link to="/src/views/ABOUT.vue" class="inline-flex relative items-center py-[20px] px-[100px] w-full  rounded-full border-gray-200 hover:bg-gray-300 hover:text-gray-600 ">
                    <i class="material-icons " style="font-size:36px;color:whitesmoke">work</i>Help</router-link>
                    </li>
                    <li>
                <router-link to="/src/views/ABOUT.vue" class="inline-flex relative items-center py-[20px] px-[100px] w-full  rounded-full border-gray-200 hover:bg-gray-300 hover:text-gray-600 ">
                    <i class="material-icons " style="font-size:36px;color:whitesmoke">work</i>About</router-link>
                    </li>
                    <li>
    
                <router-link to="/src/views/SETTING.vue" class="inline-flex relative items-center py-[20px] px-[100px] w-full  rounded-full border-gray-200 hover:bg-gray-300 hover:text-gray-600 ">
                    <i class="material-icons" style="font-size:36px;color:whitesmoke">settings</i> Setting</router-link>
                    </li>
            </ul>
    
        </div>
        <div class="w-full h-full bg-gray-400">
            <div class="h-[50px] bg-gray-900 pt-row text-center text-2xl text-white"> enjoy an extra 20% off
                Holi festivial sale
            <h1>{{ msg }}</h1></div>
    
            <div class="p-8 text-cyan -100 font-extrabold bg-gray-200">
                <tr  v-for="product in getProduct" :key="product.id" >
            <td >{{ product.id}} </td>
          
            </tr>
            </div>
        </div>
    </div>
    </template>
    <script setup>
    import {ref,onMounted,computed} from "vue"
    import { useProductStore } from "@/stores/product"
    
    const store= useProductStore();
    const msg = ref("welcome to my pinia store")
    
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
    
    }
    
    </script>
    
    <style>
    
    
    
    </style>
    