-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema dadabase_phase_one_db
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `dadabase_phase_one_db` ;

-- -----------------------------------------------------
-- Schema dadabase_phase_one_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dadabase_phase_one_db` DEFAULT CHARACTER SET utf8 ;
USE `dadabase_phase_one_db` ;

-- -----------------------------------------------------
-- Table `dadabase_phase_one_db`.`dads`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dadabase_phase_one_db`.`dads` (
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
-- Data for table `dadabase_phase_one_db`.`dads`
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


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;