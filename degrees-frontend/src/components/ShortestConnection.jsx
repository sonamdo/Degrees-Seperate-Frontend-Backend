import React, { useState } from "react";

const ShortestConnection = ({user1, user2}) => {

    const [degrees, setDegrees] = useState("")
    const [connection, setConnection] = useState(false)

    function handleClick(){
        console.log("JSON Button")
        fetch(`http://localhost:3000/connections/show?user1=${user1}&user2=${user2}`)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => setDegrees(response))
          .then(setConnection(true))
    }

    return(
        <div className = "row d-flex align-items-center ">
            <div className = "test col-md-4">
                <p>User One: {user1 ? user1 : "None Selected"}</p> 
                <p>User Two: {user2 ? user2 : "None Selected"}</p>
            </div>
            <div className = "col-md-4">
                <button className="btn btn-dark" onClick = {handleClick} >
                    Degrees of seperation
                </button>
            </div>
            <div className = "col-md-4">
            {
                connection ?
                <p>{degrees ? <p>User are connected through {degrees} steps</p>: <p>Users are not connected</p>}</p>
                : ""
            }
            </div>
        </div>
    )

}

export default ShortestConnection