import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - TIL by ut42tech",
  description: "Today I Learned by ut42tech",
};

export default function Home() {
  return (
    <div className="container flex items-center justify-center min-h-screen flex-col">
      <h1 className="text-4xl font-bold">Welcome to TIL by ut42tech!</h1>
      <p className="text-lg">Today I Learned by ut42tech</p>
      <p className="text-base">Sharing knowledge and insights</p>
    </div>
  );
}
