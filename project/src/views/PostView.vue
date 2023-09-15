<template>
    <div>
    <InnerBannerAbout/>
    <PostForm/>
    </div>
</template>
<script>
import InnerBannerAbout from '../components/InnerBannerAbout.vue'
import PostForm from '../components/PostForm.vue'
export default {
    
    name: 'PostView',
    components: {
        InnerBannerAbout,
        PostForm,
    }
}
</script>