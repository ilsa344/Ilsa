import React from 'react';

const Form =(props)=>{
    return(
        <div>
<section id="contact" class="section-full gray-bg">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-8">
						<div class="product-area-title text-center">
							<p class="text-uppercase">{props.form[0].para}</p>
							<h2 class="h1">{props.form[0].head}</h2>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-6 mt-30">
						<p>{props.form[0].des}</p>
						<div class="row">
							<div class="col-sm-6">
								<div class="address mt-20">
									<h6 class="text-uppercase mb-15">{props.form[0].physical}</h6>
									<p>{props.form[0].address}</p>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="address mt-20">
									<h6 class="text-uppercase mb-15">{props.form[0].web}</h6>
									<a href="tel:0000">{props.form[0].one}</a> <br/>
									<a href="tel:0000">{props.form[0].two}</a>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-6 mt-30">
						<form id="myForm" action="mail.php" method="post" class="contact-form">
							<div class="single-input color-2 mb-10">
								<input type="text" name="fname" placeholder="Full Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Full Name'" required/>
							</div>
							<div class="single-input color-2 mb-10">
								<input type="email" name="email" placeholder="Email Address" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address'" required/>
							</div>
							<div class="single-input color-2 mb-10">
								<input type="text" name="subject" placeholder="Subject" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Subject'" required/>
							</div>

							<div class="single-input color-2 mb-10">
								<textarea name="message" placeholder="Type your message here..." onfocus="this.placeholder = ''" onblur="this.placeholder = 'Type your message here...'" required></textarea>
							</div>
							<div class="d-flex justify-content-end"><button class="mt-10 primary-btn d-inline-flex text-uppercase align-items-center">Send Message<span class="lnr lnr-arrow-right"></span></button></div>
							<div class="alert"></div>
						</form>
					</div>
				</div>
			</div>
		</section>
        </div>
    )
}
export default Form;