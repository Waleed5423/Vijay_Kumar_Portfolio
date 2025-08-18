// components/ScrollToTopWrapper.tsx
"use client";

import dynamic from "next/dynamic";

const ScrollToTop = dynamic(() => import("./ScrollToTop"), {
  ssr: false,
});

export default function ScrollToTopWrapper() {
  return <ScrollToTop />;
}
