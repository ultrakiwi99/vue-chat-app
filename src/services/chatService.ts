import type { ChatHistory } from '@/types/types'
import { settings } from '@/constants/settings'
import { MD5 } from 'crypto-js'
import dayjs from 'dayjs'

export const loadChatHistory = async (timeToStoreInSeconds: number): Promise<ChatHistory> => {
  const chatHistory = localStorage.getItem(settings.chatHistoryKey)

  if (chatHistory) {
    const parsedChatHistory = JSON.parse(chatHistory)

    if (isTimeExceeded(parsedChatHistory.lastSaved, Number(timeToStoreInSeconds))) {
      const emptyHistory = clearChatHistory()
      return emptyHistory
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(JSON.parse(chatHistory))
      }, 1000)
    })
  }

  const emptyHistory = clearChatHistory()

  // If no chat history is found, return an empty object
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(emptyHistory)
    }, 1000)
  })
}

export const saveChatHistory = async (chatHistory: ChatHistory): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.setItem(settings.chatHistoryKey, JSON.stringify(chatHistory))
      resolve()
    }, 1000)
  })
}

export const generateBotAnswer = (message: string, option: number): string => {
  const isGreeting = message.split(' ').length === 1 && message.toLowerCase().includes('hello')

  if (isGreeting) {
    return 'Hello! How can I assist you today?'
  }

  switch (option) {
    case 0:
      return message.split('').reverse().join('')
    case 1:
      return message
        .split(' ')
        .map((word) => {
          const endsWithPunctuation = /[.,!?;:]$/.test(word)

          return endsWithPunctuation
            ? word.slice(0, -1).split('').reverse().join('') + word.slice(-1)
            : word.split('').reverse().join('')
        })
        .join(' ')
    case 2:
      return MD5(message).toString()
    default:
      return message
  }
}

export const clearChatHistory = () => {
  const emptyHistory = {
    messages: [],
    lastSaved: 0,
  }

  localStorage.setItem(settings.chatHistoryKey, JSON.stringify(emptyHistory))

  return emptyHistory
}

function isTimeExceeded(timestamp: number, timeToStoreInSeconds: number): boolean {
  return dayjs().diff(timestamp, 'seconds') > timeToStoreInSeconds
}
