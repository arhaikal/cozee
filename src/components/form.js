import React from "react"
export default class IndexPage extends React.Component {
  state = {
    apartmentSize: "",
    postCode: "",
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.apartmentSize} ${this.state.postCode}!`)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Home Size
          <input
            type="text"
            name="apartmentSize"
            value={this.state.apartmentSize}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Post Code
          <input
            type="text"
            name="postCode"
            value={this.state.postCode}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
}
