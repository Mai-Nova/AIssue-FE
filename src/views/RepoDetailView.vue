<template>
	<!-- 타이틀 -->
	<RepoDetail v-for="repo in repos" :key="repo.id" :repoTitle="repo.title"/>
	<!-- 탭 메뉴 -->
	<div class="flex space-x-6 border-b border-gray-200 mb-4 text-sm font-medium">
	<button
	v-for="(tab, index) in tabs"
	:key="tab.id"
	@click="activeIndex = index"
	class="relative pb-2"
	>
	<span :class="activeIndex === index ? 'text-indigo-600 font-semibold' : 'text-gray-500'">
		{{ tab.title }}
	</span>
	<span
		v-if="activeIndex === index"
		class="absolute left-0 -bottom-0.5 w-full h-0.5 bg-indigo-600"
	></span>
	</button>
	</div>
	<RepoDetail :tab="tabs[activeIndex]" ></RepoDetail>
	<div>
		<div class="relative bg-white rounded-lg shadow-md p-3.5 mb-2">
			<h4 class="font-medium text-slate-800 mb-1 text-sm line-clamp-1">
			</h4>
			<p class="text-xs text-slate-600 mb-2 line-clamp-2">
			</p>
			<a href=""></a>
		</div>
	</div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { mockRepoData } from "../mockData.js";
import RepoDetail from "../components/RepoDetail.vue";

export default {
	components: {
		RepoDetail
	},
	setup() {
    // const router = useRouter();
		const repos = ref([
			{ id: mockRepoData.nodejs.id, title: mockRepoData.nodejs.fullName, description: mockRepoData.nodejs.description, summary : mockRepoData.nodejs.readmeSummary, url: mockRepoData.nodejs.githubUrl },
			{ id: mockRepoData.expressjs.id, title: mockRepoData.expressjs.fullName, description: mockRepoData.expressjs.description, summary : mockRepoData.expressjs.readmeSummary, url: mockRepoData.expressjs.githubUrl },
			{ id: mockRepoData.vscode.id, title: mockRepoData.vscode.fullName, description: mockRepoData.vscode.description, summary : mockRepoData.vscode.readmeSummary, url: mockRepoData.vscode.githubUrl },
		]);
				
		const tabs = ref([
			{ id: 1, title: "개요" },
			{ id: 2, title: "이슈 분석" },
			{ id: 3, title: "코드 컨벤션" }
		]);

		const activeRepoIndex = ref(0);
		const activeTabIndex = ref(0);

		return { repos, tabs, activeRepoIndex, activeTabIndex };
	},
}
</script>