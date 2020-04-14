import React, { Component } from 'react';
import Event from '../components/Event';


class EventList extends Component {



    render() {
        return (
            <ul className="EventList">
                {this.props.events.map(event =>
                    <li key={event.id}>
                        <Event event={event} />
                    </li>
                )}
            </ul>
        );
    }
}
export default EventList; 