// import { useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
// import { SavedData } from "../../data/SavedData";
import { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import Screen from '../../components/Screen';

const Profile = () => {
  const [form, setForm] = useState({
    word: "",
    definition: ""
  });

  const handleOnChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const history = useHistory();

  const handleSaveSubmit = (_) => {
    const submission = { ...form };
    const entries = localStorage.setItem("savedEntry");
    history.push("/entry");
  };

  // useEffect(() => {
  //   localStorage.setItem("entries", JSON.stringify(SavedData));
  // }, []);
  // const savedEntry = JSON.parse(localStorage.getItem("savedEntry"));


  return (
    <Screen>
    <>
      <h1>New Entry</h1>
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
      <h1>Your entries</h1>
      <label>{form.word}</label>
      <label>{form.definition}</label>
    </>
    </Screen>
  );

};

export default Profile;