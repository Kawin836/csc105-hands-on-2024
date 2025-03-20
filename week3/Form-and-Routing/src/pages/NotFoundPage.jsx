import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
    <div className="bg-blue-200 h-screen flex items-center">
      <div className='flex flex-col justify-evenly items-center bg-gray-100 w-[475px] h-[250px] mx-auto drop-shadow-xl'>
        <h2 className="text-4xl font-medium text-red-600">404 - Page Not Found</h2>
        <Link to="/" className="text-xl py-5 px-10 bg-blue-200 hover:bg-blue-300">Go back to the Home Page</Link>
      </div>
    </div>
    </>
  );
};

export default NotFoundPage;