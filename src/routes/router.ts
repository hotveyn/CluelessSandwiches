import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import HomePage from "@/pages/HomePage.vue"
import CatalogPage from "@/pages/CatalogPage.vue"

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "home",
        component: HomePage
    },
    {
        path: "/catalog",
        name: "catalog",
        component: CatalogPage
    },
]

export default createRouter({
    history: createWebHistory(),
    routes,
});
