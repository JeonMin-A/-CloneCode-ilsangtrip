import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        // MainHome
        path: "/CloneCode-ilsangtrip2/",
        name: "MainPage",
        component: () => import('@/pages/Main')
    },
    {
        // Brand
        path: "/CloneCode-ilsangtrip2/Brand",
        name: "BrandPage",
        component: () => import('@/pages/Brand')
    },
    {
        // Programs
        path: "/CloneCode-ilsangtrip2/Program",
        name: "ProgramPage",
        component: () => import('@/pages/Program')
    },
    {
        // WellMate
        path: "/CloneCode-ilsangtrip2/WellMate",
        name: "WellMatePage",
        component: () => import('@/pages/WellMate')
    },
    {
        // WellnessItem
        path: "/CloneCode-ilsangtrip2/WellnessItem",
        name: "WellnessItemPage",
        component: () => import('@/pages/WellnessItem')
    },
    {
        // Contact
        path: "/CloneCode-ilsangtrip2/Contact",
        name: "ContactPage",
        component: () => import('@/pages/Main')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;