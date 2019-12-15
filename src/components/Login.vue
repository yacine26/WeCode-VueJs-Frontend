<!-- Login Form --> 
<template>
    <div>
        <form @submit.prevent="login">
            <h5>Email</h5>
            <input id="email" v-model="email" type="email" ><br>
            <h5>Password</h5>
            <input id="password" v-model="password" type="password" ><br><br>
            <input type="submit" value="Login"><br><br><br>
            <router-link to="/Register">Register</router-link>
        </form>
    </div>

</template>

<script>
//we will use axios across many of the components that will be created 
//for our application
import axios from 'axios'

    export default {
        name: "Login",
//the data attributes that would bind to the HTML form
        data() {
            return{
                email:'',
                password:'',
                currentuser:[]

            }
        },mounted() {
            console.log("component mounted")
        },
        methods:{
//The login action will be used to authenticate a user before logging in into the application
            login(){
                let self = this ;
                axios.post('http://127.0.0.1:8000/api/login',{email:this.email,password:this.password})
                    .then(function (response) {
                        console.log(response);
                        self.currentuser = response.data.success;
                        //Redirection to ideas page 
                        window.location = "/ideas/"+self.currentuser.id;

                    })
                    .catch(function(error) {
                        console.log(error);
                        alert(error)
                    })



            }
        }
    }
</script>

<style scoped>

</style>