import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ texto, style }) => {
    return <h1 style={style}>{texto}</h1>;
};

Title.propTypes = {
    texto: PropTypes.string.isRequired,
};

export default Title;
