<script setup>
import { reactive, ref } from 'vue';
import db from '../firebase/init';
import { collection, doc, getDoc } from 'firebase/firestore';

const fireMenu = collection(db, 'menu');

const menuData = ref({});
const isLoaded = ref(false);

const getData = async () => {
  const menu = await getDoc(doc(db, 'menu', '1'));
  menuData.value = menu.data();
  isLoaded.value = true;
};

getData();
</script>

<template>
  <main v-if="isLoaded">
    <div class="container">
      <div
        id="pizza"
        v-if="menuData.pizza.length"
      >
        <h2>Ваша улюблена піца!</h2>
      </div>
      <section v-if="menuData.pizza.length">
        <div
          v-for="pizza in menuData.pizza"
          class="menu-item"
        >
          <h3>
            {{ pizza.name }}<mark>{{ pizza.price }}</mark>
          </h3>
          <p>{{ pizza.desc }}</p>
        </div>
      </section>

      <h2
        v-if="menuData.salats.length"
        id="salat"
      >
        Салати
      </h2>

      <section v-if="menuData.salats.length">
        <div
          v-for="salat in menuData.salats"
          class="menu-item"
        >
          <h3>
            {{ salat.name }}<mark>{{ salat.price }}</mark>
          </h3>
          <p>{{ salat.desc }}</p>
        </div>
      </section>

      <h2
        v-if="menuData.deserts.length"
        id="desert"
      >
        Десерти
      </h2>
      <section v-if="menuData.deserts.length">
        <div class="menu-item"><h3 class="center">Бельгійські вафлі</h3></div>
        <div class="menu-item" v-for="item in menuData.deserts">
          <h3>{{ item.name }}<mark>{{ item.price }}</mark></h3>
          <p v-if="item.desc">{{ item.desc }}</p>
        </div>
      </section>

      <h2
        v-if="menuData.coffee.length"
        id="coffee"
      >
        Супер смачна кава!
      </h2>
      <section
        v-if="menuData.coffee.length"
        class="small-list"
      >
        <div class="menu-item">
          <h3 v-for="item in menuData.coffee">
            {{ item.name }} <mark>{{ item.price }}</mark>
          </h3>
        </div>
      </section>

      <h2
        v-if="menuData.drinks.length"
        id="drinks"
      >
        Холодні напої
      </h2>
      <section
        v-if="menuData.drinks.length"
        class="small-list"
      >
        <div class="menu-item">
          <h3 v-for="item in menuData.drinks">
            {{ item.name }} <mark>{{ item.price }}</mark>
          </h3>
        </div>
      </section>
    </div>
  </main>
</template>
