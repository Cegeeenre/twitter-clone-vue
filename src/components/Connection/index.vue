<template>
    <div class="container">
        <div class="container-connection">
            <header>
                <div class="logo">
                    <Twitter />
                </div>
            </header>
            <h1>Connection</h1>
            <form @submit.prevent="submitForm">
                <div class="form">
                    <div class="input-form" @click="focusInput">
                        <div class="label">
                            <label for="email-input">E-mail</label>
                        </div>
                        <div class="input">
                            <input type="text" id="email-input" v-model="email" @blur="blurInput">
                        </div>
                    </div>
                    <input type="text" v-model="password">
                </div>
                <div class="addTweet-buttons">
                    <button class="addTweet-button" type="submit" @click="connection">Tweet</button>
                    <span>You do not have an account ? <span> Sign up</span></span>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import router from '../../router'
import Twitter from '../BaseIcon/icons/twitter.vue'
export default {
    name: "Connection",
    data () {
        return {
            email: '',
            password: '',
            user : {}
        }
    },
    components : {
        Twitter
    },
    methods: {
        connection() {
            this.axios
            .post('http://localhost:3000/login', {
                email : this.email,
                password : this.password
            })
            .then(response => {
                this.user = response.data
                router.push({ name: 'Home' })
            })
            .catch(error => {
                console.log(error)
            })
        },
        submitForm () {
        },
        focusInput() {
            this.$el.querySelector('.label').classList.add('active');
        },
        blurInput() {
            this.$el.querySelector('.label').classList.remove('active');
        }
    }
}
</script>
<style lang="scss">
    @import '@/assets/theme/colors.scss';
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        .container-connection{
            background-color: blueviolet;
            width: 30%;
            height: 50%;
            padding: 3rem;
            border-radius: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            header{
                .logo {
                    svg {
                        width: 50px;
                        height: 50px;
                        fill : $tweet-action-blue;
                    }
                }
            }
            form {
                width: 100%;
                .form{
                    background-color: aquamarine;
                    width: 100%;
                    margin-bottom: 10rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    
                    .input-form {
                        background-color: burlywood;
                        width: calc(100% - 0.3rem);
                        height: 100%;
                        border-radius: 6px;
                        border: 2px solid #d6dee2;
                        margin: 1rem;
                        padding: 0.3rem;
                        .label{
                            // get the label to the left at the middle
                            width: 100%;
                            height: 100%;
                            top : 50%;
                            transform: translateY(50%);
                            transition: all 0.3s ease-in-out;
                            label {
                                display: flex;
                                justify-content: flex-start;
                                align-items: center;
                                width: 100%;
                                height: 100%;
                            }
                            &.active{
                                top: 0;
                                color: $tweet-action-blue;
                                transform: translateY(0);
                                font-size: 12px;
                            }
                        }
                        .input{
                            height: 100%;
                            input{
                                width: 100%;
                                border-style: none;
                                background-color: transparent;
                                font-size: 1rem;
                                &:focus{
                                    height: 100%;
                                    outline: none;
                                }
                            }
                        }
                        &:focus-within{
                            border : 2px solid $tweet-action-blue;
                        }
                    }
                }
                .addTweet-buttons{
                    width: 100%;
                    .addTweet-button{
                        width: 100%;
                        background-color: $tweet-action-blue;
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
                        &:hover{
                            background-color: $tweet-action-blue-hover;
                        }
                    }
                }
                
            }
        }
    }
</style>