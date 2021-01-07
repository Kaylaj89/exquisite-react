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

  console.log(props)
  const onInputChange = (event) => {
    const newInputValues = {
      ...input,
    }
    const {name, value} = event.target;
    
    newInputValues[name] = value
    setInput(newInputValues);
  }

  
  const onFormSubmit = (event) => {
    event.preventDefault();

    const poemData = props.fields.map(field => {
      if (field.key) {
        return input[field.key];
      } else {
        return field;
      }
    }).join(' ');
  
    props.sendSubmission(onFormSubmit)


    // if (
    //   input.adj1 !== '' &&
    //   input.noun1 !== '' &&
    //   input.adverb !== '' &&
    //   input.verb !== '' &&
    //   input.adj2 !== '' &&
    //   input.noun2 !== ''
    // ) {

     
      // sendSubmission(input.split(",")
      

      setInput({
        adj1: '',
        noun1: '',
        adverb: '',
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
                  key = "adj1"
                  placeholder="adjective1"
                  value = {input.adj1}
                  onChange={onInputChange}
                  type="text" />,

                  <input
                  name = "noun1"
                  key = "noun1"
                  placeholder="noun1"
                  value = {input.noun1}
                  onChange={onInputChange}
                  type="text" />,

                  <input
                  name = "adverb"
                  key = "adverb"
                  placeholder="adverb1"
                  value = {input.adverb}
                  onChange={onInputChange}
                  type="text" />,

                  <input
                  name = "verb"
                  key = "verb"
                  placeholder="verb1"
                  value = {input.verb}
                  onChange={onInputChange}
                  type="text" />  

                  <p>the</p>

                  <input
                  name = "adj2"
                  key = "adj2"
                  placeholder="adjective 2"
                  value = {input.adj2}
                  onChange={onInputChange}
                  type="text" />

                  <input
                  name = "noun2"
                  key = "noun2"
                  placeholder="noun 2"
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
  input: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
