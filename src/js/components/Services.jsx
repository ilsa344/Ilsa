import React from 'react';

const Services = (props)=>{
	let columns=props.services[0].cards.map((v,i)=>{
		return(
			<div class="col-lg-3 col-sm-6" key={i}>
				<div class="single-product">
					<div class="icon">
						<i class={v.icon}></i>
					</div>
					<div class="desc">
						<h4>{v.card_title}</h4>
						<p>{v.card_text}</p>
					</div>
				</div>
			</div>
		)
	})
    return(
        <div>
            <section id="services" class="title-bg section-full">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-8">
						<div class="product-area-title text-center">
							<p class="text-white text-uppercase">{props.services[0].title}</p>
							<h2 class="text-white h1">{props.services[0].des}</h2>
						</div>
					</div>
				</div>
				<div class="row">
					{columns}
				</div>
			</div>
		</section>
        </div>
    )
}
export default Services;