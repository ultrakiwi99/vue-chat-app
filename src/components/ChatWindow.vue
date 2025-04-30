<script setup lang="ts">
import ChatHeader from '@/components/ChatHeader.vue'
import UserDetails from '@/components/UserDetails.vue'
import ChatMessages from '@/components/ChatMessages.vue'
import ChatInput from '@/components/ChatInput.vue'

</script>

<template>
  <Teleport to="body">
    <div id="chat-window" ref="chatWindow">
      <ChatHeader />
      <UserDetails />
      <ChatMessages />
      <ChatInput />
    </div>
  </Teleport>
</template>

<style scoped>
#chat-window {
  width: 390px;
  height: calc(100vh - 120px);
  max-height: 850px;
  border-radius: 12px;
  overflow: hidden;
  position: fixed;
  bottom: 100px;
  right: 20px;
  background-color: white;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  padding: 40px 24px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  gap: 1rem;
}
</style>
