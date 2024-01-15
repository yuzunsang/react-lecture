export default function UserInput({ onChangeValue }) {
  function handleChange(event) {
    onChangeValue(event.target.value);
  }

  return (
    <section id="user-input">
      <form className="input-group">
        <div>
          <label>Initial Investment</label>
          <input type="number" required onChange={handleChange} />
        </div>
        <div>
          <label>Annual Investment</label>
          <input type="number" required />
        </div>
      </form>
      <form className="input-group">
        <div>
          <label>Expected Return</label>
          <input type="number" required />
        </div>
        <div>
          <label>Duration</label>
          <input type="number" required />
        </div>
      </form>
    </section>
  );
}
