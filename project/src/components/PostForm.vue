<template>
    <!-- faq page -->
    <div class="w3l-post-sec-main">
        <div class="post-se sec-padding">
            <div class="wrapper">
                <h3 class="title-main">Post Your Ad</h3>
                <div class="post-cont">
                    <div class="heading-sec">
                        <h5>Post Free Ad</h5>
                        <p><span class="fa fa-gift" aria-hidden="true"></span>Post ad to earn <b>Cash Back</b> in
                            your
                            account</p>
                    </div>
                    <div class="about-right-faq">
                        <form action="#" method="post" @submit.prevent="onFormSubmit">
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
                                        <select id="category1" name="category1" required="" v-model="user.yearsOfExperience">
                                            <option value="0-2">0-2</option>
                                            <option value="3-5">3-5</option>
                                            <option value="5-10">5-10</option>
                                            <option value="10+">10+</option>
                                        </select>
                                    </div>
                                </div>
                                <!-- <div class="ele-9its_grid">
                                    <h5>Profile Image</h5>
                                    <input type="file" name="profilePicture" id="profilePicture" class="form-control" required>
                                </div> -->
                            </div>
                            <button type="submit" class="btn button-eff">Post Ad</button>
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
            }
        }
    },
    methods: {
            onFormSubmit(event) {
                event.preventDefault()
                db.collection('users').add(this.user).then(() => {
                    alert("User successfully created!");
                    this.user.firstName = ''
                    this.user.lastName = ''
                    this.user.phoneNumber = ''
                    this.user.emailAddress = ''
                    this.user.profession = ''
                    this.user.yearsOfExperience = ''
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
}
</script>