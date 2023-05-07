import React ,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
class App extends Component {
  constructor(){
    super()
    this.state = {
      fullName:'',
      username:'',
      email:'',
    }
    this.changeFullName=this.changeFullName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changeUsername=this.changeUsername.bind(this)

  }
  changeFullName(event){
    this.setState({
      fullName:event.target.value
    })
  }

  changeUsername(event){
    this.setState({
      username:event.target.value
    })
  }
  changeEmail(event){
    this.setState({
      email:event.target.value
    })
  }

  onSubmit(event){
    event.preventDefault()

    const registered = {
      fullName: this.state.fullName,
      username:this.state.username,
      email:this.state.email
    }
    axios.post()

  }
  render() {
    return (
      <div className="container">
      <div className="form-div">
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder='Full Name' onChange={this.changeFullName}
            value={this.state.fullName}
            className='form-control form-group'
          />
          <input type="text" placeholder='UserName' onChange={this.changeUsername}
            value={this.state.username}
            className='form-control form-group'
          />
          <input type="text" placeholder='Email' onChange={this.changeEmail}
            value={this.state.email}
            className='form-control form-group'
          />
          <input type="submit" className='btn btn-danger btn-block' value='Submit'/>
        </form>
      </div>     
      </div>
    );

  }
  
}

export default App;
