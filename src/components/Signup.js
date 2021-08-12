import React from 'react';
import axios from 'axios';

function handleSignup() {
    axios.post('http://localhost:4000/signup', {
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    })
    .then(response => {
        console.log(response.data)
        console.log("sign up successful")
    })
    .catch(err => {
        console.log(err)
    })
}

export default Signup;