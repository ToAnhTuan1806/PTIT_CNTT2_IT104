interface User{
    id:number
    name:string
    email:string
    age?:number
}

function updateUser(user: User, updates: Partial<User>): User| string{
    if("id" in updates){
        return "Id cannot be changed"
    }

    let newUser: User = {
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

  return newUser
}

const user1: User = { id: 1, name: "Alice", email: "alice@example.com" };
const updates1 = { name: "Alice Johnson" };
console.log(updateUser(user1, updates1));