"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task1 = (next) => {
    setTimeout(() => {
        console.log("Task 1 được thực thi");
        next();
    }, 1000);
};
const task2 = (next) => {
    setTimeout(() => {
        console.log("Task 2 được thực thi");
        next();
    }, 1500);
};
const task3 = (next) => {
    setTimeout(() => {
        console.log("Task 3 được thực thi! Hoàn thành");
        next();
    }, 2000);
};
task1(() => {
    task2(() => {
        task3(() => {
        });
    });
});
