import { useState } from "react";
import { GiFeather } from "react-icons/gi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (
      userName &&
      password &&
      confirmpassword &&
      password === confirmpassword
    ) {
      let Details = {
        username: userName,
        password: password,
      };

      axios.post("http://localhost:8000/addUser", Details).then((res) => {
        if (res.status === 201) {
          alert("User Added...");
          navigate("/signup");
        }
      });
    }

    console.log("Signing up:", userName, password);

    setUserName("");
    setpassword("");
    setconfirmpassword("");
  };
  return (
    <div className="flex flex-col  items-center  bg-gradient-to from-gray-800 to-gray-700 bg-gradient-to-r h-full">
      <form onSubmit={handleSignUp}>
        <div className="text-7xl font-extrabold mt-10 mb-20 ">
          <GiFeather className="text-gray-400" />
          Book Stack
        </div>
        <fieldset className="flex flex-col items-center ml-[50px] w-[300px] h-[300px] bg- from-gray-800 to-gray-700 bg-gradient-to-r border border-3xl">
          <legend className="text-gray-300 text-left ml-5">SignUp</legend>
          <p>
            <input
              type="text"
              className="mt-10 px-5 py-2 mb-5 w-[250px] border-black bg-gradient-to-r from-gray-500 via-gray-600 to-gray-600 border border-3"
              placeholder="UserName"
              value={userName}
              required
              onChange={(e) => setUserName(e.target.value)}
            />
          </p>
          <p>
            <input
              type="password"
              className=" mb-5 px-5 py-2 w-[250px] border-black bg-gradient-to-r from-gray-500 via-gray-600 to-gray-600 border border-3"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setpassword(e.target.value)}
            />
          </p>
          <p>
            <input
              type="password"
              className="w-[250px] px-5 py-2 border-black bg-gradient-to-r from-gray-500 via-gray-600 to-gray-600 border border-3"
              placeholder="ConfirmPassword"
              value={confirmpassword}
              required
              onChange={(e) => setconfirmpassword(e.target.value)}
            />
          </p>
          <button
            type="submit"
            className="bg-black px-5 py-2 hover:bg-slate-700 w-[250px] text-gray-300 text-[15px]  mt-5 font-medium "
          >
            Sign Up
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUp;
