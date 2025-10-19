package com.springback.apimatriculas.dto.mapper;

import com.springback.apimatriculas.domain.model.Facultad;
import com.springback.apimatriculas.dto.request.FacultadRequestDTO;
import com.springback.apimatriculas.dto.response.FacultadResponseDTO;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-10-18T20:32:54-0500",
    comments = "version: 1.6.0.Beta1, compiler: javac, environment: Java 17.0.15 (Amazon.com Inc.)"
)
@Component
public class FacultadMapperImpl implements FacultadMapper {

    @Override
    public Facultad toEntity(FacultadRequestDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Facultad.FacultadBuilder facultad = Facultad.builder();

        facultad.nombre( dto.nombre() );
        facultad.descripcion( dto.descripcion() );
        facultad.ubicacion( dto.ubicacion() );
        facultad.decano( dto.decano() );
        facultad.activo( dto.activo() );

        return facultad.build();
    }

    @Override
    public FacultadResponseDTO toResponseDTO(Facultad entity) {
        if ( entity == null ) {
            return null;
        }

        Long facultadId = null;
        String nombre = null;
        String descripcion = null;
        String ubicacion = null;
        String decano = null;
        LocalDateTime fechaRegistro = null;
        Boolean activo = null;

        facultadId = entity.getFacultadId();
        nombre = entity.getNombre();
        descripcion = entity.getDescripcion();
        ubicacion = entity.getUbicacion();
        decano = entity.getDecano();
        fechaRegistro = entity.getFechaRegistro();
        activo = entity.getActivo();

        Long cantidadCarreras = contarCarrerasActivas(entity);

        FacultadResponseDTO facultadResponseDTO = new FacultadResponseDTO( facultadId, nombre, descripcion, ubicacion, decano, fechaRegistro, activo, cantidadCarreras );

        return facultadResponseDTO;
    }

    @Override
    public List<FacultadResponseDTO> toResponseDTOList(List<Facultad> entities) {
        if ( entities == null ) {
            return null;
        }

        List<FacultadResponseDTO> list = new ArrayList<FacultadResponseDTO>( entities.size() );
        for ( Facultad facultad : entities ) {
            list.add( toResponseDTO( facultad ) );
        }

        return list;
    }

    @Override
    public void updateEntityFromDTO(FacultadRequestDTO dto, Facultad entity) {
        if ( dto == null ) {
            return;
        }

        if ( dto.nombre() != null ) {
            entity.setNombre( dto.nombre() );
        }
        if ( dto.descripcion() != null ) {
            entity.setDescripcion( dto.descripcion() );
        }
        if ( dto.ubicacion() != null ) {
            entity.setUbicacion( dto.ubicacion() );
        }
        if ( dto.decano() != null ) {
            entity.setDecano( dto.decano() );
        }
        if ( dto.activo() != null ) {
            entity.setActivo( dto.activo() );
        }
    }
}
