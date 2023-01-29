<template>
    <div class="container">
        <input type="text" v-model="email"><span>email</span>
        <input type="text" v-model="password"><span>password</span>
        <input type="submit" @click="connection"><span>Connection</span>
    </div>
</template>
<script>
export default {
    name: "Connection",
    data () {
        return {
            email: '',
            password: '',
            user : {}
        }
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
                console.log(this.user)
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
}
</script>
<style lang="scss">
    
</style>