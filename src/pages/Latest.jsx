import PostCard from "../components/PostCard";
import { useState, useEffect } from "react";
import NavS from "../components/NavS";

export default function Latest() {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  useEffect(() => {
    fetch("http://localhost:8080/post")
      .then((response) => response.json())
      .then((response) => setPosts(response.data))
      .catch((error) => {
        console.error("Error en:", error);
      });
  }, []);
  console.log(posts);
  return (
    <>
      <header className="relative">
        <NavS />
      </header>
      <main className="flex flex-col items-center mt-5">
        {posts
          .filter((post) => post.date)
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((post, index) => (
            <PostCard key={`index${index}`} post={post} />
          ))}
      </main>
    </>
  );
}
