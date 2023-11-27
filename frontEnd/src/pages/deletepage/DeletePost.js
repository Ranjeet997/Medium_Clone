import React from "react";
import { Modal } from "antd";
import { useDispatch } from "react-redux";
import { fetchIndividualPost } from "../../store/fetchIndividualPost";

export default function DeletePost({ isOpen, handleCancel, postSlug }) {
  const dispatch = useDispatch();

  const deletePost = async () => {
    console.log(`Received post_slug: ${postSlug}`);
    const res = await fetch(
      `http://localhost:8080/api/blog/deleteblog/${postSlug}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();
    if (data.status === 409 || !data) {
      window.alert("Invalid Registation");
      console.log("Invalid Registation");
    } else if (data) {
      console.log(data);
      window.alert(data);
      const userData = JSON.parse(localStorage.getItem("userinfo"));
      const user_uid = userData.user_uid;
      dispatch(fetchIndividualPost(user_uid));
      handleCancel();
    }
  };
  return (
    <>
      <Modal
        visible={isOpen}
        centered
        onCancel={handleCancel}
        footer={null}
        width={900}
      >
        <div className="flex justify-center items-center h-[70vh]">
          <div className="text-center font-dm-sans tracking-tight mx-[9rem]">
            <p className="2xl:text-4xl text-stone-800 font-bold">
              Delete story
            </p>
            <p className="2xl:text-[.98rem] text-stone-500 leading-6 mt-3.5 mb-10">
              Deletion is not reversible, and the story will be completely
              deleted. If you do not want to delete, you can unlist the story.
            </p>
            <button
              className="text-[.9rem] rounded-full border border-stone-600 px-4 py-1.5 font-medium mr-5"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="text-[.9rem] rounded-full bg-[#C94A4A] text-white px-4 py-1.5 font-medium"
              onClick={deletePost}
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
