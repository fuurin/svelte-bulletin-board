<script>
  import { Button } from 'sveltestrap'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  const update = () => dispatch('update')
</script>

<Button color='secondary' on:click={update}>更新</Button>