import React from "react";
import axios from "axios";
import "./styles.css";

import { redirect, useNavigate } from "react-router-dom";

const DeleteAccount = () => {
  const navigate = useNavigate();

  async function handleDelete() {
    const username = sessionStorage.getItem("username");
    try {
      const headers = {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      };

      const response = await axios.delete(
        `http://localhost:5000/users/${username}`,
        { headers }
      );
      return navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="delete-account">
      <button onClick={handleDelete} />
      <input
        type="button"
        name="delete-btn"
        value="Delete Account"
        onClick={handleDelete}
      />
    </div>
  );
};

export default DeleteAccount;
