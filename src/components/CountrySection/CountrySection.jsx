import CountryCard from "../CountryCard/CountryCard";

const CountrySection = () => {
  return (
    <div className="flex flex-col gap-5 mt-24">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold">Country Section</h1>
        <p className="text-md mt-3 font-semibold font-montserrat">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum possimus
          culpa repellendus temporibus laboriosam quidem quod natus nostrum
          quisquam quos. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Non deleniti consectetur fugiat consequatur minima debitis aut
          quia eaque, ad aspernatur quis officiis numquam impedit omnis quos
          odit quo necessitatibus sed.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 py-5">
        <CountryCard />
        <CountryCard />
      </div>
    </div>
  );
};

export default CountrySection;
