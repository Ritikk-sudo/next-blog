import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <div className="w-[30%] h-[30%]">
      <Image src="/logo.png" width={500} height={500} alt="logo" />
    </div>
  );
}

export default Logo;
