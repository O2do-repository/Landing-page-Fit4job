<template>
  <section class="features second-section">
    <div class="features-content">
        <div class="features-text">
            <h2 class="features-title">Stay Updated</h2>
            <ul class="feature-list">
            <li>
                <h3>Real-time data updates</h3>
                <p>Keep up with your most promising leads, from job changes to new roles and relocations</p>
            </li>
            <li>
                <h3>Reach out at the right time</h3>
                <p>Be notified when a contact changes roles or becomes active in the job market, giving you the perfect window to engage.</p>
            </li>
            <li>
                <h3>Reliable, accurate profiles</h3>
                <p>Our automated tracking ensures you work with fresh, verified prospect data, no outdated information, no guesswork.</p>
            </li>
            </ul>
      </div>
      <!-- Image à gauche -->
      <div class="features-illustration">
        <img src="@/assets/data.jpg" alt="Prospect data illustration" class="features-image" />
      </div>

      <!-- Texte à droite -->

    </div>
  </section>
</template>

<style scoped>
.features {
  padding: 4rem 2rem;
  background-color: linear-gradient(135deg, #f5f0ff 0%, #ede3ff 100%);
}

.second-section {
  background: linear-gradient(135deg, #f5f0ff 0%, #ede3ff 100%);
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
  align-items: stretch;
}

.features-image {
  width: 100%;
  max-height: 100%;
  height: auto;
  border-radius: 16px;
  object-fit: cover;

}

.features-text {
  flex: 1;
  background-color: linear-gradient(135deg, #f5f0ff 0%, #ede3ff 100%);
  padding: 3rem;
  border-radius: 16px;

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
