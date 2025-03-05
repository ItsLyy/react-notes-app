import { Link, useNavigate } from "react-router-dom";
import InputText from "../components/InputText";
import useInput from "../hooks/useInput";
import { useContext, useState } from "react";
import { login } from "../utils/network-data";
import { AuthContext } from "../contexts/AuthContext";

export default function LoginPage() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }

  const [email, setEmail] = useInput();
  const [password, setPassword] = useInput();
  const [loading, setLoading] = useState(false);
  const { setToken } = useContext(AuthContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await login({ email, password });
      setToken(res.data.accessToken);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="login">
      <div className="form-wrapper">
        <h2>Login</h2>
        <form onSubmit={onSubmitHandler}>
          <InputText
            id="email"
            label="Email"
            value={email}
            onChange={setEmail}
          />
          <InputText
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
          />

          <div className="submit__field">
            <button className="btn-primary" type="submit" disabled={loading}>
              Login
            </button>
          </div>
          <span className="form__action">
            Don{"'"}t have an account? <Link to="/register">Register here</Link>
          </span>
        </form>
      </div>
    </section>
  );
}
