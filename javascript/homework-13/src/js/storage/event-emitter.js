export default class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(type, callback) {
        this.events[type] = this.events[type] || [];

        this.events[type].push(callback);
        console.log(this.events[type]);
    }

    emit(type, ...args) {
        if (this.events[type]) {
            this.events[type].forEach(callback => callback(...args));
        }
    }
}
