import React, {useEffect, useState} from 'react';

const srcText = [
  'Si mê em!!!!!',
  'Hôm nay em rất là xinh đẹp!!!!!',
  'Làm người yêu của anh nhé!!!!!',
  'I love you chiu chiu!!!!!',
  'Mê em quá trời lun!!!!!',
  'Hãy ôm anh thật nhiều nhé!!!!!'
];

function randomText() {
  return srcText[Math.floor(Math.random() * srcText.length)];
}
export default function Typo() {
  const [text, setText] = useState(randomText());
  const [typing, setTyping] = useState('');
  useEffect(() => {
    setTimeout(() => {
      for (let i = 0; i <= text.length; i++) {
        setTimeout(() => {
          let result = text.slice(0, i);
          setTyping(result);
          if (i === text.length) {
            setText((text) => randomText());
          }
        }, 98 * i);
      }
    }, text.length * 98);
  }, [text]);
  return (
    <h2 className={'typing pointer'} id={'typing'}>
      {typing}
    </h2>
  );
}
