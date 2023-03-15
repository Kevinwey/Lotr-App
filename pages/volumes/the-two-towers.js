import Link from "next/link";
import { Fragment } from "react";
import { volumes } from "../../lib/data";
import Image from "next/image";

const volume2 = volumes.find(({ slug }) => slug === "the-two-towers");
export default function TheTwoTowers() {
  return (
    <>
      <h1>{volume2.title}</h1>
      <p>{volume2.description}</p>
      <ul>
        {volume2.books.map((book, index) => {
          return (
            <Fragment key={index}>
              <li>{book.ordinal}</li>
              <li>{book.title}</li>
            </Fragment>
          );
        })}
      </ul>
      <Image
        src="/images/the-two-towers.png"
        alt="Volume2 book cover"
        width={140}
        height={230}
      ></Image>
      <Link href="/volumes">All volumes</Link>
    </>
  );
}
