"use client";

import Form from "@components/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import React from "react";

const page = () => {
  const dialogue = useRef();
  const { data: session } = useSession();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });
      if (res.ok) {
        router.back();
        dialogue.current.showModal();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  const closeModal = (e) => {
    e.preventDefault();
    dialogue.current.close();
    router.back();
  };

  return (
    <>
      <Form
        type="create"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPrompt}
      />
      {/* <dialog
        className="text-center rounded-xl bg-slate-100 p-4 flex flex-col border"
        id="dialogue"
        ref={dialogue}
      >
        <h1 className=" text-2xl ">✅</h1>
        <p className=" font-bold text-green-600">Creation completed</p>
        <button
          className="ml-auto border bg-blue-600 px-3 py-1 font-semibold mt-4 rounded-xl text-white"
          onClick={closeModal}
        >
          OK
        </button>
      </dialog> */}
    </>
  );
};

export default page;
