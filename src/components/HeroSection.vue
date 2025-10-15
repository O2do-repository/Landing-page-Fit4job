<template>
  <div class="hero">


    <!-- Contenu principal en deux colonnes -->
    <div class="content">
      <!-- Texte à gauche -->
      <div class="text-box">

        <h1 class="title-left">Find the Right Talent, Faster</h1>
        <h6 class="subtitle-left" >The best tool for recruiting agencies</h6>
        <p class="description">
          Fit4Jobs instantly matches job offers with the best-fit profiles using smart criteria and AI.  
          Spend less time searching, and more time hiring.<br /><br />
        
        </p>

        <a href="#contact" class="contact-button" @click.prevent="scrollToContact">
          <Icon icon="mdi:play-circle-outline" width="20" height="20" />
          <span>book a demo</span>
        </a>

      </div>

      <!-- Galerie à droite -->
      <div class="gallery">
        <img src="@/assets/business-women-working.jpg" class="gallery-image" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import imageUrl from '@/assets/logo.png';
const scrollToContact = () => {
  const el = document.getElementById('contact')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

</script>

<style scoped>
:root {
  --nav-height: 72px;
}

/* --- Hero Section --- */
.hero {
  position: relative;
  min-height: 100vh; /* permet de dépasser légèrement si nécessaire */
  width: 100%;
  background: linear-gradient(135deg, #f5f0ff 0%, #ede3ff 100%);
  overflow: hidden;
  padding: calc(var(--nav-height) + 1rem) 2rem 3rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center; /* centré sur desktop */
}

/* Contenu principal */
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  gap: 2rem;
  flex-wrap: wrap;
}

/* Texte */
.text-box {
  flex: 1 1 420px;
  padding: 3rem 2rem;
  border-radius: 24px;
  color: #222;
  min-width: 0;
}

.title-left {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1a237e;
  text-align: left;
}

.subtitle-left {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 1.25rem;
  color: #1a237e;
}

.description {
  font-size: 1.15rem;
  margin-bottom: 2rem;
  color: #444;
  line-height: 1.8;
}

/* Bouton contact */
.contact-button {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background-color: #1a237e;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-button:hover {
  background-color: #3949ab;
}

/* Image */
.gallery {
  flex: 1 1 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 0;
}

.gallery-image {
  width: 100%;
  max-width: 700px;
  height: auto;
  border-radius: 20px;
  object-fit: cover;
  display: block;
  max-height: 70vh;
}

/* --- Responsive --- */
@media (max-width: 1024px) {
  .hero {
    min-height: auto; /* permet à la section de s’adapter si le contenu dépasse */
    padding: calc(var(--nav-height) + 2rem) 1.5rem 3rem;
    justify-content: flex-start;
  }

  .content {
    flex-direction: column;
    gap: 2rem;
  }

  .text-box {
    padding: 1.5rem;
    text-align: center;
    order: 2;
  }

  .gallery {
    order: 1;
    width: 100%;
  }

  .gallery-image {
    max-width: 100%;
    max-height: 40vh;
  }

  .title-left {
    font-size: 2.2rem;
    text-align: center;
  }

  .subtitle-left {
    font-size: 1.3rem;
  }

  .description {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero {
    min-height: auto;
    padding: calc(var(--nav-height) + 1rem) 1rem 2rem;
    justify-content: flex-start;
  }

  .content {
    flex-direction: column;
    gap: 1.5rem;
  }

  .gallery-image {
    max-height: 30vh; /* laisse la place pour le texte */
  }

  .text-box {
    padding: 1rem;
  }

  .title-left {
    font-size: 1.8rem;
  }

  .subtitle-left {
    font-size: 1.1rem;
  }

  .description {
    font-size: 0.95rem;
  }

  .contact-button {
    padding: 0.8rem 1.6rem;
    font-size: 1rem;
  }
}
</style>

