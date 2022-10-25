package com.portfolio.techstack.backendspring.model;

import com.vladmihalcea.hibernate.type.array.ListArrayType;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.persistence.*;

import java.util.List;

@Document("dev")
public class PortfoliosMongodb {

    @Field("id")
    private Long id;
    private String title;
    private String content;
    private String githubLink;
    private List<String> techStack;

    public PortfoliosMongodb(long id, String title, String content, String githubLink, List<String> techStack) {
        super();
        this.id = id;
        this.title = title;
        this.content = content;
        this.githubLink = githubLink;
        this.techStack = techStack;
    }

    public long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getGithubLink() {
        return githubLink;
    }

    public void setGithubLink(String githubLink) {
        this.githubLink = githubLink;
    }

    public List<String> getTechStack() {
      return techStack;
    }

    public void setTechStack(List<String> teckStack) {
      this.techStack = techStack;
    }

    @Override
    public String toString() {
        return "id: " + getId() + ", title: " + getTitle() + ", content: " + getContent();
    }
}
