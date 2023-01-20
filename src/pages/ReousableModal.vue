<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl my-5">Reousable Modal</h1>
      <Modal v-if="isRedModalOpen" @close="isRedModalOpen = false">
          <h1 class="text-red-700">Red Modal</h1>
      </Modal>
      <button @click="isRedModalOpen = true">red</button>

      <Modal v-if="isBlueModalOpen" @close="isBlueModalOpen = false">
        <h1 class="text-green-700">green Modal</h1>
      </Modal>
      <button @click="isBlueModalOpen = true">green</button>

    </div>
  </section>
</template>
<script>
import Modal from "@/components/Modal.vue";
import {ref} from "vue";
  export default {
    components:{Modal},
    setup(){
      const isRedModalOpen = ref(false)
      const isBlueModalOpen = ref(false)
      return {isRedModalOpen,isBlueModalOpen};
    }

  }
</script>