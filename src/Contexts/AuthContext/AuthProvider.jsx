import React from 'react';
import { AuthContext } from './AuthContext';



const AuthProvider = ({ children }) => {

    const auhtInfo = {
        name: "Rakib Hasan",
        user: "dev.rakibhasan1@gmail.com"
    }



    return (
        <AuthContext value={auhtInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;