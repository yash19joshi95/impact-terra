import React from 'react'
import {Link} from 'react-router-dom'
import "./header.css"

const handleLogout = () => {
    window.appReference && window.appReference.setState({isAuthenticated: false})
    sessionStorage.removeItem('isAuthenticated')
}
const header = (props) =>{
    const isAuthenticated = props.isAuthenticated   
    const logoutLinkStyle = {textAlign: 'right'}
    return(
        <div className="main-header">
            <div className="logo">
                <Link to="/"><img src="//static1.squarespace.com/static/56b182fa1d07c077309b36a1/t/56bd72844c2f85965a5d9024/1597222167679/?format=1500w"/></Link>
            </div>
            <div className="imp-text">{isAuthenticated ? "  Ko Myo Htut" : null}</div>
            
            {
                isAuthenticated ? <div className="logout-link" style={logoutLinkStyle}><Link to='#' onClick={handleLogout}>Log Out</Link></div> : null
            }
        </div>
    )
}

export default header