<script>
  import { Card, CardHeader, CardBody, FormGroup, Label, Input, Button } from 'sveltestrap';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  
  let name = ''
  let text = ''
  const comment = () => {
    if(!name || !text) {
      alert('入力されていない項目があります。')
      return
    }
    // あとでaxiosにする。handleCommentで更新する。
    dispatch('comment', {name, text})
    text = ''
  }
</script>

<Card>
  <CardHeader>コメントを投稿する</CardHeader>
  <CardBody>
    <FormGroup>
      <Label>名前</Label>
      <Input type='text' bind:value={name} />
    </FormGroup>
    <FormGroup>
      <Label>コメント</Label>
      <Input type='textarea' bind:value={text} />
    </FormGroup>
    <Button color='success' on:click={comment}>投稿</Button>
  </CardBody>
</Card>