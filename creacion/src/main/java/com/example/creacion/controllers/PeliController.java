package com.example.creacion.controllers;

import com.example.creacion.models.PeliModel;
import com.example.creacion.models.UsuarioModel;
import com.example.creacion.services.PeliService;
import com.example.creacion.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/peli")
public class PeliController {
    @Autowired
    PeliService peliService;

    @GetMapping()
    public ArrayList<PeliModel> obtenerPeli(){
        return peliService.obtenerPeli();
    }

    @CrossOrigin(origins = "*")
    @PostMapping()
    public PeliModel guardarUsuario(@RequestBody PeliModel peli){
        return this.peliService.guardaPeli(peli);
    }

    @GetMapping(path = "/{id}")
    public Optional<PeliModel> obtenerPorId(@PathVariable("id") Long id){
        return this.peliService.obtenerPorId(id);
    }

    @GetMapping("/query")
    public ArrayList<PeliModel> obtenerPorTipopeli(@RequestParam("tipopeli") String tipopeli){
        return  this.peliService.obtenerPorTipopeli(tipopeli);
    }
    @DeleteMapping(path = "/{id}")
    public String eliminarPorId(@PathVariable("id") long id){
        boolean ok = this.peliService.eliminarPeli(id);
        if(ok){
            return "Se elimino la pelicula de id " + id;
        }else {
            return "No se pudo eliminar la pelicula de id " + id;
        }
    }
}
