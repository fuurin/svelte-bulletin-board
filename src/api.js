import axios from 'axios'

const BASE_URL = 'https://us-central1-glossom-bulletin-board-sample.cloudfunctions.net/Messages'

function handleError(e) {
  console.log(e)
  alert('エラーが発生しました。')
}

export async function getComments() {
  return await axios
    .get(BASE_URL)
    .then((res) => res.data)
    .catch(handleError)
}

export async function postComment(comment) {
  return await axios
    .post(BASE_URL, new URLSearchParams(comment))
    .then((res) => res)
    .catch(handleError)
}
