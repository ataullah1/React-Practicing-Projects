import Banner from '../../components/Banner/Banner';
import CategoriesJobs from '../../components/CategoriesJobs/CategoriesJobs';
import FeaturedJobs from '../../components/FeaturedJobs/FeaturedJobs';
import JobList from '../../components/JobList/JobList';

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="w-full px-4 sm:px-0 sm:w-11/12 mx-auto">
        <JobList />
        <FeaturedJobs />
        <CategoriesJobs />
      </div>
    </div>
  );
};

export default Home;
