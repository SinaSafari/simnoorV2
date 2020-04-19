import Link from "next/link";

export default function () {
  return (
    <>
      <h1>404, Page Not Found</h1>
      <Link href="/">
        <a>Back to home page</a>
      </Link>
    </>
  );
}
