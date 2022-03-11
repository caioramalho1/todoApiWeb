<template>  
  
  <div>
    <TabMenu :model="items"></TabMenu>
    <router-view></router-view>

    
  </div>
</template>
<script>
import TabMenu from 'primevue/tabmenu'


export default{
    components: {
    TabMenu
  },
  data() {
    return {
      items: [
        {label: 'Home', icon: 'pi pi-fw pi-home', to:'/'},
        {label: 'Todo register', icon: 'pi pi-plus', to:'/cadastro'},
        {label: 'Todo List', icon: 'pi pi-list', to:'/list'}
      ]
    }
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
