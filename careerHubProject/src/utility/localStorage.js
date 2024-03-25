const getStoreJobsDta = () => {
  const storeDta = localStorage.getItem('job-applications');
  if (storeDta) {
    return JSON.parse(storeDta);
  }
  return [];
};

const saveJobsDtaLocalStorage = (dta) => {
  const id = parseInt(dta);
  const savejobDta = getStoreJobsDta();
  const exists = savejobDta.find((dta) => dta === id);
  if (!exists) {
    savejobDta.push(id);
    localStorage.setItem('job-applications', JSON.stringify(savejobDta));
  }
};

export { saveJobsDtaLocalStorage, getStoreJobsDta };
