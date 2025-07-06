import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/Netflix.png";
import ImageTwo from "../../images/amazon.jpg";
import ImageThree from "../../images/Evangadi-forum.png";
import "./styles.css";

const portfolioData = [
  {
    id: 1,
    name: "Netflix",
    image: ImageOne,
    link: "https://github.com/Alaye-zerihun/Netflix-by-alex",
    category: "Video Demo",
  },
  {
    id: 2,
    name: "Amazon",
    image: ImageTwo,
    link: "https://vocal-entremet-84378a.netlify.app/",
    category: "Deployed",
  },
  {
    id: 3,
    name: "Evangadi Forum",
    image: ImageThree,
    link: "https://evangadiforum-frontend-final.vercel.app/",
    category: "Deployed",
  },
];

const filterData = [
  { filterId: 1, label: "All" },
  { filterId: 2, label: "Deployed" },
  { filterId: 3, label: "Video Demo" },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleFilter = (id) => setFilteredValue(id);

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter(
          (item) =>
            (filteredValue === 2 && item.category === "Deployed") ||
            (filteredValue === 3 && item.category === "Video Demo")
        );

  return (
    <section id="portfolio" className="portfolio" aria-label="Portfolio Section">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />

      <ul className="portfolio__filters" role="list" aria-label="Portfolio Filters">
        {filterData.map((filter) => (
          <li
            key={filter.filterId}
            className={filter.filterId === filteredValue ? "active" : ""}
            onClick={() => handleFilter(filter.filterId)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleFilter(filter.filterId);
              }
            }}
            tabIndex={0}
            role="button"
            aria-pressed={filter.filterId === filteredValue}
            aria-label={`Filter portfolio by ${filter.label}`}
          >
            {filter.label}
          </li>
        ))}
      </ul>

      <div className="portfolio__cards">
        {filteredItems.map((item, index) => (
          <figure
            key={item.id}
            className="portfolio__card"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio__image-link"
              aria-describedby={`desc-${item.id}`}
            >
              <img
                src={item.image}
                alt={`Screenshot of project: ${item.name}`}
                loading="lazy"
              />
            </a>

            <figcaption
              id={`desc-${item.id}`}
              className={`portfolio__overlay ${
                hoveredIndex === index ? "visible" : ""
              }`}
            >
              <p>{item.name}</p>
              <button
                onClick={() => window.open(item.link, "_blank")}
                type="button"
                aria-label={`Visit ${item.name} website`}
              >
                Visit
              </button>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
