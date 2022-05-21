import React from 'react';
import { useRef, useEffect, useState } from 'react';

import * as tf from "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loader from "react-loader-spinner";
import Loader from 'react-loader';
import { Fragment } from 'react';

const App = () => {

  // 2. setup references and state hooks
  const passageRef = useRef(null);
  const questionRef = useRef(null);

  const [answer, setAnswer] = useState();
  const [model, setModel] = useState(null);

  // 3. Load TensorFlow.js model
  const loadModel = async () => {
    const loadedModel = await qna.load();
    setModel(loadedModel);
    console.log('model Loaded');
  }

  useEffect(()=> {
    loadModel();
  }, []);

  //4. Handle Questions
  const answerQuestion = async (e) => {
    if(e.which === 13 && model !== null) {
      console.log('Question Submitted.');
      const passage = passageRef.current.value;
      const question = questionRef.current.value;

      const answers = await model.findAnswers(question, passage);
      setAnswer(answers);
      console.log(answers);
    }
  }


  return (
    <>
      {
        model == null ? // has our model loaded? if not show loader
        <div> 
          Model Loading...
          <Loader></Loader>
        </div>
        :  // if our model HAS loaded
        <Fragment>
          Passage 
          <textarea ref={passageRef} rows="30" cols="100"></textarea>
          Ask a Question 
          <input ref={questionRef} onKeyPress={answerQuestion} size="80"></input>
          Answers 
          {
            answer ? answer.map((ans, idx) => 
              <div><b>Answer {idx + 1} -</b> {ans.text} {ans.score} </div>
            )
            : ""
          }
        </Fragment>
      }
    </>
  );
}

export default App;