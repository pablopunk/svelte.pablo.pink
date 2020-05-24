import fetch from "isomorphic-unfetch";

const API_URL = "https://graphql.datocms.com";

async function fetchAPI(query, variables = {}, preview, apiToken) {
  const res = await fetch(API_URL + (preview ? "/preview" : ""), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiToken}`,
    },
    body: JSON.stringify({
      query: `
        query MyQuery($locale: SiteLocale) {
          ${query}
          ${globalQueries}
        }
      `,
      variables,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("API fetch failed");
  }

  return json.data;
}

const globalQueries = `
  nav(locale: $locale) {
    main {
      id
      link
      text
    }
    changeThemeButtonLight
    changeThemeButtonDark
    donateText
  }
  footer(locale: $locale) {
    copyright(markdown: true)
  }
  header(locale: $locale) {
    title
    subtitle
  }
`;

const commonPageQueries = `
  metaTags {
    title
    description
  }
`;

export async function fetchData(
  resource,
  { locale = "en", preview = false, apiToken = null } = {}
) {
  switch (resource) {
    case "home":
      return fetchAPI(
        `
        home(locale: $locale) {
          profilePicture {
            url
            alt
          }
          profilePictureHover {
            url
            alt
          }
          abstract(markdown: true)
          ${commonPageQueries}
        }
        `,
        { locale },
        preview,
        apiToken
      );

    case "portfolio":
      return fetchAPI(
        `
        portfolio(locale: $locale) {
          introHeader
          abstract(markdown: true)
          exampleProjectsHeader
          githubReposIntroduction(markdown: true)
          ${commonPageQueries}
        }
        allExampleProjects(orderBy: _createdAt_ASC, locale: $locale) {
          link
          name
          description(markdown: true)
          picture {
            alt
            url
          }
        }
        `,
        { locale },
        preview,
        apiToken
      );

    case "about":
      return fetchAPI(
        `
        about(locale: $locale) {
          content(markdown: true)
          ${commonPageQueries}
        }
      `,
        { locale },
        preview,
        apiToken
      );

    case "contact":
      return fetchAPI(
        `
        contact(locale: $locale) {
          content(markdown: true)
          ${commonPageQueries}
        }
      `,
        { locale },
        preview,
        apiToken
      );
  }
}
