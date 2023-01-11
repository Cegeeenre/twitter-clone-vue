<template>
    <div class="container">
        <SearchBar />
        <div class="trends">
            <h1 class="title">Trends for you</h1>
            <TrendsItem title="Nekfeu" category="Music" />
        </div>
    </div>
</template>
<script>
import SearchBar from './SearchBar.vue'
import TrendsItem from './TrendsItem.vue'
export default {
    name: 'Trends',
    components: {
        SearchBar,
        TrendsItem
    }
}
</script>
<style lang="scss">
    .container{
        background-color: aquamarine;
        width: 70%;
    }
</style>