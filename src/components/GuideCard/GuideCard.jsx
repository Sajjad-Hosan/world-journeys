import Swal from "sweetalert2/dist/sweetalert2";
import PropTypes from "prop-types";

const GuideCard = ({ item }) => {
  const {name,image,email,customer_review} = item;
  const handleGuideDetail = () => {
    Swal.fire({
      title: "Processing",
      icon: "warning",
    });
  };
  return (
    <>
      <div
        className="w-[500px] h-full card rounded-xl overflow-hidden"
        onClick={handleGuideDetail}
      >
        <img
          src={image}
          alt="Shoes"
          className="w-full h-[400px] object-cover cursor-grab"
        />
        <h1 className="absolute bottom-4 left-4 bg-neutral text-sm font-light text-white px-8 py-4 rounded-lg">{name}</h1>
      </div>
    </>
  );
};
GuideCard.propTypes = {
  item: PropTypes.object,
};
export default GuideCard;
