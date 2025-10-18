export default function Button({ reqType,setReqType,buttonText }) {
     return (
          <button
          className={ buttonText === reqType ? "selected": null}          type="button"
          onClick={()=>setReqType(buttonText)}
          >
               {buttonText}
          </button>
     )

}