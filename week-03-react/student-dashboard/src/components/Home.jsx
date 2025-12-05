import { useState, useEffect, use } from "react";
import StudentCard from "./StudentCard"; // Check back later to see if file path caused any issue. "../components/StudentCard"
import StudentForm from "./StudentForm";
import { fetchStudents, createStudent, updateStudent, deleteStudent } from "../lib/api"

export default function Home(){
    const [ student, setStudent ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState("");
    
    useEffect( () => {
        (async() => {
            try {
                setLoading(true);
                const data = await fetchStudents;
                setStudent(data);
            } catch (e) {
                setError(e.message);                
            }
            finally {
                setLoading(false);
            }
        })();
    }, {});

    async function handleAdd(student) {
        const create = await createStudent(student);
        setStudent(prev=>[created, ...prev]);
    }


    
}