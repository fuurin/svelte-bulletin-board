import { writable } from 'svelte/store'
import { getComments } from './api'

export const comments = writable([])

export async function updateComments() {
  comments.set(await getComments())
}
