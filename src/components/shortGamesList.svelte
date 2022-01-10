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


<Card  style="max-width: 400px;">
    <Content component={List}>
    <Item>
        <Text style="color: #fff;">{text}</Text>
    </Item>
    <slot>


    </slot>
    </Content>
</Card>