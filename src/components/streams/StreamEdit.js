import { pick } from 'lodash'
import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onSubmit = (formValues) => {
    console.log(formValues);
  }
  render() {
    if (this.props.stream) {
      return (
        <div>
          <h3>
            Edit a Stream
            </h3>
          <StreamForm
            initialValues={pick(this.props.stream, 'title', 'description')}
            onSubmit={this.onSubmit}
          />
        </div>
      );
    }
    return <div>Loading...</div>
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps,
  { fetchStream, editStream })(StreamEdit);
