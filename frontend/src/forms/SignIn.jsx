import { useState } from "react";
import { GiFeather } from "react-icons/gi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    if (userName && password) {
      let Details = {
        username: userName,
        password: password,
      };

      axios.post("http://localhost:8000/validateUser", Details).then((res) => {
        if (res.status === 200) {
          alert("User Validated...");
          navigate("/addbook");
        }
      });
    }
    console.log("Signing in", userName, password);

    setUserName("");
    setpassword("");
  };
  return (
    <div className="flex flex-col  items-center  bg-gradient-to from-gray-800 to-gray-700 bg-gradient-to-r h-full">
      <form onSubmit={handleSignIn}>
        <div className="text-7xl font-extrabold mt-10 mb-20 ml-[60px] ">
          <GiFeather className="text-gray-400" />
          Book Stack
        </div>
        <fieldset className=" flex flex-col items-center ml-[100px] w-[300px] h-[300px] bg- from-gray-800 to-gray-700 bg-gradient-to-r border border-3xl">
          <legend className="text-gray-300 text-left ml-5">SignIn</legend>
          <p>
            <input
              className="mt-10 mb-5 w-[250px] p-2 text-gray-300 border-black bg-gradient-to-r from-gray-500 via-gray-600 to-gray-600 border border-3"
              type="text"
              placeholder="Username"
              value={userName}
              required
              onChange={(e) => setUserName(e.target.value)}
            />
          </p>
          <p>
            <input
              type="password"
              className=" mb-5 border p-2 border-3 w-[250px] text-gray-300 border-black bg-gradient-to-r from-gray-500 via-gray-600 to-gray-600"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setpassword(e.target.value)}
            />
          </p>

          <a
            type="submit"
            href="/addbook"
            className="bg-black text-center p-2 hover:bg-slate-600 rounded text-gray-300 text-[15px] font-medium w-[250px] "
          >
            Sign In
          </a>
          <div className="mt-5 text-gray-200 ">
            New user{" "}
            <a href="/signup" className="text-blue-300 underline">
              SignUp{" "}
            </a>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default SignIn;
