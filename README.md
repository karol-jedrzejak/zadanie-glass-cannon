# Zadanie Glass Cannon

## Uruchomienie

Domyślnie w pliku ".env" wybrana jest baza danych sqlite (baza danych w pliku). Po pobraniu wchodzimy w folder z projektem i uruchamiamy kolejno komendy:

```
npm instal
composer install

npm run dev
php artisan serve
```

W przypadku gdy mamy lokalną bazę danych (Xampp, docker itp) możemy usnąć plik ".env" i użyć pliku ".env.mysql" zmieniąjąc jego nazwę na ".env". W tym przypadku po uruchomieniu komendy "composer install" uruchamiamy 2 komendy poniżej które utworzą bazę tabele i dane (pry komendzie php artisan migrate zatwierdzamy utworzenie nowej bazy danych).

```
php artisan migrate
php artisan db:seed
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
