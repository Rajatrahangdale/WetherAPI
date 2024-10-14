import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, password } = formData;

    // Basic Validation
    if (!username || !email || !password) {
      setErrorMessage("All fields are required");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
      return;
    }

    // Retrieve existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the user already exists
    const userExists = existingUsers.some((user) => user.email === email);
    if (userExists) {
      setErrorMessage("User with this email already exists.");
      return;
    }

    // Store new user data
    const userData = { username, email, password };
    existingUsers.push(userData); // Add the new user to the array

    // Update localStorage with the new user array
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // Redirect to login page after signup
    navigate("/login");
  };

  return (
    <>
      <div className="h-screen flex items-center justify-between bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="w-1/2 mx-auto py-10 bg-[#ffffff21] rounded-2xl">
          <h1 className="text-5xl font-bold text-blue-600 flex justify-center">
            Sign Up
          </h1>
          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col items-center"
          >
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={formData.username}
              className="w-1/2 px-5 py-3 text-black rounded-md shadow-sm caret-gray-500 focus:outline-none focus:ring-blue-500 focus:bg-white"
              placeholder="Username"
            />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              className="mt-5 w-1/2 px-5 py-3 text-black rounded-md shadow-sm caret-gray-500 focus:outline-none focus:ring-blue-500 focus:bg-white"
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              className="mt-5 w-1/2 px-5 py-3 text-black rounded-md shadow-sm caret-gray-500 focus:outline-none focus:ring-blue-500 focus:bg-white"
              placeholder="Password"
            />
            <button className="mt-5 w-1/2 px-5 py-3 bg-green-400 rounded-xl">
              Submit
            </button>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <p className="mt-5 text-white text-xl">
              Already have an account?{" "}
              <button
                onClick={() => {
                  navigate("/login");
                }}
                className="text-blue-600 font-semibold"
              >
                Login
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
