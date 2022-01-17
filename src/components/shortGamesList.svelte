<script>
  import List, {
    Item,
    Text
} from '@smui/list';
 import Card, {
    Content
  } from '@smui/card';

  export let text;
</script>   


<Card  style="max-width: 400px; color: #fff; background-color: rgb(25, 27, 27);">
    <Content component={List}>
    <Item style="background-color: rgb(25, 27, 27);">
        <Text style="color: #fff;">{text}</Text>
    </Item>
    <slot>


    </slot>
    </Content>
</Card>