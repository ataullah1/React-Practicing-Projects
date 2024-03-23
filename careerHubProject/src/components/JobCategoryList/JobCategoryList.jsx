import PropTypes from 'prop-types';
const JobCategoryList = ({ jobList }) => {
  // console.log(jobList);
  const { logo, category_name, availability } = jobList;
  return (
    <div className="bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] rounded-lg p-5 md:p-10">
      <div className="w-[70px] h-[70px] bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] rounded-lg p-3">
        <img className="w-full" src={logo} alt="" />
      </div>
      <div className="text-zinc-700 text-xl font-extrabold pt-8 pb-2">
        {category_name}
      </div>
      <div className="text-neutral-400 text-base font-medium leading-relaxed">
        {availability}
      </div>
    </div>
  );
};
JobCategoryList.propTypes = {
  jobList: PropTypes.object,
};
export default JobCategoryList;
