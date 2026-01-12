import Companies from "../../components/student/Companies";
import CoursesSection from "../../components/student/CoursesSection";
import Hero from "../../components/student/Hero";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center space-y-7 text-center">
        <Hero />
        <Companies />
        <CoursesSection />
      </div>
    </>
  );
};

export default Home;
