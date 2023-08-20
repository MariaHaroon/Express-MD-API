import React from 'react'
import CustomForm from '../component/CustomForm'
import SignupForm from '../component/CustomForm/SignupForm'

export default function Signup() {
    return (
        <div style={{ height: '90vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <SignupForm />
        </div>
    )
}