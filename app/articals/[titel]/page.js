import React from "react";

const ShawArticalsPage = (props) => {
  console.log(props.titel);
  return (
    <div>
      <h1>Shaw Articals</h1>
      <h2>{props.params.titel}</h2>
    </div>
  );
};

export default ShawArticalsPage;
