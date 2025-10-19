package com.springback.apimatriculas.dto.mapper;

import com.springback.apimatriculas.domain.model.Carrera;
import com.springback.apimatriculas.domain.model.Facultad;
import com.springback.apimatriculas.dto.request.CarreraRequestDTO;
import com.springback.apimatriculas.dto.response.CarreraResponseDTO;
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
public class CarreraMapperImpl implements CarreraMapper {

    @Override
    public Carrera toEntity(CarreraRequestDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Carrera.CarreraBuilder carrera = Carrera.builder();

        carrera.facultad( facultadIdToFacultad( dto.facultadId() ) );
        carrera.nombre( dto.nombre() );
        carrera.descripcion( dto.descripcion() );
        carrera.duracionSemestres( dto.duracionSemestres() );
        carrera.tituloOtorgado( dto.tituloOtorgado() );
        carrera.activo( dto.activo() );

        return carrera.build();
    }

    @Override
    public CarreraResponseDTO toResponseDTO(Carrera entity) {
        if ( entity == null ) {
            return null;
        }

        Long facultadId = null;
        String nombreFacultad = null;
        Long carreraId = null;
        String nombre = null;
        String descripcion = null;
        Integer duracionSemestres = null;
        String tituloOtorgado = null;
        LocalDateTime fechaRegistro = null;
        Boolean activo = null;

        facultadId = entityFacultadFacultadId( entity );
        nombreFacultad = entityFacultadNombre( entity );
        carreraId = entity.getCarreraId();
        nombre = entity.getNombre();
        descripcion = entity.getDescripcion();
        duracionSemestres = entity.getDuracionSemestres();
        tituloOtorgado = entity.getTituloOtorgado();
        fechaRegistro = entity.getFechaRegistro();
        activo = entity.getActivo();

        CarreraResponseDTO carreraResponseDTO = new CarreraResponseDTO( carreraId, facultadId, nombreFacultad, nombre, descripcion, duracionSemestres, tituloOtorgado, fechaRegistro, activo );

        return carreraResponseDTO;
    }

    @Override
    public List<CarreraResponseDTO> toResponseDTOList(List<Carrera> entities) {
        if ( entities == null ) {
            return null;
        }

        List<CarreraResponseDTO> list = new ArrayList<CarreraResponseDTO>( entities.size() );
        for ( Carrera carrera : entities ) {
            list.add( toResponseDTO( carrera ) );
        }

        return list;
    }

    @Override
    public void updateEntityFromDTO(CarreraRequestDTO dto, Carrera entity) {
        if ( dto == null ) {
            return;
        }

        if ( dto.facultadId() != null ) {
            entity.setFacultad( facultadIdToFacultad( dto.facultadId() ) );
        }
        if ( dto.nombre() != null ) {
            entity.setNombre( dto.nombre() );
        }
        if ( dto.descripcion() != null ) {
            entity.setDescripcion( dto.descripcion() );
        }
        if ( dto.duracionSemestres() != null ) {
            entity.setDuracionSemestres( dto.duracionSemestres() );
        }
        if ( dto.tituloOtorgado() != null ) {
            entity.setTituloOtorgado( dto.tituloOtorgado() );
        }
        if ( dto.activo() != null ) {
            entity.setActivo( dto.activo() );
        }
    }

    private Long entityFacultadFacultadId(Carrera carrera) {
        Facultad facultad = carrera.getFacultad();
        if ( facultad == null ) {
            return null;
        }
        return facultad.getFacultadId();
    }

    private String entityFacultadNombre(Carrera carrera) {
        Facultad facultad = carrera.getFacultad();
        if ( facultad == null ) {
            return null;
        }
        return facultad.getNombre();
    }
}
