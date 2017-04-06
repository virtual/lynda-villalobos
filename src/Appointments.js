import React, { Component } from 'react';

class Appointments extends Component {
    render() {
        var data = this.props.data;
        data = data.map(function (item, index) {
            return (
                <li className="pet-info media" key={index}>
                    <div className="pet-head"><span className="pet-name">{item.petName}</span>
                        <span className="apt-date pull-right">{item.aptDate}</span>
                    </div>
                    <div className="owner-name"><span className="label">{item.ownerName}</span></div>
                    <div className="apt-notes"><span className="label">{item.aptNotes}</span></div>
                </li>
            )
        });
        return (

            <div>
                <ul style={this.props.displayList} className="item-list media-list">


                </ul>
            </div>
        );
    }
}

export default Appointments;