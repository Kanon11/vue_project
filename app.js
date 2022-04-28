
Vue.component('x', {
    data() {
        return {
            name: 'kanon',
        }
    },
    template: `<p>{{name}}</p>`
});
new Vue({
    el: "#app"
})
