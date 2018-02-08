import React, {PureComponent} from 'react';
import './BtnAddJoke.css';

class BtnAddJoke extends PureComponent {
    render() {
        return (
            <div className="btn-row">
                <button className="btn" onClick={this.props.click}>More jokes</button>
            </div>
        )
    }
}

export default BtnAddJoke;