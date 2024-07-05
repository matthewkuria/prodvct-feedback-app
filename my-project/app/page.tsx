import Image from "next/image";
import { Button } from "./components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-col columns-1 md:columns-2 justify-center items-center  p-5 md:p-24  gap-4 ">
     <div className="flex-col w-full md:pt-20 ">
        <h1 className="text-xl md:text-4xl font-bold text-purple-800 p-5">Product Feedback App</h1>
        <p className="text-slate-500">
          Welcome to FeedbackHub, your go-to platform for capturing customer insights effortlessly. Our intuitive app empowers businesses to gather, analyze, and act on real-time feedback, ensuring you stay ahead of customer needs and trends. Whether you’re a small startup or an established enterprise, FeedbackHub provides the tools to enhance customer satisfaction, drive innovation, and foster loyalty. Join us today and transform your feedback into growth.
        </p>
        <div className="mt-6">
          <Link href="/login"
          className="text-white bg-purple-600 rounded-md py-2 px-4 hover:bg-purple-400 hover:border">
          Login
        </Link>
        </div>
      </div>
      <div className="flex-col">
        <Image
          src="/yourFeedback-desktop.png"
          width={500}
          height={450}
          alt="The product feed back app image for the desktop"
          className="hidden md:block"
        />
        <Image
          src="/yourFeedback-mobile.png"
          width={450}
          height={450}
          alt="The product feed back app image for the mobile"
          className="block md:hidden"
        />
      </div>
    </main>
  );
}
