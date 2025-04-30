<script setup lang="ts">
import { defineEmits } from 'vue'
import useSettings from '@/hooks/useSettings'

const emit = defineEmits(['settings-updated'])
const { settings, updateTimeToStore } = useSettings()


const updateSettings = () => {
  updateTimeToStore(settings.value.timeToStoreInSeconds)
  emit('settings-updated')
}
</script>

<template>
  <div class="setting-modal">
    <label for="time">Time to store messages:</label>
    <select id="time" v-model="settings.timeToStoreInSeconds" @change="updateSettings">
      <option value="30">30 seconds</option>
      <option value="60">1 minute</option>
      <option value="120">2 minutes</option>
    </select>
  </div>
</template>

<style scoped>
.setting-modal {
  position: absolute;
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  top: 90px;
  right: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}
</style>
