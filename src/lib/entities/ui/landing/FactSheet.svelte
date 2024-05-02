<script>
	export let factsAboutBoardgame;
</script>

<div class="mt-0 max-w-7xl flex-col sm:flex lg:mt-6">
	<ul class="prose-md border-viol prose relative w-11/12 lg:w-8/12 lg:w-10/12">
		{#each factsAboutBoardgame as step}
			<li class="mb-2 ml-6">
				<h3 class="text-viol mb-1 flex items-center text-lg font-semibold dark:text-white">
					{step.title}
				</h3>
				<!-- <span class="bg-viol text-lightYellow text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">Latest</span> -->
				<!-- <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-violDark">{step.subTitle} </time> -->
				{#each step.description as description}
					<p class=" text-violDark text-base font-normal dark:text-gray-400">{description}</p>
					<!-- <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-viol bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg> Download ZIP</a> -->
				{/each}

				<!-- <ListTasks /> -->
			</li>
		{/each}
	</ul>
</div>

<!-- <li class="text-gray-500">Ain't no sunshine when she's gone.</li> -->
