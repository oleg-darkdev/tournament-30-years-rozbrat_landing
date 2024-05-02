<script>
     import Chip, { Set, Text } from '@smui/chips';
 
  let choices = ['Shoes', 'Pants', 'Shirts', 'Hats', 'Coats'];
  let selected = ['Shoes', 'Shirts', 'Coats'];
</script>

<Set chips={choices} let:chip filter bind:selected>
  <Chip {chip} touch>
    <Text>{chip}</Text>
  </Chip>
</Set>