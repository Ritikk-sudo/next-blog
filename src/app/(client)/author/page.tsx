import React from "react";
import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";
import { Author } from "../../../utils/interface";
import { client } from "../../../../sanity/lib/client";
import Link from "next/link";

async function getAllTags() {
  const query = `
  *[_type == "author"] {
    name,
    slug,
    _id,
    "postCount": count(*[_type == "post" && references("author", ^._id)])
  }
  `;
  const author = client.fetch(query);
  return author;
}

export const revalidate = 60;

const page = async () => {
  const author: Author[] = await getAllTags();
//   console.log(author, "author");
  return (
    <div>
      <Header title="author" />
      <div>
        {author?.length > 0 &&
          author?.map((author) => (
            <Link key={author?._id} href={`/author/${author.slug.current}`}>
              <div className="mb-2 p-2 text-sm  dark:bg-gray-950 border dark:border-gray-900 hover:text-purple-500">
                <b>Author: </b>{author.name} ({author?.postCount})
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default page;
