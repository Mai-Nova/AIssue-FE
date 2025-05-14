<template>
  <div>
    <IssueCard
      v-for="repo in repos"
      :key="repo.id"
      :issue="{ title: repo.text, repoName: repo.text }"
    >
      {{ repo.text }}
      <button @click="clickRepo(repo)">상세분석</button>
    </IssueCard>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { mockRepoData } from "../mockData.js"; // 실제 경로 확인
import IssueCard from "../components/IssueCard.vue";

export default {
  components: {
    IssueCard,
  },
  setup() {
    // const router = useRouter();

    const repos = ref([
      { id: mockRepoData.nodejs.id, text: mockRepoData.nodejs.name },
      { id: mockRepoData.expressjs.id, text: mockRepoData.expressjs.name },
      { id: mockRepoData.vscode.id, text: mockRepoData.vscode.name },
    ]);

    return { repos };
  },
};
</script>
