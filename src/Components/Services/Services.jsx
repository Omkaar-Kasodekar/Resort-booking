import React, { Component } from "react";

// imports react-icons
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

// imports components
import Title from "../Title/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free drinks",
        info:
          "Enjoy free cocktails at our luxurious sea-facing bar all day long.",
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info:
          "Watch the beautiful sunrise and sunset at the hills that surround us.",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "Travel across our entire resort for free by calling for a Shuttle.",
      },
      {
        icon: <FaBeer />,
        title: "endless refreshments",
        info:
          "Enjoy the refreshments provided in the mini-fridge in your rooms for absolutely free.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
