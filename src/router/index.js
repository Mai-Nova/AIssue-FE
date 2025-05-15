import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import DashboardView from "../views/DashboardView.vue";
// 다른 뷰 컴포넌트들을 임포트합니다.
import RepoListView from "../views/RepoListView.vue";
import RepoDetailView from "../views/RepoDetailView.vue";
// import MyActivityView from '../views/MyActivityView.vue';
// import DevGuideBotView from '../views/DevGuideBotView.vue';
// import SettingsView from '../views/SettingsView.vue';
// import IssueDetailView from '../views/IssueDetailView.vue';

const routes = [
  {
    path: "/",
    name: "Landing",
    component: LandingPage,
    meta: { requiresAuth: false }, // 랜딩 페이지는 인증 불필요
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardView,
    meta: { requiresAuth: true }, // 대시보드는 인증 필요
  },
  {
    path: "/repos",
    name: "RepoList",
    component: RepoListView,
    props: true, // 라우트 파라미터를 props로 전달
    meta: { requiresAuth: true },
  },
  {
    path: "/repo/:repoId", // 동적 라우트 매칭
    name: "RepoDetail",
    component: RepoDetailView,
    meta: { requiresAuth: true },
  },
  // {
  //   path: '/issue/:issueId',
  //   name: 'IssueDetail',
  //   component: IssueDetailView,
  //   props: true,
  //   meta: { requiresAuth: true }
  // },
  // {
  //   path: '/my-activity',
  //   name: 'MyActivity',
  //   component: MyActivityView,
  //   meta: { requiresAuth: true }
  // },
  // {
  //   path: '/dev-guide-bot',
  //   name: 'DevGuideBot',
  //   component: DevGuideBotView,
  //   meta: { requiresAuth: true }
  // },
  // {
  //   path: '/settings',
  //   name: 'Settings',
  //   component: SettingsView,
  //   meta: { requiresAuth: true }
  // },
];

const router = createRouter({
  // process.env.BASE_URL 대신 인자 없이 호출합니다.
  history: createWebHistory(),
  routes,
  linkActiveClass: "active", // 활성 링크 클래스 (style.css의 .active와 일치)
});

// 수정된 네비게이션 가드
router.beforeEach((to, from, next) => {
  // localStorage에서 로그인 상태 확인 (실제 앱에서는 더 안전한 방법 사용)
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  console.log(
    `Navigating to ${to.path}. Requires Auth: ${to.meta.requiresAuth}. Is Logged In: ${isLoggedIn}`
  );

  if (to.meta.requiresAuth && !isLoggedIn) {
    // 인증이 필요한 페이지인데 로그인하지 않았으면 랜딩 페이지로 리디렉션
    console.log("Redirecting to Landing (Auth Required, Not Logged In)");
    // 랜딩 페이지 자체로 리디렉션되는 무한 루프 방지 (이미 '/'인 경우)
    if (from.path !== "/" || to.path !== "/") {
      next({ name: "Landing" });
    } else {
      // 이미 랜딩페이지에 있다면 그냥 두거나, 에러 처리 등 가능
      next(false); // 네비게이션 중단 (선택적)
    }
  } else if (!to.meta.requiresAuth && isLoggedIn && to.name === "Landing") {
    // 로그인 상태에서 랜딩 페이지로 가려고 하면 대시보드로 리디렉션
    console.log("Redirecting to Dashboard (Logged In, Tried Landing)");
    next({ name: "Dashboard" });
  } else {
    // 그 외의 경우 (인증 불필요 페이지, 또는 인증 필요+로그인 상태) 정상 진행
    console.log("Allowing navigation");
    next();
  }
});

export default router;
