<template>
  <div class="bg-white rounded-lg shadow-md p-3.5">
    <h4 class="font-medium text-slate-800 mb-1 text-sm line-clamp-1">
      {{ issue.title }}
    </h4>
    <p class="text-xs text-slate-500 mb-1.5">{{ repoName }}</p>
    <p class="text-xs text-slate-600 mb-2 line-clamp-2">
      {{ issue.aiSummary }}
    </p>
    <div class="flex items-center justify-between text-xs mb-2">
      <span class="text-indigo-600 font-medium">
        {{ issue.aiScoreStars }} {{ scoreText }}
      </span>
      <div class="flex space-x-1">
        <span
          v-for="tag in issue.aiTechStack.slice(0, 2)"
          :key="tag"
          class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-full text-[0.7rem]"
        >
          {{ tag }}
        </span>
      </div>
    </div>

    <button
      @click="$emit('view-details', issue.id)"
      class="w-full py-1.5 rounded-md text-xs font-medium bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-200 ease-in-out"
    >
      상세 분석 보기
    </button>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue';
export default defineComponent({
  name: 'IssueCard',
  props: {
    issue: { type: Object, required: true },
    repoName: { type: String, required: true },
  },
  emits: ['view-details'],
  setup(props) {
    const scoreText = computed(
      () => props.issue.aiScoreText?.match(/\d+점/)?.[0] || ''
    );
    return { scoreText };
  },
});
</script>
