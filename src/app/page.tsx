"use client"
import { useRouter } from "next/navigation";

export default function Home() {
const navi = useRouter();
navi.push("/login");
  return <div>
home
  </div>;
}
