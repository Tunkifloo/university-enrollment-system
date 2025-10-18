-- Insertar Facultades de ejemplo
INSERT INTO facultad (nombre, descripcion, ubicacion, decano, activo) VALUES
                                                                          ('Facultad de Ingeniería', 'Facultad dedicada a la formación de ingenieros en diversas especialidades', 'Pabellón A - Campus Principal', 'Dr. Juan Pérez Rodríguez', true),
                                                                          ('Facultad de Ciencias', 'Facultad enfocada en ciencias básicas y aplicadas', 'Pabellón B - Campus Principal', 'Dra. María González López', true),
                                                                          ('Facultad de Medicina', 'Facultad de ciencias de la salud y medicina', 'Pabellón C - Campus Salud', 'Dr. Carlos Sánchez Torres', true),
                                                                          ('Facultad de Derecho', 'Facultad de ciencias jurídicas y sociales', 'Pabellón D - Campus Central', 'Dr. Roberto Díaz Martínez', true),
                                                                          ('Facultad de Educación', 'Facultad de ciencias de la educación', 'Pabellón E - Campus Norte', 'Dra. Ana Fernández Silva', true);

-- Insertar Carreras de ejemplo para Facultad de Ingeniería
INSERT INTO carrera (facultad_id, nombre, descripcion, duracion_semestres, titulo_otorgado, activo) VALUES
                                                                                                        (1, 'Ingeniería de Sistemas', 'Carrera profesional enfocada en el desarrollo de software y sistemas de información', 10, 'Ingeniero de Sistemas', true),
                                                                                                        (1, 'Ingeniería Industrial', 'Carrera profesional enfocada en la optimización de procesos industriales', 10, 'Ingeniero Industrial', true),
                                                                                                        (1, 'Ingeniería Civil', 'Carrera profesional enfocada en diseño y construcción de infraestructura', 10, 'Ingeniero Civil', true),
                                                                                                        (1, 'Ingeniería Electrónica', 'Carrera profesional enfocada en electrónica y telecomunicaciones', 10, 'Ingeniero Electrónico', true);

-- Insertar Carreras de ejemplo para Facultad de Ciencias
INSERT INTO carrera (facultad_id, nombre, descripcion, duracion_semestres, titulo_otorgado, activo) VALUES
                                                                                                        (2, 'Matemáticas', 'Carrera profesional enfocada en matemática pura y aplicada', 10, 'Licenciado en Matemáticas', true),
                                                                                                        (2, 'Física', 'Carrera profesional enfocada en física teórica y experimental', 10, 'Licenciado en Física', true),
                                                                                                        (2, 'Química', 'Carrera profesional enfocada en química y procesos químicos', 10, 'Licenciado en Química', true);

-- Insertar Carreras de ejemplo para Facultad de Medicina
INSERT INTO carrera (facultad_id, nombre, descripcion, duracion_semestres, titulo_otorgado, activo) VALUES
                                                                                                        (3, 'Medicina Humana', 'Carrera profesional enfocada en ciencias médicas', 14, 'Médico Cirujano', true),
                                                                                                        (3, 'Enfermería', 'Carrera profesional enfocada en cuidados de enfermería', 10, 'Licenciado en Enfermería', true);

-- Insertar Carreras de ejemplo para Facultad de Derecho
INSERT INTO carrera (facultad_id, nombre, descripcion, duracion_semestres, titulo_otorgado, activo) VALUES
    (4, 'Derecho', 'Carrera profesional enfocada en ciencias jurídicas', 10, 'Abogado', true);

-- Insertar Carreras de ejemplo para Facultad de Educación
INSERT INTO carrera (facultad_id, nombre, descripcion, duracion_semestres, titulo_otorgado, activo) VALUES
                                                                                                        (5, 'Educación Primaria', 'Carrera profesional enfocada en educación inicial y primaria', 10, 'Licenciado en Educación Primaria', true),
                                                                                                        (5, 'Educación Secundaria', 'Carrera profesional enfocada en educación secundaria', 10, 'Licenciado en Educación Secundaria', true);