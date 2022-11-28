import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import HomePage from "@/pages/HomePage.vue"
import CatalogPage from "@/pages/CatalogPage.vue"
import ProfilePage from "@/pages/ProfilePage.vue"
import CartPage from "@/pages/CartPage.vue"
import ProductPage from "@/pages/ProductPage.vue"

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
    {
        path: "/profile",
        name: "profile",
        component: ProfilePage
    },
    {
        path: "/cart",
        name: "cart",
        component: CartPage
    },
    {
        path: "/product/:id",
        name: "product",
        component: ProductPage
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
});
