import React from 'react';

const About = (props)=>{
    let figure= props.about[0].about_data.map((v,i)=>{
        return(
            <div class="col-md-4 col-sm-4" key={i}>
                <div class="card border-0">
                    <img src={v.about_img} class="card-img-top" alt="..."/>
                    <div class="card-body text-center">
                        <h1 class="card-title">{v.about_name}</h1>
                        <p class="card-text">{v.about_description}</p>
                        <a href="#" class="btn cardbtn btn-primary">{v.about_btn}</a>
                    </div>
                </div>
            </div>
        )
    })
    return(
        <div>
            <section class="section-full gray-bg">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-10">
						<div class="section-title text-center">
							<p>{props.about[0].title}</p>
                            <p className="des py-5">{props.about[0].description}</p>
                        </div>
					</div>
				</div>
				<div class="row">
                    {figure}
				</div>
			</div>
		</section>
        </div>
    )
}
export default About;