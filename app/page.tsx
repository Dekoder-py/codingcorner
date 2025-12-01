import Image from "next/image";
import Button88x31 from "../components/Button88x31.tsx";

export default function Home() {
  return (
    <div className="bg-latte-base dark:bg-macchiato-base text-latte-text dark:text-macchiato-text min-h-screen flex flex-col items-center justify-center text-center space-y-8">
      <div
        id="welcome"
        className="items-center justify-center text-center flex flex-col"
      >
        <img
          src="/assets/pfp.png"
          height={150}
          width={150}
          className="rounded"
        />
        <h1 className="text-3xl font-bold text-latte-text dark:text-macchiato-text">
          Hello! Welcome to codingcorner.dev!
        </h1>
        <h2 className="text-2xl text-latte-lavender dark:text-macchiato-lavender">
          You've reached my corner of the internet!
        </h2>
      </div>
      <section id="about">
        <p className="px-8">
          I'm Kyle, a 16 year old programmer from New Zealand. I make projects,
          like{" "}
          <a
            href="https://pypi.org/project/restless-dungeon/"
            className="underline hover:text-latte-blue dark:hover:text-macchiato-blue"
          >
            this
          </a>
          ! I am fluent in python and C++ and decent at Java. I'm a member of{" "}
          <a
            href="https://hack.club"
            target="_blank"
            className="underline hover:text-latte-blue dark:hover:text-macchiato-blue"
          >
            Hack Club
          </a>
          ! <br />I prefer working in the CLI to any GUI app (which is why I'm
          not the best at UI things XD) <br />
          I've also written my own neovim, ghostty, and tmux configs, which are
          the main tools I use to program. You can find them on my{" "}
          <a
            href="https://github.com/dekoder-py"
            target="_blank"
            className="underline hover:text-latte-blue dark:hover:text-macchiato-blue"
          >
            GitHub
          </a>
          !
        </p>

        <div
          id="webring"
          className="my-8 items-center text-center flex flex-col"
        >
          <h2 className="text-2xl text-latte-lavender dark:text-macchiato-lavender">
            The Webrings
          </h2>

          <div id="catp webring stuuf" className="flex mt-2">
            <a href="https://ctp-webr.ing/codingcorner/previous">
              <svg
                className="arrow-icon"
                width="42"
                height="42"
                viewBox="0 0 24 24"
                fill="#cdd6f4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M5 12L11 6M5 12L11 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
            <a href="https://ctp-webr.ing/">
              <img
                src="/assets/catppuccin-logo.png"
                height={42}
                width={42}
                alt="Catppuccin Webring"
              />
            </a>
            <a href="https://ctp-webr.ing/codingcorner/next">
              <svg
                className="arrow-icon"
                width="42"
                height="42"
                viewBox="0 0 24 24"
                fill="#cdd6f4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L13 6M19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
            </a>
          </div>
          <div id="noairing" className="mt-2">
            <map name="noaimini10b">
              <area
                href="https://baccyflap.com/noai"
                shape="poly"
                coords="38,6,38,18,60,18,60,42,38,42,38,58,136,58,136,6"
                target="_blank"
                alt="no ai webring"
                title="no ai webring"
              />
              <area
                href="https://baccyflap.com/noai/?prv&s=kcc"
                target="_top"
                shape="rect"
                coords="0,0,32,40"
                alt="previous"
                title="previous"
              />
              <area
                href="https://baccyflap.com/noai/?rnd"
                target="_top"
                shape="rect"
                coords="40,24,56,40"
                alt="random"
                title="random"
              />
              <area
                href="https://baccyflap.com/noai/?nxt&s=kcc"
                target="_top"
                shape="rect"
                coords="142,20,174,60"
                alt="next"
                title="next"
              />
            </map>
            <img
              style={{ width: "176px", imageRendering: "pixelated" }}
              useMap="#noaimini10b"
              src="https://baccyflap.com/noai/miniwidget10.gif"
              alt="a black rectangle outlined in animated, shifting red and blue pixels, moving around the sign. there are two arrows, one pointing left and one right, protruding from the sign. on the sign are the words THE NO AI WEBRING and a small question mark beside them"
            />
          </div>
          <div id="webmasterwebring-widget" className="mt-2">
            <map name="badge-wwstamp">
              <area
                shape="rect"
                coords="66,38,79,49"
                href="https://webmasterwebring.netlify.app?codingcorner-previous"
                alt="Previous"
              />
              <area
                shape="rect"
                coords="78,29,90,40"
                href="https://webmasterwebring.netlify.app?codingcorner-next"
                alt="Next"
              />
              <area
                shape="rect"
                coords="13,15,63,47"
                href="https://webmasterwebring.netlify.app"
                alt="Webmaster Webring"
              />
            </map>
            <img
              useMap="#badge-wwstamp"
              id="ww-stamp"
              src="https://file.garden/ZrZSgsrYfQXsO7QH/ww/stamp.png"
              alt="Webmaster Webring"
              width="99"
              height="56"
            />
          </div>
        </div>
      </section>
      <h2 className="text-2xl text-latte-lavender dark:text-macchiato-lavender">
        The 88x31 Grid
      </h2>

      <div
        id="buttons"
        className="
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[repeat(auto-fit,minmax(88px,1fr))] 
          md:max-w-[calc(8*88px)] gap-2 place-items-center
        "
      >
        <Button88x31
          url="https://codingcorner.dev"
          imgSrc="/buttons/codingcorner.png"
          alt="coding corner"
        />

        <Button88x31
          url="https://site.slitrostudio.me"
          imgSrc="https://site.slitrostudio.me/Slitro2.png"
          alt="Slitro Studio"
        />

        <Button88x31
          url="https://poy.ooo"
          imgSrc="/buttons/poyo.png"
          alt="Poyo"
        />

        <Button88x31
          url="https://errorcodezero.dev/"
          imgSrc="https://errorcodezero.dev/button.png"
          alt="ErrorCode0"
        />

        <Button88x31
          url="https://bomberfish.ca"
          imgSrc="https://bomberfish.ca/button.gif"
          alt="BomberFish"
        />

        <Button88x31
          url="https://aconlin.com"
          imgSrc="/buttons/acon.gif"
          alt="Acon"
        />

        <Button88x31
          url="http://gideon.sh/"
          imgSrc="/buttons/gideon.gif"
          alt="Gideon"
        />

        <Button88x31
          url="https://www.valen.zip"
          imgSrc="https://www.valen.zip/button-bw.gif"
          alt="valen's site's black and white 88x31 button"
        />

        <Button88x31
          url="https://hack.club"
          imgSrc="/buttons/hackclub.gif"
          alt="hack club"
        />

        <Button88x31
          url="https://github.com"
          imgSrc="/buttons/github.gif"
          alt="github"
        />

        <Button88x31
          url="https://catppuccin.com"
          imgSrc="/buttons/ctp.webp"
          alt="catppuccin"
        />

        <Button88x31
          url="https://webmasterwebring.netlify.app"
          imgSrc="https://file.garden/ZrZSgsrYfQXsO7QH/ww/btn.png"
          alt="Webmaster Webring"
        />

        <Button88x31
          url="https://apple.com"
          imgSrc="/buttons/macosmade.gif"
          alt="made with macOS"
        />

        <Button88x31
          url="https://neovim.io"
          imgSrc="/buttons/neovim.gif"
          alt="neovim"
        />

        <Button88x31
          url="https://www.vim.org"
          imgSrc="/buttons/vim.gif"
          alt="vim"
        />

        <Button88x31
          url="https://home-assistant.io"
          imgSrc="/buttons/home-assistant.gif"
          alt="home assistant"
        />

        <Button88x31
          url="https://apple.com"
          imgSrc="/buttons/apple.gif"
          alt="apple"
        />

        <Button88x31
          url="https://notbyai.fyi"
          imgSrc="/buttons/notbyai.png"
          alt="not by ai"
        />

        <Button88x31
          url="https://eightyeightthirty.one/#"
          imgSrc="/buttons/88x31.png"
          alt="eighty eight thirty one"
        />

        <Button88x31
          url="https://anybrowser.org"
          imgSrc="/buttons/detect.gif"
          alt="viewable on any browser"
        />
      </div>
    </div>
  );
}
