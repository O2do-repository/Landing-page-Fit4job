<template>
  <section class="thank-you">
    <div class="thank-you-content">
      <h1 class="thank-you-title">🙏 Thank You!</h1>
      <p class="thank-you-message">
        Your demo request has been received. We'll get in touch with you soon!
      </p>
      <p class="thank-you-redirect">You will be redirected in {{ countdown }} seconds...</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const countdown = ref(5)
const router = useRouter()

onMounted(() => {
  const timer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(timer)
      router.push('/')
    }
  }, 1000)
})
</script>

<style scoped>
.thank-you {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 2rem;
}

.thank-you-content {
  text-align: center;
  max-width: 600px;
  font-family: 'Quicksand', sans-serif;
}

.thank-you-title {
  font-size: 2.5rem;
  color: #1a237e;
  margin-bottom: 1rem;
}

.thank-you-message {
  font-size: 1.2rem;
  color: #444;
  margin-bottom: 1rem;
}

.thank-you-redirect {
  font-size: 1rem;
  color: #777;
}
</style>
