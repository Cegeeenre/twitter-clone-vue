<template>
    <div class="trends-item">
        <div class="trends-item-category">
            <h2>{{category}}</h2>
        </div>
        <div class="trends-item-title">
            <h1>{{title}}</h1>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TrendsItem',
    props: {
        title: {
            type: String,
            default: 'One piece'
        },
        category: {
            type: String,
            default: 'Trends for you'
        }
    }
}
</script>
<style lang="scss">
    
</style>