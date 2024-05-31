"use client";
import { useEffect, useState } from "react";

export const Video = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  });
  return (
    <div className="pt-4 flex justify-center">
      <iframe
        width="1280"
        height="720"
        src="https://www.youtube.com/embed/Lgh4POoUa2E?loop=1&autoplay=1&mute=1&controls=0"
      ></iframe>
    </div>
  );
};
