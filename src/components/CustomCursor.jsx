import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect if device has touch capability
    const touchCheck = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touchCheck);

    if (touchCheck) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Set initial position and transform origin
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    // quickTo creates highly optimized transform setters
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.4, ease: 'power3' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.4, ease: 'power3' });

    // Track mouse move
    const onMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    // Track when mouse leaves or enters window
    const onMouseLeaveDoc = () => {
      gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.2 });
    };
    const onMouseEnterDoc = () => {
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.2 });
    };

    const isHovering = { current: false };

    // Hover scale up / scale down using event delegation
    const onMouseOver = (e) => {
      const target = e.target.closest('a, button, [role="button"], .cursor-hover');
      if (target) {
        isHovering.current = true;
        gsap.to(cursor, {
          scale: 6, // scales from 12px (w-3) to 72px
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      }
    };

    const onMouseOut = (e) => {
      const target = e.target.closest('a, button, [role="button"], .cursor-hover');
      if (target) {
        // Only scale down if mouse isn't immediately entering another interactive child/element
        if (!e.relatedTarget || !e.relatedTarget.closest('a, button, [role="button"], .cursor-hover')) {
          isHovering.current = false;
          gsap.to(cursor, {
            scale: 1,
            duration: 0.5,
            ease: 'power2.out',
            overwrite: 'auto'
          });
        }
      }
    };

    // Click Reactivity
    const onMouseDown = () => {
      gsap.to(cursor, {
        scale: isHovering.current ? 3.5 : 0.5,
        duration: 0.15,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    };

    const onMouseUp = () => {
      gsap.to(cursor, {
        scale: isHovering.current ? 6 : 1,
        duration: 0.25,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeaveDoc);
    document.addEventListener('mouseenter', onMouseEnterDoc);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseout', onMouseOut);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeaveDoc);
      document.removeEventListener('mouseenter', onMouseEnterDoc);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', onMouseOut);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className="custom-cursor fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
      style={{ transform: 'translate3d(0,0,0)' }}
    />
  );
};

export default CustomCursor;
