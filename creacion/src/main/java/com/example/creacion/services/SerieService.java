package com.example.creacion.services;

import com.example.creacion.models.PeliModel;
import com.example.creacion.models.SeriesModel;
import com.example.creacion.repositories.SeriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class SerieService {

    @Autowired
    SeriesRepository seriesRepository;

    public ArrayList<SeriesModel> obtenerSeri(){
        return (ArrayList<SeriesModel>) seriesRepository.findAll();
    }
    public SeriesModel guardaSeri(SeriesModel seri){
        return seriesRepository.save(seri);
    }

    public Optional<SeriesModel> obtenerPorId(Long id){
        return seriesRepository.findById(id);
    }

    public ArrayList<SeriesModel> obtenerPorTipo(String tipo){
        return  seriesRepository.findByTipo(tipo);
    }
    public boolean eliminarSeri(Long id){
        try{
            seriesRepository.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }
}
