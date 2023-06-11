"use client";

import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };
  const handleTagClick = (e) => {};

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/prompt");
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder=" "
          value={searchText}
          onChange={handleSearchText}
          className="search_input peer"
          required
        />
      </form>

      <PromptCardList data={posts} handleTagClick={handleTagClick} />
    </section>
  );
};

export default Feed;

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post, i) => (
        <PromptCard
          key={post?.id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};
