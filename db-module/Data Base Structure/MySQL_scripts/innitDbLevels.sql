INSERT INTO `level` (level_number,difficulty,total_number_of_notes,max_possible_score) VALUES (1,1,0,0);
UPDATE `level` SET total_number_of_notes = 69 WHERE level_number=1;
INSERT INTO `level` (level_number,difficulty,total_number_of_notes,max_possible_score) VALUES (2,1,0,0);
UPDATE `level` SET total_number_of_notes = 885 WHERE level_number=2;
INSERT INTO `level` (level_number,difficulty,total_number_of_notes,max_possible_score) VALUES (3,1,0,0);
UPDATE `level` SET total_number_of_notes = 885 WHERE level_number=3;

INSERT INTO `user` (id,class,username,pwd,levels_unlocked) VALUES (1,"admin","superuser","1234",3) ;