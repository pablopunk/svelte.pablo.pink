<script context="module">
  import {fetchData} from '../cms.js'

  export async function preload({ params }, session) {
    const res = await fetchData('home', {locale: 'en', preview: false, apiToken: session.apiToken})

    return res
  }
</script>

<script>
  export let home
  /* export let nav */
  /* export let footer */
</script>

<style>
  img {
    width: 150px;
    border-radius: 50%;
    border: 3px solid aqua;
  }
  section {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<svelte:head>
  <title>{home.metaTags.title}</title>
</svelte:head>

<main>
  <section><h1>pablo.pink</h1></section>
  <section>
    <figure>
      <img alt={home.profilePicture.alt} src={home.profilePicture.url} />
    </figure>
    <div>
      {@html home.abstract}
    </div>
  </section>
</main>

