# [Taiwan Gold Card](https://taiwangoldcard.com/)

We are built with an open and transparency spirit. Everyone can contribute, and suggest/implement ideas

Our goal is to:
1. Increase the profile of the Gold Card, cementing its position as a 'special' accomplishment
2. Rally the pool of Gold Card Holders to improve the life of all foreign residents in Taiwan
3. Raise the profile of Taiwan as a great place to live and work, so new talents are attracted in Taiwan

## Website architecture

- Use https://gohugo.io with the [compose theme](https://github.com/onweru/compose)
- Hosted on GitHub
- We use Cloudflare

## Working with the repo

### Setup the project

```bash
brew install hugo # check https://gohugo.io/getting-started/installing/ for alternative method
git clone https://github.com/taiwangoldcard/goldcard.tw.git
cd goldcard.tw
hugo server #this launch a server and serve it at http://localhost:1313/
```

### Editing the content

`content` is where you should usually edit the content

### Editing the layout

- Content: `content/` -- Most copy should be edited here.
- HTML: `themes/compose/layout/` -- is where you want to modify the layout
- JS: `themes/compose/assets/js/` -- is where you want to modify or add new JS functionality
- CSS: `themes/compose/assets/sass/` -- is where is the styles are. `hugo` will automatically translates it to CSS

- Output: `docs/` is the "build" folder, where GitHub look at to show the [Taiwan Gold Card](https://taiwangoldcard.com/) website

### Deploy changes

`sh ./deploy.sh`
