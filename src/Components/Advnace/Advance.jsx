import React, { useState } from "react";

const Advance = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData({
      fname: "",
      lname: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="Main-Container w-[80%] m-auto bg-[#2C2638] p-6 my-6 border border-white rounded-md text-center">
      <div calsf>
        <h1 className="text-[32px] text-white  my-2.5">Create an account</h1>
        <p className="text-gray-300 my-5 py-3 text-[20px]">
          Already have an account?{" "}
          <a href="/login" className="text-purple-400 hover:underline">
            Log in
          </a>
        </p>

        <form
          action=""
          className="flex flex-col gap-7.5 w-[60%]  p-2.5"
          onSubmit={handlesubmit}
        >
          <div className="NameContainer flex justify-between ">
            <input
              value={data.fname}
              onChange={handleInput}
              className="rounded-md px-3 py-1.5 text-white text-[20px] bg-[#3C364C] outline-none"
              type="text"
              name="fname"
              placeholder="Enter your First Name...."
              id=""
            />
            <input
              value={data.lname}
              onChange={handleInput}
              className=" rounded-md px-3 py-1.5 text-white text-[20px] bg-[#3C364C] outline-none"
              type="text"
              name="lname"
              id=""
              placeholder="Enter your Last Name...."
            />
          </div>
          <input
            value={data.email}
            onChange={handleInput}
            className="rounded-md px-3 py-1.5 text-white text-[20px] bg-[#3C364C] outline-none w-full"
            type="email"
            name="email"
            id=""
            placeholder="Enter your email...."
          />
          <input
            value={data.password}
            onChange={handleInput}
            className=" rounded-md px-3 py-1.5 text-white text-[20px] bg-[#3C364C] outline-none w-full "
            type="password"
            name="password"
            id=""
            placeholder="Enter your password...."
          />
          <div className="checkbox flex gap-1.5">
            <input
              value={data.fname}
              className=" rounded-md px-3 py-1.5 text-white text-[20px] bg-[#3C364C] outline-none"
              type="checkbox"
              name=""
              id=""
            />{" "}
            <p className="text-gray-300 ">
              I agree to the <a href="">Terms & conditions</a>
            </p>
          </div>
          <button
            className=" w-[40%] m-auto my-5 bg-[#6D54B5] text-white font-[24px]
                    rounded-md p-2.5"
          >
            Create Account
          </button>
          <p className="text-[20px] text-center text-purple-400">
            ----------------- Or register with ---------------------
          </p>
        </form>
      </div>
    </div>
  );
};

export default Advance;
