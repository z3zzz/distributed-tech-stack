package com.portfolio.techstack.backendspring.model;

import com.vladmihalcea.hibernate.type.array.ListArrayType;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;
import javax.persistence.*;

import java.util.List;

@Entity
@TypeDef(name="list-array", typeClass = ListArrayType.class)
public class Informations {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String content;

    @Column(columnDefinition = "text[]")
    @Type(type="list-array")
    private List<String> photos;

    public Long getId() {
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

    public List<String> getPhotos() {
      return photos;
    }

    public void setPhotos(List<String> photos) {
      this.photos = photos;
    }

}
