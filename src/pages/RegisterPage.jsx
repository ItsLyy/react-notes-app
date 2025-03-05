import { Link, useNavigate } from "react-router-dom";
import InputText from "../components/InputText";
import useInput from "../hooks/useInput";
import { register } from "../utils/network-data";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function RegisterPage() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }

  const [username, setUsername] = useInput();
  const [email, setEmail] = useInput();
  const [password, setPassword] = useInput();
  const [passwordConfirmation, setPasswordConfirmation] = useInput();
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      return alert("Your password incorrect");
    }

    setLoading(true);
    try {
      const res = await register({ name: username, email, password });
      if (!res.error) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="register">
      <div className="form-wrapper">
        <h2>Register</h2>
        <form onSubmit={onSubmitHandler}>
          <InputText
            id="username"
            label="Username"
            autoComplete="username"
            value={username}
            onChange={setUsername}
          />
          <InputText
            id="email"
            label="Email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={setEmail}
          />
          <InputText
            id="password"
            label="Password"
            type="password"
            autoComplete="password"
            value={password}
            onChange={setPassword}
          />
          <InputText
            id="password-confirmation"
            label="Password Confirmation"
            type="password"
            autoComplete="password"
            value={passwordConfirmation}
            onChange={setPasswordConfirmation}
          />

          <div className="submit__field">
            <button className="btn-primary" type="submit" disabled={loading}>
              Register
            </button>
          </div>
          <span className="form__action">
            Already have an account? <Link to="/login">Login here</Link>
          </span>
        </form>
      </div>
    </section>
  );
}
