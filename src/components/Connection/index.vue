<template>
    <div class="connectionbox">
        <div class="container-connection">
            <header>
                <div class="logo">
                    <Twitter />
                </div>
            </header>
            <h1>Connection</h1>
            <form @submit.prevent="submitForm">
                <div class="form">
                    <div class="input-form" @click="focusInput($event)">
                        <div class="label">
                            <label for="email-input">E-mail</label>
                        </div>
                        <div class="input">
                            <input type="text" id="email-input" v-model="email" @blur="blurInput">
                        </div>
                    </div>
                    <div class="input-form" @click="focusInput($event)">
                        <div class="label">
                            <label for="password-input">Password</label>
                        </div>
                        <div class="input">
                            <input type="text" id="password-input" v-model="password" @blur="blurInput">
                        </div>
                    </div>
                    <span>Forgot your password ?</span>
                </div>
                <div class="addTweet-buttons">
                    <button class="addTweet-button" type="submit" :class="{ disabled : !email && !password }" @click="connection">Connection</button>
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
            // if (!this.email.trim() || !this.password.trim()) return
            fetch("/api/connection", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: this.email,
                    password: this.password
                })
            })
            .then(response => {
                this.user = response.data
                router.push({ name: 'Home' })
            })
        },
        submitForm () {
        },
        focusInput(event) {
            event.target.querySelector('input').focus();
            event.currentTarget.querySelector('.label').classList.add('active');
        },
        blurInput() {
            this.$el.querySelectorAll('.input-form').forEach(el => {
                if (!el.querySelector('input').value) {
                    el.querySelector('.label').classList.remove('active');
                }
            });
        }
    }
}
</script>
<style lang="scss">
    @import '@/assets/theme/colors.scss';
    .connectionbox{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color : $background-light-grey;
        .container-connection{
            background-color: $color-white;
            width: 23%;
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
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    
                    .input-form {
                        background-color: $color-light-grey;
                        width: calc(100% - 0.3rem);
                        height: 100%;
                        border-radius: 6px;
                        border: 2px solid $color-light-grey;
                        margin: 1rem;
                        padding: 0.3rem;
                        cursor : pointer;
                        .label{
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
                                -webkit-touch-callout: none;
                                -webkit-user-select: none;
                                -khtml-user-select: none;
                                -moz-user-select: none;
                                -ms-user-select: none;
                                user-select: none;
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
                        & * {
                            cursor: pointer;
                        }
                    }
                }
                .addTweet-buttons{
                    width: 100%;
                    margin-top: 5rem;
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
                        &.disabled{
                            background-color: $color-grey;
                            cursor: no-drop;
                        }
                    }
                }
                
            }
        }
    }
</style>