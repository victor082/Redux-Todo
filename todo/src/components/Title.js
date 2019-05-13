import React from 'react';
import { connect } from 'react-redux';
import { changeTitle } from '../actions';

class Title extends React.Component {
  state = {
    newTitleText: '',
    editing: false
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateTitle = e => {
    e.preventDefault();
    this.props.changeTitle(this.state.newTitleText);
    this.setState({ editing: false });
  };

  render() {
    return (
      <div>
        {!this.state.editing ? (
          <h1>
            {this.props.titleFromRedux}{' '}
            <i
              className="far fa-edit"
              onClick={() => this.setState({ editing: true })}
            />
          </h1>
        ) : (
          <div>
            <input
              className="title-input"
              type="text"
              name="newTitleText"
              value={this.state.newTitleText}
              onChange={this.handleChanges}
            />
            <button onClick={this.updateTitle}>Update the Title</button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.title);
  return {
    titleFromRedux: state.title
  };
};

export default connect(
  mapStateToProps,
  { changeTitle }
)(Title);
