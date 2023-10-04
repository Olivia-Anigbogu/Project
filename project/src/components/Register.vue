<template>
    <!-- Forms23 block Start-->
    <section class="w3l-forms-23">
        <div class="forms23-block">
            <div class="wrapper">
                <h1>
                    <a href="index.html" class="logo-2"><span class="fa fa-bullhorn" aria-hidden="true"></span>Gradlinq</a>
                </h1>
                <div class="d-grid forms23-grids">
                    <div class="form23">
                        <h6>Sign Up</h6>
                        <form action="#" method="post" @submit.prevent="userRegistration">
                            <input type="text" name="username" class="input-form" placeholder="First and last name"
                                required="required" v-model="user.name" />
                            <input type="email" name="email" class="input-form" placeholder="Email" required="required"
                                v-model="user.email" />
                            <input type="password" name="password" class="input-form" placeholder="Password"
                                required="required" v-model="user.password" />
                            <input type="text" name="number" class="input-form" placeholder="Phone number (optional)"
                                required="required" v-model="user.phoneNumber" />
                            <p>By signing up, you agree to our <a href="#terms">Terms of Use</a></p>
                            <button type="submit" class="btn button-eff">Sign Up</button>
                        </form>
                        <p>Already have an account? <router-link to="./login">Log In</router-link></p>

                    </div>
                    <div class="form23-text">
                        <h3>Showcase Your Career
                            Details To Potential Employers</h3>
                        <p>Best Networking Platform In The World With User Friendly Features.
                        </p>
                        <router-link to="/" class="btn button-eff button-eff-2"><span class="fa fa-hand-o-left"
                                aria-hidden="true"></span> Back to Home</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Forms23 block End -->
</template>
<script>
import firebase from "firebase";
export default {
    name: 'Register',
    data() {
        return {
            user: {
                name: '',
                email: '',
                password: '',
                phoneNumber: '',
            }
        };
    },
    methods: {
        userRegistration() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.user.email, this.user.password)
                .then((res) => {
                    // now we have access to the signed in user
                    const user = firebase.auth().currentUser;
                    // send the signed in user a verification email

                    user.sendEmailVerification();
                    res.user
                        .updateProfile({
                            displayName: this.user.name,
                        })
                        .then(() => {
                            alert('You have been registered successfully')
                            this.$router.push('/login')
                        });
                })
                .catch((error) => {
                    alert(error.message);
                });
        }
    }
}
</script>