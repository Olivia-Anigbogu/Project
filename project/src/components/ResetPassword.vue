<template>
    <div>
        <!-- Forms23 block -->
        <section class="w3l-forms-23">
            <div class="forms23-block">
                <div class="wrapper">
                    <h1>
                        <a href="#" class="logo-2"><span class="fa fa-bullhorn" aria-hidden="true"></span>Gradlinq</a>
                    </h1>
                    <div class="d-grid forms23-grids">
                        <div class="form23">
                            <h6>Reset Your Password</h6>
                            <form action="#" method="post" @submit.prevent="forgetPassword">
                                <input type="email" name="email" class="input-form" placeholder="Your Email" required
                                    v-model="user.email" />
                                <button type="submit" class="btn button-eff">Reset</button>
                            </form>
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
        <!-- Forms23 block -->
    </div>
</template>
<script>
import firebase from "firebase";
export default {
    data() {
        return {
            user: {
                email: ''
            }
        };
    },
    methods: {
        forgetPassword() {
            firebase
                .auth()
                .sendPasswordResetEmail(this.user.email)
                .then(() => {
                    alert('Check your registered email to reset the password!')
                    this.user = {
                        email: ''
                    }
                }).catch((error) => {
                    alert(error)
                })
        }
    }
};
</script>