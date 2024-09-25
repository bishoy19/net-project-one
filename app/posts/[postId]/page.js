import React from "react";

const postDitels = async ({ params }) => {
  const postId = params.postId;
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const post = await response.json();
  return (
    <div>
      <h1>postDitels</h1>
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
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default postDitels;
