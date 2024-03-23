import { useEffect, useState } from 'react';
import CategoriesJob from './CategoriesJob';

const CategoriesJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch('jobs.json')
      .then((res) => res.json())
      .then((dta) => setJobs(dta));
  }, []);
  //   console.log(jobs);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {jobs.map((dta) => (
        <CategoriesJob key={dta.id} job={dta} />
      ))}
    </div>
  );
};

export default CategoriesJobs;
