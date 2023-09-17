// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

var pane = document.getElementById('blank');
const transcripts = 
['okay', 'okay', 'okay', ' I hope', ' I hope', ' I hope', ' I hope', ' I hope', 
' I hope', ' I hope', ' I hope', ' I hope', ' I hope', ' I hope this', 
' I hope this is', ' I hope this is working', ' I hope this is', 
' I hope this is working', ' I hope this is working', ' I hope this is working', 
' I hope this is working', ' I hope this is working', ' I hope this is working good',
 ' I hope this is working good to', ' I hope this is working good to see', 
 ' I hope this is working good to see that', ' exit', ' exit', 'exit', ""];

speakers = {'SPEAKER_00': ' I hope this is working good to see that', 
            'SPEAKER_01': 'exit'}

values = [' I hope this is working good to see that', 'exit'];
speakers = ['Sanya: ', 'Aarham: ', ""];
speaker = speakers[0];
colors = ['blue', 'red'];

let doc = "";

let index = 0;
let i = 0;

setInterval(nextTranscript, 500);

function nextTranscript() {
  if (index < transcripts.length) {
    pane.style.color = colors[i];
    let text = doc + '<span>' + speaker + transcripts[index] + '</span>';
    if (transcripts[index] == values[i]){
      doc = doc + "<span style=\"color: " + colors[i] + "\">" + speaker + transcripts[index] + "</span> <br> <br>";
      i++;
      speaker = speakers[i];
    }
    console.log(text);
    pane.innerHTML = text;
    index++;
  }
}

