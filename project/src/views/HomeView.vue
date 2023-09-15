<template>
  <div>
    <Banner/>
    <SearchForm/>
    <Products/>
    <Specifications/>
    <WhyChooseUs/>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import SearchForm from '../components/SearchForm.vue';
import Products from '../components/Products.vue';
import Specifications from '../components/Specifications.vue';
import WhyChooseUs from '../components/WhyChooseUs.vue';
export default {
  name: 'HomeView',
  components: {
    Banner,
    SearchForm,
    Products,
    Specifications,
    WhyChooseUs
  }
}
</script>
