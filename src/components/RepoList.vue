<template>
  <div class="relative bg-white rounded-lg shadow-md p-3.5 mb-2">
      <h4 class="font-medium text-slate-800 mb-1 text-sm line-clamp-1">
        {{ repo.title }}
      </h4>
      <p class="text-xs text-slate-600 mb-2 line-clamp-2">
        {{ repo.descript }}
      </p>
      <button
        @click="$emit('view-details', repo.id)"
        class="absolute top-4 right-4 w-fit px-3 py-1 rounded text-xs font-medium bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-200 ease-in-out">
        분석 보기
      </button>
      <hr style="border: none; border-top: 1px solid #ccc; margin: 1rem 0;" />
      <p class="text-xs add text-slate-600 mb-3 line-clamp-2 ">
        언어: <b>{{ repo.language }}</b>&nbsp;&nbsp;stars: <b>{{ repo.stars }}</b>&nbsp;&nbsp;forks: <b>{{ repo.forks }}</b>
      </p>     
      <div class="flex items-center justify-between text-xs mb-2">
        <div class="flex space-x-1">
        </div>
      </div>

  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
export default defineComponent({
  name: "RepoList",
  props: {
    repo: { type: Object, required: true },
    repoName: { type: String, required: true },
  },
  emits: ["view-details"],
});
</script>
