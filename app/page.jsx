"use client";
import { Banner } from "@/components/Banner";
import { Gallery } from "@/components/Gallery";
import { Video } from "@/components/Video";

export default function Home() {
  return (
    <>
      <Video />
      <Banner />
      <Gallery />
    </>
  );
}
