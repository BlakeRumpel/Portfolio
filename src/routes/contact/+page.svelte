<script>
	import { Avatar, Divider, GradientHeading } from "@skeletonlabs/skeleton";
	import Fa from "svelte-fa";
	import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
	import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
</script>

<svelte:head>
	<title>Contact Me &bull; Blake Rumpel</title>
</svelte:head>

<div class="container mx-auto my-8 space-y-8">
	<GradientHeading
		class="text-center"
		tag="h1"
		direction="bg-gradient-to-r"
		from="from-warning-500"
		to="to-primary-500"
	>
		Contact Me
	</GradientHeading>

	<div class="card max-w-xl mx-auto space-y-8 p-8">
		<div class="flex flex-wrap gap-8">
			<Avatar src="https://i.pravatar.cc" width="w-24" />
			<div class="flex flex-col justify-center">
				<h3>Blake Rumpel</h3>
				<p>Winnipeg MB, Canada</p>
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

		<Divider />

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
				<!--suppress CheckEmptyScriptTag -->
				<textarea id="message" rows="6" name="message" required />
			</label>

			<div>&nbsp;</div>
			<button type="submit" class="btn btn-filled-primary">Submit</button>
		</form>
	</div>
</div>
