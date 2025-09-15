import React, { useEffect, useRef, useState } from "react";

function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPeekDisabled, setIsPeekDisabled] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Segments with start, end, and button positions (UNCHANGED)
  const segments = [
    { start: 0, end: 5, buttonPos: { top: 422, left: 230 } },
    { start: 5, end: 8, buttonPos: { top: 245, left: 268 } },
    { start: 8, end: 11, buttonPos: { top: 233, left: 260 } },
    { start: 11, end: 14, buttonPos: { top: 261, left: 177 } },
    { start: 14, end: 17, buttonPos: { top: 470, left: 77 } },
    { start: 17, end: 20, buttonPos: { top: 419, left: 281 } },
    { start: 20, end: 22, buttonPos: { top: 379, left: 259 } },
    { start: 22, end: 25, buttonPos: { top: 277, left: 299 } },
    { start: 25, end: 27, buttonPos: { top: 475, left: 51 } },
    { start: 27, end: 29, buttonPos: { top: 251, left: 253 } },
    { start: 29, end: 31, buttonPos: { top: 262, left: 302 } },
    { start: 31, end: 33, buttonPos: { top: 475, left: 659 } },
    { start: 33, end: 36, buttonPos: { top: 393, left: 265 } },
    { start: 36, end: 38, buttonPos: { top: 462, left: 657 } },
    { start: 38, end: 41, buttonPos: { top: 462, left: 657 } },
    { start: 41, end: 43, buttonPos: { top: 462, left: 657 } },
    { start: 43, end: 45, buttonPos: { top: 380, left: 262 } },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Track active forward listener + reverse RAF so we can cancel cleanly
  const activeHandler = useRef<(() => void) | null>(null);
  const reverseRAF = useRef<number | null>(null);

  const cancelAll = () => {
    const video = videoRef.current;
    if (!video) return;

    // cancel forward listener
    if (activeHandler.current) {
      video.removeEventListener("timeupdate", activeHandler.current);
      activeHandler.current = null;
    }
    // cancel reverse loop
    if (reverseRAF.current !== null) {
      cancelAnimationFrame(reverseRAF.current);
      reverseRAF.current = null;
    }
  };

  useEffect(() => {
    // Cleanup on unmount
    return () => cancelAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // -------- Forward (UNCHANGED behavior) --------
  const playTo = (segmentIndex: number) => {
    const video = videoRef.current;
    if (!video) return;

    const { start, end } = segments[segmentIndex];
    setCurrentIndex(segmentIndex);

    cancelAll();

    video.playbackRate = 2;
    video.currentTime = start;
    video.play();

    const checkTime = () => {
      if (video.currentTime >= end) {
        video.pause();
        video.currentTime = end;
        if (activeHandler.current) {
          video.removeEventListener("timeupdate", activeHandler.current);
          activeHandler.current = null;
        }
      }
    };

    activeHandler.current = checkTime;
    video.addEventListener("timeupdate", checkTime);
  };

  // -------- Reverse current segment (smooth, real-time) --------
  const playReverse = (segmentIndex: number, onDone?: () => void) => {
    const video = videoRef.current;
    if (!video) return;

    const { start, end } = segments[segmentIndex];

    setCurrentIndex(segmentIndex);
    cancelAll();

    video.pause();
    video.currentTime = end;

    let last = performance.now();

    const step = (now: number) => {
      const dt = (now - last) / 1000; // time since last frame
      last = now;

      const speed = 2; // 🔥 reverse speed multiplier
      const nextTime = video.currentTime - dt * speed;

      if (nextTime <= start + 0.0005) {
        video.currentTime = start;
        reverseRAF.current = null;
        if (onDone) onDone();
        return;
      }

      video.currentTime = nextTime;
      reverseRAF.current = requestAnimationFrame(step);
    };

    reverseRAF.current = requestAnimationFrame(step);
  };


  // -------- Controls --------
  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < segments.length) {
      playTo(nextIndex);
    } else {
      const video = videoRef.current;
      if (video) {
        cancelAll();
        video.pause();
        video.currentTime = 0;
      }
      setCurrentIndex(0);
      setIsPeekDisabled(false);
      setIsVideoLoaded(true);
    }
  };

  const handlePeek = () => {
    setTimeout(() => {
      setIsVideoLoaded(true);
    }, 1100);
    playTo(0);
    setIsPeekDisabled(true);
    setIsVideoLoaded(false);
  };

  const handlePrev = () => {
    // Reverse the CURRENT segment, not the previous one.
    // After reverse completes, move the UI focus to the previous segment (no auto-play).
    if (currentIndex > 0) {
      const idx = currentIndex;
      playReverse(idx, () => {
        // After reversing segment idx to its start, shift buttons to previous segment
        setCurrentIndex(idx - 1);
        // Do NOT alter currentTime further; leave it at start of segment idx.
        // (This satisfies: reverse current segment; set previous values for forward video but don't play it.)
      });
    } else {
      // Already at the first segment; just reset UI if you prefer
      setCurrentIndex(0);
      setIsPeekDisabled(false);
      const video = videoRef.current;
      if (video) {
        cancelAll();
        video.pause();
        video.currentTime = segments[0].start; // stay at the very start
      }
    }
  };

  return (
    <section className="video-animation !z-[50] -mt-[160px] pb-20">
      <div className="container">
        <div className="justify-center max-w-[1000px] mx-auto flex p-3 bg-black rounded-2xl relative">
          <video
            ref={videoRef}
            className="h-full w-full rounded-2xl"
            muted
            playsInline
          >
            <source src="assets/video-new-hd.mp4" type="video/mp4" />
          </video>

          {/* Peek button */}
          <button
            disabled={isPeekDisabled}
            onClick={handlePeek}
            className="disabled:pointer-events-none opacity-0 cursor-pointer top-[325px] absolute h-10 w-[127px] flex items-center justify-center font-light text-base/4 text-white bg-[#000] rounded-lg"
          >
            Take a Peek
          </button>

          {/* Navigation Controls */}
          <div
            className="opacity-0 absolute flex gap-4"
            style={{
              top: segments[currentIndex].buttonPos.top,
              left: segments[currentIndex].buttonPos.left,
            }}
          >
            <button
              onClick={handlePrev}
              className={`h-[38px] cursor-pointer ${currentIndex > 1 && currentIndex !== 5 && currentIndex !== 6
                ? "w-[115px]"
                : "w-[129px]"
                } flex items-center justify-center font-light text-base/4 text-white bg-[#3CB097] rounded-lg`}
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className={`h-[38px] cursor-pointer ${currentIndex > 1 && currentIndex !== 5 && currentIndex !== 6
                ? "w-[115px]"
                : "w-[129px]"
                } flex items-center justify-center font-light text-base/4 text-white bg-[#3CB097] rounded-lg`}
            >
              {currentIndex === segments.length - 1 ? "Restart" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Video;
