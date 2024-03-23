const CategoriesJob = ({ job }) => {
  const { id, logo, job_title, company_name, remote_or_onsite, location } = job;
  console.log(job_title);
  return (
    <div className="border border-gray-200 rounded-lg p-5 lg:p-10 space-y-3">
      <img className="h-12 mb-5" src={logo} alt="" />
      <h2 className="text-zinc-700 text-2xl font-extrabold">
        Technical Database Engineer
      </h2>
      <p className="text-neutral-500 text-xl font-semibold">Google LLC</p>
      <div className="flex gap-5">
        <button className="px-6 py-2 rounded border border-indigo-400 text-indigo-400 text-base font-extrabold">
          Remote
        </button>
        <button className="px-6 py-2 rounded border border-indigo-400 text-indigo-400 text-base font-extrabold">
          Full Time
        </button>
      </div>
      <div className="flex gap-5">
        <p>Dhaka, Bangladesh</p>
        <p>Salary : 100K - 150K</p>
      </div>
      <button className="px-6 py-2 bg-gradient-to-r from-indigo-400 to-violet-500 rounded text-white text-xl font-extrabold ">
        View Details
      </button>
    </div>
  );
};

export default CategoriesJob;
