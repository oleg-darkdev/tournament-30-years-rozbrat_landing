<script>
		 import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons} from '@smui/card';

     const socialMini = [
	// main, faq, Workshops, news
	{
		img: "img/social/fb_mini.png",
		link: "",
	},
	{
		img: "img/social/in_mini.png",
		link: "",
	},
	{
		img: "img/social/insta_mini.png",
		link: "",
	},
	{
		img: "img/social/telega_mini.png",
		link: "",
	},
	{
		img: "img/social/tweeter_mini.png",
		link: "",
	},
	{
		img: "img/social/youtube_mini.png",
		link: "",
	},
];
    

		 import Paper, { Title, Subtitle } from '@smui/paper';

export let title = ''
</script>

  <Paper style="margin: 0 auto; height: auto; margin-bottom: 25px;" class="paper-demo">
    <Title style="font: 30px 'grafitty';">{title + ` 👇`}</Title>
    <!-- <Subtitle>This is a sheet of paper.</Subtitle> -->
    <Content style="display: flex; flex-direction: row; justify-content: center; max-width: 600px; flex-wrap: wrap;">
	{#each socialMini as social}
      <Card style="width: 70px; margin: 5px;">
				<PrimaryAction on:click={() => location.href = social.link}>
        <Media class="card-media-square" style="background-image: url('{social.img}');" aspectRatio="square">
        </Media>
				</PrimaryAction>
      </Card>
		{/each}

		</Content>
  </Paper>

