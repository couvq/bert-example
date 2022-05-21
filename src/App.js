import React from 'react';
import { useRef, useEffect, useState } from 'react';

import * as tf from "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Fragment } from 'react';

const App = () => {

  // setup references and state hook
  const passageRef = useRef(null);
  const questionRef = useRef(null);


  return (
    <div>React App Build Using BERT TensorFlow.js Model</div>
  );
}

export default App;