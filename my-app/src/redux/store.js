// import {configureStore} from '@reduxjs/toolkit'
// import messageReducer from './redux/messageSlice'
// export default configureStore(
//     {
//         reducer:{
//             messageReducer
//         }
//     }
// )
import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./slice/messageSlice";
import notesSlice from "./slice/notesSlice";

export default configureStore({
    reducer: {
        messageReducer,
        notesReducer:notesSlice
    }
})