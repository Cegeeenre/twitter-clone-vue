<template>
    <div class="addTweet-container">
        <div class="addTweet-icon">
            <Profile_image />
        </div>
        <div class="addTweet-section">
            <div class="addTweet-textarea">
                <textarea placeholder="What's happening?" v-model="tweet"></textarea>
                <div class="addTweet-textarea-image"></div>
            </div>
            <div class="addTweet-buttons">
                <button class="addTweet-button" :class="{'active': tweet.length > 0}" @click="AddTweet">Tweet</button>
            </div>
        </div>
    </div>
</template>
<script>
import Profile_image from '../BaseIcon/icons/profile_image.vue'
export default {
    name: 'AddTweet',
    components: {
        Profile_image
    },
    data() {
        return {
            tweet: ''
        }
    },
    methods: {
        generateDateToday(){
            let date = new Date()
            let day = date.getDate()
            let month = date.getMonth() + 1
            let year = date.getFullYear()
            return `${day}/${month}/${year}` 
        },
        generateHourToday () {
            let date = new Date()
            let hours = date.getHours()
            return `${hours}`
        },
        generateMinuteToday () {
            let date = new Date()
            let minutes = date.getMinutes()
            return `${minutes}`
        },
        randNumbers() {
            return Math.floor(Math.random() * 1000)
        },
        AddTweetStore() {
            let newTweet = {
                id: this.$store.state.tweets.length + 1,
                text: this.tweet,
                date: this.generateDateToday(),
                autor: 'gerard',
                stats : {
                    views: this.randNumbers(),
                    replies: this.randNumbers(),
                    retweets: this.randNumbers(),
                    likes: this.randNumbers()
                }
            }
            console.log(newTweet)
            this.$store.commit('addTweet', newTweet)
            this.$emit('updateTweet')
            this.defaultTweet()
        },
        AddTweet() {
            if(this.tweet.length > 0) {
                console.log(this.tweet)
                this.axios
                    .post('http://localhost:3000/tweets', 
                    {
                        text : this.tweet,
                        autor : 'gerard',
                        date : this.generateDateToday(),
                        hour : this.generateHourToday(),
                        minute : this.generateMinuteToday(),
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    .then(response => {
                        console.log(response)
                        this.$emit('updateTweet')
                        this.defaultTweet()
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        },
        defaultTweet() {
            this.tweet = ''
        },
    }
}
</script>
<style lang="scss">
    @import '@/assets/theme/colors.scss';
    .addTweet-container{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        width: calc(100% - 1rem);
        padding: 1rem;
        .addTweet-icon{
            width: 10%;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            fill: grey;
        }
        .addTweet-section{
            width: 100%;
            .addTweet-textarea textarea {
                display: block;
                padding: 12px;
                font-size: 1.2rem;
                resize: vertical;
                background-color: transparent;
                border: none;
                width: calc(100% - 2rem);
                min-height: 5rem;
                max-height: 10rem;
                border-radius: 5px;
                color: black;
                overflow: hidden;
                border-bottom: 0.1px solid rgb(231 231 232);
                resize: none;
                &:focus {
                    outline: none;
                }
            }
            .addTweet-buttons{
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                align-items: center;
                padding: 1rem 1rem 0 1rem;
                .addTweet-button{
                // use the color from another file
                background-color: rgb(239 241 241);
                border-radius: 10rem;
                padding-left: 5rem;
                padding-right: 5rem;
                padding-top: 1rem;
                padding-bottom: 1rem;
                color: white;
                font-size: 1rem;
                border-style: none;
                cursor: pointer;
                transition: all 0.3s ease-in-out;
                &.active{
                    background-color: #1a8be0;
                }
            }
            }
        }
    }
</style>