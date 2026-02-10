"use client";
import { useEffect, useState, useRef } from 'react';

// EncryptedText: reveals `text` by scrambling characters then progressively revealing them.
export default function EncryptedText({ text = '', speed = 30, className = '' }) {
  const [display, setDisplay] = useState('');
  const progress = useRef(0);
  const raf = useRef(null);

  useEffect(() => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!<>-_\\/[]{}—=+*^?#';
    const target = text.split('');
    progress.current = 0;

    let frameCount = 0;

    function step() {
      frameCount++;
      const reveal = Math.min(target.length, Math.floor(frameCount / 2));
      let out = '';
      for (let i = 0; i < target.length; i++) {
        if (i < reveal) {
          out += target[i];
        } else {
          out += alphabet[Math.floor(Math.random() * alphabet.length)];
        }
      }

      setDisplay(out);

      if (reveal < target.length) {
        raf.current = setTimeout(step, speed);
      }
    }

    step();

    return () => {
      if (raf.current) clearTimeout(raf.current);
    };
  }, [text, speed]);

  return (
    <h2 className={className} aria-label={text}>
      <span style={{ display: 'inline-block', willChange: 'contents' }}>{display}</span>
    </h2>
  );
}
