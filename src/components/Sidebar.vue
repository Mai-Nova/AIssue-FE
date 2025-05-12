<template>
  <aside
    class="w-56 shrink-0 p-4 space-y-1.5 flex flex-col bg-gray-900 text-gray-300"
  >
    <div class="text-xl font-bold mb-6 flex items-center text-slate-100">
      <svg
        class="lucide lucide-brain-circuit mr-2 h-7 w-7 text-indigo-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M12 2a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
        />
        <path
          d="M16 16.5A3.5 3.5 0 0 0 19.5 13H21v2h-1.5a1.5 1.5 0 1 1 0 3H21v2h-1.5a3.5 3.5 0 0 0-3.5-3.5Z"
        />
        <path
          d="M8 16.5A3.5 3.5 0 0 1 4.5 13H3v2h1.5a1.5 1.5 0 1 0 0 3H3v2h1.5A3.5 3.5 0 0 1 8 16.5Z"
        />
        <path d="M12 8a2.5 2.5 0 0 0-2.5 2.5V13h5v-2.5A2.5 2.5 0 0 0 12 8Z" />
      </svg>
      <span>AI GHD</span>
    </div>

    <nav class="flex-grow">
      <router-link
        to="/dashboard"
        class="flex items-center space-x-2.5 px-3 py-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-gray-50 transition-colors duration-200 ease-in-out"
        active-class="bg-gray-700 text-gray-50"
      >
        <svg
          class="lucide lucide-layout-dashboard h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect width="7" height="9" x="3" y="3" rx="1" />
          <rect width="7" height="5" x="14" y="3" rx="1" />
          <rect width="7" height="9" x="14" y="12" rx="1" />
          <rect width="7" height="5" x="3" y="16" rx="1" />
        </svg>
        <span class="text-sm">대시보드</span>
      </router-link>

      <router-link
        to="/repos"
        class="flex items-center space-x-2.5 px-3 py-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-gray-50 transition-colors duration-200 ease-in-out"
        active-class="bg-gray-700 text-gray-50"
      >
        <svg
          class="lucide lucide-folder-git-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
          />
          <circle cx="12" cy="13" r="2" />
          <path d="m14.5 10.5-3 3" />
          <path d="m9.5 15.5 3-3" />
        </svg>
        <span class="text-sm">저장소 관리</span>
      </router-link>

      <router-link
        to="/my-activity"
        class="flex items-center space-x-2.5 px-3 py-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-gray-50 transition-colors duration-200 ease-in-out"
        active-class="bg-gray-700 text-gray-50"
      >
        <svg
          class="lucide lucide-check-check h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M18 6 7 17l-5-5" />
          <path d="m22 10-7.5 7.5L13 16" />
        </svg>
        <span class="text-sm">나의 활동</span>
      </router-link>

      <router-link
        to="/dev-guide-bot"
        class="flex items-center space-x-2.5 px-3 py-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-gray-50 transition-colors duration-200 ease-in-out"
        active-class="bg-gray-700 text-gray-50"
      >
        <svg
          class="lucide lucide-bot h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 8V4H8" />
          <rect width="16" height="12" x="4" y="8" rx="2" />
          <path d="M2 14h2" />
          <path d="M20 14h2" />
          <path d="M15 13v2" />
          <path d="M9 13v2" />
        </svg>
        <span class="text-sm">개발 가이드 봇</span>
      </router-link>

      <router-link
        to="/settings"
        class="flex items-center space-x-2.5 px-3 py-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-gray-50 transition-colors duration-200 ease-in-out"
        active-class="bg-gray-700 text-gray-50"
      >
        <svg
          class="lucide lucide-settings-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M20 7h-9" />
          <path d="M14 17H5" />
          <circle cx="17" cy="17" r="3" />
          <circle cx="7" cy="7" r="3" />
        </svg>
        <span class="text-sm">설정</span>
      </router-link>
    </nav>

    <div class="mt-auto pt-3 border-t border-gray-700">
      <div
        class="flex items-center space-x-2.5 p-2 rounded-md hover:bg-gray-700 cursor-pointer"
        @click="logout"
      >
        <img :src="userAvatar" alt="User Avatar" class="w-8 h-8 rounded-full" />
        <div>
          <p class="font-medium text-sm text-slate-100">{{ username }}</p>
          <p class="text-xs text-slate-400">로그아웃</p>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import { ref, defineComponent } from 'vue';
// mockData.js 경로가 올바른지 확인하세요.
// 예: import { USER_GITHUB_USERNAME } from '../mockData';
// 또는 import { USER_GITHUB_USERNAME } from '@/mockData'; (alias 사용 시)
import { USER_GITHUB_USERNAME } from '../mockData'; // 경로를 실제 프로젝트 구조에 맞게 조정하세요

export default defineComponent({
  name: 'Sidebar',
  emits: ['logout'], // 부모(App.vue)로 로그아웃 이벤트를 전달하기 위해 정의
  setup(props, { emit }) {
    const username = ref(USER_GITHUB_USERNAME); // mockData에서 가져오거나 실제 사용자 정보 사용
    const userAvatar = ref('https://placehold.co/32x32/4b5563/e5e7eb?text=U'); // 임시 아바타

    // 로그아웃 버튼 클릭 시 호출될 함수
    const logout = () => {
      console.log('Logout initiated in Sidebar, emitting event');
      emit('logout'); // 'logout' 이벤트를 발생시켜 App.vue에 알림
    };

    // setup 함수에서 반환하여 템플릿에서 사용할 수 있도록 함
    return {
      username,
      userAvatar,
      logout,
    };
  },
});
</script>
