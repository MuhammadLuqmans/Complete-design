import React, { useState } from "react";
import { Menu } from "./Data";

const MenuCompnent = () => {
  const [myData, setMyData] = useState();

  window.addEventListener("DOMContentLoaded", () => {
    MyButtons();
    MyMenuItems(Menu);
  });

  const MyMenuItems = (data) => {
    // var listData = document.getElementById("sectionCenter");
    return (
      <div>
      {setMyData(data.map((list) => {
          return (
            <article
            >
              <h3>{list.id}</h3>
              <img src={list.img} alt={list.title} width="300" className="photo" />
              <div className="list-info">
                <header>
                  <h4>{list.title}</h4>
                  <h4 className="price">{list.price}</h4>
                </header>
                <p className="list-text">{list.desc}</p>
              </div>
            </article>
          );
        }))}
      </div>
    );
  };

  const MyButtons = () => {
    var mybuttons = document.getElementById("mybuttons");
    const getCategory = Menu.reduce(
      (values, items) => {
        /// values ma array ha or items ma array ka object ha
        if (!values.includes(items.category)) {
          // console.log(values.category)
          values.push(items.category);
        }
        return values;
      },
      ["all"]
    );
    const btnsCategory = getCategory
      .map((btnData) => {
        return `<button type="button" class="filter-btn" data-id=${btnData}>
            ${btnData}
          </button>`;
      })
      .join("");
    mybuttons.innerHTML = btnsCategory;

    const filters = mybuttons.querySelectorAll(".filter-btn");

    filters.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.id;
        const menuCategory = Menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
          MyMenuItems(Menu);
        } else {
          MyMenuItems(menuCategory);
        }
      });
    });
  };

 

  return (
    <div>
      <div id="mybuttons">buttons</div>
      <div>{myData} </div>
    </div>
  );
};

export default MenuCompnent;
