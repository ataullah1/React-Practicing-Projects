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
    <div>
      {jobs.map((dta) => (
        <CategoriesJob key={dta.id} job={dta} />
      ))}
    </div>
  );
};

export default CategoriesJobs;
