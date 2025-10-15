<template>
  <section class="features">
    <div class="features-content">
      <!-- Image à gauche -->
      <div class="features-illustration">
        <img src="@/assets/overb.png" alt="Efficiency illustration" class="features-image" />
      </div>

      <!-- Texte à droite -->
      <div class="features-text">
      <h2 class="features-title">
          Why <span class="purple">Fit</span><span class="blue">4</span><span class="purple">Jobs</span>?
      </h2>
        <ul class="feature-list">
          <li v-for="(feature, index) in features" :key="index">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    title: 'Save Time',
    description: 'Centralize your LinkedIn, ICTJobs offers and more for a simpler, clearer, and faster job search.'
  },
  {
    title: 'Boost Quality',
    description: 'Only see candidates who truly fit your needs – based on title, experience, and daily rate.'
  },
  {
    title: 'Simplify Hiring',
    description: 'A clean, intuitive interface designed to make recruitment faster and more efficient.'
  }
]
</script>

<style scoped>
.features {
  padding: 4rem 2rem;
  background: white;
}
.purple {
  color: #7B63B9;
      font-size: 2.5rem;
  font-weight: 700;

  margin-bottom: 2rem;
}

.blue {
    font-size: 2.5rem;
  font-weight: 700;
  color: #1a237e;
  margin-bottom: 2rem;

}

.features-content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 1rem;
}

.features-illustration {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* Nécessaire pour positionnement relatif de l’image */
  border-radius: 16px;
  overflow: hidden;
  padding: 1rem;
  box-sizing: border-box;
}

.features-image {
  width: auto;
  max-width: 100%;
  
  max-height: 100%;
  object-fit: contain;
  border-radius: 12px;
  transition: opacity 0.3s ease;

  /* ✅ Position ajustée */
  transform: translateY(-20px) translateX(-20px);
}


/* Texte à droite */
.features-text {
  flex: 1;

  padding: 3rem;
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
  margin-bottom: 1.5rem;
}

.feature-list h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: #1a237e;
}

.feature-list p {
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
}

/* Responsive: image au-dessus du texte */
@media (max-width: 768px) {
  .features-content {
    flex-direction: column;
  }

  .features-illustration,
  .features-text {
    width: 100%;
    border-radius: 16px;
  }

  .features-image {
    border-radius: 16px 16px 0 0;
    max-height: 300px;
  }

  .features-text {
    border-radius: 0 0 16px 16px;
  }
}
</style>
