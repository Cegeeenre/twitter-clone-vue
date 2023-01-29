<template>
    <div class="tweet">
        <div class="tweet-icon">
            <Profile_image />
        </div>
        <div class="tweet-content">
            <div class="tweet-content-header">
                <div class="tweet-content-header-name">
                    <span>{{ tweet.autor }}</span>
                    <span>@{{ tweet.autor }}</span>
                    <span>·</span>
                    <span>{{ tweet.date }}</span>
                </div>
                <div class="tweet-content-header-more">
                    <LilPoints />
                </div>
            </div>
            <div class="tweet-content-text">
                <span>{{ tweet.message }}</span>
            </div>
            <div class="tweet-content-footer">
                <div class="tweet-content-footer-icons">
                    <div class="tweet-content-footer-statistics">
                        <Statistics />
                        <span>{{ tweet.stats.views }}</span>
                    </div>
                    <div class="tweet-content-footer-icons-comment">
                        <Comments />
                        <span>{{ tweet.stats.replies }}</span>
                    </div>
                    <div class="tweet-content-footer-icons-retweet">
                        <Retweet />
                        <span>{{ tweet.stats.retweets }}</span>
                    </div>
                    <div class="tweet-content-footer-icons-like">
                        <Like />
                        <span>{{ tweet.stats.likes }}</span>
                    </div>
                    <div class="tweet-content-footer-icons-share">
                        <Share />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Profile_image from '../BaseIcon/icons/profile_image.vue'
import LilPoints from '../BaseIcon/icons/lilpoints.vue'
import Comments from '../BaseIcon/icons/tweet/comments.vue'
import Retweet from '../BaseIcon/icons/tweet/retweet.vue'
import Like from '../BaseIcon/icons/tweet/like.vue'
import Share from '../BaseIcon/icons/tweet/share.vue'
import Statistics from '../BaseIcon/icons/tweet/statistics.vue'

export default {
    name: 'Tweet',
    props: {
        tweet: {
            type: Object,
            required: true
        }
    },
    components: {
        Profile_image,
        LilPoints,
        Comments,
        Retweet,
        Like,
        Share,
        Statistics
    }
}
</script>
<style lang="scss">
    @import '@/assets/theme/colors.scss';
    .tweet {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        width: calc(100% - 2rem);
        padding: 1rem;
        border-bottom: $light-grey-border;
        .tweet-icon{
            width: 10%;
            height: calc(100% - 1rem);
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            fill: $color-grey;
            padding-right: 0.8rem;
        }
        
        .tweet-content{
            // background-color: aquamarine;
            width: 100%;
            .tweet-content-header{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                .tweet-content-header-name{
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    font-size: 1rem;
                    span{
                        padding-right: 0.5rem;
                        font-weight: bold;
                    }
                }
                .tweet-content-header-more{
                    width: 1rem;
                    height: 1rem;
                    padding: 0.3rem;
                    border-radius: 50%;
                    fill: $color-grey;
                    transition: all 0.2s ease-in-out;
                    &:hover{
                        background-color: $action-vlight-blue;
                        fill: $tweet-action-blue;
                        cursor: pointer;
                    }
                }
            }
            .tweet-content-footer{
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                width: 100%;
                margin-top: 0.5rem;
                .tweet-content-footer-icons{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    width: 80%;
                    svg{
                        width: 1rem;
                        height: 1rem;
                        padding: 0.3rem;
                        border-radius: 50%;
                        fill: $color-grey;
                        transition: all 0.2s ease-in-out;
                        &:hover{
                            background-color: $action-vlight-blue;
                        fill: $tweet-action-blue;
                            cursor: pointer;
                        }
                    }
                    div {
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-start;
                        align-items: center;
                        span{
                            padding-left: 0.3rem;
                            font-size: 0.8rem;
                            color: $color-grey;
                        }
                    }
                }
            }
        }
    }
</style>