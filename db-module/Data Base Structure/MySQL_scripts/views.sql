
DROP VIEW IF EXISTS max_score_1;
DROP VIEW IF EXISTS max_score_2;
DROP VIEW IF EXISTS max_score_3;
# View top scorers of level 1
CREATE VIEW max_score_1 AS
    SELECT 
        `user`.username,
        game.score,game.level_id
    FROM
        game 
	INNER JOIN `user` ON game.user_id=`user`.id
    #change to 1
	WHERE level_id = 2
	ORDER BY score DESC LIMIT 10;
    
# View top scorers of level 2
CREATE VIEW max_score_2 AS
    SELECT 
        `user`.username,
        game.score,game.level_id
    FROM
        game 
	INNER JOIN `user` ON game.user_id=`user`.id
	WHERE level_id = 2
	ORDER BY score DESC LIMIT 10;

# View top scorers of level 3
CREATE VIEW max_score_3 AS
    SELECT 
        `user`.username,
        game.score,game.date_played,game.level_id
    FROM
        game 
	INNER JOIN `user` ON game.user_id=`user`.id
	WHERE level_id = 3
	ORDER BY score DESC LIMIT 10;


#------------PRUEBAS--------------
#SELECT * FROM max_score_1;
#SELECT * FROM max_score_2;
#SELECT * FROM max_score_3;
