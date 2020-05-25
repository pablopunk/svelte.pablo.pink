<script context="module">
  import {fetchData} from '../cms.js'

  export async function preload({ params }, session) {
    const res = await fetchData('home', {locale: 'en', preview: false, apiToken: session.apiToken})

    return res
  }
</script>

<script>
  export let home
</script>

<style>
  img {
    width: 150px;
    border-radius: 50%;
    border: 3px solid aqua;
  }
  section {
    height: calc(100vh - var(--footer-height) - var(--nav-height));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  article {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>

<svelte:head>
  <title>{home.metaTags.title}</title>
</svelte:head>

<section>
  <article><h1>pablo.pink</h1></article>
  <article>
    <figure>
      <img alt={home.profilePicture.alt} src={home.profilePicture.url} />
    </figure>
    <div>
      {@html home.abstract}
    </div>
  </article>
</section>
