/*
Adicionar outras tabelas para referenciar o tipo de objeto do estoque: parafusos, teclados, chapas e etc. 
*/
CREATE TABLE `test`.`funcionario` (
  `userId` int(5) NOT NULL AUTO_INCREMET,
  `userName` varchar(240) NOT NULL,
  `email` varchar(240) NOT NULL,
  `password` varchar(10) NOT NULL,
) ENGINE = MyISAM;

CREATE TABLE `test`.`estoque` (
  `itemId` INT(5) NOT NULL AUTO_INCREMENT , 
  `quantity` INT(10) NOT NULL , 
  `group` VARCHAR(100) NOT NULL , 
  `description` TEXT NOT NULL , 
  `cpf` VARCHAR(100) NOT NULL , 
  `warehouse` VARCHAR(100) NOT NULL , 
  `comment` TEXT NOT NULL, 
  PRIMARY KEY (`itemId`)
) ENGINE = MyISAM;