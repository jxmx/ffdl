WEBROOT ?= $(DESTDIR)/var/www/firefly-logger
CSS_DIR = css
IMG_DIR = img
JS_DIR = js
API_DIR = api

OWNER = www-data
GROUP = www-data
ifeq "$(shell whoami)" "root"
PERMS = -o $(OWNER) -g $(GROUP)
endif

ROOT_FILES = $(wildcard *.html *.php *.ico) 

CSS_FILES = $(wildcard $(CSS_DIR)/*.css)
IMG_FILES = $(wildcard $(IMG_DIR)/*.png $(IMG_DIR)/*.svg)
JS_FILES = $(wildcard $(JS_DIR)/*.js)
API_FILES = $(wildcard $(API_DIR)/*)

CSS_INSTALLABLES = $(patsubst $(CSS_DIR)/%, $(WEBROOT)/$(CSS_DIR)/%, $(CSS_FILES))
IMG_INSTALLABLES = $(patsubst $(IMG_DIR)/%, $(WEBROOT)/$(IMG_DIR)/%, $(IMG_FILES))
JS_INSTALLABLES = $(patsubst $(JS_DIR)/%, $(WEBROOT)/$(JS_DIR)/%, $(JS_FILES))
API_INSTALLABLES = $(patsubst $(API_DIR)/%, $(WEBROOT)/$(API_DIR)/%, $(API_FILES))
ROOT_INSTALLABLES = $(patsubst %, $(WEBROOT)/%, $(ROOT_FILES))

INSTALLABLES = $(CSS_INSTALLABLES) $(IMG_INSTALLABLES) \
	$(JS_INSTALLABLES) $(ROOT_INSTALLABLES) $(API_INSTALLABLES)

.PHONY:	install
install:	$(INSTALLABLES)

$(WEBROOT)/css/%: $(CSS_DIR)/%
	install -D -m 0644 $(PERMS) $< $@

$(WEBROOT)/img/%: $(IMG_DIR)/%
	install -D -m 0644 $(PERMS) $< $@

$(WEBROOT)/js/%: $(JS_DIR)/%
	install -D -m 0644 $(PERMS) $< $@

$(WEBROOT)/api/%: $(API_DIR)/%
	install -D -m 0644 $(PERMS) $< $@

$(WEBROOT)/%:	%
	install -D -m 0644 $(PERMS) $< $@
