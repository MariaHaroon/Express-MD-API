import React from 'react'
import './custom.css'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

// export default function CustomForm() {
//     return (
//         <div className="wrapper">
//             <div className="card-switch">
//                 <label className="switch">
//                     <input type="checkbox" className="toggle" />
//                     <span className="slider" />
//                     <span className="card-side" />
//                     <div className="flip-card__inner">
//                         <LoginForm />
//                         <Signupform />
//                     </div>
//                 </label>
//             </div>
//         </div>

//     )
// }



export default function CustomForm() {
    const [isSignup, setIsSignup] = useState(false);

    const toggleForm = () => {
        setIsSignup(!isSignup);
    }

    return (
        <div className="wrapper">
            <div className="card-switch">
                <label className="switch">
                    <input type="checkbox" className="toggle" onChange={toggleForm} />
                    <span className="slider" />
                    <span className="card-side" />
                    <div className="flip-card__inner">
                        {isSignup ? <SignupForm /> : <LoginForm />}
                    </div>
                </label>
            </div>
        </div>
    )
}
