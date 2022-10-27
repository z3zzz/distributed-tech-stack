## Java Spring Boot 등 분산 시스템으로 구현된 포스트맨
- Java, Typescript, Python 등 언어, Postgres, MongoDB 등 DB, Nginx, Apache 등 서버로 구현된 분산형 API 요청 시스템

## 목차
* [프로젝트 개요](#프로젝트-개요)
* [문제 인식](#문제-인식)
* [해결 방안](#해결-방안)
* [사용 기술](#사용-기술)
* [실행 방법](#실행-방법)
* [대표 코드](#대표-코드)
* [시사점](#시사점)


## 프로젝트 개요
Microservice 형태로 개발된 각 Back-End 서버와 DB를 조합해 Restful API 요청 및 성능 검증을 할 수 있는 프로그램
<br />

![image](https://user-images.githubusercontent.com/91174156/198166733-f5c2d5af-4728-4ec5-9af0-58503bc3ad14.png)

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
* Nginx, OpenSSL
* Docker, Travis, Shell Script...
	
## 실행 방법
1. `git clone  
2. 

```
$ cd ../lorem
$ npm install
$ npm start
```

## 대표 코드


## 시사점
