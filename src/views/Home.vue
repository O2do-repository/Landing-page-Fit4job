<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { NConfigProvider, NGlobalStyle } from 'naive-ui'
import HeroSection from '../components/HeroSection.vue'
import FeaturesSection from '../components/FeaturesSection.vue'
import NewsLetterSection from '../components/NewsLetterSection.vue'
import DataSection from '../components/DataSection.vue'
import TopNav from '../components/TopNav.vue'
import AvisSection from '../components/AvisSection.vue'
import FooterSection from '../components/FooterSection.vue'
import NeverMissSection from '../components/NeverMissSection.vue'

const showButton = ref(false)

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function onScroll() {
  showButton.value = window.scrollY > 100
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <TopNav /> 
  <div class="landing-page">
    <HeroSection id="home" />
    <NeverMissSection/>
    <DataSection id="data" />
    <FeaturesSection id="features" />
    <AvisSection id="reviews"/>
    <NewsLetterSection id="contact" />
    <footerSection/>
  </div>

  <button
    v-show="showButton"
    class="back-to-top"
    @click="scrollToTop"
    aria-label="Back to top"
  >
    ↑ Top
  </button>
</template>

<style>
.landing-page {
  font-family: 'Inter', sans-serif;
  color: white;
  background: white;
  background-size: 400% 400%;
  animation: gradientBG 20s ease infinite;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}
html {
  scroll-behavior: smooth;
}

@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #1a237e;
  color: white;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(26, 35, 126, 0.3);
  transition: background-color 0.3s ease, transform 0.2s ease, opacity 0.3s ease;
  z-index: 9999;
  user-select: none;
  opacity: 1;
}

.back-to-top:hover {
  background-color: #3949ab;
  transform: scale(1.05);
}



</style>
