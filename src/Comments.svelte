<script>
  import { Card, CardHeader, CardBody } from 'sveltestrap'
  import { fade } from 'svelte/transition'
  import { comments, updateComments } from './stores'

  import { createMarkdown } from "safe-marked"
  const markdown = createMarkdown({ marked: { breaks: true } })

  updateComments()
</script>

{#each $comments as comment, i}
  <div transition:fade>
    <Card class="my-3">
      <CardHeader>
        {i+1}: {comment.name} ({comment.timestamp})
      </CardHeader>
      <CardBody>
        { @html markdown(comment.text) }
      </CardBody>
    </Card>
  </div>
{:else}
  コメントが投稿されていません。あなたが最初のコメントを投稿しましょう！
{/each}
