import React, { useState } from "react";

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const success = await handleLogin(email, password);
            if (success) {
                setEmail("");
                setPassword("");
                setError("");
            } else {
                setError("Login failed. Please check your credentials.");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="border-2 rounded-md border-emerald-600 p-10 h-auto w-auto">
                <div className="flex flex-col items-center justify-center gap-2 pt-0 p-5">
                    <h1 className="text-2xl font-semibold">Welcome back!</h1>
                    <p className="text-gray-400 text-sm">Please enter pre-defined details to sign in.</p>
                </div>
                <hr />
                <form onSubmit={submitHandler} className="flex flex-col items-start justify-center pt-5 pb-5">
                    <label htmlFor="emailInput" className="text-sm pb-2 pl-2">Email Address:</label>
                    <input
                        id="emailInput"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full outline-none bg-transparent border-2 border-emerald-600 rounded-xl py-3 px-5 text-sm placeholder:text-gray-700"
                        type="email"
                        placeholder="E.g, admin@ex.com"
                        aria-label="Email Address"
                    />
                    <label htmlFor="passwordInput" className="text-sm pt-3 pl-2">Password:</label>
                    <input
                        value={password}
                        id="passwordInput"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full outline-none bg-transparent border-2 border-emerald-600 rounded-xl py-3 px-5 mt-3 text-sm placeholder:text-gray-700"
                        type="password"
                        placeholder="Default Password:- 123"
                        aria-label="Password"
                    />
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    <button
                        type="submit"
                        className="text-white font-bold outline-none border-none bg-emerald-600 rounded-xl py-3 px-5 mt-3 w-full text-sm placeholder:text-white"
                    >
                        Log In
                    </button>
                </form>
                <hr />
                <br />
                <select
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-sm text-gray-700 bg-transparent border border-emerald-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-[#1c1c1c] appearance-none cursor-pointer custom-select-arrow"
                >
                    <option className="text-gray-700" disabled selected>Predefined Login Ids</option>
                    <option value="admin@ex.com">Admin: admin@ex.com</option>
                    <option value="employee1@ex.com">Aarav: employee1@ex.com</option>
                    <option value="employee2@ex.com">Vivaan: employee2@ex.com</option>
                    <option value="employee3@ex.com">Payal: employee3@ex.com</option>
                    <option value="employee4@ex.com">Ananya: employee4@ex.com</option>
                    <option value="employee5@ex.com">Aarohi: employee5@ex.com</option>
                </select>
            </div>
        </div>
    );
};

export default Login;