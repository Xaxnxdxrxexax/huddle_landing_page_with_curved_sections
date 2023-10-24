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
    <div className={isDark ? "dark bg-black" : "bg-white"}>
      <main className="dark:text-Fm-Very-Pale-Blue mx-auto max-w-[1440px] dark:bg-black">
        <header className=" relative flex items-center justify-center px-6 py-7 lg:mx-20 lg:mb-32 lg:pt-16">
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
            className="w-24 lg:w-[230px]"
          />
          <button className="text-Fm-Pink ring-Fm-Pink dark:text-Fm-Very-Pale-Blue ml-auto h-6 w-20 rounded-full text-[0.63rem] ring-1 lg:h-10 lg:w-44 lg:text-lg">
            Try It Free
          </button>
        </header>
        <article className="mt-[90px] flex flex-col items-center justify-center gap-7 tracking-tight">
          <h1 className="text-Fm-Very-Dark-Cyan dark:text-Fm-Very-Pale-Blue mx-5 text-center font-mono text-2xl capitalize lg:text-5xl">
            build the community{" "}
            <span className="block lg:inline">your fans will love</span>
          </h1>
          <p className="text-Fm-Very-Dark-Cyan dark:text-Fm-Very-Pale-Blue mx-10 text-center text-sm font-semibold lg:max-w-[610px] lg:text-xl">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="bg-Fm-Pink text-Fm-Very-Pale-Blue mt-5 h-10 w-[200px] rounded-full font-mono text-xs capitalize lg:h-20 lg:w-[400px] lg:text-2xl">
            get started for free
          </button>
        </article>
        <article className="mx-auto mt-[105px]">
          <Image
            src={"/images/screen-mockups.svg"}
            alt="screen"
            width="1035"
            height="739"
            className="mx-auto max-w-[300px] lg:max-w-[1024px]"
          />
          <div className="grid-cols-2 lg:mx-64 lg:my-32 lg:grid lg:items-stretch">
            <div className="dark:text-Fm-Very-Pale-Blue mx-auto mt-[120px] w-40 space-y-4 text-center lg:mt-0 lg:w-full lg:text-left">
              <Image
                src={"/images/icon-communities.svg"}
                alt="communities"
                width="47"
                height="41"
                className="w-8 lg:ml-5 lg:w-12"
              />
              <h2 className="text-Fm-Very-Dark-Cyan dark:text-Fm-Very-Pale-Blue text-6xl font-bold lg:text-9xl">
                1.4k+
              </h2>
              <p className="dark:text-Fm-Very-Pale-Blue text-sm capitalize text-gray-500 lg:ml-5 lg:min-w-max lg:text-2xl">
                communities formed
              </p>
            </div>
            <div className="mx-auto mt-[90px] w-40 space-y-4 text-center lg:ml-20 lg:mt-0 lg:w-full">
              <Image
                src={"/images/icon-messages.svg"}
                alt="messages"
                width="47"
                height="41"
                className="w-8 lg:ml-5 lg:w-12"
              />
              <h2 className="text-Fm-Very-Dark-Cyan dark:text-Fm-Very-Pale-Blue text-6xl font-bold lg:text-left lg:text-9xl">
                2.7m+
              </h2>
              <p className="dark:text-Fm-Very-Pale-Blue text-sm capitalize text-gray-500 lg:ml-5 lg:min-w-max lg:text-left lg:text-2xl">
                messages <span className="block lg:inline">sent</span>
              </p>
            </div>
          </div>
        </article>
        <article className="bg-Fm-Very-Pale-Blue relative mt-28 flex flex-col items-center justify-center pb-16 pt-24 lg:mt-80 lg:flex-row-reverse lg:px-32">
          <picture>
            <source
              srcSet="/images/bg-section-top-desktop-1.svg"
              media="(min-width: 1024px)"
            />
            <Image
              src={"/images/bg-section-top-mobile-1.svg"}
              alt="bg-footer"
              width="375"
              height="53"
              className="absolute left-0 top-0 w-full -translate-y-full transform"
            />
          </picture>
          <Image
            src={"/images/illustration-grow-together.svg"}
            alt="illustration"
            width="1024"
            height="838"
            className="mx-auto w-[250px] lg:mx-0 lg:w-[530px]"
          />
          <div className="lg:mr-24">
            <h2 className="text-Fm-Very-Dark-Cyan mb-4 mt-[86px] text-center font-mono text-xl font-bold capitalize lg:mt-10 lg:text-5xl">
              grow together
            </h2>
            <p className="text-Fm-Very-Dark-Cyan mx-5 text-center text-sm font-semibold  lg:mx-0 lg:max-w-[520px] lg:text-left lg:text-lg lg:tracking-tighter">
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.{" "}
            </p>
          </div>
          <picture>
            <source
              srcSet="/images/bg-section-bottom-desktop-1.svg"
              media="(min-width: 1024px)"
            />
            <Image
              src={"/images/bg-section-bottom-mobile-1.svg"}
              alt="bg-footer"
              width="375"
              height="53"
              className="absolute bottom-0 left-0 w-full translate-y-full transform"
            />
          </picture>
        </article>
        <article className="relative mt-60 flex flex-col items-center justify-center lg:flex-row">
          <Image
            src={"/images/illustration-flowing-conversation.svg"}
            alt="conversations"
            width="1024"
            height="838"
            className="mx-auto w-[250px] lg:mx-0 lg:w-[530px]"
          />
          <div className="lg:ml-24">
            <h2 className="text-Fm-Very-Dark-Cyan dark:text-Fm-Very-Pale-Blue mb-4 mt-[86px] text-center font-mono text-xl font-bold capitalize lg:mt-10 lg:text-5xl">
              flowing conversations
            </h2>
            <p className="text-Fm-Very-Dark-Cyan dark:text-Fm-Very-Pale-Blue mx-5 text-center text-sm font-semibold lg:mx-0 lg:max-w-[550px] lg:text-left lg:text-lg lg:tracking-tighter">
              You wouldn&apos;t paginate a conversation in real life, so why do
              it online? Our threads have just-in-time loading for a more
              natural flow.
            </p>
          </div>
        </article>
        <article className="bg-Fm-Very-Pale-Blue relative mt-60 flex flex-col items-center justify-center pb-24 lg:flex-row-reverse lg:px-32">
          <picture>
            <source
              srcSet="/images/bg-section-top-desktop-2.svg"
              media="(min-width: 1024px)"
            />
            <Image
              src={"/images/bg-section-top-mobile-2.svg"}
              alt="bg-footer"
              width="375"
              height="53"
              className="absolute left-0 top-0 w-full -translate-y-full transform"
            />
          </picture>
          <Image
            src={"/images/illustration-your-users.svg"}
            alt="users"
            width="1024"
            height="838"
            className="mx-auto w-[250px] lg:mx-0 lg:w-[530px]"
          />
          <div className="lg:mr-24">
            <h2 className="text-Fm-Very-Dark-Cyan mb-4 mt-[86px] text-center font-mono text-xl font-bold capitalize lg:mt-10 lg:text-5xl">
              your users
            </h2>
            <p className="text-Fm-Very-Dark-Cyan mx-5 text-center text-sm font-semibold lg:mx-0 lg:max-w-[520px] lg:text-left lg:text-lg lg:tracking-tighter">
              It takes no time at all to integrate Huddle with your app&apos;s
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </p>
          </div>
          <picture>
            <source
              srcSet="/images/bg-section-bottom-desktop-2.svg"
              media="(min-width: 1024px)"
            />
            <Image
              src={"/images/bg-section-bottom-mobile-2.svg"}
              alt="bg-footer"
              width="375"
              height="53"
              className="absolute bottom-0 left-0 w-full translate-y-full transform"
            />
          </picture>
        </article>
        <aside className="mt-44 flex flex-col items-center justify-center space-y-12 lg:my-80">
          <h1 className="text-Fm-Very-Dark-Cyan dark:text-Fm-Very-Pale-Blue mx-5 text-center font-mono text-2xl capitalize lg:text-5xl">
            ready to build your community?
          </h1>
          <button className="bg-Fm-Pink dark:text-Fm-Very-Pale-Blue text-Fm-Very-Pale-Blue mt-5 h-10 w-[200px] rounded-full font-mono text-xs capitalize lg:h-20 lg:w-[410px] lg:text-2xl">
            get started for free
          </button>
        </aside>
        <footer className="bg-Fm-Very-Dark-Cyan text-Fm-Very-Pale-Blue relative mt-64 flex flex-col px-6 pb-11 pt-24 lg:flex-row-reverse lg:justify-between lg:px-32 lg:pb-24">
          <picture>
            <source
              srcSet="/images/bg-footer-top-desktop.svg"
              media="(min-width: 1024px)"
            />
            <Image
              src={"/images/bg-footer-top-mobile.svg"}
              alt="bg-footer"
              width="375"
              height="53"
              className="absolute left-0 top-0 w-full -translate-y-full transform"
            />
          </picture>
          <div className="flex flex-col lg:ml-auto lg:max-w-xl">
            <h3 className="text-xl font-bold uppercase">newsletter</h3>
            <p className="mr-4 mt-4 text-sm font-semibold lg:mr-0 lg:max-w-[390px] lg:text-base">
              {" "}
              To recieve tips on how to grow your community, sign up to our
              weekly newsletter. We&apos;ll never send you spam or pass on your
              email address
            </p>
            <div className="flex flex-col lg:max-w-fit lg:flex-row lg:gap-10">
              <label htmlFor="email">
                <input
                  type="email"
                  id="email"
                  placeholder=""
                  className="mt-12 h-12 w-full rounded-md lg:h-12 lg:w-[320px]"
                />
              </label>
              <button className="bg-Fm-Pink mt-4 h-12 w-40 shrink-0 self-end rounded-md font-bold capitalize">
                subscribe
              </button>
            </div>
          </div>
          <div className="mt-28 lg:mr-24 lg:mt-0 lg:max-w-xl">
            <Image
              src={"/images/logoWhite.svg"}
              alt="logo"
              width="240"
              height="39"
              className="w-[200px] lg:w-[240px]"
            />
            <p className="mb-12 mr-4 mt-4 text-sm font-semibold lg:mb-6 lg:max-w-xs">
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
