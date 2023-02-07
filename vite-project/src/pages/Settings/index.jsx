import React from 'react';
import DeleteAccount from '../../components/DeleteAccount';
import './styles.css'


const Settings = () => {
    return (
        <div className='settings-page'>
            <DeleteAccount />
            <h1>Change user name?</h1>
            <h1>Logout</h1>
        </div>
    )
};

export default Settings;
