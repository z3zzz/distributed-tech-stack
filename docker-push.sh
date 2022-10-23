# docker authenticate
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin 

# build and push web
docker build -t kwangdock/portfolio-tech-stack-web ./web && 
docker push kwangdock/portfolio-tech-stack-web 

# build and push api-ts
docker build -t kwangdock/portfolio-tech-stack-api-ts ./api-ts && 
docker push kwangdock/portfolio-tech-stack-api-ts

# build and push nginx
docker build -t kwangdock/portfolio-tech-stack-nginx ./nginx && 
docker push kwangdock/portfolio-tech-stack-nginx

# build and push api-java
docker build -t kwangdock/portfolio-tech-stack-api-java ./api-java && 
docker push kwangdock/portfolio-tech-stack-api-java
