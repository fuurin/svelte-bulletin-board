<script>
  import { Card, CardHeader, CardBody, FormGroup, Label, Input, Button } from 'sveltestrap'
  import { postComment } from './api'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  
  let name = ''
  let text = ''
  let sending = false

  async function comment() {
    if(!name || !text) {
      alert('入力されていない項目があります。')
      return
    }
    sending = true
    await postComment({name, text})
    dispatch('comment')
    text = ''
    sending = false
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
    <Button color='success' on:click={comment} disabled={sending}>投稿</Button>
  </CardBody>
</Card>