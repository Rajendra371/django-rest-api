import axios from 'axios';
import React, { useState, } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { API } from './config';

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()

        try{
            const {data} = await axios.post(`${API}/register`, {
                username,
                password
            })
            toast.success('Account created')
            setUsername('')
            setPassword('')
        }
        catch(err){
            toast.error(err.response.data.error)
        }
    }
    return (
        <div>
        <ToastContainer position='top-center' theme='colored'/>
            <div className="container mt-5">
                <div className="d-flex justify-content-center">
                    <div className="col-md-5">
                        <form className='shadow p-3'>
                            <div className="mb-2">
                                <label htmlFor="uname">UserName</label>
                                <input type="text" name="uname" id="uname" className='form-control' onChange={e=>setUsername(e.target.value)} value={username} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="pwd">Password</label>
                                <input type="password" name="pwd" id="pwd" className='form-control' onChange={e=>setPassword(e.target.value)} value={password} />
                            </div>

                            <div className="mb-2">
                                <button className="btn btn-primary" onClick={handleSubmit}> Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register
