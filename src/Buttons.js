import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Buttons({ onClick, isNavVisible }){
  
  const iconStyle = {
    marginTop: '2px',
  }
  return (
    <div className="btns">
      <button onClick={onClick}>
      {isNavVisible ? (
        <>
        <FontAwesomeIcon icon={faXmark} style={iconStyle} />
        &nbsp;&nbsp;Close Menu
        </>
        ) : (
        <>
                <FontAwesomeIcon icon={faBars} style={iconStyle} />
                &nbsp;&nbsp;Open Menu
                </>
        )}
      </button>
    </div> 
  );
}
export default Buttons;


// const history = useHistory();
//   const handleGoBack = () => {
//     history.goBack();
//   };

//         <button className='back' onClick={handleGoBack}><FontAwesomeIcon icon={faBars} /></button>
