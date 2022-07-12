package com.example.creacion.models;
import javax.persistence.*;

@Entity
@Table(name = "links")
public class linksModels {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private long id;

    private long serie_id;
    private long cap_id;
    private String link;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getSerie_id() {
        return serie_id;
    }

    public void setSerie_id(long serie_id) {
        this.serie_id = serie_id;
    }

    public long getCap_id() {
        return cap_id;
    }

    public void setCap_id(long cap_id) {
        this.cap_id = cap_id;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }
}
