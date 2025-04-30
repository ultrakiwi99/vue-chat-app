<script setup lang="ts">
import useChat from '@/hooks/useChat'
import { ref } from 'vue'
import SendButton from './SendButton.vue'

const { addMessage, generateBotResponse, shouldBeBlocked } = useChat()
const message = ref('')

const sendMessage = async () => {
  if (message.value.trim() && !shouldBeBlocked.value) {
    const userMessage = message.value
    await addMessage(userMessage)
    message.value = ''
    await generateBotResponse(userMessage)
  }
}
</script>

<template>
  <div class="chat-input">
    <input
      type="text"
      v-model="message"
      @keyup.enter="sendMessage"
      placeholder="Type your message here..."
      :disabled="shouldBeBlocked"
    />
    <SendButton @click="sendMessage" />
  </div>
</template>

<style scoped>
.chat-input {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  align-items: center;
}

.chat-input input {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}

</style>
