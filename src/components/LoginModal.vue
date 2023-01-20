<template>

  <section @click="$emit('close-login')" class="h-screen w-screen bg-gray-300 fixed top-0 opacity-50"></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3 text-center">
          <h1 class="text-xl">Login</h1>
          <form>
            <div class="py-5 rounded">
              <input v-model="email" type="text" class="rounded shadow p-2 my-2 w-full" placeholder="Email or Username" >
              <input v-model="password" type="password" class="rounded shadow p-2 my-2 w-full" placeholder="Password" >
              <button type="submit" class="w-full rounded shadow py-2 bg-blue-600 text-white">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

  <script>
  import firebase from '../utiltes/firebase'
    export default {
      data(){
        return{

            email: "",
            password:"",

        }
      },
      // methods:{
      //   submit(){
      //     firebase.auth().signInWithEmailAndPassword(this.email,this.password).
      //     then(res=>{
      //       console.log(res)
      //     }).catch(e=>{
      //       console.log(e)
      //     })
      //   }
      // }

    }
  </script>

