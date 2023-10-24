"use client";
import Image from "next/image";
import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaSun,
  FaMoon,
} from "react-icons/fa";

export default function HomePage() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={isDark ? "dark" : ""}>
      <main className="dark:text-Fm-Very-Pale-Blue ml-auto w-[375px] dark:bg-black">
        <header className=" relative flex items-center justify-center px-6 py-7">
          <div className="absolute flex items-center justify-center ">
            <input
              type="checkbox"
              id="discount"
              onClick={() => setIsDark(!isDark)}
              className="hover:bg-Fm-Light-Pink checked:bg-Fm-Light-Pink peer h-6 w-11 cursor-pointer appearance-none rounded-full bg-[hsl(223,_50%,_87%)] checked:border-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
            />
            <span className="rounded-fulltransition-all pointer-events-none absolute left-1 top-1 block h-4 w-4 duration-200 peer-checked:left-6">
              {!isDark ? (
                <FaSun className="fill-Fm-Very-Pale-Blue" />
              ) : (
                <FaMoon />
              )}
            </span>
          </div>
          <Image
            src={!isDark ? "/images/logo.svg" : "/images/logoWhite.svg"}
            alt={"logo"}
            width="240"
            height="39"
            className="w-24"
          />
          <button className="text-Fm-Pink ring-Fm-Pink dark:text-Fm-Very-Pale-Blue ml-auto h-6 w-20 rounded-full text-[0.63rem] ring-1">
            Try It Free
          </button>
        </header>
        <article className="mt-[90px] flex flex-col items-center justify-center gap-7 tracking-tight">
          <h1 className="text-Fm-Very-Dark-Cyan dark:text-Fm-Very-Pale-Blue mx-5 text-center font-mono text-2xl capitalize">
            build the community{" "}
            <span className="block">your fans will love</span>
          </h1>
          <p className="text-Fm-Very-Dark-Cyan dark:text-Fm-Very-Pale-Blue mx-10 text-center text-sm font-semibold">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="bg-Fm-Pink text-Fm-Very-Pale-Blue mt-5 h-10 w-[200px] rounded-full font-mono text-xs capitalize">
            get started for free
          </button>
        </article>
        <article className="mx-auto mt-[105px]">
          <Image
            src={"/images/screen-mockups.svg"}
            alt="screen"
            width="1035"
            height="739"
            className="mx-auto max-w-[300px]"
          />
          <div className="dark:text-Fm-Very-Pale-Blue mx-auto mt-[120px] w-40 space-y-4 text-center">
            <Image
              src={"/images/icon-communities.svg"}
              alt="communities"
              width="47"
              height="41"
              className="w-8"
            />
            <h2 className="text-Fm-Very-Dark-Cyan dark:text-Fm-Very-Pale-Blue text-6xl font-bold">
              1.4k+
            </h2>
            <p className="dark:text-Fm-Very-Pale-Blue text-sm capitalize text-gray-500">
              communities formed
            </p>
          </div>
          <div className="mx-auto mt-[90px] w-40 space-y-4 text-center">
            <Image
              src={"/images/icon-messages.svg"}
              alt="messages"
              width="47"
              height="41"
              className="w-8"
            />
            <h2 className="text-Fm-Very-Dark-Cyan dark:text-Fm-Very-Pale-Blue text-6xl font-bold">
              2.7m+
            </h2>
            <p className="dark:text-Fm-Very-Pale-Blue text-sm capitalize text-gray-500">
              messages <span className="block">sent</span>
            </p>
          </div>
        </article>
        <article className="mt-48 flex flex-col items-center justify-center">
          <Image
            src={"/images/illustration-grow-together.svg"}
            alt="illustration"
            width="1024"
            height="838"
            className="mx-auto w-[250px]"
          />
          <h2 className="text-Fm-Very-Dark-Cyan dark:text-Fm-Very-Pale-Blue mb-4 mt-[86px] font-mono text-xl font-bold capitalize">
            grow together
          </h2>
          <p className="text-Fm-Very-Dark-Cyan dark:text-Fm-Very-Pale-Blue mx-5 text-center text-sm font-semibold">
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.{" "}
          </p>
        </article>
        <article className="mt-60 flex flex-col items-center justify-center">
          <Image
            src={"/images/illustration-flowing-conversation.svg"}
            alt="conversations"
            width="1024"
            height="838"
            className="mx-auto w-[250px]"
          />
          <h2 className="text-Fm-Very-Dark-Cyan dark:text-Fm-Very-Pale-Blue mb-4 mt-[86px] font-mono text-xl font-bold capitalize">
            flowing conversations
          </h2>
          <p className="text-Fm-Very-Dark-Cyan dark:text-Fm-Very-Pale-Blue mx-5 text-center text-sm font-semibold">
            You wouldn&apos;t paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </article>
        <article className="mt-60 flex flex-col items-center justify-center">
          <Image
            src={"/images/illustration-your-users.svg"}
            alt="users"
            width="1024"
            height="838"
            className="mx-auto w-[250px]"
          />
          <h2 className="text-Fm-Very-Dark-Cyan dark:text-Fm-Very-Pale-Blue mb-4 mt-[86px] font-mono text-xl font-bold capitalize">
            your users
          </h2>
          <p className="text-Fm-Very-Dark-Cyan dark:text-Fm-Very-Pale-Blue mx-5 text-center text-sm font-semibold">
            It takes no time at all to integrate Huddle with your app&apos;s
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </p>
        </article>
        <aside className="mt-72 flex flex-col items-center justify-center space-y-12">
          <h1 className="text-Fm-Very-Dark-Cyan dark:text-Fm-Very-Pale-Blue mx-5 text-center font-mono text-2xl capitalize">
            ready to build your community?
          </h1>
          <button className="bg-Fm-Pink dark:text-Fm-Very-Pale-Blue text-Fm-Very-Pale-Blue mt-5 h-10 w-[200px] rounded-full font-mono text-xs capitalize">
            get started for free
          </button>
        </aside>
        <footer className="bg-Fm-Very-Dark-Cyan text-Fm-Very-Pale-Blue mt-64 flex flex-col px-6 pb-11 pt-24">
          <h3 className="text-xl font-bold uppercase">newsletter</h3>
          <p className="mr-4 mt-4 text-sm font-semibold">
            {" "}
            To recieve tips on how to grow your community, sign up to our weekly
            newsletter. We&apos;ll never send you spam or pass on your email
            address
          </p>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              placeholder=""
              className="mt-12 h-12 w-full rounded-md"
            />
          </label>
          <button className="bg-Fm-Pink mt-4 h-12 w-40 self-end rounded-md font-bold capitalize">
            subscribe
          </button>
          <div className="mt-28">
            <Image
              src={"/images/logoWhite.svg"}
              alt="logo"
              width="240"
              height="39"
              className="w-[200px]"
            />
            <p className="mb-12 mr-4 mt-4 text-sm font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
            </p>
            <p
              className="bg-no-repeat pl-9 text-sm font-semibold"
              style={{
                backgroundImage: "url(/images/icon-phone.svg)",
              }}
            >
              Phone: +1-543-123-4567
            </p>
            <p
              className="mt-6 bg-no-repeat pl-9 text-sm font-semibold"
              style={{
                backgroundImage: "url(/images/icon-email.svg)",
              }}
            >
              example@huddle.com
            </p>
            <div className="mt-12 flex items-center gap-4">
              <FaFacebook className="h-7 w-7" />
              <FaInstagram className="h-7 w-7" />
              <FaTwitter className="h-7 w-7" />
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
