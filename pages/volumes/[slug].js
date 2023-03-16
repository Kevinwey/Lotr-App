import { useRouter } from "next/router";
import Link from "next/link";
import { Fragment } from "react";
import { volumes } from "../../lib/data";
import Image from "next/image";

export default function LotrMovies() {
  const router = useRouter();

  const { slug } = router.query;

  const volume = volumes.find((volume) => volume.slug === slug);
  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];
  if (!volume) {
    return null;
  }

  const { title, description, cover, books } = volume;

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => {
          return (
            <Fragment key={title}>
              <li>{ordinal}</li>
              <li>{title}</li>
            </Fragment>
          );
        })}
      </ul>
      <Image src={cover} alt={`Volume ${title}`} width={140} height={230} />
      {volumeIndex > 0 ? (
        <button>
          <Link href={`/volumes/${previousVolume.slug}`}>Previous Volume</Link>
        </button>
      ) : null}
      {volumeIndex < 2 ? (
        <button>
          <Link href={`/volumes/${nextVolume.slug}`}>Next Volume</Link>
        </button>
      ) : null}
    </>
  );
}
