export interface ChatSettings {
  timeToStoreInSeconds: number;
}

export interface ChatMessage {
  id: string
  text: string
  timestamp: number
  source: 'user' | 'bot'
  accepted: boolean
}

export interface ChatMessagesState {
  messages: ChatMessage[]
  lastSaved: number
}

export interface ChatHistory {
  messages: ChatMessage[]
  lastSaved: number
}
