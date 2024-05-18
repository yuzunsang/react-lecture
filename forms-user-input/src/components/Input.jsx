// id와 label, error를 받아주고, 나머지 속성은 props로 받아준다
export default function Input({ label, id, error, ...props }) {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
      <div className="control-error">{error}</div>
    </div>
  );
}
