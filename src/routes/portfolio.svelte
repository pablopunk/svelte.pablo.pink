<script context="module">
  import {fetchData} from '../cms.js'

  export async function preload({ params }, session) {
    const res = await fetchData('portfolio', {locale: 'en', preview: false, apiToken: session.apiToken})
    return res
  }
</script>

<script>
  import fetch from 'isomorphic-unfetch'

  export let portfolio
  export let allExampleProjects
  let repos

  fetch(new URL('http://localhost:3000/portfolio.json')).then(async res => {
    const allRepos = await res.json()
    repos = allRepos.sort((a,b) => b.stargazers_count - a.stargazers_count).slice(0, 13)
  })
</script>

<style>
  img {
    width: 150px;
  }
  article {
    display: flex;
  }
  section {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  li {
    list-style: none;
  }
  figure {
    display: flex;
    flex-direction: column;
  }
</style>

<section>
  <h2>{portfolio.introHeader}</h2>
  <p>{@html portfolio.abstract}</p>
</section>
<section>
  <h3>{portfolio.exampleProjectsHeader}</h3>
  {#each allExampleProjects as project}
    <article>
      <figure>
        <img alt={project.picture.alt} src={project.picture.url} />
        <caption>{project.name}</caption>
      </figure>
      <div>{@html project.description}</div>
    </article>
  {/each}
</section>
<section>
  <div>{@html portfolio.githubReposIntroduction}</div>
  <div>
    {#if repos}
    {#each repos as repo}
      <li>
        <a href={repo.url}><strong>/{repo.name}</strong></a><span>⭐️ {repo.stargazers_count}</span>
        <p>{repo.description}</p>
      </li>
    {/each}
    {:else}
      <p>Loading...</p>
    {/if}
  </div>
</section>


