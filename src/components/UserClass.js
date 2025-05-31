import React from 'react'
class UserClass extends React.Component{

    constructor(props){
        console.log("Constructor is called", props);
        super(props);

        this.state = {
            count: 0,
        }
    }
    render(){
        const {name, location} = this.props;
        const {count} = this.state;
        return(
            <div className ="user-card">
                <h1>Count : {count}</h1>
                <button onClick={()=>{

                    this.setState((prevState)=>{
                        return {
                            count: prevState.count + 1
                        }
                    })
                    this.setState((prevState)=>{
                        return {
                            count: prevState.count + 1
                        }
                    })
                    this.setState((prevState)=>{
                        return {
                            count: prevState.count + 1
                        }
                    })
                }}>Count increase</button>
                <h2>Name : {name}</h2>
                <h2>Location : {location}</h2>
                <h2>Contact : Sanchit</h2>
            </div>
        )
    }
}


export default UserClass;