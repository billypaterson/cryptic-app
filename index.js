
class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-custom navbar-dark">
        <a href="index.html"><i className="arrow left"></i></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="sign-in.html">Login/Register</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Cryptic Events</a>
            </li>
						<li className="nav-item">
              <a className="nav-link" href="about-us.html">About Us</a>
            </li>
						<li className="nav-item">
              <a className="nav-link" href="contact-us.html">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

ReactDOM.render(<Navbar />, document.getElementById('nav'));


class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="form mt-5" id="loginForm">
      
      <ul className="tab-group">
          <li className="tab active"><a href="#login">Login</a></li>
          <li className="tab"><a href="#register">Register</a></li>
      </ul>

      <div className="tab-content">
          <div id="login">
              
              <form onSubmit={this.handleSubmit} autoComplete="off">

                  <div className="field-wrap">
                      <label>Email<span className="req">*</span>
                      </label>

                      <input type="email" required autoComplete="off" name="email"/>
                  </div>

                  <div className="field-wrap">
                      <label>Password<span className="req">*</span>
                      </label>

                      <input type="password" required autoComplete="off" name="password"/>
                  </div>

                  <input type="button" className="button button-block" name="login" value="Login"/>

              </form>
          </div>

          <div id="register">
              
              <form onSubmit={this.handleSubmit} autoComplete="off">

                  <div className="field-wrap">
                      <label>Name<span className="req">*</span>
                      </label>

                      <input type="text" required autoComplete="off" name='fullname'/>
                  </div>

                  <div className="field-wrap">
                      <label>Email<span className="req">*</span>
                      </label>

                      <input type="email" required autoComplete="off" name='email'/>
                  </div>

                  <div className="field-wrap">
                      <label>Gender<span className="req">*</span>
                      </label>

                      <input type="text" required autoComplete="off" name='gender'/>
                  </div>

                  <div className="field-wrap">
                      <label>Age<span className="req">*</span>
                      </label>

                      <input type="text" required autoComplete="off" name='age'/>
                  </div>

                  <div className="field-wrap">
                      <label>Create a Password<span className="req">*</span>
                      </label>

                      <input type="password" required autoComplete="off" name='password'/>
                  </div>

                  <div className="field-wrap">
                      <label>Confirm Password<span className="req">*</span>
                      </label>

                      <input type="password" required autoComplete="off" name='confirmPassword'/>
                  </div>

                  <input type="button" className="button button-block" name="register" value="Register"/>

              </form>
          </div> 
      </div>
  </div>
    );
  }
}

ReactDOM.render(<SignIn />, document.getElementById('signIn'));