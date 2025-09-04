-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema the_rewind_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema the_rewind_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `the_rewind_db` DEFAULT CHARACTER SET utf8 ;
USE `the_rewind_db` ;

-- -----------------------------------------------------
-- Table `the_rewind_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `the_rewind_db`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `the_rewind_db`.`movies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `the_rewind_db`.`movies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `genre` VARCHAR(45) NOT NULL,
  `release_date` DATE NOT NULL,
  `description` TEXT(300) NOT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_movies_users_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_movies_users`
    FOREIGN KEY (`user_id`)
    REFERENCES `the_rewind_db`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `the_rewind_db`.`ratings`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `the_rewind_db`.`ratings` (
  `user_id` INT NOT NULL,
  `movie_id` INT NOT NULL,
  `rating` INT NOT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`, `movie_id`),
  INDEX `fk_users_has_movies_movies1_idx` (`movie_id` ASC) VISIBLE,
  INDEX `fk_users_has_movies_users1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_has_movies_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `the_rewind_db`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_movies_movies1`
    FOREIGN KEY (`movie_id`)
    REFERENCES `the_rewind_db`.`movies` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
