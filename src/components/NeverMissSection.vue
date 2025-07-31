<template>
  <section class="features">
    <div class="features-content">
      <!-- Conteneur unique avec icônes et texte -->
      <div class="features-box">
        <div class="features-icons">
          <Icon icon="mdi:target-variant" class="feature-icon" />
          <Icon icon="mdi:eye-off-outline" class="feature-icon" />
          <Icon icon="mdi:account-tie" class="feature-icon" />
        </div>

        <div class="features-text">
          <h2 class="features-title">Never Miss a Match. Ever.</h2>
          <ul class="feature-list">
            <li v-for="(feature, index) in features" :key="index">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const features = [
  {
    title: 'Precision-Driven AI',
    description: 'Our platform ensures that every candidate is matched with the right job opportunity — instantly and without fail.'
  },
  {
    title: 'Zero Blind Spots',
    description: 'Fit4Job scans every profile in real time, so you’ll never overlook the perfect candidate again.'
  },
  {
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

/* Boîte blanche contenant icônes + texte */
.features-box {
  background-color: white;
  border-radius: 16px;

  display: flex;
  gap: 3rem;
  padding: 3rem 4rem;
  align-items: center;
}

/* Icônes à gauche */
.features-icons {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  justify-content: center;
  align-items: center;
  min-width: 100px;
}

.feature-icon {
  font-size: 5rem;
  color: #1a237e;
  transition: transform 0.3s ease;
  cursor: default;
}

.feature-icon:hover {
  transform: scale(1.1);
}

/* Texte à droite */
.features-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.features-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a237e;
  margin-bottom: 2rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-list li {
  margin-bottom: 1.8rem;
}

.feature-list h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: #1a237e;
}

.feature-list p {
  font-size: 1rem;
  color: #444;
  line-height: 1.7;
}

/* Responsive : colonne verticale, icônes au-dessus du texte */
@media (max-width: 768px) {
  .features-box {
    flex-direction: column;
    padding: 2rem;
  }

  .features-icons {
    flex-direction: row;
    gap: 3rem;
    margin-bottom: 2rem;
    min-width: auto;
  }

  .feature-icon {
    font-size: 4rem;
  }

  .features-text {
    width: 100%;
  }
}
</style>
