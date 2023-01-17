<template>
    <div class="trends">
        <h1 class="title">Trends for you</h1>
        <div class="list-item">
            <TrendsItem title="Nekfeu" category="Music" nbTweets="1876"/>
            <TrendsItem title="Skateboard" category="Sport" nbTweets="1111"/>
            <TrendsItem title="ChatGPT" category="Technology" nbTweets="1.5M"/>
        </div>
        <div class="more">
            See more
        </div>
    </div>
</template>
<script>
import TrendsItem from './TrendsItem.vue'
export default {
    name : 'TrendsContainer',
    components: {
        TrendsItem
    }
}
</script>
<style lang="scss">
@import '@/assets/theme/colors.scss';
    .trends{
        background-color: $color-light-grey;
        border-radius: 1rem;
        margin-top: 2rem;
        padding-top: 0.5rem;
        .title{
            font-size: 1.1rem;
            font-weight: 600;
            color: $color-black;
            margin-left: 1rem;
            margin-bottom: 1rem;
        }
        .list-item{
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
        }
        .more {
            width: calc(100% - 2rem);
            border-bottom-left-radius: 1rem;
            border-bottom-right-radius: 1rem;
            padding: 1rem;
            color: $tweet-action-blue;
            &:hover{
                cursor: pointer;
                background-color: rgb(230 236 237);
            }
        }
    }
</style>