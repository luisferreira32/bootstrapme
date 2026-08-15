//nolint:package-comments
package main

import (
	"fmt"
	"os"

	"github.com/luisferreira32/bootstrapme/internal"
)

func main() {
	_, _ = fmt.Fprintln(os.Stdout, internal.HelloWorlder())
}
