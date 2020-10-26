import React from "react";

function Header() {
  return (
    <div className="jumbotron empHeader">
      <p>Employee Directory</p>

      <p id="empHeaderBody">
        Click on 'First' and 'Last' column headers to sort employees
        alphabetically by their first or last names. Use the search box to
        narrow your results.
      </p>
    </div>
  );
}
export default Header;
