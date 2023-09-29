<template>
   <div>
    <InnerBannerAbout/>
    <EditForm/>
   </div>
</template>
<script>
import EditForm from '../components/EditForm.vue'
import InnerBannerAbout from '../components/InnerBannerAbout.vue'
    export default{
    name: 'PostEditView',
    components: {
        InnerBannerAbout,
        EditForm
    },
}
</script>