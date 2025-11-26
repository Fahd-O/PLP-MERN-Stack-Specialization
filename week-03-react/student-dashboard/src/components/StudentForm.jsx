import { useState } from "react";

export default function studentForm(){
    const [ form, setForm ] = useState({name:"", email:"", age:""});

    const handleChange = e => {
        const {name, value} = e.target;
        setForm(f => ({ ...f, [name]: value }));
    }
    // f = (name:"",email:"",age:"") - previous state of our form
    // ...f = copies and pastes the previous state of our form
    // f = (name:"Abu Masjid", email:"realabiolafahad@gmail.com", age:"26")

    const handleSubmit (e){
        e.preventDefault();
        if(!form.name || !form.email || !form.age) return null;
    }

    return(
        <form onSubmit={handleSubmit} className="rounded-xl border bg-white p-4 flex flex-wrap gap-2">
            <input 
                name="studentEnteredName"
                value={form.studentEnteredName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="border rounded-lg px-3 py-2 flex-1"
            />
            <input 
                name="studentEnteredEmail"
                value={form.studentEnteredEmail}
                onChange={handleChange}
                placeholder="Enter your email"
                className="border rounded-lg px-3 py-2 flex-1"
            />
            <input 
                name="studentEnteredAge"
                value={form.studentEnteredAge}
                onChange={handleChange}
                placeholder="Enter your age"
                className="border rounded-lg px-3 py-2 flex-1"
            />

            <button className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700">Add</button>
        </form>
    )
}