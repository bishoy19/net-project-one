import React from "react";
export const metadata = {
  title: "Articals",
  description: "A list of articles",
};
const Articals = async () => {
  let data = await fetch("https://api.vercel.app/blog");
  let posts = await data.json();
  console.log(posts);
  return (
    <div>
      <h1>Articalspage</h1>
    </div>
  );
};

export default Articals;
