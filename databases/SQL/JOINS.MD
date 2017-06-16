### Cross join

```sql
SELECT albums.name, albums.year, artists.name FROM albums, artists
```

One way to query multiple tables is to write a SELECT statement with multiple table names separated by a comma.
This is also known as a cross join. Here, albums and artists are the different tables we are querying.

When querying more than one table, column names need to be specified by table_name.column_name.
Here, the result set includes the name and year columns from the albums table and the name column from the artists table.


### Inner Join

```sql
SELECT
  *
FROM
  albums
JOIN artists ON
  albums.artist_id = artists.id;
In SQL, joins are used to combine rows from two or more tables. The most common type of join in SQL is an inner join.
```

An inner join will combine rows from different tables if the join condition is true. Let's look at the syntax to see how it works.


### Outer join

```sql
SELECT
  *
FROM
  albums
LEFT JOIN artists ON
  albums.artist_id = artists.id;
```

Outer joins also combine rows from two or more tables, but unlike inner joins, they do not require the join condition to be met. Instead, every row in the left table is returned in the result set, and if the join condition is not met, then NULL values are used to fill in the columns from the right table

### AS

```sql
SELECT
  albums.name AS 'Album',
  albums.year,
  artists.name AS 'Artist'
FROM
  albums
JOIN artists ON
  albums.artist_id = artists.id
WHERE
  albums.year > 1980;
AS is a keyword in SQL that allows you to rename a column or table using an alias
```
