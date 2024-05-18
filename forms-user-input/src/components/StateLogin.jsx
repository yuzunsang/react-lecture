import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  const {
    value: emailValue,
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputBlur: handlePasswordBlur,
    handleInputChange: handlePasswordChange,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6) && isNotEmpty(value));

  function handleSubmit(event) {
    event.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }

    console.log({ emailValue, passwordValue });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          error={emailHasError && <p>Please enter valid email address.</p>}
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
        />

        <Input
          label="Password"
          id="password"
          error={
            passwordHasError && (
              <p>Please enter password that overs character 6.</p>
            )
          }
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
