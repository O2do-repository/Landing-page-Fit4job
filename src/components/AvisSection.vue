<template>
  <section class="testimonials">
    <div class="testimonials-content">
      <h2 class="testimonials-title">Hear from our users</h2>
      <div class="testimonials-list">
        <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
          <img :src="testimonial.photo" :alt="`Photo of ${testimonial.name}`" class="testimonial-photo" />
          <h3 class="testimonial-name">{{ testimonial.name }}</h3>
          <p class="testimonial-text">"{{ testimonial.text }}"</p>
          <div class="testimonial-stars">
            <Icon icon="mdi:star" v-for="n in testimonial.stars" :key="n" class="star" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import arnaudPhoto from '@/assets/Arnaud.jpg'
import sebPhoto from '@/assets/Seb.jpg'
import lucienPhoto from '@/assets/lulu.jpg'


const testimonials = [
  {
    name: 'Arnaud',
    text: 'Fit4Jobs helped me contact the right people at the perfect time. Brilliant tool!',
    stars: 5,
    photo: arnaudPhoto
  },
  {
    name: 'Sébastien',
    text: 'Thanks to real-time updates, I never miss a move. Super efficient!',
    stars: 5,
    photo: sebPhoto
  },
  {
    name: 'Lucien',
    text: 'Clean UI, powerful features. My team adopted it in less than a day.',
    stars: 5,
    photo: lucienPhoto
  },

]
</script>

<style scoped>
.testimonials {
  padding: 4rem 2rem;
  background:  linear-gradient(135deg, #f5f0ff 0%, #ede3ff 100%);
}

.testimonials-content {
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
}

.testimonials-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a237e;
  margin-bottom: 3rem;
}

.testimonials-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.testimonial-card {
  background-color: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  max-width: 300px;
  flex: 1 1 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.testimonial-photo {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

.testimonial-name {
  font-weight: 600;
  color: #1a237e;
  margin-bottom: 0.5rem;
}

.testimonial-text {
  font-size: 0.95rem;
  color: #444;
  font-style: italic;
  margin-bottom: 1rem;
}

.testimonial-stars .star {
  color: #fbc02d;
  font-size: 1.2rem;
}
</style>
