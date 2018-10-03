
<?php
	$title = "Contact Us || XYZ";
	include("header.php");
?>
	
	<!--banner-->
	<div class="call-to-action bg-color" style="height:300px;padding: 0px;">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-12 col-md-12" style="padding: 70px 0px;">
					<h4 style="color: #fff;font-size: 26px;text-align: center;padding: 60px 0px">CONTACT US</h4>
				</div>

			</div>
		</div>
	</div>
	<!--# banner-->
	
	<section class="contact s-padding bg-secondry" id="contact">
		<div class="container">
			<div class="row">
				<div class="section-title">
					<h2>Get In Touch</h2>
				</div>
				<div class="col-lg-7 mt-30">
                   <form id="contactform" method="post" action="mailsend.php" class="contactform default mb-5 mb-lg-0">
                       	<div class="row">
                       		<div class="col-md-6">
                       			<div class="form-group">
                       				<input type="text" placeholder="Name*" class="form-control" id="name">
                       			</div>
                       		</div>
                       		<div class="col-md-6">
                       			<div class="form-group">
                       				<input type="text" placeholder="Phone*" class="form-control" id="number">
                       			</div>
                       		</div>
                       	</div>
                       	
                       	
                       	<div class="form-group">
                       		<input type="email" placeholder="Email*" class="form-control" id="email">
                       	</div>
                       	<div class="form-group">
                       		<textarea id="address" placeholder="Address" class="form-control" rows="3"></textarea>
                       	</div>
                       	<div class="form-group">
                       		<textarea id="message" placeholder="Message..." class="form-control" rows="5"></textarea>
                       	</div>
                       	<div class="form-submit-btn text-center">
                       		<button class="btn" type="submit" id="form-submit" name="submit">SEND MESSAGE</button>
                       	</div>
                   </form>
				</div>
				<div class="col-lg-5">
					<div class="row">
						<div class="col-md-12 mt-5 mb-4">
							<div class="contact-item">
								<i class="ion-iphone"></i>
								<h4>Phone</h4>
								<a href="tel: +x-xxx-xxx-xxxx"><span>+x-xxx-xxx-xxxx</span></a>
							</div>
						</div>
						<div class="col-md-12 mb-4">
							<div class="contact-item">
								<i class="ion-email"></i>
								<h4>E-mail</h4>
								<span>contact@Xyz.com</span>
							</div>
						</div>
						<div class="col-md-12 mb-4">
							<div class="contact-item">
								<i class="ion-ios-location"></i>
								<h4>Address</h4>
								<span>000 xyz Avenue xyz, yy 00000</span>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</section>
<?php
	include("footer.php");
?>
