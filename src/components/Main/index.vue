<template>
    <div class="main">
        <div class="header">
            <div class="title">
                <h2>Welcome</h2>
            </div>
            <div class="content">
                <div class="button active">
                    <span class="foryou">For you</span>
                </div>
                <div class="button inactive" >
                    <span class="following">Following</span>
                </div>
            </div>
        </div>
        <div class="tweet">
            <AddTweet @updateTweet="updateTweet" />
        </div>
        <div class="feed">
            <div class="feed-content-tweet" v-for="tweet in tweets" :key="tweet.id">
                <Tweet :tweet="tweet" />
            </div>
        </div>
    </div>
</template>
<script>
import AddTweet from './AddTweet.vue'
import Tweet from './Tweet.vue'
export default {
    name :'Main',
    components: {
        AddTweet,
        Tweet
    },
    data () {
        return {
            active: 'foryou',
            tweets: []
        }
    },
    created() {
        this.tweets = this.$store.state.tweets
    },
    methods: {
        updateTweet() {
            this.tweets = this.$store.state.tweets
        }
    }
}
</script>
<style lang="scss">
    .main{
        width: 100%;
        .header{
            width: 100%;
            height: 10%;
            // background-color: rgb(255, 255, 255);
            .title{
                padding-left: 2rem;
                color: black;
            }
            .content{
                height : 50px;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                border-bottom: 0.1px solid rgb(231 231 232);
                span{
                    height: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    border-radius: 0.5;
                    color: rgb(141, 141, 141);
                    font-weight: 600;
                }
                .button{
                    width: 50%;
                    height: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    transition: all 0.3s ease-in-out;
                    &:hover{
                        background-color: rgb(231 231 232);
                    }
                    &.active > span{
                        border-bottom: 2px solid #1a8be0;
                        color: black;
                    }
                    &.inactive > span{
                        border-bottom: none;
                        color: rgb(141, 141, 141);
                    }
                }
            }
        }
        .tweet{
        }
    }
</style>