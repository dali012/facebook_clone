import React from 'react';
import './Story.css';
import { Avatar } from '@material-ui/core';

function Story({image, profileSrc, title}) {
  var divStyle = {
    backgroundImage: 'url(' + image + ')'
  };

  return (
    <div style={divStyle} className="story">
      <Avatar className="story__avatar" src={ profileSrc } />
      <h4>{ title }</h4>
    </div>
  );
}

export default Story;
