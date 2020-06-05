default:
	docker ps

deploy:
	gulp default
	docker-compose -f ./docker-compose.prod.yaml build
	docker-compose -f ./docker-compose.prod.yaml up -d
