<template>
  <section @click="close" class="h-screen w-screen bg-gray-300 fixed top-0 opacity-50 left-0 top-0"></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3 text-center">

        <slot>Private some data here</slot>

      </div>
    </div>
  </div>
</template>
<script>
  export default {
    setup({emit}){
     function close(){
        emit("close");
      }
      return {close}
    },
  }
</script>