import React, { useState } from "react";
import Login from "./Login";
import { Modal } from "antd";

export default function Register({ isOpen, closeModel }) {
  const [isVisisble, setIsVisisble] = useState(false);
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });
  let name, value;

  const handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    var source = "Email";
    const { userName, email, password } = user;
    console.log("this is called inside post data inside email");
    const res = await fetch("http://localhost:8080/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName, email, password, source }),
    });
    const data = await res.json();
    if (data.status === 409 || !data) {
      window.alert("Invalid Registation");
      console.log("Invalid Registation");
    } else if (data) {
      window.alert("seccessfuly Registation");
      showModel();
      console.log("seccessfuly Registation");
    }
  };

  const showModel = () => {
    closeModel();
    setIsVisisble(true);
  };
  const closeModelOfEmail = () => {
    setIsVisisble(false);
  };

  return (
    <>
      <div className="">
        <Login isOpen={isVisisble} closeModel={closeModelOfEmail} />
      </div>
      <Modal
        visible={isOpen}
        onCancel={closeModel}
        footer={null}
        centered
        maskStyle={{
          backgroundColor: "rgba(255, 255, 255, 0.94)",
          backdropFilter: "blur(1px)",
        }}
        width={630}
      >
        <section className="signUp md:h-[110vh] lg:h-[135vh] xl:h-[92vh]">
          <div className="mainSignUpCard font-dm-sans flex flex-col items-center">
            <div className="signup-content grid content-center 2xl:h-[36rem]">
              <div className="signup-form grid md:content-center justify-items-center tracking-tight">
                <h2 className="form-title mb-10 font-crimson 2xl:text-[1.9rem]">
                  SignUp with Email
                </h2>
                <div className="d-flex justify-content-between">
                  <form
                    method="POST"
                    className="registation-form mx-5 text-stone-900 text-[.85rem]"
                    id="registation-form"
                  >
                    <div className="group-form block">
                      <label htmlFor="name " className="block my-3">
                        Enter your name
                      </label>
                      <input
                        type="text"
                        name="userName"
                        id="name"
                        className="input border-b border-black outline-none w-full"
                        autoComplete="off"
                        value={user.name}
                        onChange={handleInput}
                        placeholder=""
                      />
                    </div>
                    <div className="group-form">
                      <div className="mt-4">
                        <label htmlFor="name " className="block mt-7 mb-3">
                          Enter your email
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="input border-b border-black outline-none w-full"
                          id="email"
                          value={user.email}
                          onChange={handleInput}
                        />
                      </div>
                    </div>

                    <div className="group-form">
                      <div className="mt-4">
                        <label htmlFor="name " className="block mt-7 mb-3">
                          Enter your password
                        </label>
                        <input
                          type="text"
                          name="password"
                          className="input border-b border-black outline-none w-full"
                          id="password"
                          value={user.password}
                          onChange={handleInput}
                        />
                      </div>
                    </div>
                    <div className="button mt-10">
                      <button
                        type="button"
                        className="bg-stone-800 text-white hover:bg-black rounded-full w-full py-1.5 font-dm-sans"
                        onClick={postData}
                      >
                        Register
                      </button>
                    </div>
                  </form>
                  <div className="register-img mt-8 text-center">
                    <figure>
                      <img src="./images/register.png" alt="" width="300rem" />
                    </figure>
                    <button
                      className="img-text mx-5 hover:text-blue-900"
                      onClick={showModel}
                    >
                      I am already register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Modal>
    </>
  );
}
