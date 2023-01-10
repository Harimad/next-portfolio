import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="body-font">
        <div className="">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <Link legacyBehavior href="/">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <span className="ml-3 text-xl">Harimad</span>
              </a>
            </Link>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2023 Harimad —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @tim
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
