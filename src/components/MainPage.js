import React, { useState, useEffect } from 'react'
import { Navbar } from 'react-bootstrap'
import NavbarContainer from './NavbarContainer'
import Button from 'react-bootstrap/Button'

export default function MainPage(props) {

    let displayedTime

    const [seconds, setSeconds] = useState(0)
    const [isActive, setIsActive] = useState(false)

    const handleLogoutClick = () => {
        localStorage.removeItem('token')
        props.history.push('/login')
    }

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
        <div className="mainPageContainer d-flex flex-row">
            <NavbarContainer/>

            <div className="main-button-container m-auto d-flex flex-column">
                <div className="core-parts-container my-auto mx-auto ">
                    {/* <button onClick={handleLogoutClick}>Logout</button> */}
                    {/* <div className="video-box-for-ml"></div> */}
                    <div className="primary-button-container">
                        <Button variant="primary" size="lg" className="btn btn-primary btn-block" onClick={handleMeditateClick}>{secondsToTime(seconds)}</Button>
                    </div>
                    <div className="secondary-buttons-container d-flex justify-content-sm-between">
                        <Button variant="secondary"  size="sm" className="reset ml-4" onClick={reset}>Reset</Button>
                        <Button  variant="secondary" size="sm" className="submit mr-4" onClick={submitTime}>Submit</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
