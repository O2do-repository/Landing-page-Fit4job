<template>
  <nav class="top-nav">
    <div class="nav-content">
      <!-- Logo à gauche -->
      <div class="logo-wrapper">
        <img :src="logoUrl" alt="Fit4Job Logo" class="logo" />
      </div>
      <div class="nav-actions">

        <a href="#contact" class="contact-button" @click.prevent="scrollToContact">
          <Icon icon="mdi:play-circle-outline" width="20" height="20" />
          <span>book a demo</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import logoUrl from '@/assets/logo.png'
import { Icon } from '@iconify/vue'
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

/* --- Navigation --- */
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--nav-height);
  z-index: 1000;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  box-sizing: border-box;
}

.nav-content {
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.logo-wrapper .logo {
  height: 56px;
  width: auto;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

/* Actions */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

/* Bouton de contact */
.contact-button {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background-color: #1a237e;
  color: white;
  padding: 8px 16px;
  border-radius: 12px;
  font-weight: 500;
  font-size: 0.95rem;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.contact-button:hover {
  background-color: #3949ab;
}

/* --- Responsive --- */
@media (max-width: 600px) {
  .top-nav {
    padding: 0 1rem;
    height: 64px;
  }

  .logo-wrapper .logo {
    height: 44px;
  }

  .contact-button {
    padding: 6px 12px;
    font-size: 0.9rem;
  }
}
</style>