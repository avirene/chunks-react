import { useState } from "react";
import md5 from "md5";
import { Form, Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const [err, setError] = useState("");

  const handleOnChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const history = useHistory();

  const handleLoginSubmit = (_) => {
    setError("");
    const submission = {
      ...form,
      password: md5(form.password)
    };
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find((item) => {
      return item.username === submission.username;
    });
    const loginSuccessful = user
      ? user.password === submission.password
        ? true
        : false
      : false;
    if (loginSuccessful) {
      localStorage.setItem("loggedInUser", user.username);
      history.push("/profile");
    } else {
      setError("Login unsuccessful");
    }
  };

  console.log("Login unsuccessful:", err);

  return (
    <>
      <h1>Login</h1>
      <Form onSubmit={handleLoginSubmit}>
        <Form.Field>
          <label>Username</label>
          <input
            name="username"
            placeholder="Username"
            type="text"
            onChange={handleOnChange}
            value={form.username}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleOnChange}
            value={form.password}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>

        {err && <h2>error</h2>}
      </Form>
    </>
  );
};

export default Login;
