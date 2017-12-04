<!DOCTYPE html>
<html lang="en">
<head>
	<title>Title</title>
	<?php include '../sections/head.php'; ?>
</head>
<body>
<!-- Header -->
<header>
	<?php include '../sections/header.php'; ?>
</header>
<!-- Content -->
<main class="hiw-cont">
	<section class="hiw-cont__lid">
		<div class="def-width">
			<div class="hiw-cont__lid-left">
				<h1>How does it all work?</h1>
				<p>It's easier than you think!</p>
			</div>
			<div class="hiw-cont__lid-right">
				<ul>
					<li><img src="../images/svg/icon-messenger.svg" alt=""><p>Use our online Chat to keep in touch with us or use the “call back” feature</p></li>
					<li><img src="../images/svg/icon-chat-2.svg" alt=""><p>Provide all necessary instruction and discuss your order with our responsive support managers</p></li>
					<li><img src="../images/svg/icon-info.svg" alt=""><p>We will respond with a clear price calculation, key issues on your paper and link to complete the payment</p></li>
					<li><img src="../images/svg/icon-payment.svg" alt=""><p>Use your credit card or PayPal account to complete the transaction</p></li>
					<li><img src="../images/svg/icon-like.svg" alt=""><p>You will be notified once your writer is done with the paper</p></li>
					<li><img src="../images/svg/icon-email.svg" alt=""><p>A completed paper will be delivered to your e-mail by the deadline</p></li>
				</ul>
			</div>
		</div>
	</section>
	<section class="hiw-cont__price">
		<div class="def-width">
			<img src="../images/svg/icon-prise.svg" alt="">
			<h2>What factors influence the price?</h2>
			<p>The price per page influenced by various key issues. They include the timeframe, the volume, the topic, the grade level, etc. We provide a clear pricing policy with no hidden fees and charges. The price you receive will include all the commissions. You are free to reject it if you think it is too high.</p>
		</div>
	</section>
	<section class="hiw-cont__things">
		<div class="def-width">
			<h2>What type of assistance can your writers provide?</h2>
			<div class="hiw-cont__things-lists">
				<ul>
					<li><img src="../images/svg/icon-book.svg" alt=""><p>Order books for you</p></li>
					<li><img src="../images/svg/icon-paper.svg" alt=""><p>Find a top talented Nerd to edit and proofread your paper</p></li>
					<li><img src="../images/svg/icon-movie.svg" alt=""><p>Find a nerd to write a movie or book summary</p></li>
				</ul>
				<ul>
					<li><img src="../images/svg/icon-books.svg" alt=""><p>Book study rooms</p></li>
					<li><img src="../images/svg/icon-loupe.svg" alt=""><p>Search for notes or online classes on a specific topic</p></li>
					<li><img src="../images/svg/icon-chat.svg" alt=""><p>Arrange tutoring sessions with nerds</p></li>
				</ul>
			</div>
		</div>
	</section>
	<div class="hiw-cont__contact">
		<div class="def-width">
			<p>We can cope with any academic task in addition to other services. Contact us for more detailed information.</p>
		</div>
	</div>
	<section class="hiw-cont__guar">
		<div class="def-width">
			<img src="../images/svg/icon-badge-moneyback.svg" alt="">
			<h2>Can I really count on you?</h2>
			<p>We provide a set of additional guarantees to enable 100% customers’ satisfaction and confidence regarding the result of their order. Whether you are not satisfied with the result, you can opt for an unlimited number of free revisions. We also guarantee a full refund if we are unable to meet your requirements. Please check with our <a href="/asaphelper/terms-cond/">Term and Conditions</a> before placing the order. </p>
		</div>
	</section>
	<section class="home-cont__say">
		<div class="def-width">
			<h2>What do our clients tell us about their customer experience?</h2>
			<ul class="home-cont__say-slider">
				<li>
					<div class="home-cont__say-slider-top">
						<div>
							<img src="../images/img-avatar.png" width="50" height="50" class="retina" alt="">
						</div>
						<div>
							<strong>Kate</strong>
							<p>3rd year student</p>
						</div>
					</div>
					<p>Real magicians work here! It seems there is nothing impossible for them! They can cope any task in spite of the deadline.</p>
				</li>
				<li>
					<div class="home-cont__say-slider-top">
						<div>
							<img src="../images/img-avatar.png" width="50" height="50" class="retina" alt="">
						</div>
						<div>
							<strong>Kate</strong>
							<p>80 level student</p>
						</div>
					</div>
					<p>They give their personal touch to your every requirement. This is what makes this particular service so unique and different from many others. I can always count on them no matter how tough the task is!</p>
				</li>
				<li>
					<div class="home-cont__say-slider-top">
						<div>
							<img src="../images/img-avatar.png" width="50" height="50" class="retina" alt="">
						</div>
						<div>
							<strong>Kate</strong>
							<p>3rd year student</p>
						</div>
					</div>
					<p>Never hesitate to keep in touch with those writers. They will let you get rid of all your academic troubles once and for all!</p>
				</li>
			</ul>
		</div>
	</section>
	<section class="hiw-cont__git">
		<div class="def-width">
			<h2 class="like-h1">The sooner you get in touch, the sooner we will help!</h2>
			<p>Message us to learn more about what ASAPHelper can do!</p>
			<a href="#" class="butn butn-blue">Go to messenger</a>
		</div>
	</section>
	<section class="home-cont__phone">
		<div class="def-width">
			<h4>Indicate your contact information and wait for a life-saving call!</h4>
			<p>Just tell us your phone number and we will text you from 77467.</p>
			<form action="" method="post" class="phone-form" id="phone-form">
				<div class="phone-cover">
					<input type="text" class="phone-number" id="phonenubmer" onfocus="this.placeholder=''" onblur="this.placeholder='XXX XXX XXXX'" name="phone" maxlength="12" minlength="12" placeholder="XXX XXX XXXX" required>
				</div>
				<span>Make sure you are aware of our <a href="/asaphelper/terms/">Terms of Use</a> before providing your phone number</span>
				<button type="submit" class="butn butn-green">Text Me</button>
			</form>
		</div>
	</section>
</main>
<!-- Footer -->
<footer>
	<?php include '../sections/footer.php'; ?>
	<script>
		// Contact form validate options
		$("#phone-form").validate({
			rules: {
				phone: {
					required: true,
					minlength: 12
				}
			},
			messages: {
				phone: {
					required: "Please enter you phone number",
					minlength: "Phone number must consist of at least 10 characters"
				}
			}
		});
		// bxSlider
		$(document).ready(function(){
			$('.home-cont__say-slider').bxSlider({
				slideWidth: 530,
				slideMargin: 20,
				minSlides: 1,
				maxSlides: 1,
				//auto: true,
				//pause: 2000
			});
		});
	</script>
</body>
</html>
