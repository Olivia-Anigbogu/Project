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
                        <form action="#" method="post">
                            <div class="d-grid grid-col-2">
                                <div class="ele-9its_grid">
                                    <h5>First Name</h5>
                                    <input class="form-control" placeholder="Enter Your First Name" name="Fname" type="text"
                                        required="">
                                </div>
                                <div class="ele-9its_grid">
                                    <h5>Last Name</h5>
                                    <input class="form-control" placeholder="Enter Your Last Name" name="Lname" type="text"
                                        required="">
                                </div>
                            </div>
                            <div class="d-grid grid-col-2">
                                <div class="ele-9its_grid">
                                    <h5>Mobile Number</h5>
                                    <input class="form-control" placeholder="Enter Your Mobile Number" name="Pnum"
                                        type="number" required="">
                                </div>
                                <div class="ele-9its_grid">
                                    <h5>Email Address</h5>
                                    <input class="form-control" placeholder="Enter Your Email Address" name="Email"
                                        type="email" required="">
                                </div>
                            </div>
                            <div class="d-grid grid-col-2">
                                <div class="ele-9its_grid">
                                    <div class="ele-9its_grid">
                                        <h5>Profession</h5>
                                        <input class="form-control" placeholder="Enter Your Profession" name="Profession"
                                            type="text" required="">
                                    </div>

                                </div>
                                <div class="ele-9its_grid">
                                    <div class="ele-9its_grid">
                                        <h5>Years Of Experience</h5>
                                        <select id="category1" name="category1" required="">
                                            <option value="category1">0-2</option>
                                            <option value="category2">3-5</option>
                                            <option value="category3">5-10</option>
                                            <option value="category3">10+</option>
                                        </select>
                                    </div>

                                </div>
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
export default {
    name: 'PostForm',
}
</script>