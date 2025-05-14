<template>
	<RepoListView
  	v-for="list in lists"
	  :key="list.id"
  	:title="list.title"
	></RepoListView>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import RepoListView from './RepoListView.vue'

const lists = ref([
  { id: 1, title: 'Vue와 함께한 나의 여행' },
  { id: 2, title: 'Vue로 블로깅하기' },
  { id: 3, title: 'Vue가 재미있는 이유' }
])
</script>