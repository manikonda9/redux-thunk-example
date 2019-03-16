import React from "react";
import { connect } from "react-redux";
import { getData } from "./actions";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.get();
  };

  render() {
    const { data, loading, error, title } = this.props;
    return (
      <section>
        <div>{title}</div>
        {loading ? (
          <div>loading...</div>
        ) : (
          <table>
            <tr>
              <th>Id</th>
              <th>User Id</th>
              <th>Title</th>
            </tr>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.title}</td>
              </tr>
            ))}
          </table>
        )}
      </section>
    );
  }
}

const mapStateToProps = data => {
  return data;
};

const mapDispatchToProps = dispatch => {
  return {
    get: () => dispatch(getData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
