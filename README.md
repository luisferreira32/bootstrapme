# bootstrapme

in an era of LLMs, I wanted a small self-updating repo where I could bootstrap the start of a project

# quick setup

prerequisites: node, pnpm, go, and golangci-lint.

```bash
pnpm install && go mod download
```

and you're good to go!

# tech stack

- [pnpm](pnpm.io)
- [vite](vite.dev)
- [react](react.dev)
- [oxc](oxc.rs)
- [prettier](prettier.io)
- [go](go.dev)
- [golangci-lint](golangci-lint.run)

# habitual commands

(not an exhaustive list)

| command             | description          |
| ------------------- | -------------------- |
| `pnpm lint`         | lint front-end       |
| `pnpm fmt`          | format front-end     |
| `pnpm dev`          | run front-end in dev |
| `golangci-lint run` | lint back-end        |
| `go fmt ./...`      | format back-end      |
| `go test ./...`     | test backend         |
