use tp_agence_voyages;


DROP VIEW IF EXISTS client_resume;


CREATE VIEW clients_resume 
AS
SELECT * FROM clients;