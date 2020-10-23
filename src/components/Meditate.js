import React, {useState, useEffect} from 'react'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import meditationImage from '../images/meditation-svg-2.png'

export default function Meditate() {
    let displayedTime

    const [seconds, setSeconds] = useState(0)
    const [isActive, setIsActive] = useState(false)

    const toggleClicked = () => {
        setIsActive(!isActive)
    }

    useEffect(() => {
        let interval
        if(isActive){
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1)
            }, 1000)
        } else if (!isActive && seconds !== 0){
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isActive, seconds])

    const handleMeditateClick = (event) => {
        toggleClicked()
    }

    const reset = () => {
        setSeconds(0)
        setIsActive(false)
    } 
    
    const submitTime = () => {
        let userToken = localStorage.token
        fetch('http://localhost:4000/sessions', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({userToken, seconds})
        })
    }

    const secondsToTime = (number) => {
        let minutes = Math.floor(number / 60)
        let seconds = number - (minutes * 60)
        if(seconds < 10){
            seconds = "0" + seconds.toString() 
        }
        let timer = minutes.toString() + ":" + seconds
        return timer
    }

    return (
        <div className="main-button-container m-auto d-flex flex-column">
                <div className="core-parts-container my-auto mx-auto ">
                    <div className="image-container w-responsive h2-responsive">
                        <Image src={meditationImage} className="mx-auto my-auto"/>
                    </div>
                    <div className="primary-button-container my-auto mx-auto h5-responsive">
                        <Button variant="primary" size="lg" className="btn btn-primary btn-block" onClick={handleMeditateClick}>{secondsToTime(seconds)}</Button>
                    </div>
                    <div className="secondary-buttons-container d-flex justify-content-sm-between">
                        <Button variant="secondary"  size="sm" className="reset ml-4" onClick={reset}>Reset</Button>
                        <Button  variant="secondary" size="sm" className="submit mr-4" onClick={submitTime}>Submit</Button>
                    </div>
                </div>
            </div>
    )
}
