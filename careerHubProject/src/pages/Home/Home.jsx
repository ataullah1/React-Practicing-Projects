import Banner from '../../components/Banner/Banner';
import CategoriesJobs from '../../components/CategoriesJobs/CategoriesJobs';
import FeaturedJobs from '../../components/FeaturedJobs/FeaturedJobs';
import JobList from '../../components/JobList/JobList';

const Home = () => {
  return (
    <div>
      <Banner />
      <JobList />
      <FeaturedJobs />
      <CategoriesJobs />
    </div>
  );
};

export default Home;
