import React from "react";
import "../styles/MyHashtags.css";

function Myhashtags() {
  return (
    <div className="Myhashtags">
      <form className="Category">
        Category
        <input type="text" name="category" />
      </form>
      <form className="Title">
        Title
        <input type="text" name="category" />
      </form>
      <form className="Hashtags">
        Hashtags
        <input type="text" name="category" />
      </form>
      <button className="SaveButton" type="submit">
        Save
      </button>
    </div>
  );
}

export default Myhashtags;
