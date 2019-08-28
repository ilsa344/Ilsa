import React from 'react';

const People=(props)=>{
	let peopleData=props.people[0].person.map((v,i)=>{
		return(
			<div class="col-lg-3 col-sm-6" key={i}>
				<div class="single-member">
					<div class="thumb relative" style={{"background": `url(${v.bg_img})`}}>
						<div class="overlay overlay-member d-flex flex-column justify-content-end align-items-center">
							<p class="text-white">This article is floated online with an aim to help you find the best dvd printing solution. Dvd</p>
							<div class="line"></div>
							<div class="social d-flex align-items-center justify-content-center">
								<a href="#"><i class={v.icon1}></i></a>
								<a href="#"><i class={v.icon2}></i></a>
								<a href="#"><i class={v.icon3}></i></a>
							</div>
						</div>
					</div>
					<div class="desc text-center">
						<h5 class="text-uppercase" id="black">{v.name}</h5>
						<p>{v.profession}</p>
					</div>
				</div>
			</div>
		)
	})
    return(
        <div>
            <section id="team" class="pb-150">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-8">
						<div class="product-area-title text-center">
							<p class="text-uppercase">{props.people[0].title}</p>
							<h2 class="h1">{props.people[0].des}</h2>
						</div>
					</div>
				</div>
				<div class="row">
					{peopleData}
				</div>
			</div>
		</section>
        </div>
    )
}
export default People;