-- 创建数据库
CREATE SCHEMA `gp16` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;

-- 创建表
CREATE TABLE `gp16`.`student` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `address` VARCHAR(45) NULL,
  `age` INT NULL,
  PRIMARY KEY (`id`)
);

-- crud (create retrive update delete)
-- 添加数据
INSERT INTO student (name,address,age) VALUES ('刘慧慧','北京',20);
INSERT INTO student (name,address,age) VALUES ('刘夏夏','北京',21);
INSERT INTO student (name,address,age) VALUES ('张恒川','上海',25);

-- 查询
SELECT * FROM student;
SELECT * FROM student LIMIT 1,3;
SELECT * FROM student,project WHERE student.id = project.uid ;
SELECT s.name ,p.name, p.desc FROM
student as s ,project as p  WHERE s.id = p.uid ;
SELECT s.name as sname ,p.name as pname, p.desc FROM student as s ,project as p  WHERE s.id = p.uid ;

-- 更新
UPDATE student set age = 23 WHERE id =1;

-- 删除
DELETE FROM student WHERE id = 1;

ALTER user 'root'@'localhost' identified WITH mysql_native_password BY 'jsvue7529';
SHOW VARIABLES LIKE 'validate_password%';
SET GLOBAL validate_password.policy=LOW;
flush privileges;
