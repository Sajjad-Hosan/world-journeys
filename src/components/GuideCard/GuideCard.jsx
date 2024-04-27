import Swal from "sweetalert2/dist/sweetalert2";

const GuideCard = () => {
  const handleGuideDetail = () => {
    Swal.fire({
      title: "Processing",
      icon: "warning",
    });
  };
  return (
    <>
      <div className="w-full h-96 card" onClick={handleGuideDetail}>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
        <h1 className="absolute bottom-2 left-2 bg-neutral text-xs font-light text-white px-8 py-2 rounded-lg">
          Jone Deo
        </h1>
      </div>
    </>
  );
};

export default GuideCard;
