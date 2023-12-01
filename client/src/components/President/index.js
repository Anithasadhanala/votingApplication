import {Component} from 'react'
import "./index.css"


class President extends Component {

    // state obj is defined here
    state = {vote: "",p1: false,p2: false,p3: false,click1:false,click2:false,click3:false,error: false}

    // this function is called after the voter clicks on the vote btn of any candidate.
    submitted =(event)=>{
        event.preventDefault()
        let voted = (event.target.name)
        this.setState({vote: event.target.name})
        
        if(voted ==1) this.setState({p1: true,p2: false,p3: false,error: false})
        else if( voted ==2) this.setState({p1: false,p2: true,p3: false,error: false})
        else if(voted==3)this.setState({p1: false,p2: false,p3: true,error: false})
    }

    // this function is called after the voter clicks on cast my vote btn
    submitSuccessfully = ()=>{
        const {vote,p1,p2,p3} = this.state
        
        if(vote!=='') this.props.submitForm(vote) 
        else this.setState({error: true})
    }

    // the below 6 function calls if the voter clicks on the 2 btns of each candidate
    viewClick1=()=> this.setState({click1:true}) 
    viewClick2=()=> this.setState({click2:true}) 
    viewClick3=()=> this.setState({click3:true}) 
    close1=()=> this.setState({click1:false})    
    close2=()=> this.setState({click2:false})    
    close3=()=> this.setState({click3:false})    
   

    // render of the President.js
    render(){
        const {p1,p2,p3,click1,click2,click3,error}  = this.state
        let Viewdiv1='viewdiv'
        let Viewdiv2='viewdiv'
        let Viewdiv3='viewdiv'
        Viewdiv1= click1==true? 'viewdiv contain':'viewdiv'
        Viewdiv2= click2==true? 'viewdiv contain':'viewdiv'
        Viewdiv3= click3==true? 'viewdiv contain':'viewdiv'

        let err = error ? 'Cast your vote for any nominee' : ''

        let voted = p1 ? "btn btn3 vote vote-sas" : "btn btn3 vote"
        let voted1 = p2 ? "btn btn3 vote vote-sas" : "btn btn3 vote"
        let voted2 = p3 ? "btn btn3 vote vote-sas" : "btn btn3 vote"

        // the returned content of the President.js
        return(
           <div className='nav-main-bg'>
                <div className='navbar'>
                    <img src="./1.png" width="40px" className="nav-img-new" /> 
                </div>
                <div className="main-bg">
            

                <div className="underline-div">
                    <div className="pred-div2">
                        <p className="pred pred1">President</p>
                        <hr className="line"></hr>
                    </div>
                    <div className="pred-div">
                        <p className="pred">Vice-pres</p>
                        <hr className="line2"></hr>
                        
                    </div>

                    <div className="pred-div">
                        <p className="pred ">Gen-secretary</p>
                        <hr className="line2"></hr>
                    </div>
                </div>
            
                <form onSubmit={this.submitted} className="form">
                    <h1 className="heading1">Cast your Vote</h1>


                    <div className="small-card ">
                        <img src="./p11.png" alt="image" className="image pred-img"/>
                        <div className="text-bg">
                            <h1 className="headi">21MH5A0120 <br></br> K.L.N.B Sai kumar</h1>
                            <p className="para">I will concentrate on our student's...</p>
                            <div className="btn-bg">
                                <button className="btn btn2 view" onClick={this.viewClick1}>About</button>
                                <input className={voted} type="button" value="Vote"  name="1"  onClick={this.submitted}/>
                            </div>
                            {p1===true ? <p className="confirm-para">Click on Submit below..</p> : ""}
                        </div>
                    </div>

            
                    <div className={Viewdiv1}>
                        <div className='close' onClick={this.close1}>X</div>
                        <div className='namepara'>
                            
                            <h2>Vote For Me</h2>
                            <div className="details">
                                <p><b>Name: </b>K.L.N.B.Sai kumar</p>
                                <p><b>Deparment :</b>CIVIL</p>
                                <p><b>College :</b> ACOE</p>
                            </div>
                            <div className="lorem1">
                                <ul>
                                    <li className="listo">I will concentrate on our students’ communication and life skills and take the required action to enhance our skills, talk to industries and make collaborations and bring projects from them to clubs, conduct events and workshops regarding our skills to enhance them, concentrate on both major and minor problems and never neglect any problem even if it is a minor problem.</li>        
                                </ul> 
                            </div>
                        </div>
                    </div>
                    <div className="small-card">
                        <img src="./p2.png" alt="image" className="image pred-img"/>
                        <div className="text-bg">
                            <h1 className="headi">22MH5A0201    B.K.Pranavi</h1>
                            <p className="para">I will create an interface between the students and SAC..</p>
                            <div className="btn-bg">
                                <button className="btn btn2 view" onClick={this.viewClick2}>About</button>
                                <input className={voted1} type="button" value="Vote"  name="2" onClick={this.submitted}/>
                        </div>
                        {p2===true ? <p className="confirm-para">Click on Submit below..</p> : ""}
                    </div>
                    </div>

                    <div className={Viewdiv2}>
                        <div className='close' onClick={this.close2}>X</div>
                        <div className='namepara'>
                            
                            <h2>Vote For Me</h2>
                            <div className="details">
                                <p><b>Name: </b>B.K. Pranavi</p>
                                <p><b>Deparment :</b> EEE </p>
                                <p><b>College :</b> ACOE</p>
                            </div>
                            <div className="lorem1">
                                <ul>
                                    <li className="listo">I will create an interactive interface between the students and SAC. Actively receiving regular feedbacks from students on concerns about the clubs. Collaborating with clubs to ensure that the potential of the clubs is utilised effectively. Encourage the new ideas by conducting weekly programs to collect those ideas from the students.</li>
                                </ul> 
                            </div>
                        </div>
                     </div>
          
                    <div className="small-card">
                        <img src="./nota.png" alt="image" className="image pred-img"/>
                        <div className="text-bg">
                            <h1 className="headi">NOTA</h1>
                            <p className="para">NOTA, or "None of the Above", is the
                                                option which enables the voter to
                                        officially register a vote of rejection for
                                            all candidates who are contesting.</p>
                            <div className="btn-bg">
                                <button className="btn btn2 view" onClick={this.viewClick3}>About</button>
                                <input className={voted2} type="button" value="Vote"  name="3"  onClick={this.submitted}/>
                            </div>
                            
                            {p3===true ? <p className="confirm-para">Click on Submit below..</p> : ""}
                        </div>
                    </div>

                    <div className={Viewdiv3}>
                        <div className='close' onClick={this.close3}>X</div>
                        <div className='namepara'>
                            
                            <h2></h2>
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

export default President