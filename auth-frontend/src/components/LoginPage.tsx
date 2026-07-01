import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/loginPage.scss"

function LoginPage() {
  const navigate = useNavigate();

  function loginWithGoogle() {
    window.location.href = "http://localhost:3000/auth/google";
  }

  return (
    <div className="loginContainer"> 
        <div className="loginCard">
            <div className="providerBtn" onClick={loginWithGoogle}>
                <div className='providerSvg'>
                    <svg viewBox="0 0 262.00 262.00" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000" stroke="#000000" stroke-width="0.00262">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path>
                            <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path>
                            <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path>
                            <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path>
                        </g>
                    </svg>
                </div>
                Continue with Google
            </div>
            <div className="providerBtn">
                <div className='providerSvg'>
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" stroke-width="0.00016"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path fill="#F35325" d="M1 1h6.5v6.5H1V1z"></path>
                            <path fill="#81BC06" d="M8.5 1H15v6.5H8.5V1z"></path>
                            <path fill="#05A6F0" d="M1 8.5h6.5V15H1V8.5z"></path>
                            <path fill="#FFBA08" d="M8.5 8.5H15V15H8.5V8.5z"></path>
                        </g>
                    </svg>
                </div>
                Continue with Microsoft
            </div>
            <div className="forgotPwdBtn" onClick={() => navigate("/success")}>Forgot your password?</div>
        </div>
    </div>
  )
}

export default LoginPage