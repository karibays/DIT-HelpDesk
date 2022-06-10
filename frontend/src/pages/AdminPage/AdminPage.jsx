import React, {useState} from "react";
import NavBar from "../../components/NavBar";
import "./AdminPage.css";
import axios from "axios";
import {fetchUser} from "../../utils/fetchUser";

const AdminPage = () => {
    const { id } = fetchUser();
    const [barcode, setBarcode] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [role, setRole] = useState("");
    const [password1, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [anotherId, setId] = useState("");
    const [users, setUsers] = useState([]);

    const readAdminFunc  = async (e) => {
        e.preventDefault();
        try {
            axios
                .get(`http://10.1.11.249:8080/user/roleAdmin`, {
                })
                .then((res) => {
                    setUsers(res.data);
                    console.log(res.data);
                })
                .catch((error) => {
                    console.warn(error);
                    alert("ERROR");
                });
        }
        catch (e) {

        }
    }
    const createAdminFunc = async (e) => {
        e.preventDefault();
        let form_data = new FormData();

        form_data = {
            barcode: barcode,
            firstname: firstName,
            lastname: lastName,
            role: role,
            password: password1,
            username: username,
        };


            axios
                .post(`http://10.1.11.249:8080/user/createAdmin`, form_data, {
                    headers: {
                        "content-type": "application/json",
                    },
                })
                .then((res) => {
                    console.log(res);
                    alert("Account created successfully!")
                })
                .catch((error) => {
                    console.warn(error);
                    alert("ERROR! Please change barcode or check other parameters")
                });


    };

    const updateRoleFunc = async (e) => {
        let form_data = new FormData();
        e.preventDefault();

        form_data = {
            role: role,
        };

            axios
                .put(`http://10.1.11.249:8080/user/`+anotherId+``, form_data, {
                    headers: {
                        "content-type": "application/json",
                    },
                })
                .then((res) => {
                    console.log(res)
                    alert("Role updated successfully!")
                })
                .catch((error) => {
                    console.warn(error)
                    alert("Could not update user role.")
                });


    };

    const deleteFunc = (e) => {
        e.preventDefault();

            axios
                .delete(`http://10.1.11.249:8080/user/`+anotherId+``, {
                })
                .then((res) => {
                    console.log(res)
                    alert("Account deleted successfully!")
                })
                .catch((error) => {
                    console.warn(error)
                    alert("Could not delete an account")
                });


    };


    return (
        <div>
            <div className="topDiv1">
                <NavBar />
                <div className="container">
                    <div className="divCRUD1">
                        <h1 className="adminPageH1">Create new employee account</h1>
                        <form onSubmit={createAdminFunc}>
                            <fieldset className="fieldSet">
                                <div className="form-group">
                                    <label htmlFor="exampleTextarea" className="form-label">
                                        Barcode
                                    </label>
                                    <input type="text" placeholder="Enter barcode" onChange={(e) => setBarcode(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleTextarea" className="form-label" >
                                        First name
                                    </label>
                                    <input type="text" placeholder="Enter first name" onChange={(e) => setFirstName(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleTextarea" className="form-label" >
                                        Last name
                                    </label>
                                    <input type="text" placeholder="Enter last name" onChange={(e) => setLastName(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleTextarea" className="form-label">
                                        Role
                                    </label>
                                    <input type="text" placeholder="Enter role" onChange={(e) => setRole(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleTextarea" className="form-label">
                                        Password
                                    </label>
                                    <input type="text" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleTextarea" className="form-label">
                                        Username
                                    </label>
                                    <input type="text" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)}/>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </fieldset>
                        </form>
                    </div>
                    <div className="divCRUD2">
                        <h1 className="adminPageH1">Update account's role</h1>
                        <form onSubmit={updateRoleFunc} id="formUpdate">
                            <fieldset>
                                <div className="form-group">
                                    <label htmlFor="exampleTextarea" className="form-label">
                                        ID
                                    </label>
                                    <input type="text" placeholder="Enter id" onChange={(e) => setId(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleTextarea" className="form-label">
                                        Role
                                    </label>
                                    <select name="cars" id="cars" form="formUpdate" onChange={(e) => setRole(e.target.value)}>
                                        <option selected disabled>Choose here</option>
                                        <option value="ADMIN">ADMIN</option>
                                        <option value="USER">USER</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary">Read</button>
                            </fieldset>
                        </form>
                    </div>
                    <div className="divCRUD3">
                        <h1 className="adminPageH1">Delete employee account</h1>
                        <form onSubmit={deleteFunc}>
                            <fieldset>
                                <div className="form-group">
                                    <label htmlFor="exampleTextarea" className="form-label">
                                        ID
                                    </label>
                                    <input type="text" placeholder="Enter id" onChange={(e) => setId(e.target.value)}/>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
            <div className="topDiv2">
                <h1 className="adminPageH1">Show all employees accounts</h1>
                <div className="container">

                    {users&&(
                        <div>
                            <table className= "tableAdmins">
                                <tr>
                                    <th>id</th>
                                    <th>barcode</th>
                                    <th>firstname</th>
                                    <th>lastname</th>
                                    <th>username</th>
                                </tr>

                                {users.map((user) => {return (
                                    <tr>
                                        <th>
                                            {user.id}
                                        </th>
                                        <th>
                                            {user.barcode}
                                        </th>
                                        <th>
                                            {user.firstname}
                                        </th>
                                        <th>
                                            {user.lastname}
                                        </th>
                                        <th>
                                            {user.username}
                                        </th>
                                    </tr>)
                                    ;
                                })}
                            </table>
                            {/*<p key={user.id}>*/}
                            {/*    {`${user.id} ${user.barcode} ${user.firstname} ${user.lastname} ${user.username}`}*/}
                            {/*</p>*/}
                            {/*<br/>*/}
                        </div>
                    )}
                </div>
                <form onSubmit={readAdminFunc} className="readAdmins">
                    <fieldset>
                        <button type="submit" className="btn btn-primary">Read</button>
                    </fieldset>
                </form>
            </div>
        </div>


    );
};

export default AdminPage;
