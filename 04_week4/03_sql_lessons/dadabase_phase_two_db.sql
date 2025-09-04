-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema dadabase_phase_two_db
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `dadabase_phase_two_db` ;

-- -----------------------------------------------------
-- Schema dadabase_phase_two_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dadabase_phase_two_db` DEFAULT CHARACTER SET utf8 ;
USE `dadabase_phase_two_db` ;

-- -----------------------------------------------------
-- Table `dadabase_phase_two_db`.`dads`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dadabase_phase_two_db`.`dads` (
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
-- Data for table `dadabase_two_db`.`dads`
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
-- Table `dadabase_phase_two_db`.`jokes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dadabase_phase_two_db`.`jokes` (
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
    REFERENCES `dadabase_phase_two_db`.`dads` (`id`)
    ON DELETE NO ACTION   -- Keep as NO ACTION for initial teaching of RESTRICT
    ON UPDATE NO ACTION)  -- Keep as NO ACTION for initial teaching
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Data for table `dadabase_phase_two_db`.`jokes`
-- -----------------------------------------------------
-- NOTE: dad_id values correspond to the order of dads inserted above (1-12)
-- Omar Khan (ID: 1), Owen Taylor (ID: 2), Maria Rodriguez (ID: 3), Kwame Nkrumah (ID: 4)
-- Kevin Peterson (ID: 5), Chen Wei (ID: 6), David Goldstein (ID: 7), Dania Hassan (ID: 8)
-- Lucas Silva (ID: 9), Laura Chen (ID: 10), Javier Morales (ID: 11), Jyoti Singh (ID: 12)

INSERT INTO `jokes` (`setup`, `punchline`, `dad_id`) VALUES
('Why don''t scientists trust atoms?', 'Because they make up everything!', 1), -- Omar Khan
('What do you call a fake noodle?', 'An impasta.', 3), -- Maria Rodriguez
('Why did the scarecrow win an award?', 'Because he was outstanding in his field!', 4), -- Kwame Nkrumah
('How does a moon get his haircut?', 'Eclipse it.', 5), -- Kevin Peterson
('What do you call a boomerang that won''t come back?', 'A stick.', 6), -- Chen Wei
('I told my wife she was drawing her eyebrows too high.', 'She looked surprised.', 7), -- David Goldstein
('Why don''t skeletons fight each other?', 'They don''t have the guts.', 8), -- Dania Hassan
('What do you call a lazy kangaroo?', 'Pouch potato.', 1), -- Omar Khan
('Did you hear about the restaurant on the moon?', 'Great food, no atmosphere.', 3), -- Maria Rodriguez
('Why did the bicycle fall over?', 'Because it was two-tired.', 4), -- Kwame Nkrumah
('What''s orange and sounds like a parrot?', 'A carrot.', 5), -- Kevin Peterson
('What do you call a sad strawberry?', 'A blueberry.', 6), -- Chen Wei
('Why did the coffee file a police report?', 'It got mugged.', 7); -- David Goldstein


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;