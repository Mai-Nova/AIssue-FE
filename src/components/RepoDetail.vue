<template>
  <h1 class="font-medium text-slate-800 mb-1 line-clamp-1">
    {{ repoTitle }}
  </h1>
  <div class="absolute top-4 right-20">
    <a href="">GitHub에서 보기<svg class="w-[20px] h-[20px] fill-[#8e8e8e]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
	    <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"></path>
    </svg>
    </a>
  </div>
  <!-- 탭에 따른 설명 or 컴포넌트 조건부 렌더링 -->
  <div v-if="tab.title === '개요'">여기는 개요 내용</div>
  <div v-else-if="tab.title === '이슈 분석'">여기는 이슈 분석 내용</div>
  <div v-else-if="tab.title === '코드 컨벤션'">여기는 코드 컨벤션 내용</div>

</template>

<script>
import { computed, defineComponent } from "vue";
import OverviewTab from '../views/OverviewTab.vue';
import IssueTab from '../views/IssueTab.vue';
import ConventionTab from '../views/ConventionTab.vue';

export default defineComponent({
  name: "RepoDetail",
  components: {
    OverviewTab,
    IssueTab,
    ConventionTab
  },
  props: {
    repoTitle: { type: String, required: true},
    tab: Object
  },
});
</script>
