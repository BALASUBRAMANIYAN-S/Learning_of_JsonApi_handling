import { Link } from "react-router-dom";
import { useGetUserApiQuery } from "../services/userApi";

function ApiCall() {
  const { data } = useGetUserApiQuery();
  function getRandomInt(max) {
    return Math.floor(Math.random() * max * 10);
  }
  const handleBtn = (e) => {
    console.log(e);
  };
  return (
    <div className="flex justify-center mt-5 ">
      <div className="border-l-2 border-t-2 border-r-2 px-2 border-gray-200 rounded-2xl">
      <table className="w-fit ">
        <thead className="border-b-2 border-gray-200 ">
          <tr className="">
            <th className=" px-4 py-4">I'd</th>
            <th className=" px-4 py-4">User</th>
            <th className=" px-4 py-4">Points</th>
            <th className=" px-4 py-4">Details</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user, index) => {
            return (
              <tr className="items-center border-b-2 border-gray-200 " key={index}>
                <td className="text-center px-4 py-2 ">{user.id}</td>
                <td className="px-[10px] py-2 flex  items-center gap-2">
                  <img
                    src="public\image.png"
                    className="w-[33px] h-[33px] rounded-[50%] "
                    alt=""
                  />
                  <div>
                    <p className="text-[15px] poppins "> {user.name}</p>
                    <p className="font-light text-[12px]">{user.email}</p>
                  </div>
                </td>
                <td className="px-4 py-2  poppins_lite">
                  {user.id * getRandomInt(10)+"  Points"}
                </td>
                <td className="px-4 py-2 flex justify-center">
                  <Link to={`/card/${user.id}/`}>
                    <svg className="mb-2 poppins_lite" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
                  </Link>
                </td>
                
              </tr>
             
            );
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default ApiCall;
