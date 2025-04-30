<script setup lang="ts">
import { ref } from 'vue'
import ChatHeaderButton from '@/components/ChatHeaderButton.vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'
import DotsIcon from '@/components/icons/DotsIcon.vue'
import useChatState from '@/hooks/useChatState'
import SettingModal from '@/components/SettingModal.vue'

const { close } = useChatState()
const settingsOpen = ref(false)

const toggleSettings = () => {
  settingsOpen.value = !settingsOpen.value
}

const closeSettings = () => {
  settingsOpen.value = false
}

</script>

<template>
  <h2 class="chat-header">
    <ChatHeaderButton @click="close">
      <CloseIcon />
    </ChatHeaderButton>
    Messages
    <ChatHeaderButton @click="toggleSettings">
      <DotsIcon />
    </ChatHeaderButton>
  </h2>
  <SettingModal v-if="settingsOpen" @settings-updated="closeSettings" />
</template>

<style scoped>
.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 0;
  position: relative;
}
</style>
