import React, { useState, useEffect } from "react";

const UserList = ({setUser1, setUser2}) => {

    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')
    const [search2, setSearch2] = useState('')

    const searchResults = users.filter(user => user.name.toLowerCase().startsWith(search))
    const searchResults2 = users.filter(user => user.name.toLowerCase().startsWith(search2))

    function loadUsers(){
        fetch("http://localhost:3000/users/index")
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => setUsers(response))
    }

    useEffect(() => { loadUsers() }, []);

    return (
        <div className = "row">
            <div className = "col-md-6 d-flex justify-content-center">
                <div>
                    <input
                        type = "text"
                        placeholder = "Search Users"
                        value = {search}
                        onChange = {(e) => setSearch(e.target.value.toLowerCase())}
                    >
                    </input>
                    <table className = "table">
                        <thead>
                            <tr>
                                <th scope="col">User ID</th>
                                <th scope="col">User Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {   searchResults?  
                            searchResults.map((user) => {
                                return <tr key = {user.id.toString()}>
                                        <td>{user.id}</td>
                                        <td>
                                            <button 
                                                type ="button" 
                                                className="btn btn-light"
                                                onClick = {(e) => setUser1(user.name)}
                                                > 
                                                    {user.name}
                                            </ button>
                                        </td>
                                    </tr>
                                }) : null
                            } 
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div className = "col-md-6 d-flex justify-content-center">
                <div>
                    <input
                        type = "text"
                        placeholder = "Search Users"
                        value = {search2}
                        onChange = {(e) => setSearch2(e.target.value.toLowerCase())}
                    >
                    </input>
                    <table className = "table">
                        <thead>
                            <tr>
                                <th scope="col">User ID</th>
                                <th scope="col">User Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {   searchResults2?  
                                searchResults2.map((user) => {
                                    return <tr>
                                            <td>{user.id}</td>
                                            <td>
                                                <button 
                                                    type ="button" 
                                                    className="btn btn-light"
                                                    onClick = {(e) => setUser2(user.name)}
                                                    >
                                                        {user.name}
                                                </ button>
                                            </td>
                                        </tr>
                                }) : null
                            } 
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default UserList