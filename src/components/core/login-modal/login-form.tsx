'use client';
import React from 'react'

export const LoginForm = () => {
    function handleSignUp() {
        const loginModal = document.getElementById('23')
        loginModal?.click()
    }

    return (
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text">What is your email address?</span>
            </label>
            <input type="text" placeholder="Email" className="input input-bordered w-full" autoComplete='Email' />

            <label className="label">
                <span className="label-text">What is your password?</span>
            </label>
            <input type="password" placeholder="Password" className="input input-bordered w-full" autoComplete='Password' />

            <div className="mt-4">
                <button className="btn bg-slate-200 text-black w-full">Login</button>
            </div>

            <div className="divider">OR</div>

            <div className='flex space-x-3'>
                <div className="w-full">
                    <button className="btn btn-primary w-full">Login with Google</button>
                </div>
                <div className="w-full">
                    <button className="btn btn-primary w-full">Login with Github</button>
                </div>
            </div>

            <div className="mt-4">
                <div className="text-center">
                    <span className="text-gray-500">Don&#39;t have an account?</span>
                    <label onClick={handleSignUp} htmlFor="login-modal" className="text-blue-500 ml-2 cursor-pointer">Sign up</label>
                </div>
            </div>
        </div>
    )
}