<!-- This is Mother Component -->
<template>
  <div id="app">
    
    <Navbar></Navbar>

    <div class="container-fluid p-3">
      <div class="row">

        <div class="col-sm-9">
          <Inventory @newItemAdded="addCartItem" :items="items"></Inventory>
        </div>

        <div class="col-sm-3">
            <Cart :items="cart"></Cart>
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
      cart:[{ //for dummy data (not neccessary)
        id:1,
        title:'test',
        price:10.50,
        photo:"http://dummyimage.com/250x250.png/dddddd/000000",
      }]
    }
  },
  mounted() {
    //console.log(data)
    this.items = data
  },
  methods: {
    addCartItem(item){
      this.cart.push(item) //push into cart
    }
  },
}
</script>

<style>
</style>
