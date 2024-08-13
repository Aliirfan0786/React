// import { useRouteError } from "react-router-dom";



const error =() =>{
// const err = useRouteError();
// console.log(err);
return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100 text-red-700 p-6">
      <h1 className="text-4xl font-bold mb-4">Something Went Wrong</h1>
      <p className="text-xl">We're sorry, but something went wrong. Please try again later.</p>
    </div>
  );
};


export default error;