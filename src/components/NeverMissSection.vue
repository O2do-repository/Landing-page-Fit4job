<template>
  <section class="features">
    <div class="features-content">
      <div class="features-box">
        <h2 class="features-title">Never Miss a Match. Ever.</h2>
        <ul class="feature-list">
          <li v-for="(feature, index) in features" :key="index" class="feature-item">
            <div class="feature-icon-wrapper">
              <Icon :icon="feature.icon" class="feature-icon" />
            </div>
            <div class="feature-text">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const features = [
  {
    icon: 'mdi:target-variant',
    title: 'Precision-Driven AI',
    description: 'Our platform ensures that every candidate is matched with the right job opportunity — instantly and without fail.'
  },
  {
    icon: 'mdi:eye-off-outline',
    title: 'Zero Blind Spots',
    description: 'Fit4Jobs scans every profile in real time, so you’ll never overlook the perfect candidate again.'
  },
  {
    icon: 'mdi:account-tie',
    title: 'Built for Recruiters',
    description: 'Stop guessing. Our intelligent engine handles the matching so your team can focus on building relationships.'
  }
]
</script>

<style scoped>
.features {
  padding: 4rem 2rem;
  background: white;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}

.features-content {
  max-width: 1400px;
  width: 100%;
}

.features-box {
  background-color: white;
  border-radius: 16px;
  padding: 3rem 4rem;
}

/* Titre principal */
.features-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a237e;
  margin-bottom: 2.5rem;
  text-align: center;
}

/* Liste des features */
.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}

/* Icône à gauche */
.feature-icon-wrapper {
  flex-shrink: 0;
}

.feature-icon {
  font-size: 3.5rem;
  color: #1a237e;
  transition: transform 0.3s ease;
  cursor: default;
}

.feature-icon:hover {
  transform: scale(1.1);
}

/* Texte à droite */
.feature-text h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: #1a237e;
}

.feature-text p {
  font-size: 1rem;
  color: #444;
  line-height: 1.7;
}

/* Responsive */
@media (max-width: 768px) {
  .features-box {
    padding: 2rem;
  }

  .feature-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .feature-icon {
    font-size: 3rem;
  }
}
</style>
