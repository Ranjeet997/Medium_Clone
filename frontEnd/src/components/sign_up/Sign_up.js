import { React, useState, useEffect, useContext } from "react";
import jwtDecode from "jwt-decode";
import Register from "./Register";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { RootContext } from "../../App";
import { Modal } from "antd";

export default function Sign_up({ isOpen, closeModel }) {
  const [isVisisble, setIsVisisble] = useState(false);
  const navigate = useNavigate();
  const rootContext = useContext(RootContext);

  const [googleUser, setGoogleUser] = useState({
    userName: "",
    email: "",
    source: "",
  });
  const [fbUser, setFbUser] = useState({
    userName: "",
    email: "",
    source: "",
  });

  const showModel = () => {
    setIsVisisble(true);
  };
  const closeModelOfEmail = () => {
    setIsVisisble(false);
  };

  const onSuccess = async (credentialResponse) => {
    var decoded = await jwtDecode(credentialResponse.credential);
    console.log(decoded);
    console.log("THSI IS USER PROFILE PICTURE", decoded.picture);
    setGoogleUser({
      userName: decoded.name,
      email: decoded.email,
      user_picture: decoded.picture,
      source: "Google",
    });
  };
  useEffect(() => {
    const postData = async () => {
      console.log("CALL INSIDE USEEFFECT");
      const { userName, email, user_picture, source } = googleUser;

      const res = await fetch("http://localhost:8080/api/users/googlesignup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, email, user_picture, source }),
      });
      const data = await res.json();
      if (data.status === 409 || !data) {
        window.alert("Invalid Registation");
        console.log("Invalid Registation");
      } else if (data) {
        console.log("this is data of google login", data);
        localStorage.setItem("userinfo", JSON.stringify(data));
        rootContext.setIsSignOut(false);
        console.log("seccessfuly Registation");
        navigate("/");
      }
    };
    postData();
  }, [googleUser, rootContext, navigate]);

  return (
    <div>
      <div className="">
          <Register isOpen={isVisisble} closeModel={closeModelOfEmail}/>
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
        <div
          className={`grid md:content-center justify-items-center tracking-tight md:h-[110vh] lg:h-[135vh] xl:h-[92vh] my-[3rem] md:my-0`}
        >
          <p className="text-[1.89rem] xl:text-[2.05rem] font-source-serif-pro text-center">
            Welcome back.
          </p>
          <div className="space-y-3 md:w-[14rem] lg:w-[13.5rem] 2xl:w-[16rem] mt-[5rem]">
            <GoogleOAuthProvider clientId="520582457622-qnb7uku2kpbv4q8tqaun0805098kcs7m.apps.googleusercontent.com">
              <GoogleLogin
                shape="pill"
                onSuccess={onSuccess}
                onError={() => {
                  console.log("Login Failed");
                }}
                className="googleLogin"
              />
            </GoogleOAuthProvider>

            <button
              className="flex justify-between rounded-full text-gray-700  text-sm md:text-[.95rem] lg:text-[.88rem] xl:text-[1rem] font-dm-sans border bg-white px-6 py-2 lg:py-2.5 2xl:py-[.63rem] 2xl:px-11"
              href="#/"
              onClick={showModel}
            >
              <i className="bi bi-envelope text-[1.2rem] mr-4"></i>{" "}
              <span> Sign in with Email</span>
            </button>
          </div>
          <div className="text-center mt-[2.5rem] 2xl:mt-[3rem]">
            <span className="text-[1rem] 2xl:text-[1.15rem] font-dm-sans">
              No account?{" "}
              <span className="text-green-600 font-bold">Create one</span>
            </span>
          </div>
          <div className="text-center text-gray-500 mt-[3rem] 2xl:mt-[4.3rem]">
            <span className="text-[.85rem] 2xl:text-[.915rem] font-dm-sans">
              Forgot email or trouble signing in?{" "}
              <span className="underline">Get help.</span>
            </span>
          </div>

          <div className="text-center w-[15rem] md:w-[28rem] 2xl:w-[33rem] text-gray-500 mt-[1.5rem] 2xl:mt-[2rem]">
            <div className="text-[.85rem] 2xl:text-[.915rem] font-dm-sans">
              Click “Sign In” to agree to Medium’s{" "}
              <span className="underline">Terms of Service</span> and
              acknowledge that Medium’s{" "}
              <span className="underline">Privacy Policy</span> applies to you.
            </div>
          </div>
        </div>
      </Modal>

    </div>
  );
}
