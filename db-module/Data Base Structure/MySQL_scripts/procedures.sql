DROP PROCEDURE IF EXISTS class_count;
DROP PROCEDURE IF EXISTS great_games;

# Procedure to check how many students are in a class 
DELIMITER //
CREATE PROCEDURE class_count (IN teacher CHAR(25), OUT count INT)
       BEGIN
         SELECT COUNT(*) INTO count FROM `user`
         WHERE class = teacher;
       END//
DELIMITER ;

# Procedure to check how many games have gone above 80% in a level
DELIMITER //
CREATE PROCEDURE great_games (IN level_number INT, OUT count INT)
       BEGIN
         SELECT COUNT(*) INTO count FROM `game`
         INNER JOIN `level` ON game.level_id=level_number
         WHERE game.score > `level`.max_possible_score * 0.8;
       END//
DELIMITER ;

#-----------PRUEBAS--------------------
#CALL class_count('luis', @class_count);
#SELECT @class_count;

#CALL great_games(2, @great_games_count);
#SELECT @great_games_count;