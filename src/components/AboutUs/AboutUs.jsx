import { Slide, Zoom } from "react-awesome-reveal";
import Swal from "sweetalert2";

const AboutUs = () => {
  const handleButton = () => {
    Swal.fire({
      title: "Processing",
      icon: "warning",
    });
  };
  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      <div className="flex flex-col gap-5 md:flex-1">
        <div className="text-left">
          <Zoom damping={0.1}>
            <h1 className="text-3xl">About Us</h1>
            <p className="text-sm mt-3">
              At [Company Name], we're passionate about curating exceptional
              tours that immerse you in the beauty, culture, and adventure of
              our world. With years of expertise and a dedication to excellence,
              we strive to provide you with more than just a vacation – we offer
              journeys that create lasting memories.Our team of experienced
              guides are not just experts in their fields; they're storytellers,
              historians, and adventurers who are committed to making your
              travel dreams a reality. Whether you're exploring ancient ruins,
              embarking on a thrilling safari, or discovering hidden gems in
              bustling cities, our guides are here to ensure you have an
              enriching and authentic experience every step of the way.
            </p>
          </Zoom>
        </div>
        <div className="flex gap-5 mt-2">
          <Slide damping={0.1}>
            <button onClick={handleButton} className="btn btn-neutral px-12">
              Join Us
            </button>
            <button onClick={handleButton} className="btn btn-neutral px-12">
              Support
            </button>
          </Slide>
        </div>
      </div>
      <div className="md:flex-1">
        <Zoom damping={0.1}>
          <div className="w-full rounded-xl overflow-hidden">
            <img
              src="https://cdn-production.checkfront.com/wp-content/uploads/2022/06/tour-guide-rules.jpg"
              alt=""
            />
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default AboutUs;
