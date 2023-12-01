import './index.css';

// after successful voting, the thanks page component displayed.
const  Thanks = ()=>{
    return(
        <div className="thanks-cont">
            <p className="thanks-para">Successfully Casted your vote</p>
            <img src="https://img.freepik.com/premium-vector/illustration-hand-dropping-ballot-into-ballot-box-elections-referendums_630511-53.jpg?w=740" type="image" alt="thanks-image" className="thanks"/>
            <p className="thanks-para2">Thanks for your valuable vote, the results will be announced soon.</p>
        </div>
    )
}


export default Thanks