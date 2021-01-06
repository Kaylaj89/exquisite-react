import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  const [submission, setSubmission] = useState ({
    adj1: '',
    noun1: '',
    adverb: '',
    verb: '',
    adj2: '',
    noun2: '',
  })

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ }</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">
                  
                  <p>The</p>

                  <input
                  name = "adj1"
                  placeholder="adjective"
                  type="text" />,

                  <input
                  name = "noun1"
                  placeholder="noun"
                  type="text" />,

                  <input
                  name = "adverb"
                  placeholder="adverb"
                  type="text" />,

                  <input
                  name = "verb"
                  placeholder="verb"
                  type="text" />  

                  <p>the</p>

                  <input
                  name = "adj2"
                  placeholder="adjective"
                  type="text" />

                  <input
                  name = "noun2"
                  placeholder="noun"
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
