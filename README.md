# Zadanie Glass Cannon

## Uruchomienie

Domyślnie w pliku ".env" wybrana jest baza danych sqlite (baza danych w pliku). W przypadku gdy mamy lokalną bazę danych (Xampp, docker itp) możemy usnąć plik ".env" i użyć pliku ".env.mysql" zmieniąjąc jego nazwę na ".env". Po pobraniu wchodzimy w folder z projektem i uruchamiamy kolejno komendy (po uruchmonieniu komendy migrate zatwierdzamy utworzenie nowego pliky klikając yes i zatwierdzając enterem):

```
npm instal
composer install

php artisan migrate
php artisan db:seed

npm run dev
php artisan serve
```

Strona będzie dostępna pod adresem

```
http://127.0.0.1:8000/
```

Przykładowy użytkownik

Login

```
test@test.com
```

Hasło

```
test
```
