interface NameProps {
    name:string,
}
const Name : React.FC<NameProps>  = ({
name
}) =>{
    return <h1 className=" text-center font-bold text-3xl mt-10">
    {name}
  </h1>
}
export default Name ;