import { React, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RootContext } from "../../App";
import { Modal } from "antd";

export default function Login({ isOpen, closeModel }) {
  const navigate = useNavigate();
  const rootContext = useContext(RootContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = async (e) => {
    e.preventDefault();
    var source = "Email";
    console.log(`this is eamil ${email} and password ${password}`);
    const res = await fetch("http://localhost:8080/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, source }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 401 || !data) {
      window.alert("Invalid credentials");
    } else if (data) {
      localStorage.setItem("userinfo", JSON.stringify(data));
      rootContext.setIsSignOut(false);
      window.alert("seccessfuly Registation");
      closeModel();
      navigate("/");
    }
  };
  return (
    <div>
      <Modal
        visible={isOpen}
        onCancel={closeModel}
        footer={null}
        centered
        maskStyle={{
          backgroundColor: "rgb(255, 0, 0, 0.94)",
          backdropFilter: "blur(1px)",
        }}
        width={630}
      >
        <section className="signUp d-flex justify-content-center md:h-[110vh] lg:h-[135vh] xl:h-[92vh]">
          <div className="Container font-crimson flex flex-col items-center">
            <div className="signup-content grid content-center md:w-[38rem] md:h-[73.7rem] lg:w-[42rem] lg:h-[45rem] md:screen md:h-full 2xl:w-[42rem] 2xl:h-[36rem] xl:my-10 2xl:my-2.5 py-[3.5rem] lg:py-[3.2rem]">
              <div className="signup-form grid md:content-center justify-items-center tracking-tight">
                <div className="d-flex justify-content-between 2xl:w-[18rem]">
                  <form
                    method="POST"
                    className="registation-form text-stone-900 text-[.85rem]"
                    id="registation-form"
                  >
                    <h2 className="form-title text-center mb-10 font-crimson 2xl:text-[1.9rem]">
                      SignUp
                    </h2>
                    <div className="group-form">
                      <div className="mt-4">
                        <label htmlFor="name " className="block my-3">
                          Enter your email
                        </label>
                        <input
                          type="email"
                          className="input border-b border-black outline-none w-full"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
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
                          className="input border-b border-black outline-none w-full"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="button mt-10">
                      <button
                        type="button"
                        className="bg-stone-800 text-white hover:bg-black rounded-full w-full py-1.5 font-dm-sans"
                        onClick={userLogin}
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Modal>
    </div>
  );
}
