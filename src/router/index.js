import { createRouter, createWebHistory } from "vue-router";
import Join from '../views/signup/Join.vue'
import Signup from "../views/signup/Signup.vue"
import SignIn from "../views/signup/SignIn.vue"
import Project from "../views/projects/ProjectPage.vue"

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
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router