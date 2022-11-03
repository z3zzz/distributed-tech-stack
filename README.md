## 목차
* [프로젝트 개요](#프로젝트-개요)
* [문제 인식](#문제-인식)
* [해결 방안](#해결-방안)
* [사용 기술](#사용-기술)
* [실행 방법](#실행-방법)
* [시사점](#시사점)


## 프로젝트 개요
Microservice 형태로 개발된 각 Back-End 서버와 DB를 조합해 Restful API 요청 및 성능 검증을 할 수 있는 프로그램
<br />

![image](https://user-images.githubusercontent.com/91174156/199702019-576da6eb-8fc9-4303-9e41-2eb1687fffce.png)

<br />

- TLS 보안 (OpenSSL)
- 컨테이너 (Docker Compose)
- CI/CD (Travis, Shell Script)

## 문제 인식
1. 기획된 서비스에 적합한 Back-End 프레임워크(언어 및 패키지)와 DB의 조합을 찾고 빠른 성능 검증이 필요함
2. 팀 내 기술 스택이 상이할 시 API 개발 협업이 어려움 

## 해결 방안
1. 컨테이너 추가 및 Reverse-Proxy 설정만으로 빠르게 조합 추가 및 Restful API 성능 검증
2. 마이크로서비스 기반 아키텍쳐로 유연한 기술 스택 협업 가능 

## 사용 기술
* Java: 11 (Spring Boot, HikariCP, Hibernate, Tomcat)
* Python: 3.8 (Flask, gunicorn, psycopg2)
* Typescript: 4.5 (Fastify, ESBuild)
* React: 18
* Nginx, OpenSSL
* Docker, Travis, Shell Script...
	
## 실행 방법
### 현재 조합으로 실행
1. `git clone git@github.com:z3zzz/distributed-tech-stack.git` 
2. .env 파일 생성 (README-ENV.md 참조)
3. docker compose up

### 신규 조합으로 실행 
1. API 개발 및 컨테이너화 (image 생성)
2. `docker-compose.yml` 수정 (해당 image로 변경)
3. docker compose up

## 차별점
1. 하나의 API 프레임워크에서 복수의 Database 연결 및 확장성 용이한 코드 구조 (Model Abstraction) 
2. 본인이 원하는 프레임워크를 컨테이너 기반으로 쉽게 추가하여 성능 검증 가능 
3. 응답 시간, 상태 기록으로 빠른 디버깅 가능
4. TLS 보안 적용으로 안전한 API 테스팅

## 시사점
1. 대규모 트래픽 상정 시, Spring-Postgres 조합이 안정성이 가장 높았음
- Flask, Fasitfy의 경우 Latency가 점차 상승 혹은 200ms 이상 Peak에 도달했으며, 특히 Flask-Postgres 조합은 최대 1000ms 이상으로 상승함
- 이에 비해 Spring은 지속적으로 30ms 전후를 기록하였음
2. 하나의 프레임워크를 선택해 요청 시, 이후의 다른 프레임워크 선택 시의 응답 시간에 긍정적인 영향을 미침 (응답시간 40% 향상)
- 각 프레임워크 별로 응답 시간이 뚜렷하게 차이날 줄 알았는데 아니었음
- 네트워크 연결이 각 프레임워크와 브라우저 간이 아닌 Gateway (Reverse-Proxy) 역할을 하는 Nginx와 브라우저 간에 이루어지기 때문으로 분석됨
3. Post 요청 시의 Latency는 Body Packet의 크기와 밀접한 상관관계는 없음
- 작성한 Body의 크기보다는 Cold start, Reconnection 등 네트워크 TCP 연결 자체의 영향이 더 큰 것으로 보임
