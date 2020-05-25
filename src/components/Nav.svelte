<script>
	export let segment;
  export let nav;

  if (segment == null) {
    segment = ''
  }
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
    min-height: var(--nav-height);
    display: flex;
    justify-content: space-between;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	li {
		display: block;
		float: left;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
    color: var(--theme-light-color2);
	}

  :global(.dark) a {
    color: var(--theme-dark-color2);
  }

  [aria-current] {
    border-bottom: 1px solid var(--theme-light-color2);
  }

  :global(.dark) [aria-current] {
    border-bottom: 1px solid var(--theme-dark-color2);
  }

  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1.6rem;
  }
</style>

<nav>
	<ul>
    {#each nav.main as button}
      <li><a aria-current='{(segment === button.link) ? "page" : undefined}' href={'/'+button.link}>{button.text}</a></li>
    {/each}
	</ul>
  <button on:click={_ => window.__toggleDarkMode()}>🌚</button>
</nav>
