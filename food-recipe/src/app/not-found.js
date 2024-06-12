import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center",
      alignItems: "center", height: "100vh" }}>
      <h1 style={{ fontWeight: "bold", color: "054A5A", fontSize: "1.8rem" }}>This page can not be found.</h1>
      <Link href={"/"}>
        <h3 style={{ fontWeight: "bold", color: "#0B697E", fontSize: "1.2rem" }}>
          Go Back To Home .
        </h3>
      </Link>
    </div>
  );
}