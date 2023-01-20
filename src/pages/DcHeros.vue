<template>
  <div class="m-auto">


    <h1 class="text-2xl text-center">Dc Heros {{ herosCount }}</h1>


    <ul>
      <li class="flex justify-between" v-for="(hero, index) in dcHeros" :key="hero.name">
        <div>{{ hero.name }}</div>
        <button v-on:click="removeHero(index)">x</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
      <input class="border rounded" v-model="newHero" placeholder="Type your hero name" ref="newHeroRef"/>
      <button class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white " type="submit">Add Hero</button>
    </form>
    <small>Total heros in the list is: {{ herosCount }}</small>
  </div>
</template>
<script>
import {computed, onMounted, ref} from "vue";

export default {
  setup() {
    let newHero = ref("");
    const newHeroRef = ref("");
    const dcHeros = ref([
      {name: "SuperGirl"},
      {name: "Flash"},
      {name: "Batman"},
      {name: "SuperMan"},
    ]);

    onMounted(() => {
      newHeroRef.value.focus();
    })

    const herosCount = computed({
      get:()=> dcHeros.value.length,
    });

    function removeHero(index) {
      dcHeros.value = dcHeros.value.filter((hero, i) => i != index);
    };

    function addHero() {
      if (newHero.value !== "") {
        dcHeros.value.push({name: newHero.value});
        newHero.value = "";
      }
    };
    return {dcHeros, newHero, removeHero, addHero, newHeroRef, herosCount}

  },

}
</script>