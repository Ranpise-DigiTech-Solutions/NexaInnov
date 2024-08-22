import { cn } from "@/lib/utils";

interface props {
  src: string;
  className?: string;
  alt?: string;
}

function VideoPlayer({ src, className, ...props }: props) {
  return (
    <video
      src={src}
      className={cn("rounded-md shadow-lg", className)}
      autoPlay
      muted
      loop
      playsInline
      controls
      {...props}
    >
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoPlayer;
