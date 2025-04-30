<script setup lang="ts">
import { onMounted } from 'vue';
import ChatButton from './components/ChatButton.vue';
import ChatWindow from './components/ChatWindow.vue';
import useChatState from './hooks/useChatState';
import useSettings from './hooks/useSettings';
import useChat from './hooks/useChat';

const { isOpen, toggle } = useChatState();
const { loadSettingsFromStorage } = useSettings();
const { loadChatHistoryFromStorage } = useChat();

onMounted(() => {
  const { timeToStoreInSeconds } = loadSettingsFromStorage();
  loadChatHistoryFromStorage(timeToStoreInSeconds);
});
</script>

<template>
  <div id="app-container">
    <ChatButton @click="toggle" />
    <ChatWindow v-if="isOpen" />
  </div>
</template>

<style scoped>
#app-container {
  width: 1;
  height: 1;
  background-color: transparent;
  position: relative;
  isolation: isolate;
}

</style>
