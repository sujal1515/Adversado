import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
  }, []);

  return (
    <section className="w-full py-24 px-6 lg:px-24">
      <div className="relative w-full rounded-[40px] text-white p-16 md:p-24 text-center shadow-2xl overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="https://www.pexels.com/download/video/9667531/"
        />
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Redefine Digital Excellence with Adversado</h2>
          <p className="text-lg mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">Uncompromising precision and pioneering solutions for a new digital era.</p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 mx-auto hover:bg-slate-100 transition-colors">
            Explore Solutions <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
