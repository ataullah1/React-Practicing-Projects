import PropTypes from 'prop-types';

const CategoriesJob = ({ job }) => {
  const {
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
        <button className="px-6 py-2 rounded border border-indigo-400 text-indigo-400 text-base font-extrabold">
          {remote_or_onsite}
        </button>
        <button className="px-6 py-2 rounded border border-indigo-400 text-indigo-400 text-base font-extrabold">
          {job_type}
        </button>
      </div>
      <div className="flex gap-5">
        <p>{location}</p>
        <p>Salary : {salary}</p>
      </div>
      <button className="px-6 py-2 bg-gradient-to-r from-indigo-400 to-violet-500 rounded text-white text-xl font-extrabold ">
        View Details
      </button>
    </div>
  );
};

CategoriesJob.propTypes = {
  job: PropTypes.object,
};
export default CategoriesJob;
