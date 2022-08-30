import '../styles/Header.scss';


const  Header = (props) => {
    return <header className='header'>
        <h1 className='header__title'>Harry Potter</h1>
        <p className='header__paragraph'>Sabemos que Hermione haría esto con un golpe de varita.</p>
        <p className='header__paragraph'> Nosotros, los <span className='cursive'>muggles</span>, no tenemos la magia de nuestro lado, pero sí tenemos <span className='cursive'>React</span>. Por eso, en vez de con un golpe de varita, un golpe de teclado nos ha bastado para traerte esta <span className='cursive'>Pokédex</span> de los personajes de Harry Potter.</p>
        <p className='header__paragraph'>¡Que la disfrutes!</p>
      </header>
};


export default Header;