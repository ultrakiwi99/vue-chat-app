<script setup lang="ts">
import useChat from '@/hooks/useChat'
import { ref, onMounted, onUpdated } from 'vue'
import dayjs from 'dayjs'
import { settings } from '@/constants/settings'

const chatMessages = ref()
const { messages, shouldBeBlocked } = useChat()

onMounted(() => {
  chatMessages.value.scrollTo({
    top: chatMessages.value.scrollHeight,
    behavior: 'smooth',
  })
})
onUpdated(() => {
  chatMessages.value.scrollTo({
    top: chatMessages.value.scrollHeight,
    behavior: 'smooth',
  })
})
</script>

<template>
  <div class="chat-messages" ref="chatMessages">
    <div
      v-for="(msg, index) in messages"
      :key="index"
      class="message"
      :class="{ bot: msg.source === 'bot' }"
    >
      <p>
        {{ msg.text }}
      </p>
      <p class="timestamp">
        {{ dayjs(msg.timestamp).format('HH:mm') }}
        <span v-if="msg.accepted" class="accepted-indicator">✔</span>
      </p>
    </div>
    <div v-if="messages.length === 0" class="no-messages">
      <p>No messages yet.</p>
    </div>
    <div v-if="shouldBeBlocked" class="message system">
      <p>Chat is blocked. Message limit reached: {{ settings.chantMessagesLimit }}</p>
    </div>
  </div>
</template>

<style scoped>
.chat-messages {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  background-color: #e9eaeb;
  margin: 0 -1rem;
  padding: 0 1rem;
  scrollbar-width: none;
}

.chat-messages ::-webkit-scrollbar {
  display: none;
}

.message {
  padding: 0.8rem 1rem;
  border-radius: 15px 15px 15px 0;
  background-color: #ffffff;
  align-self: flex-start;
  width: fit-content;
  margin-right: 4rem;
  margin-left: 0;
}

.bot {
  border-radius: 15px 15px 0 15px;
  background-color: #1565c0;
  color: #ffffff;
  align-self: flex-end;
  margin-right: 0rem;
  margin-left: 4rem;
}

.system {
  border-radius: 15px 15px 0 15px;
  background-color: #888;
  color: #ffffff;
  align-self: flex-end;
  margin-right: 0rem;
  margin-left: 4rem;
  opacity: 0.8;
}

.message:first-of-type {
  margin-top: 1rem;
}

.message:last-of-type {
  margin-bottom: 1rem;
}

.timestamp {
  font-size: 0.6rem;
  color: #888;
}

.bot .timestamp {
  color: #fff;
}

.no-messages {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 0.8rem;
  color: #888;
}
</style>
