const tooltipList = document.querySelectorAll(".tooltip");

tooltipList.forEach(function (element) {
  showTooltip(element);
});

function showTooltip(element) {
  createAnchor(element);
  createTooltip(element);
}

function createAnchor(element) {
  if (element.hasAttribute("data-url")) {
    const tooltipText = element.innerText;
    element.innerText = "";
    const a = document.createElement("a");
    a.innerText = tooltipText;
    a.setAttribute("href", element.dataset.url);
    element.appendChild(a);
  }
}

function createTooltip(element) {
  const tooltipType = element.dataset.tooltipType;
  const span = document.createElement("span");
  span.setAttribute("class", `tooltip__box tooltip__box--${tooltipType}`);

  if (tooltipType === "text") {
    createTooltipText(element, span);
  } else if (tooltipType === "image") {
    createTooltipImg(element, span);
  }
}

function createTooltipText(element, span) {
  const spanText = element.dataset.tooltipContent;
  span.innerText = spanText;
  element.appendChild(span);
}

function createTooltipImg(element, span) {
  const img = document.createElement("img");
  img.setAttribute("class", "tooltip__image");
  const imgSrc = element.dataset.tooltipContent;
  img.setAttribute("src", imgSrc);
  span.appendChild(img);
  element.appendChild(span);
}
