<!-- filepath: c:\Users\USER\Downloads\AI_GitHub (2)\public\SettingsView.vue -->
<template>
  <div id="settings-content" class="main-content">
    <header class="mb-4">
      <h1 class="text-2xl font-semibold text-slate-800">설정</h1>
    </header>
    <div class="card p-6 max-w-md">
      <h2 class="text-lg font-semibold text-slate-700 mb-3">계정 정보</h2>
      <div class="space-y-3 text-sm">
        <div class="flex justify-between items-center">
          <span class="text-slate-600">
            GitHub 계정:
            <span id="settings-github-username" class="font-medium text-slate-800">
              {{ githubUsername || '-' }}
            </span>
          </span>
          <button
            id="github-logout-button"
            class="btn-secondary px-3 py-1.5 rounded-md text-xs font-medium border border-gray-300"
            @click="handleGitHubLogout"
          >
            GitHub 연동 해제
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { USER_GITHUB_USERNAME } from '../mockData';
// import { useRouter } from 'vue-router';

export default {
  name: "SettingsView",
  data() {
    return {
      githubUsername: USER_GITHUB_USERNAME || null, // GitHub 사용자 이름
    };
  },
  methods: {
    handleGitHubLogout() {
      const userProfileLogout = document.querySelector("#user-profile-logout");
      if (userProfileLogout) {
        userProfileLogout.click(); // 로그아웃 버튼 클릭
      }
      alert("로그아웃 되었습니다.");
      this.githubUsername = null; // 사용자 이름 초기화

      // 로그인 상태 초기화
      localStorage.setItem('isLoggedIn', 'false');

      // LandingPage로 이동
      this.$router.push('/');
    },
  },
  mounted() {
    // 초기화 로직
    this.githubUsername = USER_GITHUB_USERNAME || null;
  },
};
</script>

<style scoped>
.btn-secondary {
  background-color: #e5e7eb; /* gray-200 */
  color: #1f2937; /* gray-800 */
  transition: background-color 0.2s ease-in-out;
}
.btn-secondary:hover {
  background-color: #d1d5db; /* gray-300 */
}
</style>