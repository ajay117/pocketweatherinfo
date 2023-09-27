export default function Footer() {
  return (
    <div className="text-sm tracking-wide font-extralight text-center bg-gray-900 text-slate-200 absolute w-full bottom-0">
      Copyright &copy;{" "}
      <a
        className="text-blue-600 border-b-2 border-blue-600"
        href="https://ajaykc.netlify.app/"
      >
        Ajay KC
      </a>
      . All Rights Reserved.

      <div className="flex gap-5 justify-center text-xs">
        <p>
          <a
            href="https://iconscout.com/icons/weather"
            className="text-underline font-size-sm"
            target="_blank"
            rel="noreferrer"
          >
            Free Ios Weather Icon
          </a>{" "}
          by{" "}
          <a
            href="https://iconscout.com/contributors/giulio-smedile"
            className="text-underline font-size-sm"
            target="_blank"
            rel="noreferrer"
          >
            Giulio Smedile
          </a>{" "}
          on{" "}
          <a
            href="https://iconscout.com"
            target="_blank"
            rel="noreferrer"
            className="text-underline font-size-sm"
          >
            IconScout
          </a>
        </p>
        <p>
          <a
            href="https://www.flaticon.com/free-icons/sunset"
            title="sunset icons"
            target="_blank"
            rel="noreferrer"
          >
            Sunset icons created by logisstudio - Flaticon
          </a>
        </p>
        <p>
          <a
            href="https://www.flaticon.com/free-icons/sunrise"
            title="sunrise icons"
            target="_blank"
            rel="noreferrer"
          >
            Sunrise icons created by Icha Nur Heidy Tiara - Flaticon
          </a>
        </p>
      </div>
    </div>
  );
}
