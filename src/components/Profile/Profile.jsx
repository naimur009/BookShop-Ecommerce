import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { login } from '../../redux-features/auth';


const Profile = () => {

    const data = useSelector((state) => state.auth);

    console.log(data.name);

    const dispatch = useDispatch();
    dispatch(login("rahat"));

    return (
        <div>

        </div>
    );
};

export default Profile;