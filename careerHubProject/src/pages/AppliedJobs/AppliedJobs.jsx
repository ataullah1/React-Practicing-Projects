import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoreJobsDta } from '../../utility/localStorage';
import bgImgPosi1 from '../../assets/images/bg1.png';
import bgImgPosi2 from '../../assets/images/bg2.png';
import { FaChevronDown } from 'react-icons/fa';
import Apply from './Apply';

const AppliedJobs = () => {
  const jobs = useLoaderData();
  // console.log(jobs);
  const [apply, setApply] = useState([]);

  useEffect(() => {
    const storeDta = getStoreJobsDta();
    console.log(storeDta);
    if (storeDta.length > 0) {
      const applyDta = jobs.filter((dta) => storeDta.includes(dta.id));
      setApply(applyDta);
    }
  }, []);
  return (
    <div>
      <div>
        <div className="min-h-[200px] bg-[#F9F9FF] flex items-center justify-center relative">
          <h1 className="text-zinc-900 text-[32px] font-extrabold">
            Applied Jobs
          </h1>
          <img
            className="absolute left-0 bottom-0 w-40 md:w-[250px]"
            src={bgImgPosi1}
            alt=""
          />
        </div>
        <img
          className="absolute right-0 top-0 w-40 md:w-[250px]"
          src={bgImgPosi2}
          alt=""
        />
      </div>

      <div className="w-11/12 mx-auto">
        {/* Selection filter by */}
        <div className="text-right pt-10 sm:pt-28 pb-4 sm:pb-8">
          <div className="dropdown  dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              Filter By <FaChevronDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-28"
            >
              <li>
                <a>All</a>
              </li>
              <li>
                <a>Remote</a>
              </li>
              <li>
                <a>Onsite</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Card part */}

        <div>
          {apply.map((dta) => (
            <Apply key={dta.id} apply={dta} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
