import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="max-w-[510px] mx-auto">
      <h1>Welcome to ByteBlaze</h1>
      <p>
        ByteBlaze is the bridge between the complex world of technology and the
        curious minds eager to understand it
      </p>
      <div className="flex gap-3 justify-center">
        <Link
          to={'/blogs'}
          className="relative inline-flex items-center justify-start px-8 py-2 overflow-hidden transition-all bg-white rounded hover:bg-white group border border-purple-600 font-bold"
        >
          <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
            Read Blogs
          </span>
        </Link>
        <Link
          to={'/bookmarks'}
          className="relative inline-flex items-center justify-start px-8 py-2 overflow-hidden transition-all bg-white rounded hover:bg-white group border border-purple-600 font-bold"
        >
          <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
            Bookmarks
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
