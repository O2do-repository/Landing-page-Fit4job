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
.hero {
  position: relative;
  height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #f5f0ff 0%, #ede3ff 100%);
  overflow: hidden;
  padding: 2rem 4rem;
  box-sizing: border-box;
}

/* Logo */
.logo-container {
  position: absolute;
  top: 2rem;
  left: 2rem;
}
.contact-button {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background-color: #1a237e;
  color: white;
  border: none;
  border-radius: 12px; 
  padding: 1rem 2.5rem; 
  font-size: 1.15rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
}

.contact-button:hover {
  background-color: #3949ab;

}

.logo-image {
  width: 120px;
  height: auto;
  border-radius: 16px;

  transition: transform 0.3s ease;
}

.logo-image:hover {
  transform: scale(1.05);
}

/* Contenu deux colonnes */
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1400px; 
  margin: 0 auto;
  gap: 1rem;
}

/* Texte à gauche */
.text-box {
  flex: 1;

  padding: 3rem;
  border-radius: 24px;

}

.title {
  font-size: 3.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #1a237e;
  text-align: center;
}

.title-left {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1a237e;
  text-align: left;
}
.title-left {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1a237e;
  text-align: left;
}
.subtitle-left {
  font-size: 2rem;
  font-weight: 200;
  margin-bottom: 1rem;
  color: #1a237e;
  text-align: left;
}


.description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #444;
  line-height: 1.8;
}


.gallery {
  flex: 1.2; 
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.gallery-image {
  width: 100%;
  max-width: 700px; 
  height: auto;
  border-radius: 16px;
  object-fit: cover;
}



</style>
