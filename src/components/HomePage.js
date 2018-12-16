import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';

//Style Import 
import '../App.css';
import styles from '../Style';

class HomePage extends Component {
  render() {

    return (
       <div>
          Learn React
       </div>
    );
  }
}

export default compose(withStyles(styles))(HomePage);