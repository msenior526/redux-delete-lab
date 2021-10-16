import React, {Component} from 'react';
import Band from './Band';

class Bands extends Component {
    renderBands = () => {
        return this.props.bands.map(band => <Band key={band.id} band={band} deleteBand={this.props.deleteBand}/>)
    }

    render() {
        return (
            <ol>
                {this.renderBands()}
            </ol>
        )
    }
}

export default Bands;