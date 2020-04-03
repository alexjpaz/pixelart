.PHONY: test

test:
	docker-compose rm -f
	docker-compose up
