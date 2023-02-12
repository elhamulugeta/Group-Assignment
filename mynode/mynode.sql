create DATABASE mynode;
use mynode;

CREATE TABLE users (
  id int(11) NOT NULL,
  name varchar COLLATE utf8mb4_unicode_ci NOT NULL,
  email varchar COLLATE utf8mb4_unicode_ci NOT NULL,
  password varchar COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY id AUTO_INCREMENT,
  
 )
