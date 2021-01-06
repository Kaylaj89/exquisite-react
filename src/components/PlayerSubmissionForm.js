import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  const [input, setInput] = useState ({
    adj1: '',
    noun1: '',
    adverb: '',
    verb: '',
    adj2: '',
    noun2: '',
  })

  const onNameChange = (event) => {
    const newInput = {
      ...input,
      adj1: input.adj1,
      noun1: input.noun1,
      adverb: input.adverb,
      verb: input.verb,
      adj2: input.adj2,
      noun2: input.noun2,
    }
    setInput(newInput)
  }

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ }</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">
                  
                  <p>The</p>

                  <input
                  name = "adj1"
                  placeholder="adjective"
                  value = {input.adj1}
                  onChange={onNameChange}
                  type="text" />,

                  <input
                  name = "noun1"
                  placeholder="noun"
                  value = {input.noun1}
                  onChange={onNameChange}
                  type="text" />,

                  <input
                  name = "adverb"
                  placeholder="adverb"
                  value = {input.adverb}
                  onChange={onNameChange}
                  type="text" />,

                  <input
                  name = "verb"
                  placeholder="verb"
                  value = {input.verb}
                  onChange={onNameChange}
                  type="text" />  

                  <p>the</p>

                  <input
                  name = "adj2"
                  placeholder="adjective"
                  value = {input.adj2}
                  onChange={onNameChange}
                  type="text" />

                  <input
                  name = "noun2"
                  placeholder="noun"
                  value = {input.noun2}
                  onChange={onNameChange}
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
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
