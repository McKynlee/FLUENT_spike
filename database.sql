
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "item" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (80) NOT NULL,
    "image_url" VARCHAR (2083),
    "user_id" INT REFERENCES "user"
);


INSERT INTO "user" ("username", "password")
VALUES 
    -- petLover76 / unicorn123
    -- admin / topSecret
    ('fowsia', '$2a$10$s90NWQOLD96j9EogiBa3gOG/OKb9UKVE53K4i5qWPra0Jeg0pp51e'),