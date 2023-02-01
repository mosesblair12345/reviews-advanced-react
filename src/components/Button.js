import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
const Button = ({ classname, setIndex, Index }) => {
  if (classname === "prev") {
    return (
      <button className="prev" onClick={() => setIndex(Index - 1)}>
        <FiChevronLeft />
      </button>
    );
  }
  if (classname === "next") {
    return (
      <button className="next" onClick={() => setIndex(Index + 1)}>
        <FiChevronRight />
      </button>
    );
  }
};
export default Button;
