package com.example.creacion.controllers;

import com.example.creacion.models.linksModels;
import com.example.creacion.services.LinkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/link")
public class LinkController {
    @Autowired
    LinkService linkService;

    @GetMapping()
    public ArrayList<linksModels> obtenerLink(){
        return linkService.obtenerLink();
    }

    @CrossOrigin(origins = "*")
    @PostMapping()
    public linksModels guardarSeri(@RequestBody linksModels link){
        return this.linkService.guardaLink(link);
    }

    @GetMapping(path = "/{id}")
    public Optional<linksModels> obtenerPorId(@PathVariable("id") Long id){
        return this.linkService.obtenerPorId(id);
    }

    @DeleteMapping(path = "/{id}")
    public String eliminarPorId(@PathVariable("id") long id){
        boolean ok = this.linkService.eliminarLink(id);
        if(ok){
            return "Se elimino la pelicula de id " + id;
        }else {
            return "No se pudo eliminar la pelicula de id " + id;
        }
    }
}
