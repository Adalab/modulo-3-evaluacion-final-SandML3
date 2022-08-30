import '../styles/Loader.scss'
import loader from '../images/loader.gif'


const Loading = (props) => {

return <div className='loader__container'>
    <div className='lds-ellipsis'>
        <img src={loader} className='owl' alt='owl with a letter animation' title='Owl with a letter'/>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>

};

export default Loading;