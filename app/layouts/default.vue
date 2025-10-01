<template>
  <div>
    <button type="button" class="global__back-button"><PhArrowLeft /> Back</button>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { PhArrowLeft } from '@phosphor-icons/vue';
</script>

<style scoped>
.global__back-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.global__back-button:hover {
  color: var(--color-primary);
}
</style>