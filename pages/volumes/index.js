import Link from "next/link";
import { introduction } from "../../lib/data";

export default function Volumes() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            the-fellowship-of-the-ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">the-two-towers</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            the-return-of-the-king
          </Link>
        </li>
      </ul>

      <p>{introduction}</p>
    </div>
  );
}
