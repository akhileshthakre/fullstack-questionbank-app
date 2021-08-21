import React, { useState,useEffect } from 'react'
import axios from 'axios'

const RadioResponse = () => {
    const [option1, setOption1] = useState([])
    const [option2, setOption2] = useState([])
    const [option3, setOption3] = useState([])
    const [option4, setOption4] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/options").then((response) => {
            setOption1(response.data.map((data) => data.option_1 ))
            setOption2(response.data.map((data) => data.option_2 ))
            setOption3(response.data.map((data) => data.option_3 ))
            setOption4(response.data.map((data) => data.option_4 ))
        })
    },[])

    return (
        <div className="container table mt-5">
            <div className="radio">
                <label><input type="radio" name="optradio" ></input>{" "}{option1}</label>
            </div>
            <div className="radio">
                <label><input type="radio" name="optradio" ></input>{" "} {option2}</label>
            </div>
            <div className="radio">
                <label><input type="radio" name="optradio" ></input>{" "} {option3}</label>
            </div>
            <div className="radio">
                <label><input type="radio" name="optradio" ></input>{" "} {option4}</label>
            </div>
        </div>
    )
}

export default RadioResponse
