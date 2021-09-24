// What Is an EventEmitter?
// The EventEmitter class is a built-in class that resides in the events module. 

// Creating EventEmitters
// That being said, let's go ahead and create an EventEmitter. This can be done either via creating an instance of the class itself, or by implementing it through a custom class and then creating an instance of that class.

// Creating an EventEmitter Object
// Let's start off with a simple event-emitting object. We'll create an EventEmitter that will emit an event that contains information about the application's uptime, every second.

// First, import the EventEmitter class from the events modules:

// const { EventEmitter } = require('events');

const EventEmitter = require("events");

const event = new EventEmitter();

event.on("checkStatus", (a, b) => {
    console.log(`Statue is ${a} , ${b}`);
});
event.on("sayMyName", () => {
    console.log("Amit");
});
event.on("sayMyName", () => {
    console.log("Kumar");
})
event.on("sayMyName", () => {
    console.log("Amit Kumar");
})
event.emit("sayMyName");

event.emit("checkStatus", 200, 'ok');