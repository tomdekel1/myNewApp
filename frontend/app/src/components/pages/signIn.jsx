import { Navigate, NavLink, useNavigate } from "react-router-dom";
// import BgVid from "../BgVid";
import userService from "../../services/usersServices";
import { useFormik } from "formik";
import Joi from 'joi'
import { passwordRegex } from '../../regExp';
import { useState } from "react";
import Input from "../Input";
import { useAuth } from "../../contexts/auth.context";

export default function SignIn() {
    const [serverError, setServerError] = useState("")
    const navigate = useNavigate()

    const { user } = useAuth()

    const form = useFormik({
        validateOnMount: true,
        initialValues: {
            email: "",
            password: ""
        },
        validate(values) {
            const schema = Joi.object({
                email: Joi.string().min(6).max(255).required().email({ tlds: { allow: false } }).label("email"),
                password: Joi.string().min(6).max(255).pattern(passwordRegex)
                    .rule({ message: "password must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-" })
                    .required().label("Password"),
            })

            const { error } = schema.validate(values, { abortEarly: false });
            if (!error) {
                return null
            }

            const errors = {};
            for (const detail of error.details) {
                const key = detail.path.join(".")

                errors[key] = detail.message
            }
            return errors;
        },
        async onSubmit(values) {
            console.log(values)
            try {
                const res = await userService.logIn(values);
                console.log(res)
                navigate('/')
            } catch (err) {
                if (err.response?.status === 400) {
                    setServerError(err.response.data)
                }
            }
        }
    })

    if (user) {
        return <Navigate to="/" />
    }

    return (
        <>
            {/* <BgVid videoName="2" /> */}
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={form.handleSubmit} className="space-y-6">
                        <Input {...form.getFieldProps('email')}
                            label="email"
                            required
                            placeholder="john doe"
                            error={form.touched.email && form.errors.email}
                            type="email"
                        />


                        <Input
                            {...form.getFieldProps('password')}
                            label="password"
                            required
                            placeholder=""
                            error={form.touched.password && form.errors.password}
                            type="password" />

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                    {serverError && <div className='text-red-500'>{serverError}</div>}
                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Not a member?{' '}
                        <NavLink to="/signup" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            sign up
                        </NavLink>
                    </p>
                </div>
            </div>
        </>
    )
}