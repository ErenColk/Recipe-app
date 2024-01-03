import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Profile.css"
const Profile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUserProfile = async () => {
      const response = await axios
        .get(" https://api.escuelajs.co/api/v1/auth/profile", {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).access_token
            }`,
          },
        })
        .then((response) => setUser(response.data));
    };
    console.log("calıstı");
    getUserProfile();
  }, []);

  return (
    <div className="user-profile">
    <img src={user.avatar} alt={user.name} />

    <table>
      <tbody>
        <tr>
          <td>Name:</td>
          <td>{user.name}</td>
        </tr>
        <tr>
          <td>Role:</td>
          <td>{user.role}</td>
        </tr>
        <tr>
          <td>Email:</td>
          <td>{user.email}</td>
        </tr>
      </tbody>
    </table>
    <div className="buttons">
          <button>Güncelle</button>
      </div>
  </div>
  );
};

export default Profile;
