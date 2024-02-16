const PersonForm = (props) => {
    return (
      <form onSubmit={props.addPerson}>
        <div>
          name :
          <input value={props.newName} onChange={props.personeventhandler} />
        </div>
        <div>
          phone:{" "}
          <input value={props.newphone} onChange={props.phoneeventhandler} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    );
  };

  export default PersonForm;