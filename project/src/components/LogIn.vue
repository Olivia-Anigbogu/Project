<template>
    <div>
        <!-- Forms23 block -->
        <section class="w3l-forms-23">
            <div class="forms23-block">
                <div class="wrapper">
                    <h1>
                        <a href="index.html" class="logo-2"><span class="fa fa-bullhorn"
                                aria-hidden="true"></span>Classify</a>
                    </h1>
                    <div class="d-grid forms23-grids">
                        <div class="form23">
                            <h6>Login to your account</h6>
                            <form action="#" method="post" @submit.prevent="userLogin">
                                <input type="email" name="email" class="input-form" placeholder="Your Email"
                                    required="required" v-model="user.email" />
                                <input type="password" name="password" class="input-form" placeholder="Your Password"
                                    required="required" v-model="user.password" />
                                <button type="submit" class="btn button-eff">Login</button>
                            </form>
                            <div class="mt-4">
                                <router-link to="/forgotPassword">Forgot password?</router-link>
                            </div>
                            <p>Not a member yet? <router-link to="./register">Join Now!</router-link></p>

                        </div>
                        <div class="form23-text">
                            <h3>Buy, Sell, Rent & Exchange in one Click</h3>
                            <p>Classified ads best theme relies on fast and intuitive way of promoting your ads login now
                            </p>
                            <a href="index.html" class="btn button-eff button-eff-2"><span class="fa fa-hand-o-left"
                                    aria-hidden="true"></span>
                                Back to Home</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Forms23 block -->

    </div>
</template>
<script>
import firebase from 'firebase';
export default {
    name: 'LogIn1',
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        };
    },
    methods: {
        userLogin() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.user.email, this.user.password)
                .then(() => {
                    alert('You have signed in successfully')
                    this.$router.push('/profile')
                })
                .catch((error) => {
                    alert(error.message);
                });
        }
    }
}
</script>
<style>
.mt-4 {
    margin-top: 15px;
}
</style>