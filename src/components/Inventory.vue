<!-- This is Child Component -->
<template>
    <div class="row">
        <div v-for="(item,index) in items" :key="index" class="card m-2" style="width: 18rem;">
            <img :src="item.photo" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{item.title}}</h5>
                <p class="card-text">{{item.price}}</p>
                <a @click="addToCart(item)" class="btn btn-primary text-light">+ add</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['items'],
    methods: {
        addToCart(item){
            this.$emit('newItemAdded',item) //this is send to mother component (App.vue)
        }
    },
}
</script>

<style>
</style>