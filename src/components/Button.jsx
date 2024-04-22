
export const Button = ( { changePhrase, isFlipped } ) => {

    return(
        <button 
            className={`btn__primary ${ isFlipped ? 'pointer-events-none bg-slate-500' : ''}`}
            onClick={ changePhrase }>
            Ver otra
        </button>
    )

}