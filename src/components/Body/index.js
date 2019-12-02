import React from 'react';

import { Container } from './styles';
import { connect } from 'react-redux';

function Body({ background }) {
  return <Container color={background} />;
}

const mapStateToProps = state => ({
  background: state.colors.background,
});

export default connect(mapStateToProps)(Body);
