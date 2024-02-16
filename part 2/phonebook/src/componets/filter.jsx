
const Filter = (props) => {
    return (
      <form>
        <div>
          filter shown with :{" "}
          <input value={props.search} onChange={props.searcheventhandler} />
        </div>
      </form>
    );
  };
  export default Filter