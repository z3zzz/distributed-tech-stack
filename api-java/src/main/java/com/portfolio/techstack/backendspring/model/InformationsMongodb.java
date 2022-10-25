package com.portfolio.techstack.backendspring.model;

import com.vladmihalcea.hibernate.type.array.ListArrayType;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.*;

import java.util.List;

@Document("dev")
public class InformationsMongodb {

    @Id
    private String id;
    private String title;
    private String content;

    private List<String> photos;

    public InformationsMongodb(String id, String title, String content, List<String> photos) {
        super();
        this.id = id;
        this.title = title;
        this.content = content;
        this.photos = photos;
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

    public List<String> getPhotos() {
      return photos;
    }

    public void setPhotos(List<String> photos) {
      this.photos = photos;
    }

}
