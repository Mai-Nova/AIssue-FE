<template>
  <!-- RepoDetail 컴포넌트는 한 번만! -->
  <RepoDetail
    :key="currentRepo.id"
    :repoTitle="currentRepo.title"
    :repoUrl="currentRepo.url"
    :tab="tabs[activeTabIndex]"
    :tabs="tabs"
    @update:tab="activeTabIndex = $event"
  ></RepoDetail>

  <!-- 탭 버튼은 여기에만 둠 -->
  <div class="flex space-x-6 border-b border-gray-200 mb-4 text-sm font-medium">
    <button
      v-for="(tab, index) in tabs"
      :key="tab.id"
      @click="activeTabIndex = index"
      class="relative pb-2"
    >
      <span
        :class="
          activeTabIndex === index
            ? 'text-indigo-600 font-semibold'
            : 'text-gray-500'
        "
      >
        {{ tab.title }}
      </span>
      <span
        v-show="activeTabIndex === index"
        class="absolute left-0 -bottom-0.5 w-full h-0.5 bg-indigo-600"
      ></span>
    </button>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import RepoDetail from "../components/RepoDetail.vue";
import { mockRepoData } from "../mockData.js";

export default {
  components: {
    RepoDetail,
  },
  setup() {
    const repos = ref([
      {
        id: mockRepoData.nodejs.id,
        title: mockRepoData.nodejs.fullName,
        description: mockRepoData.nodejs.description,
        summary: mockRepoData.nodejs.readmeSummary,
        url: mockRepoData.nodejs.githubUrl,
      },
      {
        id: mockRepoData.expressjs.id,
        title: mockRepoData.expressjs.fullName,
        description: mockRepoData.expressjs.description,
        summary: mockRepoData.expressjs.readmeSummary,
        url: mockRepoData.expressjs.githubUrl,
      },
      {
        id: mockRepoData.vscode.id,
        title: mockRepoData.vscode.fullName,
        description: mockRepoData.vscode.description,
        summary: mockRepoData.vscode.readmeSummary,
        url: mockRepoData.vscode.githubUrl,
      },
    ]);

    const tabs = ref([
      { id: 1, title: "개요" },
      { id: 2, title: "이슈 분석" },
      { id: 3, title: "코드 컨벤션" },
    ]);

    const activeRepoIndex = ref(0);
    const activeTabIndex = ref(0);
    const currentRepo = computed(() => repos.value[activeRepoIndex.value]);

    return { repos, tabs, activeTabIndex, currentRepo };
  },
};
</script>
