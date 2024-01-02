"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import ScrollAnim from "../components/ScrollAnim";
import { urlForImage } from "../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { VT323 } from "next/font/google";
import Image from "next/image";
import { FidgetSpinner } from "react-loader-spinner";

const dateFont = VT323({ weight: "400", subsets: ["latin"] });

function BlogPost({ post }: any) {
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
        <div className="flex mt-32 justify-center items-center">
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
        <div>
          <ScrollAnim />
          <Header title={post?.title} />
          <div className="text-center">
            <span className={`${dateFont?.className} text-[#ce9251]`}>
              {new Date(post?.publishedAt).toDateString()}
            </span>
            <div className="mt-5">
              {post?.tags?.map((tag: any) => (
                <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
                  <span className="mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900">
                    #{tag.name}
                  </span>
                </Link>
              ))}
              <div className="my-5">
                {post?.authors?.map((author: any) => (
                  <Link
                    key={author?._id}
                    href={`/author/${author.slug.current}`}
                  >
                    <span className="mr-2 p-1 rounded-sm text-sm dark:bg-gray-950 border dark:border-gray-900">
                      <b>Author: </b>
                      {author.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className={richTextStyles}>
              <PortableText
                value={post?.body}
                components={myPortableTextComponents}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image
        // @ts-ignore
        src={urlForImage(value).url()}
        alt="Post"
        width={700}
        height={700}
      />
    ),
  },
};

const richTextStyles = `
  mt-14
  md:text-justify
  text-left
  max-w-2xl
  text-sm
  md:text-lg
  m-auto
  mr-9
  md:mx-auto
  prose-headings:my-5
  prose-heading:text-2xl
  prose-p:mb-11
  prose-p:mt-11
  prose-img:mb-11
  prose-p:leading-7
  prose-li:list-disc
  prose-li:leading-7
  prose-li:ml-4
  `;

export default BlogPost;
