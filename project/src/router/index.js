import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import PostView from "../views/PostView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import ContactView from "../views/ContactView.vue";
import PostEditView from "../views/PostEditView.vue";
import ForgotPasswordView from "../views/ForgotPasswordView.vue";
import ProfileView from "../views/ProfileView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/post",
    name: "post",
    component: PostView,
  },
  {
    path: "/postEdit/:id",
    name: "postEdit",
    component: PostEditView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/forgotPassword",
    name: "forgotPassword",
    component: ForgotPasswordView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
