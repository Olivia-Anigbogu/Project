<template>
    <div>
        <!-- Forms23 block -->
        <section class="w3l-forms-23">
            <div class="forms23-block">
                <div class="wrapper">
                    <h1>
                        <a href="index.html" class="logo-2"><span class="fa fa-bullhorn"
                                aria-hidden="true"></span>Classify</a>
                        <!-- if logo is image enable this   
						<a class="logo" href="index.html">
							<img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
						</a> -->
                    </h1>
                    <div class="d-grid forms23-grids">
                        <div class="form23">
                            <h6>Login to your account</h6>
                            <form action="#" method="post">
                                <input type="email" name="email" class="input-form" placeholder="Your Email"
                                    required="required" />
                                <input type="password" name="password" class="input-form" placeholder="Your Password"
                                    required="required" />
                                <button type="submit" class="btn button-eff">Login</button>
                            </form>
                            <p>Not a member yet? <a href="signup.html">Join Now!</a></p>
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
export default {
    name: 'LogIn1',
}
</script>