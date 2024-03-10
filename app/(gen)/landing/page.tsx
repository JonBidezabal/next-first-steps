import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'landing',
 description: 'Landing Title',
 keywords: ["landing","lalala"]
};

export default function LandingPage() {
  return (
    <div>
      <h1>Hello Page</h1>
    </div>
  );
}