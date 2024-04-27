import ListItem from "../../components/ListItem/ListItem";

const MyLists = () => {
  return (
    <div>
      <div className="overflow-x-auto px-10 py-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Tourist Spot Name</th>
              <th>Location Color</th>
              <th>Country</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
        <ListItem/>
        <ListItem/>
        <ListItem/>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyLists;
