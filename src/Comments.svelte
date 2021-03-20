<script>
  import { Card, CardHeader, CardBody } from 'sveltestrap'
  import { fade } from 'svelte/transition'
  
  export let comments

  const formatTimestamp = (timestamp) => {
    return timestamp.toISOString().split('.')[0].split('T').join(' ')
  }
</script>

{#each comments as comment, i}
  <div transition:fade>
    <Card class="my-3">
      <CardHeader>
        {i+1}: {comment.name} ({formatTimestamp(comment.timestamp)})
      </CardHeader>
      <CardBody>
        {#each comment.text.split('\n') as line}
          {line} <br>
        {/each}
      </CardBody>
    </Card>
  </div>
{:else}
  コメントが投稿されていません。あなたが最初のコメントを投稿しましょう！
{/each}
