<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useUserStore } from '../stores/userStore.js';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const { user_info } = storeToRefs(userStore);

// Todo: API로 카테고리 목록 받아와서 동적 생성
const categories = ref(['Java', 'Spring Boot', 'Vue.js', '알고리즘 문제']);
</script>

<template>
  <!-- 좌측 Navbar -->
  <nav class="lg:w-48 lg:shrink-0 px-2 py-4 rounded border">
    <!-- 프로필 영역. 누르면 소개 페이지로 이동 -->
    <RouterLink
      :to="{ name: 'about' }"
      class="flex flex-row lg:flex-col items-center justify-center"
    >
      <!-- Todo: API로 받아온 유저 정보에 프로필 이미지 url도 추가 필요 -->
      <img
        class="rounded-sm p-2 w-40 lg:w-full"
        src="../assets/6B152AA5-CC62-49B6-913A-7C702AF22F1E_1_102_o.jpeg"
        alt="profile image"
      />
      <div class="flex flex-col items-center">
        <p class="pt-2 text-xl">{{ user_info.name }}</p>
        <p class="pb-2 text-sm text-gray-500">{{ user_info.id }}</p>
      </div>
    </RouterLink>
    <hr class="m-2" />

    <!-- 카테고리 목록 -->
    <ul>
      <li
        class="p-2 text-center"
        v-for="(item, index) in categories"
        :key="index"
      >
        {{ item }}
      </li>
    </ul>
  </nav>
</template>
