package com.example.creacion.models;

import javax.persistence.*;

@Entity
@Table(name = "peli")
public class PeliModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private long id;

    private String foto; //ubicacion del archivo foto
    private String title;
    private String description;
    private String tipopeli;
    private String link;

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTipopeli() {
        return tipopeli;
    }

    public void setTipopeli(String tipopeli) {
        this.tipopeli = tipopeli;
    }
}
