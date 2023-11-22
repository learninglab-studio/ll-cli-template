---
tags: resource, codeLab
---
# codeLab database resource

## relational databases: some basics
* organizes data into relations or different tables of data
* each table in a database are made up of:
    * rows: instances of a given entity (things that share a condition of some kind)
    * columns: attributes of each entity (things that describe an entity in particular)
* unique values: value that doesn't show up in any other row in a column
    * can also be used as keys
    * used to refer to one specific row or record
* keys
    * primary keys can help to access a specific record 
    * synthetic or surrogate key: used to make sure each record is unique (when other values might otherwise be the same - like people names)
    * composite key: using two or more fields together as a key
    * foreign key: when a primary key from one table is referenced in another
* no columns should contain plurals! 
    * the purpose of a relational database is to allow for a single item to be related to multiple other items at once. If an item in your database can be connected to multiple things, each of those things should have their own unique identifier. 
        * For example, say you're building a database with an aim to analyze the use of office space in Harvard Square in the post-pandemic area. You might start by assigning a unique ID to each building, then a unique ID to each office space within that building, then a unique ID to each business which occupies those individual office spaces. If any of those businesses offers more than one service, you wouldn't have a column on the "businesses" table called "services," you would want to create a new table called "services," where each service would have its own unique ID, then connect them with foreign_keys on a separate "business_services" table. This might seem tedious, but it leads to more efficient data processing. 

## database relationships
* one to many
    * most common
    * one piece of data in one table associated with multiple records in another table
    * you bring the primary key from one side of the relationship/in one table into each of the records that references it
* many to many
    * create a linking table that contains multiple primary keys from other tables
* one to one
    * associates one record on one table with only one record on another table

## transactions: ACID!
Data has to remain accurate! This is why a transaction should follow the ACID model:
* atomic: pieces of the transaction cannot be separated out
* consistent: whatever transaction does, it leaves database in valid/consistent state
* isolated: while transaction is happening, data can't be changed at all
* durable: info we change in transaction gets written to the database
 
Different database management systems have different ways of ensuring that data remains accurate whenever we perform a task, but they are all capable of using the ACID system to do this.

## database queries
* SQL: Structured Query Language
    * lets us interact with our data
    * lets us manage the database itself (modifying tables, controlling access to tables, etc.)
* ask for the fields you want info from
* specify the tables where the info is contained
* we can specify how display and sort as well
* common to see keywords written in uppercase (SELECT, FROM, etc.)
* JOIN statements are useful to learn for data analysis

## conventional databases

### Microsoft SQL Server (MSSQL)
[MSSQL](https://www.microsoft.com/en-us/sql-server) is Microsoft's in-house data management software and uses a variant on the SQL language called T-SQL (Transact-SQL). This software is only available on Microsoft machines, on Mac or Linux via Microsoft Azure, or on a Microsoft partition. 

### MySQL 
The Mac answer to MSSQL. [MySQL](https://www.mysql.com/) and their suite of products are useful, but can feel unintuitive and use an outdated version of SQL (at the time of writing).

One benefit of MySQL is that it does come with its own GUI (Graphic User Interface), making the interaction between the database and the GUI more seamless. 

### PostgreSQL
[PostgreSQL](https:/www.postgresql.org/about/) (or just Postgres) is an extremely popular database creation and management program. Favored by many software developers, Postgres also boasts the best GIS data handling, making it the industry standard for any database project dealing with map components. 

Postgres does not come with its own out-of-the-box GUI and many developers prefer to simply use the CLI to interact with it. But for those who like to visualize their data and the database structure, [Postico](https://eggerapps.at/postico2/) pairs well with Postgres.

### supabase
Supabase is an open-source relational postgres database that integrates with Next.js and Vercel. Supabase provides allows you to upload csv files or manually input data as you create custom tables for your backend data. You can also use their SQL editor to send queries to your database, and Supabase has a handful of SQL templates that you can use to issue different SQL calls to your bases. 

### mongoDB

## tutorials

* [database foundations](https://www.lynda.com/SQL-tutorials/Programming-Foundations-Databases/784293-2.html)
* [w3schools](https://www.w3schools.com/sql/default.asp)
* [Codecademy](https://www.codecademy.com/)

## some useful links
* [supabase starter](https://vercel.com/templates/next.js/supabase)
* [mongoDB starter](https://vercel.com/templates/next.js/mongodb-starter)
* [next.js prisma postgres starter](https://vercel.com/templates/next.js/prisma-postgres-auth-starter)
* [vercel postgres](https://vercel.com/docs/storage/vercel-postgres)