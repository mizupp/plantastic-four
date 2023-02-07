import React from 'react'
import axios from 'axios'
import { redirect } from 'react-router-dom'

const DeleteAccount = () => {

    const handleDelete = () => {
        async function getAccountId () {
            const accountId = await axios.get("http://localhost:5000/users")
            try {
                delOptions = {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem('token')}`
                    }
                }
                const response = await axios.get("http://localhost:5000/users/{accountId}", {delOptions});
                return <Redirect to='/' />
            }
            catch (err) {
                console.log(err)

            }
        }
    }
    return (
        <>
            <label htmlFor='delete-btn'>Delete Account</label>
            <button onClick={handleDelete} />
            <input type='button' name='delete-btn' onClick={handleDelete}/>
        </>
    )
};

export default DeleteAccount;