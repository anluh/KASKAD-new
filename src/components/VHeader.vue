<script setup>
import { ref } from 'vue';

const collapsed = ref(false);
const bodyEl = document.querySelector('body');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;

  if (scrollTop > 20) {
    bodyEl.classList.add('collapsed');
  } else {
    bodyEl.classList.remove('collapsed');
  }
  collapsed.value = scrollTop > 20;
});
</script>
<template>
  <header :class="{ collapsed: collapsed }">
    <div class="main-header">
      <div class="container">
        <div class="main-header--wrapper">
          <Transition name="slide">
            <div
              v-if="!collapsed"
              class="main-header__title"
            >
              Піцерія
            </div>
          </Transition>
          <div class="main-header__logo">Kaskad</div>
          <Transition name="slide">
            <div
              v-if="!collapsed"
              class="main-header__sub-title"
            >
              вул. Данила Галицького 7
            </div>
          </Transition>
          <Transition name="slide">
            <div
              v-if="!collapsed"
              class="main-header__menu"
            >
              Меню
            </div>
          </Transition>
        </div>
      </div>
    </div>

    <nav class="sub-header">
      <div class="container">
        <ul>
          <li><a href="#pizza">піци</a></li>
          <li><a href="#salat">салати</a></li>
          <li><a href="#desert">десерти</a></li>
          <li><a href="#coffee">кава</a></li>
          <li><a href="#drinks">напої</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>
