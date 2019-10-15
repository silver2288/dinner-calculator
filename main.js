var app = new Vue({
    el: '#app',
    data() {
        return {
            dinner: 100,
            tip: 9,
            people: 2,
        }
    },
    computed: {
        totalWTax(){
            return this.dinner + this.dinner * 0.21;
        },
        totalWTip(){
            return this.totalWTax + this.tip;
        },
        totalPPerson() {
            return this.totalWTip / this.people;
        }
    },
    methods: {
        increase(){
            this.dinner++;
        },
        decrease(){
            return this.dinner <= 0 ? false : this.dinner--;
        },
        increaseT(){
            this.tip++;
        },
        decreaseT(){
            return this.tip <= 0 ? false : this.tip--;
        },
        increaseP(){
            this.people++;
        },
        decreaseP(){
            return this.people <= 1 ? false : this.people--;
        },
    },
    filters: {
        round(value){
            return value.toFixed(2); 
        }
    },
    created: function(){

    },
})

