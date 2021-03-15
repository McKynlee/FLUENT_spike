import React, { useRef } from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {

  // Function to generate random id number to pull new photo from Lorem Picsum:
  // I know there are at least 1,000 but less than 1,100 photo ID's available.
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  console.log('getRandomInt:', getRandomInt(1000));

  // Capture random Int
  let randomInt = getRandomInt(1000);

  // Incorporate random Int as photo ID to be used in JSX:
  // Send this to db as picture_url
  let imageSRC = `https://picsum.photos/id/${randomInt}/200/300`

  //////////////////////////////////////////////
  // Begin text to speech code:

  // useRef hook returns a mutable object with .current property,
  // refs are React's equivalent to the vanillaJS document.querySelector,
  // useRef allows us to keep non-state per-component info around, like the text we want spoken:
  const textInput = useRef(null);


  // Info from Web API for mexican spanish female voice:
  // let paulinasVoice = { id: 48, voiceURI: "Paulina", name: "Paulina", lang: "es-MX", localService: true };

  // When speak button is clicked, capture text in input area
  // inside inputToSpeak variable:
  const onButtonClick = () => {
    console.log('on button click, inputToSpeak.current:', textInput.current.value);

    // .current points to the mounted text input element
    let inputToSpeak = textInput.current.value;

    let msg = new SpeechSynthesisUtterance();
    console.log('msg:', msg);

    // LIST OF AVAILABLE VOICES:
    // speechSynthesis.getVoices().forEach(function (voice) {
    //   console.log('voice:', voice.name, voice.default ? voice.default : '');
    // });

    // Specify what voice you want speaking the message:
    // msg.voice = speechSynthesis.getVoices().filter(function (voice) { return voice.name == 'Paulina'; })[0];
    msg.lang = "es-MX";
    msg.rate = 0.8;
    msg.text = inputToSpeak;
    speechSynthesis.speak(msg);
  }


  return (
    <div className="container">
      <section>
        <h1>Random Photo each time page loads:</h1>
        <img src={imageSRC}
          alt="random image for learner to describe in foreign language" />
      </section>

      <section>
        <h1>Simple Text To Speech</h1>
        {/* <p id="warning">Sorry, your browser does not support the Web Speech API.</p> */}
        {/* <input ref={textInput} type="text" /> */}
        <label htmlFor="txtFld">
          <textarea id="txtFld" ref={textInput}
          >I love the sound of my computer-generated voice.</textarea>
          <br />
        Type text above. Then click the Speak button.</label>
        <button type="button" id="speakBtn"
          onClick={onButtonClick}
        >Speak (Focus the input)</button>
        <p>Note: For best results on a Mac, use the latest version of Chrome, Safari, or FireFox. On Windows, use Chrome.</p>
      </section>
    </div>
  );
}

export default AboutPage;
