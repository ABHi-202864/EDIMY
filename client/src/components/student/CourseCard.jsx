import { useContext } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const CourseCard = ({ course }) => {
  const { currency } = useContext(AppContext);

  return (
    <>
      <Link
        to={"/course/" + course._id}
        onClick={() => scrollTo(0, 0)}
        className="border border-gray-500/30 pb-6 overflow-hidden rounded-lg"
      >
        <img className="w-full" src={course.courseThumbnail} alt="" />
        <div>
          <h3>{course.chapterTitle}</h3>
          <p>{course.educator.name}</p>
          <div>
            <p>4.5</p>
            <div>
              {[...Array(5)].map((_, i) => (
                <img key={i} src={assets.star} alt="" />
              ))}
            </div>
            <p>22</p>
          </div>
          <p>
            {currency}
            {(course.coursePrice - (course.discount * course.coursePrice) / 100).toFixed(2)}
          </p>
        </div>
      </Link>
    </>
  );
};

export default CourseCard;
