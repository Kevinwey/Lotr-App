import Link from "next/link";
import { Fragment } from "react";
import { volumes } from "../../lib/data";
import Image from "next/image";

const volume3 = volumes.find(({ slug }) => slug === "the-return-of-the-king");
export default function TheReturnOfTheKing() {
  return (
    <>
      <h1>{volume3.title}</h1>
      <p>{volume3.description}</p>
      <ul>
        {volume3.books.map((book, index) => {
          return (
            <Fragment key={index}>
              <li>{book.ordinal}</li>
              <li>{book.title}</li>
            </Fragment>
          );
        })}
      </ul>
      <Image
        src="/images/the-return-of-the-king.png"
        alt="Volume3 book cover"
        width={140}
        height={230}
      ></Image>
      <Link href="/volumes">All volumes</Link>
    </>
  );
}
