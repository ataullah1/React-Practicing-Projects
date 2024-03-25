import PropTypes from 'prop-types';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineDollarCircle } from 'react-icons/ai';

const Apply = ({ apply }) => {
  const {
    company_name,
    job_title,
    remote_or_onsite,
    job_type,
    salary,
    location,
    logo,
  } = apply;
  return (
    <div className="flex justify-between items-center mb-6 w-full">
      <div className="flex gap-6 items-center">
        <div className="w-60 h-60 px-11 flex items-center justify-center bg-zinc-100 rounded-lg">
          <img className="w-full" src={logo} alt="" />
        </div>
        <div className="space-y-3">
          <h2 className="text-zinc-700 text-2xl font-extrabold">{job_title}</h2>
          <p className="text-neutral-500 text-xl font-semibold">
            {company_name}
          </p>
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
        </div>
      </div>
      <button className="active:scale-90 duration-200 w-48 py-2 bg-gradient-to-r from-indigo-400 to-violet-500 rounded text-white text-xl font-extrabold">
        View Details
      </button>
    </div>
  );
};

Apply.propTypes = {
  apply: PropTypes.object,
};

export default Apply;
