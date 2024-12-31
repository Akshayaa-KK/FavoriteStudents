import { StudentContext } from './StudentsListProvider.jsx';
import { useContext, useState } from 'react';

export default function DisplayStudentList() {
    const {students,setfavorites,disabledButtons,setDisabledButtons} = useContext(StudentContext);
 

  

    // Handle button click
    function handleClick(index,student) {
          setDisabledButtons((prevDisabled) =>
         prevDisabled.map((disabled, i) => (i === index ? true : disabled))
        );
       console.log(student)
        setfavorites((currentFav)=>[...currentFav,student])
        
    }

    return (
        <>
            <div className="my-1">
                {students.map((student, index) => (
                    <div className="flex justify-around gap-12" key={index}>
                        <p style={{ marginTop: '1%' }}> 
                            {index + 1}. {student}
                        </p>
                        <button
                            style={{
                                backgroundColor: disabledButtons[index]
                                    ? 'gray'
                                    : 'black',
                                padding: '4px',
                                color: 'white',
                                borderRadius: '10%',
                                marginTop: '1%',
                                cursor: disabledButtons[index] ? 'not-allowed' : 'pointer',
                                marginLeft:"-10%"
                                
                            }}
                            onClick={() => handleClick(index,student)}
                            disabled={disabledButtons[index]}
                        >
                            Add to Favorite
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}
