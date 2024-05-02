<script>
	import { Footer } from '$lib/widgets';
</script>

<section class="h-auto">
	<div
		class="start-1/2 h-16 w-full max-w-lg -translate-x-1/2 rounded-full border border-gray-200 bg-white rtl:translate-x-1/2 dark:border-gray-600 dark:bg-gray-700"
	>
		<div class="mx-auto grid h-full max-w-lg grid-cols-3">
			<button
				aria-label="Home"
				href=""
				role="button"
				class="rounded-s-full group inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-5 w-5 shrink-0 text-gray-500 dark:text-gray-400"
					role="img"
					aria-label="home solid"
					viewBox="0 0 20 20"
					tabindex="0"
					><path
						fill="currentColor"
						d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
					/></svg
				> <span class="sr-only">Home</span></button
			>

			<div class="flex items-center justify-center">
				<button
					aria-label="Create new item"
					href=""
					role="button"
					btnclass="inline-flex items-center justify-center w-10 h-10 font-medium bg-primary-600 rounded-full hover:bg-primary-700 group focus:ring-4 focus:ring-primary-300 focus:outline-none dark:focus:ring-primary-800"
					class="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:focus:ring-primary-800 group group inline-flex h-10 w-10 flex-col items-center justify-center rounded-full px-5 font-medium focus:outline-none focus:ring-4 dark:hover:bg-gray-800"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						class="h-5 w-5 shrink-0 text-white"
						role="img"
						aria-label="plus solid"
						viewBox="0 0 18 18"
						tabindex="0"
						><path
							fill="currentColor"
							d="M17 8h-7V1a1 1 0 0 0-2 0v7H1a1 1 0 0 0 0 2h7v7a1 1 0 1 0 2 0v-7h7a1 1 0 1 0 0-2Z"
						/></svg
					> <span class="sr-only">Create new item</span></button
				>
			</div>

			<button
				aria-label="Profile"
				href=""
				role="button"
				class="rounded-e-full group inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-5 w-5 shrink-0 text-gray-500 dark:text-gray-400"
					role="img"
					aria-label="user circle solid"
					viewBox="0 0 20 20"
					tabindex="0"
					><path
						fill="currentColor"
						d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.948 8.948 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
					/></svg
				> <span class="sr-only">Profile</span></button
			>
		</div>
	</div>
</section>

<Footer />
