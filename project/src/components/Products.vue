<template>
    <div class="w3l-products-4">
        <div id="products4-block" class="text-center">
            <div class="wrapper">
                <input id="tab1" type="radio" name="tabs" checked>
                <label class="tabtle" for="tab1">Latest Ads</label>

                <input id="tab2" type="radio" name="tabs">
                <label class="tabtle" for="tab2">Featured Ads</label>

                <input id="tab3" type="radio" name="tabs">
                <label class="tabtle" for="tab3">Ending Soon</label>

                <section id="content1" class="tab-content text-left" v-for="user in Users" :key="user.key">
                    <div>
                        <div class="d-grid grid-col-3">
                            <div class="product">
                                <a href="product-single.html"><img src="./../assets/images/c1.jpg" class="img-responsive"
                                        alt="" /></a>
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
                                            <button type="button" class="btn button-eff"><span class="fa fa-edit"
                                                    aria-hidden="true"></span>Edit</button>
                                            <button type="button" class="btn button-eff"
                                                @click.prevent="deleteUser(user.key)"><span class="fa fa-trash"
                                                    aria-hidden="true"></span>Delete</button>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="product">
                            <a href="product-single.html"><img src="../assets/images/c2.jpg" class="img-responsive"
                                    alt="" /></a>
                            <div class="info-bg">
                                <h5><a href="product-single.html">Eaque ipsa quae ab illo inventore veritatis</a></h5>
                                <p>Nulla ex nunc</p>
                                <ul class="d-flex">
                                    <li><span class="fa fa-usd"></span> 299</li>
                                    <li class="margin-effe"><a href="#fav" title="Add this to Favorite"><span
                                                class="fa fa-heart-o"></span></a></li>
                                    <li><a href="#sahre" title="Share"><span class="fa fa-share"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="product">
                            <a href="product-single.html"><img src="../assets/images/c3.jpg" class="img-responsive"
                                    alt="" /></a>
                            <div class="info-bg">
                                <h5><a href="product-single.html">Quasi architecto beatae vitae dicta sunt</a></h5>
                                <p>Nulla ex nunc</p>
                                <ul class="d-flex">
                                    <li><span class="fa fa-usd"></span> 499</li>
                                    <li class="margin-effe"><a href="#fav" title="Add this to Favorite"><span
                                                class="fa fa-heart-o"></span></a></li>
                                    <li><a href="#sahre" title="Share"><span class="fa fa-share"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="product">
                            <a href="product-single.html"><img src="../assets/images/pf3.jpg" class="img-responsive"
                                    alt="" /></a>
                            <div class="info-bg">
                                <h5><a href="product-single.html">Nemo enim ipsam quia voluptas sit et</a></h5>
                                <p>Nulla ex nunc</p>
                                <ul class="d-flex">
                                    <li><span class="fa fa-usd"></span> 800</li>
                                    <li class="margin-effe"><a href="#fav" title="Add this to Favorite"><span
                                                class="fa fa-heart-o"></span></a></li>
                                    <li><a href="#sahre" title="Share"><span class="fa fa-share"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="product">
                            <a href="product-single.html"><img src="../assets/images/c5.jpg" class="img-responsive"
                                    alt="" /></a>
                            <div class="info-bg">
                                <h5><a href="product-single.html">Ut enim ad minima veniam, quis nostrum</a></h5>
                                <p>Nulla ex nunc</p>
                                <ul class="d-flex">
                                    <li><span class="fa fa-usd"></span> 1300</li>
                                    <li class="margin-effe"><a href="#fav" title="Add this to Favorite"><span
                                                class="fa fa-heart-o"></span></a></li>
                                    <li><a href="#sahre" title="Share"><span class="fa fa-share"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="product">
                            <a href="product-single.html"><img src="../assets/images/pb1.jpg" class="img-responsive"
                                    alt="" /></a>
                            <div class="info-bg">
                                <h5><a href="product-single.html">Sed ut perspiciatis unde omnis rerum est</a></h5>
                                <p>Nulla ex nunc</p>
                                <ul class="d-flex">
                                    <li><span class="fa fa-usd"></span> 2,500</li>
                                    <li class="margin-effe"><a href="#fav" title="Add this to Favorite"><span
                                                class="fa fa-heart-o"></span></a></li>
                                    <li><a href="#sahre" title="Share"><span class="fa fa-share"></span></a></li>
                                </ul>
                            </div>
                        </div> -->
                    </div>
                </section>

                <!-- <section id="content2" class="tab-content text-left">
                    <div class="d-grid grid-col-3">
                        <div class="product">
                            <a href="product-single.html"><img src="../assets/images/c4.jpg" class="img-responsive"
                                    alt="" /></a>
                            <div class="info-bg">
                                <h5><a href="product-single.html">Sed ut perspiciatis unde omnis iste natus</a></h5>
                                <p>Nulla ex nunc</p>
                                <ul class="d-flex">
                                    <li><span class="fa fa-usd"></span> 1200</li>
                                    <li class="margin-effe"><a href="#fav" title="Add this to Favorite"><span
                                                class="fa fa-heart-o"></span></a></li>
                                    <li><a href="#sahre" title="Share"><span class="fa fa-share"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="product">
                            <a href="product-single.html"><img src="../assets/images/c6.jpg" class="img-responsive"
                                    alt="" /></a>
                            <div class="info-bg">
                                <h5><a href="product-single.html">Eaque ipsa quae ab illo inventore veritatis</a></h5>
                                <p>Nulla ex nunc</p>
                                <ul class="d-flex">
                                    <li><span class="fa fa-usd"></span> 299</li>
                                    <li class="margin-effe"><a href="#fav" title="Add this to Favorite"><span
                                                class="fa fa-heart-o"></span></a></li>
                                    <li><a href="#sahre" title="Share"><span class="fa fa-share"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="product">
                            <a href="product-single.html"><img src="../assets/images/pr4.jpg" class="img-responsive"
                                    alt="" /></a>
                            <div class="info-bg">
                                <h5><a href="product-single.html">Quasi architecto beatae vitae dicta sunt</a></h5>
                                <p>Nulla ex nunc</p>
                                <ul class="d-flex">
                                    <li><span class="fa fa-usd"></span> 499</li>
                                    <li class="margin-effe"><a href="#fav" title="Add this to Favorite"><span
                                                class="fa fa-heart-o"></span></a></li>
                                    <li><a href="#sahre" title="Share"><span class="fa fa-share"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="product">
                            <a href="product-single.html"><img src="../assets/images/ps4.jpg" class="img-responsive"
                                    alt="" /></a>
                            <div class="info-bg">
                                <h5><a href="product-single.html">Nemo enim ipsam quia voluptas sit et expedita</a></h5>
                                <p>Nulla ex nunc</p>
                                <ul class="d-flex">
                                    <li><span class="fa fa-usd"></span> 800</li>
                                    <li class="margin-effe"><a href="#fav" title="Add this to Favorite"><span
                                                class="fa fa-heart-o"></span></a></li>
                                    <li><a href="#sahre" title="Share"><span class="fa fa-share"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="product">
                            <a href="product-single.html"><img src="../assets/images/c3.jpg" class="img-responsive"
                                    alt="" /></a>
                            <div class="info-bg">
                                <h5><a href="product-single.html">Quasi architecto beatae vitae dicta sunt</a></h5>
                                <p>Nulla ex nunc</p>
                                <ul class="d-flex">
                                    <li><span class="fa fa-usd"></span> 499</li>
                                    <li class="margin-effe"><a href="#fav" title="Add this to Favorite"><span
                                                class="fa fa-heart-o"></span></a></li>
                                    <li><a href="#sahre" title="Share"><span class="fa fa-share"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section> -->

                <!-- <section id="content3" class="tab-content text-left">
                    <div class="d-grid grid-col-3">
                        <div class="product">
                            <a href="product-single.html"><img src="../assets/images/ps6.jpg" class="img-responsive"
                                    alt="" /></a>
                            <div class="info-bg">
                                <h5><a href="product-single.html">Sed ut perspiciatis unde omnis iste natus</a></h5>
                                <p>Nulla ex nunc</p>
                                <ul class="d-flex">
                                    <li><span class="fa fa-usd"></span> 1200</li>
                                    <li class="margin-effe"><a href="#fav" title="Add this to Favorite"><span
                                                class="fa fa-heart-o"></span></a></li>
                                    <li><a href="#sahre" title="Share"><span class="fa fa-share"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="product">
                            <a href="product-single.html"><img src="../assets/images/pr6.jpg" class="img-responsive"
                                    alt="" /></a>
                            <div class="info-bg">
                                <h5><a href="product-single.html">Eaque ipsa quae ab illo inventore veritatis</a></h5>
                                <p>Nulla ex nunc</p>
                                <ul class="d-flex">
                                    <li><span class="fa fa-usd"></span> 299</li>
                                    <li class="margin-effe"><a href="#fav" title="Add this to Favorite"><span
                                                class="fa fa-heart-o"></span></a></li>
                                    <li><a href="#sahre" title="Share"><span class="fa fa-share"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="product">
                            <a href="product-single.html"><img src="../assets/images/pj4.jpg" class="img-responsive"
                                    alt="" /></a>
                            <div class="info-bg">
                                <h5><a href="product-single.html">Quasi architecto beatae vitae dicta sunt</a></h5>
                                <p>Nulla ex nunc</p>
                                <ul class="d-flex">
                                    <li><span class="fa fa-usd"></span> 499</li>
                                    <li class="margin-effe"><a href="#fav" title="Add this to Favorite"><span
                                                class="fa fa-heart-o"></span></a></li>
                                    <li><a href="#sahre" title="Share"><span class="fa fa-share"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="product">
                            <a href="product-single.html"><img src="../assets/images/c6.jpg" class="img-responsive"
                                    alt="" /></a>
                            <div class="info-bg">
                                <h5><a href="product-single.html">Ut enim ad minima veniam, quis nostrum</a></h5>
                                <p>Nulla ex nunc</p>
                                <ul class="d-flex">
                                    <li><span class="fa fa-usd"></span> 1300</li>
                                    <li class="margin-effe"><a href="#fav" title="Add this to Favorite"><span
                                                class="fa fa-heart-o"></span></a></li>
                                    <li><a href="#sahre" title="Share"><span class="fa fa-share"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section> -->
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
                    yearsOfExperience: doc.data().yearsOfExperience
                })
            });
        })
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