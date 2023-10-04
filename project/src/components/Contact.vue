<template>
    <!-- contact -->
    <div class="w3l-contact-main">
        <div class="contact sec-padding">
            <div class="wrapper">
                <h3 class="title-main">Contact Us</h3>
                <div class="contact-form mx-auto pt-sm-4">
                    <form action="https://formspree.io/f/xnqkogyy" method="POST">
                        <div class="d-grid content-grids-cont">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" name="name" id="w3lName" placeholder="" required="">
                            </div>
                            <div class="form-group">
                                <label for="w3lSender">Email</label>
                                <input type="email" class="form-control" name="email" id="w3lSender" placeholder=""
                                    required="">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="w3lSubject">Subject</label>
                            <input type="text" class="form-control" name="subject" id="w3lSubject" placeholder=""
                                required="">
                        </div>
                        <div class="form-group">
                            <label for="w3lSubject">How can we help?</label>
                            <textarea name="message" id="w3lMessage" class="form-control" placeholder=""
                                required=""></textarea>
                        </div>
                        <button type="submit" class="btn button-eff button-eff-2">Submit</button>
                    </form>
                </div>
                <div class="d-grid temp-cont-grid">
                    <div class="d-grid adress-info">
                        <div class="adress-icon">
                            <span class="fa fa-map-marker"></span>
                        </div>
                        <div class="text-left">
                            <h6>Location</h6>
                            <p>Gradlinq,
                                <br>Nigeria.
                            </p>
                        </div>
                    </div>
                    <div class="d-grid adress-info">
                        <div class="adress-icon">
                            <span class="fa fa-envelope-o"></span>
                        </div>
                        <div class="text-left">
                            <h6>Email</h6>
                            <a href="mailto:oliviaanigbogu860@gmail.com">oliviaanigbogu860@gmail.com</a>
                            <br>

                        </div>
                    </div>
                    <div class="d-grid adress-info">
                        <div class="adress-icon">
                            <span class="fa fa-phone"></span>
                        </div>
                        <div class="text-left">
                            <h6>Phone Number</h6>
                            <p><a href="tel:+2348068946359">+2348068946359</a></p>
                        </div>
                    </div>
                </div>
                <div class="map">
                    <iframe
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Maitama,Abuja%20,Nigeria+(Start%20Up%20Mastery)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        width="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                </div>
            </div>
        </div>
    </div>
    <!-- //contact -->
</template>
<script>
export default {
    name: 'Contact'
}
</script>