import PropTypes from 'prop-types';
import Entry from './Entry';
import Screen from '../../components/Screen';
import { Card } from "semantic-ui-react";

const EntriesList = ({
  entries,
  }) => {

  // useEffect(() => {
  //   localStorage.setItem("entries", JSON.stringify(SavedData));
  // }, []);
  // const savedEntry = JSON.parse(localStorage.getItem("savedEntry"));


  return (
    <Screen>
    <>
    <Card.Group doubling itemsPerRow={4}>
      {entries.map(
        ({ id, word, definition }) => (
          <Entry
          key={id}
          word={word}
          definition={definition}
          />
        )
      )}
    </Card.Group>
    </>
    </Screen>
  );

};

EntriesList.propTypes = {
  entries: PropTypes.array,
};

export default EntriesList;