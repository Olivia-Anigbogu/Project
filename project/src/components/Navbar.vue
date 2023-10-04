<template>
    <header>
        <div class="wrapper">
            <div class="header">
                <div class="right-img-9">
                    <h1>
                        <a href="index.html" class="logo"><span class="fa fa-bullhorn"
                                aria-hidden="true"></span>Gradlinq</a>
                    </h1>
                </div>
                <div class="bottom-menu-content">
                    <input type="checkbox" id="nav" />
                    <label for="nav" class="menu-bar"></label>
                    <nav>
                        <div class="wrapper">
                            <ul class="menu">
                                <li><router-link to="/" class="link-nav">Home</router-link></li>
                                <li><router-link to="/contact" class="link-nav">Contact</router-link></li>
                                <li><router-link to="/register" class="link-nav">Register</router-link></li>
                                <li><router-link to="/login" class="link-nav">Login</router-link></li>
                                <li class="nav-right-sty">
                                    <router-link to="/post" class="btn button-eff button-eff-2"><span
                                            class="fa fa-paper-plane-o" aria-hidden="true"></span>Post Your
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name: 'Navbar',
}
</script>