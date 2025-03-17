<script lang="ts">
	import { Avatar } from "@skeletonlabs/skeleton";
	import Fa from "svelte-fa";
	import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
	import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
</script>

<svelte:head>
	<title>Contact Me &bull; Blake Rumpel</title>
</svelte:head>

<section id="contact" class="flex flex-col my-16 gap-16 scroll-m-16">
	<h1 class="text-center">Contact Me</h1>

	<div class="card w-full max-w-xl mx-auto space-y-8 p-8">
		<div class="flex flex-wrap gap-8">
			<Avatar src="/img/profile.jpg" width="w-24" />
			<div class="flex flex-col gap-2 justify-center">
				<h3>Blake Rumpel</h3>
				<p>Let's get in touch!</p>
				<div class="flex gap-4">
					<a class="flex items-center gap-2" href="mailto:hi@blakerumpel.com">
						<Fa icon={faEnvelope} /> Email
					</a>
					<a
						class="flex items-center gap-2"
						href="https://www.linkedin.com/in/blake-rumpel/"
						target="_blank"
						rel="noreferrer"
					>
						<Fa icon={faLinkedin} /> Linkedin
					</a>
				</div>
			</div>
		</div>

		<hr />

		<form action="https://formbold.com/s/6Qg53" method="POST" class="grid gap-4">
			<label for="name" class="col-span-2 md:col-span-1">
				<span>Name</span>
				<input type="text" id="name" name="name" required />
			</label>
			<label for="email" class="col-span-2 md:col-span-1">
				<span>Email</span>
				<input type="email" id="email" name="email" required />
			</label>
			<label for="subject" class="col-span-2">
				<span>Subject</span>
				<input type="text" id="subject" name="subject" required />
			</label>
			<label for="message" class="col-span-2">
				<span>Message</span>
				<textarea id="message" rows="6" name="message" required></textarea>
			</label>

			<div>&nbsp;</div>
			<button type="submit" class="btn variant-filled-primary">Submit</button>
		</form>
	</div>
</section>
