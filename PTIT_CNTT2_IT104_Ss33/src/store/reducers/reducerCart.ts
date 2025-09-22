import type { Product } from "../../components/interface"


const initialState: Product[] = [
    {
        id: 1,
        name: "Pizza",
        quantity: 15,
        price: 30,
    },
    {
        id: 2,
        name: "Hamburger",
        quantity: 10,
        price: 15,
    },
    {
        id: 3,
        name: "Bread",
        quantity: 5,
        price: 20,
    },
    {
        id: 4,
        name: "Cake",
        quantity: 5,
        price: 10,
    }
]

type Action = {
    type: string
    payload: any
}

export const reducerCart = (state = initialState, action: Action) => {
    switch (action.type) {
        case "ADD": {
            const { id, name, price, quantity } = action.payload;
            const exists = state.find((e) => e.id === id);

            if (exists) {
                return state.map((e) =>
                e.id === id ? { ...e, quantity: e.quantity + quantity } : e
                );
            } else {
                const newItem = { id, name, price, quantity };
                return [...state, newItem];
            }
        }



        case "ADD_ONE": {
            const{id, name, price}= action.payload
            const exists= state.find((e)=> e.id===id)
            if(exists){
                return state.map((e)=> e.id=== id? {...e, quantity: e.quantity+1}: e)
            }else{
                const newItem= {id, name, price, quantity:1}
                return [...state, newItem]
            }
        }

        case "DELETE": {
            const {id}= action.payload
            return state.filter(item=> item.id !==id)
        }
        default:
            return state
    }
}

