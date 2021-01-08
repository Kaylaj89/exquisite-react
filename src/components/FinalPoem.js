import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {
  if (props.isSubmitted) {
    return (
      <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
      {props.submissions.map((submission, index) => (
        <p key={index}>{submission}</p>
      ))
      }
      </section>
      </div>
    )
  }  else {
  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>

      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input 
          type="button" 
          value="We are finished: Reveal the Poem" 
          onClick={props.revealPoem} 
          className="FinalPoem__reveal-btn" />
      </div>
    </div>
    );
  }

};

FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
