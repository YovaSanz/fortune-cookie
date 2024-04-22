import { useState } from 'react';

import quotes from './data/phrases.json';
import photos from './data/bgPhotos.json';

import getRandomNumber from './utils/getRandomNumber';

import { CardPhrase, Button } from './components';


function App() {
  
  const indexQuote = getRandomNumber( quotes.length );
  const indexPhoto = getRandomNumber( photos.length );
  
  const [ phraseSelected, setPhraseSelected ] = useState( quotes[ indexQuote ] );
  const [ bgSelect, setBgSelect ] = useState( photos[ indexPhoto ] );
  const [ isFlipped, setIsFlipped ] = useState( false );
  
  
  const changePhrase = () => {
    
    const newIndexQuote = getRandomNumber( quotes.length );
    const newIndexPhoto = getRandomNumber( photos.length );

    if ( phraseSelected.phrase === quotes[ newIndexQuote ].phrase && bgSelect == photos[ newIndexPhoto ] ) {
      
      changePhrase()
      return
    }
    
    setIsFlipped(true);
    
    setTimeout(() => {
      
      
      setIsFlipped(false);
      setBgSelect( photos[ newIndexPhoto ] );
      setPhraseSelected( quotes[ newIndexQuote ] );

    }, 1000);

  };

  const objStyle = {
    backgroundImage: `url(/img/fondo${ bgSelect }.jpg)`,
  };

  return (
    <div className='min-h-screen flex flex-col gap-10 justify-center items-center bg-cover bg-center ' style={ objStyle }>
      <h1 className="absolute top-20 text-3xl uppercase font-bold text-center"> Galleta de la fortuna </h1>

      <article className={`max-w-md p-6 bg__card rounded-tr-xl rounded-bl-xl shadow-xl shadow-cyan-500/50 ${ isFlipped ? 'animate-flip-horizontal' : ''} `} >
  
        <CardPhrase 
          phraseSelected={ phraseSelected } />

      </article>

      <Button
        changePhrase={ changePhrase }
        isFlipped= {isFlipped}/>

    </div>
  )
}

export default App
