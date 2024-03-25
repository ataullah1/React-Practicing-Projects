import { Link, useLoaderData, useParams } from 'react-router-dom';
import bgImgPosi1 from '../../assets/images/bg1.png';
import bgImgPosi2 from '../../assets/images/bg2.png';
const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  //   console.log(id);
  //   console.log(jobs);
  const job = jobs.find((dta) => dta.id === parseInt(id));
  //   console.log(job);
  return (
    <div>
      <div>
        <div className="min-h-[200px] bg-[#F9F9FF] flex items-center justify-center relative">
          <h1 className="text-zinc-900 text-[32px] font-extrabold">
            Job Details
          </h1>
          <img
            className="absolute left-0 bottom-0 w-[250px]"
            src={bgImgPosi1}
            alt=""
          />
        </div>
        <img
          className="absolute right-0 top-0 w-[250px]"
          src={bgImgPosi2}
          alt=""
        />
        <div>
          <div className="pt-28 flex gap-6 w-11/12 mx-auto">
            <div className="w-8/12">
              <p className="text-zinc-900 text-base leading-loose">
                <span className="font-extrabold">Job Description: </span>
                {job.job_description}
              </p>
              <p className="text-zinc-900 text-base leading-loose">
                <span className="font-extrabold">Job Responsibility: </span>{' '}
                {job.job_responsibility}
              </p>

              <h3 className="text-zinc-900 text-base font-extrabold leading-loose">
                Educational Requirements:
              </h3>
              <p className="text-neutral-500 text-base font-semibold leading-loose">
                {job.educational_requirements}
              </p>
              <h2 className="text-zinc-900 text-base font-extrabold leading-loose">
                Experiences:
              </h2>
              <p className="text-neutral-500 text-base font-semibold leading-loose">
                {job.experiences}
              </p>
            </div>

            <div className="w-1/3 ">
              <div className="bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] rounded-lg p-7 mb-6">
                <div className="text-zinc-900 text-xl font-extrabold">
                  Job Details
                </div>
                <div className="w-full h-[0px] opacity-30 border border-indigo-400 my-6"></div>
                <div>
                  <p className="text-neutral-500 text-lg font-medium">
                    <span className="text-zinc-700 text-xl font-bold pb-2">
                      Salary
                    </span>
                    : {job.salary} (Per Month)
                  </p>
                  <p className="text-neutral-500 text-lg font-medium">
                    <span className="text-zinc-700 text-xl font-bold">
                      Job Title
                    </span>
                    : {job.job_title}
                  </p>
                </div>
                <h2 className="text-zinc-900 text-xl font-extrabold py-5">
                  Contact Information
                </h2>
                <div className="w-full h-[0px] opacity-30 border border-indigo-400 mb-5"></div>
                <p className="text-neutral-500 text-lg font-medium">
                  <span className="text-zinc-700 text-xl font-bold">Phone</span>
                  : {job.contact_information.phone}
                </p>
                <p className="text-neutral-500 text-lg font-medium">
                  <span className="text-zinc-700 text-xl py-2  font-bold">
                    Email
                  </span>
                  : {job.contact_information.email}
                </p>
                <p className="text-neutral-500 text-lg font-medium">
                  <span className="text-zinc-700 text-xl font-bold">
                    Address
                  </span>
                  : {job.contact_information.address}
                </p>
              </div>
              <button className="w-full py-2 bg-gradient-to-r from-indigo-400 to-violet-500 rounded-lg text-white text-xl font-extrabold active:scale-90 duration-200">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Link to={'/'} className="py-2 px-7 bg-green-500 rounded-xl">
        {' '}
        Go to Home
      </Link>
    </div>
  );
};

export default JobDetails;
