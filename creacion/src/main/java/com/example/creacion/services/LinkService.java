package com.example.creacion.services;

import com.example.creacion.models.linksModels;
import com.example.creacion.repositories.LinksRepository;
import com.example.creacion.repositories.PeliRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class LinkService {
    @Autowired
    LinksRepository linksRepository;

    public ArrayList<linksModels> obtenerLink(){
        return (ArrayList<linksModels>) linksRepository.findAll();
    }
    public linksModels guardaLink(linksModels link){
        return linksRepository.save(link);
    }

    public Optional<linksModels> obtenerPorId(Long id){
        return linksRepository.findById(id);
    }

    public boolean eliminarLink(Long id){
        try{
            linksRepository.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }
}
