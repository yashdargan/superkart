<template>
  
  <div class="dash">
      <side_bar />
      <div class="content">
        <router-view />
      </div>
    </div>



 
 
</template>

<script>
import side_bar from './welcome/side_bar.vue';
export default{
  name:"App",
  components:{side_bar},
 
}

</script>
<style scoped>
.dash{
 display:grid;
 grid-template-columns: 1fr 5fr;
 background-color: teal;
 height: 100vh;
 width: 100vw;
}

.content{
  background-color: white;
  border-radius:20px;
  margin:6px 6px 6px 0px;
}
</style>
