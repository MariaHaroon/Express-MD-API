import React, { useEffect, useState }  from 'react'
import CustomForm from '../component/CustomForm'
import axios from 'axios'

export default function Login() {
    const [login, setLogin] = useState([])

    useEffect(() => {
        axios.get('/api/login')
            .then(json => setLogin(json.data.login))
            .catch(err => alert(err.message))
    }, [])

    return (
        <div style={{ height: '90vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CustomForm />
        </div>
    )
}