# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file from the host machine into the container
COPY target/scheduler-0.0.1-SNAPSHOT.jar /app/scheduler.jar

# Expose the port your application will run on
EXPOSE 8080

# Run the Spring Boot application
ENTRYPOINT ["java","-jar","/app/scheduler.jar"]
