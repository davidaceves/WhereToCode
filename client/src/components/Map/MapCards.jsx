import React, { Component } from "react";
import SingleMapCard from "./SingleMapCard";
import styled from "styled-components";

class MapCards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <MapCardsContainer>
        {this.props.locations.map((location) => {
          return (
            <div>
              <SingleMapCard
                key={location.id}
                location={location.name}
                address={location.address}
                rating={location.rating}
                icon={location.icon}
                id={location.id}
                requestDetails={this.props.requestDetails}
              />
            </div>
          );
        })}
      </MapCardsContainer>
    );
  }
}

export default MapCards;

const MapCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
