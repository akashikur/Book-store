import React, { useState } from "react";
import Group from "../images/Group.png";
import textimage from "../images/KeazoNBOOKS.png";
import like from "../images/bx_bx-book-heart.png";
import noti from "../images/ic_round-notifications-none.png";
import dimon from "../images/Group (1).png";
import prof from "../images/IMG20210528181544.png";

const NavBar = ({ setSearchBooks, setDisplayInfo }) => {
  const [name, setName] = useState("");

  // to display the search function
  function handleSearch() {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${name}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        if (result.items.length > 0) {
          setSearchBooks(result.items);
        }
      })
      .catch(() => {
        console.log("error");
        alert("You enterd a wrong input");
      });
    setName("");
    setDisplayInfo(false);
  }

  return (
    <div className="navbar">
      <div className="logo">
        <img src={Group} alt="logo" />
        <img src={textimage} alt="textimage" />
      </div>
      <div className="inputClass">
        <input
          type="text"
          placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="icons">
        <img src={like} alt="like" />
        <img src={noti} alt="notification" />
        <img src={dimon} alt="dimond" />
        <img src={prof} alt="profile" />
      </div>
    </div>
  );
};

export default NavBar;
