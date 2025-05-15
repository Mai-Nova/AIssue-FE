<template>
  <div id="my-activity-content" class="main-content">
    <header class="mb-4 flex justify-between items-center">
      <h1 class="text-2xl font-semibold text-slate-800">나의 활동</h1>
      <p class="text-md text-slate-700">
        총 누적 점수:
        <span id="my-total-score" class="font-bold text-indigo-600">{{ totalScore }}점</span>
      </p>
    </header>
    <div class="card p-4">
      <h2 class="text-lg font-semibold text-slate-700 mb-3">내가 해결한 이슈 목록</h2>
      <div id="my-solved-issues-list" class="space-y-2">
        <div v-if="isLoading" class="loading-state">
          <p>로딩 중...</p>
        </div>
        <div v-else-if="solvedIssues.length === 0" class="empty-state">
          <p>아직 해결한 이슈가 없습니다. 이슈 상세 페이지에서 '해결 목록에 추가'를 해보세요.</p>
        </div>
        <table v-else class="min-w-full divide-y divide-gray-200 text-sm">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-3 py-2 text-left font-medium text-slate-600">이슈명</th>
              <th class="px-3 py-2 text-left font-medium text-slate-600">저장소</th>
              <th class="px-3 py-2 text-left font-medium text-slate-600">획득 점수</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="issue in solvedIssues" :key="issue.issueId">
              <td class="px-3 py-2 whitespace-nowrap hover:text-indigo-600">
                <button class="navigate-to-issue" @click="navigateToIssue(issue.issueId)">
                  {{ issue.title }}
                </button>
              </td>
              <td class="px-3 py-2 whitespace-nowrap text-slate-500">{{ issue.repoName }}</td>
              <td class="px-3 py-2 whitespace-nowrap text-green-600 font-medium">
                +{{ issue.points }}점
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

import {
  mockMyActivityData,
} from '../mockData'; // 실제 경로 확인
// import { useRouter } from 'vue-router';

export default {
  name: "MyActivityView",
  data() {
    return {
      totalScore: mockMyActivityData.totalScore, // 총 누적 점수
      solvedIssues: mockMyActivityData.solvedIssues, // 해결한 이슈 목록
      isLoading: true, // 로딩 상태
    };
  },
  methods: {
    loadMyActivityData() {
      this.isLoading = true;
      setTimeout(() => {
        // 예제 데이터 (실제 데이터는 API 호출 또는 외부 데이터에서 가져와야 함)
        this.totalScore = mockMyActivityData.totalScore;
        this.solvedIssues = mockMyActivityData.solvedIssues;
        this.isLoading = false;
      }, 1000);
    },
    navigateToIssue(issueId) {
      alert(`이슈 ${issueId}로 이동합니다.`); // 실제로는 라우팅 또는 페이지 이동 로직 추가
    },
  },
  mounted() {
    this.loadMyActivityData();
  },
};
</script>

<style scoped>
.empty-state {
  text-align: center;
  color: #64748b;
}
.loading-state {
  text-align: center;
  color: #64748b;
}
.card {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>