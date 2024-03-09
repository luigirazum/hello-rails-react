import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { isLoading } from '../redux/greetings/greetingsSelectors';

const Greeting = ({ message }) => {
  const loading = useSelector(isLoading);

  return (
    <>
      <h2>Greeting</h2>
      <p>
        <strong>Message: </strong>
        { loading
          ? <em>loading...</em>
          : message }
      </p>
    </>
  );
};

Greeting.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Greeting;
