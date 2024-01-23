const tooltipList = document.querySelectorAll(".tooltip");

tooltipList.forEach(function (element) {
  showTooltip(element);
});

function showTooltip(element) {
  if (element.hasAttribute("data-url")) {
    const tooltipText = element.innerText;
    element.innerText = "";
    const a = document.createElement("a");
    a.innerText = tooltipText;
    a.setAttribute("href", element.dataset.url);
    element.appendChild(a);
  }

  if (element.hasAttribute("data-tooltip-type")) {
    const tooltipType = element.dataset.tooltipType;
    const span = document.createElement("span");
    span.setAttribute("class", `tooltip__box tooltip__box--${tooltipType}`);

    if (tooltipType === "text") {
      const spanText = element.dataset.tooltipContent;
      span.innerText = spanText;
    } else if (tooltipType === "image") {
      const img = document.createElement("img");
      img.setAttribute("class", "tooltip__image");
      const imgSrc = element.dataset.tooltipContent;
      img.setAttribute("src", imgSrc);
      span.appendChild(img);
    }

    element.appendChild(span);
  }
}
