const list = [
  {
    id: 1,
    parentId: null,
    text: "Usage",
    link: "#Usage",
  },
  {
    id: 44,
    parentId: null,
    text: "History",
    link: "#History",
  },
  {
    id: 7,
    parentId: 44,
    text: "Dialects",
    link: "#Dialects",
  },
  {
    id: 31,
    parentId: 44,
    text: "Java",
    link: "#Java",
  },
  {
    id: 24,
    parentId: null,
    text: "JavaScript for WWW",
    link: "#JavaScript_for_WWW",
  },
  {
    id: 10,
    parentId: 24,
    text: "Interaction",
    link: "#Interaction",
  },
  {
    id: 25,
    parentId: 24,
    text: "Embedding",
    link: "#Embedding",
  },
];

const contentListPlace = document.querySelector(".article__list");
const contentList = document.createElement("ul");
contentListPlace.appendChild(contentList);

list.forEach(function (element) {
  if (element.parentId === null) {
    createContentList(element, contentList);
  }
});

const contentChildrenPlaces = contentList.querySelectorAll("[data-id]");

contentChildrenPlaces.forEach(function (element) {
  const childrenList = createChildrenList(element);

  if (childrenList.length > 0) {
    const ul = document.createElement("ul");
    element.appendChild(ul);

    childrenList.forEach(function (element) {
      createContentList(element, ul);
    });
  }
});

function createContentList(element, parent) {
  const li = document.createElement("li");
  if (element.id && element.parentId === null) {
    li.setAttribute("data-id", element.id);
  }
  parent.appendChild(li);

  const a = document.createElement("a");
  if (element.link) {
    a.setAttribute("href", element.link);
  }
  if (element.text) {
    a.innerText = element.text;
  }

  li.appendChild(a);
}

function createChildrenList(element) {
  const id = Number(element.dataset.id);
  const childrenList = [];
  list.forEach(function (elem) {
    if (elem.parentId === id) {
      return childrenList.push(elem);
    }
  });
  return childrenList;
}
