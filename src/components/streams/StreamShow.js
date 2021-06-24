import React from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import config from '../../config';
class StreamShow extends React.Component {
    constructor(props) {
        super(props);

        this.videoRef = React.createRef();
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchStream(this.props.match.params.id);
        this.player = flv.createPlayer({
            type: 'flv',
            url: `${config.RTMP_SERVER_BASE_URL}live/${id}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }
    render() {
        if (this.props.stream) {
            const { title, description } = this.props.stream;
            return (
                <div>
                    <video ref={this.videoRef} style={{ width: '100%' }} controls />
                    <h1>{title}</h1>
                    <h5>{description}</h5>
                </div>
            )
        }
        return <div>Loading...</div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    };
};
export default connect(mapStateToProps, { fetchStream })(StreamShow);