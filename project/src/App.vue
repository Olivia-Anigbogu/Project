<template>
  <div class="w3l-headers-9">
    <div>
      <!-- Navbar start -->
      <Navbar />
      <!-- Navbar end -->
    </div>
   
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/profile">Profile</router-link>
    </nav> -->
    <router-view />
     <!-- Footer start -->
     <Footer />
    <!-- Footer end -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style></style>
