import React, { Component } from 'react';

import { Container } from './styles';
import { bindActionCreators } from 'redux';
import ColorButton from '../ColorButton';
import { connect } from 'react-redux';

import { clickColor } from '../../store/colors/actions';

const colors = [
  {
    name: 'red',
    color: '#f00',
    textColor: '#fff',
  },
  {
    name: 'black',
    color: '#000',
    textColor: '#fff',
  },
  {
    name: 'white',
    color: '#fff',
    textColor: '#000',
  },
  {
    name: 'green',
    color: '#0f0',
    textColor: '#000',
  },
  {
    name: 'blue',
    color: '#00f',
    textColor: '#fff',
  },
  {
    name: 'yellow',
    color: '#ff0',
    textColor: '#000',
  },
];

class Header extends Component {
  onClickColor = color => this.props.clickColor(color.color);

  render() {
    return (
      <Container color={this.props.background}>
        {colors.map(color => (
          <ColorButton
            key={color.name}
            onClick={() => this.onClickColor(color)}
            color={color}
          >
            {color.name}
          </ColorButton>
        ))}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  background: state.colors.background,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      clickColor,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Header);
