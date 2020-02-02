<!-- This is Mother Component -->
<template>
  <div id="app">
    
    <!-- These lines are only for Testing purpose -->
    <router-link :to="{path: '/'}">Home</router-link>
    <router-link :to="{path: '/test/1'}">Test1</router-link>
    <router-link :to="{path: '/test/2'}">Test2</router-link>
    <router-link :to="{path: '/test/3'}">Test3</router-link>

    <router-view></router-view>
    <!-- --------------- xxxxxx ------------------ -->

    <Navbar @search="search"></Navbar>

    <div class="container-fluid p-3">
      <div class="row">

        <div class="col-sm-9">
          <Inventory @newItemAdded="addCartItem" :items="items"></Inventory>
        </div>

        <div class="col-sm-3">
            <Cart @itemRemoved="removeItem" :items="cart"></Cart>
        </div>
      
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Inventory from './components/Inventory'
import data from './data.js'

export default {
  components:{
    Navbar,
    Cart,
    Inventory 
  },
  data() {
    return {
      items:[],
      cart:[]
    }
  },
  mounted() {
    //console.log(data)
    this.items = data
  },
  methods: {
    search(keyword){
      this.items = data.filter(item => {
        return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      })
    },
    addCartItem(item){
      this.cart.push(item) //push into cart
    },
    removeItem(index){
      this.cart.splice(index,1) //1 means- every click 1 item delete
    }
  },
}
</script>

<style>
</style>
