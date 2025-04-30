<script setup lang="ts">
import useChatState from '@/hooks/useChatState'
import ChatIcon from '@/components/icons/ChatIcon.vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'

const { isOpen } = useChatState()
</script>

<template>
  <div id="chat-button">
    <CloseIcon v-if="isOpen" />
    <ChatIcon v-else />
  </div>
</template>

<style scoped>
#chat-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--chat-primary-color);
  padding: 1rem;
  display: grid;
  place-content: center;
  color: white;
  cursor: pointer;
}
</style>
