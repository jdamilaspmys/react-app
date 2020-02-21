class Book extends React.Component {
    render() {
      return (
       <div>
         Name of book {this.props.name}
       </div>
      )
    }
  }
  
  ReactDOM.render(
    <Book name="test" />,
    document.getElementById('hello-example')
  );