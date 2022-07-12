package com.example.creacion.controllers;

import com.example.creacion.models.UsuarioModel;
import com.example.creacion.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UsuarioController {
    @Autowired
    UsuarioService usuarioService;

    @GetMapping()
    public ArrayList<UsuarioModel> obtenerUsuarios(){
        return usuarioService.obtenerUsuarios();
    }

    @CrossOrigin(origins = "*")
    @PostMapping()
    public UsuarioModel guardarUsuario(@RequestBody UsuarioModel usuario){
        return this.usuarioService.guardarUsuario(usuario);
    }

    @GetMapping(path = "/{id}")
    public Optional<UsuarioModel> obtenerPorId(@PathVariable("id") Long id){
        return this.usuarioService.obtenerPorId(id);
    }

    @GetMapping("/query")
    public ArrayList<UsuarioModel> obtenerPorTipousuario(@RequestParam("tipousuario") String tipousuario){
        return  this.usuarioService.obtenerPorTipousuario(tipousuario);
    }

    @DeleteMapping(path = "/{id}")
    public String eliminarPorId(@PathVariable("id") long id){
        boolean ok = this.usuarioService.eliminarUsuario(id);
        if(ok){
            return "Se elimino el usuario de id " + id;
        }else {
            return "No se pudo eliminar el usuario de id " + id;
        }
    }
}
