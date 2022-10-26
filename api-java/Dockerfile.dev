# builder name not supported in Elastic Beanstalk -> So use 0 phase (default name for phase)
FROM eclipse-temurin:11-jdk-jammy
WORKDIR /app
COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN ./mvnw dependency:go-offline
COPY ./src ./src
RUN ./mvnw package -Dmaven.test.skip
 
FROM eclipse-temurin:11-jre-jammy
WORKDIR /app
COPY --from=0 /app/target/*.jar /app/*.jar
ENTRYPOINT ["java", "-jar", "/app/*.jar" ]
