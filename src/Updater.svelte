<script>
  import { Button } from 'sveltestrap'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  const UPDATE_INTERVAL = 5000 // ms

  let timer = null

  const update = () => dispatch('update')
  const autoUpdate = (checked) => {
    if (checked) {
      update()
      timer = setInterval(update, UPDATE_INTERVAL)
    } else if (timer !== null) {
      clearInterval(timer)
    }
  }
</script>

<Button color='secondary' on:click={update}>
  更新
</Button>
<label class='ml-3'>
  <input type="checkbox" on:change={e => autoUpdate(e.target.checked)}/>
  自動更新
</label>
