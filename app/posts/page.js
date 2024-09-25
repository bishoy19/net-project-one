import Link from "next/link";
import React from "react";

const Posts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120,
    },
  });
  const posts = await response.json();
  const postsJsx = posts.map((post) => {
    return (
      <Link
        style={{
          width: "70%",
        }}
        href={`/posts/${post.id}`}
      >
        <div
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "10px",
            background: "black",
            color: "white",
            marginTop: "10px",
          }}
        >
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      </Link>
    );
  });

  return (
    <div>
      <h1>Posts page </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {postsJsx}
      </div>
    </div>
  );
};

export default Posts;
