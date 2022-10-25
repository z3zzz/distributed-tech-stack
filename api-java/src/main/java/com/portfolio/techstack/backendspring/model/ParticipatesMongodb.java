package com.portfolio.techstack.backendspring.model;

import com.vladmihalcea.hibernate.type.array.ListArrayType;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.*;

import java.util.List;

@Document("dev")
public class ParticipatesMongodb {

    @Id
    private String id;
    private String title;
    private String content;

    public ParticipatesMongodb(String title, String content) {
        super();
        this.title = title;
        this.content = content;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
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
}
