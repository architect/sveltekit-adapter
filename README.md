**⚠️ Warning! Sveltekit is still in Beta and the adapter API is changing regularly. This adapter is out of sync with some of the latest breaking changes from Sveltekit. When the API stabilizes we will try to update this adapter. For the near future you can feel free to fork this repo to make updates or send a PR.**

# Sveltekit Adapter

Adapter for Svelte apps that creates a [Begin](https://begin.com/) or [Architect](https://arc.codes) app, using a function for dynamic server rendering.

## Configuration

run `npm install @architect/sveltekit-adapter`.

Then add the adapter to your `svelte.config.js`:

```js
import begin from '@architect/sveltekit-adapter';

export default {
	kit: {
		...
		adapter: begin()
	}
};
```

## Issues / Bugs
Please report issues in the [Architect repository](https://github.com/architect/architect/issues).
