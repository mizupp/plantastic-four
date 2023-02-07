import React from 'react';
import axios from 'axios';

import { redirect } from 'react-router-dom'

const DeleteAccount = () => {

    const handleDelete = () => {
        console.log('Clicked')
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
        getAccountId()
    }
    return (
        <div className='delete-account'>
            <label htmlFor='delete-btn'>Delete Account</label>
            <button onClick={handleDelete} />
            <input type='button' name='delete-btn' value='Delete Account' onClick={handleDelete}/>
        </div>
    )
};

export default DeleteAccount;