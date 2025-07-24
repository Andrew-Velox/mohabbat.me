'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProfileImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function ProfileImage({ src, alt, width, height, className }: ProfileImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="flex-shrink-0 touch-none select-none relative">
      {/* Skeleton Loading Effect */}
      {!imageLoaded && (
        <div className={`${className} bg-gradient-to-r from-white/10 via-white/20 to-white/10 animate-pulse`}>
          <div className="w-full h-full rounded-full bg-gradient-to-br from-white/5 via-transparent to-white/5"></div>
        </div>
      )}
      
      {/* Actual Image */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0 absolute top-0'}`}
        draggable={false}
        unoptimized
        onLoad={() => setImageLoaded(true)}
        priority
      />
    </div>
  );
}
