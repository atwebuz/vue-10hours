<template>
  <section class="flex w-full">
      <div class="m-auto">
         <h1 class="text-2xl text-center"> Calculator</h1>
        <p id="pp" class="text-2xl text-right my-4 h-10 mb-1 w-40 overflow-x-scroll" style="direction: rtl">
          {{ currentNum }}
        </p>
        <div class="h-5">
        <small v-if="selectOperation">{{prevNum}} {{selectOperation}} {{currentNum}}</small>
        </div>
        <div class="my-10 grid grid-cols-4 gap-1">
          <button @click="pressed('1')" class="p-2 border rounded shadow w-10 h-10 ">1</button>
          <button @click="pressed('2')" class="p-2 border rounded shadow w-10 h-10 ">2</button>
          <button @click="pressed('3')" class="p-2 border rounded shadow w-10 h-10 ">3</button>
          <button @click="pressed('+')" class="p-2 border rounded shadow w-10 h-10 ">+</button>
          <button @click="pressed('4')" class="p-2 border rounded shadow w-10 h-10 ">4</button>
          <button @click="pressed('5')" class="p-2 border rounded shadow w-10 h-10 ">5</button>
          <button @click="pressed('6')" class="p-2 border rounded shadow w-10 h-10 ">6</button>
          <button @click="pressed('-')" class="p-2 border rounded shadow w-10 h-10 ">-</button>
          <button @click="pressed('7')" class="p-2 border rounded shadow w-10 h-10 ">7</button>
          <button @click="pressed('8')" class="p-2 border rounded shadow w-10 h-10 ">8</button>
          <button @click="pressed('9')" class="p-2 border rounded shadow w-10 h-10 ">9</button>
          <button @click="pressed('*')" class="p-2 border rounded shadow w-10 h-10 ">*</button>
          <button @click="pressed('0')" class="p-2 border rounded shadow h-10 w-10 ">0</button>
          <button @click="pressed('c')" class="p-2 border rounded shadow h-10 w-10 ">C</button>
          <button @click="pressed('=')" class="p-2 border rounded shadow h-10 w-10 ">=</button>
          <button @click="pressed('/')" class="p-2 border rounded shadow h-10 w-10 ">/</button>

        </div>
      </div>
  </section>
</template>
<style>
#pp::-webkit-scrollbar {
opacity: 0;

}

#pp::-webkit-scrollbar-track {
  opacity: 0;
}

#pp::-webkit-scrollbar-thumb {
opacity: 0;
}
</style>
<script>
import {onMounted, onUnmounted, ref} from "vue";
export default {
  setup(){
      // const calculation = ref("");
      const operation = ['+','-','*','/'];
      const numbers = ['1','2','3','4','5','6','7','8','9','0'];
    const currentNum = ref("");
    const prevNum = ref("");
    const selectOperation = ref("");
      function pressed(value){
        if(value === '=' || value === "Enter") calculate();
        else if(value === 'c') clear();
        else if(operation.includes(value)) applyOperation(value);
        else if(numbers.includes(value)) appendNumber(value);
      }

      function appendNumber(value){
        currentNum.value = currentNum.value + value;
      }

      function applyOperation(value){
        calculate();
        prevNum.value = currentNum.value;
        currentNum.value="";
        selectOperation.value = value;

      }
    function calculate(){
      if(selectOperation.value === '*') multiply();
      else if(selectOperation.value === '/') divide();
       else if(selectOperation.value === '-') subtract();
      else if(selectOperation.value === '+') sum();

      prevNum.value="";
      selectOperation.value="";

      // currentNum.value = prevNum.value * currentNum.value
    }

    function multiply(){
      currentNum.value = prevNum.value * currentNum.value;
    }
    function divide(){
      currentNum.value = prevNum.value / currentNum.value;
    }
    function subtract(){
      currentNum.value = prevNum.value - currentNum.value;
    }
    function sum(){
      currentNum.value = +prevNum.value + +currentNum.value;
    }
    function clear(){
      currentNum.value = "";
    }

    const handleKeydown = (e) => pressed(e.key);



    onMounted(()=> window.addEventListener("keydown", handleKeydown));
    onUnmounted(()=> window.removeEventListener("keydown", handleKeydown));
    

      return {currentNum,pressed,selectOperation,prevNum};
  }
}
</script>