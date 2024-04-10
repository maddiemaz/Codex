import { useContext, useState } from 'react';
import userContext from '../../userContext';
import axios from 'axios';

export default function Account () {

    const {user} = useContext(userContext)

    return (
        <div className="account-page">
            <div>Account Page</div>
        </div>
    )
}