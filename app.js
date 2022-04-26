new Vue({
    el: "#app",
    data: {
        title: "kanon",
        isTrue: true,
        cars: ['kanon', 'kpol'], 
        obj: {
            a: "history",
            b:"culture",
        }
    },
    methods: {
        getting(){
            return this.obj.a;
        }
    }
})