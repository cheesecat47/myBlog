<script setup>
import { RouterLink } from 'vue-router';
import { useUserStore } from '../stores/userStore.js';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const { isLogin } = storeToRefs(userStore);

const logout = () => {
  isLogin.value = false;
  alert('logout');
};
</script>

<template>
  <header class="box-border mb-6">
    <nav class="flex items-center justify-between flex-wrap p-8">
      <div class="flex items-center flex-shrink-0 mr-6">
        <RouterLink :to="{name: 'home'}" class="font-bold text-3xl">Blog Title</RouterLink>
      </div>
      <div v-if="!isLogin" class="block lg:flex lg:items-center lg:w-auto">
        <RouterLink to="/">로그인</RouterLink>
      </div>
      <div v-if="isLogin" class="block lg:flex lg:items-center lg:w-auto">
        <RouterLink to="/" class="mr-6">마이페이지</RouterLink>
        <span @click="logout">로그아웃</span>
      </div>
    </nav>
    <hr class="border border-gray-500" />
  </header>
</template>
