props.json: all-properties.json all-descriptors.json
	@node bin/format.js > $@

all-properties.json:
	@curl -o $@ http://www.w3.org/Style/CSS/all-properties.en.json

all-descriptors.json:
	@curl -o $@ http://www.w3.org/Style/CSS/all-descriptors.en.json

clean:
	@rm props.json all-descriptors.json all-properties.json
