import { createSlice } from "@reduxjs/toolkit"

type State= {
    items: number[]
}
const initialState: State= {
    items: []
}

const randomNum= (min: number, max: number)=> Math.floor(Math.random()* (max-min+1)+min)
const randomListSlice= createSlice({
    name: "randomList", 
    initialState,
    reducers: {
        generate(state){
            // độ dài 5-15 pty 
            let length= randomNum(5, 15)
            let arr= Array.from({length}, ()=> randomNum(-100, 100))
        }
    }
})