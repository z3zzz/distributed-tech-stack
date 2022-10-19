insert into informations (title, content) values ('self_introduction', '');
insert into informations (title, content) values ('self_webtoon', '');
insert into informations (title, content) values ('self_cartoon', '');
insert into informations (title, content) values ('self_whydevelopercareer', '');
insert into informations (title, content) values ('self_goodpointofdeveloper', '');
insert into informations (title, content) values ('self_myability', '');
insert into informations (title, content) values ('dev_effort', '');
insert into informations (title, content) values ('dev_architecture', '');


insert into portfolios (title, content, github_link, tech_stack) values (
  'MySQL과 MongoDB의 Latency 비교 및 샤딩에 대한 연구', 
  'NoSQL과 RDBMS에 수백만 row의 데이터를 각각 삽입한 후, 텍스트 서치 API를 구현했을 때의  Latency를 비교, 샤딩의 필요성 연구',
  'https://github.com/z3zzz/database-comparison',
  ARRAY ['MySQL', 'MongoDB', 'NodeJS', 'ReactJS', 'Nginx']
);

insert into portfolios (title, content, github_link, tech_stack) values (
  '분산 시스템으로 구현된 포스트맨', 
  'Java, Typescript, Python 등 언어, Postgres, MongoDB 등 DB, Nginx, Apache 등 서버로 구현된 분산형 API 요청 시스템',
  'https://github.com/z3zzz/distributed-tech-stack',
  ARRAY ['Spring Boot', 'Fastify', 'Flask', 'Docker', 'CI/CD', 'DevOps', 'ReactJS']
);

insert into portfolios (title, content, github_link, tech_stack) values (
  'Serverless Jupyter Notebook', 
  'NodeJS 코드를 서버 없이 브라우저 상에서 실현할 수 있는 코드 에디터 프로그램',
  'https://github.com/z3zzz/xenova-online-code-server',
  ARRAY ['Web Assembly', 'Express', 'React', 'CLI 개발', 'Package 개발, 배포']
);

insert into portfolios (title, content, github_link, tech_stack) values (
  'Ethereum.org 오픈소스 협업', 
  '블록체인 서비스 개발자들과 오픈소스 개발 협업',
  'https://github.com/z3zzz/ethereum-org-website',
  ARRAY ['Open-Source', 'Contributor', 'Git']
);

insert into portfolios (title, content, github_link, tech_stack) values (
  '마이크로서비스 기반 비동기 분산형 블로그 웹', 
  'k8s, Skaffold, Travis를 활용한 웹 서비스로 확장성, 안정성 극대화, 대용량 트래픽 대응',
  'https://github.com/z3zzz/k8s-docker-blog-architecture',
  ARRAY ['k8s', 'Docker', 'Event-Bus', 'Skaffold', 'Helmet', 'Fastify', 'React']
);

insert into portfolios (title, content, github_link, tech_stack) values (
  'MongoDB Atlas 마이그레이션 API', 
  '로컬 MongoDB의 데이터를 클라우드 Atlas로 마이그레이션하는 프로그램',
  'https://github.com/z3zzz/mongodb-atlas-clone',
  ARRAY ['MongoDB', 'NodeJS', 'Serverless']
);

insert into portfolios (title, content, github_link, tech_stack) values (
  'Restful API의 Latency 단축, 서버 과부하 문제 해결', 
  '350만 row 데이터의 재설계를 통한 API Latency 85%, 서버 메모리 사용량 85% 감축',
  'https://github.com/z3zzz/newsgamjeong-datacloud',
  ARRAY ['MongoDB', 'Python', 'JSON']
);

insert into portfolios (title, content, github_link, tech_stack) values (
  '사용자 참여 기반 E-Commerce', 
  '3계층 구조, OOP 기반 Back-End 설계, TDD 개발, RDBMS 설계, Restful API 개발',
  'https://github.com/z3zzz/shopping-mall-dist',
  ARRAY ['OOP', 'TDD', 'NodeJS', 'AWS', 'Nginx']
);

insert into portfolios (title, content, github_link, tech_stack) values (
  'SNS기반 사용자 콘텐츠 활용 맛집 정보/위치 공유 웹', 
  'TLS, DNS 적용, 구글 검색이 가능한 완성형 웹 서비스 배포',
  'https://github.com/z3zzz/hongdae5star',
  ARRAY ['GCP', 'Linux', 'MariaDB', 'WSGI', 'Python', 'Apache2']
);
