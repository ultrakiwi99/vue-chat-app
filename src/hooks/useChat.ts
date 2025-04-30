import { computed, ref, watch } from 'vue'
import {
  clearChatHistory,
  generateBotAnswer,
  loadChatHistory,
  saveChatHistory,
} from '@/services/chatService'
import type { ChatMessagesState, ChatMessage } from '@/types/types'
import { settings } from '@/constants/settings'
import useSettings from './useSettings'
import dayjs from 'dayjs'

const chatState = ref<ChatMessagesState>({
  messages: [],
  lastSaved: 0,
})

export default function useChat() {
  const addMessage = async (message: string) => {
    if (shouldBeBlocked.value) {
      return
    }

    const newMessage: ChatMessage = {
      id: crypto.randomUUID(),
      text: message,
      timestamp: Date.now(),
      source: 'user',
      accepted: false,
    }
    chatState.value.messages.push(newMessage)
    chatState.value.lastSaved = Date.now()

    // Simulate a delay for the message to be accepted
    // This is just for demonstration purposes and should be removed in production
    setTimeout(
      () => {
        chatState.value.messages.forEach((msg) => {
          if (msg.id === newMessage.id) {
            msg.accepted = true
          }
        })
      },
      1000 + Math.floor(Math.random() * 500),
    )
  }

  const generateBotResponse = async (message: string) => {
    if (shouldBeBlocked.value) {
      return
    }

    const answer = await asyncBotAnswer(message)

    const newMessage: ChatMessage = {
      id: crypto.randomUUID(),
      text: answer,
      timestamp: Date.now(),
      source: 'bot',
      accepted: false,
    }
    chatState.value.messages.push(newMessage)
    chatState.value.lastSaved = Date.now()
  }

  const asyncBotAnswer = (message: string): Promise<string> => {
    const botAnswer = generateBotAnswer(message, Math.floor(Math.random() * 3))

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(botAnswer)
      }, 1000)
    })
  }

  const shouldBeBlocked = computed(() => {
    return chatState.value.messages.length >= settings.chantMessagesLimit
  })

  const loadChatHistoryFromStorage = async (timeToStoreInSeconds: number) => {
    const history = await loadChatHistory(timeToStoreInSeconds)
    chatState.value.messages = history.messages
    chatState.value.lastSaved = history.lastSaved
  }

  watch(
    chatState,
    async () => {
      await saveChatHistory(chatState.value)
    },
    { deep: true },
  )

  return {
    messages: chatState.value.messages,
    addMessage,
    generateBotResponse,
    shouldBeBlocked,
    loadChatHistoryFromStorage,
  }
}
