import { useState } from "react";
const SignIn = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        const signInData = {
            email: email,
            password: password
        }
        console.log(signInData);
    };
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-[#0e7c66]">
                        StudyFlow
                    </h1>

                    <h2 className="mt-6 text-2xl font-bold text-gray-900">
                        Welcome back
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                        Login to your account to continue
                    </p>
                </div>

                {/* Card */}
                <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 sm:p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-700"
                            >
                                Email address
                            </label>

                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300
                  text-sm text-gray-900
                  outline-none transition
                  focus:border-[#0e7c66]
                  focus:ring-2 focus:ring-[#0e7c66]/20"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label
                                    htmlFor="password"
                                    className="text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>

                                <a
                                    href="/forgot-password"
                                    className="text-sm font-medium text-[#0e7c66] hover:underline"
                                >
                                    Forgot password?
                                </a>
                            </div>

                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    name="password"
                                    className="w-full px-4 py-3 pr-16 rounded-lg border border-gray-300
                    text-sm text-gray-900
                    outline-none transition
                    focus:border-[#0e7c66]
                    focus:ring-2 focus:ring-[#0e7c66]/20"
                                    required
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2
                    text-sm font-medium text-gray-500
                    hover:text-[#0e7c66]"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        {/* Remember me */}
                        <div className="flex items-center gap-2">
                            <input
                                id="remember"
                                type="checkbox"
                                className="h-4 w-4 accent-[#0e7c66]"
                            />

                            <label
                                htmlFor="remember"
                                className="text-sm text-gray-600"
                            >
                                Remember me
                            </label>
                        </div>

                        {/* Login button */}
                        <button
                            type="submit"
                            className="w-full py-3 px-4 rounded-lg
                bg-[#0e7c66] text-white
                text-sm font-semibold
                transition duration-200
                hover:bg-[#096b58]
                focus:outline-none
                focus:ring-2
                focus:ring-[#0e7c66]
                focus:ring-offset-2"
                        >
                            Login
                        </button>
                    </form>

                    {/* Divider */}
                    {/* <div className="flex items-center gap-4 my-6">
                        <div className="h-px flex-1 bg-gray-200" />
                        <span className="text-sm text-gray-400">OR</span>
                        <div className="h-px flex-1 bg-gray-200" />
                    </div> */}

                    {/* Google */}
                    {/* <button
                        type="button"
                        className="w-full py-3 px-4 rounded-lg
              border border-gray-300
              flex items-center justify-center gap-3
              text-sm font-medium text-gray-700
              hover:bg-gray-50 transition"
                    >
                        <span className="font-bold text-red-500">G</span>
                        Continue with Google
                    </button> */}
                </div>

                {/* Signup */}
                <p className="text-center text-sm text-gray-600 mt-6">
                    Don't have an account?{" "}
                    <a
                        href="/signup"
                        className="font-semibold text-[#0e7c66] hover:underline"
                    >
                        Create an account
                    </a>
                </p>
            </div>
        </div>
    );
};

export default SignIn;