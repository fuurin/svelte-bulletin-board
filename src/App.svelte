<script>
  import { getComments } from './api'
  import { Container } from 'sveltestrap'
  import NavBar from './NavBar.svelte'
  import Comments from './Comments.svelte'
  import Updater from './Updater.svelte'
  import Form from './Form.svelte'

  let comments = []
  async function updateComments() {
    comments = await getComments()
  }

  updateComments()
</script>

<NavBar />
<Container class="mt-4 mb-5">
  <Comments comments={comments}/>
  <div class="mt-4">
    <Updater on:update={updateComments}/>
  </div>
  <hr class="my-4">
  <Form on:comment={updateComments} />
</Container>

<style>
</style>