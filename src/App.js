import React from 'react';
import { useRef, useEffect, useState } from 'react';

import * as tf from "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Fragment } from 'react';

const App = () => {

  // 2. setup references and state hooks
  const passageRef = useRef(null);
  const questionRef = useRef(null);

  // 3. Load TensorFlow.js model

  //4. Handle Questions


  return (
    <div>React App Build Using BERT TensorFlow.js Model</div>
  );
}

export default App;