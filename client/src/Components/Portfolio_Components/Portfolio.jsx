import React, { useState } from "react";
import { Dropdown, Container, Row, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import useImages from "./images";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Standard-Component-style.css";
import "./Portfolio.css";

export default function Portfolio() {
  const { t } = useTranslation("global");
  const images = useImages();
  const [filter, setFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalDescription, setModalDescription] = useState("");
  const [dropdownShow, setDropdownShow] = useState(false);

  const handleFilterChange = (filterOption) => {
    setFilter(filterOption);
  };

  const handleModalOpen = (image) => {
    setModalImage(image.src);
    setModalDescription(image.description);
    setShowModal(true);
  };

  const handleModalClose = (event) => {
    if (
      event.target.tagName !== "IMG" &&
      event.target.tagName !== "PRE" &&
      event.target.tagName !== "H3" &&
      event.target.tagName !== "P" &&
      event.target.tagName !== "A" &&
      event.target.tagName !== "B" &&
      !event.target.classList.contains("model-item")
    ) {
      setShowModal(false);
    }
  };

  // Обробник події показу/приховування dropdown-menu
  const handleDropdownShow = (isOpen) => {
    setDropdownShow(isOpen);
  };

  const filteredImages = filterImages(images, filter);

  return (
    <>
      {/* Modal */}
      <div
        className={`model ${showModal ? "open" : ""}`}
        onClick={handleModalClose}
      >
        <Row>
          <button
            className="modal-close-button"
            onClick={() => {
              setShowModal(false);
            }}
          >
            X
          </button>
        </Row>
        <Row className="model-wrap">
          <Col sm className="model-item">
            <img src={modalImage} alt="" />
          </Col>
          <Col sm className="model-item">
            <pre dangerouslySetInnerHTML={{ __html: modalDescription }} />
          </Col>
        </Row>
      </div>

      {/* Main Content */}
      <div className="container-wrap">
        <Container className="mar-48" id="portfolio">
          <h1>{t("portfolio.header")}</h1>
          <div
            className={`text-center mb-3 ${
              dropdownShow ? "show-dropdown" : ""
            }`}
          >
            {/* Filters */}
            <Button
              variant="outline-primary"
              className={`mx-2 select-button ${
                filter === "all" ? "active" : ""
              }`}
              onClick={() => handleFilterChange("all")}
            >
              {t("portfolio.category-first")}
            </Button>
            <Button
              variant="outline-primary"
              className={`mx-2 select-button ${
                filter === "folders" ? "active" : ""
              }`}
              onClick={() => handleFilterChange("folders")}
            >
              {t("portfolio.category-second")}
            </Button>
            <Button
              variant="outline-primary"
              className={`mx-2 select-button ${
                filter === "present" ? "active" : ""
              }`}
              onClick={() => handleFilterChange("present")}
            >
              {t("portfolio.category-third")}
            </Button>
            <Dropdown
              onSelect={handleFilterChange}
              onToggle={handleDropdownShow}
            >
              <Dropdown.Toggle
                variant="primary"
                id="dropdown-basic"
                className={filter.startsWith("order-") ? "active" : ""}
              >
                {t("portfolio.category-fourth")}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="order-all">
                  {t("portfolio.fourth-all")}
                </Dropdown.Item>
                <Dropdown.Item eventKey="order-lam">
                  {t("portfolio.fourth-lam")}
                </Dropdown.Item>
                <Dropdown.Item eventKey="order-craft">
                  {t("portfolio.fourth-craft")}
                </Dropdown.Item>
                <Dropdown.Item eventKey="order-cardboard">
                  {t("portfolio.fourth-cardboard")}
                </Dropdown.Item>
                <Dropdown.Item eventKey="order-tys">
                  {t("portfolio.fourth-tys")}
                </Dropdown.Item>
                <Dropdown.Item eventKey="order-design">
                  {t("portfolio.fourth-design")}
                </Dropdown.Item>
                <Dropdown.Item eventKey="order-uf">
                  {t("portfolio.fourth-uf")}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* Image Gallery */}
          <div className="portfolio">
            {filteredImages.map((image, index) => (
              <div className="pics" key={index}>
                <img
                  src={image.src}
                  alt={`Example of the package ${index}`}
                  className="img-fluid"
                  onClick={() => handleModalOpen(image)}
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

const filterImages = (images, filter) => {
  return images.filter((image) => {
    switch (filter) {
      case "all":
        return true;
      case "order-all":
        return image.category.some((category) => category.startsWith("order-"));
      default:
        return image.category.includes(filter);
    }
  });
};
