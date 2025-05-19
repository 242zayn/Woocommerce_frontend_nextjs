"use client";
import React from "react";
import { Button } from "./ui/button";

const DownloadButton = ({ fileLink }: { fileLink: string }) => {
  const handleDownload = () => {
    window.open(fileLink, "_blank");
  };

  return (
    <Button
      onClick={handleDownload}
      className="mt-10 h-10 rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-primary-600 active:bg-primary-700 bg-red-600 "
    >
      Download the book
    </Button>
  );
};

export default DownloadButton;
