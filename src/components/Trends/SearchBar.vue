<template>
        <div class="search-bar">
            <div class="box">
                <div class="search-icon">
                    <Search />
                </div>
                <input type="text" placeholder="Search Twitter" class="search-input" v-model="searchValue">
            </div>
            <div class="reset-icon" v-if="searchValue" @click="resetValue">
                <Close />
            </div>
        </div>
</template>
<script>
import Search from '../BaseIcon/icons/search.vue'
import Close from '../BaseIcon/icons/close.vue'
export default {
    name: 'SearchBar',
    components: {
        Search,
        Close
    },
    data(){
        return {
            searchValue: ''
        }
    },
    methods: {
        resetValue(){
            this.searchValue = ''
        }
    }
}
</script>
<style lang="scss">
    @import '@/assets/theme/colors.scss';
    .search-bar{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        margin-top: 2rem;
        padding-left: 1rem;
        height: 50px;
        border-radius: 7rem;
        background-color: $color-light-grey;
        border: 1.5px solid $color-light-grey;
        &:focus-within{
            border: $light-blue-border;
        }
        .box{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: row;
            width: 100%;
            .search-icon{
                width: 8%;
                margin-top: 6px;
                fill: $color-grey;
            }
            input{
                border : none;
                width: 100%;
                background-color: $color-light-grey;
                color: $color-black;
                &:focus{
                    outline: none;
                }
            }
        }
        .reset-icon{
            display: flex;
            justify-content: center;
            align-items: center;

            width: 7%;
            height: fit-content;
            fill: $color-grey;
            background-color: $tweet-action-blue;
            border-radius: 50%;
            fill: $color-white;
            svg{
                margin: 0.3rem;
            }
            &:hover{
                cursor: pointer;
                background-color: $tweet-action-blue-hover;
            }
        }
    }
    
</style>