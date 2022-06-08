import {useState, useEffect} from 'react'
import axios from 'axios'
import { fetchUser } from '../utils/fetchUser'


function ProblemsAPI() {
    const [problems, setProblems] = useState([])
    
  

    useEffect(() =>{
        const user = fetchUser()
        axios
        .get(`http://10.1.11.249:8080/problems/user/${user.id}`)
        .then((res) => {
            setProblems(res.data);
        })
        .catch(function (error) {
            console.log("Error while fetching problems: " + error.message);
        });
    },[])
    
    return {
        problems: [problems, setProblems],
       
    }
}

export default ProblemsAPI