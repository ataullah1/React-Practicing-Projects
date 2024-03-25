import PropTypes from 'prop-types';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const CategoriesJob = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  //   console.log(job_title);
  return (
    <div className="border border-gray-200 rounded-lg p-5 lg:p-10 space-y-3">
      <img className="h-12 mb-5" src={logo} alt="" />
      <h2 className="text-zinc-700 text-2xl font-extrabold">{job_title}</h2>
      <p className="text-neutral-500 text-xl font-semibold">{company_name}</p>
      <div className="flex gap-5">
        <div className="px-6 py-2 rounded border border-indigo-400 text-indigo-400 text-base font-extrabold">
          {remote_or_onsite}
        </div>

        <div className="px-6 py-2 rounded border border-indigo-400 text-indigo-400 text-base font-extrabold">
          {job_type}
        </div>
      </div>
      <div className="flex gap-5 pb-6">
        <p className="flex items-center gap-1">
          <CiLocationOn />
          {location}
        </p>
        <p className="flex items-center gap-1">
          Salary:{' '}
          <span className="flex items-center gap-1">
            <AiOutlineDollarCircle /> {salary}
          </span>
        </p>
      </div>
      <div className="active:scale-90 duration-200 hover:translate-x-2">
        <Link
          to={`/job/${id}`}
          className="px-6 py-2 bg-gradient-to-r from-indigo-400 to-violet-500 rounded text-white text-xl font-extrabold"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

CategoriesJob.propTypes = {
  job: PropTypes.object,
};
export default CategoriesJob;
