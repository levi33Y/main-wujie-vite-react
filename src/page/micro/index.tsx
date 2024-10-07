import {Outlet, useNavigate} from "react-router";

export const Micro = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen">
      <div className="h-20 w-full bg-fuchsia-200 flex">
        <div className="cursor-pointer" onClick={()=>{navigate("/")}}>black</div>
      </div>
      <div className="h-[calc(100vh-5rem)] w-screen overflow-auto">
        <Outlet/>
      </div>
    </div>
  )
}