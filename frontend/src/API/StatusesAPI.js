import { useState, useEffect} from "react";
import axios from "axios";


function StatusesAPI() {
  const[statuses, setStatuses] = useState([])

  useEffect(() => {
    axios.get("http://10.1.11.249:8080/problems/statuses")
     .then((res) => {
        setStatuses(res.data)
     })
     .catch((err) =>{
        console.log("Erorr while gettig statuses " + err)
     })
    
  }, []);

  return {
    statuses: [statuses, setStatuses],
  };
}

export default StatusesAPI




