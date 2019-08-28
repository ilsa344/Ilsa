import React from 'react';

const Header =(props)=>{
    return(
        <div>
            <section class="banner-area d-flex flex-column justify-content-center align-items-center relative" >
			<div class="overlay overlay-bg"></div>
			<div class="container text-center d-flex flex-column justify-content-center align-items-center">
                <p class="text-uppercase  text-white">{props.header[0].header_top}</p>
                <h1 class="text-uppercase text-white">{props.header[0].header_main}</h1>
                <a href="#" class="primary-btn banner-btn">{props.header[0].header_btn}</a>
			</div>
		</section>    
        </div>
    )
}

export default Header;