prefix ?= /usr
exec_prefix ?= $(prefix)
bin_prefix ?= $(exec_prefix)/bin

BIN_FILES = $(wildcard firefly-logger-*)
BIN_INSTALLABLES = $(patsubst %, $(DESTDIR)$(bin_prefix)/%, $(BIN_FILES))

.PHONY:	install
install:	$(BIN_INSTALLABLES)

$(DESTDIR)$(bin_prefix)/%:	%
	install -D -m 0755 $< $@


