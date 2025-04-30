<template>
  <button class="chat-header-button">
    <slot />
  </button>
</template>

<style scoped>
.chat-header-button {
  background-color: white;
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
.chat-header-button:hover {
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}
</style>
