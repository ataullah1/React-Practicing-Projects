import Banner from '../../components/Banner/Banner';
import FeaturedJobs from '../../components/FeaturedJobs/FeaturedJobs';
import JobList from '../../components/JobList/JobList';

const Home = () => {
  return (
    <div>
      <Banner />
      <JobList />
      <FeaturedJobs />
    </div>
  );
};

export default Home;
