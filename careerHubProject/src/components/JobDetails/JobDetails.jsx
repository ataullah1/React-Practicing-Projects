import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const jobs = useLoaderData();
  console.log(jobs);
  return (
    <div>
      <h1 className="text-4xl mb-7 font-bold">Helllo gais</h1>
      <Link to={'/'} className="py-2 px-7 bg-green-500 rounded-xl">
        {' '}
        Go to Home
      </Link>
    </div>
  );
};

export default JobDetails;
