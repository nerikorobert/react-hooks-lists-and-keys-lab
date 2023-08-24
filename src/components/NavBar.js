import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksMap=links.map((link)=>{
    console.log(link)
    let newLink = `#${link}`
    return <a key={link} href={newLink}>{link}</a>;
  })

  return <nav>{linksMap}</nav>;
}

export default NavBar;