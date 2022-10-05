import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthErrorCodes, getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {firebaseApp} from './services/firebase';

const defaultInput = {
    email:"",
    password: ""
}

SignUp = () => {
    const [input,setInput] = useState(defaultInput);
    const [error,setError] = useState(null);
    
    const auth = getAuth(firebaseApp);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        let email = input.email.toLowerCase().trim();
        let password = input.password;
        
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((err)=>{
            console.log(err.code);
            console.log(err.message);
        });
    }

    const handleChange = (e) => {
        setInput((prevState)=> ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));

        return (
            
        )
};