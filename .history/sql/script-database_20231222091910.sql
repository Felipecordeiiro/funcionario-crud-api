CREATE TABLE funcionario (
  userId int(5) NOT NULL AUTO_INCREMET,
  userName varchar(240) NOT NULL,
  email varchar(240) NOT NULL,
  password varchar(10) NOT NULL,
)

CREATE TABLE estoque (
  itemId int(5) NOT NULL AUTO_INCREMET,
  quantity varchar(240) NOT NULL,
  email varchar(240) NOT NULL,
  password varchar(10) NOT NULL,

  itemId, quantity, group, description, CPF, warehouse, comment
)