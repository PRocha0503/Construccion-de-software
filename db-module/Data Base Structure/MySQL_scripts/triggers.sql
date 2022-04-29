DROP TRIGGER IF EXISTS upd_difficulty;
DROP TRIGGER IF EXISTS upd_max_p_score;

DELIMITER //
CREATE TRIGGER upd_difficulty BEFORE UPDATE ON `level`
       FOR EACH ROW
       BEGIN
           IF NEW.total_number_of_notes > 400 THEN
               SET NEW.difficulty = 3;
           ELSEIF NEW.total_number_of_notes > 200 THEN
               SET NEW.difficulty = 2;
			ELSE SET NEW.difficulty = 1;
           END IF;
       END;//
DELIMITER ;

DELIMITER //
CREATE TRIGGER upd_max_p_score BEFORE UPDATE ON `level`
       FOR EACH ROW
       BEGIN
		SET NEW.max_possible_score = IF(NEW.total_number_of_notes > 50,
									IF(NEW.total_number_of_notes > 150,(250*50)+((NEW.total_number_of_notes-150)*3*50),50*50 +(NEW.total_number_of_notes-50)*2*50)
                                    ,NEW.total_number_of_notes * 50);
       END;//
DELIMITER ;

#------------PRUEBAS--------------
#SELECT * FROM `level` ORDER BY level_number;
#UPDATE `level` SET total_number_of_notes = 201 WHERE level_number = 2;
#SELECT * FROM `level` ORDER BY level_number;