<template>
    <div class="card-stats">
        <div v-for="(stat, index) in itemStat" :key="index" class="one-third">
            <div class="stat-value">{{ stat.value }}</div>
            <span class="stat">{{ stat.title }}</span>
        </div>
    </div>
</template>

<script>
export default{
    name: "FooterCard",
    props:{
        itemStat:{
            type: Array
        }
    }
}
</script>