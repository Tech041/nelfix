import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center mt-16">
      <Image className="h-52" src="loader.svg" alt="loading..." width={200} height={200} />
    </div>
  );
};

export default loading;
