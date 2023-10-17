import React, { useState } from "react";
import "./App.css";
import foto from "./foto.jpg";

function AccordionItem({ title, content, isOpen, onClick }) {
  return React.createElement(
    "div",
    { className: `accordion-item ${isOpen ? "open" : ""}` },
    React.createElement(
      "div",
      { className: "accordion-title", onClick: onClick },
      title
    ),
    isOpen &&
      React.createElement("div", { className: "accordion-content" }, content)
  );
}

function App() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showFoto, setShowFoto] = useState(false);

  const toggleFotoHandler = () => {
    setShowFoto(!showFoto);
  };

  const items = [
    {
      title: "Jurusan",
      content: "Informatika",
    },
    {
      title: "Angkatan",
      content: "Gen 2",
    },
    {
      title: "Jalur Sukses",
      content: "Family Business",
    },
    {
      title: "Hobby",
      content: "Main Game",
    },
  ];

  const handleAccordionClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return React.createElement(
    "div",
    { className: "container-full" },
    React.createElement(
      "div",
      { className: "container-atas" },
      React.createElement(
        "div",
        { className: "container-kiri" },
        showFoto
          ? React.createElement("img", {
              src: foto,
              className: "fotoatur",
              alt: "Foto",
            })
          : React.createElement("div", { className: "fotoatur-placeholder" }),
        React.createElement(
          "button",
          { className: "btnatur", onClick: toggleFotoHandler },
          showFoto ? "Sembunyikan Foto" : "Tampilkan Foto"
        )
      ),
      React.createElement(
        "div",
        { className: "container-kanan" },
        React.createElement(
          "div",
          { className: "container-kananAtas" },
          React.createElement("h1", null, "Hendra Oktarizal Couwandy")
        ),
        React.createElement(
          "div",
          { className: "container-kananBawah" },
          items.map((item, index) =>
            React.createElement(AccordionItem, {
              key: index,
              title: item.title,
              content: item.content,
              isOpen: index === openIndex,
              onClick: () => handleAccordionClick(index),
            })
          )
        )
      )
    ),
    React.createElement(
      "div",
      { className: "container-bawah" },
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet arcu mattis mauris ornare tincidunt. Aliquam arcu dolor, semper sodales erat et, hendrerit pretium ligula. In vitae sagittis sem. Aliquam volutpat vitae metus non vehicula. Aliquam eget neque bibendum, gravida enim in, imperdiet est. Quisque sodales erat tincidunt quam dignissim, nec iaculis odio fringilla. Suspendisse tempus aliquet ex eu tempus. Ut sit amet pharetra metus. Maecenas pellentesque ligula at elit fringilla, quis lobortis diam rutrum."
    )
  );
}

export default App;
