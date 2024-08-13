import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location:"default"
      },
    };

     console.log(this.props.name +"child constuctor");
  }

  async componentDidMount() {
     console.log(this.props.name +"child componentDidMount");
    const data = await fetch("https://api.github.com/users/Aliirfan0786");
    const json = await data.json();

  

    this.setState({
      userInfo: json,
    });
  }
  

  componentDidUpdate(){

    // console.log("component did update");
  }
  componentWillUnmount(){
    // console.log("component will unmount");
  }

  render() {
    // console.log( this.props.name +"child render");
    const { name, login, url, avatar_url } = this.state.userInfo;
    
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2> name : {name}</h2>
        <h3>Location : {login}</h3>
        <h4>Contact: {url}</h4>
      </div>
    );
  }
}
export default UserClass;
