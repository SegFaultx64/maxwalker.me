'use client';

import Script from 'next/script';

interface NetDeckEmbedProps {
  game: string;
}

export default function NetDeckEmbed({ game }: NetDeckEmbedProps) {
  return (
    <Script
      src="https://app.netdeck.gg/embed.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window !== 'undefined' && (window as unknown as { NetDeck?: { init: (config: { game: string }) => void } }).NetDeck) {
          (window as unknown as { NetDeck: { init: (config: { game: string }) => void } }).NetDeck.init({ game });
        }
      }}
    />
  );
}
