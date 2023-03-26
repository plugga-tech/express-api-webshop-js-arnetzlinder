<script lang="ts">



export default {
    name: 'UserLogin',
    props: ['loginEmail', 
        'loginPassword',
        
    ],
    data() {
        return {
            userGreeting: ""    
        };
    },
    methods: {
        loginUser(event: Event) {
            event.preventDefault();

            let loginEmailElement = document.getElementById("login-email") as HTMLInputElement;
            let loginEmail = loginEmailElement.value
            let loginPasswordElement = document.getElementById("login-password") as HTMLInputElement;
            let loginPassword = loginPasswordElement.value

            let loginUser = {
                email: loginEmail,
                password: loginPassword
            }
        console.log(loginUser);
        fetch("http://localhost:3000/api/users/login", {
            credentials: 'include',
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify(loginUser)
           })
           .then(res => res.json())
           .then(data => {
                console.log(data)
                if (data.name) {
                    this.userGreeting = "Godmorgon " + data.name;
                    localStorage.setItem("username", data.name);
                }
                else {
                    //userGreeting.innerText = "Inloggning misslyckades, var vänlig och kontrollera användarnamn och lösenord."
                }
    
           });
        }
    },
    beforeMount() {
        fetch("http://localhost:3000/api/users/checklogin", {
            credentials: 'include'
           })
           .then(res => res.json())
           .then(data => {
                
                if (data.name) {
                    this.userGreeting = "Godmorgon " + data.name;
                }
                else {
                    //userGreeting.innerText = "Inloggning misslyckades, var vänlig och kontrollera användarnamn och lösenord."
                }
    
           });
    
    }
};
//export default{};
</script>

<template>
    <div>
        <h1> Välkommen till Sussie syr</h1>
        <div v-if="userGreeting.length == 0" :key="userGreeting">
            <h2> För att beställa behöver du logga in nedan</h2>
            <input type="text" placeholder="email" class="login-email" id="login-email">
            <br>
            <input type="password" placeholder="lösenord" class="login-password" id="login-password">
            <br>
            <button id="loginBtn" @click="loginUser($event)"> Logga in</button>
            <button class="logoutBtn"> Logga ut</button>
        </div>
        <div v-else>
            <h2>{{ userGreeting }}</h2>


        </div>
</div>
</template>

<style lang="scss">

</style>