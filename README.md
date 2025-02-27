# Zadanie Glass Cannon

## Uruchomienie

Do uruchomienia projektu niezbędna jest lokalna baza danych (Docker, Xammpp itd. z domyślnymi ustawieniami użytkownika). Po pobraniu wchodzimy w folder z projektem i uruchamiamy kolejno komendy:

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
