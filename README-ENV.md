## .env 파일 설정

1. Postgres 서버 설정 (AWS RDS, 로컬 서버 등)
2. MongoDB 서버 설정 (Atlas, 로컬 서버 등)
3. .env 파일 생성 (root dir)

## 예시
--- 

POSTGRES_USER=postgres <br />
POSTGRES_PASSWORD=my_password  <br />
POSTGRES_DB=my_db <br />
POSTGRES_URL=postgresql://postgres:my_password@my_host:5432/my_db  <br />

MY_PASSWORD=my_password  <br />
MY_DATABASE=my_db <br />

DATASOURCE_URL=jdbc:postgresql://my_host:5432/my_db <br />
DATASOURCE_USERNAME=postgres <br />
DATASOURCE_PASSWORD=my_password <br />
DATASOURCE_DATABASENAME=my_db <br />
DATASOURCE_SERVERNAME=my_host <br />

NODE_ENV=production <br />
JAVA_ENV=production <br />
PYTHON_ENV=production <br />

MONGODB_URL=mongodb+srv://my_username:my_password@cluster0.abcde.mongodb.net/?retryWrites=true&w=majority <br />
MONGODB_DATABASE=my_mongodb_db <br />
MONGODB_TS_URL=mongodb+srv://my_username:my_password@cluster0.abcde.mongodb.net/my_mongodb_db?retryWrites=true&w=majority <br />
MONGODB_COLLECTION=my_mongodb_collection <br />

DB_DATABASE=my_db <br />
DB_USERNAME=postgres <br />
DB_PASSWORD=my_password <br />
DB_HOST=my_host <br />
