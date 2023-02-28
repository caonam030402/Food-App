const search = document.querySelector(".header__search");
const listSearch = document.querySelector(".header__list--search");
const searchEle = search.querySelector(".header__search--ele");
const modal = document.querySelector(".modal");
const searchName = document.querySelector(".search__name");

// Get data
axios
  .get("/", {
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
  })
  .then((res) => {
    const data = res.data;
    importInput(data);
  })
  .catch((err) => {
    console.log(err);
  });

search.addEventListener("click", () => {
  searchEle.style.width = "300px";
  listSearch.style.display = "block";
  modal.style.display = "block";
});

modal.addEventListener("click", () => {
  listSearch.style.display = "none";
  modal.style.display = "none";
});

function importInput(e) {
  let data = e;

  search.addEventListener("keyup", (e) => {
    let dataName = e.target.value;
    let emptyArray = [];

    if (dataName) {
      emptyArray = data.filter((data) => {
        data = data.name;
        return data
          .toLocaleLowerCase()
          .startsWith(dataName.toLocaleLowerCase());
      });
      listSearch.style.display = "block";
    } else {
      listSearch.style.display = "none";
    }

    emptyArray = emptyArray.map((data) => {
      return (data = `<li class="header__search-item py-[10px] px-[15px]">
      <a src = "https://viblo.asia/p/toan-tap-ve-windowlocation-RQqKLq4NZ7z">${data.name}</a>
      </li>`);
    });
    showSuggestions(emptyArray);
  });
}

// Show list input
function showSuggestions(list) {
  let listData;
  if (!list.length) {
    listData = `<li class="header__search-item py-[10px] px-[15px]">No products found</li>`;
  } else {
    listData = list.join("");
  }
  listSearch.innerHTML = listData;
}

// get Search

// function getItems(cappitalSearch) {
//   axios
//   .get(`/search/${cappitalSearch}`, {
//     headers: {
//       "X-Requested-With": "XMLHttpRequest",
//     },
//   })
//   .then((res) => {
//     const data = res.data;
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// }

searchEle.addEventListener("keypress", (e) => {
  if (e.code === "Enter") {
    let cappitalSearch = searchEle.value.trim();
    const URL = `/product/search/${cappitalSearch}`;
    window.location.href = URL;
  }
});
