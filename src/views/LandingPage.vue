<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 p-6 flex flex-col"
  >
    <header class="container mx-auto flex justify-between items-center py-6">
      <div class="text-2xl font-bold flex items-center">
        <svg
          class="lucide lucide-brain-circuit mr-2 h-8 w-8 text-indigo-400"
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
        <span>AI GHD (MVP)</span>
      </div>
      <nav class="flex items-center space-x-6">
        <button
          @click="login"
          class="px-5 py-2 rounded-md font-semibold flex items-center text-sm bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-200 ease-in-out"
        >
          <svg
            class="lucide lucide-github mr-1.5 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
            />
          </svg>
          GitHub으로 로그인
        </button>
      </nav>
    </header>

    <main
      class="container mx-auto text-center flex-grow flex flex-col justify-center py-12 md:py-20"
    >
      <h1 class="text-4xl md:text-5xl font-bold mb-5 leading-tight">
        복잡한 GitHub 이슈, <span class="text-indigo-400">AI</span>로 한눈에
        파악하고<br />
        쉽게 기여를 시작하세요!
      </h1>
      <p class="text-lg text-slate-300 mb-10 max-w-3xl mx-auto">
        GitHub 저장소의 이슈를 AI가 분석하고 요약하여,<br />당신의 다음 오픈소스
        기여를 스마트하게 찾아드립니다.
      </p>
      <div class="relative w-full max-w-2xl mx-auto h-40 md:h-56 mb-12">
        <div
          class="absolute inset-0 flex items-center justify-center overflow-hidden rounded-lg"
        >
          <video
            src="/ai_cat.mp4"
            autoplay
            loop
            muted
            playsinline
            class="w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div id="features" class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div
          class="bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform"
        >
          <svg
            class="lucide lucide-sparkles h-10 w-10 text-indigo-400 mx-auto mb-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
            />
            <path d="M5 3v4" />
            <path d="M19 17v4" />
            <path d="M3 5h4" />
            <path d="M17 19h4" />
          </svg>
          <h3 class="text-lg font-semibold mb-1.5 text-slate-100">
            AI 이슈 요약
          </h3>
          <p class="text-xs text-slate-400">
            복잡한 GitHub 이슈 내용을 AI가 핵심만 요약하여 빠르게 파악할 수
            있도록 돕습니다.
          </p>
        </div>
        <div
          class="bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform"
        >
          <svg
            class="lucide lucide-file-text h-10 w-10 text-indigo-400 mx-auto mb-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <line x1="10" y1="9" x2="8" y2="9" />
          </svg>
          <h3 class="text-lg font-semibold mb-1.5 text-slate-100">
            README 자동 요약
          </h3>
          <p class="text-xs text-slate-400">
            방대한 README 문서도 AI가 분석하여 프로젝트의 핵심 내용을 빠르게
            전달합니다.
          </p>
        </div>
        <div
          class="bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform"
        >
          <svg
            class="lucide lucide-filter h-10 w-10 text-indigo-400 mx-auto mb-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>
          <h3 class="text-lg font-semibold mb-1.5 text-slate-100">
            스마트 필터링
          </h3>
          <p class="text-xs text-slate-400">
            나의 기술 스택과 관심사에 맞는 이슈를 AI가 추천하고 필터링해줍니다.
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'LandingPage',
  // emits: ['login-success'], // 더 이상 이벤트를 발생시키지 않음
  setup() {
    const router = useRouter();
    const login = () => {
      console.log('Login button clicked in LandingPage');
      // 실제 GitHub 로그인 로직 (OAuth 등) 구현 필요
      // 로그인 성공했다고 가정하고 대시보드로 라우팅
      localStorage.setItem('isLoggedIn', 'true');
      // 대시보드로 라우팅
      router.push('/dashboard');
    };
    return { login };
  },
});
</script>
