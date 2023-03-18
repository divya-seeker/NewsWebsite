import { nanoid } from "@reduxjs/toolkit";
import React, { useState,useRef } from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../../redux/slice/notesSlice";

function CreateNote() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const dispatch = useDispatch()

    const tit=useRef();
    const des=useRef();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(createNote({
            title,
            desc,
            id: nanoid(10)
        }))
        tit.current.value='';
        des.current.value='';
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div style={{display:'flex',justifyContent:'center'}}><input style={{border:'2px solid blue',height:'29px',width:'300px',margin:"5px"}} ref={tit} placeholder="title here" type="text" onChange={(e) => setTitle(e.target.value)}/></div>
                <div style={{display:'flex',justifyContent:'center'}}><input style={{border:'2px solid blue',height:'29px',width:'300px',margin:"5px"}} ref={des} placeholder="description here" type="text" onChange={(e) => setDesc(e.target.value)}/></div>
                <div style={{display:'flex',justifyContent:'center',margin:"4px"}}><input style={{border:'2px solid blue',height:'29px',width:'120px'}} type="submit" onClick={handleSubmit}/></div>
            </form>
        </div>
    );
}

export default CreateNote;