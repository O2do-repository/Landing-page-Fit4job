<template>
  <nav class="top-nav">
    <div class="nav-content">
      <!-- Logo à gauche -->
      <div class="logo-wrapper">
        <img :src="logoUrl" alt="Fit4Job Logo" class="logo" />
      </div>

      <!-- Liens + Contact à droite -->
      <div class="nav-actions">


        <!-- Bouton Contact visible à droite -->
        <a href="#contact" class="contact-button">
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
</script>

<style scoped>
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
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

.logo-wrapper .logo {
  height: 56px;
  width: auto;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a237e;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.nav-links a::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(155, 89, 182, 0.12);
  border-radius: 50%;
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: -1;
}

.nav-links a:hover {
  color: #9b59b6;
  background-color: white;
  transform: scale(1.15);
}

.nav-links a:hover::before {
  opacity: 1;
  transform: scale(1.2);
}

/* Bouton Contact */
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
}

.contact-button:hover {
  background-color: #3949ab;
}

</style>
