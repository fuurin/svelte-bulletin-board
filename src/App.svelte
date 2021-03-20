<script>
  import { Container } from 'sveltestrap'
  import NavBar from './NavBar.svelte'
  import Comments from './Comments.svelte'
  import Form from './Form.svelte'

  let comments = [
    {
      name: 'Aさん',
      text: 'おはよう',
      timestamp: new Date('2021-04-07 07:00:00Z')
    },
    {
      name: 'Bさん',
      text: 'こんにちは\nみなさん',
      timestamp: new Date('2021-04-07 12:00:00Z')
    },
    {
      name: 'Cさん',
      text: 'こんばんは\nお疲れ様です\nお元気ですか？',
      timestamp: new Date('2021-04-07 19:00:00Z')
    }
  ]
  const handleComment = (comment) => {
    comments = [...comments, {...comment, timestamp: new Date()}]
  }
</script>

<NavBar />
<Container class="mt-4 mb-5">
  <Comments comments={comments}/>
  <hr class="my-4">
  <Form on:comment={(event) => {handleComment(event.detail)}} />
</Container>

<style>
</style>