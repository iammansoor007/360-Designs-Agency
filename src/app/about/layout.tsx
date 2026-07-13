import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Block access to the About Us page
  notFound();

  return <>{children}</>;
}
