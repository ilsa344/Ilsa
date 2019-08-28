import React from 'react';

const Portfolio=(props)=>{
    let images=props.portfolio[0].imgs.map((v,i)=>{
        return(
            <div class="mix category-1 col-lg-3 col-md-4 col-sm-6 single-filter-content content-1" data-myorder="1" style={{backgroundImage:`url(${v.bg_img})`}} key={i}>
                <div class="overlay overlay-bg-content d-flex align-items-center justify-content-center flex-column">
                    <p class="text-white">{v.manipulate}</p>
                    <div class="line"></div>
                    <h5 class="text-white text-uppercase">{v.create}</h5>
                </div>
            </div>
        )
    })
    return(
        <div>
            <section id="protfolio" class="section-full">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-8">
						<div class="product-area-title text-center">
							<p class="text-uppercase big">{props.portfolio[0].title}</p>
							<h2 class="h1 my-5 black" style={{"color":"black"}}>{props.portfolio[0].des}</h2>
						</div>
					</div>
				</div>
			</div>



			<div id="filter-content" class="row no-gutters mt-5 mt-70">
				{images}
			</div>
		</section>
        </div>
    )
}
export default Portfolio;