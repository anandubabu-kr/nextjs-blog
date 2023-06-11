"use client";

import React, { useEffect, useState } from "react";

// import { usePathname, useRouter } from "next/navigation";
import Profile from "@components/Profile";
import Provider from "@components/Provider";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const page = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  const fetchPosts = async () => {
    const res = await fetch(`/api/users/${session?.user.id}/posts`);
    const data = await res.json();
    setPosts(data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  const handleEdit = (post) => {
    console.log("invoked edit", post);
    router.push(`update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure ?");
    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post?._id.toString()}`, {
          method: "DELETE",
        });
        fetchPosts();
      } catch (error) {
        alert("deleted failed !");
      }
    }
  };

  return (
    <Provider>
      <div>
        <Profile
          name={"my name"}
          desc="welcome to your personalized profile page"
          data={posts}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </Provider>
  );
};

export default page;
