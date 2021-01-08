import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  const [entry, setEntry] = useState ({
    
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    adj2: '',
    noun2: '',
  })

  const onEntryChange = (event) => {
    const newEntryValues = {
      ...entry,
    }
    const {name, value} = event.target;
    
    newEntryValues[name] = value
    setEntry(newEntryValues);
  }

  
  const onFormSubmit = (event) => {
    event.preventDefault();

    const poemData = props.fields.map((field) => {
      if (field.key) {
        return entry[field.key];
      } else {
        return field;
      }
    }).join(' ');
    
    console.log(`here you go: ${poemData}`)
    props.sendSubmission(poemData)


    // if (
    //   input.adj1 !== '' &&
    //   input.noun1 !== '' &&
    //   input.adverb !== '' &&
    //   input.verb !== '' &&
    //   input.adj2 !== '' &&
    //   input.noun2 !== ''
    // ) {

     
      // sendSubmission(input.split(",")
      

      setEntry({
        adj1: '',
        noun1: '',
        adv: '',
        verb: '',
        adj2: '',
        noun2: '',
      });
    }
  

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.index }</h3>

      <form 
        className="PlayerSubmissionForm__form" onSubmit={onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">
                  
                  <p>The</p>

                  <input
                  name = "adj1"
                  // key = "adj1"
                  placeholder="adjective1"
                  value = {entry.adj1}
                  onChange={onEntryChange}
                  data-testid='adj1'
                  type="text" />,

                  <input
                  name = "noun1"
                  // key = "noun1"
                  placeholder="noun1"
                  value = {entry.noun1}
                  onChange={onEntryChange}
                  data-testid='noun1'
                  type="text" />,

                  <input
                  name = "adv"
                  // key = "adv"
                  placeholder="adverb1"
                  value = {entry.adv}
                  onChange={onEntryChange}
                  data-testid='adv'
                  type="text" />,

                  <input
                  name = "verb"
                  // key = "verb"
                  placeholder="verb1"
                  value = {entry.verb}
                  onChange={onEntryChange}
                  data-testid='verb'
                  type="text" />  

                  <p>the</p>

                  <input
                  name = "adj2"
                  // key = "adj2"
                  placeholder="adjective2"
                  value = {entry.adj2}
                  onChange={onEntryChange}
                  data-testid='adj2'
                  type="text" />

                  <input
                  name = "noun2"
                  // key = "noun2"
                  placeholder="noun2"
                  value = {entry.noun2}
                  onChange={onEntryChange}
                  data-testid='noun2'
                  type="text" />

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  input: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
