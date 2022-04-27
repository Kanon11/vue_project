new Vue({
    el: "#app",
    data: {
        a: 0,
        link: "https://www.google.com/",
        obj: {
            name:"ddd"
        }
    },
    methods: {
        increment() {
            this.a += 1;
        }
    }
})