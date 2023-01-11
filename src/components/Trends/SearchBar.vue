<template>
    <div class="container">
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
    .container{
        margin-top: 2rem;
        .search-bar{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: row;
            margin-left: 1rem;
            padding-left: 1rem;
            padding-right: 1rem;
            width: 90%;
            height: 50px;
            border-radius: 7rem;
            background-color: rgb(239 243 244);
            border: 1.5px solid rgb(255, 255, 255);
            &:focus-within{
                border: 1.5px solid rgb(29 161 242);
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
                    fill: #536471;
                }
                input{
                    border : none;
                    width: 100%;
                    background-color: rgb(239 243 244);
                    color: black;
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
                fill: #536471;
                background-color: #1DA1F2;
                padding: 0.3rem;
                border-radius: 50%;
                fill: white;
                &:hover{
                    cursor: pointer;
                    background-color: #1290df;
                }
            }
        }
    }
</style>