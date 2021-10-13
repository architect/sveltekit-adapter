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
