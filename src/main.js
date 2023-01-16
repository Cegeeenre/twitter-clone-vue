import { createApp } from 'vue'
import { createStore } from 'vuex'
import './style.css'
import App from './App.vue'

const store = createStore({
    state: {
        // tableau de tweets (id, text, date, user)
        tweets: [
            {
                id: 1,
                text: 'Lorem i',
                date: '2021-01-01',
                autor: 'gerard',
                stats : {
                    views : 444,
                    replies: 444,
                    retweets: 444,
                    likes: 444,
                }
            },
        ]
    },
    mutations: {
        addTweet(state, tweet) {
            state.tweets.push(tweet)
        }
    },
    actions: {
        addTweet({ commit }, tweet) {
            commit('addTweet', tweet)
        }
    }
})


const app = createApp(App)

// app.use(router)
app.use(store)
app.mount('#app')
