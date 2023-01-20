
<template>
  <nav class="w-full bg-gradient-to-l from-blue-500 to-blue-800 text-white px-4 py-2">

<!--    <router-link class="mx-2" to="/"><a class="font-bold border p-1">Logo</a></router-link>-->
    <router-link
        v-for="item in list"
        :key="item.to"
        class="mx-2"
        :to="item.to"
    >{{item.title}}</router-link>

    <button class="mx-2" @click="$emit('open-login-model')">Login</button>

  </nav>

</template>

<script>
  export default {
    data(){
      return{
        list:[
          {title:"Dc Heros", to:"/dc-heros"},
          {title:"Calendar", to:"/calendar"},
          {title:"Markdown", to:"/markdown"},
          {title:"Slider", to:"/slider"},
          {title:"Calculator", to:"/calculator"},
          {title:"reousable-modal", to:"/reousable-modal"},
          {title:"Test", to:"/test"},
        ]
      }
    }
  }
</script>

