import { BsBoxArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
const BackBtn = () => {
  return (
    <Link to={"/testtttt/"}>
      <div className="backBtncontainer">
        <BsBoxArrowLeft className="backBtn"></BsBoxArrowLeft>
      </div>
    </Link>
  );
};

export default BackBtn;
