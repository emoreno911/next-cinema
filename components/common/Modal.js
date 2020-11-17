import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

// https://codepen.io/emanualjade/pen/QgGReP

export default function Modal({ children, clsName = "" }) {
  let modalTarget
  let modalBackdrop

  useEffect(() => {
    modalTarget = document.createElement('div');
    modalBackdrop = document.createElement('div');
    modalTarget.className = 'react-modal';
    modalBackdrop.className = 'react-modal__backdrop';
    document.body.appendChild(modalTarget);
    document.body.appendChild(modalBackdrop);
    _render();

    setTimeout(() => {
      modalTarget.classList.add('react-modal--in');
      modalBackdrop.classList.add('react-modal__backdrop--in');  
    },40)

    // like ComponentWillUnmount
    return () => {
      modalTarget.classList.remove('react-modal--in');
      modalBackdrop.classList.remove('react-modal__backdrop--in');
      setTimeout(() => {
        ReactDOM.unmountComponentAtNode(modalTarget);
        document.body.removeChild(modalTarget);
        document.body.removeChild(modalBackdrop);
      },500)
    }

  }, [])

  useEffect(() => {
    _render()
  }, [children])

  const renderModalDialogue = () => {
    // you could have modal headers in here if desired
    // you could have some default actions like close / primary etc that take callbacks
    return (
      <div className={`react-modal__dialogue ${clsName}`}>
        {children}
      </div>
    )
  }

  const _render = () => {
    ReactDOM.render(
      renderModalDialogue(), 
      modalTarget
    );
  }

  return <noscript />
}