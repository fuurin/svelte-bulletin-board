import axios from 'axios'

const BASE_URL = 'https://jsonbox.io/box_f3bc23b96ab0f70a8881/1'

function handleError(e) {
  console.log(e)
  alert('エラーが発生しました。')
}

export async function getComments() {
  return await axios
    .get(BASE_URL+'?sort=timestamp')
    .then((res) => res.data)
    .catch(handleError)
}

export async function postComment(comment) {
  return await axios
    .post(BASE_URL, comment)
    .then((res) => res)
    .catch(handleError)
}
