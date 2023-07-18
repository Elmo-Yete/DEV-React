import PostCard from "../components/PostCard";
import { useState, useEffect } from "react";
import NavS from "../components/NavS";

export default function Relevant() {
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
  return (
    <>
      <header className="relative">
        <NavS />
      </header>
      <main className="flex flex-col items-center">
        {posts
          .sort((a, b) => a.numero - b.numero)
          .map((post, index) => (
            <PostCard key={`index${index}`} post={post} />
          ))}
      </main>
    </>
  );
}
