<script>
  import Paper, { Title, Subtitle, Content } from "@smui/paper";
  import MenuSurface, { Anchor } from "@smui/menu-surface";
  import Fab, { Label, Icon } from "@smui/fab";

  export let showPolicyMenu = "",
	text = [];




</script>


<MenuSurface
  style="width: 100%; width:auto; height: 450px;"
  bind:this={showPolicyMenu}
  anchorCorner="TOP_LEFT">
  <div
    style="margin: 1em; display: flex; flex-direction: column; align-items:
    flex-end;">
    <!-- <div
      style="display: flex; background-color:#fff; border-radius: 4px;
      justify-content: center; margin-bottom: 25px;">
      <img
        src="https://i.imgur.com/jUtLNQj.png"
        style="height: 250px; width: 100%;"
        alt="" />
    </div> -->

    {#each text.text as listItem, listItemNumber}
      <Paper
        style=" margin-bottom: 25px; width: 90%;"
        transition
        color="secondary"
        class="paper-demo">
        <!-- <div
          class="row"
          style="align-items: center; justify-content: space-between;
          align-content: center; "> -->

        <Title>{listItemNumber + 1}. {listItem.title}</Title>
        <!--
          <Fab
            color="primary"
            on:click={() => {
              listItem.show = !listItem.show;
            }}
            mini>
            <Icon class="material-icons">
              {listItem.show ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}
            </Icon>
          </Fab> -->

        <!-- </div> -->
        <Subtitle>{listItem.subtitle}</Subtitle>

        <Content>
          <!-- <div class:hidden={listItem.show}> -->

          <Paper class="column">
            {#each listItem.text as paragraph, paragraphNumber}
              <p class="mdc-typography--body2" style="margin-bottom: 15px; ">
                <span style="color: #4a148c">
                  {listItemNumber + 1}.{paragraphNumber + 1}.
                </span>
                {paragraph.main}
              </p>
							{#each paragraph.sub as subParagraph, subParagraphNumber}
              <p class="mdc-typography--body2" style="margin: 0 0 15px 25px; ">
                <span style="color: #4a148c">
                  {listItemNumber + 1}.{paragraphNumber + 1}.{subParagraphNumber + 1}.
                </span>
                {subParagraph}
              </p>
            {/each}
            {/each}
          </Paper>
          <!-- </div> -->
        </Content>
      </Paper>
    {/each}
  </div>
</MenuSurface>

<style>
  text {
  }
</style>
