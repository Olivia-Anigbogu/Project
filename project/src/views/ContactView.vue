<template>
    <div>
        <ContactBanner/>
        <Contact/>
    </div>
</template>
<script>
import ContactBanner from '../components/ContactBanner.vue';
import Contact from '../components/Contact.vue';
    export default{
        name: 'ContactView',
        components:{
            ContactBanner,
            Contact
        }
    }
</script>