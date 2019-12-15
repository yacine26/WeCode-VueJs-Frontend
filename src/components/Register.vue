<!-- Register Form --> 
<template>
    <div>
        <form @submit.prevent="register">
            <h5>Name</h5>
            <input id="name" v-model="name" type="text" required autofocus><br>
            <h5>Email</h5>
            <input id="email" v-model="email" type="email" required ><br>
            <h5>Password</h5>
            <input id="password" v-model="password" type="password" required ><br>
            <h5>Repeat-Password</h5>
            <input  id="c_password" v-model="c_password" type="password" required ><br><br>
            <input type="submit" value="Save">
        </form>
    </div>
</template>

<script>
//we will use axios across many of the components that will be created 
//for our application
    import axios from 'axios'

    export default {
        name: "Register",
//the data attributes that would bind to the HTML form
        data() {
            return{
                name:'',
                email:'',
                password:'',
                c_password:''

            }
        },mounted() {
            console.log("component mounted")
        },
        methods:{
            //Register method : We will get the data of a user into our application
            register(){

                axios.post('http://127.0.0.1:8000/api/register',{name:this.name,email:this.email,
                    password:this.password,c_password:this.c_password})
                    .then(function (response) {
                        console.log(response);
            //Redirection to login page
                        window.location = "/";

                    })
                    .catch(function(error) {
                        console.log(error);
                    })

            }
        }
    }
</script>

<style scoped>

</style>