var React = require('react');
var ReactDOM = require('react-dom');

var USER_DATA = {
  name: 'Johnny Chan',
  username: 'atlas7',
  image: 'https://pbs.twimg.com/profile_images/531044251199475712/2g7V13wm.jpeg'
};


// function(someData) = someView
// fn(d)=v

/*
  Focused
  Independent
  Reusable
  Small
  Testable
*/


var Link = React.createClass({
  changeURL: function() {
    window.location.replace(this.props.href)
  },
  render: function() {
    return (
      <span style={{color: 'blue', cursor: 'pointer'}} onClick={this.changeURL}>
        {this.props.children}
      </span>
    )
  }
});

var ProfilePic = React.createClass({
  render: function() {
    return (
      <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
    )
  }
});

var ProfileLink = React.createClass({
  render: function() {
    return (
      <div>
        <Link href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </Link>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
});

var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
});


ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);