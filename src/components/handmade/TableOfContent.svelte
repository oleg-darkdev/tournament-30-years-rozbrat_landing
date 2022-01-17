<script>
 import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
    Actions,
    ActionButtons,
    ActionIcons,
  } from '@smui/card';
  import List, {
    Item,
    Text,
    PrimaryText,
    SecondaryText
} from '@smui/list';
import ShortGamesList from '../../components/shortGamesList.svelte';

export let arrayOfAuctions;
export let activeAuctions;
export let nonActiveAuctions;


</script>

<div style="display: flex; justify-content: center;align-items: center; width: 100%;  background-color:#191B1B;  ">
    <section style="width: 430px; margin: 0; display: flex;  height: auto; ">
        <div class="tur-bg" style="flex-direction: column; align-items: center;">
            <!-- max-width: 380px; -->
            <Card style="width: 400px;  margin-bottom: 15px;">
      <!-- <PrimaryAction on:click={() => clicked++}> -->
        <Media  style="height: 515px; width: 100%; background-image: url('img/handmade.png');"/>
        <Content class="mdc-typography--body2" style="background-color: rgb(25, 27, 27); color: #fff; ">
              <p>
                At the moment I am found money for the development and printing of my games, and i organized auctions of items that I made with my own hands.
              </p>
          <!-- -->
             <!-- В данный момент я собираю деньги на разработку и печать моих игр.   -->
             <!-- At the moment I am found money for the development and printing of my games.
              
          
        <Button href="#auctions" style="border-color: #47babb; margin: 5px;" variant="outlined">
            <Label>Go to auctions</Label>
        </Button> -->
           <!-- <span style=" color: #47babb;">active auctions: {activeAuctions}</span> <br>
           <span style=" color: #ff3e00;">paused auctions: {nonActiveAuctions}</span> <br> -->
          <!-- <h3
            class="mdc-typography--subtitle2"
            style="margin: 0 0 10px; color: #888;"
          >
            And a subtitle.
          </h3> -->
        </Content>
    </Card>

      <ShortGamesList text="I raise money money for next games 👇" style="">
        {#each arrayOfAuctions as game}
            <!-- <Item style="background-image: url('img/games/mini/gulag_minibanner.png'); height: 95px; width: auto;" on:click={() => location.href = `auctions/${game.croundfanding.links.auction}`}> -->
                <!-- <Text style="color: #47babb">{game.promo.name}</Text> -->
            <!-- </Item> -->
             <Item style="background-color: rgb(25, 27, 27)" on:click={() => location.href = `auctions/${game.croundfanding.links.auction}`}>
                <Text style="color: #47babb">{game.promo.name}</Text>
            </Item>
        {/each}
      </ShortGamesList>

        </div>
    </section>
</div>
