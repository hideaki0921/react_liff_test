import logo from './logo.svg';
import './App.css';
import liff from '@line/liff'; 
import React from 'react';

function App() {

  const sendMessage = () => {
    liff.init({liffId: process.env.REACT_APP_LIFF_ID as string}) // LIFF IDをセットする
      .then(() => {
        if (!liff.isLoggedIn()) {
          liff.login({}) // ログインしていなければ最初にログインする
        } else if (liff.isInClient()) { // LIFFので動いているのであれば
          liff.sendMessages([{ // メッセージを送信する
            'type': 'text',
            'text': "You've successfully sent a message! Hooray!"
          }]).then(function() {
            window.alert('Message sent');
          }).catch(function(error) {
            window.alert('Error sending message: ' + error);
          });
        }
      })
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
