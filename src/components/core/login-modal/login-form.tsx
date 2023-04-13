'use client';
import { useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { validationSchemaLogin } from "@/libs/yup"
import { signIn } from 'next-auth/react'
import toast from 'react-hot-toast';



export const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter()

    const { handleSubmit, handleChange, handleBlur, values, errors, touched, isValid, dirty } =
        useFormik({
            initialValues: {
                email: "",
                password: "",
            },
            validationSchema: validationSchemaLogin,
            onSubmit: (values) => {
                setLoading(true)
                signIn('credentials', {
                    redirect: false,
                    email: values.email,
                    password: values.password,
                }).then((callback) => {

                    if (callback?.ok) {
                        setLoading(false)
                        close()
                        toast.success('Logged in successfully')
                        router.refresh()
                    }

                    if (callback?.error) {
                        setLoading(false)
                        toast.error(callback?.error)
                    }


                }).catch((err) => {
                    console.log(err)
                }).finally(() => {
                    setLoading(false)
                })
            },
        });
    function handleSignUp() {
        const loginModal = document.getElementById('23')
        loginModal?.click()
    }

    function close() {
        const loginModal = document.getElementById('32')
        loginModal?.click()
    }

    return (
        <div className="w-full">
            <form className="form-control w-full" onSubmit={handleSubmit}>
                <label className="label">
                    <span className="label-text">What is your email address?</span>
                    {errors.email && touched.email && (
                        <p className="text-red-500 label-text-alt">{errors.email}</p>
                    )}
                </label>
                <input name="email" type="text" placeholder="Email" className="input input-bordered w-full" autoComplete='Email' onChange={handleChange} value={values.email} onBlur={handleBlur} />

                <label className="label">
                    <span className="label-text">What is your password?</span>
                    {errors.password && touched.password && (
                        <p className="text-red-500 label-text-alt">{errors.password}</p>
                    )}
                </label>
                <input name="password" type="password" placeholder="Password" className="input input-bordered w-full" autoComplete='Password' onChange={handleChange} value={values.password} onBlur={handleBlur} />

                <div className="mt-4">
                    <button disabled={!(isValid && dirty)} type="submit"
                        className={`btn text-black w-full ${loading && 'loading'} ${isValid && dirty ? 'bg-slate-50' : 'btn-disabled cursor-not-allowed bg-slate-400'}`}>
                        Login
                    </button>
                </div>
            </form>
            <div className="divider">OR</div>

            <div className='flex space-x-3'>
                <div className="w-full">
                    <button className="btn btn-primary w-full">Continue with Google</button>
                </div>
                <div className="w-full">
                    <button onClick={() => signIn('github')}
                        className="btn btn-primary w-full">Continue with Github</button>
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