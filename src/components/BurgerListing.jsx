import Listings from "../micro-components/Listings";
export default function BurgerListing() {
  return (
    <nav className="w-full text-lg flex flex-col p-5">
      <div className="title & close flex justify-between">
        <h1 className="font-bold">DEV Community</h1>
        <a href="#" className="pe-5">
          X
        </a>
      </div>
      <div className="first-list mt-5">
        <ul className="">
          <Listings emoji="🏠" text="Home" link="/" />
          <Listings emoji="📜" text="Listings" />
          <Listings emoji="🎙️" text="Podcast" />
          <Listings emoji="📽️" text="Videos" />
          <Listings emoji="🏷️" text="Tags" />
          <Listings emoji="💡" text="FAQ" />
          <Listings emoji="🛍️" text="Forem Shop" />
          <Listings emoji="❤️" text="Sponsors" />
          <Listings emoji="🏳‍🌈" text="About" />
          <Listings emoji="📯" text="Contact" />
          <Listings emoji="📖" text="Guides" />
          <Listings emoji="🤔" text="Software comparisons" />
        </ul>
      </div>
      <div className="second-list pt-5">
        <h2 className="text-lg font-bold">Other</h2>
        <ul className="pt-3">
          <Listings emoji="👍" text="Code of Conduct" />
          <Listings emoji="🤓" text="Privacy of Policy" />
          <Listings emoji="👀" text="Terms of use" />
        </ul>
      </div>
      <div className="third-list flex py-5">
        <a>
          <img
            src="../tuwiter-Black-Icon.svg"
            alt="Twitter logo"
            className="w-7"
          />
        </a>
        <a>
          <img src="../facebock-Icon.svg" alt="Facebook logo" className="w-7" />
        </a>
        <a>
          <img src="../github-Icon.svg" alt="Github logo" className="w-7" />
        </a>
        <a>
          <img
            src="../instagram-Icon.svg"
            alt="Instagram logo"
            className="w-7"
          />
        </a>
        <a>
          <img src="../twitch-Icon.svg" alt="Twitch logo" className="w-7" />
        </a>
        <a>
          <img
            src="../src/assets/icons/mastodon-Icon.svg"
            alt="mastodon logo"
            className="w-7"
          />
        </a>
      </div>
    </nav>
  );
}
