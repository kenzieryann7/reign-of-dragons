import { createRouter, createWebHistory } from "vue-router";

//import store from "@/store";

import Main from "@/views/Main";
import Mail from "@/views/Mail";
import Bag from "@/views/Bag";

const routes = [
  {
    path: "/", // routes should be lowercase
    name: "Main",
    component: Main
    //beforeEnter: authUser
  },
  {
    path: "/mail", // routes should be lowercase
    name: "Mail",
    component: Mail
  },
  {
    path: "/bag", // routes should be lowercase
    name: "Bag",
    component: Bag
  }
];

// function authUser(to, from, next) {
//   if (to.query) {
//     if (to.query.jwt) {
//       store.dispatch("setToken", to.query.jwt);
//       delete to.query.jwt;
//       router.replace(to);
//     }
//   }

//   if (store.getters.getToken) {
//     if (store.getters.isAuthenticated) {
//       next();
//     } else {
//       requestToken();
//     }
//   } else {
//     requestToken();
//   }
// }

// function requestToken() {
//   let originalQuery =
//     window.location.href.split("?").length > 1
//       ? window.location.href.split("?")[1]
//       : "";

//   // Redirect the user back to the current page

//   const redirect = window.location.href.split("?")[0];

//   // Create the params needed by the auth endpoint
//   const params = {
//     public_key: parseInt(process.env.VUE_APP_PUBLIC_KEY),
//     query: originalQuery,
//     redirect: redirect
//   };

//   const query = new URLSearchParams(Object.entries(params));
//   query.toString();

//   // Redirect the user to the auth endpoint

//   window.location.href =
//     `https://courses.ecampus.oregonstate.edu/services/auth/public/v1/token` +
//     "?" +
//     query;
// }

const router = createRouter({
  mode: "history",
  linkExactActiveClass: "fw-bold", // In the navbar, the active view appears bold
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
