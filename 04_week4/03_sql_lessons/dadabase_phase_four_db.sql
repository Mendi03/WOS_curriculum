-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema dadabase_phase_four_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema dadabase_phase_four_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dadabase_phase_four_db` DEFAULT CHARACTER SET utf8 ;
USE `dadabase_phase_four_db` ;

-- -----------------------------------------------------
-- Table `dadabase_phase_four_db`.`dads`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dadabase_phase_four_db`.`dads` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `age` INT NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(60) NOT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Data for table `dadabase_four_db`.`dads`
-- -----------------------------------------------------
INSERT INTO `dads` (`name`, `age`, `email`, `password`) VALUES
('Omar Khan', 48, 'omar.khan@example.com', '$2a$10$abcdefghijklmnopqrstuvwxyzabcdefghi.J/A.'),
('Owen Taylor', 48, 'owen.t@mail.org', '$2a$10$abcdefghijklmnopqrstuvwxyzabcdefghi.K/B.'), -- Starts with 'O'
('Maria Rodriguez', 42, 'maria.r@web.net', '$2a$10$abcdefghijklmnopqrstuvwxyzabcdefghi.L/C.'),
('Kwame Nkrumah', 39, 'kwame.n@example.com', '$2a$10$abcdefghijklmnopqrstuvwxyzabcdefghi.M/D.'),
('Kevin Peterson', 51, 'kevin.p@corp.info', '$2a$10$abcdefghijklmnopqrstuvwxyzabcdefghi.N/E.'), -- Starts with 'K'
('Chen Wei', 60, 'chen.w@email.co', '$2a$10$abcdefghijklmnopqrstuvwxyzabcdefghi.O/F.'),
('David Goldstein', 47, 'david.g@example.com', '$2a$10$abcdefghijklmnopqrstuvwxyzabcdefghi.P/G.'),
('Dania Hassan', 40, 'dania.h@mail.org', '$2a$10$abcdefghijklmnopqrstuvwxyzabcdefghi.Q/H.'), -- Starts with 'D'
('Lucas Silva', 44, 'lucas.s@web.net', '$2a$10$abcdefghijklmnopqrstuvwxyzabcdefghi.R/I.'),
('Laura Chen', 53, 'laura.c@corp.info', '$2a$10$abcdefghijklmnopqrstuvwxyzabcdefghi.S/J.'), -- Starts with 'L'
('Javier Morales', 40, 'javier.m@email.co', '$2a$10$abcdefghijklmnopqrstuvwxyzabcdefghi.T/K.'),
('Jyoti Singh', 53, 'jyoti.s@example.com', '$2a$10$abcdefghijklmnopqrstuvwxyzabcdefghi.U/L.'); -- Starts with 'J'


-- -----------------------------------------------------
-- Table `dadabase_phase_four_db`.`jokes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dadabase_phase_four_db`.`jokes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `setup` VARCHAR(255) NOT NULL,
  `punchline` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `dad_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_jokes_dads_idx` (`dad_id` ASC) VISIBLE,
  CONSTRAINT `fk_jokes_dads`
    FOREIGN KEY (`dad_id`)
    REFERENCES `dadabase_phase_four_db`.`dads` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Data for table `dadabase_phase_four_db`.`jokes`
-- -----------------------------------------------------
-- NOTE: dad_id values correspond to the order of dads inserted above (1-12)
-- Omar Khan (ID: 1), Owen Taylor (ID: 2), Maria Rodriguez (ID: 3), Kwame Nkrumah (ID: 4)
-- Kevin Peterson (ID: 5), Chen Wei (ID: 6), David Goldstein (ID: 7), Dania Hassan (ID: 8)
-- Lucas Silva (ID: 9), Laura Chen (ID: 10), Javier Morales (ID: 11), Jyoti Singh (ID: 12)

INSERT INTO `jokes` (`setup`, `punchline`, `dad_id`) VALUES
('Why don''t scientists trust atoms?', 'Because they make up everything!', 1), -- Omar Khan (Joke ID: 1)
('What do you call a fake noodle?', 'An impasta.', 3), -- Maria Rodriguez (Joke ID: 2)
('Why did the scarecrow win an award?', 'Because he was outstanding in his field!', 4), -- Kwame Nkrumah (Joke ID: 3)
('How does a moon get his haircut?', 'Eclipse it.', 5), -- Kevin Peterson (Joke ID: 4)
('What do you call a boomerang that won''t come back?', 'A stick.', 6), -- Chen Wei (Joke ID: 5)
('I told my wife she was drawing her eyebrows too high.', 'She looked surprised.', 7), -- David Goldstein (Joke ID: 6)
('Why don''t skeletons fight each other?', 'They don''t have the guts.', 8), -- Dania Hassan (Joke ID: 7)
('What do you call a lazy kangaroo?', 'Pouch potato.', 1), -- Omar Khan (Joke ID: 8)
('Did you hear about the restaurant on the moon?', 'Great food, no atmosphere.', 3), -- Maria Rodriguez (Joke ID: 9)
('Why did the bicycle fall over?', 'Because it was two-tired.', 4), -- Kwame Nkrumah (Joke ID: 10)
('What''s orange and sounds like a parrot?', 'A carrot.', 5), -- Kevin Peterson (Joke ID: 11)
('What do you call a sad strawberry?', 'A blueberry.', 6), -- Chen Wei (Joke ID: 12)
('Why did the coffee file a police report?', 'It got mugged.', 7); -- David Goldstein (Joke ID: 13)


-- -----------------------------------------------------
-- Table `dadabase_phase_four_db`.`eyerolls`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dadabase_phase_four_db`.`eyerolls` (
  `rating` INT NOT NULL,
  `dad_id` INT NOT NULL,
  `joke_id` INT NOT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Added updated_at
  INDEX `fk_eyerolls_dads1_idx` (`dad_id` ASC) VISIBLE,
  INDEX `fk_eyerolls_jokes1_idx` (`joke_id` ASC) VISIBLE,
  PRIMARY KEY (`dad_id`, `joke_id`),
  CONSTRAINT `fk_eyerolls_dads1`
    FOREIGN KEY (`dad_id`)
    REFERENCES `dadabase_phase_four_db`.`dads` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_eyerolls_jokes1`
    FOREIGN KEY (`joke_id`)
    REFERENCES `dadabase_phase_four_db`.`jokes` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Data for table `dadabase_phase_four_db`.`eyerolls`
-- -----------------------------------------------------
-- NOTE: dad_id values correspond to dads, joke_id values to jokes
-- Omar Khan (ID: 1), Owen Taylor (ID: 2), Maria Rodriguez (ID: 3), Kwame Nkrumah (ID: 4)
-- Kevin Peterson (ID: 5), Chen Wei (ID: 6), David Goldstein (ID: 7), Dania Hassan (ID: 8)
-- Lucas Silva (ID: 9), Laura Chen (ID: 10), Javier Morales (ID: 11), Jyoti Singh (ID: 12)

-- Jokes (IDs 1-13)
-- Jokes that WILL have eyerolls: 1, 3, 4, 5, 6, 7, 8, 13, 2, 9 (some will get multiple eyerolls)
-- Jokes that will NOT have eyerolls (for LEFT JOIN demo): 10, 11, 12 (Kwame's 'bicycle', Kevin's 'carrot', Chen's 'sad strawberry')

-- Dads who WILL give eyerolls: 1, 2, 3, 4, 5, 6, 7, 8, 11, 12
-- Dads who will NOT give eyerolls (for LEFT JOIN demo): 9 (Lucas Silva), 10 (Laura Chen)

INSERT INTO `eyerolls` (`rating`, `dad_id`, `joke_id`) VALUES
(4, 1, 1),  -- Omar Khan gives 4 eyerolls to 'Why don't scientists trust atoms?'
(3, 3, 1),  -- Maria Rodriguez gives 3 eyerolls to joke 1
(2, 4, 3),  -- Kwame Nkrumah gives 2 eyerolls to 'Why did the scarecrow win an award?'
(4, 5, 4),  -- Kevin Peterson gives 4 eyerolls to 'How does a moon get his haircut?'
(1, 6, 5),  -- Chen Wei gives 1 eyeroll to 'What do you call a boomerang that won't come back?'
(3, 7, 6),  -- David Goldstein gives 3 eyerolls to 'I told my wife she was drawing her eyebrows too high.'
(4, 8, 7),  -- Dania Hassan gives 4 eyerolls to 'Why don't skeletons fight each other?'
(2, 1, 8),  -- Omar Khan gives 2 eyerolls to 'What do you call a lazy kangaroo?'
(3, 7, 8),  -- David Goldstein gives 3 eyerolls to joke 8
(4, 11, 13), -- Javier Morales gives 4 eyerolls to 'Why did the coffee file a police report?'
(1, 2, 9),  -- Owen Taylor gives 1 eyeroll to 'Did you hear about the restaurant on the moon?'
(2, 12, 2);  -- Jyoti Singh gives 2 eyerolls to 'What do you call a fake noodle?'


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;