'use client';

export const RegisterForm = () => {
    function handleLogin() {
        const loginModal = document.getElementById('23')
        loginModal?.click()
    }


    return (
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text">What is your name?</span>
            </label>
            <input type="text" placeholder="Name" className="input input-bordered w-full" autoComplete='Name' />

            <label className="label">
                <span className="label-text">What is your email address?</span>
            </label>
            <input type="text" placeholder="Email" className="input input-bordered w-full" autoComplete='Email' />

            <label className="label">
                <span className="label-text">Creat a password</span>
            </label>
            <input type="password" placeholder="Password" className="input input-bordered w-full" autoComplete='Password' />

            <label className="label">
                <span className="label-text">Confirm your password</span>
            </label>
            <input type="password" placeholder="Password" className="input input-bordered w-full" autoComplete='Password-again' />


            <div className="mt-4">
                <button className="btn bg-slate-200 text-black w-full">Sign up</button>
            </div>

            <div className="divider">OR</div>

            <div className='flex space-x-3'>
                <div className="w-full">
                    <button className="btn btn-primary w-full">Sign up with Google</button>
                </div>
                <div className="w-full">
                    <button className="btn btn-primary w-full">Sign up with Github</button>
                </div>
            </div>

            <div className="mt-4">
                <div className="text-center">
                    <span className="text-gray-500">Already have an account?</span>
                    <label onClick={handleLogin} htmlFor="login-modal" className="text-blue-500 ml-2 cursor-pointer">Login</label>
                </div>
            </div>
        </div>
    )
}

