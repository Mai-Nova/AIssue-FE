<template>
  <div>
    <h1 class="font-medium text-slate-800 mb-1 line-clamp-1">
      {{ repoTitle }}
    </h1>
    <div class="absolute top-4 right-20">
      <a :href="repoUrl" target="_blank"
        >GitHub에서 보기
        <svg
          class="w-[20px] h-[20px] fill-[#8e8e8e]"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
          ></path>
        </svg>
      </a>
    </div>

    <!-- 탭 내용 렌더링 -->
    <component :is="currentTabComponent" />
  </div>
</template>

<script>
import OverviewTab from "../views/OverviewTab.vue";
import IssueTab from "../views/IssueTab.vue";
import ConventionTab from "../views/ConventionTab.vue";

export default {
  name: "RepoDetail",
  components: {
    OverviewTab,
    IssueTab,
    ConventionTab,
  },
  props: {
    repoId: {
      type: String,
      required: true,
    },
    repoTitle: { type: String, required: true },
    repoUrl: { type: String, required: true }, // GitHub URL도 props로 받음
    tab: {
      type: Object,
      default: () => ({ id: 1, name: "Overview", title: "개요" }), // 객체 기본값은 함수로
    },
    tabs: {
      type: Array,
      default: () => [
        { id: 1, name: "Overview", title: "개요" },
        { id: 2, name: "IssueTab", title: "이슈 분석" },
        { id: 3, name: "ConventionTab", title: "코드 컨벤션" },
      ],
    },
  },
  computed: {
    currentTabComponent() {
      // 탭 이름에 따라 컴포넌트 반환
      // 컴포넌트 이름과 탭 name이 같아야 함
      // 여기서 탭 name이 OverviewTab, IssueTab 등 컴포넌트 이름과 일치하도록 맞춰야 함
      const map = {
        Overview: "OverviewTab",
        IssueTab: "IssueTab",
        ConventionTab: "ConventionTab",
      };
      return map[this.tab.name] || "OverviewTab";
    },
  },
};
</script>
