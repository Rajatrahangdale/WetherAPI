import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Retrieve user data from localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || []; // Fetch the array of users

    // Check if the user exists
    const user = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      setErrorMessage("Invalid email or password");
      return;
    }

    // On successful login, redirect to home page
    navigate("/home");
  };

  return (
    <div>
      <div className="h-screen flex items-center justify-between bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="w-1/2 mx-auto py-10 bg-[#ffffff21] rounded-2xl">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-5xl font-bold text-blue-600 flex justify-center">
              Login&nbsp;
            </h1>
            <span className="text-4xl">to Weather App</span>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-5 flex flex-col items-center"
          >
            <input
              type="email"
              name="email"
              className="mt-5 w-1/2 px-5 py-3 text-black rounded-md shadow-sm caret-gray-500 focus:outline-none focus:ring-blue-500 focus:bg-white"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              className="mt-5 w-1/2 px-5 py-3 text-black rounded-md shadow-sm caret-gray-500 focus:outline-none focus:ring-blue-500 focus:bg-white"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="mt-5 w-1/2 px-5 py-3 bg-green-400 rounded-xl"
            >
              Submit
            </button>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <p className="mt-5 text-white text-xl">
              Not having an account?&nbsp;
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="text-blue-600 font-semibold"
              >
                Signup
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
