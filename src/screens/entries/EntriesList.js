// import { useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
// import { SavedData } from "../../data/SavedData";
import { useState } from "react";
// import { Form, Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import Screen from '../../components/Screen';

const EntriesList = ({
  entries,
  }) => {

  const [err, setError] = useState("");

  // const handleOnChange = ({ target: { name, value } }) => {
  //   setForm({ ...form, [name]: value });
  // };

  const history = useHistory();

  const handleSaveSubmit = (_) => {
    setError("");
    const submission = { ...form };
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
        {err && <h2>error</h2>}
      </Form>
      <h1>Your entries</h1>
      <label>{form.word}</label>
      <label>{form.definition}</label>
    </>
    </Screen>
  );

};

EntriesList.propTypes = {
  entries: propTypes.array,
};

export default EntriesList;