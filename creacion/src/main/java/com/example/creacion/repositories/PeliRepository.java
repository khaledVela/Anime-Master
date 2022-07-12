package com.example.creacion.repositories;

import com.example.creacion.models.PeliModel;
import com.example.creacion.models.UsuarioModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface PeliRepository extends CrudRepository<PeliModel, Long> {
    public abstract ArrayList<PeliModel> findByTipopeli(String tipopeli);
}
