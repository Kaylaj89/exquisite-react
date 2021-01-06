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

  const onInputChange = (event) => {
    const newInputValues = {
      ...input,
    }
    const {name, value} = event.target;
    
    newInputValues[name] = value
    setInput(newInputValues)
  }
  
  const onFormSubmitLine = (event) => {
    event.preventDefault();
    console.log('Submitting form')

    if (
      input.adj1 !== '' &&
      input.noun1 !== '' &&
      input.adverb !== '' &&
      input.verb !== '' &&
      input.adj2 !== '' &&
      input.noun2 !== ''
    ) {




      setInput({
        adj1: '',
        noun1: '',
        adverb: '',
        verb: '',
        adj2: '',
        noun2: '',
      })
    }

  }
  // const track_player = () => {
  //   return (

  //   )

  // }

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ }</h3>

      <form 
        onSubmit={onFormSubmitLine}
        className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">
                  
                  <p>The</p>

                  <input
                  name = "adj1"
                  placeholder="adjective"
                  value = {input.adj1}
                  onChange={onInputChange}
                  type="text" />,

                  <input
                  name = "noun1"
                  placeholder="noun"
                  value = {input.noun1}
                  onChange={onInputChange}
                  type="text" />,

                  <input
                  name = "adverb"
                  placeholder="adverb"
                  value = {input.adverb}
                  onChange={onInputChange}
                  type="text" />,

                  <input
                  name = "verb"
                  placeholder="verb"
                  value = {input.verb}
                  onChange={onInputChange}
                  type="text" />  

                  <p>the</p>

                  <input
                  name = "adj2"
                  placeholder="adjective"
                  value = {input.adj2}
                  onChange={onInputChange}
                  type="text" />

                  <input
                  name = "noun2"
                  placeholder="noun"
                  value = {input.noun2}
                  onChange={onInputChange}
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
