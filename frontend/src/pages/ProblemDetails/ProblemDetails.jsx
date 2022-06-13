import React from "react";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


const ProblemDetails = () => {
    const location = useLocation()
    const [problem, setProblem] = useState

    const id = location.state
    useEffect(() => {
     axios.get("")
    }, [third])
    
  return (
    <div>
      <NavBar/>
    </div>
  );
};

export default ProblemDetails;
