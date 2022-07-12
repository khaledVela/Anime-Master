package com.example.creacion.controllers;


import com.example.creacion.models.PeliModel;
import com.example.creacion.models.SeriesModel;
import com.example.creacion.services.PeliService;
import com.example.creacion.services.SerieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/seri")
public class SeriesController {
    @Autowired
    SerieService serieService;

    @GetMapping()
    public ArrayList<SeriesModel> obtenerSeri(){
        return serieService.obtenerSeri();
    }

    @CrossOrigin(origins = "*")
    @PostMapping()
    public SeriesModel guardarSeri(@RequestBody SeriesModel seri){
        return this.serieService.guardaSeri(seri);
    }

    @GetMapping(path = "/{id}")
    public Optional<SeriesModel> obtenerPorId(@PathVariable("id") Long id){
        return this.serieService.obtenerPorId(id);
    }

    @GetMapping("/query")
    public ArrayList<SeriesModel> obtenerPorTipo(@RequestParam("tipo") String tipo){
        return  this.serieService.obtenerPorTipo(tipo);
    }
    @DeleteMapping(path = "/{id}")
    public String eliminarPorId(@PathVariable("id") long id){
        boolean ok = this.serieService.eliminarSeri(id);
        if(ok){
            return "Se elimino la pelicula de id " + id;
        }else {
            return "No se pudo eliminar la pelicula de id " + id;
        }
    }
}
