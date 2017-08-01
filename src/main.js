import Vue from "vue"
import app from "./App.vue"
import store from "./vuex/store"

new Vue({
    el: "#app",
    store,
    render:h=>h(app)
});