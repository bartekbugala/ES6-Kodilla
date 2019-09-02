const myStyle = 
`body {
  background-color: lightblue;
}
div {
background-color: lightgrey;
}
.user-list {
display: flex;
flex-wrap: wrap;
}
.user-list__user {
display: flex;
flex-direction: column;
padding: 5px;
border: solid 2px blue;
border-radius: 5px;
margin: 5px;
}
.user-list__user a {
text-decoration: none;
text-align: center;
}

`;

const formStyle = {
  padding: '10px'
};

class GithubSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      users: []
    };
  }

  onChangeHandle(event) {
    this.setState({ searchText: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const { searchText } = this.state;
    const url = `https://api.github.com/search/users?q=${searchText}`;
    fetch(url)
      .then(response => response.json())
      .then(responseJson => this.setState({ users: responseJson.items }));
  }

  render() {
    return (
      <div style={formStyle}>
        <form onSubmit={event => this.onSubmit(event)}>
          <label htmlFor="searchText">Search by user name</label>
          <input
            type="text"
            id="searchText"
            onChange={event => this.onChangeHandle(event)}
            value={this.state.searchText} />
        </form>
        <UsersList users={this.state.users} />
      </div>
    );
  }
}

class UsersList extends React.Component {
  get users() {
    return this.props.users.map(user => <User key={user.id} user={user} />);
  }

  render() {
    return (
      <div className="user-list">
        {this.users}
      </div>
    );
  }
}

class User extends React.Component {
  render() {
    return (
      <div className="user-list__user">
        <img src={this.props.user.avatar_url} style={{ maxWidth: '100px' }} />
        <a href={this.props.user.html_url} target="_blank">{this.props.user.login}</a>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return <div>
      <style>{myStyle}</style>
      <GithubSearch />
    </div>

  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
