## .env 파일 설정

1. Postgres 서버 설정 (AWS RDS, 로컬 서버 등)
2. MongoDB 서버 설정 (Atlas, 로컬 서버 등)
3. .env 파일 생성 (root dir)

## 예시
--- 

POSTGRES_USER=postgres
POSTGRES_PASSWORD=my_password
POSTGRES_DB=my_db
POSTGRES_URL=postgresql://postgres:my_password@my_host:5432/my_db

MY_PASSWORD=my_password
MY_DATABASE=my_db

DATASOURCE_URL=jdbc:postgresql://my_host:5432/my_db
DATASOURCE_USERNAME=postgres
DATASOURCE_PASSWORD=my_password
DATASOURCE_DATABASENAME=my_db
DATASOURCE_SERVERNAME=my_host

NODE_ENV=production
JAVA_ENV=production
PYTHON_ENV=production

MONGODB_URL=mongodb+srv://my_username:my_password@cluster0.abcde.mongodb.net/?retryWrites=true&w=majority
MONGODB_DATABASE=my_mongodb_db
MONGODB_TS_URL=mongodb+srv://my_username:my_password@cluster0.abcde.mongodb.net/my_mongodb_db?retryWrites=true&w=majority
MONGODB_COLLECTION=my_mongodb_collection

DB_DATABASE=my_db
DB_USERNAME=postgres
DB_PASSWORD=my_password
DB_HOST=my_host
