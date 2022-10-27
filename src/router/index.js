import { createRouter, createWebHistory } from "vue-router";
import Join from '../views/signup/Join.vue'
import Signup from "../views/signup/Signup.vue"
import SignIn from "../views/signup/SignIn.vue"
import Project from "../views/projects/ProjectPage.vue"
import Organisation from "../views/organisation/Organisation.vue"

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
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router