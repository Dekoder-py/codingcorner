import { createElement } from "react";
import catppuccinLogo from '../assets/catppuccin-logo.png';

export default function Webrings() {
  return (
    <div id="webring">
      <h2 className="font-bold">The Webrings</h2>

      <div id="pagering">
        {createElement("pagering-link", { theme: "dark" })}
      </div>

      <div className="mt-2 flex" id="parrotring">
        <a href="https://ultrafastparrot.net/prev/kyle">
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
        <a href="https://ultrafastparrot.net/">
          <img
            className="w-12"
            src="https://ultrafastparrot.net/ultrafastparrot.gif"
            alt="ultrafastparrot"
          />
        </a>
        <a href="https://ultrafastparrot.net/next/kyle">
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

      <div id="catp webring stuuf" className="mt-2 flex">
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
            src={catppuccinLogo.src}
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
  );
}
