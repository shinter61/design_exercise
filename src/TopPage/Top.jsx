import React from 'react';
import { Link } from 'react-router-dom';

export default class Top extends React.Component {
  render() {
    return (
      <ul>
        <li><Link to='/paspol'>模写ページその１ヘ</Link></li>
      </ul>
    );
  }
}