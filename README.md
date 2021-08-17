# etl-demo-xero

## Description

The purpose of this ETL is to present a use case of streaming/loading JSON records/data directly into a relational database with a simple microservice.
The thought process for this use case starts with a very simple requirement of being able to load small to medium data(not low latency) from an API store into a relational database with minimal integration points and lowest possible complexity. A containerization mechanism is used for this microservice to enhance the flexibility of being able to deploy it in multiple/hybrid environments. The data is posted in a Postgresql database in a binary JSON format enabling end users/consumers to query the records with SQL and use it for analysis/insights/reporting. 

## ETL Diagram
![ETL Diagram](etl.drawio.svg)

## Usage

Clone this project and from the project root directory execute the following :

```
docker-compose up -d
```
Once the images are up and running , exec into the PostgreSQL container and execute the following :

```
psql --host=database --username=postgres --dbname=postgres
```

To check all relations , execute the following command :

```
postgres=# \d
          List of relations
 Schema |   Name   | Type  |  Owner   
--------+----------+-------+----------
 public | accounts | table | postgres
(1 row)
```

Check table entries :

```
postgres=# select * from accounts;
                                                                                      data                                    
                                                  
------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------
 [{"Currency": "Jordanian Dinar", "Nickname": "rerum", "AccountId": "06068017", "AccountType": "Joint", "AccountSubType": "Cre
dit"}]
 [{"Currency": "Gibraltar Pound", "Nickname": "repellendus", "AccountId": "86842566", "AccountType": "Personal", "AccountSubTy
pe": "Credit"}]
```
