export default function UserInput() {
  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    <div id="user-input">
      <form className="input-group">
        <div>
          <label>Initial investment</label>
          <input type="number" />
        </div>
        <div>
          <label>Annual investment</label>
          <input type="number" />
        </div>
      </form>
      <form className="input-group">
        <div>
          <label>Expected return</label>
          <input type="number" />
        </div>
        <div>
          <label>Duration</label>
          <input type="number" />
        </div>
      </form>
    </div>
  );
}
