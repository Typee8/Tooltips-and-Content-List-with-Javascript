const list = [
    {
        id: 1,
        parentId: null,
        text: 'Zastosowanie',
        link: '#Zastosowanie',
    },
    {
        id: 44,
        parentId: null,
        text: 'Historia',
        link: '#Historia',
    },
    {
        id: 7,
        parentId: 44,
        text: 'Dialekty',
        link: '#Dialekty',
    },
    {
        id: 31,
        parentId: 44,
        text: 'Java',
        link: '#Java',
    },
    {
        id: 24,
        parentId: null,
        text: 'JavaScript dla WWW',
        link: '#JavaScript_dla_WWW',

    },
    {
        id: 10,
        parentId: 24,
        text: 'Interakcja',
        link: '#Interakcja'
    },
    {
        id: 25,
        parentId: 24,
        text: 'Osadzanie',
        link: '#Osadzanie',
    },
    {
        id: 60,
        parentId: null,
        text: 'TestParent',
        link: '#'
    },
    {
        id: 61,
        parentId: 60,
        text: 'Testchild1',
        link: '#'
    },
    {
        id: 62,
        parentId: 60,
        text: 'Testchild2',
        link: '#'
    },
    {
        id: 63,
        parentId: 60,
        text: 'Testchild3',
        link: '#j'
    }
];

const contentListLocation = document.querySelector(".article__list");
const contentList = document.createElement('ul');
contentListLocation.appendChild(contentList);

list.forEach (function (element) {
  if (element.parentId === null) {
    const li = document.createElement('li');
    if (element.id) {
      li.setAttribute('data-id', element.id);
    }

    contentList.appendChild(li);

    const a = document.createElement('a');
    if (element.link) {
      a.setAttribute('href', element.link);
    }
    if (element.text) {
      a.innerText = element.text;
    }

    li.appendChild(a);
  }
})

const contentLiList = contentList.querySelectorAll("[data-id]");
contentLiList.forEach (function (element) {
  const id = Number(element.dataset.id);
  const childrenList = [];
  list.forEach (function (elem) {
    if (elem.parentId === id) {
      return childrenList.push(elem);
    }
  })

  if (childrenList.length > 0) {
    const ul = document.createElement('ul');
    element.appendChild(ul);

    childrenList.forEach (function (item) {
      const li = document.createElement('li');
      ul.appendChild(li);
      const a = document.createElement('a');
      a.setAttribute('href', item.parentId);
      a.innerText = item.text;
      li.appendChild(a);
    })
  }
})