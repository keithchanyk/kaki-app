import { createRouter, createWebHistory } from "vue-router";
import Join from '../views/signup/Join.vue'
import Signup from "../views/signup/Signup.vue"
import Registration from "../views/signup/Register.vue"
import SignIn from "../views/signup/SignIn.vue"
import Project from "../views/projects/ProjectPage.vue"
import Organisation from "../views/organisation/Organisation.vue"
import ProjectDetails from "../views/projects/ProjectDetails.vue"
import LandingPage from "../views/landing/LandingPage.vue"
import ProfilePage from "../views/profile/Profile.vue"
import SignUpPage from "../views/signup/SignUpRegister.vue"


const routes = [
    {
        path: '/join',
        name: "Join",
        component: Join
    },
    {
        path: '/signup',
        name: "Sign Up",
        component: Signup
    },
    {
        path: '/',
        name: "Landing Page",
        component: LandingPage
    },

    {
        path: '/signin',
        name: "Sign In",
        component: SignIn
    },
    {
        path: '/project',
        name: "Project Page",
        component: Project
    },
    {
        path: '/org',
        name: "Organisation",
        component: Organisation
    },
    {
        path: '/projectdetails',
        name: "Project Details",
        component: ProjectDetails
    },

    {
        path: '/profile',
        name: "Profile Page",
        component: ProfilePage
    },
    {
        path: '/register',
        name: "Register",
        component: Registration
    },
    {
        path: '/signupregister',
        name: "SignUpRegister",
        component: SignUpPage
    }


]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router