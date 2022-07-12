package com.example.creacion.services;

import com.example.creacion.models.PeliModel;
import com.example.creacion.models.UsuarioModel;
import com.example.creacion.repositories.PeliRepository;
import com.example.creacion.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class PeliService {

    @Autowired
    PeliRepository peliRepository;

    public ArrayList<PeliModel> obtenerPeli(){
        return (ArrayList<PeliModel>) peliRepository.findAll();
    }
    public PeliModel guardaPeli(PeliModel peli){
        return peliRepository.save(peli);
    }

    public Optional<PeliModel> obtenerPorId(Long id){
        return peliRepository.findById(id);
    }
    public ArrayList<PeliModel> obtenerPorTipopeli(String tipopeli){
        return  peliRepository.findByTipopeli(tipopeli);
    }
    public boolean eliminarPeli(Long id){
        try{
            peliRepository.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }

}
