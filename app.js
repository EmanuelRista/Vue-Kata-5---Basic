'use strict';

const app = Vue.createApp({

    data() {
        return {
            enteredTask: '',
            arrayTasks: [],
            listIsVisible: true,
        };
    },
    computed: {
        buttonCaption() {
            if(this.listIsVisible === true) {
                return 'Hide';
            } else {
                return 'Show';
            }
        }
    },
    methods: {
        confirmTask() {
            this.arrayTasks.push(this.enteredTask);
        },
        toggleVisibility() {
            this.listIsVisible = !this.listIsVisible;
        }

    }

});

app.mount('#assignment');