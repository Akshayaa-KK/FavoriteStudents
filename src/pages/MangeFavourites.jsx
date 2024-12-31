import { StudentContext } from './StudentsListProvider.jsx';
import { useContext } from 'react';


export default function ManageFavourites(){

    const {students,favorites,setfavorites,disabledButtons,setDisabledButtons}=useContext(StudentContext)

    function removeOnclick(removeindex,removedstudent)
    {
        let removeFavorite=favorites.filter((item,index)=>{
            if(index==removeindex)
            {
                return false
            }
            else{
                return true
            }
        }
      
    )
    setfavorites(removeFavorite)
    
    let studentsIndex=students.indexOf(removedstudent)

    setDisabledButtons((prevDisabled) =>
        prevDisabled.map((disabled, i) => (i === studentsIndex ? false : disabled))
       );
    
       
    }

    return (
        <>
            <div className="my-1">
                {favorites.map((student, index) => (
                    <div className="flex justify-around gap-10" key={index}>
                        <p style={{ marginTop: '1%' }}> 
                            {index + 1}. {student}
                        </p>
                        <button
                            style={{
                                backgroundColor:"red",
                                padding: '4px',
                                color: 'white',
                                borderRadius: '10%',
                                marginTop: '1%',
                                cursor:'pointer',
                                
                            }}
                           onClick={()=>removeOnclick(index,student)}
                        >
                           Remove
                        </button>
                    </div>
                ))}
            </div>
        </>
    );

}