"use client";

import dynamic from "next/dynamic";
const YouTube = dynamic(() => import("react-youtube"), { ssr: false });

export function YouTubeVideoPlayer({
  videoId,
  onFinishedVideo,
}: {
  videoId: string;
  onFinishedVideo?: () => void;
}) {
  return (
    <YouTube
      videoId={videoId}
      className="w-full h-full"
      opts={{ width: "100%", height: "100%" }}
      onEnd={onFinishedVideo}
    />
  );
}
