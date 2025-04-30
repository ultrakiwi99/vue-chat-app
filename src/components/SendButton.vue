<script setup lang="ts">
import useChat from '@/hooks/useChat'

const { shouldBeBlocked } = useChat()
</script>

<template>
  <button class="send-button" :disabled="shouldBeBlocked">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="white"
      stroke="white"
      stroke-linecap="round"
      stroke-linejoin="round"
      width="24"
      height="24"
      stroke-width="2"
    >
      <path d="M10 14l11 -11"></path>
      <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
    </svg>
  </button>
</template>

<style scoped>
.send-button {
  background-color: var(--chat-accent-color);
  width: 42px;
  height: 42px;
  border-radius: 50%;
  place-content: center;
  border: none;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: grid;
  place-content: center;
}

.send-button:hover {
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  opacity: 0.8;
}

.send-button:disabled {
  background-color: var(--chat-secondary-color);
  cursor: not-allowed;
  pointer-events: none;
}
</style>
