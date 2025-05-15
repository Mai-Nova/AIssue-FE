<template>
<div
    id="dev-guide-bot-content"
    class="main-content h-full flex flex-col"
>
    <header class="mb-4">
    <h1 class="text-2xl font-semibold text-slate-800">개발 가이드 봇</h1>
    <p class="text-sm text-slate-600">
        현재 컨텍스트:
        <span ref="repoContextRef" id="dev-bot-repo-context" class="font-medium">{{ context }}</span>
    </p>
    </header>

    <div class="flex-grow card p-0 flex flex-col overflow-hidden">
    <div
        ref="chatbotMessagesRef"
        class="p-4 space-y-3 overflow-y-auto flex-grow bg-gray-50"
        id="chatbot-messages"
    >
        <div class="flex justify-start">
        <!-- <div
            class="bg-slate-200 text-slate-800 p-2.5 rounded-lg max-w-[80%] text-sm"
        >
            <p>
            안녕하세요! 궁금한 점을 물어보세요. 특정 저장소 컨텍스트는
            해당 저장소의 '코드 컨벤션' 탭에서 봇에게 질문하면 자동으로 설정됩니다.
            </p>
        </div> -->
        </div>
        <div
        v-for="(message) in messages"
        :key="message.id"
        class="flex"
        :class="{ 'justify-end': message.sender === 'user', 'justify-start': message.sender === 'bot' }"
        >
        <div
            class="p-2.5 rounded-lg max-w-[80%] text-sm"
            :class="message.sender === 'user' ? 'bg-indigo-500 text-white' : 'bg-slate-200 text-slate-800'"
        >
            <p>{{ message.text }}</p>
        </div>
        </div>
    </div>

    <div class="p-3 border-t border-gray-200 bg-white">
        <div class="flex items-center space-x-2">
        <input
            v-model="input"
            type="text"
            placeholder="질문을 입력하세요..."
            class="flex-grow p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm"
            @keyup.enter="sendMessage"
        />
        <button @click="sendMessage" class="btn-primary p-2.5 rounded-md">
            <svg
            class="lucide lucide-send-horizontal h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            >
            <path d="m3 3 3 9-3 9 19-9Z" />
            <path d="M6 12h16" />
            </svg>
        </button>
        </div>
    </div>
    </div>
</div>
</template>

<script>
import { ref, defineComponent, onMounted } from 'vue'

export default defineComponent({
name: 'DevGuideBot',
setup() {
    const context = ref('General')
    const input = ref('')
    const messages = ref([
    {
        sender: 'bot',
        text: '안녕하세요! 궁금한 점을 물어보세요. 특정 저장소 컨텍스트는 해당 저장소의 "코드 컨벤션" 탭에서 봇에게 질문하면 자동으로 설정됩니다.',
    },
    ])
    const repoContextRef = ref(null)
    // const chatbotInput = ref(null)

    // onMounted(() => {
    // // DOM이 완전히 마운트된 뒤에 접근해야 함
    // if (chatbotInput.value) {
    //     const rawText = chatbotInput.value.value.trim(); // ✅ .value는 input 엘리먼트의 값
    //     console.log(rawText)
    // }
    // })



    const sendMessage = () => {
        if (!input.value.trim()) return

        // messages.value.push({
        //     sender: 'user',
        //     text: input.value.trim(),
        // })
        
        const messageText = input.value.trim()
        
        messages.value.push({
        id: Date.now() + Math.random(),
        sender: 'user',
        text: messageText,
        })    

        input.value = ''    

        const currentRepoContext = repoContextRef.value.textContent || 'General'
        if (currentRepoContext) {
            context.value = currentRepoContext
        }

        setTimeout(() => {
            messages.value.push({
            sender: 'bot',
            text: `AI 응답 (컨텍스트: ${currentRepoContext}): "${messageText}"에 대한 답변입니다. (MVP 데모)`,
            })
        }, 500)
        }

        return {
        context,
        input,
        messages,
        sendMessage,
        repoContextRef,
        }
    },
})
</script>
