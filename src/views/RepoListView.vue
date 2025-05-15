<template>
  <h1>저장소 탐색</h1>
  <h4>내가 추가한 저장소</h4>
  <div id="aside">
    <div class="absolute top-4 right-4 flex items-center space-x-2">
      <label for="githubUrl" class="sr-only">저장소 검색</label>
      <input
        id="githubUrl"
        v-model="githubUrl"
        type="text"
        placeholder="저장소 이름 또는 URL 검색"
        class="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        @click="$emit('add-repo', repo.id)"
        class="px-3 py-2 rounded text-xs font-medium bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-200 ease-in-out">
        + 추가
      </button>
    </div>
  </div>
  <div>
    <RepoList
      v-for="repo in repos"
      :key="repo.id"
      :repo="{ 
        title: repo.text, 
        descript: repo.description,
        language: repo.language,
        stars: repo.stars,
        forks : repo.forks,
        url: repo.url
        }"
    >
      {{ repo.text , repo.description, repo.language, repo.stars, repo.forks, repo.url }}
      <button @click="clickRepo(repo)">분석보기</button>
  </RepoList>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { mockRepoData } from "../mockData.js";
import RepoList from "../components/RepoList.vue";

export default {
  components: {
    RepoList
  },
  setup() {
    // const router = useRouter();

    const repos = ref([
      { id: mockRepoData.nodejs.id, text: mockRepoData.nodejs.name, description: mockRepoData.nodejs.description, forks: mockRepoData.nodejs.forks, stars: mockRepoData.nodejs.stars, language : mockRepoData.nodejs.language, url: mockRepoData.nodejs.githubUrl },
      { id: mockRepoData.expressjs.id, text: mockRepoData.expressjs.name, description: mockRepoData.expressjs.description, forks: mockRepoData.expressjs.forks, stars: mockRepoData.expressjs.stars, language : mockRepoData.expressjs.language, url: mockRepoData.expressjs.githubUrl },
      { id: mockRepoData.vscode.id, text: mockRepoData.vscode.name, description: mockRepoData.vscode.description, forks: mockRepoData.nodejs.forks, stars: mockRepoData.vscode.stars, language : mockRepoData.vscode.language, url: mockRepoData.vscode.githubUrl },
    ]);

    return { repos };
  },
};
</script>
