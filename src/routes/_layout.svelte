<script context="module">
  import {fetchData} from '../cms.js'

  export async function preload({params}, session) {
    const navRes = await fetchData('nav', {locale: 'en', preview: false, apiToken: session.apiToken})
    const footerRes = await fetchData('footer', {locale: 'en', preview: false, apiToken: session.apiToken})

    return {
      ...navRes,
      ...footerRes
    }
  }
</script>

<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
  export let nav;
  export let footer;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		padding: 0 1rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
  footer {
    width: 95vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: var(--footer-height);
    margin: 0 auto;
  }
</style>

<Nav {segment} {nav}/>

<main>
	<slot></slot>
</main>

<footer>{@html footer.copyright}</footer>
