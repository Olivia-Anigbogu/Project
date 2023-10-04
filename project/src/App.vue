<template>
  <div class="w3l-headers-9">
    <div>
      <!-- Navbar start -->
      <Navbar />
      <!-- Navbar end -->
    </div>
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
    (function (m, a, z, e) {
      var s, t;
      try {
        t = m.sessionStorage.getItem('maze-us');
      } catch (err) { }

      if (!t) {
        t = new Date().getTime();
        try {
          m.sessionStorage.setItem('maze-us', t);
        } catch (err) { }
      }

      s = a.createElement('script');
      s.src = z + '?t=' + t + '&apiKey=' + e;
      s.async = true;
      a.getElementsByTagName('head')[0].appendChild(s);
      m.mazeUniversalSnippetApiKey = e;
    })(window, document, 'https://snippet.maze.co/maze-universal-loader.js', 'a8430c3d-3421-4e5e-b266-42230f4bea41'),

}
</script>

<style></style>
