const SliderCard = ({ item }) => {
  const {_id,image,tourists_spot_name,location,description} = item;
  return (
    <div className="w-full">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            `url(${image})`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-light">{tourists_spot_name}</h1>
            <p className="mb-5">{description}</p>
            <button className="btn btn-neutral font-light px-10">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
