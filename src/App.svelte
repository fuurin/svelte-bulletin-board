<script>
  import { Container } from 'sveltestrap'
  import NavBar from './NavBar.svelte'
  import Comments from './Comments.svelte'
  import Updater from './Updater.svelte'
  import Form from './Form.svelte'
</script>

<NavBar />
<Container class="mt-4 mb-5">
  <Comments />
  <div class="mt-4">
    <Updater/>
  </div>
  <hr class="my-4">
  <Form/>
</Container>
