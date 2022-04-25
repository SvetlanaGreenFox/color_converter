import React from 'react';
import './style.css';
import FeedBack from './components/FeedBack.js';
import TextInputWithFocusButton from './components/UseRef.js';
import ColorConverter from './components/ColorConverter.js';

export default function App() {
  return (
    <div className="wrapper">
      <ColorConverter />
    </div>
  )
}
