package com.example.creacion.repositories;

import com.example.creacion.models.linksModels;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LinksRepository extends CrudRepository<linksModels, Long> {
}
