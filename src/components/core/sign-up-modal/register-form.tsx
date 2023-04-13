"use client";
import { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { validationSchemaRegister } from "@/libs/yup"
import { signIn } from 'next-auth/react'
import { Icon } from '@iconify/react';



export const RegisterForm = () => {
    const [loading, setLoading] = useState(false);

    const { handleSubmit, handleChange, handleBlur, values, errors, touched, isValid, dirty } =
        useFormik({
            initialValues: {
                name: "",
                email: "",
                password: "",
                passwordAgain: "",
            },
            validationSchema: validationSchemaRegister,
            onSubmit: (values) => {
                setLoading(true)
                axios.post('/api/register', values)
                    .then(() => {
                        setLoading(false)
                        handleLogin()
                    })
                    .catch((err) => console.log(err))
                    .finally(() =>
                        setLoading(false)
                    )
            },
        });

    function handleLogin() {
        const loginModal = document.getElementById("23");
        loginModal?.click();
    }

    return (
        <div className="w-full">
            <form className="form-control " onSubmit={handleSubmit}>
                <label className="label">
                    <span className="label-text">What is your name?</span>
                    {errors.name && touched.name && (
                        <p className="text-red-500 label-text-alt">{errors.name}</p>
                    )}
                </label>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered w-full"
                    onChange={handleChange}
                    value={values.name}
                    onBlur={handleBlur}
                />

                <label className="label">
                    <span className="label-text">What is your email address?</span>
                    {errors.email && touched.email && (
                        <p className="text-red-500 label-text-alt">{errors.email}</p>
                    )}
                </label>
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered w-full"
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                />

                <label className="label">
                    <span className="label-text">Creat a password</span>
                    {errors.password && touched.password && (
                        <p className="text-red-500 label-text-alt">{errors.password}</p>
                    )}
                </label>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input input-bordered w-full"
                    onChange={handleChange}
                    value={values.password}
                    onBlur={handleBlur}
                />

                <label className="label">
                    <span className="label-text">Confirm your password</span>
                    {errors.passwordAgain && touched.passwordAgain && (
                        <p className="text-red-500 label-text-alt">{errors.passwordAgain}</p>
                    )}
                </label>
                <input
                    type="password"
                    name="passwordAgain"
                    placeholder="Password"
                    className="input input-bordered w-full"
                    onChange={handleChange}
                    value={values.passwordAgain}
                    onBlur={handleBlur}
                />

                <div className="mt-4">
                    <button disabled={!(isValid && dirty)} type="submit"
                        className={`btn text-black w-full ${loading && 'loading'} ${isValid && dirty ? 'bg-slate-50' : 'btn-disabled cursor-not-allowed bg-slate-400'}`}>
                        Sign up
                    </button>
                </div>
            </form>

            <div className="divider">OR</div>

            <div className='space-y-2 md:space-y-0 md:flex md:space-x-3'>
                <div className="w-full">
                    <button className="btn btn-primary w-full space-x-2" onClick={() => signIn('google')}>
                        <Icon icon="logos:google-icon" />
                        <span className="text-xs">Continue with Google</span>
                    </button>
                </div>
                <div className="w-full">
                    <button onClick={() => signIn('github')}
                        className="btn btn-primary w-full space-x-2">
                        <Icon icon="logos:github-icon" />
                        <span className="text-xs">Continue with Github</span>
                    </button>
                </div>
            </div>
            <div className="mt-4">
                <div className="text-center">
                    <span className="text-gray-500">Already have an account?</span>
                    <label
                        onClick={handleLogin}
                        htmlFor="login-modal"
                        className="text-blue-500 ml-2 cursor-pointer"
                    >
                        Login
                    </label>
                </div>
            </div>
        </div>
    );
};
