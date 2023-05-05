<template>
    <div class="wrapper-person">
        <div v-if="item" class="item">
            <img :src="require(`@/assets/img/${item.img}`)" :alt="item.title">
            <h1 class="title">{{ item.title }}</h1>
            <p>{{ item.descr }}</p>
            <FooterCard :itemStat="item.info"/>
            <br>
            <div style="margin-top: 10px;">
                <router-link to="/" class="btn btnPrimary">Back to home</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import items from '@/seeders/items';
import FooterCard from '@/components/UI/FooterCard'
export default{
    components: {
        FooterCard
    },
    data: ()=>({
        item: null
    }),
    created(){
        const alias = this.$route.params.itemAlias;
        const item = items.find(el=> el.alias === alias);
        this.item = item
    }
}
</script>

<style lang="scss" scoped>
.wrapper-person{
   display: flex;
   justify-content: center;
   .item{
    text-align: center;
    width: 50%;
   }
}
h1{
    color: #fff;
}
.card-stats{
    border-radius: 14px;
    margin-top: 20px;
}
</style>