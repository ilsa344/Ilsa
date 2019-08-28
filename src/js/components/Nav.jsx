import React from "react";

 const Nav = (props) => {

  console.log("nav-array",props.nav)

  window.addEventListener("scroll",function(e){
    if(window.scrollY){
      $('.navbar').addClass('white')
    }
    else{
      $('.navbar').removeClass('white')

    }
  })
  let list=props.nav[0].nav_list.map((v,i)=>{
    return(
      <li class="nav-item" key="i">
        <a class="nav-link" href="#">{v.link}</a>
      </li>
    )
  })
  return (
    <div className="purple">
      <nav class="navbar navbar-expand-lg  navbar-light sticky-top bg-animated"> 
          <div className="container">
          <a class="navbar-brand mr-5 pr-5" href="#"><img src={props.nav[0].nav_img} alt=""/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav  ml-auto ">
            {list}
          </ul>
          < span class="support-number ml-5"><a role="button" href="#"><i className="fa fa-search nav-link"></i></a></span>
        </div>
                </div>
      </nav>
    </div>
  );
};

export default Nav;
