import { useEffect, useState } from 'react';
import CategoriesJob from './CategoriesJob';

const CategoriesJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [jobLength, setJobLength] = useState(4);
  useEffect(() => {
    fetch('jobs.json')
      .then((res) => res.json())
      .then((dta) => setJobs(dta));
  }, []);
  //   console.log(jobs);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.slice(0, jobLength).map((dta) => (
          <CategoriesJob key={dta.id} job={dta} />
        ))}
      </div>
      <div className={jobLength === jobs.length && 'hidden'}>
        <button
          onClick={() => setJobLength(jobs.length)}
          className="hover:scale-105 duration-200 block mx-auto my-8 px-7 py-2 bg-gradient-to-r from-indigo-400 to-violet-500 rounded-lg text-white text-xl font-extrabold "
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default CategoriesJobs;
