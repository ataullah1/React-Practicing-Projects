import { useLoaderData, useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const user = useLoaderData();

  const naviget = useNavigate();
  const goBack = () => {
    naviget(-1);
  };
  return (
    <div className="border-2 border-green-600 rounded-xl p-10 my-6">
      <h1 className="text-2xl">Hello {user.name}</h1>
      <button
        className="bg-gray-500 px-5 py-2 rounded-lg font-bold text-white"
        onClick={goBack}
      >
        Go Back
      </button>
    </div>
  );
};

export default UserDetails;
