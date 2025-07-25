'use client';

import { useState, useRef, useEffect } from 'react';

interface ProfileVideoProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ProfileImage({ src, alt, className }: ProfileVideoProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Reset states when src changes
      setVideoLoaded(false);
      setHasError(false);
      
      // Force reload the video
      video.load();
    }
  }, [src]);

  const handleLoadedData = () => {
    setVideoLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    setVideoLoaded(false);
    setHasError(true);
    console.error('Video failed to load:', src);
  };

  return (
    <div className="flex-shrink-0 touch-none select-none relative">
      {/* Skeleton Loading Effect */}
      {(!videoLoaded && !hasError) && (
        <div className={`${className} bg-gradient-to-r from-white/10 via-white/20 to-white/10 animate-pulse`}>
          <div className="w-full h-full rounded-full bg-gradient-to-br from-white/5 via-transparent to-white/5 flex items-center justify-center">
            {/* <div className="text-white/40 text-sm">Loading...</div> */}
          </div>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className={`${className} bg-gradient-to-r from-red-500/20 via-red-400/30 to-red-500/20 flex items-center justify-center`}>
          <div className="text-white/60 text-sm">Video Error</div>
        </div>
      )}
      
      {/* Actual Video */}
      <video
        ref={videoRef}
        src={src}
        className={`${className} transition-opacity duration-300 ${videoLoaded ? 'opacity-100' : 'opacity-0 absolute top-0'}`}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        onLoadedData={handleLoadedData}
        onError={handleError}
        aria-label={alt}
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
}
