CREATE DATABASE carnaval2023_db

CREATE TABLE activities(
    id SERIAL PRIMARY KEY,
    entity VARCHAR(255) UNIQUE,
    sport INTEGER,
    cultural INTEGER,
    recreational INTEGER,
    ecological INTEGER,
    formative INTEGER,
    preventive INTEGER,
);