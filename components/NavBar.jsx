import Link from "next/link";

export function NavBar() {
  return (
    <nav className="flex justify-evenly items-center bg-[#7e7e7e] py-3 h-16 text-white">
      <Link href={"#"}>Home</Link>
      <Link href={"#"}>Feature</Link>
      <Link href={"#"}>Downloads</Link>
      <Link href={"#"}>Career</Link>
      <Link href={"#"}>Pricing</Link>
    </nav>
  );
}
