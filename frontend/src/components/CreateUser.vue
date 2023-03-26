<script lang="ts">
export default {
    name: 'CreateUser',
    props: ['createEmail', 
        'createPassword',
        
    ],
    data() {
        return {
            userGreeting: ""    
        };
    },
    methods: {
        createUser(event: Event) {
            event.preventDefault();

            let createEmailElement = document.getElementById("create-email") as HTMLInputElement;
            let createEmail = createEmailElement.value
            let createPasswordElement = document.getElementById("create-password") as HTMLInputElement;
            let createPassword = createPasswordElement.value

            let createUser = {
                email: createEmail,
                password: createPassword
            }
        console.log(createUser);
        fetch("http://localhost:3000/api/users/add", {
            credentials: 'include',
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify(createUser)
           })
           .then(res => res.json())
           .then(data => {
                console.log(data)
                if (data.email) {
                    this.userGreeting = "Tack för att du skapat en användare hos mig " + data.email;
                }
                else {
                    this.userGreeting = "Inloggning misslyckades, var vänlig och kontrollera användarnamn och lösenord."
                }
    
           });
        }
    },
};
//export default{};
</script>

<template>
    <div class="about" v-if="userGreeting.length == 0" >
      <h3>Skapa en användare</h3>
        <input id="create-email" type="text" placeholder="email">
          <br>
          <input id="create-password" type="password" placeholder="lösenord">
          <br>
          <button @click="createUser"> Skapa användare</button>
    </div>
    <div v-else>
        <h2>{{ userGreeting }}</h2>
    </div>
  </template>

  <style scoped>
    input {
        margin:1rem;
    }

</style>
