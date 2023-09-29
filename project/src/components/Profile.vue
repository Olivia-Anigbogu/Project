<template>
    <div class="container">
        <div class="vue-tempalte">
            <h3>Welcome</h3>
            <p>{{ user.displayName }}</p>
            <p>{{ user.email }}</p>

            <button type="submit" class="btn button-eff" @click="logOut()">
                Log out
            </button>
        </div>
    </div>
</template>
<script>
import firebase from "firebase";
export default {
    data() {
        return {
            user: null
        };
    },
    created() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.user = user;
            } else {
                this.user = null;
            }
        });
    },
    methods: {
        logOut() {
            firebase.auth().signOut().then(() => {
                firebase.auth().onAuthStateChanged(() => {
                    this.$router.push('/login')
                })
            })
        }
    }
};
</script>
<style>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px;
    height: 100vh;
}

.vue-tempalte {
    border: 2px solid var(--theme-color-2);
    width: 75%;
    text-align: center;
}
</style>