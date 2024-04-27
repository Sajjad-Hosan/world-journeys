const CountryCard = () => {
  return (
    <>
      <div className="card w-full shadow-xl overflow-hidden relative">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="flex justify-between items-center absolute -bottom-2 bg-neutral text-white p-5 rounded-3xl w-full">
            <h2 className="card-title">Shoes!</h2>
            <button className="btn btn-secondary px-8">More Card</button>
        </div>
      </div>
    </>
  );
};

export default CountryCard;
