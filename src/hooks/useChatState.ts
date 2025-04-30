import { ref, type Ref } from 'vue'

const isOpen = ref(false)

interface UseChatState {
  toggle: () => void
  close: () => void
  isOpen: Ref<boolean>
}

export default function useChatState(): UseChatState {
  const toggle = () => (isOpen.value = !isOpen.value)
  const close = () => (isOpen.value = false)

  return {
    toggle,
    close,
    isOpen,
  }
}
