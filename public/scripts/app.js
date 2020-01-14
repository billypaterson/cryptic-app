"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "nav",
        { className: "navbar navbar-expand-lg navbar-custom navbar-dark" },
        React.createElement(
          "a",
          { href: "index.html" },
          React.createElement("i", { className: "arrow left" })
        ),
        React.createElement(
          "button",
          { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent",
            "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
          React.createElement("span", { className: "navbar-toggler-icon" })
        ),
        React.createElement(
          "div",
          { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
          React.createElement(
            "ul",
            { className: "navbar-nav mr-auto" },
            React.createElement(
              "li",
              { className: "nav-item m-1 p-1 text-center dGrey" },
              React.createElement(
                "a",
                { className: "nav-link", href: "sign-in.html" },
                "Login/Register"
              )
            ),
            React.createElement(
              "li",
              { className: "nav-item m-1 p-1 text-center dGrey" },
              React.createElement(
                "a",
                { className: "nav-link", href: "events.html" },
                "Cryptic Events"
              )
            ),
            React.createElement(
              "li",
              { className: "nav-item m-1 p-1 text-center dGrey" },
              React.createElement(
                "a",
                { className: "nav-link", href: "about-us.html" },
                "About Us"
              )
            ),
            React.createElement(
              "li",
              { className: "nav-item m-1 p-1 text-center dGrey" },
              React.createElement(
                "a",
                { className: "nav-link", href: "contact-us.html" },
                "Contact Us"
              )
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(React.Component);

ReactDOM.render(React.createElement(Navbar, null), document.getElementById('nav'));

var SignIn = function (_React$Component2) {
  _inherits(SignIn, _React$Component2);

  function SignIn(props) {
    _classCallCheck(this, SignIn);

    var _this2 = _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call(this, props));

    _this2.state = { value: '' };

    _this2.handleChange = _this2.handleChange.bind(_this2);
    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
    return _this2;
  }

  _createClass(SignIn, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "form mt-5", id: "loginForm" },
        React.createElement(
          "ul",
          { className: "tab-group" },
          React.createElement(
            "li",
            { className: "tab active" },
            React.createElement(
              "a",
              { href: "#login" },
              "Login"
            )
          ),
          React.createElement(
            "li",
            { className: "tab" },
            React.createElement(
              "a",
              { href: "#register" },
              "Register"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "tab-content" },
          React.createElement(
            "div",
            { id: "login" },
            React.createElement(
              "form",
              { onSubmit: this.handleSubmit, autoComplete: "off" },
              React.createElement(
                "div",
                { className: "field-wrap" },
                React.createElement(
                  "label",
                  null,
                  "Email",
                  React.createElement(
                    "span",
                    { className: "req" },
                    "*"
                  )
                ),
                React.createElement("input", { type: "email", required: true, autoComplete: "off", name: "email" })
              ),
              React.createElement(
                "div",
                { className: "field-wrap" },
                React.createElement(
                  "label",
                  null,
                  "Password",
                  React.createElement(
                    "span",
                    { className: "req" },
                    "*"
                  )
                ),
                React.createElement("input", { type: "password", required: true, autoComplete: "off", name: "password" })
              ),
              React.createElement("input", { type: "button", className: "button button-block", name: "login", value: "Login" })
            )
          ),
          React.createElement(
            "div",
            { id: "register" },
            React.createElement(
              "form",
              { onSubmit: this.handleSubmit, autoComplete: "off" },
              React.createElement(
                "div",
                { className: "field-wrap" },
                React.createElement(
                  "label",
                  null,
                  "Name",
                  React.createElement(
                    "span",
                    { className: "req" },
                    "*"
                  )
                ),
                React.createElement("input", { type: "text", required: true, autoComplete: "off", name: "fullname" })
              ),
              React.createElement(
                "div",
                { className: "field-wrap" },
                React.createElement(
                  "label",
                  null,
                  "Email",
                  React.createElement(
                    "span",
                    { className: "req" },
                    "*"
                  )
                ),
                React.createElement("input", { type: "email", required: true, autoComplete: "off", name: "email" })
              ),
              React.createElement(
                "div",
                { className: "field-wrap" },
                React.createElement(
                  "label",
                  null,
                  "Gender",
                  React.createElement(
                    "span",
                    { className: "req" },
                    "*"
                  )
                ),
                React.createElement("input", { type: "text", required: true, autoComplete: "off", name: "gender" })
              ),
              React.createElement(
                "div",
                { className: "field-wrap" },
                React.createElement(
                  "label",
                  null,
                  "Age",
                  React.createElement(
                    "span",
                    { className: "req" },
                    "*"
                  )
                ),
                React.createElement("input", { type: "text", required: true, autoComplete: "off", name: "age" })
              ),
              React.createElement(
                "div",
                { className: "field-wrap" },
                React.createElement(
                  "label",
                  null,
                  "Create a Password",
                  React.createElement(
                    "span",
                    { className: "req" },
                    "*"
                  )
                ),
                React.createElement("input", { type: "password", required: true, autoComplete: "off", name: "password" })
              ),
              React.createElement(
                "div",
                { className: "field-wrap" },
                React.createElement(
                  "label",
                  null,
                  "Confirm Password",
                  React.createElement(
                    "span",
                    { className: "req" },
                    "*"
                  )
                ),
                React.createElement("input", { type: "password", required: true, autoComplete: "off", name: "confirmPassword" })
              ),
              React.createElement("input", { type: "button", className: "button button-block", name: "register", value: "Register" })
            )
          )
        )
      );
    }
  }]);

  return SignIn;
}(React.Component);

ReactDOM.render(React.createElement(SignIn, null), document.getElementById('signIn'));
