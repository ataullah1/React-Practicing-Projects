import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
  const user = useLoaderData();
  return (
    <div className="border-2 border-green-600 rounded-xl p-10 my-6">
      <h1 className="text-2xl">Hello {user.name}</h1>
    </div>
  );
};

export default UserDetails;
