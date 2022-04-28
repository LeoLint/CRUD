import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container} from 'react-bootstrap';

const initialValues = {
    userName:'' ,
    userSurname:'' ,
    userSalary:''
}

function App() {
    const [userData , setUserData] = useState(initialValues);
    const [users , setUsers] = useState([]);
    const [editUserData , setEditUserData] = useState({
        edit: false ,
        userIndex:null
    })

    const handleEditClick = (data , index) => {
        setUserData(data);
        setEditUserData({
            edit:true ,
            userIndex: index
        })
    }

    const handleRemoveClick = (index) => {
        setUsers(users.filter((user , userIndex) => userIndex !== index));
    }

    const isFilledFields = userData.userName && userData.userSurname && userData.userSalary;

    const handleSubmitUser = (e) => {
        e.preventDefault();

        if (isFilledFields)  {
            setUsers((prevState)=> [...prevState , userData])
            setUserData(initialValues)
        }
    }

    const handleCleanClick = () => setUserData(initialValues)

    console.log('userData:', userData)

  return (
    <div className="App">
        <Container className="wrapper">
            <div className="oneMoreWrapper">
                <div className="tableList">
                    <div className="tableItem">
                        <p className="tableText">#</p>
                    </div>
                    <div className="tableItem">
                        <p className="tableText">Name</p>
                    </div>
                    <div className="tableItem">
                        <p className="tableText">Surname</p>
                    </div>
                    <div className="tableItem">
                        <p className="tableText">Message</p>
                    </div>
                    <div className="tableItem">
                        <p className="tableText">Actions</p>
                    </div>
                </div>
                <div>
                    {users.map((user , index)=> (
                        <div className="newAddedUsers">
                            <div className="newAddedUsersItem">
                                <p>{index + 1}</p>
                            </div>
                            <div>
                                <p>{user.userName}</p>
                            </div>
                            <div>
                                <p>{user.userSurname}</p>
                            </div>
                            <div>
                                <p>{user.userSalary}</p>
                            </div>
                            <div className="actionButtons">
                                <button onClick={() => handleEditClick(user , index)}>Edit</button>
                                <button onClick={() => handleRemoveClick(index)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="inputs">
                <form onSubmit={handleSubmitUser} action="" className="form">
                    <input type="text" placeholder="Write your name"
                           onChange={(e) => setUserData((prevState)=> ({
                        ...prevState,
                        userName: e.target.value
                    }))}
                    value={userData.userName}/>
                    <input type="text" placeholder="Write your surname"
                           onChange={(e) => setUserData((prevState) => ({
                        ...prevState,
                        userSurname: e.target.value
                    }))}
                           value={userData.userSurname}/>
                    <input type="text" placeholder="Write your message"
                           onChange={(e) => setUserData((prevState) => ({
                        ...prevState,
                        userSalary: e.target.value
                    }))}
                           value={userData.userSalary}/>
                </form>

                <div className="actions">
                    <button onClick={handleCleanClick} type="reset">Clean</button>
                    <button onClick={handleSubmitUser} type="submit">Add</button>
                </div>
            </div>
        </Container>
    </div>
  );
}

export default App;
