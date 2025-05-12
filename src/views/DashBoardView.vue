<template>
  <div>
    <header class="mb-6">
      <h1 class="text-2xl font-semibold text-slate-800">
        '{{ username }}'님, 안녕하세요!
      </h1>
    </header>

    <section class="mb-8">
      <h2 class="text-lg font-semibold text-slate-700 mb-3">AI 추천 이슈</h2>
      <div v-if="loadingRecommended" class="loading-state">
        <div class="loading-spinner"></div>
        <p>추천 이슈를 불러오는 중...</p>
      </div>
      <div
        v-else-if="recommendedIssues.length === 0"
        class="empty-state card p-4"
      >
        <svg
          class="lucide lucide-folder-open h-12 w-12 mb-2 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M20 12.58V8l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12.58" />
          <path d="m22 19-3-3-2 2-3-3-2.25 2.25" />
        </svg>
        <p>추천할 만한 이슈가 아직 없습니다.</p>
      </div>
      <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <IssueCard
          v-for="issue in recommendedIssues"
          :key="issue.id"
          :issue="issue"
          :repo-name="getRepoName(issue.repoId)"
          @view-details="navigateToIssue"
        />
      </div>
      <div class="mt-4 text-right">
        <button
          @click="navigateToExplore"
          class="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
        >
          더 많은 이슈 탐색하기 &rarr;
        </button>
      </div>
    </section>

    <section>
      <h2 class="text-lg font-semibold text-slate-700 mb-3">
        최근 해결한 이슈
      </h2>
      <div v-if="loadingSolved" class="loading-state card p-4">
        <div class="loading-spinner"></div>
        <p>해결한 이슈를 불러오는 중...</p>
      </div>
      <div v-else-if="solvedIssues.length === 0" class="empty-state card p-4">
        <svg
          class="lucide lucide-folder-open h-12 w-12 mb-2 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M20 12.58V8l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12.58" />
          <path d="m22 19-3-3-2 2-3-3-2.25 2.25" />
        </svg>
        <p>아직 해결한 이슈가 없습니다.</p>
      </div>
      <div v-else class="card p-4">
        <ul class="space-y-1.5">
          <li v-for="solved in solvedIssues.slice(0, 2)" :key="solved.issueId">
            <button
              @click="navigateToIssue(solved.issueId)"
              class="text-sm text-slate-600 hover:text-indigo-600"
            >
              {{ solved.title }}
            </button>
          </li>
        </ul>
        <div v-if="solvedIssues.length > 2" class="mt-3 text-right">
          <button
            @click="navigateToMyActivity"
            class="text-xs text-indigo-600 hover:text-indigo-800 font-medium"
          >
            모든 해결 이슈 보기 &rarr;
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// script 부분은 기존과 동일하게 유지
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import IssueCard from '../components/IssueCard.vue';
import {
  mockIssueData,
  mockRepoData,
  userSolvedIssues as mockSolvedIssues,
  USER_GITHUB_USERNAME,
} from '../mockData'; // 실제 경로 확인

export default {
  name: 'DashboardView',
  components: { IssueCard },
  setup() {
    const router = useRouter();
    const username = ref(USER_GITHUB_USERNAME);
    const recommendedIssues = ref([]);
    const solvedIssues = ref([]);
    const loadingRecommended = ref(true);
    const loadingSolved = ref(true);

    const fetchRecommendedIssues = () => {
      loadingRecommended.value = true;
      setTimeout(() => {
        const issueIds = ['nodeIssue1', 'expressIssue1', 'vscodeIssue1'];
        recommendedIssues.value = issueIds
          .map((id) => mockIssueData[id])
          .filter(Boolean);
        loadingRecommended.value = false;
      }, 500);
    };

    const fetchSolvedIssues = () => {
      loadingSolved.value = true;
      setTimeout(() => {
        // 실제 앱에서는 API 호출 또는 상태 관리 저장소 사용
        solvedIssues.value = [...mockSolvedIssues]; // mockData에서 가져오기
        loadingSolved.value = false;
      }, 300);
    };

    const getRepoName = (repoId) =>
      mockRepoData[repoId]?.name || 'Unknown Repo';

    const navigateToIssue = (issueId) => {
      // router.push({ name: 'IssueDetail', params: { issueId } });
      alert(`Navigating to Issue: ${issueId} (Router setup needed)`);
    };
    const navigateToExplore = () => {
      // router.push({ name: 'RepoList' });
      alert('Navigating to Explore Repos (Router setup needed)');
    };
    const navigateToMyActivity = () => {
      // router.push({ name: 'MyActivity' });
      alert('Navigating to My Activity (Router setup needed)');
    };

    onMounted(() => {
      fetchRecommendedIssues();
      fetchSolvedIssues();
    });

    return {
      username,
      recommendedIssues,
      solvedIssues,
      loadingRecommended,
      loadingSolved,
      getRepoName,
      navigateToIssue,
      navigateToExplore,
      navigateToMyActivity,
    };
  },
};
</script>

<style scoped>
/* 대시보드 전용 스타일 (필요 시) */
</style>
