import PropTypes from 'prop-types';
import React, { Component } from 'react';
import clipboardCopy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.png';

export default class ShareButton extends Component {
  constructor() {
    super();

    this.state = {
      copied: false,
    };
  }

   copyToClipBoard = () => {
     const { url } = this.props;
     clipboardCopy(`http://localhost:3000${url}`);
     this.setState({ copied: true });
   };

   render() {
     const { copied } = this.state;
     return (
       <>
           {copied && (<div className='spam'><span >Link copied!</span></div>)}
         <button
           type="button"
           data-testid="share-btn"
           onClick={ () => this.copyToClipBoard() }
         >
           <img src={ shareIcon } alt="Button Share" />
         </button>
       </>
     );
   }
}

ShareButton.propTypes = {
  url: PropTypes.string,
}.isRequired;
