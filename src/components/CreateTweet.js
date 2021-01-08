import React , {useState} from 'react';
import {v4 as uuidv4} from 'uuid'


const CreateTweet = ({tweets,setTextInput,textInput,setTweets}) => {

    

    const  userInputHandler = (e) => {
      setTextInput(e.target.value)
  }

  const userInputSubmitHandler = (e) => {
      e.preventDefault();
      setTweets([...tweets, {id :uuidv4() ,message: textInput}]);
      setTextInput('')
  }


    return(
    <form onSubmit={userInputSubmitHandler}>
        <textarea value={textInput} onChange={ userInputHandler} name="" id="" cols="50" rows="5"></textarea>
        <button>Submit</button>
    </form>
    )

}


export default CreateTweet;