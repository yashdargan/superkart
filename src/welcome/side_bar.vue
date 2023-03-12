<template >
    <div class="side_bar text-center">
    <div class="header font-bold text-2xl italic">
        SuperKart
       </div> 
        <ul>
        <div class =menu-items>
            <li><router-link to="/" active-class="action">
            <div class="link-container">
                Home
            </div>
            </router-link>
            </li>
            <li><router-link to="/About" active-class="action">
            <div class="link-container">
                About
            </div>
            </router-link>
            </li>
            <li><router-link to="/Help" active-class="action">
            <div class="link-container">
                Help
            </div>
            </router-link>
            </li>
            <li><router-link to="/Setting" active-class="action">
            <div class="link-container">
                Setting
            </div>
            </router-link>
            </li>
            </div>
        

        </ul>
    </div>
</template>
<script>
export default {
    name: 'side_bar',
    
    
}
</script>
<style scoped>
.header
{   margin-top:10px;
   
    color: white;
}
.menu-items
{
display: flex;
flex-direction: column;
margin-top:60px;


}
.menu-items > *
{
    margin-top:60px;
    
}  
ul{ padding:40px; 
    color: white;;

}
li:hover{
    background-color: #2E4F4F;
    border-radius: 5px;

}

</style>