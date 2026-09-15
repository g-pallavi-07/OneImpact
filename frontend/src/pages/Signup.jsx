import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Logo from "../components/Logo";
import authBackground from "../assets/auth-background.png";

export default function Signup() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email.";
        }

        if (!formData.password) {
            newErrors.password = "Password is required.";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password.";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Frontend only for now.
        // Supabase authentication can be connected here later.
        console.log("Signup form submitted", formData);
    };

    return (
        <div
            className="min-h-screen bg-[#F8F1DE] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${authBackground})`,
            }}
        >
            <Navbar />

            <main className="relative flex min-h-[calc(100vh-80px)] items-center px-6 py-10 mt-12">
                <div className="mx-auto w-full max-w-7xl">
                    <div className="flex justify-start">
                        <div className="w-full max-w-[430px]">

                            <div className="rounded-3xl border border-white/70 bg-white/90 p-7 shadow-xl backdrop-blur-sm sm:p-9">

                                <div className="mb-6">
                                    <Logo />
                                </div>

                                <div className="mb-6">
                                    <p className="mb-2 font-inter text-sm font-semibold uppercase tracking-[0.15em] text-[#005A3C]">
                                        Create an Account
                                    </p>

                                    <h1 className="font-serif text-4xl leading-tight text-[#12352A]">
                                        Join One Impact
                                    </h1>

                                    <p className="mt-3 font-inter text-sm leading-6 text-gray-600">
                                        Be part of a community creating meaningful change.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">

                                    {/* Full Name */}
                                    <div>
                                        <label
                                            htmlFor="fullName"
                                            className="mb-2 block font-inter text-sm font-semibold text-[#12352A]"
                                        >
                                            Full Name
                                        </label>

                                        <input
                                            id="fullName"
                                            name="fullName"
                                            type="text"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="Enter your full name"
                                            className={`w-full rounded-xl border bg-white px-4 py-3 font-inter text-sm text-[#12352A] outline-none transition placeholder:text-gray-400 focus:ring-2 ${errors.fullName
                                                    ? "border-red-400 focus:ring-red-200"
                                                    : "border-gray-200 focus:border-[#005A3C] focus:ring-[#005A3C]/20"
                                                }`}
                                        />

                                        {errors.fullName && (
                                            <p className="mt-1.5 font-inter text-xs text-red-500">
                                                {errors.fullName}
                                            </p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="mb-2 block font-inter text-sm font-semibold text-[#12352A]"
                                        >
                                            Email
                                        </label>

                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                            className={`w-full rounded-xl border bg-white px-4 py-3 font-inter text-sm text-[#12352A] outline-none transition placeholder:text-gray-400 focus:ring-2 ${errors.email
                                                    ? "border-red-400 focus:ring-red-200"
                                                    : "border-gray-200 focus:border-[#005A3C] focus:ring-[#005A3C]/20"
                                                }`}
                                        />

                                        {errors.email && (
                                            <p className="mt-1.5 font-inter text-xs text-red-500">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    {/* Password */}
                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="mb-2 block font-inter text-sm font-semibold text-[#12352A]"
                                        >
                                            Password
                                        </label>

                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="Create a password"
                                            className={`w-full rounded-xl border bg-white px-4 py-3 font-inter text-sm text-[#12352A] outline-none transition placeholder:text-gray-400 focus:ring-2 ${errors.password
                                                    ? "border-red-400 focus:ring-red-200"
                                                    : "border-gray-200 focus:border-[#005A3C] focus:ring-[#005A3C]/20"
                                                }`}
                                        />

                                        {errors.password && (
                                            <p className="mt-1.5 font-inter text-xs text-red-500">
                                                {errors.password}
                                            </p>
                                        )}
                                    </div>

                                    {/* Confirm Password */}
                                    <div>
                                        <label
                                            htmlFor="confirmPassword"
                                            className="mb-2 block font-inter text-sm font-semibold text-[#12352A]"
                                        >
                                            Confirm Password
                                        </label>

                                        <input
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type="password"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            placeholder="Confirm your password"
                                            className={`w-full rounded-xl border bg-white px-4 py-3 font-inter text-sm text-[#12352A] outline-none transition placeholder:text-gray-400 focus:ring-2 ${errors.confirmPassword
                                                    ? "border-red-400 focus:ring-red-200"
                                                    : "border-gray-200 focus:border-[#005A3C] focus:ring-[#005A3C]/20"
                                                }`}
                                        />

                                        {errors.confirmPassword && (
                                            <p className="mt-1.5 font-inter text-xs text-red-500">
                                                {errors.confirmPassword}
                                            </p>
                                        )}
                                    </div>

                                    {/* Button */}
                                    <div className="pt-2">
                                        <Button type="submit" className="w-full">
                                            Create Account
                                        </Button>
                                    </div>
                                </form>

                                {/* Login */}
                                <p className="mt-6 text-center font-inter text-sm text-gray-600">
                                    Already have an account?{" "}
                                    <Link
                                        to="/login"
                                        className="font-semibold text-[#005A3C] hover:text-[#004B35]"
                                    >
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}