// import { useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
// import { LoginData } from "../../data/LoginData";
import { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const [form, setForm] = useState({
    word: "",
    definition: "",
    example: ""
  });

  const [err, setError] = useState("");

  const handleOnChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const history = useHistory();

  const handleSaveSubmit = (_) => {
    setError("");
    const submission = {
      ...form
    };
    const entries = JSON.parse(localStorage.getItem("entries"));
    const entry = entries.find((item) => {
      return item.word === submission.word;
    });

  const submitSuccessful = entry
    ? entry.definition === submission.definition
      ? true
      : false
    : false;
  if (submitSuccessful) {
    localStorage.setItem("savedEntry", entry.word);
    history.push("/profile");
  } else {
    setError("Entry not saved");
  }
  // useEffect(() => {
  //   localStorage.setItem("users", JSON.stringify(LoginData));
  // }, []);
  // const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <>
      <h1>Your entries</h1>
      <Form onSubmit={handleSaveSubmit}>
        <Form.Field>
          <label>Word</label>
          <input
            name="word"
            placeholder="Please type in your word"
            type="text"
            onChange={handleOnChange}
            value={form.word}
          />
        </Form.Field>
        <Form.Field>
          <label>Definition</label>
          <input
            name="definition"
            type="text"
            placeholder="Please give a definition"
            onChange={handleOnChange}
            value={form.definition}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}

};

export default Profile;

