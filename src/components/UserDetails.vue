<template>
  <div class="user-details">
    <img src="@/assets/Avatar.png" alt="User Avatar" />
    <div class="user-info">
      <h2>David Wayne</h2>
      <p>(+44) 50 9285 3022</p>
    </div>
  </div>
</template>

<style scoped>
.user-details {
  display: grid;
  grid-template-columns: 42px 1fr;
  gap: 1rem;
  align-items: center;
}
.user-details img {
  display: block;
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.user-info h2 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
}
.user-info p {
  margin: 0;
  color: var(--chat-secondary-color);
  font-size: 0.75rem;
  text-align: left;
}
</style>
