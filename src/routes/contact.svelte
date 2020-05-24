<script context="module">
  import {fetchData} from '../cms.js'

  export async function preload({ params }, session) {
    const res = await fetchData('contact', {locale: 'en', preview: false, apiToken: session.apiToken})

    return res
  }
</script>

<script>
  export let contact
</script>

<main>
  <section>{@html contact.content}</section>
</main>


