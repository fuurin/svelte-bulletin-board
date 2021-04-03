<script>
  import { Button } from 'sveltestrap'
  import { updateComments } from './stores'

  const UPDATE_INTERVAL = 5000 // ms
  let timer = null

  const autoUpdate = (checked) => {
    if (checked) {
      updateComments()
      timer = setInterval(updateComments, UPDATE_INTERVAL)
    } else if (timer !== null) {
      clearInterval(timer)
    }
  }
</script>

<Button color='secondary' on:click={updateComments}>
  更新
</Button>
<label class='ml-3'>
  <input type="checkbox" on:change={e => autoUpdate(e.target.checked)}/>
  自動更新
</label>
