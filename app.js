new Vue({
    el: "#app",
    data: {
        name:"kanon"
    },
    methods: {
        render() {
            setTimeout(() => {
                this.name = "mukti";
            },1000)
        }
    }

}
)