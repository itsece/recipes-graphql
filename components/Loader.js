import ClipLoader from "react-spinners/ClipLoader";

export default function Loader() {
  return (
    <div className="loader">
      <ClipLoader color={'#000'} loading={true} size={50} />
    </div>
  )
}