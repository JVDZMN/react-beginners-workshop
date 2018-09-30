import React from 'react';
class user extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userData:null
        }
    }
    componentDidMount(){
        const username=this.props.match.params.username;
        fetch(`http://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(data =>{
            this.setState({userData:data})
        });
    }


renderUser(){
    const{userData}=this.state;
    return(
        <div>
             <img src={userData.avatar_url} />
        </div>
    );
}
render(){
    const username=this.props.match.params.username;
    return(
        <div>
            <p>{username}</p>
            {this.state.userData ? this.renderUser():"Loading......!!"}
        </div>
    );  
}
}
export default user;