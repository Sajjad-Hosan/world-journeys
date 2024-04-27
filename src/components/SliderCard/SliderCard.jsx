const SliderCard = ({ data }) => {
  return (
    <div className="w-full">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            `url(${data || "https://swiperjs.com/demos/images/nature-3.jpg"})`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-light">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-neutral font-light px-10">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
