import {useNavigate} from "react-router";
import {micro} from "../../router";

export const Home = () => {
  const navigate = useNavigate();

  const CardList = micro.children?.filter(item=>item.handle?.name).map(item=>(
    {
      value: item.path,
      name: item.handle?.name,
    }
  )) || []

  const jump = (url?: string) => {
    url && navigate(url)
  }

  return (
      <div className="w-screen h-screen flex gap-4">
        {CardList.map(({value, name},index)=>(
          <div key={index} className="w-52 h-20 bg-fuchsia-200 cursor-pointer flex justify-center items-center" onClick={()=>jump(value)}>
            {name}
          </div>
        ))}
      </div>
  )
}