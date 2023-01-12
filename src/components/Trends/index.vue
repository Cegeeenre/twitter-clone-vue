<template>
    <aside>
        <div class="container">
            <SearchBar />
            <TrendsContainer />
        </div>
    </aside>
</template>
<script>
import SearchBar from './SearchBar.vue'
import TrendsContainer from './TrendsContainer.vue';
export default {
    name: 'Trends',
    components: {
        SearchBar,
        TrendsContainer
    }
}
</script>
<style lang="scss">
    aside{
        // background-color: aquamarine;
        width: 80%;
        height: 100%;
        margin-left: 1rem;
    }
</style>