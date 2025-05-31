const User = ({name,location}) =>{
    return (
        <div className ="user-card">
           <h2>Name : {name}</h2>
           <h2>Location : {location}</h2>
           <h2>Contact : Sanchit</h2>
        </div>
    )
}

export default User;