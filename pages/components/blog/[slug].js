// import ParticleComponent from "../Particles";
import { useRouter } from "next/router";
import { Avatar } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import ParticleComponent from '../Particles'
const slugComponent = () => {
  const [blog, setBlog] = useState();
  const router = useRouter(); 
  useEffect(() => {
    if (!router.isReady) return;
    const { slug } = router.query;
    fetch(`http://localhost:3000/api/getBlog?slug=${slug}`)
      .then((area) => {
        return area.json();
      })
      .then((data) => {
        console.log(data);
        setBlog(data);
      });
  }, [router.isReady]);
  return (
    <>
      <div
        className="container"
        style={{
          marginTop: "20vh",
        }}
      >
        <h1>{blog && blog.title}</h1>
        <h3>{blog && blog.author}</h3>
        <Avatar
          src={blog && blog.authorimage}
          className="my-3"
          title="hello"
        ></Avatar>

        <p>{blog && blog.content}</p>
      </div>
      <ParticleComponent />
    </>
  );
};

export default slugComponent;
