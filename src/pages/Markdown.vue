<template>
  <div class="p-20 w-full" style="box-sizing: border-box">
    <h1 class="w-full text-center font-bold text-3xl mb-3">Markdown</h1>
    <section class="flex w-full h-screen">
      <article class="w-1/2 border">
        <textarea class="w-full h-full" v-model="text"></textarea>
      </article>
      <article class="w-1/2 border bg-gray-100" v-html="markedText"></article>
    </section>
  </div>
</template>
<script>
import {marked} from "marked";
export default {
  data(){
    return{
      text: ""
    }
  },
  computed:{
    markedText(){
      return marked(this.text)
    }
  }
}
</script>
