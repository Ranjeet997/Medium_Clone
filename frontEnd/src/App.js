import WritePage from "./components/write/WritePage";
import LandingPage from "./components/landing/Landing_page";
import Member from "./components/member/Member";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import OurStory from "./components/our_story/Our_story";
import Edit from "./components/write/write_edit_comp/Edit";
import Nav from "./components/nav/Nav";
import SignIn from "./components/sign_up/Sign_in";
import { useState, useEffect, createContext } from "react";
import WriterNavbar from "./components/nav/WriterNavbar";
import OurStoryNav from "./components/nav/OurStoryNav";
import MemberNav from "./components/nav/MemberNav";
import SignUpNav from "./components/nav/SignInNav";
import { useDispatch } from "react-redux";
import { fetchAllPost } from "./store/fetchBlogSlice";
import UpdatePost from "./components/write/updatepost/UpdatePost";
import StatsHeader from "./components/nav/StatsHeader";
import Profile from "./models/Profile";
import Library from "./models/Libraray";
import Stories from "./models/Stories";
import Recommendation from "./models/Recommendation";
import Stats from "./models/Stats";
import PostCard from "./pages/readsinglepost/PostCard";
import Setting from "./models/Setting";

const RootContext = createContext();

function App() {
  const dispatch = useDispatch();

  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignOut, setIsSignOut] = useState();

  // console.log("this is absolute location", location.pathname);

  useEffect(() => {
    dispatch(fetchAllPost());
  });

  useEffect(() => {
    async function handleStorageChange() {
      // console.log("function call inside useEffect");
      const user = await JSON.parse(localStorage.getItem("userinfo"));
      // console.log("this is licalstorage data :", user);
      if (!user) {
        setIsLoggedIn(false);
        // navigate("/write")
      } else {
        setIsLoggedIn(true);
      }
    }
    handleStorageChange();
    window.addEventListener("localStorage", handleStorageChange);
  }, [isSignOut]);

  return (
    <div>
      <RootContext.Provider value={{ setIsSignOut, setIsLoggedIn }}>
        {location.pathname === "/" && !isLoggedIn ? (
          <Nav />
        ) : location.pathname === "/ourstory" && !isLoggedIn ? (
          <OurStoryNav />
        ) : location.pathname === "/membership" && !isLoggedIn ? (
          <MemberNav />
        ) : location.pathname === "/creators" && !isLoggedIn ? (
          <SignUpNav />
        ) : location.pathname === "/" && isLoggedIn ? (
          <WriterNavbar />
        ) : location.pathname === "/profile" && isLoggedIn ? (
          <WriterNavbar />
        ) : location.pathname === "/library" && isLoggedIn ? (
          <WriterNavbar />
        ) : location.pathname === "/setting" && isLoggedIn ? (
          <WriterNavbar />
        ) : location.pathname === "/recommendation" && isLoggedIn ? (
          <WriterNavbar />
        ) : location.pathname === "/stories" && isLoggedIn ? (
          <WriterNavbar />
        ) : location.pathname === "/new-story" &&
          isLoggedIn ? null : location.pathname === "/stats" && isLoggedIn ? (
          <StatsHeader />
        ) : (
          ""
        )}

        <Routes>
          <Route
            path="/"
            element={
              !isLoggedIn ? (
                <>
                 <LandingPage />
                </>
              ) : (
                <>
                  <WritePage />
                </>
              )
            }
          />
          <Route path="ourstory" element={<OurStory />} />
          <Route path="membership" element={<Member />} />
          <Route path="creators" element={<SignIn />} />
          <Route
            path="new-story/*"
            element={!isLoggedIn ? <Navigate to="/" /> : <Edit />}
          />
          <Route
            path="stories/update-story/:post_uid"
            element={!isLoggedIn ? <Navigate to="/" /> : <UpdatePost />}
          />
          <Route
            path="new-story/post/:post_slug"
            element={!isLoggedIn ? <Navigate to="/" /> : <PostCard />}
          />

          <Route
            path="profile/*"
            element={!isLoggedIn ? <Navigate to="/" /> : <Profile />}
          />
          <Route
            path="library"
            element={!isLoggedIn ? <Navigate to="/" /> : <Library />}
          />
          <Route
            path="stories/*"
            element={!isLoggedIn ? <Navigate to="/" /> : <Stories />}
          />
          <Route
            path="setting"
            element={!isLoggedIn ? <Navigate to="/" /> : <Setting />}
          />
          <Route
            path="recommendation"
            element={!isLoggedIn ? <Navigate to="/" /> : <Recommendation />}
          />
          <Route
            path="stats"
            element={!isLoggedIn ? <Navigate to="/" /> : <Stats />}
          />
          <Route
            path="profile/post/:post_slug"
            element={!isLoggedIn ? <Navigate to="/" /> : <PostCard />}
          />
          <Route
            path="stories/post/:post_slug"
            element={!isLoggedIn ? <Navigate to="/" /> : <PostCard />}
          />
          <Route path="/*" element={<Navigate to="/"/>}/>
        </Routes>
      </RootContext.Provider>
    </div>
  );
}

export default App;
export { RootContext };
