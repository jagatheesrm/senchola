import axios from 'axios';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { BsArrowLeft } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import { useNavigate, useParams } from 'react-router-dom';
import './forgotpage.css';

function NewPassword() {
    const { token, email } = useParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('https://senchola.waranj38.repl.co/api/reset-password', {
                email,
                token,
                newPassword: password,

            });

            setMessage(response.data.message);
        } catch (error) {
            console.error('Error resetting password:', error);
            setMessage('Error resetting password');
        }

    };
    const navigate = useNavigate()
    const getMail = () => {
        navigate('/login')

    }

    return (
        <div className='password-main pt-5'>
            <div className='password newpassword'>
                <span className="password-icon"> <FiKey /> </span>
                <h4 className='my-2'> Set new password</h4>
                <p className='text-muted px-md-5 '>Your new password must be different from the previously used password</p>

                <Form className='form my-3' onSubmit={handleSubmit}>
                    <Form.Control
                        type="password"
                        className='input-pass'
                        placeholder="New Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <p></p>
                    <Form.Control
                        type="password"
                        className='input-pass'
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <p></p>
                    <button className='btns' type="submit">Reset password</button>
                </Form>
                <p>{message}</p>
                <p onClick={getMail} className='my-3'> <BsArrowLeft /> back to login </p>

            </div>
        </div>
    );
}

export default NewPassword;
