package com.example.creacion.repositories;

import com.example.creacion.models.PeliModel;
import com.example.creacion.models.SeriesModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface SeriesRepository extends CrudRepository<SeriesModel, Long> {
    public abstract ArrayList<SeriesModel> findByTipo(String tipo);
}
