<template>
    <div class="w3l-products-4">
        <div id="products4-block" class="text-center">
            <div class="wrapper">
                <input id="tab1" type="radio" name="tabs" checked>
                <label class="tabtle" for="tab1">Latest Posts</label>

                <input id="tab2" type="radio" name="tabs">
                <label class="tabtle" for="tab2">Featured Posts</label>
                <section id="content1" class="tab-content text-left">
                    <div>
                        <div class="d-grid grid-col-3">
                            <div class="product" v-for="user in Users" :key="user.key">
                                <a href="product-single.html"><img :src=user.img class="img-responsive" alt=""
                                        width="700" /></a>
                                <div class="info-bg">
                                    <h5><a href="product-single.html">{{ user.firstName }} {{ user.lastName }}</a></h5>
                                    <p>{{ user.profession }}</p>
                                    <p>{{ user.yearsOfExperience }} Years Of Experience</p>
                                    <ul class="d-flex">
                                        <a href="tel:+`${user.phoneNumber}`">
                                            <li><span class="fa fa-phone"></span> {{ user.phoneNumber }}</li>
                                        </a>
                                        <a href="mailto:`${user.emailAddress}`">
                                            <li><span class="fa fa-envelope"></span> {{ user.emailAddress }}</li>
                                        </a>
                                    </ul>
                                    <div class="mt-3">
                                        <ul class="d-flex">
                                            <router-link :to="{ name: 'postEdit', params: { id: user.key } }"><button
                                                    type="button" class="btn button-eff"><span class="fa fa-edit"
                                                        aria-hidden="true"></span>Edit</button></router-link>

                                            <button type="button" class="btn button-eff"
                                                @click.prevent="deleteUser(user.key)"><span class="fa fa-trash"
                                                    aria-hidden="true"></span>Delete</button>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </div>
    </div>
</template>
<script>
import { db } from '../firebaseDb';
export default {
    name: 'Products',
    data() {
        return {
            Users: [],
        }
    },
    created() {
        db.collection('users').onSnapshot((snapshotChange) => {
            this.Users = [];
            snapshotChange.forEach((doc) => {
                this.Users.push({
                    key: doc.id,
                    firstName: doc.data().firstName,
                    lastName: doc.data().lastName,
                    phoneNumber: doc.data().phoneNumber,
                    emailAddress: doc.data().emailAddress,
                    profession: doc.data().profession,
                    yearsOfExperience: doc.data().yearsOfExperience,
                    img: "https://ui-avatars.com/api/?background=f85c70&color=000&name=" + doc.data().firstName + "+" + doc.data().lastName,
                })
            });
        });
        console.log('users', this.User);
    },
    methods: {
        deleteUser(id) {
            if (window.confirm("Do you really want to delete?")) {
                db.collection("users").doc(id).delete().then(() => {
                    console.log("Document deleted!");
                })
                    .catch((error) => {
                        console.error(error);
                    })
            }
        }
    }
}
</script>
<style>
.d-flex {
    justify-content: space-between;
}

.mt-3 {
    margin-top: 30px;
}
</style>