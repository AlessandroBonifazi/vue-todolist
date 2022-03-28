// Debug
console.log('JS OK!');

// -Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// -Visualizzare a fianco ad ogni item ha una "x": 
// cliccando su di essa, il todo viene rimosso dalla lista.
// -Predisporre un campo di input testuale e un pulsante "aggiungi": 
// cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo,
//  che quindi viene aggiunto alla lista dei todo esistenti.

// Config
const app = new Vue({
    el: '#root',
    data: {
        tasksList: [
            { text: 'Fare la spesa', done: false },
            { text: 'Fare la lavatrice', done: false },
            { text: 'Pulire casa', done: false }
        ],
        doneTasks: [],
        newTask: { text: '', done: false },
    },
    methods: {
        taskIsDone(task) {
            console.log('done!');
            task.done = true;
            this.doneTasks.push(task);
            console.log(this.doneTasks);
        },
    }
})