import React from "react";
import { Post } from "../../../../utils/interface";
import { client } from "../../../../../sanity/lib/client";
import { VT323 } from "next/font/google";
import { notFound } from "next/navigation";
import BlogPost from "../../../../components/BlogPost";



const dateFont = VT323({ weight: "400", subsets: ["latin"] });

interface Params {
  params: {
    slug: string;
  };
}

async function getPost(slug: string) {
  const query = `
  *[_type == "post" && slug.current == "${slug}"][0] {
    title,
    slug,
    publishedAt,
    excerpt,
    _id,
    body,
    tags[]-> {
      _id,
      slug,
      name
    },
    authors[]-> {
      _id,
      slug,
      name,
    },
  }
  `;

  const post = await client.fetch(query);
  return post;
}

export const revalidate = 60;

//Home()
const Page = async ({ params }: Params) => {
  console.log(params, "parmas");
 
  const post: Post = await getPost(params?.slug);
  console.log(post, "post");


  if (!post) {
    notFound();
  }

  return (
       <div>
        {/* @ts-ignore */}
       <BlogPost post={post}  />
     
       </div>
      
  );
};

export default Page;

