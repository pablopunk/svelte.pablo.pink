<script context="module">
  import {fetchData} from '../cms.js'

  export async function preload({ params }, session) {
    const res = await fetchData('about', {locale: 'en', preview: false, apiToken: session.apiToken})

    return res
  }
</script>

<script>
  export let about

  function howOldAmI() {
    const now = new Date()
    const iHadABirthDayThisYear = now.getMonth() >= 6 && now.getDate() >= 9
    const yearsSinceIWasBorn = now.getFullYear() - 1993

    return iHadABirthDayThisYear ? yearsSinceIWasBorn : yearsSinceIWasBorn - 1
  }

  about.content = about.content.replace(/%years%/, howOldAmI())
</script>

<style>
  section {
    height: calc(100vh - var(--footer-height) - var(--nav-height));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  article {
    max-width: 600px;
    display: grid;
    grid-template-columns: 1fr 15fr;
  }
</style>

<section>
  <article>
    {@html about.content}
  </article>
</section>
