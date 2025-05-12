<template>
  <div id="app" :class="appClasses">
    <Sidebar v-if="isLoggedIn" @logout="handleLogout" />
    <main :class="mainClasses">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
// watch와 onMounted 임포트 추가
import { ref, computed, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import Sidebar from './components/Sidebar.vue';

// 'eexport' 오타 수정
export default {
  name: 'App',
  components: {
    Sidebar,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    // --- 상태 관리 ---
    const checkLoginStatusFromStorage = () => {
      return localStorage.getItem('isLoggedIn') === 'true';
    };
    const isLoggedIn = ref(checkLoginStatusFromStorage()); // 초기 상태 설정
    // ---

    // 로그아웃 핸들러
    const handleLogout = () => {
      console.log('Logout initiated in App.vue');
      localStorage.removeItem('isLoggedIn'); // localStorage 제거
      isLoggedIn.value = false; // 상태 업데이트
      router.push('/');
    };

    // 로그인 성공 처리는 LandingPage 등 다른 곳에서 상태 변경을 트리거할 수 있음
    const handleLogin = () => {
      localStorage.setItem('isLoggedIn', 'true'); // 상태 동기화
      isLoggedIn.value = true;
    };

    // App 마운트 시 로컬 스토리지 상태 재확인
    onMounted(() => {
      isLoggedIn.value = checkLoginStatusFromStorage();
    });

    // (선택 사항) 라우트 변경 감지 - 네비게이션 가드가 기본 처리를 하지만,
    // 새로고침 시 또는 직접 URL 입력 시 App의 초기 상태 동기화에 여전히 유용할 수 있음
    watch(
      () => route.meta, // 메타 정보 변경 감지 (경로보다 나을 수 있음)
      (newMeta) => {
        isLoggedIn.value = checkLoginStatusFromStorage(); // 라우트 변경 시 실제 저장된 상태 반영
        console.log(
          `Route meta changed, requiresAuth: ${newMeta.requiresAuth}, new isLoggedIn state: ${isLoggedIn.value}`
        );
      },
      { deep: true, immediate: true } // 즉시 실행 및 중첩 객체 감지
    );

    const appClasses = computed(() =>
      isLoggedIn.value ? 'flex h-screen' : ''
    );
    const mainClasses = computed(() =>
      isLoggedIn.value
        ? 'flex-1 p-6 md:p-8 overflow-y-auto bg-gray-100'
        : 'flex-1'
    );

    // setup에서 반환하는 값들 (handleLogin도 필요시 반환)
    return { isLoggedIn, handleLogout, handleLogin, appClasses, mainClasses };
  },
};
</script>

<style>
/* '@reference' 를 '@import' 로 수정 */
@import 'tailwindcss';

body {
  font-family: 'Inter', sans-serif;
  /* body 배경색은 Tailwind Preflight나 전역 CSS에서 관리하는 것이 좋음 */
  /* background-color: #f3f4f6; */
}

.loading-state,
.empty-state,
.error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 150px;
  text-align: center;
  @apply text-gray-500 p-4;
}
.loading-spinner {
  /* theme() 함수는 CSS 변수를 사용하는 방식으로 변경하는 것이 v4에서 더 권장될 수 있음 */
  /* 또는 직접 값 사용 */
  border: 4px solid #e5e7eb; /* gray-200 */
  border-top-color: #4f46e5; /* indigo-600 */
  border-radius: 50%;
  width: 32px;
  height: 32px;
  animation: spin 1s linear infinite;
  margin-bottom: 0.75rem;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.card {
  @apply bg-white rounded-lg shadow-md;
}
</style>
