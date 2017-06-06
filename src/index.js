import Vue from "vue";
import Favlist from "components/Favlist.vue";

Vue.config.debug = true;

new Vue ({
    el: '#app',
    components: {
        'my-component': Favlist
    }
});
