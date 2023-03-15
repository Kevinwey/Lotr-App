import Link from "next/link";
import { Fragment } from "react";
import { volumes } from "../../lib/data";
import Image from "next/image";

const volume1 = volumes.find(
  ({ slug }) => slug === "the-fellowship-of-the-ring"
);
export default function TheFellowshipTheRing() {
  return (
    <>
      <h1>{volume1.title}</h1>
      <p>{volume1.description}</p>
      <ul>
        {volume1.books.map((book, index) => {
          return (
            <Fragment key={index}>
              <li>{book.ordinal}</li>
              <li>{book.title}</li>
            </Fragment>
          );
        })}
      </ul>
      <Image
        src="/images/the-fellowship-of-the-ring.png"
        alt="Volume1 book cover"
        width={140}
        height={230}
      ></Image>
      <Link href="/volumes">All volumes</Link>
    </>
  );
}
