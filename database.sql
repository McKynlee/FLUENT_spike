-- DB name: 'auth_shelf'
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

INSERT INTO "user" ("username", "password")
VALUES ('butts', 'butts123!');

INSERT INTO "item" ("description", "image_url", "user_id")
VALUES ('A kiwi banana!', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5yXMQqudjAm72kQvfeLgLY5Zy7BRmO-uYA&usqp=CAU', 1);

