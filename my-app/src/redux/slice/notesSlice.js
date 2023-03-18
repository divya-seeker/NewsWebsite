// import {createSlice} from '@reduxjs/toolkit'
// const notesSlice=createSlice({
//     name:'notesSlice',
//     initialState:{
//         notes:[{
//             title:"Divya",
//             desc:'DivyaDwivedi',
//             id:'20204069'
//         }]
//     },
//     reducers:{
//         createNote:(state,action)=>{
//             state.notes.push(action.payload)
//         },
//         deleteNote:()=>{}
//     }
// })
// export default notesSlice.reducers;
// export const {createNote,deleteNote}=notesSlice.actions

import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
    name: 'notesSlice',
    initialState: {
        notes: []
    },
    reducers: {
        createNote: (state, action) => {
            // state.notes = [...state.notes, action.payload];
            state.notes.push(action.payload)
        },
        deleteNote: (state, action) => {
            state.notes = state.notes.filter(note => note.id !== action.payload)
        }
    }
})

export default notesSlice.reducer;

export const {createNote, deleteNote} = notesSlice.actions;