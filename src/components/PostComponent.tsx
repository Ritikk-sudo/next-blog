"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FidgetSpinner } from "react-loader-spinner";

import { Lilita_One, VT323 } from "next/font/google";
import { Post } from "../utils/interface";

interface Props {
  post: Post;
}

const font = Lilita_One({ weight: "400", subsets: ["latin"] });
const dateFont = VT323({ weight: "400", subsets: ["latin"] });

const PostComponent = ({ post }: Props) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center my-11 items-center">
          <FidgetSpinner
            visible={true}
            height="80"
            width="80"
            ariaLabel="fidget-spinner-loading"
            wrapperStyle={{}}
            wrapperClass="fidget-spinner-wrapper"
          />
        </div>
      ) : (
        <div className={cardStyle}>
          <Link href={`/posts/${post?.slug?.current}`}>
            <h2
              className={`${font.className} text-2xl text-[#ce9251] dark:text-slate-300`}
            >
              {post?.title}
            </h2>
            <p className={`${dateFont.className} my-2 `}>
              {new Date(post?.publishedAt).toDateString()}
            </p>
            <p className="dark:text-gray-400 mb-4 line-clamp-2">
              {post?.excerpt}
            </p>
          </Link>

          {/* TAGS */}

          <div>
            {post?.tags?.map((tag) => (
              <span
                key={tag?._id}
                className="mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900"
              >
                #{tag?.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostComponent;

const cardStyle = `
mb-8
p-4
border
border-gray-900
rounded-md
shadow-sm
shadow-purple-950
hover:shadow-md
hover:bg-[#5e62f8]
hover:text-white
hover:dark:bg-gray-950
`;
