"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
// useRouter;

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  // console.log(post);
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const [copy, setCopy] = useState("");

  const handleCopy = () => {
    setCopy(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopy(""), 3000);
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={post?.creator?.image}
            alt="User"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className=" font-satoshi font-semibold text-gray-900">
              {post?.creator?.username}
            </h3>
          </div>
        </div>
        <div
          className="copy_btn"
          onClick={() => {
            handleCopy();
          }}
        >
          {copy ? (
            "✅"
          ) : (
            <Image
              src="/assets/copy.png"
              alt="User"
              width={20}
              height={20}
              className="object-contain"
            />
          )}
        </div>
      </div>
      <p className="mt-21 h-24 overflow-hidden truncate/ text-ellipsis">
        {post?.prompt}
      </p>
      <p
        onClick={handleTagClick && handleTagClick(post.tag)}
        className="mt-2 text-blue-900 bg-blue-100 px-1 rounded-md w-fit cursor-pointer hover:underline duration-100"
      >
        {post?.tag}
      </p>

      {session?.user.id === post?.creator._id && pathName === "/profile" && (
        <div className="mt-2 flex justify-end">
          <button
            className="font-inter bg-blue-50 px-2 mt-2 text-green-600 rounded-md"
            onClick={() => handleEdit(post)}
          >
            edit
          </button>
          <button
            className="font-inter bg-red-50 px-2 mt-2 text-red-600 rounded-md"
            onClick={() => handleDelete(post)}
          >
            delete
          </button>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
