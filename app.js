const html = `<div>My name is {{name}}</div>`;
const scope1 = new Vue({
    data: {
        name: "kanon"
    },
    template:html
})
setTimeout(() => {
    scope1.$mount('#app')
},2000);