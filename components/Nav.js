import Link from 'next/link';
import { Github, Twitter } from '@icons-pack/react-simple-icons';
import { EnvelopeIcon } from '@heroicons/react/solid';
const sunIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="22"
    fill="none"
    viewBox="0 0 25 24"
    className="dark:opacity-50"
  >
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      clipPath="url(#clip0_192_823)"
    >
      <path d="M12.5 17a5 5 0 100-10 5 5 0 000 10zM12.5 1v2M12.5 21v2M4.72 4.22l1.42 1.42M18.86 18.36l1.42 1.42M1.5 12h2M21.5 12h2M4.72 19.78l1.42-1.42M18.86 5.64l1.42-1.42"></path>
    </g>
    <defs>
      <clipPath id="clip0_192_823">
        <path
          className="text-white fill-current"
          d="M0 0H24V24H0z"
          transform="translate(.5)"
        ></path>
      </clipPath>
    </defs>
  </svg>
);

const moonIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="18"
    fill="none"
    viewBox="0 0 21 20"
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="stroke-current text-neutral-400 dark:text-white"
      d="M19.5 10.79A9 9 0 119.71 1a7 7 0 009.79 9.79v0z"
    ></path>
  </svg>
);

const ThemeSwitcher = () => {
  return (
    <div className="flex justify-center mt-3 p-1 bg-neutral-300 dark:bg-neutral-700 rounded-3xl mb-24">
      <button
        type="button"
        aria-label="Use Dark Mode"
        onClick={() => {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }}
        className="flex items-center justify-center  p-2 pr-2 transition w-11 h-9 dark:bg-neutral-500 rounded-3xl align-center"
      >
        {moonIcon}
      </button>

      <button
        type="button"
        aria-label="Use Light Mode"
        onClick={() => {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }}
        className="flex items-center justify-center  p-2 pr-2 transition w-11 h-9 bg-neutral-500 dark:bg-transparent rounded-3xl align-center"
      >
        {sunIcon}
      </button>
    </div>
  );
};

export default function Nav() {
  return (
    <span className="flex flex-row items-center justify-between w-full px-4 pt-3 lg:px-0">
      <div className="flex flex-col">
        <Link href="/">
          <a className="text-2xl -mt-1 font-bold dark:text-white opacity-60">
            Eric Murrell
          </a>
        </Link>
        <div className="flex flex-row pb-4 text-neutral-500">
          <a href="https://github.com/emurrell">
            <Github className="my-4 mr-6 w-6 h-6 hover:text-neutral-300" />
          </a>
          <a href="mailto:emurrell.dev@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 mt-3.5 mr-6 hover:text-neutral-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </a>

          <a href="https://twitter.com/emurrelldev">
            <Twitter className="my-4 mr-6 transition duration-100 w-6 h-6 hover:text-neutral-300" />
          </a>
        </div>
      </div>
      <ThemeSwitcher />
    </span>
  );
}
