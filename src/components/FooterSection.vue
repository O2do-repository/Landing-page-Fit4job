<template>


  <!-- Footer -->
  <footer class="footer">
    <div class="footer-content">
      <nav class="footer-menu">
        <a href="#">Home</a>

      </nav>
      <p class="footer-info">TVA: BE 0721.976.641</p>
      <p class="footer-info">© 2025 O2do sprl. Tous droits réservés.</p>

    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>

.footer {
  background-color: #000; /* fond noir */
  color: #ddd;
  padding: 3rem 1rem; /* footer plus grand */
  font-size: 0.9rem;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column; /* colonne pour menu au-dessus, infos en dessous */
  align-items: center;
  gap: 1rem;
}

.footer-menu {
  display: flex;
  gap: 1.5rem;
}

.footer-menu a {
  color: #ddd;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.footer-menu a:hover {
  color: #7c4dff; /* violet léger */
}

.footer-info {
  margin: 0;
  white-space: nowrap;
  font-size: 1rem;
  font-weight: 400;
  color: #bbb;
}

/* Footer responsive */
@media (max-width: 480px) {
  .footer-menu {
    flex-wrap: wrap;
    justify-content: center;
  }
  .footer-info {
    margin-top: 1rem;
  }
}

</style>
