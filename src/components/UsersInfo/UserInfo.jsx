import React, { useEffect, useState } from "react";
import './UserInfo.scss';
import Preloading from '../Preloading/Preloading'

const UserInfo = () => {
    const placeHolder = {
        avatar: "http://www.gravatar.com/avatar/?d=identicon",
        email: "example@xyz.com",
        first_name: "Example Name",
        id: "0",
        last_name: "(Click on one of the buttons 👈 to get info)"
    };

    console.log('render userlist');
    const [users, setUsers] = useState();
    const [userId, setUserId] = useState(0);
    const [userData, setUserData] = useState(placeHolder);
    const [isLoading, setIsLoading] = useState(false);


    const fetchUsersList = async () => {
        const res = await fetch("https://reqres.in/api/users/");
        const json = await res.json();
        setUsers(json.data);
    };

    const handleClick = (e) => {
        setUserId(e.target.id);
    }

    useEffect(() => { fetchUsersList(); }, []);

    useEffect(() => {
        if (userId > 0) {
            setIsLoading(true);
            fetch(`https://reqres.in/api/users/${userId}`)
                .then((response) => response.json())
                .then((users) => {
                    setUserData(users.data)
                    setIsLoading(false);
                }, (users) => {
                    console.log(users.data)
                })
        }

    }, [userId]);

    const renderUserData = () => {
        return (
            <div className="userInformation">
                <h4 className="heading">{userData.first_name}'s Info</h4>
                <div className="userAvatar">
                    <img src={userData.avatar} alt="user_image" />
                </div>
                <p className="userName">{userData.first_name} {userData.last_name}</p>
                <p className="userEmail">{userData.email}</p>
            </div>
        );
    }

    return (
        <div className="userInfoPanel">
            <div className="usersList">
                <div>
                    <h3>List of Users </h3>
                </div>
                <div className="listOfUsers">
                    {users && users.length &&
                        users.map((user) => {
                            return (
                                <button key={user.id} id={user.id} className="userButton" onClick={handleClick}>{user.first_name}</button>
                            )
                        })
                    }
                </div>
            </div>
            <div className="userCard">
                {isLoading ? <Preloading /> : renderUserData() }
            </div>
        </div>
    );
}

export default UserInfo;