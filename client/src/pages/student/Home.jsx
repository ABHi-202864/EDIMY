import Companies from "../../components/student/Companies";
import CoursesSection from "../../components/student/CoursesSection";
import Hero from "../../components/student/Hero";
import TestimonialsSection from "../../components/student/TestimonialsSection";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center space-y-7 text-center">
        <Hero />
        <Companies />
        <CoursesSection />
        <TestimonialsSection />
      </div>
    </>
  );
};

export default Home;
