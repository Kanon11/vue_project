new Vue({
    el: "#app",
    data: {
        title: "http://google.com",
        isTrue: true,
        a: 10,
        b: 200,
        c: 30,
        name:"kadnon",
        cars: ['kanon', 'kpol','ayon'], 
        obj: {
            a: "history",
            b:"culture",
        }
    },
    methods: {
        getting(){
            return this.title;
        }
    }
})