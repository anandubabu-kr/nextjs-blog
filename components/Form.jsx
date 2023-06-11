"use client";

import Link from "next/link";
import React from "react";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex items-center flex-col">
      <h1 className="head_text text-left blue_gradient">{type} Post</h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompt with world.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label htmlFor="prompt">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>
          <textarea
            name="prompt"
            id="prompt"
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Enter your post"
            required
            className="form_textarea"
          />
        </label>
        <label htmlFor="tag">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag
            <span className="font-normal px-3 text-xs"> #products</span>
          </span>
          <input
            name="tag"
            id="tag"
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="Enter your tag"
            required
            className="form_input"
          />
        </label>
        <div className="flex-end mx-2 gap-4">
          <Link href={"/"} className=" text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            className={`px-5 py-1 text-sm rounded-full text-white font-bold ${
              submitting ? "bg-blue-600" : "bg-primary-orange"
            } `}
            type="submit"
            disabled={submitting}
          >
            {submitting ? "in progress..." : type}
          </button>
        </div>
      </form>
      {/* <Link/> */}
    </section>
  );
};

export default Form;
