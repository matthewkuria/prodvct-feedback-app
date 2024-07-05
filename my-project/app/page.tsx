import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-col md:flex lg:flex p-24">
     <div className="flex-col w-full md:w-1/2">
        <h1 className="text-3xl font-bold">Product Feedback App</h1>
        <p className="">
          Welcome to FeedbackHub, your go-to platform for capturing customer insights effortlessly. Our intuitive app empowers businesses to gather, analyze, and act on real-time feedback, ensuring you stay ahead of customer needs and trends. Whether you’re a small startup or an established enterprise, FeedbackHub provides the tools to enhance customer satisfaction, drive innovation, and foster loyalty. Join us today and transform your feedback into growth.
        </p>
      </div>
      <div className="flex-col">
        <Image
          src="/yourFeedback.png"
          width={300}
          height={450}
          alt="The product feed back app image for the desktop"
        />
      </div>
    </main>
  );
}
