<template>
  <section class="newsletter" id="contact">
    <div class="newsletter-content">
      <h2 class="newsletter-title">Book a demo</h2>
      <p class="newsletter-description">
        Our team will get back to you shortly to schedule the session.
      </p>

      <form
        class="newsletter-form"
        @submit="handleSubmit"
        action="https://o2do.us6.list-manage.com/subscribe/post?u=5eb0aee8cd2cb0e39905ac061&id=88d51797d0&f_id=000adee1f0"
        method="POST"
        novalidate
      >
        <input
          type="email"
          name="EMAIL"
          placeholder="Enter your email"
          required
          class="newsletter-input"
        />

        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input type="text" name="b_5eb0aee8cd2cb0e39905ac061_88d51797d0" tabindex="-1" value="" />
        </div>

        <button type="submit" class="newsletter-button">
          Subscribe
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const handleSubmit = async (e: Event) => {
  e.preventDefault()

  const form = e.target as HTMLFormElement
  const formData = new FormData(form)

  try {
    await fetch(form.action, {
      method: 'POST',
      mode: 'no-cors', // important pour Mailchimp
      body: formData,
    })

    router.push('/thank-you')
  } catch (err) {
    console.error('Submission failed', err)
  }
}
</script>

<style scoped>
.newsletter {
  min-height: 100vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
}

.newsletter-content {
  max-width: 600px;
  padding: 3rem 2rem;
  border-radius: 16px;
  text-align: center;
}

.newsletter-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a237e;
  margin-bottom: 1rem;
  font-family: 'Quicksand', sans-serif;
}

.newsletter-description {
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 2rem;
  font-family: 'Quicksand', sans-serif;
}

.newsletter-form {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.newsletter-input {
  flex: 1 1 300px;
  padding: 0.8rem 1rem;
  border-radius: 12px;
  border: 1.5px solid #1a237e;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;
  font-family: 'Quicksand', sans-serif;
}

.newsletter-input:focus {
  border-color: #3949ab;
}

.newsletter-button {
  background-color: #1a237e;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: 'Quicksand', sans-serif;
}

.newsletter-button:hover {
  background-color: #3949ab;
}
</style>
