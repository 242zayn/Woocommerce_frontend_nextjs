"use client";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    console.log(window.location.origin);
  });
  return <div>Page</div>;
};

export default Page;
