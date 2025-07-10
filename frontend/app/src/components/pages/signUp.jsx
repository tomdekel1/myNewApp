import { Navigate, NavLink } from "react-router-dom";
import userService from "../../services/usersServices";
import { useState } from "react";
import { useFormik } from 'formik'
import Joi from 'joi'
import { useNavigate } from 'react-router-dom'
import Input from "../Input";
import { passwordRegex } from '../../regExp';
import _ from 'lodash'
import { useAuth } from "../../contexts/auth.context";
import CitySelect from "../CitySelect";

export default function SignUp() {
    const [serverError, setServerError] = useState("");
    const navigate = useNavigate();

    const { user } = useAuth()

    const form = useFormik({
        validateOnMount: true,
        initialValues: {
            name: "",
            city: "קריית שמונה",
            address: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: "",
        },

        validate(values) {
            const schema = Joi.object({
                name: Joi.string().min(2).max(255).required().label("name"),
                city: Joi.string().min(2).max(1024).required().label("city"),
                address: Joi.string().min(2).max(1024).required().label("address"),
                phone: Joi.string().min(9).max(11).required().label("phone"),
                email: Joi.string().min(6).max(255).required().email({ tlds: { allow: false } }).label("email"),
                password: Joi.string().min(6).max(255).pattern(passwordRegex)
                    .rule({ message: "password must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-" })
                    .required().label("Password"),
                confirmPassword: Joi.string().equal(Joi.ref('password'))
                    .required()
                    .label('confirmPassword')
                    .messages({ 'any.only': '{{#label}} does not match' })
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
            values = _.omit(values, ['confirmPassword'])
            console.log(values)
            try {
                const res = await userService.signUp(values);
                console.log(res)
                navigate('/signin')
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
        <section className="bg-blue-300 dark:bg-gray-900 pt-15">
            <div className="flex flex-col items-center px-6 py-8 mx-auto lg:py-0 min-h-screen">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    Flowbite
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 mb-5">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <form onSubmit={form.handleSubmit} className="space-y-4 md:space-y-6" action="#">
                            <Input {...form.getFieldProps('name')}
                                label="Full Name"
                                required
                                placeholder="john doe"
                                error={form.touched.name && form.errors.name}
                                type="text" />
                            <CitySelect  {...form.getFieldProps('city')}
                                label="address" />
                            <Input {...form.getFieldProps('address')}
                                label="address"
                                required
                                placeholder="john doe"
                                error={form.touched.address && form.errors.address}
                                type="text" />
                            <Input {...form.getFieldProps('phone')}
                                label="phone"
                                required
                                placeholder="john doe"
                                error={form.touched.phone && form.errors.phone}
                                type="tel" />
                            <Input {...form.getFieldProps('email')}
                                label="email"
                                required
                                placeholder="john doe"
                                error={form.touched.email && form.errors.email}
                                type="email" />
                            <Input
                                {...form.getFieldProps('password')}
                                label="password"
                                required
                                placeholder="********"
                                error={form.touched.password && form.errors.password}
                                type="password" />
                            <Input
                                {...form.getFieldProps('confirmPassword')}
                                label="confirm password"
                                required
                                placeholder="********"
                                error={form.touched.confirmPassword && form.errors.confirmPassword}
                                type="password" />
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-blue-600 hover:underline dark:text-blue-500" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            {serverError && <div className='text-red-500'>{serverError}</div>}
                            <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create an account</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <NavLink to="/signin" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Login here</NavLink>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}