<!-- This is Child Component -->
<template>
    <ul class="list-group p-3 mt-5">
        <li class="list-group-item">
            <span class="item-name">Name</span>
            <span class="item-price float-right">Price</span>
        </li>
        <li v-for="(item,index) in items" :key="index" class="list-group-item">
            <button @click="removeItem(index)" class="mr-1 btn btn-sm btn-danger font-weight-bold">-</button>
            <span class="item-name">{{item.title}}</span>
            <span class="item-price float-right">{{item.price}}</span>
        </li>
        <li class="list-group-item">
            <span class="item-name font-weight-bold font-italic">Total</span>
            <span class="item-price float-right font-weight-bold font-italic">${{ totalPrice }}</span>
        </li>
    </ul>
</template>

<script>
export default {
    props:['items'],
    computed: {
        totalPrice(){
            var total = 0
            this.items.forEach(item => {
                total += parseFloat(item.price)
            })
            return total
        }
    },
    methods: {
        removeItem(index){
            this.$emit('itemRemoved',index) //it send to mother component (App.vue) for handle this
        }
    },
    
}
</script>

<style>
</style>