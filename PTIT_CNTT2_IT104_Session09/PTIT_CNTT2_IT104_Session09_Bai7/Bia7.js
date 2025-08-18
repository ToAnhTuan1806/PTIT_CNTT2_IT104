"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateUser(user, updates) {
    if ("id" in updates) {
        return "Id cannot be changed";
    }
    let newUser = {
        id: user.id,
        name: user.name,
        email: user.email,
    };
    if (updates.name !== undefined) {
        newUser.name = updates.name;
    }
    if (updates.email !== undefined) {
        newUser.email = updates.email;
    }
    if (updates.age !== undefined) {
        newUser.age = updates.age;
    }
    return newUser;
}
const user1 = { id: 1, name: "Alice", email: "alice@example.com" };
const updates1 = { name: "Alice Johnson" };
console.log(updateUser(user1, updates1));
