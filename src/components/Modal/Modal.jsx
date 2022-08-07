import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalCard, ModalImage } from './Modal.styled';
 

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нажали ESC, нужно закрыть модалку');

      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
      
    }
  };

  render() {
    const { src, alt } = this.props
    return createPortal(
        <Overlay onClick={this.handleBackdropClick}>
            <ModalCard>
              <ModalImage src={src} alt={alt} />
            </ModalCard>
        </Overlay>,
      modalRoot,
    );
  }
}