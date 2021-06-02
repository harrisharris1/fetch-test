import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    items: []
  }
  componentDidMount() {
    fetch('https://fetch-hiring.s3.amazonaws.com/hiring.json')
    .then(res => res.json())
    .then((data) => {
      const filterNull = data.filter(item => item.name !== '' && item.name !== null);
      filterNull.sort(function (y,x){
        return y.listId - x.listId;
      })
      filterNull.sort()
      this.setState({ items: filterNull })
      console.log(this.state.items)
    })
    .catch(console.table)
  }
  render() {

    return (
       <div className="list-container">
        <h1>My List</h1>
        {this.state.items.map((item) => (
          <div className="list">
            <table>
              <tr> 
                <th>Item ID</th>
                <th>Item Name</th>
              </tr>

              <tr>
              <td>{item.listId}</td>
              <td> {item.name}</td>
              </tr>
            </table>
          </div>
        ))}
        </div>
    );
  }
}
export default App;

