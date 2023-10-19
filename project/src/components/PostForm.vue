<template>
    <!-- faq page -->
    <div class="w3l-post-sec-main">
        <div class="post-se sec-padding">
            <div class="wrapper">
                <h3 class="title-main">Post Your Work Experience</h3>
                <div class="post-cont">
                    <div class="heading-sec">
                        <h5>Free Post</h5>
                        <p><span class="fa fa-gift" aria-hidden="true"></span>Post work experience to earn <b>Cash Back</b>
                            in
                            your
                            account</p>
                    </div>
                    <div class="about-right-faq">
                        <form @submit.prevent="onFormSubmit">
                            <div class="d-grid grid-col-2">
                                <div class="ele-9its_grid">
                                    <h5>First Name</h5>
                                    <input class="form-control" placeholder="Enter Your First Name" name="Fname" type="text"
                                        required v-model="user.firstName">
                                </div>
                                <div class="ele-9its_grid">
                                    <h5>Last Name</h5>
                                    <input class="form-control" placeholder="Enter Your Last Name" name="Lname" type="text"
                                        required v-model="user.lastName">
                                </div>
                            </div>
                            <div class="d-grid grid-col-2">
                                <div class="ele-9its_grid">
                                    <h5>Mobile Number</h5>
                                    <input class="form-control" placeholder="Enter Your Mobile Number" name="Pnum"
                                        type="number" required v-model="user.phoneNumber">
                                </div>
                                <div class="ele-9its_grid">
                                    <h5>Email Address</h5>
                                    <input class="form-control" placeholder="Enter Your Email Address" name="Email"
                                        type="email" required v-model="user.emailAddress">
                                </div>
                            </div>
                            <div class="d-grid grid-col-2">
                                <div class="ele-9its_grid">
                                    <div class="ele-9its_grid">
                                        <h5>Profession</h5>
                                        <input class="form-control" placeholder="Enter Your Profession" name="Profession"
                                            type="text" required v-model="user.profession">
                                    </div>

                                </div>
                                <div class="ele-9its_grid">
                                    <div class="ele-9its_grid">
                                        <h5>Years Of Experience</h5>
                                        <input type="number" name="yearsOfExperience" id="" v-model="user.yearsOfExperience"
                                            placeholder="Years Of Experience">
                                    </div>
                                </div>
                                <div class="ele-9its_grid">
                                    <!-- <h5>Profile Image</h5> -->
                                    <input type="hidden" name="image" id="image" class="form-control" v-model="user.image">
                                </div>
                            </div>
                            <button type="submit" class="btn button-eff">Post</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { db } from '../firebaseDb';
export default {
    name: 'PostForm',
    data() {
        return {
            user: {
                image: "https://picsum.photos/200/300"
            }
        }
    },
    methods: {
        onFormSubmit(event) {
            event.preventDefault()
            db.collection('users').add(this.user).then(() => {
                console.log("Post Successfully Created!");
                this.user.firstName = ''
                this.user.lastName = ''
                this.user.phoneNumber = ''
                this.user.emailAddress = ''
                this.user.profession = ''
                this.user.yearsOfExperience = ''
                this.user.image = ''
            }).catch((error) => {
                console.log(error);
            });
        }
    }
}
</script>