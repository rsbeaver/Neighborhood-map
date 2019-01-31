import React, { Component } from "react";
import ListItem from "./ListItem";

export default class PlaceList extends Component {
  render() {
    return (
      <ol className="PlaceList">
        {this.props.venues &&
          this.props.venues.map((venue, idx) => (
            <ListItem
              key={idx}
              {...venue}
              handleListItemClick={this.props.handleListItemClick}
            />
          ))}
      </ol>
    );
  }
}
