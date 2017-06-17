#### numbers

bigint	-2^63 (-9,223,372,036,854,775,808) to 2^63-1 (9,223,372,036,854,775,807)	8 Bytes
int	-2^31 (-2,147,483,648) to 2^31-1 (2,147,483,647)	4 Bytes
smallint	-2^15 (-32,768) to 2^15-1 (32,767)	2 Bytes
tinyint	0 to 255	1 Byte

#### float and real

float	- 1.79E + 308 to -2.23E-308, 0 and 2.23E-308 to 1.79E+308	Depends on the value of n
real	- 3.40E + 38 to -1.18E - 38, 0 and 1.18E - 38 to 3.40E + 38	4 Bytes

#### money

money	-922,337,203,685,477.5808 to 922,337,203,685,477.5807 (-922,337,203,685,477.58
to 922,337,203,685,477.58 for Informatica. Informatica only supports two decimals, not four.)	8 bytes
smallmoney	- 214,748.3648 to 214,748.3647

#### character

char [ ( n ) ]
Fixed-length, non-Unicode string data. n defines the string length and must be a value from 1 through 8,000. The storage size is n bytes. The ISO synonym for char is character. +
varchar [ ( n | max ) ]
Variable-length, non-Unicode string data. n defines the string length and can be a value from 1 through 8,000. max indicates that the maximum storage size is 2^31-1 bytes (2 GB). The storage size is the actual length of the data entered + 2 bytes. The ISO synonyms for varchar are charvarying or charactervarying

BINARY(n)	Binary string. Fixed-length n
BOOLEAN	Stores TRUE or FALSE values
VARBINARY(n) or
BINARY VARYING(n)	Binary string. Variable length. Maximum length n
INTEGER(p)	Integer numerical (no decimal). Precision p
DECIMAL(p,s)	Exact numerical, precision p, scale s. Example: decimal(5,2) is a number that has 3 digits before the decimal and 2 digits after the decimal
NUMERIC(p,s)	Exact numerical, precision p, scale s. (Same as DECIMAL)
FLOAT(p)	Approximate numerical, mantissa precision p. A floating number in base 10 exponential notation. The size argument for this type consists of a single number specifying the minimum precision
REAL	Approximate numerical, mantissa precision 7
FLOAT	Approximate numerical, mantissa precision 16
DOUBLE PRECISION	Approximate numerical, mantissa precision 16
DATE	Stores year, month, and day values
TIME	Stores hour, minute, and second values
TIMESTAMP	Stores year, month, day, hour, minute, and second values
INTERVAL	Composed of a number of integer fields, representing a period of time, depending on the type of interval
ARRAY	A set-length and ordered collection of elements
MULTISET	A variable-length and unordered collection of elements
XML	Stores XML data
