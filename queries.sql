-- Veritabanı Sorguları

-- Posta kodu 1010 olan tüm müşterileri bulun
--SELECT * FROM Customers where PostalCode=1010;

-- id'si 11 olan tedarikçinin telefon numarasını bulun
--SELECT Phone FROM Suppliers where SupplierId=11;


-- Verilen ilk 10 siparişi, sipariş tarihine göre azalan şekilde listeleyin
--Select OrderDate from Orders desc limit 10;


-- Londra, Madrid veya Brezilya'da yaşayan tüm müşterileri bulun
--select * from Customers where city in ("London", "Madrid") or Country="Brazil"


-- "The Shire" için bir müşteri kaydı ekleyin, ilgili kişi adı "Bilbo Baggins", adres - "Bag End" içinde "1 Hobbit-Hole", posta kodu "111" ve ülke "Middle Earth"
--INSERT INTO CUSTOMERS(CustomerName, ContactName, Address, City, PostalCode, Country)
--VALUES ("The Shire", "Bilbo Baggins", "1 Hobbit-Hole", "Bag-End", "111", "Middle Earth");


-- Posta kodu "11122" olarak değişecek şekilde Bilbo Baggins kaydını güncelleyin
--UPDATE Customers set PostalCode="11122" Where ContactName="Bilbo Baggins"


-- (Zorlayıcı Görev) Müşteriler tablosunda kaç farklı şehrin saklandığını keşfetmek için bir sorgu bulun. Tekrarlar çift sayılmamalıdır



-- (Zorlayıcı Görev) 20 karakterden uzun adları olan tüm tedarikçileri bulun. Adın uzunluğunu almak için "length(SupplierName)" kullanabilirsiniz.