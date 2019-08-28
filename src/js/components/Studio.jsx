import React from 'react';

const Studio =(props)=>{
    return(
        <div>
            <section class="section-full studio-area my-5">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 col-md-4">
						<div class="studio-content">
							<p class="text-uppercase text-white">{props.studio[0].para}</p>
							<h2 class="h1 text-white text-uppercase mb-20">{props.studio[0].head}</h2>
							<p class="text-white mb-30">{props.studio[0].des}</p>
							<a href="#" class="primary-btn text-white d-inline-flex align-items-center">{props.studio[0].btn}<span class="lnr lnr-arrow-right"></span></a>
						</div>
					</div>
				</div>
			</div>
		</section>
        </div>
    )
}
export default Studio;