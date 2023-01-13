<template>
    <div class="trends-item">
        <div class="infos">
            <div class="trends-item-category">
                <h2>{{category}}</h2>
                <Lilpoints/>
            </div>
            <div class="trends-item-title">
                <h1>{{title}}</h1>
            </div>
            <div class="trends-items-nbTweets">
                <h2>{{ nbTweets }} Tweets</h2>
            </div>
        </div>
    </div>
</template>
<script>
import Lilpoints from '../BaseIcon/lilpoints.vue';
export default {
    name: 'TrendsItem',
    components: {
        Lilpoints
    },
    props: {
        title: {
            type: String,
            default: 'One piece'
        },
        category: {
            type: String,
            default: 'Trends for you'
        },
        nbTweets: {
            type: Number,
            default: 1527
        }
    }
}
</script>
<style lang="scss">
    .trends-item{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: calc(100% - 2rem);
        height: 100%;
        padding: 1rem;
        transition: all 0.2s ease-in-out;
        &:hover{
            background-color: rgb(239 241 241);
            cursor: pointer;
        }
        .infos{
            width: 100%;
            h2{
                font-size: 0.8rem;
                font-weight: 500;
                color: #536471;
                margin: 0;
            }
            h1{
                font-size: 0.9rem;
                font-weight: 600;
                color: black;
                margin: 0;
            }
            .trends-item-category{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                height: 100%;
                svg{
                    width: 1rem;
                    height: 1rem;
                    padding: 0.3rem;
                    border-radius: 50%;
                    fill: #536471;
                    transition: all 0.2s ease-in-out;
                    &:hover{
                        background-color: rgb(218 232 240);
                        fill: rgb(66 170 240);
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>