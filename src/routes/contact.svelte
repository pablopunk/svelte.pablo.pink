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

<style>
  section {
    height: calc(100vh - var(--footer-height) - var(--nav-height));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>

<section>{@html contact.content}</section>


