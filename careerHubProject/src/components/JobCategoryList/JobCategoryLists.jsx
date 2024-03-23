import { useEffect, useState } from 'react';
import JobCategoryList from './JobCategoryList';

const JobCategoryLists = () => {
  const [jobList, setJobList] = useState([]);
  useEffect(() => {
    fetch('categories.json')
      .then((res) => res.json())
      .then((dta) => setJobList(dta));
  }, []);
  //   console.log(jobList);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {jobList.map((jobDta) => (
        <JobCategoryList key={jobDta.id} jobList={jobDta} />
      ))}
    </div>
  );
};

export default JobCategoryLists;
