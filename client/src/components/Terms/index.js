import {Component} from 'react'
import './index.css'

class Terms extends Component {

    // state is defined here
    state = {input: false,para: false}

    //the validation of the check box ticked or not is confirmed here!!!
    btnClicked = ()=>{
        const {input,para}= this.state
        const {termsConditions} = this.props

        if(input && para===false) termsConditions()
        else this.setState({para: true})
    }

    //check box toggled, this function is called
    checkedInput = ()=>{
        const {input} = this.state
        this.setState({input: !input,para: false})
    }

    //render of the Terms.js
    render(){
        const {para} = this.state

        //return function of Terms.js  
        return(
            <div className='nav-main-bg'>
                <div className='navbar'>
                <img src="./1.png" width="40px" className="nav-img-new" /> 
                </div>  
            <div className="terms-bg">
                <h1 className="right-to-vote">
                    Right to Vote:
                </h1>
           
                <p className="right-para">Voting is one among the foremost impactful belongings you can do for yourself and SAC. On a macro level, It makes count of every Vote casted by a valid voter.</p>
                <h1 className='mid'>Terms and Conditions</h1>

                <ul className="unordered">
                    <li className="list-terms">
                    You can cast just one vote.
                    </li>
                    <li className="list-terms">
                    You must have College ID in which Barcode is undistorted.
                    </li>
                    <li className="list-terms">
                    You can vote if you belongs to ACOE.
                    </li>
                    <li className="list-terms">
                        You have to vote for a total of 3 positions in the SAC.
                    </li>
                    <li className="list-terms">
                        The results are released soon.
                    </li>
                </ul>
                <div className="div1">
                    <input type="checkbox" onChange={this.checkedInput} id="check" />
                    <label htmlFor="check" className='hia'>I Agree the Terms and Conditions</label>
                </div>
                {para ? <p className="error error2">Agree the terms and conditions</p>: " "}
                <div className="terms-btn">
                    <button className="submit-btn" onClick={this.btnClicked}>Ready to Vote</button>
                </div>
            </div> 
        </div>
        )
    }
}

export default Terms