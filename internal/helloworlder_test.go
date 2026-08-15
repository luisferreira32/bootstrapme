package internal_test

import (
	"testing"

	"github.com/google/go-cmp/cmp"
	"github.com/luisferreira32/bootstrapme/internal"
)

func Test_HelloWorlder(t *testing.T) {
	t.Parallel()

	if diff := cmp.Diff("Hello World!", internal.HelloWorlder()); diff != "" {
		t.Errorf("HelloWorlder() mismatch (-want +got):\n%s", diff)
	}
}
