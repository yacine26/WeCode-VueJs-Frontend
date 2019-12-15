<!-- Displaying ideas --> 
<template v-if="results">
    <center><div>
        <table>
            <thead>
            <tr>
                <th colspan="2">Ideas</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Title</td>


                <td>Subject</td>

            </tr>
            <!-- loop for -->
            <tr v-bind:key="result" v-for="result in results">
                <td>{{result.title}}</td>
                <td>{{result.subject}}</td>

            </tr>
            </tbody>
        </table>
        <br>
        <!-- Adding ideas Form --> 
        <form @submit.prevent="add">
            <input type="text" v-model="title" id="title" placeholder="Title" required autofocus>
            <input type="text" v-model="subject" id="subject" placeholder="Subject" required >
            <input type="number" id="user" :value=($route.params.user_id)>
            <input type="submit" value="Add an idea">
        </form>




    </div>
    </center>
</template>

<script>
//we will use axios across many of the components that will be created 
//for our application
    import axios from 'axios'

    export default {
        name: "Ideas",
        
//the data attributes that would bind to the HTML form
        data() {
            return{
                results:[],
                title: '',
                subject:'',
                user:''


            }

        },mounted() {
//Display ideas
            console.log(document.getElementById("user").value);

            console.log("component mounted")
            axios.post('http://127.0.0.1:8000/api/display')
                .then( response => {
                this.results = response.data.success;
            })
                .catch(function(error) {
                    console.log(error);
                    alert(error)
                })

        },
        methods:{
//Add idea method
            add(){

                axios.post('http://127.0.0.1:8000/api/add',{subject:this.subject,title:this.title,user_id:document.getElementById("user").value})
                    .then(function (response) {
                        console.log(response);
                        window.location = "/ideas/"+(document.getElementById("user").value);
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
    table,
    td {
        border: 1px solid #333;
    }

    thead,
    tfoot {
        background-color: #333;
        color: #fff;
    }

</style>