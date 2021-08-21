import React,{useState,useEffect} from 'react'
import axios from 'axios'
import RadioResponse from './RadioResponse'
import { Link } from 'react-router-dom'
import { useHistory} from 'react-router-dom'
const Questions= () => {
    let count = 1
    const [question,setQuestion] = useState([])
    const history = useHistory();
    const nextTask = () => history.push('/submit');

    const getQuestions = async () => {
        await axios.get('http://localhost:5000/questions').then((response) =>{
            setQuestion(response.data)
        })
    }

    // const onButtonClick = () => {

    // }

    useEffect(() => {
        getQuestions()
    },[])

    return (
        <>
        <table className="table mt-5">
            <thead>
            <tr>
                <th>Questions</th>
                {/* <th>Submit</th> */}
            </tr>
            </thead>
            <tbody>
            {question.map(que => (
                <tr key={que.question_id}>
                    <td>{count++}{")"} {que.questions}<RadioResponse /></td>
                </tr>
            ))}
            </tbody>
        </table>
        {/* <button className="btn btn-primary" onClick={onButtonClick}>Submit</button> */}
        <Link to='./submit'><button className="btn btn-primary"onClick={nextTask}>Submit</button></Link>
        

        
    </>
    )
}

export default Questions
