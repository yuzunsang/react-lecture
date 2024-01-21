export default function UserInput({ onChangeInput }) {
  return (
    <section id="user-input">
      <form className="input-group">
        <p>
          <label>initial investment</label>
          <input
            type="number"
            required
            onChange={(event) => onChangeInput(event, "initialInvestment")}
          />
        </p>
        <p>
          <label>annual investment</label>
          <input
            type="number"
            required
            onChange={(event) => onChangeInput(event, "annualInvestment")}
          />
        </p>
      </form>
      <form className="input-group">
        <p>
          <label>expected return</label>
          <input
            type="number"
            required
            onChange={(event) => onChangeInput(event, "expectedReturn")}
          />
        </p>
        <p>
          <label>duration</label>
          <input
            type="number"
            required
            onChange={(event) => onChangeInput(event, "duration")}
          />
        </p>
      </form>
    </section>
  );
}
