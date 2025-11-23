import { useState } from "react";

export default function studentForm(){


    return(
        <form>
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