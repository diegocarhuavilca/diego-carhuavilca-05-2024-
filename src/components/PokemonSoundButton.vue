<template>
  <div>
    <audio :controls="false" ref="audioControl" :src="sound"></audio>
    <button @click.stop="playAudio" class="audio">
      <img src="@/assets/icons/audio.svg" height="20" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  sound: {
    type: String,
    required: true
  }
})

const audioControl = ref<HTMLAudioElement | null>(null)

function playAudio() {
  if (audioControl.value === null) throw new Error('Audio control is not available')
  audioControl.value.play()
}
</script>

<style scoped>
.audio {
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--base-red);
  transition: 0.3s ease-in-out;
}

.audio:hover,
.remove:hover {
  transform: scale(1.1);
}
</style>
