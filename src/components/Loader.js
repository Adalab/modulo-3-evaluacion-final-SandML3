import '../styles/Loader.scss'


const Loading = (props) => {

return <div className='loader__container'>
    <div className='lds-ellipsis'>
        <img src='../images/loader.gif' className='owl' alt='owl with a letter animation' title='Owl with a letter'/>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>

};

export default Loading;