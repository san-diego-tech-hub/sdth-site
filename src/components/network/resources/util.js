const ICONS = {
  linkedin: "linkedin",
  facebook: "facebook-square",
  github: "github-square",
  twitter: "twitter-square"
}

export const urlToSocialIcon = (url) => {
  if (!url) return null
  const platform = (url.match(/https:\/\/(www\.)?([^.]+)\..*/) || [null, null, ""])[2]
  return ICONS[platform]
}
