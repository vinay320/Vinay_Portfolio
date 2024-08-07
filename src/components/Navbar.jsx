import {
  FaLinkedin,
  FaGithub,
  FaSquareXTwitter,
  FaInstagram,
} from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h2 className="mx-2 w-10 text-6xl">VT</h2>
      </div>
      <div className="m-8 flex items-center gap-4 justify-center text-2xl">
        <a
          href="https://www.linkedin.com/in/vinay-tomar-12366621b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/vinay320"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/vinaytomar939"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="https://www.instagram.com/vinaytomar1404"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
