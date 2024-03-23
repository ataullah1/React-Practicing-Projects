import bannerImg from '../../assets/images/user.png';

const Banner = () => {
  return (
    <div className="bg-[#F9F9FF]">
      <div className="w-full px-2 sm:px-0 sm:w-11/12 mx-auto flex flex-col-reverse md:flex-row items-center justify-between lg:h-[calc(100vh-72px)] gap-10 md:gap-0 lg:gap-8">
        <div className="md:w-1/2">
          <div className="text-zinc-900 text-4xl lg:text-[80px] font-extrabold leading-[50px] lg:leading-[100px]">
            One Step <br /> Closer To Your <br />
            <span className="text-indigo-400">Dream Job</span>
          </div>
          <div className=" text-neutral-500 text-lg font-medium leading-[30px] pt-6 pb-8">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-indigo-400 to-violet-500 rounded-lg text-white text-xl font-extrabold">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2 h-full flex items-end">
          <img className="w-full sm:w-8/12 ml-auto md:w-full" src={bannerImg} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
