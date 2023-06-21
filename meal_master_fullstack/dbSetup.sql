USE MealMaster;

CREATE TABLE
    IF NOT EXISTS accounts(
        id VARCHAR(255) NOT NULL primary key COMMENT 'primary key',
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
        name varchar(255) COMMENT 'User Name',
        email varchar(255) COMMENT 'User Email',
        picture varchar(255) COMMENT 'User Picture'
    ) default charset utf8 COMMENT '';

CREATE TABLE
    IF NOT EXISTS recipes(
        id VARCHAR(255) NOT NULL primary key COMMENT 'primary key',
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
        title TEXT NOT NULL COMMENT 'Recipe Title',
        subtitle TEXT COMMENT 'recipe Subtitle',
        tags TEXT NOT NULL,
        cuisine TEXT NOT NULL,
        imgUrl TEXT,
        creatorId varchar(255),
        FOREIGN KEY (creatorId) REFERENCES accounts(id) ON DELETE CASCADE
    ) default charset utf8 COMMENT '';

DROP TABLE recipes;

CREATE TABLE
    IF NOT EXISTS ingredients(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        quantity VARCHAR(100) NOT NULL,
        recipeId INT NOT NULL,
        FOREIGN KEY (recipeId) REFERENCES recipes(id) ON DELETE CASCADE
    ) default charset utf8 COMMENT '';

DROP TABLE ingredients;

CREATE TABLE
    IF NOT EXISTS shoppingList (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        quantity VARCHAR(100) NOT NULL,
        notes VARCHAR(500) NOT NULL,
        isChecked BOOLEAN NOT NULL DEFAULT false,
        category VARCHAR(100) NOT NULL,
        creatorId VARCHAR(255),
        FOREIGN KEY (creatorId) REFERENCES accounts(id) ON DELETE CASCADE
    ) DEFAULT CHARSET utf8 COMMENT '';