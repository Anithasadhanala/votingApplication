import {Component} from 'react'
import "./index.css"

class Manager extends Component {

    // state obj is defined here
    state = {vote: "",p1: false,error: false,click: false,click2: false,p2: false,p3:false,click3: false}

    // this function is called after the voter clicks on the vote btn of any candidate
    submitted =(event)=>{
        event.preventDefault()
        let voted = (event.target.name)
        this.setState({vote: event.target.name})

        if(voted ==1) this.setState({p1: true,p2: false,error: false,p3:false})
        if(voted ==2) this.setState({p2: true,p1: false,error: false,p3:false})
        if(voted ==3) this.setState({p2: false,p1: false,error: false,p3:true})
    }

    // this function is called after the voter clicks on cast my vote btn
    submitSuccessfully = ()=>{
        const {p1,p2,p3,vote} = this.state
        
        if(vote!=='')
        this.props.submitForm3(vote)
        else{
            this.setState({error: true})
        }
    }

    // the below 6 function calls if the voter clicks on the 2 btns of each candidate
    viewClick=()=> this.setState({click:true}) 
    viewClick2=()=> this.setState({click2:true}) 
    viewClick3=()=> this.setState({click3:true}) 
    
    close=()=> this.setState({click:false})    
    close2=()=> this.setState({click2:false})    
    close3=()=> this.setState({click3:false})    
    
   

    // render of the Manager.js
    render(){
        const {p1,click,error,p2,click2,p3,click3}  = this.state
        let Viewdiv='viewdiv'
        let Viewdiv2='viewdiv'
        let Viewdiv3='viewdiv'
        Viewdiv= click==true? 'viewdiv contain':'viewdiv'
        Viewdiv2= click2==true? 'viewdiv contain':'viewdiv'
        Viewdiv3= click3==true? 'viewdiv contain':'viewdiv'

        let voted = p1 ? "btn btn3 vote vote-sas" : "btn btn3 vote"
        let voted2 = p2 ? "btn btn3 vote vote-sas" : "btn btn3 vote"
        let voted3 = p3 ? "btn btn3 vote vote-sas" : "btn btn3 vote"


        let err = error ? 'Cast your vote for any nominee' : ''


    // the returned content of the Manager.js
    return(
            <div className='nav-main-bg'>
                <div className='navbar'>
                    <img src="./1.png" width="40px" className="nav-img-new" /> 
                </div>

                <div className="main-bg2 bg9 bg10">
                    <div className="underline-div bg20">
                        <div className="pred-div2">
                            <p className="pred">President</p>
                            <hr className="line2"></hr>
                        </div>
                        <div className="pred-div">
                            <p className="pred">Vice-pres</p>
                            <hr className="line2"></hr>
                        </div>
                        <div className="pred-div">
                            <p className="pred pred1">Gen-secretary</p>
                            <hr className="line"></hr>
                        </div>
                
                </div>
                <form onSubmit={this.submitted} className="form">
                    <h1 className="heading1">Cast your Vote</h1>
                    <div className="small-card">
                        <img src="./m1.png" alt="image" className="image"/>
                            <div className="text-bg">
                            <h1 className="headi">  20MH1A04G5 <br></br>  M.Divya Harshitha</h1>
                            <p className="para">I am dedicated & passionate in life...</p>
                                <div className="btn-bg">
                                    <button className="btn btn2 view" onClick={this.viewClick}>About</button>
                                    <input className={voted} type="button" value="Vote"  name="1"  onClick={this.submitted}/>
                                </div>
                                {p1===true ? <p className="confirm-para mar">Click on Submit below..</p> : ""}
                            </div>
                    </div>
           

                    <div className={Viewdiv}>
                        <div className='close' onClick={this.close}>X</div>
                        <div className='namepara'>
                            
                            <h2>Vote For Me</h2>
                            <div className="details">
                                <p><b>Name: </b>M.Divya Hardhitha </p>
                                <p><b>Deparment :</b>ECE</p>
                                <p><b>College :</b> ACOE</p>
                            </div>
                            <div className="lorem1">
                                <ul>
                                    <li className="listo">I  am harshitha, as I had selected for the general secretary in the SAC. I am dedicated and passionate in life to reach heights. I want to make our campus great in innovations and as well as in start-ups. I will give my complete support to everyone with their start-up ideas and their passions.</li>
                                </ul> 
                            </div>
                        </div>
                    </div>

                    <div className="small-card">
                        <img src="./m2.png" alt="image" className="image"/>
                        <div className="text-bg">
                            <h1 className="headi">21MH1A4216 <br></br> K.Deepika</h1>
                            <p className="para">Ensuring the team is happy and ...</p>
                            <div className="btn-bg">
                                <button className="btn btn2 view" onClick={this.viewClick2}>About</button>
                                <input className={voted2} type="button" value="Vote"  name="2"  onClick={this.submitted}/>
                            </div>
                            {p2===true ? <p className="confirm-para mar">Click on Submit below..</p> : ""}
                        </div>
                    </div>
                

                    <div className={Viewdiv2}>
                        <div className='close' onClick={this.close2}>X</div>
                        <div className='namepara'>
                            
                            <h2>Vote For Me</h2>
                            <div className="details">
                                <p><b>Name: </b>Kakarla Deepika</p>
                                <p><b>Deparment :</b>CSE - AIML</p>
                                <p><b>College :</b> ACOE</p>
                            </div>
                            <div className="lorem1">
                                <ul>
                                    <li className="listo">Ensuring the team is happy and working in a manner that maintains the status of the Student Activity Council. I should address any issue that may arise within the council with respect to work allotment and general duties of each post in the council. I was responsible for defending the integrity of the council and should always uphold the virtues this council represents. Give assistance, guidance, and praise. Maintain frequent contact with faculty and administration. And participate in student activity council sponsored activities/events.</li>
                                </ul> 
                            </div>
                        </div>
                

                    </div>

                    <div className="small-card">
                        <img src="./nota.png" alt="image" className="image"/>
                        <div className="text-bg">
                            <h1 className="headi">NOTA</h1>
                            <p className="para">NOTA, or "None of the Above", is the
                                                    option which enables the voter to
                                            officially register a vote of rejection for
                                                all candidates who are contesting.</p>
                            <div className="btn-bg">
                                <button className="btn btn2 view" onClick={this.viewClick3}>About</button>
                                <input className={voted3} type="button" value="Vote"  name="3"  onClick={this.submitted}/>
                            </div>
                            {p3===true ? <p className="confirm-para mar">Click on Submit below..</p> : ""}
                        </div>
                    </div>
           

                    <div className={Viewdiv3}>
                        <div className='close' onClick={this.close3}>X</div>
                        <div className='namepara'>
                            
                            <h2>Vote For Me</h2>
                            <div className="details">
                                <p><b>Name: </b>NOTA</p>
                                
                            </div>
                            <div className="lorem1">
                                <ul>
                                    <li className="listo">NOTA, or "None of the Above", is the
                            option which enables the voter to
                            officially register a vote of rejection for
                            all candidates who are contesting. If a
                            voter chooses to press NOTA it
                            indicates that the voter has not chosen
                            to vote for any of the party.</li>
                                </ul> 
                            </div>
                        </div>
                

                    </div>
           
            
        

                    <div className='btn-center'>
                        <button  onClick={this.submitSuccessfully} className="submit-btn">Cast my Vote</button>
                    </div>    
                    <p className="card-error">{err}</p>

                </form>
            </div>
        </div>
      
    )

    }

}

export default Manager