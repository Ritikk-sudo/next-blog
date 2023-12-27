import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  tags?: boolean;
}

const Header = ({ title = "", tags = false }: Props) => {
  return (
    <header className="py-14 px-4 mb-12 text-center border-b dark:border-[#5e62f8]">
      <h2 className="uppercase text-2xl mx-auto max-w-2xl font-bold text-[#5e62f8]">
        {title}
      </h2>

      {tags && (
        <div className="text-xs mt-2 hover:text-[#5e62f8]">
          <Link href="/tag">#tags</Link>
        </div>
      )}
    </header>
  );
};

export default Header;